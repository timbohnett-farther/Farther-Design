/* Farther Estate Flow — stage-by-stage estate distribution chart with an order-of-death toggle.
   Plain JS, no dependencies. Draws a static SVG (prints cleanly) plus an optional scenario toggle.

     <script src="assets/charts/estate-flow.js"></script>
     FartherEstateFlow.mount(el, spec)         // toggle (if 2+ scenarios) + chart
     const svg = FartherEstateFlow.render(scenario, opts)

   spec = {
     scenarios: [{ key, label, title, stages: [{ label, nodes: [
       { id, label, value, kind, sub, from: ['id', …] | [{ id, dashed:true }] }
     ] }] }],
     width: 960,                  // design width (SVG scales to 100% of its container)
     orientation: 'vertical' | 'horizontal',   // horizontal = stages as columns (16:9 slides; set height)
     scale: 1,                    // multiply all type and card sizes (use ~1.25 on 16:9 slides)
     cardHeight: 88, stageGap: 44, labelHeight: 30, busGap: 26,   // spacing (design units)
     toggleScale: 1,              // size of the HTML toggle (px multiplier)
     halo: '#F8F4F0',             // page background behind labels
     showTotals: true,            // stage total at the right of each stage rule
     format: v => '$15.8M'
   }
   kind: asset | trust | spouse | charity | tax | heirs  (sets the color). Label may contain '\n'.
   Edges: solid by default; { id, dashed:true } marks a transfer deferred to a later death.
   Edges into 'tax' nodes are drawn in Pomegranate. */
