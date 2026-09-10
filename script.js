// script.js — entry point. Wires up all feature modules. No global pollution:
// everything lives inside the modules themselves; this file only calls init().

import { initNavigation } from './modules/navigation.js';
import { initHero } from './modules/hero.js';
import { initHeroParticles } from './modules/animations.js';
import { renderCertificates, initCertificateModal } from './modules/certificates.js';
import { initI18n } from './modules/i18n.js';
import { initFallingFlowers } from './modules/newyear.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initI18n();
  initHero();
  initHeroParticles();
  initFallingFlowers();

  const certGrid = document.getElementById('cert-grid');
  const credentialList = document.getElementById('credential-list');
  renderCertificates(certGrid, credentialList);
  initCertificateModal(certGrid);
});
