/* ============================================
   Shared SVG assets for Aura Tarot
   ============================================ */

/* Build the zodiac wheel HTML by string concatenation.
   Used on all three pages. */
function buildZodiacWheel(side) {
  // 12 zodiac signs in order (starting from Aries at the top, going clockwise)
  const signs = [
    { sym: '♈', name: 'ARI' },
    { sym: '♉', name: 'TAU' },
    { sym: '♊', name: 'GEM' },
    { sym: '♋', name: 'CAN' },
    { sym: '♌', name: 'LEO' },
    { sym: '♍', name: 'VIR' },
    { sym: '♎', name: 'LIB' },
    { sym: '♏', name: 'SCO' },
    { sym: '♐', name: 'SAG' },
    { sym: '♑', name: 'CAP' },
    { sym: '♒', name: 'AQU' },
    { sym: '♓', name: 'PIS' }
  ];

  // Wheel geometry
  const cx = 200, cy = 200;
  const rOuter = 195;
  const rInner = 130;
  const rGlyph = 168;
  const rName = 115;
  const rTick = 188;

  let svg = `<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">`;

  // Outer ring
  svg += `<circle class="ring-stroke" cx="${cx}" cy="${cy}" r="${rOuter}"/>`;
  svg += `<circle class="ring-stroke" cx="${cx}" cy="${cy}" r="${rOuter - 6}"/>`;
  svg += `<circle class="ring-dashed" cx="${cx}" cy="${cy}" r="${rTick}"/>`;
  svg += `<circle class="ring-stroke" cx="${cx}" cy="${cy}" r="${rInner}"/>`;
  svg += `<circle class="ring-stroke" cx="${cx}" cy="${cy}" r="${rInner - 4}"/>`;
  svg += `<circle class="ring-stroke" cx="${cx}" cy="${cy}" r="${rName}"/>`;
  svg += `<circle class="ring-stroke" cx="${cx}" cy="${cy}" r="${rName - 20}"/>`;
  svg += `<circle class="ring-dashed" cx="${cx}" cy="${cy}" r="80"/>`;

  // 12 sector lines + 24 small ticks
  for (let i = 0; i < 12; i++) {
    const angle = (i * 30 - 90) * Math.PI / 180;
    const x1 = cx + Math.cos(angle) * rInner;
    const y1 = cy + Math.sin(angle) * rInner;
    const x2 = cx + Math.cos(angle) * rOuter;
    const y2 = cy + Math.sin(angle) * rOuter;
    svg += `<line class="ring-stroke" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;

    // Major tick at each 30°
    const tx1 = cx + Math.cos(angle) * (rOuter - 2);
    const ty1 = cy + Math.sin(angle) * (rOuter - 2);
    const tx2 = cx + Math.cos(angle) * (rOuter - 8);
    const ty2 = cy + Math.sin(angle) * (rOuter - 8);
    svg += `<line class="tick" x1="${tx1}" y1="${ty1}" x2="${tx2}" y2="${ty2}" stroke-width="1.2"/>`;

    // Minor ticks every 6°
    for (let j = 1; j < 5; j++) {
      const ma = ((i * 30) + (j * 6) - 90) * Math.PI / 180;
      const mx1 = cx + Math.cos(ma) * (rOuter - 2);
      const my1 = cy + Math.sin(ma) * (rOuter - 2);
      const mx2 = cx + Math.cos(ma) * (rOuter - 5);
      const my2 = cy + Math.sin(ma) * (rOuter - 5);
      svg += `<line class="tick" x1="${mx1}" y1="${my1}" x2="${mx2}" y2="${my2}"/>`;
    }
  }

  // 4 cardinal axis lines (cross)
  for (let i = 0; i < 4; i++) {
    const a = (i * 90 - 90) * Math.PI / 180;
    const x1 = cx + Math.cos(a) * (rName - 20);
    const y1 = cy + Math.sin(a) * (rName - 20);
    const x2 = cx + Math.cos(a) * rInner;
    const y2 = cy + Math.sin(a) * rInner;
    svg += `<line class="ring-stroke" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
  }

  // Zodiac glyphs + names
  for (let i = 0; i < 12; i++) {
    const angle = (i * 30 - 90) * Math.PI / 180;
    const gx = cx + Math.cos(angle) * rGlyph;
    const gy = cy + Math.sin(angle) * rGlyph;
    svg += `<text class="glyph" x="${gx}" y="${gy}">${signs[i].sym}</text>`;

    const nx = cx + Math.cos(angle) * rName;
    const ny = cy + Math.sin(angle) * rName + 14;
    svg += `<text class="glyph" x="${nx}" y="${ny}" style="font-size:9px;letter-spacing:0.15em;opacity:0.7">${signs[i].name}</text>`;
  }

  // Center medallion
  svg += `<circle class="ring-stroke" cx="${cx}" cy="${cy}" r="40"/>`;
  svg += `<circle class="ring-stroke" cx="${cx}" cy="${cy}" r="32"/>`;
  svg += `<circle class="center-mark" cx="${cx}" cy="${cy}" r="6"/>`;
  // Cross in center
  svg += `<line class="ring-stroke" x1="${cx - 26}" y1="${cy}" x2="${cx - 12}" y2="${cy}"/>`;
  svg += `<line class="ring-stroke" x1="${cx + 12}" y1="${cy}" x2="${cx + 26}" y2="${cy}"/>`;
  svg += `<line class="ring-stroke" x1="${cx}" y1="${cy - 26}" x2="${cx}" y2="${cy - 12}"/>`;
  svg += `<line class="ring-stroke" x1="${cx}" y1="${cy + 12}" x2="${cx}" y2="${cy + 26}"/>`;

  svg += `</svg>`;

  const wrap = document.createElement('div');
  wrap.className = `zodiac zodiac--${side}`;

  // The wheel (rotates) lives in an inner layer; particles float
  // around the wheel on the outer layer and do not rotate.
  const wheel = document.createElement('div');
  wheel.className = 'zodiac__wheel';
  wheel.innerHTML = svg;
  wrap.appendChild(wheel);

  // Generate small glowing particles around the wheel
  const N = 42;
  const colors = ['#D4AF37', '#E8D08A', '#B89BE3', '#8B5CF6', '#F5D78A'];
  for (let i = 0; i < N; i++) {
    // Polar distribution: most particles trace a halo around the
    // outer ring, a few are placed near the center for depth.
    const ring = Math.random() < 0.78; // 78% form a halo
    let r, theta;
    if (ring) {
      r = 0.62 + Math.random() * 0.46;     // 0.62 – 1.08
    } else {
      r = Math.random() * 0.34;           // 0.00 – 0.34
    }
    theta = Math.random() * Math.PI * 2;
    // Convert to top/left percentages relative to wheel center
    const x = 50 + Math.cos(theta) * r * 50;
    const y = 50 + Math.sin(theta) * r * 50;
    const s = (ring ? 1.4 : 0.9) + Math.random() * 2.0;
    const c = colors[Math.floor(Math.random() * colors.length)];
    const d = 2.6 + Math.random() * 3.6;
    const t = -(Math.random() * d).toFixed(2);
    const g = 4 + Math.random() * 7;

    const p = document.createElement('span');
    p.className = 'zodiac__particle';
    p.style.setProperty('--x', x.toFixed(1) + '%');
    p.style.setProperty('--y', y.toFixed(1) + '%');
    p.style.setProperty('--s', s.toFixed(2) + 'px');
    p.style.setProperty('--c', c);
    p.style.setProperty('--d', d.toFixed(2) + 's');
    p.style.setProperty('--t', t + 's');
    p.style.setProperty('--g', g.toFixed(1) + 'px');
    wrap.appendChild(p);
  }

  return wrap;
}

