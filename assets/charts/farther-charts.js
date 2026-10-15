/* Farther Charts: 15 finance chart types as static, print-ready SVG in brand colors. No dependencies.
     <script src="assets/charts/farther-charts.js"></script>
     FartherCharts.<type>(el, spec)    renders into el, returns el
     FartherCharts.render.<type>(spec) returns the SVG string
   Every spec takes: width (viewBox width, default 640), height, format (value formatter), title (aria label).
   Types: fan, waterfall, allocation, cashflow, growth, brackets, periodic, drawdown, treemap, bullet,
          heatmap, timeline, scatter, tornado, choropleth. See preview/charts-*.html for specs. */
(function () {
  const C = { div:['#CE3657','#DE788E','#EFBDC8','#E6E3DB','#BFEBF1','#7FD6E2','#3CC1D3'], steel:'#3B5A69', granite:'#567EA1', granite2:'#779AB9', granite3:'#A7BDD2', navy:'#31465C', sky:'#7DA8DD', sky2:'#B6D0ED', sky3:'#D0DBE7', aqua:'#3CC1D3', aquaD:'#289FAF', aquaL:'#7FD6E2', bronze:'#B68A4C', bronzeL:'#DDCCAB', clay:'#9F8E75', clayL:'#E6E3DB', red:'#CE3657', redL:'#DE788E', redD:'#A42843', ink:'#333333', muted:'#5B6A71', faint:'#8A8A8A', rule:'#E3D3C5', grid:'#EAEEF4', canvas:'#F8F4F0' };
  const PAL = [C.navy, C.granite, C.sky, C.aqua, C.bronze, C.clay, C.sky2, C.redL, C.granite3];
  const SANS = "'Fakt Pro','Fakt',system-ui,sans-serif", SERIF = "'ABC Arizona Text',Georgia,serif";
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const money = v => { const a = Math.abs(v), sg = v < 0 ? '–' : ''; return sg + (a >= 1e9 ? '$' + (a / 1e9).toFixed(1) + 'B' : a >= 1e6 ? '$' + (a / 1e6).toFixed(1) + 'M' : a >= 1e3 ? '$' + Math.round(a / 1e3) + 'K' : '$' + Math.round(a)); };
  const pct = v => (v > 0 ? '+' : v < 0 ? '–' : '') + Math.abs(v).toFixed(1) + '%';
  const t = (x, y, s, o = {}) => `<text x="${x}" y="${y}" font-family="${o.serif ? SERIF : SANS}" font-size="${o.size || 10}" fill="${o.fill || C.muted}"${o.anchor ? ` text-anchor="${o.anchor}"` : ''}${o.weight ? ` font-weight="${o.weight}"` : ''}${o.halo ? ` stroke="${o.halo}" stroke-width="3" paint-order="stroke"` : ''}>${esc(s)}</text>`;
  const wrap = (W, H, body, title, pad = [8, 8, 8, 8]) => `<svg viewBox="${-pad[3]} ${-pad[0]} ${W + pad[1] + pad[3]} ${H + pad[0] + pad[2]}" style="width:100%;height:auto;display:block;overflow:visible" role="img" aria-label="${esc(title || 'Chart')}">${body}</svg>`;
  const lin = (d0, d1, r0, r1) => v => r0 + (v - d0) / (d1 - d0 || 1) * (r1 - r0);
  const nice = (lo, hi, n = 4) => { const span = hi - lo || 1, step0 = span / n, mag = Math.pow(10, Math.floor(Math.log10(step0))), st = [1, 2, 2.5, 5, 10].map(m => m * mag).find(s => s >= step0); const a = Math.floor(lo / st) * st, b = Math.ceil(hi / st) * st, ticks = []; for (let v = a; v <= b + st / 2; v += st) ticks.push(+v.toFixed(10)); return { lo: a, hi: b, ticks }; };
  const yAxis = (W, y, ticks, fmt, x0 = 0) => ticks.map(v => `<line x1="${x0}" y1="${y(v)}" x2="${W}" y2="${y(v)}" stroke="${C.grid}" stroke-width="1"></line>${t(x0 - 6, y(v) + 3.5, fmt(v), { anchor: 'end', size: 9, fill: C.faint })}`).join('');
  const legend = (items, x, y, gap = 16) => { let cx = x; return items.map(([lbl, col, dash]) => { const s = `${dash ? `<line x1="${cx}" y1="${y - 3}" x2="${cx + 14}" y2="${y - 3}" stroke="${col}" stroke-width="2" stroke-dasharray="${dash}"></line>` : `<rect x="${cx}" y="${y - 8}" width="10" height="10" rx="2" fill="${col}"></rect>`}${t(cx + (dash ? 18 : 14), y, lbl, { size: 9.5 })}`; cx += (dash ? 18 : 14) + lbl.length * 5.3 + gap; return s; }).join(''); };
  const R = {};

  // 1. Monte Carlo fan: years[], bands: [{p10,p25,p50,p75,p90}] per year, goal?
  R.fan = s => {
    const W = s.width || 640, H = s.height || 280, L = 52, B = 26, T = 22, fmt = s.format || money;
    const yrs = s.years, b = s.bands, all = b.flatMap(x => [x.p10, x.p90]).concat(s.goal ? [s.goal] : []);
    const ny = nice(0, Math.max(...all)); const x = lin(yrs[0], yrs[yrs.length - 1], L, W), y = lin(ny.lo, ny.hi, H - B, T);
    const band = (a, c, col, op) => `<path d="${yrs.map((yr, i) => `${i ? 'L' : 'M'}${x(yr)},${y(b[i][a])}`).join('')}${yrs.slice().reverse().map((yr, i) => `L${x(yr)},${y(b[yrs.length - 1 - i][c])}`).join('')}Z" fill="${col}" opacity="${op}"></path>`;
    const med = yrs.map((yr, i) => `${i ? 'L' : 'M'}${x(yr)},${y(b[i].p50)}`).join('');
    const every = Math.ceil(yrs.length / 8);
    return wrap(W, H, yAxis(W, y, ny.ticks, fmt, L) + band('p10', 'p90', C.sky2, .55) + band('p25', 'p75', C.sky, .55) + `<path d="${med}" fill="none" stroke="${C.navy}" stroke-width="2"></path>` +
      (s.goal ? `<line x1="${L}" y1="${y(s.goal)}" x2="${W}" y2="${y(s.goal)}" stroke="${C.bronze}" stroke-width="1.5" stroke-dasharray="5 4"></line>${t(W, y(s.goal) - 5, s.goalLabel || 'Goal ' + fmt(s.goal), { anchor: 'end', size: 9.5, fill: C.bronze })}` : '') +
      yrs.map((yr, i) => i % every === 0 || i === yrs.length - 1 ? t(x(yr), H - B + 15, yr, { anchor: 'middle', size: 9, fill: C.faint }) : '').join('') +
      `${t(x(yrs[yrs.length - 1]) - 4, y(b[b.length - 1].p50) - 6, 'Median ' + fmt(b[b.length - 1].p50), { anchor: 'end', size: 9.5, fill: C.ink, halo: C.canvas })}` +
      legend([['10th–90th percentile', C.sky2], ['25th–75th', C.sky], ['Median', C.navy, '0']], L, 8), s.title);
  };

  // 2. Waterfall: start {label,value}, steps [{label,value}], end label
  R.waterfall = s => {
    const W = s.width || 640, H = s.height || 260, L = 52, B = 34, T = 16, fmt = s.format || money;
    const cols = [{ label: s.start.label, v: s.start.value, base: 0, kind: 'total' }]; let run = s.start.value;
    s.steps.forEach(st => { cols.push({ label: st.label, v: st.value, base: run, kind: st.value >= 0 ? 'up' : 'down' }); run += st.value; });
    cols.push({ label: s.endLabel || 'Ending value', v: run, base: 0, kind: 'total' });
    const tops = cols.map(c => c.kind === 'total' ? c.v : Math.max(c.base, c.base + c.v)), bots = cols.map(c => c.kind === 'total' ? 0 : Math.min(c.base, c.base + c.v));
    const lo = s.zeroBase === false ? Math.min(...bots.filter((_, i) => cols[i].kind !== 'total'), ...tops) * .92 : 0;
    const ny = nice(lo, Math.max(...tops)); const y = lin(ny.lo, ny.hi, H - B, T), bw = (W - L) / cols.length;
    let out = yAxis(W, y, ny.ticks, fmt, L);
    cols.forEach((c, i) => {
      const x0 = L + i * bw + bw * .18, w = bw * .64, top = c.kind === 'total' ? c.v : Math.max(c.base, c.base + c.v), bot = c.kind === 'total' ? ny.lo : Math.min(c.base, c.base + c.v);
      const col = c.kind === 'total' ? C.navy : c.kind === 'up' ? C.aqua : C.redL;
      out += `<rect x="${x0}" y="${y(top)}" width="${w}" height="${Math.max(1, y(bot) - y(top))}" rx="2" fill="${col}"></rect>`;
      if (i < cols.length - 1) { const nv = c.kind === 'total' ? c.v : c.base + c.v; out += `<line x1="${x0 + w}" y1="${y(nv)}" x2="${x0 + bw}" y2="${y(nv)}" stroke="${C.faint}" stroke-width="1" stroke-dasharray="2 2"></line>`; }
      out += t(x0 + w / 2, y(top) - 5, c.kind === 'total' ? fmt(c.v) : (c.v >= 0 ? '+' : '') + fmt(c.v), { anchor: 'middle', size: 9.5, fill: c.kind === 'down' ? C.redD : C.ink, weight: c.kind === 'total' ? 600 : null });
      out += t(x0 + w / 2, H - B + 14, c.label, { anchor: 'middle', size: 9, fill: C.muted });
    });
    return wrap(W, H, out, s.title);
  };

  // 3. Allocation: classes [{label, current, target, min?, max?}] (percent)
  R.allocation = s => {
    const W = s.width || 640, rowH = 30, H = s.classes.length * rowH + 44, L = 110, Rr = 60;
    const x = lin(0, s.max || Math.max(60, ...s.classes.map(c => Math.max(c.current, c.max || c.target))) , L, W - Rr);
    let out = [0, 20, 40, 60].filter(v => v <= (s.max || 60)).map(v => `<line x1="${x(v)}" y1="18" x2="${x(v)}" y2="${H - 26}" stroke="${C.grid}"></line>${t(x(v), H - 12, v + '%', { anchor: 'middle', size: 9, fill: C.faint })}`).join('');
    s.classes.forEach((c, i) => {
      const cy = 30 + i * rowH, off = c.current - c.target, out_ = c.min != null && (c.current < c.min || c.current > c.max);
      out += t(L - 10, cy + 4, c.label, { anchor: 'end', size: 10.5, fill: C.ink });
      if (c.min != null) out += `<rect x="${x(c.min)}" y="${cy - 9}" width="${x(c.max) - x(c.min)}" height="18" rx="3" fill="${C.sky3}" opacity=".7"></rect>`;
      out += `<rect x="${L}" y="${cy - 5}" width="${x(c.current) - L}" height="10" rx="3" fill="${out_ ? C.red : c.color || PAL[i % PAL.length]}"></rect>`;
      out += `<line x1="${x(c.target)}" y1="${cy - 11}" x2="${x(c.target)}" y2="${cy + 11}" stroke="${C.bronze}" stroke-width="2"></line>`;
      out += t(W - Rr + 8, cy + 4, c.current + '%', { size: 10.5, fill: C.ink, weight: 600 }) + t(W, cy + 4, (off > 0 ? '+' : off < 0 ? '–' : '±') + Math.abs(off) + ' pts', { anchor: 'end', size: 9, fill: out_ ? C.redD : C.faint });
    });
    out += legend([['Current', C.granite], ['Approved range', C.sky3], ['Target', C.bronze]], L, 6);
    return wrap(W, H, out, s.title);
  };

  // 4. Cash-flow timeline: years[], inflows [{label, values[]}], outflows [{label, values[]}], net? (line)
  R.cashflow = s => {
    const W = s.width || 640, H = s.height || 280, L = 52, B = 26, T = 24, fmt = s.format || money, n = s.years.length;
    const up = s.years.map((_, i) => s.inflows.reduce((a, f) => a + f.values[i], 0)), dn = s.years.map((_, i) => s.outflows.reduce((a, f) => a + f.values[i], 0));
    const ny = nice(-Math.max(...dn), Math.max(...up)); const y = lin(ny.lo, ny.hi, H - B, T), bw = (W - L) / n, w = bw * .7;
    let out = yAxis(W, y, ny.ticks, fmt, L) + `<line x1="${L}" y1="${y(0)}" x2="${W}" y2="${y(0)}" stroke="${C.ink}" stroke-width="1"></line>`;
    const inC = [C.navy, C.granite, C.sky, C.aqua, C.sky2], outC = [C.clay, C.redL, C.bronzeL, C.clayL];
    s.years.forEach((yr, i) => {
      const x0 = L + i * bw + (bw - w) / 2; let acc = 0;
      s.inflows.forEach((f, k) => { const v = f.values[i]; out += `<rect x="${x0}" y="${y(acc + v)}" width="${w}" height="${y(acc) - y(acc + v)}" fill="${inC[k % inC.length]}"></rect>`; acc += v; });
      acc = 0; s.outflows.forEach((f, k) => { const v = f.values[i]; out += `<rect x="${x0}" y="${y(-acc)}" width="${w}" height="${y(-acc - v) - y(-acc)}" fill="${outC[k % outC.length]}"></rect>`; acc += v; });
      if (i % Math.ceil(n / 10) === 0 || i === n - 1) out += t(x0 + w / 2, H - B + 15, yr, { anchor: 'middle', size: 9, fill: C.faint });
    });
    if (s.net !== false) out += `<path d="${s.years.map((_, i) => `${i ? 'L' : 'M'}${L + i * bw + bw / 2},${y(up[i] - dn[i])}`).join('')}" fill="none" stroke="${C.bronze}" stroke-width="1.6"></path>`;
    out += legend([...s.inflows.map((f, k) => [f.label, inC[k % inC.length]]), ...s.outflows.map((f, k) => [f.label, outC[k % outC.length]]), ...(s.net !== false ? [['Net', C.bronze, '0']] : [])], L, 8, 12);
    return wrap(W, H, out, s.title);
  };

  // 5. Growth of $X: labels[] (x), series [{label, values[], color?, dash?}], start
  R.growth = s => {
    const W = s.width || 640, H = s.height || 260, L = 52, B = 26, T = 24, Rr = 86, fmt = s.format || money, n = s.labels.length;
    const all = s.series.flatMap(x => x.values); const ny = nice(Math.min(...all) * .95, Math.max(...all)); const x = lin(0, n - 1, L, W - Rr), y = lin(ny.lo, ny.hi, H - B, T);
    const cols = [C.navy, C.aqua, C.clay, C.sky];
    let out = yAxis(W - Rr, y, ny.ticks, fmt, L);
    let lastY = [];
    s.series.forEach((sr, k) => {
      const col = sr.color || cols[k % cols.length];
      out += `<path d="${sr.values.map((v, i) => `${i ? 'L' : 'M'}${x(i)},${y(v)}`).join('')}" fill="none" stroke="${col}" stroke-width="${k ? 1.5 : 2.2}"${sr.dash ? ` stroke-dasharray="${sr.dash}"` : ''}></path>`;
      lastY.push({ y: y(sr.values[n - 1]), v: sr.values[n - 1], l: sr.label, col });
    });
    lastY.sort((a, b) => a.y - b.y); lastY.forEach((o, i) => { if (i && o.y - lastY[i - 1].y < 22) o.y = lastY[i - 1].y + 22; });
    lastY.forEach(o => { out += t(W - Rr + 8, o.y, fmt(o.v), { size: 10.5, fill: C.ink, weight: 600, serif: true }) + t(W - Rr + 8, o.y + 11, o.l, { size: 8.5, fill: o.col }); });
    out += s.labels.map((l, i) => i % Math.ceil(n / 8) === 0 || i === n - 1 ? t(x(i), H - B + 15, l, { anchor: 'middle', size: 9, fill: C.faint }) : '').join('');
    return wrap(W, H, out, s.title);
  };

  // 6. Tax bracket fill: brackets [{rate, upTo}], income layers [{label, amount}], marker? {label, at}
  R.brackets = s => {
    const W = s.width || 640, H = s.height || 250, L = 10, fmt = s.format || money, top = s.brackets[s.brackets.length - 1].upTo;
    const x = lin(0, top, L, W - 10), barY = 70, barH = 52;
    let out = '', prev = 0;
    s.brackets.forEach((b, i) => {
      out += `<rect x="${x(prev)}" y="${barY - 26}" width="${x(b.upTo) - x(prev)}" height="${barH + 52}" fill="${i % 2 ? '#FFFFFF' : C.grid}"></rect>` + t((x(prev) + x(b.upTo)) / 2, barY - 12, b.rate + '%', { anchor: 'middle', size: 12, fill: C.ink, serif: true }) + t(x(b.upTo), barY + barH + 20, fmt(b.upTo), { anchor: 'middle', size: 8.5, fill: C.faint });
      prev = b.upTo;
    });
    let acc = 0; const lc = [C.navy, C.granite, C.sky, C.aqua];
    s.income.forEach((l, k) => { out += `<rect x="${x(acc)}" y="${barY}" width="${x(acc + l.amount) - x(acc)}" height="${barH}" fill="${l.color || lc[k % lc.length]}"></rect>`; acc += l.amount; });
    if (s.room) out += `<rect x="${x(acc)}" y="${barY}" width="${x(s.room.to) - x(acc)}" height="${barH}" fill="none" stroke="${C.bronze}" stroke-width="1.6" stroke-dasharray="5 3"></rect>${t((x(acc) + x(s.room.to)) / 2, barY + barH / 2 + 4, s.room.label || ('Room ' + fmt(s.room.to - acc)), { anchor: 'middle', size: 10, fill: C.bronze, weight: 600 })}`;
    out += `<line x1="${x(acc)}" y1="${barY - 30}" x2="${x(acc)}" y2="${barY + barH + 8}" stroke="${C.redD}" stroke-width="1.5"></line>${t(x(acc), barY - 34, 'Taxable income ' + fmt(acc), { anchor: 'middle', size: 9.5, fill: C.redD, halo: '#FFFFFF' })}`;
    out += legend(s.income.map((l, k) => [l.label, l.color || lc[k % lc.length]]), L, H - 6);
    return wrap(W, H, out, s.title, [30, 8, 8, 8]);
  };

  // 7. Periodic table of returns: years[], classes [{key,label,color}], returns {key: [..per year]}
  R.periodic = s => {
    const W = s.width || 640, n = s.years.length, m = s.classes.length, cw = W / n, ch = s.cellHeight || 34, H = m * ch + 22;
    let out = s.years.map((yr, i) => t(i * cw + cw / 2, 10, yr, { anchor: 'middle', size: 9.5, fill: C.ink, weight: 600 })).join('');
    s.years.forEach((yr, i) => {
      const ranked = s.classes.map(c => ({ c, v: s.returns[c.key][i] })).sort((a, b) => b.v - a.v);
      ranked.forEach((r, j) => { const x0 = i * cw + 1.5, y0 = 18 + j * ch + 1.5, dark = [C.navy, C.granite, C.steel, C.aquaD, C.bronze, C.clay].includes(r.c.color);
        out += `<rect x="${x0}" y="${y0}" width="${cw - 3}" height="${ch - 3}" rx="3" fill="${r.c.color}"></rect>` + t(x0 + (cw - 3) / 2, y0 + ch / 2 - 3, r.c.short || r.c.label, { anchor: 'middle', size: 8, fill: dark ? '#F8F4F0' : C.ink }) + t(x0 + (cw - 3) / 2, y0 + ch / 2 + 8, pct(r.v), { anchor: 'middle', size: 9, fill: dark ? '#F8F4F0' : C.ink, weight: 600 }); });
    });
    return wrap(W, H, out, s.title, [4, 4, 4, 4]);
  };

  // 8. Drawdown / underwater: labels[], values[] (index levels)
  R.drawdown = s => {
    const W = s.width || 640, H = s.height || 200, L = 44, B = 24, T = 14, n = s.values.length;
    let peak = -Infinity; const dd = s.values.map(v => { peak = Math.max(peak, v); return (v / peak - 1) * 100; });
    const lo = Math.min(...dd), ny = nice(lo, 0); const x = lin(0, n - 1, L, W), y = lin(ny.lo, 0, H - B, T);
    let out = yAxis(W, y, ny.ticks, v => v.toFixed(0) + '%', L);
    out += `<path d="M${x(0)},${y(0)}${dd.map((v, i) => `L${x(i)},${y(v)}`).join('')}L${x(n - 1)},${y(0)}Z" fill="${C.redL}" opacity=".45"></path><path d="${dd.map((v, i) => `${i ? 'L' : 'M'}${x(i)},${y(v)}`).join('')}" fill="none" stroke="${C.red}" stroke-width="1.4"></path>`;
    const mi = dd.indexOf(lo); out += `<circle cx="${x(mi)}" cy="${y(lo)}" r="3" fill="${C.redD}"></circle>${t(x(mi) + 6, y(lo) + 4, 'Max drawdown ' + lo.toFixed(1) + '%', { size: 9.5, fill: C.redD, halo: C.canvas })}`;
    out += s.labels.map((l, i) => i % Math.ceil(n / 8) === 0 ? t(x(i), H - B + 15, l, { anchor: 'middle', size: 9, fill: C.faint }) : '').join('');
    return wrap(W, H, out, s.title);
  };

  // 9. Treemap: items [{label, value, color?}] (squarified)
  R.treemap = s => {
    const W = s.width || 640, H = s.height || 300, fmt = s.format || money, tot = s.items.reduce((a, b) => a + b.value, 0);
    const items = s.items.map((d, i) => ({ ...d, col: d.color || PAL[i % PAL.length] })).sort((a, b) => b.value - a.value), rects = [];
    const worst = (row, w) => { const s2 = row.reduce((a, r) => a + r.a, 0), mx = Math.max(...row.map(r => r.a)), mn = Math.min(...row.map(r => r.a)); return Math.max(w * w * mx / (s2 * s2), s2 * s2 / (w * w * mn)); };
    let box = { x: 0, y: 0, w: W, h: H }, list = items.map(d => ({ d, a: d.value / tot * W * H }));
    while (list.length) { const w = Math.min(box.w, box.h); let row = [list[0]], i = 1; while (i < list.length && worst(row.concat(list[i]), w) <= worst(row, w)) row.push(list[i++]); list = list.slice(i);
      const s2 = row.reduce((a, r) => a + r.a, 0); if (box.w >= box.h) { const cw = s2 / box.h; let yy = box.y; row.forEach(r => { const hh = r.a / cw; rects.push({ ...r, x: box.x, y: yy, w: cw, h: hh }); yy += hh; }); box = { x: box.x + cw, y: box.y, w: box.w - cw, h: box.h }; } else { const rh = s2 / box.w; let xx = box.x; row.forEach(r => { const ww = r.a / rh; rects.push({ ...r, x: xx, y: box.y, w: ww, h: rh }); xx += ww; }); box = { x: box.x, y: box.y + rh, w: box.w, h: box.h - rh }; } }
    const out = rects.map(r => { const dark = [C.navy, C.granite, C.steel, C.bronze, C.clay, C.aquaD].includes(r.d.col), fc = dark ? '#F8F4F0' : C.ink, big = r.w > 70 && r.h > 34;
      return `<rect x="${r.x + 1.5}" y="${r.y + 1.5}" width="${Math.max(0, r.w - 3)}" height="${Math.max(0, r.h - 3)}" rx="4" fill="${r.d.col}"></rect>` + (big ? t(r.x + 9, r.y + 18, r.d.label, { size: 10, fill: fc }) + t(r.x + 9, r.y + 32, fmt(r.d.value) + ' · ' + (r.d.value / tot * 100).toFixed(0) + '%', { size: 9, fill: fc }) : r.w > 34 && r.h > 18 ? t(r.x + 6, r.y + 14, (r.d.value / tot * 100).toFixed(0) + '%', { size: 8.5, fill: fc }) : ''); }).join('');
    return wrap(W, H, out, s.title, [2, 2, 2, 2]);
  };

  // 10. Bullet charts: rows [{label, value, target, ranges:[poor, ok, good], unit?}]
  R.bullet = s => {
    const W = s.width || 640, rowH = 40, H = s.rows.length * rowH, L = 150, Rr = 56;
    let out = '';
    s.rows.forEach((r, i) => { const cy = i * rowH + 18, mx = r.max || r.ranges[r.ranges.length - 1], x = lin(0, mx, L, W - Rr), fmt = r.format || (v => v + (r.unit || ''));
      out += t(L - 12, cy + 1, r.label, { anchor: 'end', size: 10.5, fill: C.ink }) + (r.sub ? t(L - 12, cy + 13, r.sub, { anchor: 'end', size: 8.5, fill: C.faint }) : '');
      let p = 0; [C.clayL, C.sky3, C.grid].forEach((col, k) => { const v = r.ranges[k]; if (v == null) return; out += `<rect x="${x(p)}" y="${cy - 10}" width="${x(v) - x(p)}" height="20" fill="${[C.clayL, '#EAE5DE', '#F2EEE8'][k]}"></rect>`; p = v; });
      out += `<rect x="${L}" y="${cy - 4}" width="${x(r.value) - L}" height="8" rx="2" fill="${C.navy}"></rect><line x1="${x(r.target)}" y1="${cy - 12}" x2="${x(r.target)}" y2="${cy + 12}" stroke="${C.bronze}" stroke-width="2.5"></line>`;
      out += t(W - Rr + 10, cy + 4, fmt(r.value), { size: 11, fill: C.ink, weight: 600, serif: true }); });
    return wrap(W, H, out, s.title, [4, 8, 4, 8]);
  };

  // 11. Heat map: rows[], cols[], values[r][c], min, max, format, diverging?
  R.heatmap = s => {
    const W = s.width || 640, L = s.labelWidth || 110, T = 22, nr = s.rows.length, nc = s.cols.length, cw = (W - L) / nc, ch = s.cellHeight || 26, H = T + nr * ch;
    const vals = s.values.flat(), lo = s.min ?? Math.min(...vals), hi = s.max ?? Math.max(...vals), fmt = s.format || (v => v.toFixed(2));
    const mix = (a, b, f) => { const p = h => [1, 3, 5].map(i => parseInt(h.substr(i, 2), 16)); const A = p(a), Bb = p(b); return '#' + A.map((v, i) => Math.round(v + (Bb[i] - v) * f).toString(16).padStart(2, '0')).join(''); };
    const DIV = ['#CE3657', '#DE788E', '#EFBDC8', '#E6E3DB', '#BFEBF1', '#7FD6E2', '#3CC1D3'];
    const col = v => { if (!s.diverging) return mix('#F2F6FC', C.navy, (v - lo) / (hi - lo || 1)); const m = Math.max(Math.abs(lo), Math.abs(hi)) || 1, p = Math.max(-1, Math.min(1, v / m)) * 3 + 3, i = Math.min(5, Math.floor(p)); return mix(DIV[i], DIV[i + 1], p - i); };
    let out = s.cols.map((c, j) => t(L + j * cw + cw / 2, 12, c, { anchor: 'middle', size: 9, fill: C.muted })).join('');
    s.rows.forEach((r, i) => { out += t(L - 8, T + i * ch + ch / 2 + 3.5, r, { anchor: 'end', size: 9.5, fill: C.ink });
      s.cols.forEach((_, j) => { const v = s.values[i][j], bg = col(v), dark = s.diverging ? v / (Math.max(Math.abs(lo), Math.abs(hi)) || 1) <= -0.8 : parseInt(bg.substr(1, 2), 16) < 140; out += `<rect x="${L + j * cw + 1}" y="${T + i * ch + 1}" width="${cw - 2}" height="${ch - 2}" rx="3" fill="${bg}"></rect>` + t(L + j * cw + cw / 2, T + i * ch + ch / 2 + 3.5, fmt(v), { anchor: 'middle', size: 9, fill: dark ? '#F8F4F0' : C.ink }); }); });
    return wrap(W, H, out, s.title, [4, 4, 4, 4]);
  };

  // 12. Timeline / Gantt: start, end (Date strings), lanes [{label, items:[{label, from, to?, kind}]}]
  R.timeline = s => {
    const W = s.width || 640, L = 120, T = 26, laneH = 30, H = T + s.lanes.length * laneH + 6, P = v => new Date(String(v).length <= 10 ? v + 'T12:00:00' : v), d = v => P(v).getTime();
    const x = lin(d(s.start), d(s.end), L, W - 8), kc = { tax: C.red, estate: C.granite, invest: C.navy, insurance: C.aqua, giving: C.bronze, other: C.clay };
    let out = ''; const s0 = P(s.start); for (let m = new Date(s0.getFullYear(), s0.getMonth(), 1); m <= P(s.end); m.setMonth(m.getMonth() + (s.step || 1))) { const xx = x(m.getTime()); out += `<line x1="${xx}" y1="${T - 6}" x2="${xx}" y2="${H}" stroke="${C.grid}"></line>${t(xx + 3, 12, m.toLocaleString('en-US', { month: 'short' }) + (m.getMonth() === 0 ? ' ' + m.getFullYear() : ''), { size: 9, fill: C.faint })}`; }
    if (s.today) out += `<line x1="${x(d(s.today))}" y1="${T - 10}" x2="${x(d(s.today))}" y2="${H}" stroke="${C.bronze}" stroke-width="1.5" stroke-dasharray="3 3"></line>`;
    s.lanes.forEach((ln, i) => { const cy = T + i * laneH + laneH / 2; out += t(L - 10, cy + 4, ln.label, { anchor: 'end', size: 10, fill: C.ink });
      ln.items.forEach(it => { const col = kc[it.kind] || C.navy; if (it.to) { const x0 = x(d(it.from)), x1 = x(d(it.to)); out += `<rect x="${x0}" y="${cy - 8}" width="${Math.max(4, x1 - x0)}" height="16" rx="8" fill="${col}" opacity=".9"></rect>` + (x1 - x0 > 60 ? t(x0 + 8, cy + 3.5, it.label, { size: 8.5, fill: '#F8F4F0' }) : t(x1 + 5, cy + 3.5, it.label, { size: 8.5, fill: C.muted })); } else { const xx = x(d(it.from)); out += `<path d="M${xx},${cy - 7}L${xx + 7},${cy}L${xx},${cy + 7}L${xx - 7},${cy}Z" fill="${col}"></path>` + t(xx + 10, cy + 3.5, it.label, { size: 8.5, fill: C.muted }); } }); });
    return wrap(W, H, out, s.title);
  };

  // 13. Risk vs return scatter: points [{label, risk, ret, highlight?}], frontier? [[risk, ret]...]
  R.scatter = s => {
    const W = s.width || 640, H = s.height || 280, L = 44, B = 32, T = 14, pts = s.points, rs = pts.map(p => p.risk).concat((s.frontier || []).map(f => f[0])), es = pts.map(p => p.ret).concat((s.frontier || []).map(f => f[1]));
    const nx = nice(0, Math.max(...rs) * 1.1), ny = nice(Math.min(0, ...es), Math.max(...es) * 1.1); const x = lin(nx.lo, nx.hi, L, W), y = lin(ny.lo, ny.hi, H - B, T);
    let out = yAxis(W, y, ny.ticks, v => v + '%', L) + nx.ticks.map(v => t(x(v), H - B + 15, v + '%', { anchor: 'middle', size: 9, fill: C.faint })).join('') + t((L + W) / 2, H - 4, s.xLabel || 'Risk (standard deviation)', { anchor: 'middle', size: 9, fill: C.muted }) + t(L, T - 4, s.yLabel || 'Expected return', { size: 9, fill: C.muted });
    if (s.frontier) out += `<path d="${s.frontier.map((f, i) => `${i ? 'L' : 'M'}${x(f[0])},${y(f[1])}`).join('')}" fill="none" stroke="${C.sky}" stroke-width="2"></path>`;
    pts.forEach(p => { out += `<circle cx="${x(p.risk)}" cy="${y(p.ret)}" r="${p.highlight ? 7 : 5}" fill="${p.highlight ? C.bronze : C.navy}" stroke="#FFFFFF" stroke-width="1.5"></circle>` + t(x(p.risk) + 9, y(p.ret) + 3.5, p.label, { size: 9.5, fill: p.highlight ? C.bronze : C.ink, weight: p.highlight ? 600 : null, halo: C.canvas }); });
    return wrap(W, H, out, s.title);
  };

  // 14. Tornado: base (number), baseLabel, rows [{label, low, high}] (deltas vs base)
  R.tornado = s => {
    const W = s.width || 640, rowH = 30, H = s.rows.length * rowH + 30, L = 170, fmt = s.format || (v => (v > 0 ? '+' : '') + v);
    const unit = s.unit || ''; if (!s.format && unit) s = { ...s, format: v => (v > 0 ? '+' : '') + v + unit };
    const rows = s.rows.slice().sort((a, b) => (Math.abs(b.high - b.low)) - (Math.abs(a.high - a.low))), mx = Math.max(...rows.flatMap(r => [Math.abs(r.low), Math.abs(r.high)]));
    const x = lin(-mx, mx, L + 36, W - 40), z = x(0);
    let out = `<line x1="${z}" y1="10" x2="${z}" y2="${H - 14}" stroke="${C.ink}" stroke-width="1"></line>${t(z, H - 2, s.baseLabel || 'Base case', { anchor: 'middle', size: 9, fill: C.muted })}`;
    rows.forEach((r, i) => { const cy = 22 + i * rowH; out += t(L - 12, cy + 4, r.label, { anchor: 'end', size: 10, fill: C.ink });
      [[r.low, C.redL], [r.high, C.aqua]].forEach(([v, col]) => { const a = Math.min(z, x(v)), b = Math.max(z, x(v)); out += `<rect x="${a}" y="${cy - 9}" width="${b - a}" height="18" rx="2" fill="${col}"></rect>` + t(v < 0 ? a - 5 : b + 5, cy + 4, fmt(v), { anchor: v < 0 ? 'end' : 'start', size: 9.5, fill: C.ink }); }); });
    return wrap(W, H, out, s.title);
  };

  // 15. Choropleth (tile grid map, no geodata): values {ST: number}, format, legend
  const US = 'AK,,,,,,,,,,,ME|,,,,,,,,,,VT,NH|WA,ID,MT,ND,MN,IL,WI,MI,NY,RI,MA,|OR,NV,WY,SD,IA,IN,OH,PA,NJ,CT,,|CA,UT,CO,NE,MO,KY,WV,VA,MD,DE,,|,AZ,NM,KS,AR,TN,NC,SC,DC,,,|,,,OK,LA,MS,AL,GA,,,,|HI,,,TX,,,,,FL,,,'.split('|').map(r => r.split(','));
  R.choropleth = s => {
    const W = s.width || 640, cols = 12, cell = W / cols, H = US.length * cell, v = s.values, vals = Object.values(v), lo = s.min ?? Math.min(...vals), hi = s.max ?? Math.max(...vals), fmt = s.format || (x => x);
    const mix = f => { const A = [0xF2, 0xF6, 0xFC], Bb = [0x31, 0x46, 0x5C]; return '#' + A.map((a, i) => Math.round(a + (Bb[i] - a) * f).toString(16).padStart(2, '0')).join(''); };
    let out = '';
    US.forEach((row, r) => row.forEach((st, c) => { if (!st) return; const has = v[st] != null, f = has ? (v[st] - lo) / (hi - lo || 1) : 0, bg = has ? mix(.08 + f * .92) : '#FFFFFF', dark = has && f > .45;
      out += `<rect x="${c * cell + 2}" y="${r * cell + 2}" width="${cell - 4}" height="${cell - 4}" rx="5" fill="${bg}" stroke="${has ? 'none' : C.rule}"></rect>` + t(c * cell + cell / 2, r * cell + cell / 2 - (has ? 1 : -3), st, { anchor: 'middle', size: 9, fill: dark ? '#F8F4F0' : C.muted, weight: 600 }) + (has ? t(c * cell + cell / 2, r * cell + cell / 2 + 11, fmt(v[st]), { anchor: 'middle', size: 8, fill: dark ? '#F8F4F0' : C.muted }) : ''); }));
    return wrap(W, H, out, s.title, [4, 4, 4, 4]);
  };

  const API = { render: R, colors: C, format: { money, pct } };
  Object.keys(R).forEach(k => { API[k] = (el, spec) => { el.innerHTML = R[k](spec); return el; }; });
  window.FartherCharts = API;
})();
