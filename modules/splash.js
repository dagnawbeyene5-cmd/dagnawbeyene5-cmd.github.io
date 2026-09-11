// modules/splash.js
// Fast welcome/splash screen shown once per browser session on the home page.
// Skips itself entirely if the user prefers reduced motion. Dismissal is a
// drag-to-enter slider (also works with a plain click/tap — see the inline
// onclick fallback on the handle in index.html, which fires independently of
// this module so the button always works even if this script fails to load).

const SESSION_KEY = 'Dagnaw Beyene-portfolio-splash-seen';
const COMPLETE_THRESHOLD = 0.78; // fraction of track width required to auto-complete

export function initSplash() {
  const splash = document.getElementById('splash-screen');
  if (!splash) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let alreadySeen = false;
  try {
    alreadySeen = sessionStorage.getItem(SESSION_KEY) === 'true';
  } catch { /* storage unavailable — treat as not seen */ }

  if (prefersReduced || alreadySeen) {
    splash.remove();
    return;
  }

  document.body.style.overflow = 'hidden';

  const track = document.getElementById('splash-slider-track');
  const fill = document.getElementById('splash-slider-fill');
  const handle = document.getElementById('splash-slider-handle');

  const dismiss = () => {
    if (!splash.parentNode) return; // already dismissed
    splash.classList.add('splash-exit');
    document.body.style.overflow = '';
    try {
      sessionStorage.setItem(SESSION_KEY, 'true');
    } catch { /* non-fatal */ }
    setTimeout(() => splash.remove(), 650);
  };

  // Keyboard access: Enter/Space/Escape dismiss directly.
  splash.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
      e.preventDefault();
      dismiss();
    }
  });

  if (!track || !fill || !handle) {
    if (handle) handle.focus();
    return; // drag UI not present — the inline onclick fallback still covers dismissal
  }

  const handleSize = handle.offsetWidth;
  let maxDrag = 0;
  let dragging = false;
  let startX = 0;
  let currentX = 0;

  function computeMax() {
    maxDrag = track.clientWidth - handleSize - 6; // 6px = track inner padding
  }
  computeMax();
  window.addEventListener('resize', computeMax);

  function setPosition(x, animate) {
    handle.style.transition = animate ? 'transform 0.25s cubic-bezier(0.34,1.2,0.64,1)' : 'none';
    fill.style.transition = animate ? 'width 0.25s ease' : 'none';
    handle.style.transform = `translateX(${x}px)`;
    fill.style.width = `${x + handleSize}px`;
  }

  function onPointerDown(e) {
    dragging = true;
    startX = e.clientX;
    currentX = parseFloat((handle.style.transform.match(/-?\d+(\.\d+)?/) || [0])[0]) || 0;
    track.classList.add('dragging');
    handle.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e) {
    if (!dragging) return;
    const delta = e.clientX - startX;
    const x = Math.min(Math.max(0, currentX + delta), maxDrag);
    setPosition(x, false);
  }

  function onPointerUp(e) {
    if (!dragging) return;
    dragging = false;
    track.classList.remove('dragging');
    const x = parseFloat((handle.style.transform.match(/-?\d+(\.\d+)?/) || [0])[0]) || 0;

    if (maxDrag > 0 && x / maxDrag >= COMPLETE_THRESHOLD) {
      setPosition(maxDrag, true);
      dismiss();
    } else {
      setPosition(0, true);
    }
  }

  handle.addEventListener('pointerdown', onPointerDown);
  handle.addEventListener('pointermove', onPointerMove);
  handle.addEventListener('pointerup', onPointerUp);
  handle.addEventListener('pointercancel', onPointerUp);

  handle.focus();
}
