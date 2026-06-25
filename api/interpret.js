/* ============================================
   Vercel Serverless Function — /api/interpret
   Acts as a private proxy to DeepSeek. The API key
   is read from process.env.DEEPSEEK_API_KEY, never
   from the client. The response is streamed back
   as Server-Sent Events so the reading page keeps
   its real-time typing effect.
   ============================================ */

const { buildTarotPrompt } = require('../js/prompt.js');

module.exports = async function handler(req, res) {
  // CORS preflight (not strictly needed for same-origin, but harmless)
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const key = process.env.DEEPSEEK_API_KEY;
  if (!key) {
    return res.status(500).json({ error: 'Server is missing DEEPSEEK_API_KEY' });
  }

  const { question, cards, draws } = req.body || {};
  if (!Array.isArray(cards) || !Array.isArray(draws) || cards.length !== draws.length) {
    return res.status(400).json({ error: 'Invalid payload: cards and draws required' });
  }

  const prompt = buildTarotPrompt(question, cards, draws);

  // Forward to DeepSeek
  let upstream;
  try {
    upstream = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        stream: true,
        temperature: 0.85,
        max_tokens: 2200,
        response_format: { type: 'json_object' },
        messages: [
          {
            role: 'system',
            content: '你是牌灵，一位温柔的塔罗占卜师。你的回复严格遵循用户给出的 JSON 结构，不输出任何额外文字。'
          },
          { role: 'user', content: prompt }
        ]
      })
    });
  } catch (e) {
    return res.status(502).json({ error: 'Upstream fetch failed', detail: String(e) });
  }

  if (!upstream.ok || !upstream.body) {
    const text = await upstream.text().catch(() => '');
    return res.status(upstream.status || 502).json({
      error: 'Upstream error',
      detail: text.slice(0, 500)
    });
  }

  // Stream the SSE response back to the client, replacing the
  // upstream `data: {...}` payload with the raw content. The
  // browser side already knows how to parse SSE chunks.
  res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');

  const reader = upstream.body.getReader();
  const decoder = new TextDecoder('utf-8');

  try {
    // flush headers
    if (typeof res.flushHeaders === 'function') res.flushHeaders();

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      res.write(decoder.decode(value, { stream: true }));
    }
  } catch (e) {
    // Connection died mid-stream; nothing more we can do.
  } finally {
    res.end();
  }
};

// Allow up to 30s for the streamed DeepSeek response
module.exports.config = { maxDuration: 30 };
