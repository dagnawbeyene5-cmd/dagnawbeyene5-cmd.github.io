// modules/idcard.js
// A small hanging ID card in the hero corner. Drag it and let go — it swings
// back like a real lanyard badge, using a lightweight damped-pendulum +
// spring simulation (no physics library needed for something this small).

const SPRING_STIFFNESS = 0.012; // pulls swingAngle back toward 0
const DAMPING = 0.90;           // velocity decay per frame (swing settles down)
const TILT_DAMPING = 0.85;
const MAX_SWING_DEG = 34;
const MAX_TILT_DEG = 22;

export function initIdCard() {
  const rig = document.getElementById('id-card-rig');
  const pivot = document.getElementById('id-card-pivot');
  const card = document.getElementById('id-card');
  if (!rig || !pivot || !card) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Pendulum swing (rotation of the whole pivot — strap + card together)
  let swingAngle = 0;      // degrees
  let swingVelocity = 0;
  // Extra 3D tilt on the card itself, purely cosmetic, decays fast after drag
  let tiltX = 0;
  let tiltY = 0;

  let dragging = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let lastX = 0;
  let running = true;

  function applyTransforms() {
    pivot.style.transform = `rotate(${swingAngle}deg)`;
    card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  }

  function tick() {
    if (!running) return;

    if (!dragging) {
      // Damped spring pulling swingAngle back to 0 (hanging straight down)
      const force = -SPRING_STIFFNESS * swingAngle;
      swingVelocity = (swingVelocity + force) * DAMPING;
      swingAngle += swingVelocity;

      tiltX *= TILT_DAMPING;
      tiltY *= TILT_DAMPING;
      if (Math.abs(tiltX) < 0.01) tiltX = 0;
      if (Math.abs(tiltY) < 0.01) tiltY = 0;
    }

    applyTransforms();
    requestAnimationFrame(tick);
  }

  function onPointerDown(e) {
    dragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    lastX = e.clientX;
    card.setPointerCapture(e.pointerId);
    card.style.cursor = 'grabbing';
  }

  function onPointerMove(e) {
    if (!dragging) return;
    const dx = e.clientX - dragStartX;
    const dy = e.clientY - dragStartY;

    swingAngle = Math.max(-MAX_SWING_DEG, Math.min(MAX_SWING_DEG, dx * 0.35));
    tiltY = Math.max(-MAX_TILT_DEG, Math.min(MAX_TILT_DEG, dx * 0.25));
    tiltX = Math.max(-MAX_TILT_DEG, Math.min(MAX_TILT_DEG, -dy * 0.2));

    swingVelocity = (e.clientX - lastX) * 0.6;
    lastX = e.clientX;
  }

  function onPointerUp(e) {
    if (!dragging) return;
    dragging = false;
    card.style.cursor = 'grab';
    try { card.releasePointerCapture(e.pointerId); } catch { /* already released */ }
  }

  card.addEventListener('pointerdown', onPointerDown);
  card.addEventListener('pointermove', onPointerMove);
  card.addEventListener('pointerup', onPointerUp);
  card.addEventListener('pointercancel', onPointerUp);

  if (prefersReduced) {
    // Respect the preference: no idle motion, but dragging still works if the
    // person chooses to interact — it just won't animate on its own.
    applyTransforms();
    return;
  }

  // A gentle idle sway so the card doesn't look static before anyone touches it.
  let idleT = 0;
  const idleNudge = () => {
    idleT += 0.012;
    if (!dragging && Math.abs(swingVelocity) < 0.02 && Math.abs(swingAngle) < 0.5) {
      swingVelocity += Math.sin(idleT) * 0.0025;
    }
    requestAnimationFrame(idleNudge);
  };

  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running) requestAnimationFrame(tick);
  });

  requestAnimationFrame(tick);
  requestAnimationFrame(idleNudge);
}
