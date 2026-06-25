/* ============================================
   App-level utilities and shared page bootstrap
   ============================================ */

function $(sel, ctx) { return (ctx || document).querySelector(sel); }
function $$(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

// Fisher–Yates shuffle (kept local in case cards.js isn't loaded yet)
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ------------------------------------------------------------
   Ornate card back — inline SVG
   Designed at 50x78 viewBox so it scales perfectly into the
   .deck-card element. Symmetric Victorian/Art-Nouveau filigree
   in gold over a deep amethyst field, with a five-pointed
   pentagram at the center.
   ------------------------------------------------------------ */
function cardBackSVG() {
  return `
<svg viewBox="0 0 50 78" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
  <defs>
    <radialGradient id="cardBg" cx="50%" cy="38%" r="65%">
      <stop offset="0%" stop-color="#3A1E5C"/>
      <stop offset="60%" stop-color="#1A0F2E"/>
      <stop offset="100%" stop-color="#0F0820"/>
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="50" height="78" fill="url(#cardBg)"/>

  <!-- Outer + inner frames -->
  <rect class="filigree" x="1.2" y="1.2" width="47.6" height="75.6" rx="1"/>
  <rect class="filigree" x="2.6" y="2.6" width="44.8" height="72.8" rx="0.8" stroke-width="0.4"/>
  <rect class="frame-soft" x="4" y="4" width="42" height="70" rx="0.5"/>

  <!-- Corner ornaments: 4 corners -->
  <g class="filigree" stroke-width="0.45">
    <!-- top-left -->
    <g transform="translate(6.2, 6.2)">
      <circle r="1.6"/>
      <circle r="0.45" class="filigree-fill"/>
      <path d="M -3 0 L 3 0 M 0 -3 L 0 3"/>
      <path d="M -2.2 -2.2 L 2.2 2.2 M -2.2 2.2 L 2.2 -2.2" stroke-width="0.3"/>
    </g>
    <!-- top-right -->
    <g transform="translate(43.8, 6.2)">
      <circle r="1.6"/>
      <circle r="0.45" class="filigree-fill"/>
      <path d="M -3 0 L 3 0 M 0 -3 L 0 3"/>
      <path d="M -2.2 -2.2 L 2.2 2.2 M -2.2 2.2 L 2.2 -2.2" stroke-width="0.3"/>
    </g>
    <!-- bottom-left -->
    <g transform="translate(6.2, 71.8)">
      <circle r="1.6"/>
      <circle r="0.45" class="filigree-fill"/>
      <path d="M -3 0 L 3 0 M 0 -3 L 0 3"/>
      <path d="M -2.2 -2.2 L 2.2 2.2 M -2.2 2.2 L 2.2 -2.2" stroke-width="0.3"/>
    </g>
    <!-- bottom-right -->
    <g transform="translate(43.8, 71.8)">
      <circle r="1.6"/>
      <circle r="0.45" class="filigree-fill"/>
      <path d="M -3 0 L 3 0 M 0 -3 L 0 3"/>
      <path d="M -2.2 -2.2 L 2.2 2.2 M -2.2 2.2 L 2.2 -2.2" stroke-width="0.3"/>
    </g>
  </g>

  <!-- Vertical "stems" between corners, with side medallions -->
  <g class="filigree" stroke-width="0.4">
    <line x1="6.2" y1="14" x2="6.2" y2="20"/>
    <line x1="6.2" y1="58" x2="6.2" y2="64"/>
    <line x1="43.8" y1="14" x2="43.8" y2="20"/>
    <line x1="43.8" y1="58" x2="43.8" y2="64"/>
    <circle cx="6.2" cy="39" r="1.2" fill="none"/>
    <circle cx="6.2" cy="39" r="0.35" class="filigree-fill"/>
    <circle cx="43.8" cy="39" r="1.2" fill="none"/>
    <circle cx="43.8" cy="39" r="0.35" class="filigree-fill"/>
  </g>

  <!-- Central pentagram, layered with two stars + a small mark -->
  <g transform="translate(25, 39)">
    <!-- Decorative outer ring -->
    <circle r="11" class="filigree" stroke-width="0.4"/>
    <circle r="9.2" class="frame-soft"/>
    <!-- Outer 5-pointed star (inverted) -->
    <polygon class="filigree" stroke-width="0.5"
      points="0,-8 1.9,-2.6 7.6,-2.5 3.0,0.6 4.7,6.1 0,2.7 -4.7,6.1 -3.0,0.6 -7.6,-2.5 -1.9,-2.6"/>
    <!-- Inner 5-pointed star, rotated 36° -->
    <polygon class="filigree" stroke-width="0.4"
      points="0,-4.2 1.25,-1.3 4.2,-1.3 1.7,0.4 2.6,3.4 0,1.5 -2.6,3.4 -1.7,0.4 -4.2,-1.3 -1.25,-1.3"
      transform="rotate(36)"/>
    <!-- Center dot -->
    <circle r="0.6" class="filigree-fill"/>
  </g>

  <!-- Top and bottom ornaments: small triple-dots and tiny diamonds -->
  <g class="filigree-fill">
    <circle cx="25" cy="13.5" r="0.45"/>
    <circle cx="21" cy="14" r="0.3"/>
    <circle cx="29" cy="14" r="0.3"/>
    <polygon points="25,11 26,13 25,15 24,13"/>
    <circle cx="25" cy="64.5" r="0.45"/>
    <circle cx="21" cy="64" r="0.3"/>
    <circle cx="29" cy="64" r="0.3"/>
    <polygon points="25,63 26,65 25,67 24,65"/>
  </g>
</svg>`;
}

// Ornate card back — image file (replaces the inline SVG)
function cardBackHTML() {
  return `<img class="card-back-img" src="assets/card-back.png" alt="" draggable="false">`;
}

// Build a single deck-card element with ornate filigree back
function buildDeckCard(card) {
  const el = document.createElement('div');
  el.className = 'deck-card';
  el.dataset.id = card.id;
  el.innerHTML = `<div class="face">${cardBackHTML()}</div>`;
  return el;
}

// Layout the full 78-card deck as a 3D ring inside the .ring container.
// Each card sits at rotateY(i * step) translateZ(radius).
function layoutRing(container, deck) {
  const N = deck.length;
  const step = 360 / N;
  deck.forEach((card, i) => {
    const el = buildDeckCard(card);
    el.style.transform =
      `rotateY(${i * step}deg) translateZ(var(--ring-radius))`;
    container.appendChild(el);
  });
  return { step, count: N };
}

// Page 1 — Question input page
function bootQuestionPage() {
  const ta = $('#question');
  const submit = $('#submit');
  const counter = $('#counter');

  // Always start with an empty input
  ta.value = '';
  updateCounter();
  ta.focus();

  ta.addEventListener('input', updateCounter);
  ta.addEventListener('keydown', (e) => {
    // Submit on Ctrl/Cmd + Enter
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      submitQuestion();
    }
  });
  submit.addEventListener('click', submitQuestion);

  function updateCounter() {
    const n = ta.value.length;
    counter.textContent = `${n} / 200`;
    counter.style.color = n > 180 ? 'var(--gold-light)' : 'var(--text-muted)';
  }

  function submitQuestion() {
    const q = (ta.value || '').trim();
    if (!q) {
      ta.focus();
      ta.placeholder = '请先轻诉你心中的疑惑…';
      ta.parentElement.classList.add('glow-pulse');
      setTimeout(() => ta.parentElement.classList.remove('glow-pulse'), 1200);
      return;
    }
    STORAGE.setQuestion(q);
    // Clear any previous draws so the user starts fresh
    STORAGE.setDraws([]);
    submit.classList.add('glow-pulse');
    setTimeout(() => { window.location.href = 'select.html'; }, 350);
  }
}

