import { AudioManager } from "./modules/audio.js";
import { initHero } from "./modules/hero.js";
import { initCertificates } from "./modules/certificates.js";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const audio = new AudioManager({
  basePath: "./sounds/",
  sounds: {
    nav: "ui-click.wav",
    menu: "menu.wav",
    projects: "projects.wav",
    tools: "tools.wav",
    cv: "cv.wav",
    contact: "contact.wav",
    toggle: "toggle.wav"
  }
});

const soundToggle = $("#soundToggle");
const menuToggle = $("#menuToggle");
const mobilePanel = $("#mobilePanel");
const introScreen = $("#introScreen");
const scrollTop = $("#scrollTop");
const year = $("#currentYear");

function setSoundUI(enabled) {
  soundToggle.classList.toggle("sound-on", enabled);
  soundToggle.classList.toggle("sound-off", !enabled);
  soundToggle.setAttribute("aria-pressed", String(enabled));
  soundToggle.setAttribute("aria-label", enabled ? "Turn interface sound off" : "Turn interface sound on");
  $(".sound-label", soundToggle).textContent = enabled ? "SOUND ON" : "SOUND OFF";
}

soundToggle.addEventListener("click", async () => {
  const enabled = audio.toggle();
  setSoundUI(enabled);
  if (enabled) {
    await audio.play("toggle");
  }
});

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-sound]");
  if (!target || target === soundToggle) return;
  audio.play(target.dataset.sound);
});

function setMenu(open) {
  document.body.classList.toggle("menu-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  mobilePanel.classList.toggle("is-open", open);
  mobilePanel.setAttribute("aria-hidden", String(!open));
  if (open) audio.play("menu");
}
menuToggle.addEventListener("click", () => setMenu(menuToggle.getAttribute("aria-expanded") !== "true"));
$$(".mobile-panel a").forEach(link => link.addEventListener("click", () => setMenu(false)));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
$$(".reveal").forEach(el => revealObserver.observe(el));

const sections = $$("main section[id]");
const navLinks = $$(".desktop-nav .nav-link");
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
sections.forEach(section => sectionObserver.observe(section));

window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("is-visible", window.scrollY > 500);
}, { passive: true });

scrollTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

window.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if (menuToggle.getAttribute("aria-expanded") === "true") setMenu(false);
    const modal = $("#certificateModal");
    if (modal && !modal.hidden) window.dispatchEvent(new CustomEvent("certificate:close"));
  }
});

year.textContent = new Date().getFullYear();

initHero({
  video: $("#heroVideo"),
  canvas: $("#particles")
});

initCertificates({
  grid: $("#certificateGrid"),
  modal: $("#certificateModal"),
  preview: $("#certificatePreview"),
  title: $("#certificateModalTitle")
});

setSoundUI(audio.enabled);

window.PORTFOLIO_AUDIO = audio;
