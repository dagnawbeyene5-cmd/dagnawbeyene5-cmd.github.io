// modules/newyear.js
// Continuous falling Adey Abeba (Meskel daisy) petals + a "Happy New Year"
// falling-letters layer — a subtle Ethiopian New Year touch. Renders as a
// fixed full-viewport canvas overlay above everything, but never blocks
// clicks (pointer-events: none). Respects reduced-motion.
//
// TO TURN OFF LATER (after the holiday):
//   Easiest: remove the initFallingFlowers() call in script.js / tools.js.
//   To keep the flowers but drop just the New Year text: set
//   SHOW_NEWYEAR_TEXT to false below.

const SHOW_NEWYEAR_TEXT = true; // ← set to false to stop the falling text (keeps the flowers)
const NEWYEAR_TEXT = 'መልካም አዲስ አመት';

const FLOWER_COUNT = 18;
const LETTER_COUNT = SHOW_NEWYEAR_TEXT ? 10 : 0;
const PETAL_COLOR = '#F4C430';   // adey abeba yellow
const PETAL_COLOR_2 = '#FFD966'; // lighter variant for depth
const CENTER_COLOR = '#7A4B00';  // small brown/orange center
const LETTER_COLOR = '#FFE8A3';

export function initFallingFlowers() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return; // skip entirely — respects accessibility preference

  const canvas = document.createElement('canvas');
  canvas.id = 'newyear-flowers';
  canvas.setAttribute('aria-hidden', 'true');
  Object.assign(canvas.style, {
    position: 'fixed',
    inset: '0',
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    zIndex: '9999',
  });
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let particles = [];
  let running = true;
  let letterCursor = 0;

  const letterChars = NEWYEAR_TEXT.replace(/\s/g, '').split('');

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function nextLetter() {
    const ch = letterChars[letterCursor % letterChars.length];
    letterCursor++;
    return ch;
  }

  function makeParticle(kind, randomY) {
    const base = {
      kind,
      x: Math.random() * width,
      y: randomY ? Math.random() * height : -24,
      speedY: Math.random() * 0.55 + 0.3,
      drift: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.35 + 0.55,
      sway: Math.random() * 0.015 + 0.005,
      swayOffset: Math.random() * Math.PI * 2,
    };
    if (kind === 'flower') {
      return Object.assign(base, {
        size: Math.random() * 5 + 5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
      });
    }
    // letter
    return Object.assign(base, {
      char: nextLetter(),
      size: Math.random() * 6 + 16, // font size
      speedY: Math.random() * 0.4 + 0.22, // letters fall a touch slower — easier to read
    });
  }

  function drawFlower(f) {
    ctx.save();
    ctx.globalAlpha = f.opacity;
    ctx.translate(f.x, f.y);
    ctx.rotate(f.rotation);
    for (let i = 0; i < 6; i++) {
      ctx.rotate((Math.PI * 2) / 6);
      ctx.beginPath();
      ctx.fillStyle = i % 2 === 0 ? PETAL_COLOR : PETAL_COLOR_2;
      ctx.ellipse(f.size * 0.6, 0, f.size * 0.6, f.size * 0.32, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.beginPath();
    ctx.fillStyle = CENTER_COLOR;
    ctx.arc(0, 0, f.size * 0.28, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawLetter(p) {
    ctx.save();
    ctx.globalAlpha = p.opacity;
    ctx.fillStyle = LETTER_COLOR;
    ctx.font = `700 ${p.size}px 'Space Mono', ui-monospace, monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(244,196,48,0.55)';
    ctx.shadowBlur = 6;
    ctx.fillText(p.char, p.x, p.y);
    ctx.restore();
  }

  function tick(t) {
    if (!running) return;
    ctx.clearRect(0, 0, width, height);

    for (const p of particles) {
      p.y += p.speedY;
      p.x += p.drift + Math.sin(t * p.sway + p.swayOffset) * 0.3;
      if (p.kind === 'flower') p.rotation += p.rotationSpeed;

      if (p.y > height + 24) {
        Object.assign(p, makeParticle(p.kind, false));
      }
      if (p.x < -24) p.x = width + 24;
      if (p.x > width + 24) p.x = -24;

      if (p.kind === 'flower') drawFlower(p);
      else drawLetter(p);
    }

    requestAnimationFrame(tick);
  }

  resize();
  particles = [
    ...Array.from({ length: FLOWER_COUNT }, () => makeParticle('flower', true)),
    ...Array.from({ length: LETTER_COUNT }, () => makeParticle('letter', true)),
  ];

  window.addEventListener('resize', resize);
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running) requestAnimationFrame(tick);
  });

  requestAnimationFrame(tick);
}
