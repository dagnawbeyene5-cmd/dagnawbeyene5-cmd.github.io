# DAGI — Personal Developer Portfolio

A lightweight, static, futuristic developer portfolio with modular JavaScript.

## What is included

- `index.html` — main portfolio
- `style.css` — main design system
- `script.js` — small app coordinator
- `tools.html` / `tools.css` / `tools.js` — Tools Hub
- `modules/audio.js` — centralized audio manager
- `modules/hero.js` — hero video + lightweight particles
- `modules/certificates.js` — certificate registry + modal/3D tilt
- `assets/images/profile.jpg` — supplied profile image
- `assets/video/` — put the supplied hero video here
- `assets/certificates/` — put certificate images/PDFs here
- `sounds/` — put the existing sound files here

## Hero video

Put the real video at:

`assets/video/hero.mp4`

The HTML already uses:

- `autoplay`
- `muted`
- `loop`
- `playsinline`
- `preload="metadata"`

The profile image remains the visual fallback until the video loads.

## Certificates

1. Put each real certificate in `assets/certificates/`.
2. Open `modules/certificates.js`.
3. Add one object per real certificate.
4. Use the exact filename.
5. Do not invent titles, issuers, dates or other details.

Example:

```js
const CERTIFICATES = [
  {
    id: "example",
    title: "REAL CERTIFICATE TITLE",
    issuer: "REAL ISSUER",
    file: "./assets/certificates/example.pdf",
    type: "pdf"
  }
];
```

## Sound system

The sound manager is centralized in `modules/audio.js`.

Expected existing files:

- `ui-click.wav`
- `projects.wav`
- `tools.wav`
- `cv.wav`
- `contact.wav`
- `menu.wav`
- `toggle.wav`

The old `click.wav` is not referenced by the new system, so it can remain temporarily or be removed later after you verify nothing else needs it.

Important browser behavior: sound cannot be forced before a user gesture. The ON/OFF state is stored in `localStorage`; actual playback failures are logged instead of falsely changing the state.

If a sound file is missing, the UI still works without crashing.

## CV

No fake CV file or personal contact information is included. When you provide the real CV, put it in something like:

`assets/docs/Dagi-CV.pdf`

Then add a real link to it in `index.html`.

## GitHub Pages

Upload the contents of this folder into the repository root.

Do NOT delete the repository.

Recommended structure:

Dagi-Portfolio/
├── index.html
├── style.css
├── script.js
├── tools.html
├── tools.css
├── tools.js
├── modules/
│   ├── audio.js
│   ├── hero.js
│   └── certificates.js
├── assets/
│   ├── images/
│   │   └── profile.jpg
│   ├── video/
│   │   └── hero.mp4
│   ├── icons/
│   └── certificates/
└── sounds/

After upload, GitHub Pages should serve the site from the selected branch/root.

## Before publishing

Check:

- hero video path
- certificate paths
- sound filenames and capitalization
- real email/contact links
- real project information
- real CV path
- mobile menu
- sound toggle
- certificate modal
- Tools Hub password generator

For GitHub Pages, filenames are case-sensitive in the deployed environment. Keep filenames and references identical.
