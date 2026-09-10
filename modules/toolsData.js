// modules/toolsData.js
// To add a future tool: add one entry here with status: 'live' or 'soon'.
// No other file needs to change for a 'soon' entry to appear on the Tools Hub.

export const TOOLS = [
  { id: 'password', icon: '⚿', titleKey: 'tool.password.title', descKey: 'tool.password.desc', status: 'live', anchor: '#password-tool' },
  { id: 'qr', icon: '▦', titleKey: 'tool.qr.title', descKey: 'tool.qr.desc', status: 'soon' },
  { id: 'unit', icon: '⇄', titleKey: 'tool.unit.title', descKey: 'tool.unit.desc', status: 'soon' },
  { id: 'palette', icon: '◐', titleKey: 'tool.palette.title', descKey: 'tool.palette.desc', status: 'soon' },
  { id: 'markdown', icon: '¶', titleKey: 'tool.markdown.title', descKey: 'tool.markdown.desc', status: 'soon' },
  { id: 'json', icon: '{}', titleKey: 'tool.json.title', descKey: 'tool.json.desc', status: 'soon' },
  { id: 'wordcount', icon: '≡', titleKey: 'tool.wordcount.title', descKey: 'tool.wordcount.desc', status: 'soon' },
  { id: 'base64', icon: '⌬', titleKey: 'tool.base64.title', descKey: 'tool.base64.desc', status: 'soon' },
  { id: 'timestamp', icon: '⏱', titleKey: 'tool.timestamp.title', descKey: 'tool.timestamp.desc', status: 'soon' },
  { id: 'imagecompress', icon: '▨', titleKey: 'tool.imagecompress.title', descKey: 'tool.imagecompress.desc', status: 'soon' },
];

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/** Renders the tool grid. `t` is the i18n lookup function passed in from tools.js. */
export function renderTools(gridEl, t) {
  if (!gridEl) return;
  gridEl.innerHTML = TOOLS.map((tool) => {
    const isLive = tool.status === 'live';
    const href = isLive ? (tool.anchor || '#') : null;
    const tag = isLive ? 'a' : 'div';
    const hrefAttr = isLive ? `href="${href}"` : '';
    return `
      <${tag} class="tool-card tool-card--${tool.status}" ${hrefAttr} ${isLive ? 'data-sound="ui-click"' : ''}>
        <span class="tool-card__icon" aria-hidden="true">${tool.icon}</span>
        <h3>${escapeHtml(t(tool.titleKey))}</h3>
        <p>${escapeHtml(t(tool.descKey))}</p>
        <span class="tool-card__status">${isLive ? escapeHtml(t('tool.status.live')) : escapeHtml(t('tool.status.soon'))}</span>
      </${tag}>
    `;
  }).join('');
}
