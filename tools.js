import { AudioManager } from "./modules/audio.js";

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const audio = new AudioManager({
  basePath: "./sounds/",
  sounds: { nav:"ui-click.wav", menu:"menu.wav", tools:"tools.wav", toggle:"toggle.wav" }
});

const soundToggle = $("#soundToggle");
function syncSound() {
  const on = audio.enabled;
  soundToggle.classList.toggle("sound-on", on);
  soundToggle.classList.toggle("sound-off", !on);
  soundToggle.setAttribute("aria-pressed", String(on));
  $(".sound-label", soundToggle).textContent = on ? "SOUND ON" : "SOUND OFF";
}
soundToggle.addEventListener("click", async () => { syncSound(); audio.toggle(); syncSound(); if(audio.enabled) await audio.play("toggle"); });

const menuToggle = $("#menuToggle"), panel = $("#mobilePanel");
function setMenu(open) {
  menuToggle.setAttribute("aria-expanded", String(open));
  panel.classList.toggle("is-open", open);
  panel.setAttribute("aria-hidden", String(!open));
  if(open) audio.play("menu");
}
menuToggle.addEventListener("click", () => setMenu(menuToggle.getAttribute("aria-expanded") !== "true"));
$$(".mobile-panel a").forEach(a => a.addEventListener("click", () => setMenu(false)));

const search = $("#toolSearch"), categoryButtons = $$(".category-button"), cards = $$(".tool-card");
let category = "all";
function filter() {
  const q = search.value.trim().toLowerCase();
  cards.forEach(card => {
    const okCategory = category === "all" || card.dataset.category === category;
    const okSearch = !q || card.dataset.name.includes(q);
    card.hidden = !(okCategory && okSearch);
  });
}
search.addEventListener("input", filter);
categoryButtons.forEach(btn => btn.addEventListener("click", () => {
  category = btn.dataset.category;
  categoryButtons.forEach(b => b.classList.toggle("active", b === btn));
  filter();
}));

const passwordPanel = $("#passwordPanel");
$$("[data-tool-open='password']").forEach(btn => btn.addEventListener("click", () => {
  passwordPanel.hidden = false;
  passwordPanel.scrollIntoView({behavior:"smooth", block:"center"});
  audio.play("tools");
}));
$("#closePassword").addEventListener("click", () => passwordPanel.hidden = true);

const length = $("#pwLength"), lengthValue = $("#pwLengthValue"), output = $("#passwordOutput");
length.addEventListener("input", () => lengthValue.textContent = length.value);

$("#generatePassword").addEventListener("click", generate);
$("#copyPassword").addEventListener("click", async () => {
  if (!output.value || output.value === "Click Generate") return;
  try {
    await navigator.clipboard.writeText(output.value);
    $("#copyNote").textContent = "Copied to clipboard.";
  } catch {
    output.select();
    document.execCommand("copy");
    $("#copyNote").textContent = "Copied.";
  }
});

function generate() {
  const sets = [];
  if ($("#optUpper").checked) sets.push("ABCDEFGHJKLMNPQRSTUVWXYZ");
  if ($("#optLower").checked) sets.push("abcdefghijkmnopqrstuvwxyz");
  if ($("#optNumbers").checked) sets.push("23456789");
  if ($("#optSymbols").checked) sets.push("!@#$%^&*_-+=?");
  if (!sets.length) {
    $("#copyNote").textContent = "Select at least one character set.";
    return;
  }

  const chars = sets.join("");
  const values = new Uint32Array(Number(length.value));
  crypto.getRandomValues(values);
  const result = [];
  sets.forEach((set, i) => result.push(set[values[i] % set.length]));
  for (let i = result.length; i < values.length; i++) result.push(chars[values[i] % chars.length]);

  // Fisher-Yates shuffle using fresh cryptographic random values.
  for (let i = result.length - 1; i > 0; i--) {
    const r = new Uint32Array(1);
    crypto.getRandomValues(r);
    const j = r[0] % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }

  output.value = result.join("");
  $("#copyNote").textContent = "";
  updateStrength(result.join(""));
}
function updateStrength(value) {
  let score = 0;
  if(value.length >= 12) score++;
  if(value.length >= 20) score++;
  if(/[A-Z]/.test(value)) score++;
  if(/[a-z]/.test(value)) score++;
  if(/[0-9]/.test(value)) score++;
  if(/[^A-Za-z0-9]/.test(value)) score++;
  const pct = Math.min(100, Math.round(score / 6 * 100));
  $("#strengthFill").style.width = `${pct}%`;
  $("#strengthLabel").textContent = score <= 2 ? "Weak" : score <= 4 ? "Good" : "Strong";
}
$("#currentYear").textContent = new Date().getFullYear();
syncSound();
