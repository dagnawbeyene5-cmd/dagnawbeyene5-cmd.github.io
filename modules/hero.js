// modules/hero.js
// Handles the hero video: shows it once it can actually play, otherwise
// leaves the static fallback image visible. Never assumes the video exists.

export function initHero() {
  const video = document.getElementById('hero-video');
  const fallback = document.getElementById('hero-fallback');
  if (!video || !fallback) return;

  const showVideo = () => {
    video.classList.add('ready');
    fallback.classList.add('hide');
  };

  const source = video.querySelector('source');
  if (!source || !source.getAttribute('src')) {
    return; // no video wired up yet — fallback image stays visible
  }

  video.addEventListener('playing', showVideo, { once: true });
  video.addEventListener('error', () => {
    // Video failed to load/decode — keep the fallback image, do nothing else.
  });

  // Respect reduced-motion: keep the still fallback instead of autoplaying.
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    video.removeAttribute('autoplay');
    video.pause();
    return;
  }

  // Some browsers need an explicit play() call even with the autoplay attribute.
  const playPromise = video.play();
  if (playPromise && typeof playPromise.catch === 'function') {
    playPromise.catch(() => {
      // Autoplay blocked — fallback image remains visible, which is fine.
    });
  }
}
