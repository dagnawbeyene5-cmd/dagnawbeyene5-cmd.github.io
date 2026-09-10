// modules/newyear.js
// Continuous falling Adey Abeba (Meskel daisy) petals — a subtle Ethiopian New
// Year touch. Renders as a fixed full-viewport canvas overlay above everything,
// but never blocks clicks (pointer-events: none). Respects reduced-motion.
//
// To turn this off later: just remove the initFallingFlowers() call in
// script.js / tools.js. Nothing else depends on this module.

const FLOWER_COUNT = 22;
const PETAL_COLOR = '#F4C430';   // adey abeba yellow
const PETAL_COLOR_2 = '#FFD966'; // lighter variant for depth
const CENTER_COLOR = '#7A4B00';  // small brown/orange center

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
  let flowers = [];
  let running = true;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function makeFlower(randomY) {
    return {
      x: Math.random() * width,
      y: randomY ? Math.random() * height : -20,
      size: Math.random() * 5 + 5,          // 5–10px petal radius
      speedY: Math.random() * 0.6 + 0.35,    // gentle, unhurried fall
      drift: (Math.random() - 0.5) * 0.5,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.01,
      opacity: Math.random() * 0.35 + 0.55,
      sway: Math.random() * 0.015 + 0.005,
      swayOffset: Math.random() * Math.PI * 2,
    };
  }

  function drawFlower(f) {
    ctx.save();
    ctx.globalAlpha = f.opacity;
    ctx.translate(f.x, f.y);
    ctx.rotate(f.rotation);

    // 6 simple petals
    for (let i = 0; i < 6; i++) {
      ctx.rotate((Math.PI * 2) / 6);
      ctx.beginPath();
      ctx.fillStyle = i % 2 === 0 ? PETAL_COLOR : PETAL_COLOR_2;
      ctx.ellipse(f.size * 0.6, 0, f.size * 0.6, f.size * 0.32, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // center
    ctx.beginPath();
    ctx.fillStyle = CENTER_COLOR;
    ctx.arc(0, 0, f.size * 0.28, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  function tick(t) {
    if (!running) return;
    ctx.clearRect(0, 0, width, height);

    for (const f of flowers) {
      f.y += f.speedY;
      f.x += f.drift + Math.sin(t * f.sway + f.swayOffset) * 0.3;
      f.rotation += f.rotationSpeed;

      if (f.y > height + 20) {
        Object.assign(f, makeFlower(false));
      }
      if (f.x < -20) f.x = width + 20;
      if (f.x > width + 20) f.x = -20;

      drawFlower(f);
    }

    requestAnimationFrame(tick);
  }

  resize();
  flowers = Array.from({ length: FLOWER_COUNT }, () => makeFlower(true));

  window.addEventListener('resize', resize);
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running) requestAnimationFrame(tick);
  });

  requestAnimationFrame(tick);
}