// Page 2 — Card selection page (3D ring + drag + snap + long-press)
function bootSelectPage() {
  const ring = $('#ring');
  const arc = $('#arc');
  const progress = $('#progress');
  const slots = $$('.slot-frame');

  // Build the full 78-card deck on the ring
  const deck = shuffle(FULL_DECK);
  const { step: cardStep, count: N } = layoutRing(ring, deck);

  // Ring state
  let rotation = 0;
  let velocity = 0;       // deg per frame
  let dragging = false;
  let lastX = 0;
  let lastT = 0;
  let pressTimer = null;
  let pressedEl = null;
  let snapAnim = null;    // { from, to, t0, dur, t }

  // Sensitivity: pixels → degrees
  const SENSITIVITY = 0.45;

  // ----------------- focus tracking -----------------
  function focusedIndex() {
    return ((Math.round(-rotation / cardStep) % N) + N) % N;
  }
  function focusedEl() {
    return ring.children[focusedIndex()];
  }
  function updateFocus() {
    const idx = focusedIndex();
    for (let i = 0; i < ring.children.length; i++) {
      ring.children[i].classList.toggle('is-focused', i === idx);
    }
  }

  function setRotation(r) {
    rotation = r;
    ring.style.transform = `rotateY(${rotation}deg)`;
    updateFocus();
  }

  // ----------------- snap target -----------------
  function snapTarget() {
    const idx = Math.round(-rotation / cardStep);
    return -idx * cardStep;
  }

  // ----------------- pointer / drag -----------------
  function onPointerDown(e) {
    if (e.button !== undefined && e.button !== 0) return;
    dragging = true;
    velocity = 0;
    lastX = e.clientX;
    lastT = performance.now();
    arc.setPointerCapture && arc.setPointerCapture(e.pointerId);

    // Start long-press on the currently focused card
    pressedEl = focusedEl();
    if (pressedEl) pressedEl.classList.add('is-pressing');
    pressTimer = setTimeout(() => {
      pressTimer = null;
      if (pressedEl) pressedEl.classList.remove('is-pressing');
      pressedEl = null;
      // Cancel any ongoing drag inertia / snap when a pick happens
      velocity = 0;
      snapAnim = null;
      selectFocused();
    }, 1000);
  }
  function onPointerMove(e) {
    if (!dragging) return;
    const dx = e.clientX - lastX;
    const now = performance.now();
    if (Math.abs(dx) > 3) {
      // movement detected — cancel the long-press
      if (pressTimer) {
        clearTimeout(pressTimer);
        pressTimer = null;
        if (pressedEl) pressedEl.classList.remove('is-pressing');
        pressedEl = null;
      }
      // velocity in deg/frame (assuming 60fps)
      const dt = Math.max(now - lastT, 1);
      velocity = (dx / dt) * 16 * SENSITIVITY;
      setRotation(rotation + dx * SENSITIVITY);
    }
    lastX = e.clientX;
    lastT = now;
  }
  function onPointerUp(e) {
    if (!dragging) return;
    dragging = false;
    if (pressTimer) {
      clearTimeout(pressTimer);
      pressTimer = null;
      if (pressedEl) pressedEl.classList.remove('is-pressing');
      pressedEl = null;
    }
    try { arc.releasePointerCapture && arc.releasePointerCapture(e.pointerId); } catch (_) {}
  }

  arc.addEventListener('pointerdown', onPointerDown);
  arc.addEventListener('pointermove', onPointerMove);
  arc.addEventListener('pointerup', onPointerUp);
  arc.addEventListener('pointercancel', onPointerUp);
  arc.addEventListener('pointerleave', onPointerUp);
  // Prevent context menu on long press
  arc.addEventListener('contextmenu', (e) => e.preventDefault());

  // ----------------- inertia + snap loop -----------------
  function tick() {
    if (!dragging) {
      if (snapAnim) {
        snapAnim.t = Math.min(1, (performance.now() - snapAnim.t0) / snapAnim.dur);
        // ease-in-out cubic
        const k = snapAnim.t < 0.5
          ? 4 * snapAnim.t * snapAnim.t * snapAnim.t
          : 1 - Math.pow(-2 * snapAnim.t + 2, 3) / 2;
        const r = snapAnim.from + (snapAnim.to - snapAnim.from) * k;
        setRotation(r);
        if (snapAnim.t >= 1) {
          rotation = snapAnim.to;
          snapAnim = null;
        }
      } else if (Math.abs(velocity) > 0.01) {
        setRotation(rotation + velocity);
        velocity *= 0.94;   // friction
        if (Math.abs(velocity) < 0.08) {
          // Begin snap to the nearest card
          velocity = 0;
          snapAnim = {
            from: rotation,
            to: snapTarget(),
            t0: performance.now(),
            dur: 260
          };
        }
      } else {
        // Make sure we're parked on a card edge
        const target = snapTarget();
        if (Math.abs(target - rotation) > 0.001) {
          snapAnim = {
            from: rotation,
            to: target,
            t0: performance.now(),
            dur: 220
          };
        }
      }
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  // initial focus (setRotation calls updateFocus)
  setRotation(0);

  // ----------------- picking / flight -----------------
  const picks = [];

  function cardElAt(index) {
    return ring.children[index];
  }
  function cardDataAt(index) {
    return deck[index];
  }

  function selectFocused() {
    if (picks.length >= 3) return;
    const idx = focusedIndex();
    const card = cardDataAt(idx);
    const sourceEl = cardElAt(idx);
    if (!sourceEl) return;

    // Skip if already picked
    if (picks.some(p => p.id === card.id)) {
      sourceEl.animate(
        [
          { filter: 'brightness(0.32) saturate(0.4)' },
          { filter: 'brightness(0.55) saturate(0.65)' },
          { filter: 'brightness(0.32) saturate(0.4)' }
        ],
        { duration: 320, easing: 'ease-out' }
      );
      return;
    }

    const slotIndex = picks.length;
    const slot = slots[slotIndex];
    const reversed = Math.random() < 0.3;
    picks.push({ id: card.id, reversed });
    progress.textContent = `已选 ${picks.length} / 3`;

    // Hide the source card and fly a clone into the slot
    sourceEl.classList.add('is-picked');
    flightToSlot(sourceEl, slot, card, reversed);

    if (picks.length === 3) {
      STORAGE.setDraws(picks);
      setTimeout(() => { window.location.href = 'reading.html'; }, 1200);
    }
  }

  // Capture a clone of the source card and animate it to the slot.
  function flightToSlot(sourceEl, slot, card, reversed) {
    // Source rect: where the card currently appears on screen
    const src = sourceEl.getBoundingClientRect();
    const dst = slot.getBoundingClientRect();

    // Build the clone
    const clone = document.createElement('div');
    clone.className = 'flying-card';
    clone.style.left = `${src.left}px`;
    clone.style.top = `${src.top}px`;
    clone.style.width = `${src.width}px`;
    clone.style.height = `${src.height}px`;
    clone.innerHTML = cardBackHTML();
    document.body.appendChild(clone);

    // Compute transform: translate + scale (and a small spin for life)
    const dx = dst.left + dst.width / 2 - src.left - src.width / 2;
    const dy = dst.top + dst.height / 2 - src.top - src.height / 2;
    const scale = dst.width / src.width;

    // Force layout then animate
    clone.getBoundingClientRect();
    clone.style.transition = 'transform 0.95s cubic-bezier(0.6, 0.05, 0.4, 1), opacity 0.95s ease-in';
    requestAnimationFrame(() => {
      clone.style.transform =
        `translate(${dx}px, ${dy}px) scale(${scale.toFixed(3)}) rotate(720deg)`;
      clone.style.opacity = '0.95';
    });

    // Land the real card in the slot
    setTimeout(() => {
      slot.classList.add('is-filled');
      const cardClass = reversed ? 'placed-card is-reversed' : 'placed-card';
      slot.innerHTML = `
        <div class="${cardClass}">
          <img src="${card.image}" alt="${card.name}" loading="lazy"
               onerror="this.parentElement.classList.add('is-error')">
          <div class="img-fallback">
            <div class="glyph">${card.glyph}</div>
            <div class="name">${card.name}</div>
          </div>
        </div>
      `;
      clone.remove();
    }, 950);
  }
}

// Page 3 — Reading result page
function bootReadingPage() {
  const question = STORAGE.getQuestion();
  const draws = STORAGE.getDraws();
  if (!draws || draws.length !== 3) {
    window.location.href = 'index.html';
    return;
  }
  const positions = ['过去', '现在', '未来'];
  const cards = draws.map(d => FULL_DECK.find(c => c.id === d.id));
  const container = $('#spread');

  // Question echo
  $('#q-echo').textContent = question || '（未提问）';

  // Spread cards
  cards.forEach((card, i) => {
    const reversed = draws[i].reversed;
    if (!card) return; // skip unknown ids
    const col = document.createElement('div');
    col.className = 'spread-card rise-in';
    col.style.animationDelay = `${0.1 * i}s`;
    col.innerHTML = `
      <div class="spread-head">
        <span class="spread-position">${positions[i]}</span>
        <span class="spread-orientation">${reversed ? '逆位' : '正位'}</span>
      </div>
      <div class="spread-body">
        <div class="spread-art ${reversed ? 'is-reversed' : ''}">
          <img src="${card.image || ''}" alt="${card.name || ''}" loading="lazy"
               onerror="this.parentElement.classList.add('is-error')">
          <span class="glyph-fallback">${card.glyph || '✦'}</span>
        </div>
        <div class="spread-info">
          <div class="spread-name">${card.name || ''}</div>
          <div class="spread-name-en">${card.nameEn || ''}</div>
          <div class="spread-keywords">${reversed ? card.reversed : card.upright}</div>
        </div>
      </div>
    `;
    container.appendChild(col);
  });

  // Ask the cards-spirit (DeepSeek) for the reading. The AI block is
  // visible from the start; on failure, slots are filled with a friendly
  // error so the user is never left looking at an empty panel.
  const validCards = cards.filter(Boolean);
  if (validCards.length === cards.length) {
    runAIReading(question, cards, draws);
  } else {
    showAIErrorState(new Error('所选牌组已失效，请重新占卜'));
  }

  // Redraw button
  $('#redraw').addEventListener('click', () => {
    STORAGE.clear();
    window.location.href = 'index.html';
  });
}

// Call DeepSeek to render the reading. The AI block is always visible.
// While streaming the opener updates live; on success the slots fill in;
// on failure a soft error replaces the opener.
function runAIReading(question, cards, draws) {
  // Quick escape if CONFIG is missing (e.g. previewing the page raw)
  if (typeof CONFIG === 'undefined' || !CONFIG.deepseek) {
    showAIErrorState(new Error('未配置前端 CONFIG'));
    return;
  }

  // Initial loading hint inside the opener slot
  const opener = $('#ai-opening');
  if (opener) {
    opener.textContent = '牌灵正在聆听你的牌…';
    opener.classList.add('ai-caret');
  }

  const prompt = buildTarotPrompt(question, cards, draws);
  streamDeepSeek({ question, cards, draws }, {
    onDelta(fullText) {
      // During streaming only the opening JSON field is reliably
      // visible. Extract and update the opener live.
      const m = fullText.match(/"opening"\s*:\s*"([\s\S]*?)(?<!\\)"/);
      if (m && opener) opener.textContent = unescapeJson(m[1]);
    },
    onDone(json) {
      renderAIReadingFinal(json);
      if (opener) opener.classList.remove('ai-caret');
    },
    onError(err) {
      showAIErrorState(err);
      if (opener) opener.classList.remove('ai-caret');
    }
  });
}

// Unescape the JSON-escaped string we matched with the regex above.
function unescapeJson(s) {
  return s
    .replace(/\\n/g, '\n')
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\')
    .replace(/\\t/g, '\t');
}

/* ============================================
   DeepSeek-powered interpretation
   The reading page calls runAIReading() which streams the model
   response into the AI block in real time. The browser no longer
   talks to DeepSeek directly — it talks to /api/interpret, a
   Vercel serverless function that holds the API key in an
   environment variable. If anything fails (network, parse),
   a friendly error fills the slots.
   ============================================ */

function extractJson(text) {
  // Strip code fences if any
  let t = text.trim();
  t = t.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '');
  // Find outermost { ... }
  const start = t.indexOf('{');
  const end = t.lastIndexOf('}');
  if (start >= 0 && end > start) t = t.slice(start, end + 1);
  return t;
}

// Stream the serverless proxy's response into the target DOM nodes.
// Returns the parsed JSON object (and a flag for whether the stream
// completed). The proxy transparently forwards DeepSeek's SSE stream,
// so we read the same `data: {...}` chunks the browser would normally
// receive directly.
async function streamDeepSeek(payload, hooks) {
  const { onDelta, onDone, onError } = hooks;
  const cfg = CONFIG.deepseek;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), cfg.timeoutMs);

  let resp;
  try {
    resp = await fetch('/api/interpret', {
      method: 'POST',
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/event-stream'
      },
      body: JSON.stringify(payload)
    });
  } catch (e) {
    clearTimeout(timer);
    onError && onError(e);
    return null;
  }
  clearTimeout(timer);

  if (!resp.ok || !resp.body) {
    let detail = '';
    try { detail = await resp.text(); } catch (_) {}
    onError && onError(new Error(`HTTP ${resp.status} · ${detail.slice(0, 120)}`));
    return null;
  }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder('utf-8');
  let buffer = '';
  let full = '';

  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith('data:')) continue;
        const payloadStr = trimmed.slice(5).trim();
        if (payloadStr === '[DONE]') continue;
        try {
          const obj = JSON.parse(payloadStr);
          const delta = obj.choices?.[0]?.delta?.content || '';
          if (delta) {
            full += delta;
            onDelta && onDelta(full);
          }
        } catch (_) { /* skip malformed chunk */ }
      }
    }
  } catch (e) {
    onError && onError(e);
    return null;
  }

  try {
    const parsed = JSON.parse(extractJson(full));
    onDone && onDone(parsed, full);
    return parsed;
  } catch (e) {
    onError && onError(e);
    return null;
  }
}

