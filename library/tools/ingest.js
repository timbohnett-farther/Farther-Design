// Ingest client-material uploads into library/. Idempotent. Run from run_script:
//   eval(await readFile('library/tools/ingest.js')); log(await ingest('uploads'));
async function ingest(dir, opts = {}) {
  const DS = '_ds/farther-design-system-image-bank-3c8d0a02-393c-4ac4-a226-01a7a6ea201f/';
  const IWS_ANCHOR = '<div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(51,51,51,.62) 0%,rgba(51,51,51,.34) 46%,rgba(51,51,51,.14) 100%)"></div>';
  const IWS_SLOT = '\n    <div data-advisor-slot style="position:absolute;left:48px;bottom:24px;display:flex;align-items:center;gap:12px;background:rgba(248,244,240,.95);border-radius:12px;padding:10px 18px 10px 10px"><div data-advisor="headshot-wrap" style="width:46px;height:46px;border-radius:50%;background:#C5CFD4;overflow:hidden;flex:none"><img data-advisor="headshot" alt="" style="width:100%;height:100%;object-fit:cover;object-position:top;display:block"></div><div style="display:flex;flex-direction:column;gap:2px"><div data-advisor="name" style="font-family:\'ABC Arizona Text\',Georgia,serif;font-weight:300;font-size:15px;line-height:1.15;color:#333">Advisor Name</div><div data-advisor="title" style="font-size:8.5px;letter-spacing:.08em;text-transform:uppercase;color:#9F8E75">Title</div><div style="font-size:9.5px;color:#5B6A71"><span data-advisor="email">email@farther.com</span> &middot; <span data-advisor="phone">(000) 000-0000</span></div></div></div>';
  // the disclosure block's wrapper div (spacing varies by piece)
  const OP_RE = /(<div style="display:flex;flex-direction:column;gap:[\d.]+px(?:;margin-top:auto)?">)(?=\s*<div style="[^"]*color:#8A8A8A[^"]*">Important Disclosures)/;
  const OP_SLOT = '<div data-advisor-slot style="display:flex;align-items:center;gap:9px;background:#FFFFFF;border:1px solid #E3D3C5;border-radius:9999px;padding:4px 14px 4px 4px"><div data-advisor="headshot-wrap" style="width:26px;height:26px;border-radius:50%;background:#C5CFD4;overflow:hidden;flex:none"><img data-advisor="headshot" alt="" style="width:100%;height:100%;object-fit:cover;object-position:top;display:block"></div><div style="flex:1;min-width:0;display:flex;align-items:baseline;gap:7px;white-space:nowrap;overflow:hidden"><span data-advisor="name" style="font-family:\'ABC Arizona Text\',Palatino,Georgia,serif;font-weight:300;font-size:12.5px;color:#333333">Advisor Name</span><span data-advisor="title" style="font-size:8px;letter-spacing:0.06em;text-transform:uppercase;font-weight:600;color:#9F8E75">Title</span></div><div style="display:flex;gap:10px;font-size:9px;color:#5B6A71;white-space:nowrap"><span data-advisor="email">email@farther.com</span><span data-advisor="phone">(000) 000-0000</span></div></div>';
  const MAP = JSON.parse(await readFile('library/tools/image-map.json'));
  eval(await readFile('library/tools/relink.js'));
  eval(await readFile('library/tools/slot.js'));
  const out = { unmappedImages: {}, added: [], kept: [], index: [], briefs: 0, noAnchor: [] };
  const have = {};
  if (opts.onlyNew) for (const d of ['pieces']) { have[d] = new Set(await ls('library/' + d)); have[d + '/b'] = new Set(await ls('library/' + d + '/briefs').catch(() => [])); }
  const known = (series, f, brief) => opts.onlyNew && have[series + (brief ? '/b' : '')]?.has(f);
  for (const f of await ls(dir)) {
    if (!/^(?:[CUSW]?\d\d[ -]|[a-z][a-z0-9-]+\.md$)/.test(f)) continue;
    if (/^(CLAUDE|README|github)/i.test(f)) continue;
    if (opts.onlyNew && f.endsWith('.md') && known('pieces', f, 1)) continue;
    if (opts.onlyNew && f.endsWith('.dc.html') && known('pieces', f)) continue;
    let s = await readFile(dir + '/' + f);
    if (f.endsWith('.md')) {
      const series = 'pieces';
      await saveFile('library/' + series + '/briefs/' + f, s); out.briefs++; continue;
    }
    if (!f.endsWith('.dc.html')) continue;
    s = s.split(DS).join('../../');
    { const r = relink(s, MAP); s = r.html; if (r.missing.length) out.unmappedImages[f] = r.missing; }
    const isOP = s.includes('<doc-page>');
    const series = 'pieces';
    if (f.startsWith('00')) out.index.push(f);
    else if (s.includes('data-advisor-slot')) out.kept.push(f);
    else { const r = placeSlot(s); if (r.ok) { s = r.html; out.added.push(f); } else { out.noAnchor.push(f); } }
    await saveFile('library/' + series + '/' + f, s);
  }
  return out;
}
