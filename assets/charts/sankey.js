/* Farther Sankey — flow diagram for income distribution, estate transfer, asset allocation.
   Plain JS, no dependencies. Produces a static inline SVG string, so the output can be pasted
   straight into print pieces.

     <script src="assets/charts/sankey.js"></script>
     FartherSankey.mount(el, spec)          // renders into an element
     const svg = FartherSankey.render(spec) // or get the SVG markup

   spec = {
     nodes: [{ id, label, color?, sub? }],          // color: any CSS color or var(--token)
     links: [{ source, target, value }],
     width: 694, height: 300,                       // viewBox units; SVG scales to 100% width
     nodeWidth: 10, nodePad: 12,                    // node bar width, vertical gap between nodes
     format: v => '$' + ...,                        // value label formatter
     linkColor: 'target' | 'source',                // band tint (default 'target')
     linkOpacity: 0.32,
     showValues: true,                              // second label line with the node value
     labelWidth: 150                                // room reserved for right-hand labels
   }
   Columns come from the longest path to each node. Nodes keep their input order within a column. */
(function () {
  const PALETTE = ['var(--steel-700,#3B5A69)', 'var(--aqua-500,#3CC1D3)', 'var(--sky-400,#7DA8DD)', 'var(--bronze-400,#B68A4C)', 'var(--granite-500,#567EA1)', 'var(--clay-400,#9F8E75)', 'var(--smalt-400,#6F94A1)', 'var(--pomegranate-500,#CE3657)'];
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const money = v => v >= 1e9 ? '$' + (+(v / 1e9).toFixed(1)) + 'B' : v >= 1e6 ? '$' + (+(v / 1e6).toFixed(1)) + 'M' : v >= 1e3 ? '$' + Math.round(v / 1e3) + 'K' : '$' + Math.round(v);

  function layout(spec) {
    const W = spec.width || 694, H = spec.height || 300, nw = spec.nodeWidth || 10, pad = spec.nodePad ?? 12;
    const labelW = spec.labelWidth ?? 150, leftW = spec.leftLabelWidth ?? 110;
    const nodes = spec.nodes.map((n, i) => ({ ...n, i, in: [], out: [], color: n.color || PALETTE[i % PALETTE.length] }));
    const byId = Object.fromEntries(nodes.map(n => [n.id, n]));
    const links = spec.links.map(l => ({ ...l, s: byId[l.source], t: byId[l.target] })).filter(l => l.s && l.t && l.value > 0);
    links.forEach(l => { l.s.out.push(l); l.t.in.push(l); });
    nodes.forEach(n => { n.value = Math.max(n.in.reduce((a, l) => a + l.value, 0), n.out.reduce((a, l) => a + l.value, 0)); });
    // column = longest path from a source
    const depth = n => n._d ?? (n._d = n.in.length ? 1 + Math.max(...n.in.map(l => depth(l.s))) : 0);
    nodes.forEach(depth);
    const maxD = Math.max(...nodes.map(n => n._d));
    const cols = Array.from({ length: maxD + 1 }, (_, d) => nodes.filter(n => n._d === d));
    const x0 = leftW, x1 = W - labelW - nw;
    const k = Math.min(...cols.map(c => (H - pad * (c.length - 1)) / c.reduce((a, n) => a + n.value, 0)));
    cols.forEach((c, d) => {
      const total = c.reduce((a, n) => a + n.value * k, 0) + pad * (c.length - 1);
      let y = (H - total) / 2;
      c.forEach(n => { n.x = maxD ? x0 + (x1 - x0) * d / maxD : x0; n.y = y; n.h = Math.max(1, n.value * k); y += n.h + pad; });
    });
    // pull later columns toward their sources (keeps branches readable), then resolve overlaps
    for (let d = 1; d <= maxD; d++) {
      const c = cols[d];
      c.forEach(n => { const w = n.in.reduce((a, l) => a + l.value, 0); n._want = w ? n.in.reduce((a, l) => a + (l.s.y + l.s.h / 2) * l.value, 0) / w - n.h / 2 : n.y; });
      c.sort((a, b) => a._want - b._want || a.i - b.i);
      let y = -Infinity;
      c.forEach(n => { n.y = Math.max(n._want, y); y = n.y + n.h + pad; });
      const over = c.length ? c[c.length - 1].y + c[c.length - 1].h - H : 0;
      if (over > 0) { let yb = H; for (let j = c.length - 1; j >= 0; j--) { c[j].y = Math.min(c[j].y, yb - c[j].h); yb = c[j].y - pad; } }
      const under = c.length ? -c[0].y : 0;
      if (under > 0) c.forEach(n => { n.y += under; });
    }
    nodes.forEach(n => {
      let so = 0; n.out.sort((a, b) => a.t.y - b.t.y).forEach(l => { l.w = l.value * k; l.sy = n.y + so; so += l.w; });
      let to = 0; n.in.sort((a, b) => a.s.y - b.s.y).forEach(l => { l.ty = n.y + to; to += l.value * k; });
    });
    return { W, H, nw, nodes, links, maxD, cols };
  }

  function render(spec) {
    const { W, H, nw, nodes, links, maxD, cols } = layout(spec);
    const fmt = spec.format || money, op = spec.linkOpacity ?? 0.32, byT = (spec.linkColor || 'target') === 'target';
    const show = spec.showValues !== false;
    // label positions: centered on the node, nudged apart so two-line labels never collide
    const gap = (show ? 25 : 14);
    cols.forEach(c => {
      const s = [...c].sort((a, b) => a.y - b.y); let prev = -Infinity;
      s.forEach(n => { n.ly = Math.max(n.y + n.h / 2, prev + gap); prev = n.ly; });
      const over = s.length ? s[s.length - 1].ly - (H + 6) : 0;
      if (over > 0) { let nxt = Infinity; for (let j = s.length - 1; j >= 0; j--) { s[j].ly = Math.min(s[j].ly - over, nxt - gap); nxt = s[j].ly; } }
    });
    const halo = spec.halo || '#F8F4F0'; // label halo = page background, keeps labels legible over bands
    const font = `font-family="'Fakt Pro','Fakt',system-ui,sans-serif" stroke="${halo}" stroke-width="3" stroke-linejoin="round" paint-order="stroke"`;
    const bottom = Math.max(H, ...nodes.map(n => n.ly + (show || n.sub ? 14 : 6)));
    const top = Math.min(0, ...nodes.map(n => n.ly - 12));
    let out = `<svg viewBox="0 ${top} ${W} ${bottom - top}" style="width:100%;height:auto;display:block;overflow:visible" role="img" aria-label="${esc(spec.title || 'Flow diagram')}">`;
    links.forEach(l => {
      const xa = l.s.x + nw, xb = l.t.x, xm = (xa + xb) / 2;
      const d = `M${xa},${l.sy}C${xm},${l.sy} ${xm},${l.ty} ${xb},${l.ty}L${xb},${l.ty + l.w}C${xm},${l.ty + l.w} ${xm},${l.sy + l.w} ${xa},${l.sy + l.w}Z`;
      out += `<path d="${d}" style="fill:${byT ? l.t.color : l.s.color};opacity:${op}"></path>`;
    });
    nodes.forEach(n => {
      out += `<rect x="${n.x}" y="${n.y}" width="${nw}" height="${n.h}" rx="2" style="fill:${n.color}"></rect>`;
      const left = n._d === 0 && maxD > 0, cy = n.ly;
      const tx = left ? n.x - 8 : n.x + nw + 8, anchor = left ? 'end' : 'start';
      const two = show || n.sub;
      const second = [show ? fmt(n.value) : null, n.sub || null].filter(Boolean).join(' · ');
      out += `<text x="${tx}" y="${two ? cy - 2 : cy + 4}" text-anchor="${anchor}" ${font} font-size="11" fill="#333333">${esc(n.label)}</text>`;
      if (two) out += `<text x="${tx}" y="${cy + 11}" text-anchor="${anchor}" ${font} font-size="9.5" fill="#5B6A71">${esc(second)}</text>`;
    });
    return out + '</svg>';
  }

  function mount(el, spec) { el.innerHTML = render(spec); return el; }
  window.FartherSankey = { render, mount, layout, format: { money } };
})();
