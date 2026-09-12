// tools.js — entry point for tools.html
import { initNavigation } from './modules/navigation.js';
import { initI18n, t } from './modules/i18n.js';
import { renderTools } from './modules/toolsData.js';
import { initFallingFlowers } from './modules/newyear.js';
import { initTheme } from './modules/theme.js';

const CHARSETS = {
  upper: 'ABCDEFGHJKLMNPQRSTUVWXYZ', // excludes ambiguous I/O
  lower: 'abcdefghijkmnpqrstuvwxyz', // excludes ambiguous l/o
  numbers: '23456789', // excludes ambiguous 0/1
  symbols: '!@#$%^&*()-_=+[]{}',
};

function generatePassword({ length, upper, lower, numbers, symbols }) {
  let pool = '';
  if (upper) pool += CHARSETS.upper;
  if (lower) pool += CHARSETS.lower;
  if (numbers) pool += CHARSETS.numbers;
  if (symbols) pool += CHARSETS.symbols;
  if (!pool) return '';

  const bytes = new Uint32Array(length);
  crypto.getRandomValues(bytes);
  let result = '';
  for (let i = 0; i < length; i++) {
    result += pool[bytes[i] % pool.length];
  }
  return result;
}

function initPasswordGenerator() {
  const output = document.getElementById('pw-output');
  const lengthInput = document.getElementById('pw-length');
  const lengthValue = document.getElementById('pw-length-value');
  const upperCb = document.getElementById('pw-upper');
  const lowerCb = document.getElementById('pw-lower');
  const numbersCb = document.getElementById('pw-numbers');
  const symbolsCb = document.getElementById('pw-symbols');
  const generateBtn = document.getElementById('pw-generate');
  const copyBtn = document.getElementById('pw-copy');
  const status = document.getElementById('pw-status');
  if (!output || !generateBtn) return;

  function run() {
    const options = {
      length: Number(lengthInput.value),
      upper: upperCb.checked,
      lower: lowerCb.checked,
      numbers: numbersCb.checked,
      symbols: symbolsCb.checked,
    };
    if (!options.upper && !options.lower && !options.numbers && !options.symbols) {
      output.value = '';
      status.textContent = '';
      return;
    }
    output.value = generatePassword(options);
    status.textContent = '';
  }

  lengthInput.addEventListener('input', () => {
    lengthValue.textContent = lengthInput.value;
    run();
  });
  [upperCb, lowerCb, numbersCb, symbolsCb].forEach((cb) => cb.addEventListener('change', run));
  generateBtn.addEventListener('click', run);

  copyBtn.addEventListener('click', async () => {
    if (!output.value) return;
    try {
      await navigator.clipboard.writeText(output.value);
      status.textContent = t('tool.copied');
    } catch {
      // Clipboard API blocked (older browser / permissions) — fall back to manual select.
      output.select();
      status.textContent = '';
    }
  });

  run();
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initI18n();
  initPasswordGenerator();
  initFallingFlowers();

  const grid = document.getElementById('tools-grid');
  renderTools(grid, t);
  document.addEventListener('lang:changed', () => renderTools(grid, t));
});

