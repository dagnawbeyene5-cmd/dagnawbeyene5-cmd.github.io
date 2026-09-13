// modules/toolsMore.js
// Init functions for every Tools Hub tool beyond the Password Generator.
// Each init*() is a no-op if its section isn't on the page (defensive
// element checks), so this file is safe to import and call in full always.

// ---------- QR Code Generator ----------
// Renders the QR image via a free public QR image API (api.qrserver.com,
// no key required). Building a correct QR encoder from scratch in-house
// would be a much larger, error-prone undertaking for a static-site tool —
// this keeps it reliable. If that service is ever unreachable the image
// simply fails to load; nothing else on the page depends on it.
export function initQr() {
  const input = document.getElementById('qr-input');
  const img = document.getElementById('qr-image');
  const download = document.getElementById('qr-download');
  if (!input || !img) return;

  function render() {
    const text = input.value.trim();
    if (!text) {
      img.removeAttribute('src');
      img.style.visibility = 'hidden';
      if (download) download.style.visibility = 'hidden';
      return;
    }
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(text)}`;
    img.src = url;
    img.style.visibility = 'visible';
    if (download) {
      download.href = url;
      download.style.visibility = 'visible';
    }
  }

  input.addEventListener('input', render);
  render();
}

// ---------- Unit Converter ----------
const UNIT_GROUPS = {
  length: {
    m: 1, km: 1000, cm: 0.01, mm: 0.001, mi: 1609.344, yd: 0.9144, ft: 0.3048, in: 0.0254,
  },
  weight: {
    kg: 1, g: 0.001, mg: 0.000001, lb: 0.45359237, oz: 0.028349523125, t: 1000,
  },
};

function convertLinear(value, from, to, table) {
  const base = value * table[from];
  return base / table[to];
}

function celsiusToFahrenheit(c) { return (c * 9) / 5 + 32; }
function fahrenheitToCelsius(f) { return ((f - 32) * 5) / 9; }
function celsiusToKelvin(c) { return c + 273.15; }
function kelvinToCelsius(k) { return k - 273.15; }

function convertTemperature(value, from, to) {
  if (from === to) return value;
  let c = value;
  if (from === 'F') c = fahrenheitToCelsius(value);
  if (from === 'K') c = kelvinToCelsius(value);
  if (to === 'C') return c;
  if (to === 'F') return celsiusToFahrenheit(c);
  if (to === 'K') return celsiusToKelvin(c);
  return c;
}

export function initUnitConverter() {
  const category = document.getElementById('unit-category');
  const fromSel = document.getElementById('unit-from');
  const toSel = document.getElementById('unit-to');
  const fromVal = document.getElementById('unit-from-value');
  const toVal = document.getElementById('unit-to-value');
  if (!category || !fromSel || !toSel || !fromVal || !toVal) return;

  const TEMP_UNITS = { C: '°C', F: '°F', K: 'K' };

  function populateUnits() {
    const cat = category.value;
    fromSel.innerHTML = '';
    toSel.innerHTML = '';
    const units = cat === 'temperature' ? TEMP_UNITS : UNIT_GROUPS[cat];
    Object.keys(units).forEach((key, i) => {
      const label = cat === 'temperature' ? units[key] : key;
      const opt1 = new Option(label, key, i === 0, i === 0);
      const opt2 = new Option(label, key, i === 1, i === 1);
      fromSel.add(opt1);
      toSel.add(opt2);
    });
    if (toSel.options.length < 2) toSel.selectedIndex = 0;
    compute();
  }

  function compute() {
    const cat = category.value;
    const value = parseFloat(fromVal.value);
    if (Number.isNaN(value)) {
      toVal.value = '';
      return;
    }
    let result;
    if (cat === 'temperature') {
      result = convertTemperature(value, fromSel.value, toSel.value);
    } else {
      result = convertLinear(value, fromSel.value, toSel.value, UNIT_GROUPS[cat]);
    }
    toVal.value = Number.isFinite(result) ? Math.round(result * 100000) / 100000 : '';
  }

  category.addEventListener('change', populateUnits);
  fromSel.addEventListener('change', compute);
  toSel.addEventListener('change', compute);
  fromVal.addEventListener('input', compute);

  populateUnits();
}

// ---------- Color Palette Picker ----------
function hexToHsl(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  const d = max - min;
  if (d !== 0) {
    s = d / (1 - Math.abs(2 * l - 1));
    switch (max) {
      case r: h = ((g - b) / d) % 6; break;
      case g: h = (b - r) / d + 2; break;
      default: h = (r - g) / d + 4;
    }
    h *= 60;
    if (h < 0) h += 360;
  }
  return [h, s * 100, l * 100];
}

function hslToHex(h, s, l) {
  s /= 100; l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0, g = 0, b = 0;
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  const toHex = (v) => Math.round((v + m) * 255).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function initPalette() {
  const picker = document.getElementById('palette-picker');
  const grid = document.getElementById('palette-grid');
  if (!picker || !grid) return;

  function render() {
    const [h, s] = hexToHsl(picker.value);
    const lightnesses = [85, 65, 50, 35, 18];
    grid.innerHTML = lightnesses.map((l) => {
      const hex = hslToHex(h, Math.max(s, 35), l);
      return `
        <button type="button" class="palette-swatch" style="background:${hex}" data-hex="${hex}" data-sound="ui-click">
          <span>${hex}</span>
        </button>
      `;
    }).join('');
  }

  grid.addEventListener('click', async (e) => {
    const btn = e.target.closest('.palette-swatch');
    if (!btn) return;
    try {
      await navigator.clipboard.writeText(btn.dataset.hex);
      const label = btn.querySelector('span');
      const original = label.textContent;
      label.textContent = '✓';
      setTimeout(() => { label.textContent = original; }, 900);
    } catch { /* clipboard blocked — silently ignore */ }
  });

  picker.addEventListener('input', render);
  render();
}

// ---------- Markdown Preview (lightweight, safe subset) ----------
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function renderMarkdown(src) {
  const lines = escapeHtml(src).split('\n');
  const html = [];
  let inList = false;

  const inline = (line) => line
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

  for (const raw of lines) {
    const line = raw;
    const heading = line.match(/^(#{1,6})\s+(.*)/);
    const listItem = line.match(/^[-*]\s+(.*)/);

    if (heading) {
      if (inList) { html.push('</ul>'); inList = false; }
      const level = heading[1].length;
      html.push(`<h${level}>${inline(heading[2])}</h${level}>`);
    } else if (listItem) {
      if (!inList) { html.push('<ul>'); inList = true; }
      html.push(`<li>${inline(listItem[1])}</li>`);
    } else if (line.trim() === '') {
      if (inList) { html.push('</ul>'); inList = false; }
    } else {
      if (inList) { html.push('</ul>'); inList = false; }
      html.push(`<p>${inline(line)}</p>`);
    }
  }
  if (inList) html.push('</ul>');
  return html.join('\n');
}

export function initMarkdown() {
  const input = document.getElementById('md-input');
  const preview = document.getElementById('md-preview');
  if (!input || !preview) return;

  const render = () => { preview.innerHTML = renderMarkdown(input.value); };
  input.addEventListener('input', render);
  render();
}

// ---------- JSON Formatter ----------
export function initJsonFormatter() {
  const input = document.getElementById('json-input');
  const output = document.getElementById('json-output');
  const status = document.getElementById('json-status');
  const formatBtn = document.getElementById('json-format');
  const copyBtn = document.getElementById('json-copy');
  if (!input || !output || !formatBtn) return;

  function format() {
    const raw = input.value.trim();
    if (!raw) {
      output.value = '';
      status.textContent = '';
      return;
    }
    try {
      const parsed = JSON.parse(raw);
      output.value = JSON.stringify(parsed, null, 2);
      status.textContent = '';
      status.classList.remove('tool-status--error');
    } catch (err) {
      status.textContent = `${status.dataset.invalidLabel || 'Invalid JSON:'} ${err.message}`;
      status.classList.add('tool-status--error');
    }
  }

  formatBtn.addEventListener('click', format);
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      if (!output.value) return;
      try { await navigator.clipboard.writeText(output.value); } catch { /* ignore */ }
    });
  }
}

// ---------- Word Counter ----------
export function initWordCounter() {
  const input = document.getElementById('wc-input');
  const words = document.getElementById('wc-words');
  const chars = document.getElementById('wc-chars');
  const charsNs = document.getElementById('wc-charsns');
  const sentences = document.getElementById('wc-sentences');
  const paragraphs = document.getElementById('wc-paragraphs');
  if (!input) return;

  function update() {
    const text = input.value;
    const wordMatches = text.trim().match(/\S+/g);
    const sentenceMatches = text.match(/[^.!?\u1362\u1364]+[.!?\u1362\u1364]/g);
    const paraMatches = text.split(/\n\s*\n/).filter((p) => p.trim() !== '');

    if (words) words.textContent = wordMatches ? wordMatches.length : 0;
    if (chars) chars.textContent = text.length;
    if (charsNs) charsNs.textContent = text.replace(/\s/g, '').length;
    if (sentences) sentences.textContent = sentenceMatches ? sentenceMatches.length : (text.trim() ? 1 : 0);
    if (paragraphs) paragraphs.textContent = paraMatches.length;
  }

  input.addEventListener('input', update);
  update();
}

// ---------- Base64 Encode/Decode ----------
function utf8ToBase64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}
function base64ToUtf8(str) {
  return decodeURIComponent(escape(atob(str)));
}

export function initBase64() {
  const input = document.getElementById('b64-input');
  const output = document.getElementById('b64-output');
  const encodeBtn = document.getElementById('b64-encode');
  const decodeBtn = document.getElementById('b64-decode');
  const copyBtn = document.getElementById('b64-copy');
  const status = document.getElementById('b64-status');
  if (!input || !output) return;

  encodeBtn.addEventListener('click', () => {
    output.value = utf8ToBase64(input.value);
    status.textContent = '';
  });
  decodeBtn.addEventListener('click', () => {
    try {
      output.value = base64ToUtf8(input.value.trim());
      status.textContent = '';
    } catch {
      status.textContent = status.dataset.errorLabel || 'Could not decode — check the input.';
      output.value = '';
    }
  });
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      if (!output.value) return;
      try { await navigator.clipboard.writeText(output.value); } catch { /* ignore */ }
    });
  }
}

// ---------- Timestamp Converter ----------
export function initTimestamp() {
  const tsInput = document.getElementById('ts-input');
  const tsResult = document.getElementById('ts-to-date-result');
  const nowBtn = document.getElementById('ts-now');
  const dateInput = document.getElementById('ts-date-input');
  const dateResult = document.getElementById('ts-to-ts-result');
  if (!tsInput || !tsResult) return;

  tsInput.addEventListener('input', () => {
    const n = Number(tsInput.value);
    if (!tsInput.value || Number.isNaN(n)) { tsResult.textContent = ''; return; }
    const ms = tsInput.value.length > 10 ? n : n * 1000; // accept seconds or ms
    const d = new Date(ms);
    tsResult.textContent = Number.isNaN(d.getTime()) ? '' : d.toString();
  });

  if (nowBtn) {
    nowBtn.addEventListener('click', () => {
      tsInput.value = Math.floor(Date.now() / 1000);
      tsInput.dispatchEvent(new Event('input'));
    });
  }

  if (dateInput && dateResult) {
    dateInput.addEventListener('input', () => {
      if (!dateInput.value) { dateResult.textContent = ''; return; }
      const d = new Date(dateInput.value);
      dateResult.textContent = Number.isNaN(d.getTime()) ? '' : String(Math.floor(d.getTime() / 1000));
    });
  }
}

// ---------- Image Compressor ----------
export function initImageCompressor() {
  const fileInput = document.getElementById('ic-file');
  const quality = document.getElementById('ic-quality');
  const qualityValue = document.getElementById('ic-quality-value');
  const beforeSize = document.getElementById('ic-before-size');
  const afterSize = document.getElementById('ic-after-size');
  const preview = document.getElementById('ic-preview');
  const download = document.getElementById('ic-download');
  if (!fileInput || !quality) return;

  let sourceImage = null;

  function formatKb(bytes) { return `${(bytes / 1024).toFixed(1)} KB`; }

  function compress() {
    if (!sourceImage) return;
    const canvas = document.createElement('canvas');
    canvas.width = sourceImage.width;
    canvas.height = sourceImage.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(sourceImage, 0, 0);
    canvas.toBlob((blob) => {
      if (!blob) return;
      if (afterSize) afterSize.textContent = formatKb(blob.size);
      const url = URL.createObjectURL(blob);
      if (preview) { preview.src = url; preview.style.visibility = 'visible'; }
      if (download) {
        download.href = url;
        download.download = 'compressed.jpg';
        download.style.visibility = 'visible';
      }
    }, 'image/jpeg', Number(quality.value) / 100);
  }

  fileInput.addEventListener('change', () => {
    const file = fileInput.files && fileInput.files[0];
    if (!file) return;
    if (beforeSize) beforeSize.textContent = formatKb(file.size);
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => { sourceImage = img; compress(); };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });

  quality.addEventListener('input', () => {
    if (qualityValue) qualityValue.textContent = quality.value;
    compress();
  });
}
