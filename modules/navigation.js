// modules/navigation.js
import { AudioManager } from './audio.js';
import { t } from './i18n.js';

export function initNavigation(){
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!menuBtn || !menu) return;

  const links = menu.querySelectorAll('a');

  function openMenu(){
    menuBtn.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
    menu.classList.add('open');
    document.body.style.overflow = 'hidden';
    links[0] && links[0].focus({ preventScroll: true });
  }

  function closeMenu(){
    menuBtn.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    menu.classList.remove('open');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', () => {
    AudioManager.unlock();
    const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
    AudioManager.play('menu');
    isOpen ? closeMenu() : openMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuBtn.focus();
    }
  });

  links.forEach(link => link.addEventListener('click', closeMenu));

  // Sound-tagged elements site-wide
  document.querySelectorAll('[data-sound]').forEach(el => {
    el.addEventListener('click', () => {
      AudioManager.unlock();
      AudioManager.play(el.dataset.sound);
    });
  });

  // Sound toggle button
  const soundToggle = document.getElementById('sound-toggle');
  if (soundToggle) {
    const label = soundToggle.querySelector('.sound-label');
    const render = (enabled) => {
      soundToggle.setAttribute('aria-pressed', String(enabled));
      if (label) label.textContent = enabled ? t('sound.on') : t('sound.off');
    };
    render(AudioManager.isEnabled());
    soundToggle.addEventListener('click', () => {
      AudioManager.unlock();
      const enabled = AudioManager.toggle();
      render(enabled);
    });
    document.addEventListener('lang:changed', () => render(AudioManager.isEnabled()));
  }
}
