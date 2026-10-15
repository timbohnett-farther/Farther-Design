// Advisor slot markup + placement: bottom-left corner of the cover page on every piece.
//   eval(await readFile('library/tools/slot.js')); html = placeSlot(html)  -> { html, ok }
const SLOT_OP = '<div data-advisor-slot style="align-self:flex-start;display:flex;align-items:center;gap:8px;padding-top:2px"><div data-advisor="headshot-wrap" style="width:26px;height:26px;border-radius:50%;background:#C5CFD4;overflow:hidden;flex:none"><img data-advisor="headshot" alt="" style="width:100%;height:100%;object-fit:cover;object-position:top;display:block"></div><div style="display:flex;flex-direction:column;gap:1px"><div style="display:flex;align-items:baseline;gap:6px;white-space:nowrap"><span data-advisor="name" style="font-family:\'ABC Arizona Text\',Palatino,Georgia,serif;font-weight:300;font-size:11.5px;color:#333333">Advisor Name</span><span data-advisor="title" style="font-size:7.5px;letter-spacing:0.06em;text-transform:uppercase;font-weight:600;color:#9F8E75">Title</span></div><div style="display:flex;gap:8px;font-size:8.5px;color:#5B6A71;white-space:nowrap"><span data-advisor="email">email@farther.com</span><span data-advisor="phone">(000) 000-0000</span></div></div></div>';
const SLOT_IW = '<div data-advisor-slot style="display:flex;align-items:center;gap:9px"><div data-advisor="headshot-wrap" style="width:34px;height:34px;border-radius:50%;background:#C5CFD4;overflow:hidden;flex:none"><img data-advisor="headshot" alt="" style="width:100%;height:100%;object-fit:cover;object-position:top;display:block"></div><div style="display:flex;flex-direction:column;gap:1px"><div data-advisor="name" style="font-family:\'ABC Arizona Text\',Georgia,serif;font-weight:300;font-size:12.5px;line-height:1.15;color:#333;white-space:nowrap">Advisor Name</div><div data-advisor="title" style="font-size:7.5px;letter-spacing:.08em;text-transform:uppercase;color:#9F8E75;white-space:nowrap">Title</div><div style="display:flex;gap:8px;font-size:8.5px;color:#5B6A71;white-space:nowrap"><span data-advisor="email">email@farther.com</span><span data-advisor="phone">(000) 000-0000</span></div></div></div>';
const SLOT_IW_INNER = '<div data-advisor-slot style="display:flex;align-items:center;gap:7px"><div data-advisor="headshot-wrap" style="width:24px;height:24px;border-radius:50%;background:#C5CFD4;overflow:hidden;flex:none"><img data-advisor="headshot" alt="" style="width:100%;height:100%;object-fit:cover;object-position:top;display:block"></div><div style="display:flex;flex-direction:column;gap:1px"><div data-advisor="name" style="font-family:\'ABC Arizona Text\',Georgia,serif;font-weight:300;font-size:10px;line-height:1.15;color:#333;white-space:nowrap">Advisor Name</div><div data-advisor="title" style="font-size:6.5px;letter-spacing:.08em;text-transform:uppercase;color:#9F8E75;white-space:nowrap">Title</div><div style="display:flex;gap:8px;font-size:7.5px;color:#5B6A71;white-space:nowrap"><span data-advisor="email">email@farther.com</span><span data-advisor="phone">(000) 000-0000</span></div></div></div>';

function _removeSlot(s) {
  for (let guard = 0; guard < 20; guard++) {
    const i = s.indexOf('<div data-advisor-slot');
    if (i < 0) return s;
    const end = _matchClose(s, i);
    const next = s.slice(end, end + 120);
    if (/^\s*<div style="font-size:8px;letter-spacing:\.06em;color:#9F8E75">/.test(next)) { s = s.slice(0, i) + '<div style="font-size:10px;color:#5B6A71">Farther Wealth Management · farther.com</div>' + s.slice(end); continue; }
    if (/^\s*<div style="font-size:7\.5px;letter-spacing:\.06em;color:#9F8E75">/.test(next)) { const was = /^<div data-advisor-slot data-was="iws"/.test(s.slice(i)) ? 'The Intelligent Wealth Series' : 'Farther Wealth Management'; s = s.slice(0, i) + '<div style="font-size:9px;color:#5B6A71">' + was + ' · farther.com</div>' + s.slice(end); continue; }
    let a = i; while (a > 0 && /\s/.test(s[a - 1])) a--;
    s = s.slice(0, a) + s.slice(end);
  }
  return s;
}
function _matchClose(s, i) { // index just past the </div> that closes the <div at i
  const re = /<div\b|<\/div>/g; re.lastIndex = i; let depth = 0, m;
  while ((m = re.exec(s))) { depth += m[0] === '</div>' ? -1 : 1; if (depth === 0) return m.index + 6; }
  return -1;
}
function placeSlot(s) {
  s = _removeSlot(s);
  if (s.includes('<doc-page>')) {
    // one-pager: last item of the disclosure block, i.e. the page's bottom-left corner
    const m = /<div style="display:flex;flex-direction:column;gap:[\d.]+px(?:;margin-top:auto)?">(?=\s*<div style="[^"]*color:#8A8A8A[^"]*">Important Disclosures)/.exec(s);
    if (!m) return { html: s, ok: false };
    const close = _matchClose(s, m.index) - 6;
    return { html: s.slice(0, close) + '  ' + SLOT_OP + '\n    ' + s.slice(close), ok: true };
  }
  // four-page guide: the cover footer's left cell (replaces "Farther Wealth Management · farther.com")
  const FOOT = /<div style="font-size:10px;color:#5B6A71">Farther Wealth Management[^<]*<\/div>/;
  if (!FOOT.test(s)) return { html: s, ok: false };
  s = s.replace(FOOT, () => SLOT_IW);
  return { html: s, ok: true };
  return { html: s, ok: false };
}
