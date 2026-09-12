// modules/certificates.js
// Centralized certificate data. To add/update a certificate, edit CERTIFICATES only.
// Image files live in assets/certificates/ and must match the `image` field exactly.

export const CERTIFICATES = [
  {
    id: 1,
    image: 'assets/certificates/certificate-1.jpg',
    title: 'Certified — Programming, Python, Android & Data Science',
    issuer: 'Udacity / Ethiocoders & UAE Government',
  },
  {
    id: 2,
    image: 'assets/certificates/certificate-2.jpg',
    title: 'Certificate of Recognition — Student Innovation & Creative Competition',
    issuer: 'Amhara Regional Science & Technology Commission',
  },
  {
    id: 3,
    image: 'assets/certificates/certificate-3.jpg',
    title: 'Certificate — Python Programming',
    issuer: 'BiT (Bahir Dar Institute of Technology) / ICT4D Research Center',
  },
  {
    id: 4,
    image: 'assets/certificates/certificate-4.jpg',
    title: 'Professional Competency & Training Certificate',
    issuer: 'Amhara Regional Labor and Training Bureau',
  },
  {
    id: 5,
    image: 'assets/certificates/certificate-5.jpg',
    title: 'Special Performance Certificate — 4 Technical Programs',
    issuer: 'Bahir Dar City Administration / ECODERS',
  },
  {
    id: 6,
    image: 'assets/certificates/certificate-6.jpg',
    title: '1st Place Award — Poetry Competition (Culture Week)',
    issuer: 'Addis Ababa Woreda 09 Culture, Arts & Tourism Office',
  },
  {
    id: 7,
    image: 'assets/certificates/certificate-7.jpg',
    title: 'Certified — Programming, Python, Android & Data Science',
    issuer: 'Udacity / Ethiocoders & UAE Government',
  },
];

// No image file supplied for this one yet — rendered as a text line, not a card.
export const TEXT_CREDENTIALS = [
  {
    title: 'Certificate of Appreciation — Volunteerism, Peacebuilding, Youth Empowerment, Addiction/GBV Prevention',
    issuer: 'Shimbitt Youth Personality Development Center / Charity Without Borders',
  },
];

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/** Renders certificate cards into gridEl and the text-only credential list into listEl. */
export function renderCertificates(gridEl, listEl) {
  if (gridEl) {
    gridEl.innerHTML = CERTIFICATES.map((c) => `
      <button class="cert-card" type="button" data-cert-id="${c.id}" aria-haspopup="dialog" aria-label="Open certificate: ${escapeHtml(c.title)}">
        <img
          src="${c.image}"
          alt="${escapeHtml(c.title)}"
          loading="lazy"
          onerror="this.closest('.cert-card').classList.add('missing'); this.style.display='none';"
        >
        <div class="cert-body">
          <h4>${escapeHtml(c.title)}</h4>
          <p>${escapeHtml(c.issuer)}</p>
        </div>
      </button>
    `).join('');
  }

  if (listEl) {
    listEl.innerHTML = TEXT_CREDENTIALS.map((c) => `
      <li><span class="credential-title">${escapeHtml(c.title)}</span><span class="credential-issuer">${escapeHtml(c.issuer)}</span></li>
    `).join('');
  }
}

export function getCertificateById(id) {
  return CERTIFICATES.find((c) => c.id === Number(id));
}

/** Wires up the fullscreen modal viewer for certificate cards. */
export function initCertificateModal(gridEl) {
  const modal = document.getElementById('cert-modal');
  const modalImg = document.getElementById('cert-modal-img');
  const modalCaption = document.getElementById('cert-modal-caption');
  const closeBtn = document.getElementById('cert-modal-close');
  if (!modal || !modalImg || !closeBtn || !gridEl) return;

  let lastFocused = null;

  function open(cert) {
    lastFocused = document.activeElement;
    modalImg.src = cert.image;
    modalImg.alt = cert.title;
    if (modalCaption) modalCaption.textContent = `${cert.title} — ${cert.issuer}`;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    closeBtn.focus();
    document.body.style.overflow = 'hidden';
  }

  function close() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  gridEl.addEventListener('click', (e) => {
    const card = e.target.closest('.cert-card');
    if (!card) return;
    const cert = getCertificateById(card.dataset.certId);
    if (cert) open(cert);
  });

  closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) close();
  });
}