function mountZodiacWheels() {
  const slot = document.getElementById('zodiac-slot');
  if (!slot) return;
  slot.appendChild(buildZodiacWheel('left'));
  slot.appendChild(buildZodiacWheel('right'));
}

function mountCosmicBackdrop() {
  // Background layers
  const cosmos = document.createElement('div');
  cosmos.className = 'cosmos';
  document.body.appendChild(cosmos);

  const stars1 = document.createElement('div');
  stars1.className = 'stars';
  document.body.appendChild(stars1);

  const stars2 = document.createElement('div');
  stars2.className = 'stars stars-2';
  document.body.appendChild(stars2);

  const stars3 = document.createElement('div');
  stars3.className = 'stars stars-3';
  document.body.appendChild(stars3);

  // Nebula wisps
  ['nebula--1', 'nebula--2', 'nebula--3'].forEach(cls => {
    const n = document.createElement('div');
    n.className = `nebula ${cls}`;
    document.body.appendChild(n);
  });
}

function mountBrandMark() {
  // Bottom-left "N" mystic mark
  const mark = document.createElement('a');
  mark.href = 'index.html';
  mark.className = 'btn-mark';
  mark.title = '灵气塔罗';
  mark.setAttribute('aria-label', '灵气塔罗 · 首页');
  mark.textContent = 'H';
  document.body.appendChild(mark);

  // Bottom-right spark (decorative toggle for starfield intensity)
  const spark = document.createElement('button');
  spark.className = 'btn-spark';
  spark.type = 'button';
  spark.title = '切换星场';
  spark.setAttribute('aria-label', '切换星场');
  spark.textContent = '✦';
  let bright = true;
  spark.addEventListener('click', () => {
    bright = !bright;
    document.querySelectorAll('.stars').forEach(s => {
      s.style.opacity = bright ? '' : (s.classList.contains('stars-3') ? '0.2' : s.classList.contains('stars-2') ? '0.25' : '0.4');
    });
    spark.style.transform = bright ? '' : 'rotate(180deg)';
  });
  document.body.appendChild(spark);
}
