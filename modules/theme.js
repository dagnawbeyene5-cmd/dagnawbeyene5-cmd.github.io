// modules/theme.js
// Theme switching: sets data-theme on <html>, which style.css reads to swap
// CSS custom properties (and a few targeted rules) per theme. Persisted via
// localStorage so it carries across pages and visits. A tiny inline script
// in each HTML file's <head> applies the saved theme immediately (before
// this module loads) to avoid a flash of the wrong theme.

const STORAGE_KEY = 'dagi-portfolio-theme';
const SUPPORTED = ['cyber', 'cultural', 'light', 'retro'];
const DEFAULT_THEME = 'cyber';

export function getTheme() {
  return document.documentElement.getAttribute('data-theme') || DEFAULT_THEME;
}

export function setTheme(theme) {
  if (!SUPPORTED.includes(theme)) return;
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch { /* non-fatal — theme just won't persist */ }
  document.querySelectorAll('.theme-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.themeOption === theme);
  });
}

export function initTheme() {
  const current = getTheme();
  document.querySelectorAll('.theme-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.themeOption === current);
    btn.addEventListener('click', () => setTheme(btn.dataset.themeOption));
  });
}
