// modules/audio.js
// Single centralized audio manager. Components never create their own
// `new Audio()` instances — they call AudioManager.play(name) instead.

const SOUND_MAP = {
  'ui-click': 'sounds/ui-click.wav',
  'projects': 'sounds/projects.wav',
  'tools':    'sounds/tools.wav',
  'cv':       'sounds/cv.wav',
  'contact':  'sounds/contact.wav',
  'menu':     'sounds/menu.wav',
  'toggle':   'sounds/toggle.wav',
};

const STORAGE_KEY = 'dagi-portfolio-sound-enabled';

class AudioManagerClass {
  constructor(){
    this.enabled = localStorage.getItem(STORAGE_KEY) === 'true';
    this.buffers = new Map(); // name -> HTMLAudioElement (preloaded, reused)
    this.unlocked = false;
    this._preload();
  }

  _preload(){
    for (const [name, path] of Object.entries(SOUND_MAP)) {
      const el = new Audio();
      el.src = path;
      el.preload = 'auto';
      el.volume = 0.5;
      el.addEventListener('error', () => {
        // Missing/invalid file — mark so play() can no-op silently.
        el.dataset.missing = 'true';
      });
      this.buffers.set(name, el);
    }
  }

  isEnabled(){ return this.enabled; }

  setEnabled(value){
    this.enabled = value;
    localStorage.setItem(STORAGE_KEY, String(value));
    document.dispatchEvent(new CustomEvent('audio:state', { detail: { enabled: value } }));
  }

  toggle(){
    this.setEnabled(!this.enabled);
    // Play the toggle sound itself so the state is audible, if turning on.
    if (this.enabled) this.play('toggle');
    return this.enabled;
  }

  /** Call this once, inside a real user gesture handler, to satisfy autoplay policies. */
  unlock(){
    if (this.unlocked) return;
    this.unlocked = true;
  }

  play(name){
    if (!this.enabled) return;
    const el = this.buffers.get(name);
    if (!el || el.dataset.missing === 'true') return; // missing file — fail silently
    try {
      el.currentTime = 0;
      const p = el.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => {
          // Autoplay/gesture restriction or decode error — ignore, don't throw.
        });
      }
    } catch (e) {
      // Never let a sound failure break the UI.
    }
  }
}

export const AudioManager = new AudioManagerClass();
