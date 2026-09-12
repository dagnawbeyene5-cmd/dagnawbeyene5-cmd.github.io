
<!DOCTYPE html>
<html lang="en">
<head>
<script>(function(){try{var t=localStorage.getItem('dagi-portfolio-theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}})();</script>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>DAGI // Tools Hub</title>
<meta name="theme-color" content="#050812">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="tools.css">
</head>
<body>
<div class="crt-overlay" aria-hidden="true"></div>

<header class="site-header" id="site-header">
  <a href="index.html#home" class="brand" data-sound="ui-click">
    <img src="assets/images/profile.jpg" alt="Dagi" class="brand-photo" onerror="this.style.display='none'">
    <span class="brand-mark">DAGI<span class="dot">.</span></span>
  </a>

  <nav class="nav-desktop" aria-label="Primary">
    <a href="index.html#home" class="nav-link icon-home" data-sound="ui-click"><b>01</b><span data-i18n="nav.home">Home</span></a>
    <a href="index.html#about" class="nav-link icon-about" data-sound="ui-click"><b>02</b><span data-i18n="nav.about">About</span></a>
    <a href="index.html#skills" class="nav-link icon-skills" data-sound="ui-click"><b>03</b><span data-i18n="nav.skills">Skills</span></a>
    <a href="index.html#projects" class="nav-link icon-projects" data-sound="ui-click"><b>04</b><span data-i18n="nav.projects">Projects</span></a>
    <a href="index.html#certificates" class="nav-link icon-certificates" data-sound="ui-click"><b>05</b><span data-i18n="nav.certificates">Certificates</span></a>
    <a href="tools.html" class="nav-link icon-tools active-page" data-sound="tools"><b>06</b><span data-i18n="nav.tools">Tools</span></a>
    <a href="index.html#contact" class="nav-link icon-contact" data-sound="ui-click"><b>07</b><span data-i18n="nav.contact">Contact</span></a>
  </nav>

  <div class="header-actions">
    <div class="theme-switch" id="theme-switch" role="group" aria-label="Theme">
      <button type="button" class="theme-btn" data-theme-option="cyber" style="--swatch:#00E5C7" aria-label="Cyber theme"></button>
      <button type="button" class="theme-btn" data-theme-option="cultural" style="--swatch:#FCDD09" aria-label="Cultural theme"></button>
      <button type="button" class="theme-btn" data-theme-option="light" style="--swatch:#0E7C7B" aria-label="Light theme"></button>
      <button type="button" class="theme-btn" data-theme-option="retro" style="--swatch:#33FF33" aria-label="Retro theme"></button>
    </div>
    <div class="lang-switch" id="lang-switch" role="group" aria-label="Language">
      <button type="button" class="lang-btn" data-lang="en">EN</button>
      <button type="button" class="lang-btn" data-lang="am">AM</button>
      <button type="button" class="lang-btn" data-lang="om">OM</button>
      <button type="button" class="lang-btn" data-lang="zh">中文</button>
    </div>
    <button class="sound-toggle" id="sound-toggle" type="button" aria-pressed="false" data-sound="toggle">
      <span class="sound-dot" aria-hidden="true"></span>
      <span class="sound-label" data-i18n="sound.off">SOUND OFF</span>
    </button>
    <button class="menu-btn icon-menu" id="menu-btn" type="button" aria-expanded="false" aria-controls="mobile-menu" data-sound="menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>

<div class="mobile-menu" id="mobile-menu" aria-hidden="true">
  <nav aria-label="Mobile">
    <a href="index.html#home" class="icon-home" data-sound="ui-click"><b>01</b><span data-i18n="nav.home">Home</span></a>
    <a href="index.html#about" class="icon-about" data-sound="ui-click"><b>02</b><span data-i18n="nav.about">About</span></a>
    <a href="index.html#skills" class="icon-skills" data-sound="ui-click"><b>03</b><span data-i18n="nav.skills">Skills</span></a>
    <a href="index.html#projects" class="icon-projects" data-sound="ui-click"><b>04</b><span data-i18n="nav.projects">Projects</span></a>
    <a href="index.html#certificates" class="icon-certificates" data-sound="ui-click"><b>05</b><span data-i18n="nav.certificates">Certificates</span></a>
    <a href="tools.html" data-sound="tools"><b>06</b><span data-i18n="nav.tools">Tools</span></a>
    <a href="index.html#contact" class="icon-contact" data-sound="ui-click"><b>07</b><span data-i18n="nav.contact">Contact</span></a>
  </nav>
  <div class="theme-switch theme-switch--mobile" id="theme-switch-mobile" role="group" aria-label="Theme">
    <button type="button" class="theme-btn" data-theme-option="cyber" style="--swatch:#00E5C7" aria-label="Cyber theme"></button>
    <button type="button" class="theme-btn" data-theme-option="cultural" style="--swatch:#FCDD09" aria-label="Cultural theme"></button>
    <button type="button" class="theme-btn" data-theme-option="light" style="--swatch:#0E7C7B" aria-label="Light theme"></button>
    <button type="button" class="theme-btn" data-theme-option="retro" style="--swatch:#33FF33" aria-label="Retro theme"></button>
  </div>
  <div class="lang-switch lang-switch--mobile" id="lang-switch-mobile" role="group" aria-label="Language">
    <button type="button" class="lang-btn" data-lang="en">EN</button>
    <button type="button" class="lang-btn" data-lang="am">AM</button>
    <button type="button" class="lang-btn" data-lang="om">OM</button>
    <button type="button" class="lang-btn" data-lang="zh">中文</button>
  </div>
  <p class="menu-footer" data-i18n="menu.footer">SYS // NAVIGATION LIVE</p>
</div>

<main>
  <section class="section tools-intro">
    <p class="section-index" data-i18n="tools.index">06 // TOOLS HUB</p>
    <h1 class="section-title" data-i18n="tools.title">Small utilities, built one at a time.</h1>
    <p class="section-note" data-i18n="tools.note">One tool is live below. The rest are modular slots — each new tool is added to modules/toolsData.js without touching this page's structure.</p>
  </section>

  <section class="section">
    <div class="tools-grid" id="tools-grid"><!-- rendered by tools.js from modules/toolsData.js --></div>
  </section>

  <section class="section section-tight">
    <div class="tool-panel" id="password-tool">
      <div class="tool-panel-head">
        <h2 data-i18n="tool.password.title">Password Generator</h2>
        <p data-i18n="tool.password.desc">Generate a random password locally in your browser. Nothing is sent anywhere.</p>
      </div>

      <div class="pw-output-row">
        <input type="text" id="pw-output" class="pw-output" readonly aria-label="Generated password">
        <button type="button" id="pw-copy" class="btn btn-ghost" data-sound="ui-click"><span data-i18n="tool.copy">Copy</span></button>
      </div>

      <div class="pw-controls">
        <label class="pw-range-label">
          <span data-i18n="tool.password.length">Length</span>: <span id="pw-length-value">16</span>
          <input type="range" id="pw-length" min="6" max="48" value="16">
        </label>
        <div class="pw-checks">
          <label><input type="checkbox" id="pw-upper" checked> <span data-i18n="tool.password.upper">Uppercase (A-Z)</span></label>
          <label><input type="checkbox" id="pw-lower" checked> <span data-i18n="tool.password.lower">Lowercase (a-z)</span></label>
          <label><input type="checkbox" id="pw-numbers" checked> <span data-i18n="tool.password.numbers">Numbers (0-9)</span></label>
          <label><input type="checkbox" id="pw-symbols"> <span data-i18n="tool.password.symbols">Symbols (!@#$...)</span></label>
        </div>
        <button type="button" id="pw-generate" class="btn btn-primary" data-sound="ui-click" data-i18n="tool.generate">Generate</button>
      </div>
      <p class="pw-status" id="pw-status" role="status" aria-live="polite"></p>
    </div>
  </section>

  <!-- ============ QR CODE GENERATOR ============ -->
  <section class="section section-tight">
    <div class="tool-panel" id="qr-tool">
      <div class="tool-panel-head">
        <h2 data-i18n="tool.qr.title">QR Code Generator</h2>
        <p data-i18n="tool.qr.desc">Turn any text or link into a scannable QR code.</p>
      </div>
      <input type="text" id="qr-input" class="tool-text-input" data-i18n-placeholder="tool.qr.placeholder" placeholder="Enter text or a URL">
      <div class="qr-output-row">
        <img id="qr-image" class="qr-image" alt="Generated QR code" style="visibility:hidden">
        <a id="qr-download" class="btn btn-ghost" download="qr-code.png" style="visibility:hidden" data-sound="ui-click" data-i18n="tool.qr.download">Download QR</a>
      </div>
    </div>
  </section>

  <!-- ============ UNIT CONVERTER ============ -->
  <section class="section section-tight">
    <div class="tool-panel" id="unit-tool">
      <div class="tool-panel-head">
        <h2 data-i18n="tool.unit.title">Unit Converter</h2>
        <p data-i18n="tool.unit.desc">Convert length, weight, and temperature instantly.</p>
      </div>
      <select id="unit-category" class="tool-select">
        <option value="length" data-i18n="tool.unit.length">Length</option>
        <option value="weight" data-i18n="tool.unit.weight">Weight</option>
        <option value="temperature" data-i18n="tool.unit.temperature">Temperature</option>
      </select>
      <div class="unit-row">
        <input type="number" id="unit-from-value" class="tool-text-input" value="1">
        <select id="unit-from" class="tool-select"></select>
        <span class="unit-equals">=</span>
        <input type="text" id="unit-to-value" class="tool-text-input" readonly>
        <select id="unit-to" class="tool-select"></select>
      </div>
    </div>
  </section>

  <!-- ============ COLOR PALETTE PICKER ============ -->
  <section class="section section-tight">
    <div class="tool-panel" id="palette-tool">
      <div class="tool-panel-head">
        <h2 data-i18n="tool.palette.title">Color Palette Picker</h2>
        <p data-i18n="tool.palette.desc">Pick a color and get a tasteful 5-shade palette. Click a swatch to copy its hex code.</p>
      </div>
      <input type="color" id="palette-picker" class="palette-picker-input" value="#00E5C7">
      <div class="palette-grid" id="palette-grid"></div>
    </div>
  </section>

  <!-- ============ MARKDOWN PREVIEW ============ -->
  <section class="section section-tight">
    <div class="tool-panel" id="markdown-tool">
      <div class="tool-panel-head">
        <h2 data-i18n="tool.markdown.title">Markdown Preview</h2>
        <p data-i18n="tool.markdown.desc">Write Markdown, see it rendered live — headings, bold, italics, links, and lists.</p>
      </div>
      <div class="md-grid">
        <textarea id="md-input" class="tool-textarea" rows="8" placeholder="Markdown">## Hello

This is **bold**, this is *italic*.

- One
- Two
- [A link](https://example.com)</textarea>
        <div id="md-preview" class="md-preview"></div>
      </div>
    </div>
  </section>

  <!-- ============ JSON FORMATTER ============ -->
  <section class="section section-tight">
    <div class="tool-panel" id="json-tool">
      <div class="tool-panel-head">
        <h2 data-i18n="tool.json.title">JSON Formatter</h2>
        <p data-i18n="tool.json.desc">Pretty-print and validate JSON, right in the browser.</p>
      </div>
      <textarea id="json-input" class="tool-textarea" rows="6" placeholder='{"hello":"world"}'></textarea>
      <div class="tool-btn-row">
        <button type="button" id="json-format" class="btn btn-primary" data-sound="ui-click" data-i18n="tool.json.format">Format</button>
        <button type="button" id="json-copy" class="btn btn-ghost" data-sound="ui-click"><span data-i18n="tool.copy">Copy</span></button>
      </div>
      <p class="tool-status" id="json-status" data-invalid-label="Invalid JSON:" role="status" aria-live="polite"></p>
      <textarea id="json-output" class="tool-textarea" rows="6" readonly></textarea>
    </div>
  </section>

  <!-- ============ WORD COUNTER ============ -->
  <section class="section section-tight">
    <div class="tool-panel" id="wordcount-tool">
      <div class="tool-panel-head">
        <h2 data-i18n="tool.wordcount.title">Word Counter</h2>
        <p data-i18n="tool.wordcount.desc">Live word, character, sentence, and paragraph counts.</p>
      </div>
      <textarea id="wc-input" class="tool-textarea" rows="6"></textarea>
      <div class="wc-stats">
        <div><span id="wc-words">0</span><span data-i18n="tool.wordcount.words">Words</span></div>
        <div><span id="wc-chars">0</span><span data-i18n="tool.wordcount.chars">Characters</span></div>
        <div><span id="wc-charsns">0</span><span data-i18n="tool.wordcount.charsns">Characters (no spaces)</span></div>
        <div><span id="wc-sentences">0</span><span data-i18n="tool.wordcount.sentences">Sentences</span></div>
        <div><span id="wc-paragraphs">0</span><span data-i18n="tool.wordcount.paragraphs">Paragraphs</span></div>
      </div>
    </div>
  </section>

  <!-- ============ BASE64 ENCODER/DECODER ============ -->
  <section class="section section-tight">
    <div class="tool-panel" id="base64-tool">
      <div class="tool-panel-head">
        <h2 data-i18n="tool.base64.title">Base64 Encoder / Decoder</h2>
        <p data-i18n="tool.base64.desc">Encode text to Base64, or decode Base64 back to text.</p>
      </div>
      <textarea id="b64-input" class="tool-textarea" rows="4"></textarea>
      <div class="tool-btn-row">
        <button type="button" id="b64-encode" class="btn btn-primary" data-sound="ui-click" data-i18n="tool.base64.encode">Encode</button>
        <button type="button" id="b64-decode" class="btn btn-ghost" data-sound="ui-click" data-i18n="tool.base64.decode">Decode</button>
        <button type="button" id="b64-copy" class="btn btn-ghost" data-sound="ui-click"><span data-i18n="tool.copy">Copy</span></button>
      </div>
      <p class="tool-status" id="b64-status" data-error-label="Could not decode — check the input." role="status" aria-live="polite"></p>
      <textarea id="b64-output" class="tool-textarea" rows="4" readonly></textarea>
    </div>
  </section>

  <!-- ============ TIMESTAMP CONVERTER ============ -->
  <section class="section section-tight">
    <div class="tool-panel" id="timestamp-tool">
      <div class="tool-panel-head">
        <h2 data-i18n="tool.timestamp.title">Timestamp Converter</h2>
        <p data-i18n="tool.timestamp.desc">Convert between Unix timestamps and human-readable dates.</p>
      </div>
      <p class="tool-subhead" data-i18n="tool.timestamp.toDate">Timestamp → Date</p>
      <div class="tool-btn-row">
        <input type="text" id="ts-input" class="tool-text-input" placeholder="1735689600">
        <button type="button" id="ts-now" class="btn btn-ghost" data-sound="ui-click" data-i18n="tool.timestamp.now">Use current time</button>
      </div>
      <p class="tool-result" id="ts-to-date-result"></p>

      <p class="tool-subhead" data-i18n="tool.timestamp.toTimestamp">Date → Timestamp</p>
      <input type="datetime-local" id="ts-date-input" class="tool-text-input">
      <p class="tool-result" id="ts-to-ts-result"></p>
    </div>
  </section>

  <!-- ============ IMAGE COMPRESSOR ============ -->
  <section class="section section-tight">
    <div class="tool-panel" id="imagecompress-tool">
      <div class="tool-panel-head">
        <h2 data-i18n="tool.imagecompress.title">Image Compressor</h2>
        <p data-i18n="tool.imagecompress.desc">Shrink image file size right in the browser.</p>
      </div>
      <label class="btn btn-primary ic-choose-btn" data-sound="ui-click">
        <span data-i18n="tool.imagecompress.choose">Choose image</span>
        <input type="file" id="ic-file" accept="image/*" hidden>
      </label>
      <label class="pw-range-label">
        <span data-i18n="tool.imagecompress.quality">Quality</span>: <span id="ic-quality-value">70</span>%
        <input type="range" id="ic-quality" min="10" max="95" value="70">
      </label>
      <div class="ic-sizes">
        <span data-i18n="tool.imagecompress.before">Original</span>: <span id="ic-before-size">—</span>
        &nbsp;→&nbsp;
        <span data-i18n="tool.imagecompress.after">Compressed</span>: <span id="ic-after-size">—</span>
      </div>
      <img id="ic-preview" class="ic-preview" alt="Compressed preview" style="visibility:hidden">
      <a id="ic-download" class="btn btn-ghost" style="visibility:hidden" data-sound="ui-click" data-i18n="tool.imagecompress.download">Download</a>
    </div>
  </section>
</main>

<footer class="site-footer">
  <span data-i18n="footer.tag1">DAGI. — Developer Portfolio</span>
  <span>STATIC / FAST / MODULAR ©</span>
</footer>

<script type="module" src="tools.js"></script>
</body>
</html>
