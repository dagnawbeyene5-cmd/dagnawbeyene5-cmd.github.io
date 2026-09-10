// modules/animations.js
// Lightweight floating-particle layer for the hero canvas.
// Pauses entirely when the tab is hidden or the user prefers reduced motion.

const PARTICLE_COUNT = 36;

export function initHeroParticles() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return; // leave canvas empty — CSS grid/ring/scanline still render

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let particles = [];
  let rafId = null;
  let running = true;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = canvas.width = rect.width;
    height = canvas.height = rect.height;
    particles = Array.from({ length: PARTICLE_COUNT }, makeParticle);
  }

  function makeParticle() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.6 + 0.4,
      speedY: Math.random() * 0.18 + 0.04,
      drift: (Math.random() - 0.5) * 0.12,
      alpha: Math.random() * 0.5 + 0.15,
    };
  }

  function tick() {
    if (!running) return;
    ctx.clearRect(0, 0, width, height);
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#00E5C7';

    for (const p of particles) {
      p.y -= p.speedY;
      p.x += p.drift;
      if (p.y < -4) {
        p.y = height + 4;
        p.x = Math.random() * width;
      }
      if (p.x < -4) p.x = width + 4;
      if (p.x > width + 4) p.x = -4;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = hexWithAlpha(accent, p.alpha);
      ctx.fill();
    }

    rafId = requestAnimationFrame(tick);
  }

  function hexWithAlpha(hex, alpha) {
    const clean = hex.replace('#', '');
    if (clean.length !== 6) return `rgba(0,229,199,${alpha})`;
    const r = parseInt(clean.slice(0, 2), 16);
    const g = parseInt(clean.slice(2, 4), 16);
    const b = parseInt(clean.slice(4, 6), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }

  resize();
  window.addEventListener('resize', resize);
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running && !rafId) tick();
  });

  running = true;
  tick();
}
