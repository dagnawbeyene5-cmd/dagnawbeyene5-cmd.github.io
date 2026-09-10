# DAGI. — Developer Portfolio

A static, dependency-free portfolio built with plain HTML, CSS and ES modules.
No build step, no Node server, no backend — works directly on GitHub Pages.

## Folder structure

```
portfolio/
├── index.html
├── style.css
├── script.js
│
├── tools.html
├── tools.css
├── tools.js
│
├── modules/
│   ├── audio.js          ← centralized sound manager
│   ├── hero.js            ← hero video/fallback logic
│   ├── certificates.js    ← certificate data + modal viewer
│   ├── navigation.js      ← menu + sound toggle wiring
│   ├── animations.js      ← hero particle layer
│   ├── i18n.js             ← EN/AM/OM/ZH translations
│   └── toolsData.js       ← Tools Hub card data
│
├── assets/
│   ├── images/profile.jpg
│   ├── video/hero.mp4
│   ├── certificates/certificate-1.jpg … certificate-6.jpg
│   └── cv/dagi-cv.pdf
│
└── sounds/
    ├── ui-click.wav
    ├── projects.wav
    ├── tools.wav
    ├── cv.wav
    ├── contact.wav
    ├── menu.wav
    └── toggle.wav
```

## What's real vs. placeholder

- **About text and all 6 certificate entries** are your real content.
- **Project cards** are intentionally empty placeholder slots — no invented projects.
- **Contact email** is a placeholder (`YOUR-EMAIL@example.com` in `index.html`) — replace it with your real address.
- **Assets** (photo, video, certificate images, CV, sound files) are not included — see the paths above. The site works fine with all of them missing (graceful fallbacks everywhere); it just looks/sounds better once they're in.

## How to add each asset

Just place each file at the exact path listed above. Nothing else needs to change:

| What | Path |
|---|---|
| Profile photo | `assets/images/profile.jpg` |
| Hero video | `assets/video/hero.mp4` |
| Certificate images (in order) | `assets/certificates/certificate-1.jpg` → `certificate-6.jpg` (matches the order in the last preview message) |
| CV | `assets/cv/dagi-cv.pdf` |
| Sound effects | `sounds/ui-click.wav`, `projects.wav`, `tools.wav`, `cv.wav`, `contact.wav`, `menu.wav`, `toggle.wav` |

To add a 7th+ certificate later: add one entry to the `CERTIFICATES` array at the top of `modules/certificates.js` and drop in the matching image — nothing else changes.

## Local preview (optional, no install required)

You can just double-click `index.html` to open it in a browser. If certain features
look off due to browser file:// restrictions, run a tiny local server instead:

```bash
cd portfolio
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

## Deploying to GitHub Pages

1. Delete the old site files from your repository (or clear the repo), keeping the repository itself.
2. Add all files from this `portfolio/` folder to the **root** of your repository (so `index.html` sits at the repo root, not inside a subfolder).
3. Commit and push.
4. In your repository: **Settings → Pages → Build and deployment → Source**, set it to **Deploy from a branch**, branch **main** (or whichever branch you pushed to), folder **/ (root)**. Save.
5. Wait 1–2 minutes, then visit `https://dagnawbeyene5-cmd.github.io/` — it should show the new site.

## Notes

- All asset paths are relative, so this works correctly under GitHub Pages' subpath serving.
- Filenames are case-sensitive on GitHub Pages — keep them exactly as listed above.
- The sound toggle defaults to OFF and remembers your choice via the browser (not shared across visitors).
- The language switcher remembers the last language picked, per visitor's browser.