// Fill all AI slots from the parsed DeepSeek response.
function renderAIReadingFinal(json) {
  const set = (sel, txt) => {
    const el = $(sel);
    if (el) el.textContent = txt || '';
  };
  set('#ai-opening', json.opening);
  set('#ai-past', json.past);
  set('#ai-present', json.present);
  set('#ai-future', json.future);
  set('#ai-synthesis-body', json.synthesis);
  set('#ai-whisper', json.whisper);
  const note = $('#ai-source');
  if (note) {
    note.textContent = '由 牌灵 · DeepSeek 即时生成';
    note.classList.remove('is-error');
  }
}

// Fill all AI slots with a friendly error. Used when the DeepSeek
// stream fails or no key is configured.
function showAIErrorState(err) {
  console.warn('DeepSeek reading unavailable:', err);
  const set = (sel, txt) => {
    const el = $(sel);
    if (el) el.textContent = txt;
  };
  set('#ai-opening', '牌灵暂时没有回应。');
  set('#ai-past', '请检查网络后再试一次，或稍等片刻重新占卜。');
  set('#ai-present', '有些时刻，牌灵也需要一点时间。');
  set('#ai-future', '当你准备好了，再问一次吧。');
  set('#ai-synthesis-body', '——');
  set('#ai-whisper', '慢一点，也是一种抵达。');
  const note = $('#ai-source');
  if (note) {
    note.textContent = `连接失败 · ${err && err.message ? err.message : 'unknown'}`;
    note.classList.add('is-error');
  }
}

// Page bootstrap dispatcher
document.addEventListener('DOMContentLoaded', () => {
  mountCosmicBackdrop();
  mountZodiacWheels();
  mountBrandMark();

  const page = document.body.dataset.page;
  if (page === 'question') bootQuestionPage();
  else if (page === 'select') bootSelectPage();
  else if (page === 'reading') bootReadingPage();
});