(function () {
  const K = {
    asset:  { c: '#3B5A69', tint: '#FFFFFF', line: '#E3D3C5' },
    trust:  { c: '#567EA1', tint: '#FFFFFF', line: '#E3D3C5' },
    spouse: { c: '#7DA8DD', tint: '#FFFFFF', line: '#E3D3C5' },
    charity:{ c: '#B68A4C', tint: '#FFFFFF', line: '#E3D3C5' },
    tax:    { c: '#CE3657', tint: '#FBEEF1', line: '#DE788E' },
    heirs:  { c: '#289FAF', tint: '#EEF8FA', line: '#7FD6E2' }
  };
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const money = v => v >= 1e9 ? '$' + (+(v / 1e9).toFixed(1)) + 'B' : v >= 1e6 ? '$' + (v / 1e6).toFixed(1) + 'M' : v >= 1e3 ? '$' + Math.round(v / 1e3) + 'K' : '$' + Math.round(v);
  const SANS = "'Fakt Pro','Fakt',system-ui,sans-serif", SERIF = "'ABC Arizona Text','Arizona Text',Georgia,serif";

  function render(sc, o = {}) {
    if (o.orientation === 'horizontal') return renderH(sc, o);
    const W = o.width || 960, s = o.scale || 1, fmt = o.format || money, halo = o.halo || '#F8F4F0';
    const cardW = (o.cardWidth || 196) * s, cardH = (o.cardHeight || 88) * s, labelH = (o.labelHeight || 30) * s, busGap = (o.busGap || 26) * s, stageGap = (o.stageGap ?? 44) * s, padX = 8;
    const pos = {}; let y = 0, out = '', edges = '', cards = '', rules = '';
    sc.stages.forEach((st, si) => {
      // stage rule + label + total
      const total = st.nodes.reduce((a, n) => a + (n.value || 0), 0);
      rules += `<line x1="${padX}" y1="${y + 11 * s}" x2="${W - padX}" y2="${y + 11 * s}" stroke="#E3D3C5" stroke-width="1"></line>`;
      rules += `<text x="${padX}" y="${y + 15 * s}" font-family="${SANS}" font-size="${9.5 * s}" letter-spacing="${1.6 * s}" fill="#9F8E75" stroke="${halo}" stroke-width="${6 * s}" paint-order="stroke">${esc(st.label.toUpperCase())}</text>`;
      if (o.showTotals !== false) rules += `<text x="${W - padX}" y="${y + 15 * s}" text-anchor="end" font-family="${SANS}" font-size="${9.5 * s}" fill="#5B6A71" stroke="${halo}" stroke-width="${6 * s}" paint-order="stroke">Total ${esc(fmt(total))}</text>`;
      const top = y + labelH, n = st.nodes.length;
      const w = Math.min(cardW, (W - 2 * padX - (n - 1) * 16 * s) / n);
      const span = W - 2 * padX, step = span / n;
      st.nodes.forEach((nd, i) => {
        const cx = padX + step * (i + 0.5), x = cx - w / 2, k = K[nd.kind] || K.asset;
        pos[nd.id] = { cx, top, bottom: top + cardH, kind: nd.kind };
        const lines = String(nd.label).split('\n');
        cards += `<rect x="${x}" y="${top}" width="${w}" height="${cardH}" rx="${10 * s}" fill="${k.tint}" stroke="${k.line}" stroke-width="1"></rect>`;
        cards += `<rect x="${cx - 14 * s}" y="${top}" width="${28 * s}" height="${3 * s}" rx="${1.5 * s}" fill="${k.c}"></rect>`;
        const ly = top + 22 * s - (lines.length - 1) * 6 * s;
        lines.forEach((ln, j) => { cards += `<text x="${cx}" y="${ly + j * 12 * s}" text-anchor="middle" font-family="${SANS}" font-size="${10.5 * s}" fill="#5B6A71">${esc(ln)}</text>`; });
        cards += `<text x="${cx}" y="${top + cardH * (nd.sub ? 0.66 : 0.73)}" text-anchor="middle" font-family="${SERIF}" font-weight="300" font-size="${24 * s}" letter-spacing="${-0.4 * s}" fill="${nd.kind === 'tax' ? '#A42843' : '#333333'}">${esc(fmt(nd.value || 0))}</text>`;
        if (nd.sub) cards += `<text x="${cx}" y="${top + cardH * 0.87}" text-anchor="middle" font-family="${SANS}" font-size="${9 * s}" fill="#8A8A8A">${esc(nd.sub)}</text>`;
      });
      // connectors from the previous stage
      if (si > 0) st.nodes.forEach(nd => (nd.from || []).forEach(f => {
        const id = typeof f === 'string' ? f : f.id, dashed = typeof f === 'object' && f.dashed, a = pos[id], b = pos[nd.id];
        if (!a || !b) return;
        const bus = a.bottom + busGap, tax = nd.kind === 'tax', col = tax ? '#CE3657' : '#A8B3B8';
        const r = Math.min(8 * s, Math.abs(b.cx - a.cx) / 2);
        const dir = Math.sign(b.cx - a.cx);
        const d = dir === 0 ? `M${a.cx},${a.bottom}V${b.top - 6 * s}`
          : `M${a.cx},${a.bottom}V${bus - r}Q${a.cx},${bus} ${a.cx + dir * r},${bus}H${b.cx - dir * r}Q${b.cx},${bus} ${b.cx},${bus + r}V${b.top - 6 * s}`;
        edges += `<path d="${d}" fill="none" stroke="${col}" stroke-width="${(tax ? 1.6 : 1.3) * s}"${dashed ? ` stroke-dasharray="${4 * s} ${3 * s}"` : ''}></path>`;
        edges += `<path d="M${b.cx - 4 * s},${b.top - 7 * s}L${b.cx},${b.top - 1 * s}L${b.cx + 4 * s},${b.top - 7 * s}Z" fill="${col}"></path>`;
      }));
      y = top + cardH + stageGap;
    });
    const H = y - stageGap + 4;
    return `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto;display:block" role="img" aria-label="${esc(sc.title || sc.label || 'Estate flow')}">${rules}${edges}${cards}</svg>`;
  }

  // Stages as columns, left to right; suits 16:9 slides. Needs o.height.
  function renderH(sc, o) {
    const W = o.width || 1680, H = o.height || 700, s = o.scale || 1, fmt = o.format || money, halo = o.halo || '#F8F4F0';
    const n = sc.stages.length, headH = 50 * s, colGap = (o.columnGap || 70) * s, colW = (W - colGap * (n - 1)) / n;
    const cardH = (o.cardHeight || 118) * s, vGap = (o.rowGap ?? 18) * s;
    const pos = {}; let rules = '', edges = '', cards = '';
    sc.stages.forEach((st, si) => {
      const x = si * (colW + colGap), total = st.nodes.reduce((a, nd) => a + (nd.value || 0), 0);
      rules += `<text x="${x}" y="${16 * s}" font-family="${SANS}" font-size="${17 * s}" letter-spacing="${2 * s}" fill="#9F8E75">${esc(st.label.toUpperCase())}</text>`;
      if (o.showTotals !== false) rules += `<text x="${x}" y="${38 * s}" font-family="${SANS}" font-size="${16.5 * s}" fill="#5B6A71">Total ${esc(fmt(total))}</text>`;
      rules += `<line x1="${x}" y1="${headH - 2 * s}" x2="${x + colW}" y2="${headH - 2 * s}" stroke="#E3D3C5" stroke-width="1"></line>`;
      const m = st.nodes.length, ch = Math.min(cardH, (H - headH - 12 * s - vGap * (m - 1)) / m);
      const used = m * ch + (m - 1) * vGap, y0 = headH + 12 * s + (H - headH - 12 * s - used) / 2;
      st.nodes.forEach((nd, i) => {
        const y = y0 + i * (ch + vGap), k = K[nd.kind] || K.asset, cy = y + ch / 2;
        pos[nd.id] = { left: x, right: x + colW, cy };
        cards += `<rect x="${x}" y="${y}" width="${colW}" height="${ch}" rx="${12 * s}" fill="${k.tint}" stroke="${k.line}" stroke-width="1.2"></rect>`;
        cards += `<rect x="${x}" y="${y + ch / 2 - 18 * s}" width="${4 * s}" height="${36 * s}" rx="${2 * s}" fill="${k.c}"></rect>`;
        const one = String(nd.label).replace(/\n/g, ' '), lines = one.length > (o.wrapAt || 24) ? String(nd.label).split('\n') : [one];
        const tx = x + 22 * s, hasSub = !!nd.sub && ch > 90 * s, lift = (lines.length - 1) * 10 * s;
        lines.forEach((ln, j) => { cards += `<text x="${tx}" y="${cy - (hasSub ? 22 : 12) * s - lift + j * 20 * s}" font-family="${SANS}" font-size="${17 * s}" fill="#5B6A71">${esc(ln)}</text>`; });
        cards += `<text x="${tx}" y="${cy + (hasSub ? 18 : 24) * s + lift}" font-family="${SERIF}" font-weight="300" font-size="${38 * s}" letter-spacing="${-0.6 * s}" fill="${nd.kind === 'tax' ? '#A42843' : '#333333'}">${esc(fmt(nd.value || 0))}</text>`;
        if (hasSub) cards += `<text x="${tx}" y="${cy + 44 * s + lift}" font-family="${SANS}" font-size="${16.5 * s}" fill="#8A8A8A">${esc(nd.sub)}</text>`;
      });
      if (si > 0) st.nodes.forEach(nd => (nd.from || []).forEach(f => {
        const id = typeof f === 'string' ? f : f.id, dashed = typeof f === 'object' && f.dashed, a = pos[id], b = pos[nd.id];
        if (!a || !b) return;
        const bus = a.right + colGap / 2, tax = nd.kind === 'tax', col = tax ? '#CE3657' : '#A8B3B8';
        const r = Math.min(10 * s, Math.abs(b.cy - a.cy) / 2), dir = Math.sign(b.cy - a.cy);
        const d = dir === 0 ? `M${a.right},${a.cy}H${b.left - 8 * s}`
          : `M${a.right},${a.cy}H${bus - r}Q${bus},${a.cy} ${bus},${a.cy + dir * r}V${b.cy - dir * r}Q${bus},${b.cy} ${bus + r},${b.cy}H${b.left - 8 * s}`;
        edges += `<path d="${d}" fill="none" stroke="${col}" stroke-width="${(tax ? 2.4 : 2) * s}"${dashed ? ` stroke-dasharray="${7 * s} ${5 * s}"` : ''}></path>`;
        edges += `<path d="M${b.left - 9 * s},${b.cy - 6 * s}L${b.left - 1 * s},${b.cy}L${b.left - 9 * s},${b.cy + 6 * s}Z" fill="${col}"></path>`;
      }));
    });
    return `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto;display:block" role="img" aria-label="${esc(sc.title || sc.label || 'Estate flow')}">${rules}${edges}${cards}</svg>`;
  }

  let styled = false;
  function mount(el, spec) {
    if (!styled) { styled = true; const st = document.createElement('style'); st.textContent = '@media print{[data-estate-toggle]{display:none!important}}'; document.head.appendChild(st); }
    const scs = spec.scenarios; let cur = 0;
    const s = spec.toggleScale || 1;
    const draw = () => {
      const tog = scs.length > 1 ? `<div data-estate-toggle style="display:inline-flex;gap:${4 * s}px;padding:${3 * s}px;border:1px solid #E3D3C5;border-radius:9999px;background:#FFFFFF;margin-bottom:${10 * s}px">${scs.map((x, i) => `<button type="button" data-i="${i}" style="font-family:${SANS};font-size:${11 * s}px;border:0;border-radius:9999px;padding:${6 * s}px ${13 * s}px;cursor:pointer;background:${i === cur ? '#3B5A69' : 'transparent'};color:${i === cur ? '#F8F4F0' : '#3B5A69'}">${esc(x.label)}</button>`).join('')}</div>` : '';
      el.innerHTML = tog + render(scs[cur], spec);
      const t = el.querySelector('[data-estate-toggle]'); if (t) t.style.alignSelf = 'flex-start';
      el.querySelectorAll('[data-i]').forEach(b => b.onclick = () => { cur = +b.dataset.i; draw(); spec.onChange && spec.onChange(scs[cur], cur); });
      spec.onChange && spec.onChange(scs[cur], cur, true);
    };
    draw(); return el;
  }
  window.FartherEstateFlow = { render, mount, kinds: K, format: { money } };
})();
