// modules/splash.js
// Fast welcome/splash screen shown once per browser session on the home page.
// Skips itself entirely if the user prefers reduced motion (goes straight to
// the main site — no animation, no forced extra click).

const SESSION_KEY = 'dagi-portfolio-splash-seen';

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

  const enterBtn = document.getElementById('splash-enter');
  const dismiss = () => {
    splash.classList.add('hidden');
    document.body.style.overflow = '';
    try {
      sessionStorage.setItem(SESSION_KEY, 'true');
    } catch { /* non-fatal */ }
    // Remove from the DOM after the fade-out transition finishes.
    setTimeout(() => splash.remove(), 550);
  };

  if (enterBtn) {
    enterBtn.addEventListener('click', dismiss);
  }

  // Also allow Enter/Space key or Escape to dismiss, for keyboard users.
  splash.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
      e.preventDefault();
      dismiss();
    }
  });

  if (enterBtn) enterBtn.focus();
}
