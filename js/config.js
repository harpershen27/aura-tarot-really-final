/* ============================================
   Config — runtime settings only
   The DeepSeek API key is now stored in the
   serverless function (api/interpret.js) and
   read from process.env.DEEPSEEK_API_KEY on
   the server. The browser no longer holds it.
   ============================================ */

const CONFIG = {
  deepseek: {
    model:     'deepseek-chat',
    stream:    true,
    timeoutMs: 28000
  }
};
