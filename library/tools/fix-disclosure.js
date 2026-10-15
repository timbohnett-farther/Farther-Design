// Replace a library piece's legacy disclosure with the official one (guidelines/compliance/DISCLOSURE.md).
// Keeps topic-specific risk sentences (index, past performance, hypothetical limits, insurance, trusts, etc.)
// as a supplemental paragraph after the verbatim official text. Generic boilerplate now covered by the
// official text is dropped. Usage: eval(this file); const r = fixDisclosure(html, FULL, CONDENSED);
const GENERIC = [/prepared by Farther/i, /offer to sell|offer or solicitation|solicitation of an offer|not intended for distribution to, or use by/i,
  /registered (as an )?investment adviser|investment adviser registered|SEC-registered|registration (as an investment adviser )?does not imply|^Registration does not imply/i,
  /informational (and educational )?purposes only|educational and informational purposes/i, /does not constitute (personalized )?investment|^It does not constitute/i,
  /does not provide (tax or )?legal advice|does not provide tax or legal/i, /Form ADV|Form CRS/i, /involves risk, including (the )?possible loss of principal/i, /^Securities and Exchange Commission/i,
  /^Please consult (your own qualified tax advisor or attorney|your advisor regarding|a (qualified|licensed) attorney)/i, /^Consult your qualified tax advisor and attorney/i,
  /^Any tax-related discussion/i, /^Any hypothetical illustrations, examples, or scenarios/i, /^Any examples presented are hypothetical/i,
  /^Actual results will vary based on individual circumstances/i, /^Individual results will vary/i];
const dec = s => s.replace(/<[^>]+>/g, ' ').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
const enc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const split = t => t.replace(/U\.S\. /g, 'U.S.\u00a0').split(/(?<=[.!?])\s+(?=[A-Z"(])/).map(x => x.replace(/\u00a0/g, ' ').trim()).filter(Boolean);
const specific = t => split(t).filter(s => !GENERIC.some(r => r.test(s)));
function matchDiv(s, start) { let d = 0, i = start; const re = /<\/?div\b/g; re.lastIndex = start; let m; while ((m = re.exec(s))) { d += m[0] === '<div' ? 1 : -1; if (d === 0) return s.indexOf('>', m.index) + 1; } return -1; }
function fixDisclosure(html, FULL, CONDENSED) {
  if (html.includes('Christopher Powers')) return { html, status: 'already' };
  const hi = html.search(/Important disclosures?/i); if (hi < 0) return { html, status: 'none' };
  const inline = /^Important Disclosures?:/i.test(html.slice(hi, hi + 30));
  const divStart = html.lastIndexOf('<div', hi);
  if (inline) {
    const end = matchDiv(html, divStart), old = html.slice(divStart, end), openTag = old.slice(0, old.indexOf('>') + 1);
    const extra = specific(dec(old).replace(/^Important Disclosures?:\s*/i, ''));
    const tag = openTag.replace(/color:#[0-9a-fA-F]{3,6}/, 'color:#5B6A71');
    const text = 'Important Disclosures: ' + CONDENSED.join(' ') + (CONDENSED[2].endsWith('.') ? '' : '.') + (extra.length ? ' ' + extra.join(' ') : '');
    return { html: html.slice(0, divStart) + tag + enc(text) + '</div>' + html.slice(end), status: 'inline', extra: extra.length, delta: text.length - dec(old).length };
  }
  // block: heading div inside a container; replace the paragraph divs that follow the heading
  const cStart = html.lastIndexOf('<div', divStart - 1), cEnd = matchDiv(html, cStart), hEnd = matchDiv(html, divStart);
  const rest = html.slice(hEnd, cEnd - 6); const paras = [], keepRows = []; let i = 0, pStyle = null;
  while (true) { const a = rest.indexOf('<div', i); if (a < 0) break; const b = matchDiv(rest, a); const seg = rest.slice(a, b); if (/^<div[^>]*display:flex/.test(seg)) { keepRows.push(seg); i = b; continue; } pStyle = pStyle || seg.slice(0, seg.indexOf('>') + 1); paras.push(dec(seg)); i = b; }
  const extra = specific(paras.join(' '));
  const tag = (pStyle || '<div style="font-size:6.3px;line-height:1.45;color:#5B6A71">').replace(/color:#[0-9a-fA-F]{3,6}/, 'color:#5B6A71');
  const body = FULL.map(p => tag + enc(p) + '</div>').join('\n      ') + (extra.length ? '\n      ' + tag + enc(extra.join(' ')) + '</div>' : '') + keepRows.map(r => '\n      ' + r).join('');
  const newHtml = html.slice(0, hEnd) + '\n      ' + body + '\n    ' + html.slice(cEnd - 6);
  return { html: newHtml, status: 'block', extra: extra.length, delta: dec(body).length - paras.join(' ').length };
}
