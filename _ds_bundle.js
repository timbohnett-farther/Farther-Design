/* @ds-bundle: {"format":4,"namespace":"FartherDesignSystemImageBank_3c8d0a","components":[],"sourceHashes":{"assets/charts/estate-flow-example.js":"6f7a057b8280","assets/charts/estate-flow.js":"b156819c1535","assets/charts/farther-charts-examples.js":"21f9a9f5e4fc","assets/charts/farther-charts.js":"8dcc89ab185c","assets/charts/sankey.js":"567c234182fa","assets/compliance/disclosure.js":"b5de6ee7f9d1","assets/icons/farther-icons.js":"981969de56de","assets/infographics/farther-infographics-examples.js":"1df39e007115","assets/infographics/farther-infographics.js":"462f29b8d141","library/pieces/deck-stage.js":"f3d3d0a662c0","library/pieces/doc-page.js":"f52ae9c02fca","library/tools/fix-disclosure.js":"4a6584d2a2d3","library/tools/ingest.js":"bea6dea3b40f","library/tools/personalize.js":"641f005f5de3","library/tools/relink.js":"d584284935ca","library/tools/slot.js":"5130484ddc15","slides/deck-stage.js":"522102a1c71e","trials/lauren-moone/doc-page.js":"371bab66f42d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FartherDesignSystemImageBank_3c8d0a = window.FartherDesignSystemImageBank_3c8d0a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/charts/estate-flow-example.js
try { (() => {
// Shared hypothetical example: Jaime and Robert, $15.8M household. Each scenario's stages sum to $15.8M.
// Assumes no growth or spending between deaths; illustrative only.
window.ESTATE_FLOW_EXAMPLE = {
  scenarios: [{
    key: 'jaime-first',
    label: 'Jaime predeceases Robert',
    title: 'Jaime predeceases Robert',
    stages: [{
      label: 'Before Jaime\u2019s death',
      nodes: [{
        id: 'ret',
        label: 'Jaime\u2019s retirement\naccounts',
        value: 1200000,
        kind: 'asset'
      }, {
        id: 'inv',
        label: 'Jaime\u2019s investment\naccounts',
        value: 7100000,
        kind: 'asset'
      }, {
        id: 'joint',
        label: 'Joint investment\naccount',
        value: 4000000,
        kind: 'asset'
      }, {
        id: 'abc',
        label: 'ABC Holdings\n(business interest)',
        value: 3500000,
        kind: 'asset'
      }]
    }, {
      label: 'At Jaime\u2019s death',
      nodes: [{
        id: 'rt',
        label: 'Jaime\u2019s revocable trust',
        value: 15800000,
        kind: 'trust',
        sub: 'Funded at death',
        from: ['ret', 'inv', 'joint', 'abc']
      }]
    }, {
      label: 'After Jaime\u2019s death',
      nodes: [{
        id: 'bypass',
        label: 'Bypass trust',
        value: 7000000,
        kind: 'trust',
        sub: 'Uses Jaime\u2019s exemption',
        from: ['rt']
      }, {
        id: 'mte',
        label: 'Marital trust\n(GST exempt)',
        value: 300000,
        kind: 'spouse',
        from: ['rt']
      }, {
        id: 'mtn',
        label: 'Marital trust\n(GST non-exempt)',
        value: 8500000,
        kind: 'spouse',
        from: ['rt']
      }]
    }, {
      label: 'After Robert\u2019s death',
      nodes: [{
        id: 'tax',
        label: 'Estate tax',
        value: 1100000,
        kind: 'tax',
        sub: 'Federal + state',
        from: [{
          id: 'mtn',
          dashed: true
        }]
      }, {
        id: 'kids',
        label: 'Children\u2019s trusts',
        value: 14700000,
        kind: 'heirs',
        sub: 'Bypass + marital, net of tax',
        from: [{
          id: 'bypass',
          dashed: true
        }, {
          id: 'mte',
          dashed: true
        }, {
          id: 'mtn',
          dashed: true
        }]
      }]
    }]
  }, {
    key: 'robert-first',
    label: 'Robert predeceases Jaime',
    title: 'Robert predeceases Jaime',
    stages: [{
      label: 'Before Robert\u2019s death',
      nodes: [{
        id: 'ret',
        label: 'Robert\u2019s retirement\naccounts',
        value: 2600000,
        kind: 'asset'
      }, {
        id: 'inv',
        label: 'Robert\u2019s investment\naccounts',
        value: 5700000,
        kind: 'asset'
      }, {
        id: 'joint',
        label: 'Joint investment\naccount',
        value: 4000000,
        kind: 'asset'
      }, {
        id: 'abc',
        label: 'ABC Holdings\n(business interest)',
        value: 3500000,
        kind: 'asset'
      }]
    }, {
      label: 'At Robert\u2019s death',
      nodes: [{
        id: 'rt',
        label: 'Robert\u2019s revocable trust',
        value: 15800000,
        kind: 'trust',
        sub: 'Funded at death',
        from: ['ret', 'inv', 'joint', 'abc']
      }]
    }, {
      label: 'After Robert\u2019s death',
      nodes: [{
        id: 'bypass',
        label: 'Bypass trust',
        value: 7000000,
        kind: 'trust',
        sub: 'Uses Robert\u2019s exemption',
        from: ['rt']
      }, {
        id: 'char',
        label: 'Charitable bequest',
        value: 800000,
        kind: 'charity',
        sub: 'Donor-advised fund',
        from: ['rt']
      }, {
        id: 'mt',
        label: 'Marital trust',
        value: 8000000,
        kind: 'spouse',
        from: ['rt']
      }]
    }, {
      label: 'After Jaime\u2019s death',
      nodes: [{
        id: 'tax',
        label: 'Estate tax',
        value: 900000,
        kind: 'tax',
        sub: 'Federal + state',
        from: [{
          id: 'mt',
          dashed: true
        }]
      }, {
        id: 'kids',
        label: 'Children\u2019s trusts',
        value: 14100000,
        kind: 'heirs',
        sub: 'Bypass + marital, net of tax',
        from: [{
          id: 'bypass',
          dashed: true
        }, {
          id: 'mt',
          dashed: true
        }]
      }, {
        id: 'char2',
        label: 'Charity (DAF)',
        value: 800000,
        kind: 'charity',
        sub: 'Granted over time',
        from: [{
          id: 'char',
          dashed: true
        }]
      }]
    }]
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/charts/estate-flow-example.js", error: String((e && e.message) || e) }); }

// assets/charts/estate-flow.js
try { (() => {
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
    asset: {
      c: '#3B5A69',
      tint: '#FFFFFF',
      line: '#E3D3C5'
    },
    trust: {
      c: '#567EA1',
      tint: '#FFFFFF',
      line: '#E3D3C5'
    },
    spouse: {
      c: '#7DA8DD',
      tint: '#FFFFFF',
      line: '#E3D3C5'
    },
    charity: {
      c: '#B68A4C',
      tint: '#FFFFFF',
      line: '#E3D3C5'
    },
    tax: {
      c: '#CE3657',
      tint: '#FBEEF1',
      line: '#DE788E'
    },
    heirs: {
      c: '#289FAF',
      tint: '#EEF8FA',
      line: '#7FD6E2'
    }
  };
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const money = v => v >= 1e9 ? '$' + +(v / 1e9).toFixed(1) + 'B' : v >= 1e6 ? '$' + (v / 1e6).toFixed(1) + 'M' : v >= 1e3 ? '$' + Math.round(v / 1e3) + 'K' : '$' + Math.round(v);
  const SANS = "'Fakt Pro','Fakt',system-ui,sans-serif",
    SERIF = "'ABC Arizona Text','Arizona Text',Georgia,serif";
  function render(sc, o = {}) {
    if (o.orientation === 'horizontal') return renderH(sc, o);
    const W = o.width || 960,
      s = o.scale || 1,
      fmt = o.format || money,
      halo = o.halo || '#F8F4F0';
    const cardW = (o.cardWidth || 196) * s,
      cardH = (o.cardHeight || 88) * s,
      labelH = (o.labelHeight || 30) * s,
      busGap = (o.busGap || 26) * s,
      stageGap = (o.stageGap ?? 44) * s,
      padX = 8;
    const pos = {};
    let y = 0,
      out = '',
      edges = '',
      cards = '',
      rules = '';
    sc.stages.forEach((st, si) => {
      // stage rule + label + total
      const total = st.nodes.reduce((a, n) => a + (n.value || 0), 0);
      rules += `<line x1="${padX}" y1="${y + 11 * s}" x2="${W - padX}" y2="${y + 11 * s}" stroke="#E3D3C5" stroke-width="1"></line>`;
      rules += `<text x="${padX}" y="${y + 15 * s}" font-family="${SANS}" font-size="${9.5 * s}" letter-spacing="${1.6 * s}" fill="#9F8E75" stroke="${halo}" stroke-width="${6 * s}" paint-order="stroke">${esc(st.label.toUpperCase())}</text>`;
      if (o.showTotals !== false) rules += `<text x="${W - padX}" y="${y + 15 * s}" text-anchor="end" font-family="${SANS}" font-size="${9.5 * s}" fill="#5B6A71" stroke="${halo}" stroke-width="${6 * s}" paint-order="stroke">Total ${esc(fmt(total))}</text>`;
      const top = y + labelH,
        n = st.nodes.length;
      const w = Math.min(cardW, (W - 2 * padX - (n - 1) * 16 * s) / n);
      const span = W - 2 * padX,
        step = span / n;
      st.nodes.forEach((nd, i) => {
        const cx = padX + step * (i + 0.5),
          x = cx - w / 2,
          k = K[nd.kind] || K.asset;
        pos[nd.id] = {
          cx,
          top,
          bottom: top + cardH,
          kind: nd.kind
        };
        const lines = String(nd.label).split('\n');
        cards += `<rect x="${x}" y="${top}" width="${w}" height="${cardH}" rx="${10 * s}" fill="${k.tint}" stroke="${k.line}" stroke-width="1"></rect>`;
        cards += `<rect x="${cx - 14 * s}" y="${top}" width="${28 * s}" height="${3 * s}" rx="${1.5 * s}" fill="${k.c}"></rect>`;
        const ly = top + 22 * s - (lines.length - 1) * 6 * s;
        lines.forEach((ln, j) => {
          cards += `<text x="${cx}" y="${ly + j * 12 * s}" text-anchor="middle" font-family="${SANS}" font-size="${10.5 * s}" fill="#5B6A71">${esc(ln)}</text>`;
        });
        cards += `<text x="${cx}" y="${top + cardH * (nd.sub ? 0.66 : 0.73)}" text-anchor="middle" font-family="${SERIF}" font-weight="300" font-size="${24 * s}" letter-spacing="${-0.4 * s}" fill="${nd.kind === 'tax' ? '#A42843' : '#333333'}">${esc(fmt(nd.value || 0))}</text>`;
        if (nd.sub) cards += `<text x="${cx}" y="${top + cardH * 0.87}" text-anchor="middle" font-family="${SANS}" font-size="${9 * s}" fill="#8A8A8A">${esc(nd.sub)}</text>`;
      });
      // connectors from the previous stage
      if (si > 0) st.nodes.forEach(nd => (nd.from || []).forEach(f => {
        const id = typeof f === 'string' ? f : f.id,
          dashed = typeof f === 'object' && f.dashed,
          a = pos[id],
          b = pos[nd.id];
        if (!a || !b) return;
        const bus = a.bottom + busGap,
          tax = nd.kind === 'tax',
          col = tax ? '#CE3657' : '#A8B3B8';
        const r = Math.min(8 * s, Math.abs(b.cx - a.cx) / 2);
        const dir = Math.sign(b.cx - a.cx);
        const d = dir === 0 ? `M${a.cx},${a.bottom}V${b.top - 6 * s}` : `M${a.cx},${a.bottom}V${bus - r}Q${a.cx},${bus} ${a.cx + dir * r},${bus}H${b.cx - dir * r}Q${b.cx},${bus} ${b.cx},${bus + r}V${b.top - 6 * s}`;
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
    const W = o.width || 1680,
      H = o.height || 700,
      s = o.scale || 1,
      fmt = o.format || money,
      halo = o.halo || '#F8F4F0';
    const n = sc.stages.length,
      headH = 50 * s,
      colGap = (o.columnGap || 70) * s,
      colW = (W - colGap * (n - 1)) / n;
    const cardH = (o.cardHeight || 118) * s,
      vGap = (o.rowGap ?? 18) * s;
    const pos = {};
    let rules = '',
      edges = '',
      cards = '';
    sc.stages.forEach((st, si) => {
      const x = si * (colW + colGap),
        total = st.nodes.reduce((a, nd) => a + (nd.value || 0), 0);
      rules += `<text x="${x}" y="${16 * s}" font-family="${SANS}" font-size="${17 * s}" letter-spacing="${2 * s}" fill="#9F8E75">${esc(st.label.toUpperCase())}</text>`;
      if (o.showTotals !== false) rules += `<text x="${x}" y="${38 * s}" font-family="${SANS}" font-size="${16.5 * s}" fill="#5B6A71">Total ${esc(fmt(total))}</text>`;
      rules += `<line x1="${x}" y1="${headH - 2 * s}" x2="${x + colW}" y2="${headH - 2 * s}" stroke="#E3D3C5" stroke-width="1"></line>`;
      const m = st.nodes.length,
        ch = Math.min(cardH, (H - headH - 12 * s - vGap * (m - 1)) / m);
      const used = m * ch + (m - 1) * vGap,
        y0 = headH + 12 * s + (H - headH - 12 * s - used) / 2;
      st.nodes.forEach((nd, i) => {
        const y = y0 + i * (ch + vGap),
          k = K[nd.kind] || K.asset,
          cy = y + ch / 2;
        pos[nd.id] = {
          left: x,
          right: x + colW,
          cy
        };
        cards += `<rect x="${x}" y="${y}" width="${colW}" height="${ch}" rx="${12 * s}" fill="${k.tint}" stroke="${k.line}" stroke-width="1.2"></rect>`;
        cards += `<rect x="${x}" y="${y + ch / 2 - 18 * s}" width="${4 * s}" height="${36 * s}" rx="${2 * s}" fill="${k.c}"></rect>`;
        const one = String(nd.label).replace(/\n/g, ' '),
          lines = one.length > (o.wrapAt || 24) ? String(nd.label).split('\n') : [one];
        const tx = x + 22 * s,
          hasSub = !!nd.sub && ch > 90 * s,
          lift = (lines.length - 1) * 10 * s;
        lines.forEach((ln, j) => {
          cards += `<text x="${tx}" y="${cy - (hasSub ? 22 : 12) * s - lift + j * 20 * s}" font-family="${SANS}" font-size="${17 * s}" fill="#5B6A71">${esc(ln)}</text>`;
        });
        cards += `<text x="${tx}" y="${cy + (hasSub ? 18 : 24) * s + lift}" font-family="${SERIF}" font-weight="300" font-size="${38 * s}" letter-spacing="${-0.6 * s}" fill="${nd.kind === 'tax' ? '#A42843' : '#333333'}">${esc(fmt(nd.value || 0))}</text>`;
        if (hasSub) cards += `<text x="${tx}" y="${cy + 44 * s + lift}" font-family="${SANS}" font-size="${16.5 * s}" fill="#8A8A8A">${esc(nd.sub)}</text>`;
      });
      if (si > 0) st.nodes.forEach(nd => (nd.from || []).forEach(f => {
        const id = typeof f === 'string' ? f : f.id,
          dashed = typeof f === 'object' && f.dashed,
          a = pos[id],
          b = pos[nd.id];
        if (!a || !b) return;
        const bus = a.right + colGap / 2,
          tax = nd.kind === 'tax',
          col = tax ? '#CE3657' : '#A8B3B8';
        const r = Math.min(10 * s, Math.abs(b.cy - a.cy) / 2),
          dir = Math.sign(b.cy - a.cy);
        const d = dir === 0 ? `M${a.right},${a.cy}H${b.left - 8 * s}` : `M${a.right},${a.cy}H${bus - r}Q${bus},${a.cy} ${bus},${a.cy + dir * r}V${b.cy - dir * r}Q${bus},${b.cy} ${bus + r},${b.cy}H${b.left - 8 * s}`;
        edges += `<path d="${d}" fill="none" stroke="${col}" stroke-width="${(tax ? 2.4 : 2) * s}"${dashed ? ` stroke-dasharray="${7 * s} ${5 * s}"` : ''}></path>`;
        edges += `<path d="M${b.left - 9 * s},${b.cy - 6 * s}L${b.left - 1 * s},${b.cy}L${b.left - 9 * s},${b.cy + 6 * s}Z" fill="${col}"></path>`;
      }));
    });
    return `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto;display:block" role="img" aria-label="${esc(sc.title || sc.label || 'Estate flow')}">${rules}${edges}${cards}</svg>`;
  }
  let styled = false;
  function mount(el, spec) {
    if (!styled) {
      styled = true;
      const st = document.createElement('style');
      st.textContent = '@media print{[data-estate-toggle]{display:none!important}}';
      document.head.appendChild(st);
    }
    const scs = spec.scenarios;
    let cur = 0;
    const s = spec.toggleScale || 1;
    const draw = () => {
      const tog = scs.length > 1 ? `<div data-estate-toggle style="display:inline-flex;gap:${4 * s}px;padding:${3 * s}px;border:1px solid #E3D3C5;border-radius:9999px;background:#FFFFFF;margin-bottom:${10 * s}px">${scs.map((x, i) => `<button type="button" data-i="${i}" style="font-family:${SANS};font-size:${11 * s}px;border:0;border-radius:9999px;padding:${6 * s}px ${13 * s}px;cursor:pointer;background:${i === cur ? '#3B5A69' : 'transparent'};color:${i === cur ? '#F8F4F0' : '#3B5A69'}">${esc(x.label)}</button>`).join('')}</div>` : '';
      el.innerHTML = tog + render(scs[cur], spec);
      const t = el.querySelector('[data-estate-toggle]');
      if (t) t.style.alignSelf = 'flex-start';
      el.querySelectorAll('[data-i]').forEach(b => b.onclick = () => {
        cur = +b.dataset.i;
        draw();
        spec.onChange && spec.onChange(scs[cur], cur);
      });
      spec.onChange && spec.onChange(scs[cur], cur, true);
    };
    draw();
    return el;
  }
  window.FartherEstateFlow = {
    render,
    mount,
    kinds: K,
    format: {
      money
    }
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/charts/estate-flow.js", error: String((e && e.message) || e) }); }

// assets/charts/farther-charts-examples.js
try { (() => {
// Sample specs for preview cards; hypothetical data.
window.FARTHER_CHART_EXAMPLES = {
  "fan": {
    "years": [2026, 2028, 2030, 2032, 2034, 2036, 2038, 2040, 2042, 2044, 2046, 2048, 2050, 2052, 2054, 2056],
    "bands": [{
      "p10": 31600000,
      "p25": 31600000,
      "p50": 31600000,
      "p75": 31600000,
      "p90": 31600000
    }, {
      "p10": 26894929.874955308,
      "p25": 30584335.93555389,
      "p50": 34507989.99999999,
      "p75": 38431644.0644461,
      "p90": 42121050.12504467
    }, {
      "p10": 25926308.392467994,
      "p25": 31624066.86476619,
      "p50": 37683587.77974999,
      "p75": 43743108.69473379,
      "p90": 49440867.16703199
    }, {
      "p10": 24314439.620112117,
      "p25": 31601591.623799577,
      "p50": 39351419.94518148,
      "p75": 47101248.266563386,
      "p90": 54388400.27025085
    }, {
      "p10": 23098454.781069607,
      "p25": 31937802.848975245,
      "p50": 41338379.365636796,
      "p75": 50738955.88229835,
      "p90": 59578303.950203985
    }, {
      "p10": 22128862.685185283,
      "p25": 32569887.113025103,
      "p50": 43673833.726759516,
      "p75": 54777780.34049393,
      "p90": 65218804.768333755
    }, {
      "p10": 21320783.432888284,
      "p25": 33469640.356598318,
      "p50": 46389853.27546455,
      "p75": 59310066.19433079,
      "p90": 71458923.11804081
    }, {
      "p10": 20615855.289880626,
      "p25": 34623955.8029213,
      "p50": 49521459.52313917,
      "p75": 64418963.24335704,
      "p90": 78427063.75639771
    }, {
      "p10": 19968193.210244272,
      "p25": 36027718.8133769,
      "p50": 53106896.83575605,
      "p75": 70186074.85813518,
      "p90": 86245600.46126783
    }, {
      "p10": 19337986.84132273,
      "p25": 37680651.12649086,
      "p50": 57187929.017066486,
      "p75": 76695206.90764211,
      "p90": 95037871.19281024
    }, {
      "p10": 18688104.491369627,
      "p25": 39585717.55052364,
      "p50": 61810163.184862025,
      "p75": 84034608.81920041,
      "p90": 104932221.87835443
    }, {
      "p10": 17982053.510776978,
      "p25": 41748246.1745757,
      "p50": 67023403.45194893,
      "p75": 92298560.72932218,
      "p90": 116064753.3931209
    }, {
      "p10": 17182610.792282857,
      "p25": 44175409.72172051,
      "p50": 72882037.15461452,
      "p75": 101588664.58750853,
      "p90": 128581463.5169462
    }, {
      "p10": 16250802.983590368,
      "p25": 46875904.36306103,
      "p50": 79445456.62376793,
      "p75": 112015008.88447481,
      "p90": 142640110.26394546
    }, {
      "p10": 15145072.44436372,
      "p25": 49859743.07119453,
      "p50": 86778519.76957016,
      "p75": 123697296.46794577,
      "p90": 158411967.09477657
    }, {
      "p10": 13820538.164615598,
      "p25": 53138118.45588637,
      "p50": 94952053.05136481,
      "p75": 136765987.64684325,
      "p90": 176083567.93811402
    }],
    "goal": 40000000,
    "goalLabel": "Legacy goal $40M",
    "title": "Projected portfolio value"
  },
  "waterfall": {
    "start": {
      "label": "Jun 30",
      "value": 46300000
    },
    "steps": [{
      "label": "Markets",
      "value": 1400000
    }, {
      "label": "Business value",
      "value": 600000
    }, {
      "label": "Savings",
      "value": 300000
    }, {
      "label": "Spending",
      "value": -250000
    }, {
      "label": "Taxes",
      "value": -150000
    }],
    "endLabel": "Sep 30",
    "zeroBase": false,
    "title": "What changed in net worth"
  },
  "allocation": {
    "classes": [{
      "label": "U.S. equity",
      "current": 38,
      "target": 35,
      "min": 30,
      "max": 40
    }, {
      "label": "Intl. equity",
      "current": 20,
      "target": 20,
      "min": 15,
      "max": 25
    }, {
      "label": "Fixed income",
      "current": 24,
      "target": 28,
      "min": 23,
      "max": 33
    }, {
      "label": "Alternatives",
      "current": 12,
      "target": 12,
      "min": 8,
      "max": 16
    }, {
      "label": "Cash",
      "current": 6,
      "target": 5,
      "min": 2,
      "max": 5
    }],
    "title": "Allocation vs target"
  },
  "cashflow": {
    "years": ["2030", "2031", "2032", "2033", "2034", "2035", "2036", "2037", "2038", "2039", "2040", "2041", "2042", "2043", "2044", "2045"],
    "inflows": [{
      "label": "Social Security",
      "values": [0, 0, 95000, 95000, 95000, 95000, 95000, 95000, 95000, 95000, 95000, 95000, 95000, 95000, 95000, 95000]
    }, {
      "label": "Pension",
      "values": [60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000]
    }, {
      "label": "Portfolio withdrawals",
      "values": [360000, 360000, 265000, 265000, 265000, 265000, 265000, 265000, 265000, 265000, 265000, 265000, 265000, 265000, 265000, 265000]
    }, {
      "label": "RMDs",
      "values": [0, 0, 0, 49000, 52000, 55000, 58000, 61000, 64000, 67000, 70000, 73000, 76000, 79000, 82000, 85000]
    }],
    "outflows": [{
      "label": "Living expenses",
      "values": [330000, 338249.99999999994, 346706.25, 355373.9062499999, 364258.2539062498, 373364.7102539061, 382698.82801025367, 392266.2987105101, 402072.95617827267, 412124.7800827295, 422427.8995847977, 432988.59707441763, 443813.31200127804, 454908.6448013099, 466281.3609213427, 477938.3949443762]
    }, {
      "label": "Taxes",
      "values": [88000, 90000, 92000, 94000, 96000, 98000, 100000, 102000, 104000, 106000, 108000, 110000, 112000, 114000, 116000, 118000]
    }],
    "title": "Retirement cash flow"
  },
  "growth": {
    "labels": ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"],
    "series": [{
      "label": "Your portfolio",
      "values": [10000, 11200.000000000002, 13328.000000000002, 12661.6, 15193.92, 17321.0688, 20092.439808, 17480.42263296, 20102.486027903997, 22514.784351252478, 24766.262786377727]
    }, {
      "label": "Policy benchmark",
      "values": [10000, 11100.000000000002, 13098.000000000002, 12312.12, 14651.4228, 16556.107764, 19039.5239286, 16373.990578596, 18666.349259599443, 20719.647678155383, 22584.41596918937],
      "dash": "4 3"
    }, {
      "label": "Inflation",
      "values": [10000, 10200, 10414.199999999999, 10612.069799999997, 10856.147405399997, 11008.133469075598, 11778.70281191089, 12544.318494685098, 12970.825323504392, 13346.979257886018, 13707.34769784894]
    }],
    "title": "Growth of $10,000"
  },
  "brackets": {
    "brackets": [{
      "rate": 10,
      "upTo": 23850
    }, {
      "rate": 12,
      "upTo": 96950
    }, {
      "rate": 22,
      "upTo": 206700
    }, {
      "rate": 24,
      "upTo": 394600
    }, {
      "rate": 32,
      "upTo": 501050
    }, {
      "rate": 35,
      "upTo": 751600
    }],
    "income": [{
      "label": "Pension",
      "amount": 60000
    }, {
      "label": "Social Security (taxable)",
      "amount": 80000
    }, {
      "label": "IRA withdrawals",
      "amount": 120000
    }],
    "room": {
      "to": 394600,
      "label": "Roth conversion room $134.6K"
    },
    "title": "Filling the 24% bracket"
  },
  "periodic": {
    "years": ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
    "classes": [{
      "key": "us",
      "label": "U.S. large",
      "short": "US Lg",
      "color": "#31465C"
    }, {
      "key": "sm",
      "label": "U.S. small",
      "short": "US Sm",
      "color": "#567EA1"
    }, {
      "key": "intl",
      "label": "Intl.",
      "short": "Intl",
      "color": "#7DA8DD"
    }, {
      "key": "em",
      "label": "Emerging",
      "short": "EM",
      "color": "#B6D0ED"
    }, {
      "key": "bd",
      "label": "Bonds",
      "short": "Bonds",
      "color": "#3CC1D3"
    }, {
      "key": "re",
      "label": "REITs",
      "short": "REIT",
      "color": "#B68A4C"
    }, {
      "key": "cash",
      "label": "Cash",
      "short": "Cash",
      "color": "#E6E3DB"
    }],
    "returns": {
      "us": [31.5, 18.4, 28.7, -18.1, 26.3, 25, 17.9],
      "sm": [25.5, 20, 14.8, -20.4, 16.9, 11.5, 9.6],
      "intl": [22, 7.8, 11.3, -14.5, 18.2, 3.8, 24.1],
      "em": [18.4, 18.3, -2.5, -20.1, 9.8, 7.5, 21.3],
      "bd": [8.7, 7.5, -1.5, -13, 5.5, 1.3, 6.2],
      "re": [28.7, -8, 41.3, -24.4, 11.4, 4.9, 3.1],
      "cash": [2.2, 0.6, 0.1, 1.5, 5, 5.3, 4.4]
    },
    "title": "Asset class returns by year"
  },
  "drawdown": {
    "labels": ["2020", "", "", "2021", "", "", "2022", "", "", "2023", "", "", "2024", "", "", "2025", "", "", "2026", "", "", ""],
    "values": [100, 104, 109, 103, 96, 88, 79, 84, 92, 99, 106, 112, 108, 115, 121, 118, 110, 102, 109, 117, 124, 131],
    "title": "Drawdown from peak"
  },
  "treemap": {
    "items": [{
      "label": "Employer stock",
      "value": 4800000,
      "color": "#CE3657"
    }, {
      "label": "U.S. large cap",
      "value": 9200000
    }, {
      "label": "Intl. developed",
      "value": 4100000
    }, {
      "label": "Muni bonds",
      "value": 5200000
    }, {
      "label": "Treasuries",
      "value": 2300000
    }, {
      "label": "Private equity",
      "value": 2600000
    }, {
      "label": "Real estate",
      "value": 1800000
    }, {
      "label": "Cash",
      "value": 1600000
    }],
    "title": "Holdings by weight"
  },
  "bullet": {
    "rows": [{
      "label": "Funded ratio",
      "sub": "Assets vs. goal need",
      "value": 112,
      "target": 100,
      "ranges": [80, 100, 130],
      "unit": "%"
    }, {
      "label": "Savings rate",
      "sub": "Of gross income",
      "value": 18,
      "target": 20,
      "ranges": [10, 20, 30],
      "unit": "%"
    }, {
      "label": "Liquidity reserve",
      "sub": "Months of spending",
      "value": 26,
      "target": 24,
      "ranges": [12, 24, 36],
      "unit": " mo"
    }, {
      "label": "Single-stock exposure",
      "sub": "Of liquid net worth",
      "value": 42,
      "target": 15,
      "ranges": [15, 30, 50],
      "unit": "%"
    }],
    "title": "Key ratios vs target"
  },
  "heatmap": {
    "rows": ["U.S. large", "U.S. small", "Intl.", "Emerging", "Bonds", "REITs"],
    "cols": ["US Lg", "US Sm", "Intl", "EM", "Bonds", "REIT"],
    "values": [[1, 0.88, 0.86, 0.72, 0.18, 0.74], [0.88, 1, 0.79, 0.69, 0.12, 0.78], [0.86, 0.79, 1, 0.84, 0.24, 0.7], [0.72, 0.69, 0.84, 1, 0.21, 0.62], [0.18, 0.12, 0.24, 0.21, 1, 0.36], [0.74, 0.78, 0.7, 0.62, 0.36, 1]],
    "min": 0,
    "max": 1,
    "title": "10-year correlation"
  },
  "timeline": {
    "start": "2026-10-01",
    "end": "2027-04-30",
    "today": "2026-10-14",
    "lanes": [{
      "label": "Tax",
      "items": [{
        "label": "Harvest losses",
        "from": "2026-10-01",
        "to": "2026-11-15",
        "kind": "tax"
      }, {
        "label": "Q4 estimate",
        "from": "2027-01-15",
        "kind": "tax"
      }, {
        "label": "File return",
        "from": "2027-04-15",
        "kind": "tax"
      }]
    }, {
      "label": "Investments",
      "items": [{
        "label": "Staged sale, tranche 1–3",
        "from": "2026-10-20",
        "to": "2027-03-31",
        "kind": "invest"
      }]
    }, {
      "label": "Retirement",
      "items": [{
        "label": "Roth conversion",
        "from": "2026-11-01",
        "to": "2026-12-20",
        "kind": "invest"
      }, {
        "label": "RMD",
        "from": "2026-12-31",
        "kind": "invest"
      }]
    }, {
      "label": "Giving",
      "items": [{
        "label": "DAF gift",
        "from": "2026-12-15",
        "kind": "giving"
      }]
    }, {
      "label": "Estate",
      "items": [{
        "label": "Trust restatement",
        "from": "2026-11-01",
        "to": "2027-01-31",
        "kind": "estate"
      }]
    }],
    "title": "Planning calendar"
  },
  "scatter": {
    "points": [{
      "label": "Conservative",
      "risk": 6,
      "ret": 4.6
    }, {
      "label": "Moderate",
      "risk": 9.5,
      "ret": 6.1
    }, {
      "label": "Current",
      "risk": 12.4,
      "ret": 6.8,
      "highlight": true
    }, {
      "label": "Growth",
      "risk": 13.2,
      "ret": 7.3
    }, {
      "label": "Aggressive",
      "risk": 16,
      "ret": 7.9
    }],
    "frontier": [[4, 3.9], [6, 4.8], [8, 5.6], [10, 6.3], [12, 6.9], [14, 7.4], [16, 7.9], [18, 8.2]],
    "title": "Risk and return by portfolio"
  },
  "tornado": {
    "baseLabel": "Base case 91%",
    "unit": " pts",
    "rows": [{
      "label": "Retire at 59 / 61",
      "low": -4,
      "high": 3
    }, {
      "label": "Spend ±$50K a year",
      "low": -6,
      "high": 5
    }, {
      "label": "Returns ±1%",
      "low": -9,
      "high": 6
    }, {
      "label": "Sell employer stock (no / yes)",
      "low": -2,
      "high": 5
    }, {
      "label": "Gift $1M now / later",
      "low": -3,
      "high": 1
    }, {
      "label": "Inflation ±0.5%",
      "low": -4,
      "high": 3
    }],
    "title": "What moves the plan"
  },
  "choropleth": {
    "values": {
      "CA": 48,
      "TX": 36,
      "NY": 31,
      "FL": 29,
      "IL": 14,
      "MA": 12,
      "WA": 11,
      "CO": 10,
      "GA": 9,
      "NC": 9,
      "NJ": 8,
      "PA": 8,
      "AZ": 7,
      "VA": 7,
      "OH": 6,
      "MN": 5,
      "TN": 5,
      "OR": 4,
      "UT": 4,
      "CT": 4,
      "MI": 3,
      "MO": 3,
      "WI": 2,
      "SC": 2,
      "NV": 2,
      "MD": 3
    },
    "title": "Advisors by state"
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/charts/farther-charts-examples.js", error: String((e && e.message) || e) }); }

// assets/charts/farther-charts.js
try { (() => {
/* Farther Charts: 15 finance chart types as static, print-ready SVG in brand colors. No dependencies.
     <script src="assets/charts/farther-charts.js"></script>
     FartherCharts.<type>(el, spec)    renders into el, returns el
     FartherCharts.render.<type>(spec) returns the SVG string
   Every spec takes: width (viewBox width, default 640), height, format (value formatter), title (aria label).
   Types: fan, waterfall, allocation, cashflow, growth, brackets, periodic, drawdown, treemap, bullet,
          heatmap, timeline, scatter, tornado, choropleth. See preview/charts-*.html for specs. */
(function () {
  const C = {
    div: ['#CE3657', '#DE788E', '#EFBDC8', '#E6E3DB', '#BFEBF1', '#7FD6E2', '#3CC1D3'],
    steel: '#3B5A69',
    granite: '#567EA1',
    granite2: '#779AB9',
    granite3: '#A7BDD2',
    navy: '#31465C',
    sky: '#7DA8DD',
    sky2: '#B6D0ED',
    sky3: '#D0DBE7',
    aqua: '#3CC1D3',
    aquaD: '#289FAF',
    aquaL: '#7FD6E2',
    bronze: '#B68A4C',
    bronzeL: '#DDCCAB',
    clay: '#9F8E75',
    clayL: '#E6E3DB',
    red: '#CE3657',
    redL: '#DE788E',
    redD: '#A42843',
    ink: '#333333',
    muted: '#5B6A71',
    faint: '#8A8A8A',
    rule: '#E3D3C5',
    grid: '#EAEEF4',
    canvas: '#F8F4F0'
  };
  const PAL = [C.navy, C.granite, C.sky, C.aqua, C.bronze, C.clay, C.sky2, C.redL, C.granite3];
  const SANS = "'Fakt Pro','Fakt',system-ui,sans-serif",
    SERIF = "'ABC Arizona Text',Georgia,serif";
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const money = v => {
    const a = Math.abs(v),
      sg = v < 0 ? '–' : '';
    return sg + (a >= 1e9 ? '$' + (a / 1e9).toFixed(1) + 'B' : a >= 1e6 ? '$' + (a / 1e6).toFixed(1) + 'M' : a >= 1e3 ? '$' + Math.round(a / 1e3) + 'K' : '$' + Math.round(a));
  };
  const pct = v => (v > 0 ? '+' : v < 0 ? '–' : '') + Math.abs(v).toFixed(1) + '%';
  const t = (x, y, s, o = {}) => `<text x="${x}" y="${y}" font-family="${o.serif ? SERIF : SANS}" font-size="${o.size || 10}" fill="${o.fill || C.muted}"${o.anchor ? ` text-anchor="${o.anchor}"` : ''}${o.weight ? ` font-weight="${o.weight}"` : ''}${o.halo ? ` stroke="${o.halo}" stroke-width="3" paint-order="stroke"` : ''}>${esc(s)}</text>`;
  const wrap = (W, H, body, title, pad = [8, 8, 8, 8]) => `<svg viewBox="${-pad[3]} ${-pad[0]} ${W + pad[1] + pad[3]} ${H + pad[0] + pad[2]}" style="width:100%;height:auto;display:block;overflow:visible" role="img" aria-label="${esc(title || 'Chart')}">${body}</svg>`;
  const lin = (d0, d1, r0, r1) => v => r0 + (v - d0) / (d1 - d0 || 1) * (r1 - r0);
  const nice = (lo, hi, n = 4) => {
    const span = hi - lo || 1,
      step0 = span / n,
      mag = Math.pow(10, Math.floor(Math.log10(step0))),
      st = [1, 2, 2.5, 5, 10].map(m => m * mag).find(s => s >= step0);
    const a = Math.floor(lo / st) * st,
      b = Math.ceil(hi / st) * st,
      ticks = [];
    for (let v = a; v <= b + st / 2; v += st) ticks.push(+v.toFixed(10));
    return {
      lo: a,
      hi: b,
      ticks
    };
  };
  const yAxis = (W, y, ticks, fmt, x0 = 0) => ticks.map(v => `<line x1="${x0}" y1="${y(v)}" x2="${W}" y2="${y(v)}" stroke="${C.grid}" stroke-width="1"></line>${t(x0 - 6, y(v) + 3.5, fmt(v), {
    anchor: 'end',
    size: 9,
    fill: C.faint
  })}`).join('');
  const legend = (items, x, y, gap = 16) => {
    let cx = x;
    return items.map(([lbl, col, dash]) => {
      const s = `${dash ? `<line x1="${cx}" y1="${y - 3}" x2="${cx + 14}" y2="${y - 3}" stroke="${col}" stroke-width="2" stroke-dasharray="${dash}"></line>` : `<rect x="${cx}" y="${y - 8}" width="10" height="10" rx="2" fill="${col}"></rect>`}${t(cx + (dash ? 18 : 14), y, lbl, {
        size: 9.5
      })}`;
      cx += (dash ? 18 : 14) + lbl.length * 5.3 + gap;
      return s;
    }).join('');
  };
  const R = {};

  // 1. Monte Carlo fan: years[], bands: [{p10,p25,p50,p75,p90}] per year, goal?
  R.fan = s => {
    const W = s.width || 640,
      H = s.height || 280,
      L = 52,
      B = 26,
      T = 22,
      fmt = s.format || money;
    const yrs = s.years,
      b = s.bands,
      all = b.flatMap(x => [x.p10, x.p90]).concat(s.goal ? [s.goal] : []);
    const ny = nice(0, Math.max(...all));
    const x = lin(yrs[0], yrs[yrs.length - 1], L, W),
      y = lin(ny.lo, ny.hi, H - B, T);
    const band = (a, c, col, op) => `<path d="${yrs.map((yr, i) => `${i ? 'L' : 'M'}${x(yr)},${y(b[i][a])}`).join('')}${yrs.slice().reverse().map((yr, i) => `L${x(yr)},${y(b[yrs.length - 1 - i][c])}`).join('')}Z" fill="${col}" opacity="${op}"></path>`;
    const med = yrs.map((yr, i) => `${i ? 'L' : 'M'}${x(yr)},${y(b[i].p50)}`).join('');
    const every = Math.ceil(yrs.length / 8);
    return wrap(W, H, yAxis(W, y, ny.ticks, fmt, L) + band('p10', 'p90', C.sky2, .55) + band('p25', 'p75', C.sky, .55) + `<path d="${med}" fill="none" stroke="${C.navy}" stroke-width="2"></path>` + (s.goal ? `<line x1="${L}" y1="${y(s.goal)}" x2="${W}" y2="${y(s.goal)}" stroke="${C.bronze}" stroke-width="1.5" stroke-dasharray="5 4"></line>${t(W, y(s.goal) - 5, s.goalLabel || 'Goal ' + fmt(s.goal), {
      anchor: 'end',
      size: 9.5,
      fill: C.bronze
    })}` : '') + yrs.map((yr, i) => i % every === 0 || i === yrs.length - 1 ? t(x(yr), H - B + 15, yr, {
      anchor: 'middle',
      size: 9,
      fill: C.faint
    }) : '').join('') + `${t(x(yrs[yrs.length - 1]) - 4, y(b[b.length - 1].p50) - 6, 'Median ' + fmt(b[b.length - 1].p50), {
      anchor: 'end',
      size: 9.5,
      fill: C.ink,
      halo: C.canvas
    })}` + legend([['10th–90th percentile', C.sky2], ['25th–75th', C.sky], ['Median', C.navy, '0']], L, 8), s.title);
  };

  // 2. Waterfall: start {label,value}, steps [{label,value}], end label
  R.waterfall = s => {
    const W = s.width || 640,
      H = s.height || 260,
      L = 52,
      B = 34,
      T = 16,
      fmt = s.format || money;
    const cols = [{
      label: s.start.label,
      v: s.start.value,
      base: 0,
      kind: 'total'
    }];
    let run = s.start.value;
    s.steps.forEach(st => {
      cols.push({
        label: st.label,
        v: st.value,
        base: run,
        kind: st.value >= 0 ? 'up' : 'down'
      });
      run += st.value;
    });
    cols.push({
      label: s.endLabel || 'Ending value',
      v: run,
      base: 0,
      kind: 'total'
    });
    const tops = cols.map(c => c.kind === 'total' ? c.v : Math.max(c.base, c.base + c.v)),
      bots = cols.map(c => c.kind === 'total' ? 0 : Math.min(c.base, c.base + c.v));
    const lo = s.zeroBase === false ? Math.min(...bots.filter((_, i) => cols[i].kind !== 'total'), ...tops) * .92 : 0;
    const ny = nice(lo, Math.max(...tops));
    const y = lin(ny.lo, ny.hi, H - B, T),
      bw = (W - L) / cols.length;
    let out = yAxis(W, y, ny.ticks, fmt, L);
    cols.forEach((c, i) => {
      const x0 = L + i * bw + bw * .18,
        w = bw * .64,
        top = c.kind === 'total' ? c.v : Math.max(c.base, c.base + c.v),
        bot = c.kind === 'total' ? ny.lo : Math.min(c.base, c.base + c.v);
      const col = c.kind === 'total' ? C.navy : c.kind === 'up' ? C.aqua : C.redL;
      out += `<rect x="${x0}" y="${y(top)}" width="${w}" height="${Math.max(1, y(bot) - y(top))}" rx="2" fill="${col}"></rect>`;
      if (i < cols.length - 1) {
        const nv = c.kind === 'total' ? c.v : c.base + c.v;
        out += `<line x1="${x0 + w}" y1="${y(nv)}" x2="${x0 + bw}" y2="${y(nv)}" stroke="${C.faint}" stroke-width="1" stroke-dasharray="2 2"></line>`;
      }
      out += t(x0 + w / 2, y(top) - 5, c.kind === 'total' ? fmt(c.v) : (c.v >= 0 ? '+' : '') + fmt(c.v), {
        anchor: 'middle',
        size: 9.5,
        fill: c.kind === 'down' ? C.redD : C.ink,
        weight: c.kind === 'total' ? 600 : null
      });
      out += t(x0 + w / 2, H - B + 14, c.label, {
        anchor: 'middle',
        size: 9,
        fill: C.muted
      });
    });
    return wrap(W, H, out, s.title);
  };

  // 3. Allocation: classes [{label, current, target, min?, max?}] (percent)
  R.allocation = s => {
    const W = s.width || 640,
      rowH = 30,
      H = s.classes.length * rowH + 44,
      L = 110,
      Rr = 60;
    const x = lin(0, s.max || Math.max(60, ...s.classes.map(c => Math.max(c.current, c.max || c.target))), L, W - Rr);
    let out = [0, 20, 40, 60].filter(v => v <= (s.max || 60)).map(v => `<line x1="${x(v)}" y1="18" x2="${x(v)}" y2="${H - 26}" stroke="${C.grid}"></line>${t(x(v), H - 12, v + '%', {
      anchor: 'middle',
      size: 9,
      fill: C.faint
    })}`).join('');
    s.classes.forEach((c, i) => {
      const cy = 30 + i * rowH,
        off = c.current - c.target,
        out_ = c.min != null && (c.current < c.min || c.current > c.max);
      out += t(L - 10, cy + 4, c.label, {
        anchor: 'end',
        size: 10.5,
        fill: C.ink
      });
      if (c.min != null) out += `<rect x="${x(c.min)}" y="${cy - 9}" width="${x(c.max) - x(c.min)}" height="18" rx="3" fill="${C.sky3}" opacity=".7"></rect>`;
      out += `<rect x="${L}" y="${cy - 5}" width="${x(c.current) - L}" height="10" rx="3" fill="${out_ ? C.red : c.color || PAL[i % PAL.length]}"></rect>`;
      out += `<line x1="${x(c.target)}" y1="${cy - 11}" x2="${x(c.target)}" y2="${cy + 11}" stroke="${C.bronze}" stroke-width="2"></line>`;
      out += t(W - Rr + 8, cy + 4, c.current + '%', {
        size: 10.5,
        fill: C.ink,
        weight: 600
      }) + t(W, cy + 4, (off > 0 ? '+' : off < 0 ? '–' : '±') + Math.abs(off) + ' pts', {
        anchor: 'end',
        size: 9,
        fill: out_ ? C.redD : C.faint
      });
    });
    out += legend([['Current', C.granite], ['Approved range', C.sky3], ['Target', C.bronze]], L, 6);
    return wrap(W, H, out, s.title);
  };

  // 4. Cash-flow timeline: years[], inflows [{label, values[]}], outflows [{label, values[]}], net? (line)
  R.cashflow = s => {
    const W = s.width || 640,
      H = s.height || 280,
      L = 52,
      B = 26,
      T = 24,
      fmt = s.format || money,
      n = s.years.length;
    const up = s.years.map((_, i) => s.inflows.reduce((a, f) => a + f.values[i], 0)),
      dn = s.years.map((_, i) => s.outflows.reduce((a, f) => a + f.values[i], 0));
    const ny = nice(-Math.max(...dn), Math.max(...up));
    const y = lin(ny.lo, ny.hi, H - B, T),
      bw = (W - L) / n,
      w = bw * .7;
    let out = yAxis(W, y, ny.ticks, fmt, L) + `<line x1="${L}" y1="${y(0)}" x2="${W}" y2="${y(0)}" stroke="${C.ink}" stroke-width="1"></line>`;
    const inC = [C.navy, C.granite, C.sky, C.aqua, C.sky2],
      outC = [C.clay, C.redL, C.bronzeL, C.clayL];
    s.years.forEach((yr, i) => {
      const x0 = L + i * bw + (bw - w) / 2;
      let acc = 0;
      s.inflows.forEach((f, k) => {
        const v = f.values[i];
        out += `<rect x="${x0}" y="${y(acc + v)}" width="${w}" height="${y(acc) - y(acc + v)}" fill="${inC[k % inC.length]}"></rect>`;
        acc += v;
      });
      acc = 0;
      s.outflows.forEach((f, k) => {
        const v = f.values[i];
        out += `<rect x="${x0}" y="${y(-acc)}" width="${w}" height="${y(-acc - v) - y(-acc)}" fill="${outC[k % outC.length]}"></rect>`;
        acc += v;
      });
      if (i % Math.ceil(n / 10) === 0 || i === n - 1) out += t(x0 + w / 2, H - B + 15, yr, {
        anchor: 'middle',
        size: 9,
        fill: C.faint
      });
    });
    if (s.net !== false) out += `<path d="${s.years.map((_, i) => `${i ? 'L' : 'M'}${L + i * bw + bw / 2},${y(up[i] - dn[i])}`).join('')}" fill="none" stroke="${C.bronze}" stroke-width="1.6"></path>`;
    out += legend([...s.inflows.map((f, k) => [f.label, inC[k % inC.length]]), ...s.outflows.map((f, k) => [f.label, outC[k % outC.length]]), ...(s.net !== false ? [['Net', C.bronze, '0']] : [])], L, 8, 12);
    return wrap(W, H, out, s.title);
  };

  // 5. Growth of $X: labels[] (x), series [{label, values[], color?, dash?}], start
  R.growth = s => {
    const W = s.width || 640,
      H = s.height || 260,
      L = 52,
      B = 26,
      T = 24,
      Rr = 86,
      fmt = s.format || money,
      n = s.labels.length;
    const all = s.series.flatMap(x => x.values);
    const ny = nice(Math.min(...all) * .95, Math.max(...all));
    const x = lin(0, n - 1, L, W - Rr),
      y = lin(ny.lo, ny.hi, H - B, T);
    const cols = [C.navy, C.aqua, C.clay, C.sky];
    let out = yAxis(W - Rr, y, ny.ticks, fmt, L);
    let lastY = [];
    s.series.forEach((sr, k) => {
      const col = sr.color || cols[k % cols.length];
      out += `<path d="${sr.values.map((v, i) => `${i ? 'L' : 'M'}${x(i)},${y(v)}`).join('')}" fill="none" stroke="${col}" stroke-width="${k ? 1.5 : 2.2}"${sr.dash ? ` stroke-dasharray="${sr.dash}"` : ''}></path>`;
      lastY.push({
        y: y(sr.values[n - 1]),
        v: sr.values[n - 1],
        l: sr.label,
        col
      });
    });
    lastY.sort((a, b) => a.y - b.y);
    lastY.forEach((o, i) => {
      if (i && o.y - lastY[i - 1].y < 22) o.y = lastY[i - 1].y + 22;
    });
    lastY.forEach(o => {
      out += t(W - Rr + 8, o.y, fmt(o.v), {
        size: 10.5,
        fill: C.ink,
        weight: 600,
        serif: true
      }) + t(W - Rr + 8, o.y + 11, o.l, {
        size: 8.5,
        fill: o.col
      });
    });
    out += s.labels.map((l, i) => i % Math.ceil(n / 8) === 0 || i === n - 1 ? t(x(i), H - B + 15, l, {
      anchor: 'middle',
      size: 9,
      fill: C.faint
    }) : '').join('');
    return wrap(W, H, out, s.title);
  };

  // 6. Tax bracket fill: brackets [{rate, upTo}], income layers [{label, amount}], marker? {label, at}
  R.brackets = s => {
    const W = s.width || 640,
      H = s.height || 250,
      L = 10,
      fmt = s.format || money,
      top = s.brackets[s.brackets.length - 1].upTo;
    const x = lin(0, top, L, W - 10),
      barY = 70,
      barH = 52;
    let out = '',
      prev = 0;
    s.brackets.forEach((b, i) => {
      out += `<rect x="${x(prev)}" y="${barY - 26}" width="${x(b.upTo) - x(prev)}" height="${barH + 52}" fill="${i % 2 ? '#FFFFFF' : C.grid}"></rect>` + t((x(prev) + x(b.upTo)) / 2, barY - 12, b.rate + '%', {
        anchor: 'middle',
        size: 12,
        fill: C.ink,
        serif: true
      }) + t(x(b.upTo), barY + barH + 20, fmt(b.upTo), {
        anchor: 'middle',
        size: 8.5,
        fill: C.faint
      });
      prev = b.upTo;
    });
    let acc = 0;
    const lc = [C.navy, C.granite, C.sky, C.aqua];
    s.income.forEach((l, k) => {
      out += `<rect x="${x(acc)}" y="${barY}" width="${x(acc + l.amount) - x(acc)}" height="${barH}" fill="${l.color || lc[k % lc.length]}"></rect>`;
      acc += l.amount;
    });
    if (s.room) out += `<rect x="${x(acc)}" y="${barY}" width="${x(s.room.to) - x(acc)}" height="${barH}" fill="none" stroke="${C.bronze}" stroke-width="1.6" stroke-dasharray="5 3"></rect>${t((x(acc) + x(s.room.to)) / 2, barY + barH / 2 + 4, s.room.label || 'Room ' + fmt(s.room.to - acc), {
      anchor: 'middle',
      size: 10,
      fill: C.bronze,
      weight: 600
    })}`;
    out += `<line x1="${x(acc)}" y1="${barY - 30}" x2="${x(acc)}" y2="${barY + barH + 8}" stroke="${C.redD}" stroke-width="1.5"></line>${t(x(acc), barY - 34, 'Taxable income ' + fmt(acc), {
      anchor: 'middle',
      size: 9.5,
      fill: C.redD,
      halo: '#FFFFFF'
    })}`;
    out += legend(s.income.map((l, k) => [l.label, l.color || lc[k % lc.length]]), L, H - 6);
    return wrap(W, H, out, s.title, [30, 8, 8, 8]);
  };

  // 7. Periodic table of returns: years[], classes [{key,label,color}], returns {key: [..per year]}
  R.periodic = s => {
    const W = s.width || 640,
      n = s.years.length,
      m = s.classes.length,
      cw = W / n,
      ch = s.cellHeight || 34,
      H = m * ch + 22;
    let out = s.years.map((yr, i) => t(i * cw + cw / 2, 10, yr, {
      anchor: 'middle',
      size: 9.5,
      fill: C.ink,
      weight: 600
    })).join('');
    s.years.forEach((yr, i) => {
      const ranked = s.classes.map(c => ({
        c,
        v: s.returns[c.key][i]
      })).sort((a, b) => b.v - a.v);
      ranked.forEach((r, j) => {
        const x0 = i * cw + 1.5,
          y0 = 18 + j * ch + 1.5,
          dark = [C.navy, C.granite, C.steel, C.aquaD, C.bronze, C.clay].includes(r.c.color);
        out += `<rect x="${x0}" y="${y0}" width="${cw - 3}" height="${ch - 3}" rx="3" fill="${r.c.color}"></rect>` + t(x0 + (cw - 3) / 2, y0 + ch / 2 - 3, r.c.short || r.c.label, {
          anchor: 'middle',
          size: 8,
          fill: dark ? '#F8F4F0' : C.ink
        }) + t(x0 + (cw - 3) / 2, y0 + ch / 2 + 8, pct(r.v), {
          anchor: 'middle',
          size: 9,
          fill: dark ? '#F8F4F0' : C.ink,
          weight: 600
        });
      });
    });
    return wrap(W, H, out, s.title, [4, 4, 4, 4]);
  };

  // 8. Drawdown / underwater: labels[], values[] (index levels)
  R.drawdown = s => {
    const W = s.width || 640,
      H = s.height || 200,
      L = 44,
      B = 24,
      T = 14,
      n = s.values.length;
    let peak = -Infinity;
    const dd = s.values.map(v => {
      peak = Math.max(peak, v);
      return (v / peak - 1) * 100;
    });
    const lo = Math.min(...dd),
      ny = nice(lo, 0);
    const x = lin(0, n - 1, L, W),
      y = lin(ny.lo, 0, H - B, T);
    let out = yAxis(W, y, ny.ticks, v => v.toFixed(0) + '%', L);
    out += `<path d="M${x(0)},${y(0)}${dd.map((v, i) => `L${x(i)},${y(v)}`).join('')}L${x(n - 1)},${y(0)}Z" fill="${C.redL}" opacity=".45"></path><path d="${dd.map((v, i) => `${i ? 'L' : 'M'}${x(i)},${y(v)}`).join('')}" fill="none" stroke="${C.red}" stroke-width="1.4"></path>`;
    const mi = dd.indexOf(lo);
    out += `<circle cx="${x(mi)}" cy="${y(lo)}" r="3" fill="${C.redD}"></circle>${t(x(mi) + 6, y(lo) + 4, 'Max drawdown ' + lo.toFixed(1) + '%', {
      size: 9.5,
      fill: C.redD,
      halo: C.canvas
    })}`;
    out += s.labels.map((l, i) => i % Math.ceil(n / 8) === 0 ? t(x(i), H - B + 15, l, {
      anchor: 'middle',
      size: 9,
      fill: C.faint
    }) : '').join('');
    return wrap(W, H, out, s.title);
  };

  // 9. Treemap: items [{label, value, color?}] (squarified)
  R.treemap = s => {
    const W = s.width || 640,
      H = s.height || 300,
      fmt = s.format || money,
      tot = s.items.reduce((a, b) => a + b.value, 0);
    const items = s.items.map((d, i) => ({
        ...d,
        col: d.color || PAL[i % PAL.length]
      })).sort((a, b) => b.value - a.value),
      rects = [];
    const worst = (row, w) => {
      const s2 = row.reduce((a, r) => a + r.a, 0),
        mx = Math.max(...row.map(r => r.a)),
        mn = Math.min(...row.map(r => r.a));
      return Math.max(w * w * mx / (s2 * s2), s2 * s2 / (w * w * mn));
    };
    let box = {
        x: 0,
        y: 0,
        w: W,
        h: H
      },
      list = items.map(d => ({
        d,
        a: d.value / tot * W * H
      }));
    while (list.length) {
      const w = Math.min(box.w, box.h);
      let row = [list[0]],
        i = 1;
      while (i < list.length && worst(row.concat(list[i]), w) <= worst(row, w)) row.push(list[i++]);
      list = list.slice(i);
      const s2 = row.reduce((a, r) => a + r.a, 0);
      if (box.w >= box.h) {
        const cw = s2 / box.h;
        let yy = box.y;
        row.forEach(r => {
          const hh = r.a / cw;
          rects.push({
            ...r,
            x: box.x,
            y: yy,
            w: cw,
            h: hh
          });
          yy += hh;
        });
        box = {
          x: box.x + cw,
          y: box.y,
          w: box.w - cw,
          h: box.h
        };
      } else {
        const rh = s2 / box.w;
        let xx = box.x;
        row.forEach(r => {
          const ww = r.a / rh;
          rects.push({
            ...r,
            x: xx,
            y: box.y,
            w: ww,
            h: rh
          });
          xx += ww;
        });
        box = {
          x: box.x,
          y: box.y + rh,
          w: box.w,
          h: box.h - rh
        };
      }
    }
    const out = rects.map(r => {
      const dark = [C.navy, C.granite, C.steel, C.bronze, C.clay, C.aquaD].includes(r.d.col),
        fc = dark ? '#F8F4F0' : C.ink,
        big = r.w > 70 && r.h > 34;
      return `<rect x="${r.x + 1.5}" y="${r.y + 1.5}" width="${Math.max(0, r.w - 3)}" height="${Math.max(0, r.h - 3)}" rx="4" fill="${r.d.col}"></rect>` + (big ? t(r.x + 9, r.y + 18, r.d.label, {
        size: 10,
        fill: fc
      }) + t(r.x + 9, r.y + 32, fmt(r.d.value) + ' · ' + (r.d.value / tot * 100).toFixed(0) + '%', {
        size: 9,
        fill: fc
      }) : r.w > 34 && r.h > 18 ? t(r.x + 6, r.y + 14, (r.d.value / tot * 100).toFixed(0) + '%', {
        size: 8.5,
        fill: fc
      }) : '');
    }).join('');
    return wrap(W, H, out, s.title, [2, 2, 2, 2]);
  };

  // 10. Bullet charts: rows [{label, value, target, ranges:[poor, ok, good], unit?}]
  R.bullet = s => {
    const W = s.width || 640,
      rowH = 40,
      H = s.rows.length * rowH,
      L = 150,
      Rr = 56;
    let out = '';
    s.rows.forEach((r, i) => {
      const cy = i * rowH + 18,
        mx = r.max || r.ranges[r.ranges.length - 1],
        x = lin(0, mx, L, W - Rr),
        fmt = r.format || (v => v + (r.unit || ''));
      out += t(L - 12, cy + 1, r.label, {
        anchor: 'end',
        size: 10.5,
        fill: C.ink
      }) + (r.sub ? t(L - 12, cy + 13, r.sub, {
        anchor: 'end',
        size: 8.5,
        fill: C.faint
      }) : '');
      let p = 0;
      [C.clayL, C.sky3, C.grid].forEach((col, k) => {
        const v = r.ranges[k];
        if (v == null) return;
        out += `<rect x="${x(p)}" y="${cy - 10}" width="${x(v) - x(p)}" height="20" fill="${[C.clayL, '#EAE5DE', '#F2EEE8'][k]}"></rect>`;
        p = v;
      });
      out += `<rect x="${L}" y="${cy - 4}" width="${x(r.value) - L}" height="8" rx="2" fill="${C.navy}"></rect><line x1="${x(r.target)}" y1="${cy - 12}" x2="${x(r.target)}" y2="${cy + 12}" stroke="${C.bronze}" stroke-width="2.5"></line>`;
      out += t(W - Rr + 10, cy + 4, fmt(r.value), {
        size: 11,
        fill: C.ink,
        weight: 600,
        serif: true
      });
    });
    return wrap(W, H, out, s.title, [4, 8, 4, 8]);
  };

  // 11. Heat map: rows[], cols[], values[r][c], min, max, format, diverging?
  R.heatmap = s => {
    const W = s.width || 640,
      L = s.labelWidth || 110,
      T = 22,
      nr = s.rows.length,
      nc = s.cols.length,
      cw = (W - L) / nc,
      ch = s.cellHeight || 26,
      H = T + nr * ch;
    const vals = s.values.flat(),
      lo = s.min ?? Math.min(...vals),
      hi = s.max ?? Math.max(...vals),
      fmt = s.format || (v => v.toFixed(2));
    const mix = (a, b, f) => {
      const p = h => [1, 3, 5].map(i => parseInt(h.substr(i, 2), 16));
      const A = p(a),
        Bb = p(b);
      return '#' + A.map((v, i) => Math.round(v + (Bb[i] - v) * f).toString(16).padStart(2, '0')).join('');
    };
    const DIV = ['#CE3657', '#DE788E', '#EFBDC8', '#E6E3DB', '#BFEBF1', '#7FD6E2', '#3CC1D3'];
    const col = v => {
      if (!s.diverging) return mix('#F2F6FC', C.navy, (v - lo) / (hi - lo || 1));
      const m = Math.max(Math.abs(lo), Math.abs(hi)) || 1,
        p = Math.max(-1, Math.min(1, v / m)) * 3 + 3,
        i = Math.min(5, Math.floor(p));
      return mix(DIV[i], DIV[i + 1], p - i);
    };
    let out = s.cols.map((c, j) => t(L + j * cw + cw / 2, 12, c, {
      anchor: 'middle',
      size: 9,
      fill: C.muted
    })).join('');
    s.rows.forEach((r, i) => {
      out += t(L - 8, T + i * ch + ch / 2 + 3.5, r, {
        anchor: 'end',
        size: 9.5,
        fill: C.ink
      });
      s.cols.forEach((_, j) => {
        const v = s.values[i][j],
          bg = col(v),
          dark = s.diverging ? v / (Math.max(Math.abs(lo), Math.abs(hi)) || 1) <= -0.8 : parseInt(bg.substr(1, 2), 16) < 140;
        out += `<rect x="${L + j * cw + 1}" y="${T + i * ch + 1}" width="${cw - 2}" height="${ch - 2}" rx="3" fill="${bg}"></rect>` + t(L + j * cw + cw / 2, T + i * ch + ch / 2 + 3.5, fmt(v), {
          anchor: 'middle',
          size: 9,
          fill: dark ? '#F8F4F0' : C.ink
        });
      });
    });
    return wrap(W, H, out, s.title, [4, 4, 4, 4]);
  };

  // 12. Timeline / Gantt: start, end (Date strings), lanes [{label, items:[{label, from, to?, kind}]}]
  R.timeline = s => {
    const W = s.width || 640,
      L = 120,
      T = 26,
      laneH = 30,
      H = T + s.lanes.length * laneH + 6,
      P = v => new Date(String(v).length <= 10 ? v + 'T12:00:00' : v),
      d = v => P(v).getTime();
    const x = lin(d(s.start), d(s.end), L, W - 8),
      kc = {
        tax: C.red,
        estate: C.granite,
        invest: C.navy,
        insurance: C.aqua,
        giving: C.bronze,
        other: C.clay
      };
    let out = '';
    const s0 = P(s.start);
    for (let m = new Date(s0.getFullYear(), s0.getMonth(), 1); m <= P(s.end); m.setMonth(m.getMonth() + (s.step || 1))) {
      const xx = x(m.getTime());
      out += `<line x1="${xx}" y1="${T - 6}" x2="${xx}" y2="${H}" stroke="${C.grid}"></line>${t(xx + 3, 12, m.toLocaleString('en-US', {
        month: 'short'
      }) + (m.getMonth() === 0 ? ' ' + m.getFullYear() : ''), {
        size: 9,
        fill: C.faint
      })}`;
    }
    if (s.today) out += `<line x1="${x(d(s.today))}" y1="${T - 10}" x2="${x(d(s.today))}" y2="${H}" stroke="${C.bronze}" stroke-width="1.5" stroke-dasharray="3 3"></line>`;
    s.lanes.forEach((ln, i) => {
      const cy = T + i * laneH + laneH / 2;
      out += t(L - 10, cy + 4, ln.label, {
        anchor: 'end',
        size: 10,
        fill: C.ink
      });
      ln.items.forEach(it => {
        const col = kc[it.kind] || C.navy;
        if (it.to) {
          const x0 = x(d(it.from)),
            x1 = x(d(it.to));
          out += `<rect x="${x0}" y="${cy - 8}" width="${Math.max(4, x1 - x0)}" height="16" rx="8" fill="${col}" opacity=".9"></rect>` + (x1 - x0 > 60 ? t(x0 + 8, cy + 3.5, it.label, {
            size: 8.5,
            fill: '#F8F4F0'
          }) : t(x1 + 5, cy + 3.5, it.label, {
            size: 8.5,
            fill: C.muted
          }));
        } else {
          const xx = x(d(it.from));
          out += `<path d="M${xx},${cy - 7}L${xx + 7},${cy}L${xx},${cy + 7}L${xx - 7},${cy}Z" fill="${col}"></path>` + t(xx + 10, cy + 3.5, it.label, {
            size: 8.5,
            fill: C.muted
          });
        }
      });
    });
    return wrap(W, H, out, s.title);
  };

  // 13. Risk vs return scatter: points [{label, risk, ret, highlight?}], frontier? [[risk, ret]...]
  R.scatter = s => {
    const W = s.width || 640,
      H = s.height || 280,
      L = 44,
      B = 32,
      T = 14,
      pts = s.points,
      rs = pts.map(p => p.risk).concat((s.frontier || []).map(f => f[0])),
      es = pts.map(p => p.ret).concat((s.frontier || []).map(f => f[1]));
    const nx = nice(0, Math.max(...rs) * 1.1),
      ny = nice(Math.min(0, ...es), Math.max(...es) * 1.1);
    const x = lin(nx.lo, nx.hi, L, W),
      y = lin(ny.lo, ny.hi, H - B, T);
    let out = yAxis(W, y, ny.ticks, v => v + '%', L) + nx.ticks.map(v => t(x(v), H - B + 15, v + '%', {
      anchor: 'middle',
      size: 9,
      fill: C.faint
    })).join('') + t((L + W) / 2, H - 4, s.xLabel || 'Risk (standard deviation)', {
      anchor: 'middle',
      size: 9,
      fill: C.muted
    }) + t(L, T - 4, s.yLabel || 'Expected return', {
      size: 9,
      fill: C.muted
    });
    if (s.frontier) out += `<path d="${s.frontier.map((f, i) => `${i ? 'L' : 'M'}${x(f[0])},${y(f[1])}`).join('')}" fill="none" stroke="${C.sky}" stroke-width="2"></path>`;
    pts.forEach(p => {
      out += `<circle cx="${x(p.risk)}" cy="${y(p.ret)}" r="${p.highlight ? 7 : 5}" fill="${p.highlight ? C.bronze : C.navy}" stroke="#FFFFFF" stroke-width="1.5"></circle>` + t(x(p.risk) + 9, y(p.ret) + 3.5, p.label, {
        size: 9.5,
        fill: p.highlight ? C.bronze : C.ink,
        weight: p.highlight ? 600 : null,
        halo: C.canvas
      });
    });
    return wrap(W, H, out, s.title);
  };

  // 14. Tornado: base (number), baseLabel, rows [{label, low, high}] (deltas vs base)
  R.tornado = s => {
    const W = s.width || 640,
      rowH = 30,
      H = s.rows.length * rowH + 30,
      L = 170,
      fmt = s.format || (v => (v > 0 ? '+' : '') + v);
    const unit = s.unit || '';
    if (!s.format && unit) s = {
      ...s,
      format: v => (v > 0 ? '+' : '') + v + unit
    };
    const rows = s.rows.slice().sort((a, b) => Math.abs(b.high - b.low) - Math.abs(a.high - a.low)),
      mx = Math.max(...rows.flatMap(r => [Math.abs(r.low), Math.abs(r.high)]));
    const x = lin(-mx, mx, L + 36, W - 40),
      z = x(0);
    let out = `<line x1="${z}" y1="10" x2="${z}" y2="${H - 14}" stroke="${C.ink}" stroke-width="1"></line>${t(z, H - 2, s.baseLabel || 'Base case', {
      anchor: 'middle',
      size: 9,
      fill: C.muted
    })}`;
    rows.forEach((r, i) => {
      const cy = 22 + i * rowH;
      out += t(L - 12, cy + 4, r.label, {
        anchor: 'end',
        size: 10,
        fill: C.ink
      });
      [[r.low, C.redL], [r.high, C.aqua]].forEach(([v, col]) => {
        const a = Math.min(z, x(v)),
          b = Math.max(z, x(v));
        out += `<rect x="${a}" y="${cy - 9}" width="${b - a}" height="18" rx="2" fill="${col}"></rect>` + t(v < 0 ? a - 5 : b + 5, cy + 4, fmt(v), {
          anchor: v < 0 ? 'end' : 'start',
          size: 9.5,
          fill: C.ink
        });
      });
    });
    return wrap(W, H, out, s.title);
  };

  // 15. Choropleth (tile grid map, no geodata): values {ST: number}, format, legend
  const US = 'AK,,,,,,,,,,,ME|,,,,,,,,,,VT,NH|WA,ID,MT,ND,MN,IL,WI,MI,NY,RI,MA,|OR,NV,WY,SD,IA,IN,OH,PA,NJ,CT,,|CA,UT,CO,NE,MO,KY,WV,VA,MD,DE,,|,AZ,NM,KS,AR,TN,NC,SC,DC,,,|,,,OK,LA,MS,AL,GA,,,,|HI,,,TX,,,,,FL,,,'.split('|').map(r => r.split(','));
  R.choropleth = s => {
    const W = s.width || 640,
      cols = 12,
      cell = W / cols,
      H = US.length * cell,
      v = s.values,
      vals = Object.values(v),
      lo = s.min ?? Math.min(...vals),
      hi = s.max ?? Math.max(...vals),
      fmt = s.format || (x => x);
    const mix = f => {
      const A = [0xF2, 0xF6, 0xFC],
        Bb = [0x31, 0x46, 0x5C];
      return '#' + A.map((a, i) => Math.round(a + (Bb[i] - a) * f).toString(16).padStart(2, '0')).join('');
    };
    let out = '';
    US.forEach((row, r) => row.forEach((st, c) => {
      if (!st) return;
      const has = v[st] != null,
        f = has ? (v[st] - lo) / (hi - lo || 1) : 0,
        bg = has ? mix(.08 + f * .92) : '#FFFFFF',
        dark = has && f > .45;
      out += `<rect x="${c * cell + 2}" y="${r * cell + 2}" width="${cell - 4}" height="${cell - 4}" rx="5" fill="${bg}" stroke="${has ? 'none' : C.rule}"></rect>` + t(c * cell + cell / 2, r * cell + cell / 2 - (has ? 1 : -3), st, {
        anchor: 'middle',
        size: 9,
        fill: dark ? '#F8F4F0' : C.muted,
        weight: 600
      }) + (has ? t(c * cell + cell / 2, r * cell + cell / 2 + 11, fmt(v[st]), {
        anchor: 'middle',
        size: 8,
        fill: dark ? '#F8F4F0' : C.muted
      }) : '');
    }));
    return wrap(W, H, out, s.title, [4, 4, 4, 4]);
  };
  const API = {
    render: R,
    colors: C,
    format: {
      money,
      pct
    }
  };
  Object.keys(R).forEach(k => {
    API[k] = (el, spec) => {
      el.innerHTML = R[k](spec);
      return el;
    };
  });
  window.FartherCharts = API;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/charts/farther-charts.js", error: String((e && e.message) || e) }); }

// assets/charts/sankey.js
try { (() => {
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
  const money = v => v >= 1e9 ? '$' + +(v / 1e9).toFixed(1) + 'B' : v >= 1e6 ? '$' + +(v / 1e6).toFixed(1) + 'M' : v >= 1e3 ? '$' + Math.round(v / 1e3) + 'K' : '$' + Math.round(v);
  function layout(spec) {
    const W = spec.width || 694,
      H = spec.height || 300,
      nw = spec.nodeWidth || 10,
      pad = spec.nodePad ?? 12;
    const labelW = spec.labelWidth ?? 150,
      leftW = spec.leftLabelWidth ?? 110;
    const nodes = spec.nodes.map((n, i) => ({
      ...n,
      i,
      in: [],
      out: [],
      color: n.color || PALETTE[i % PALETTE.length]
    }));
    const byId = Object.fromEntries(nodes.map(n => [n.id, n]));
    const links = spec.links.map(l => ({
      ...l,
      s: byId[l.source],
      t: byId[l.target]
    })).filter(l => l.s && l.t && l.value > 0);
    links.forEach(l => {
      l.s.out.push(l);
      l.t.in.push(l);
    });
    nodes.forEach(n => {
      n.value = Math.max(n.in.reduce((a, l) => a + l.value, 0), n.out.reduce((a, l) => a + l.value, 0));
    });
    // column = longest path from a source
    const depth = n => n._d ?? (n._d = n.in.length ? 1 + Math.max(...n.in.map(l => depth(l.s))) : 0);
    nodes.forEach(depth);
    const maxD = Math.max(...nodes.map(n => n._d));
    const cols = Array.from({
      length: maxD + 1
    }, (_, d) => nodes.filter(n => n._d === d));
    const x0 = leftW,
      x1 = W - labelW - nw;
    const k = Math.min(...cols.map(c => (H - pad * (c.length - 1)) / c.reduce((a, n) => a + n.value, 0)));
    cols.forEach((c, d) => {
      const total = c.reduce((a, n) => a + n.value * k, 0) + pad * (c.length - 1);
      let y = (H - total) / 2;
      c.forEach(n => {
        n.x = maxD ? x0 + (x1 - x0) * d / maxD : x0;
        n.y = y;
        n.h = Math.max(1, n.value * k);
        y += n.h + pad;
      });
    });
    // pull later columns toward their sources (keeps branches readable), then resolve overlaps
    for (let d = 1; d <= maxD; d++) {
      const c = cols[d];
      c.forEach(n => {
        const w = n.in.reduce((a, l) => a + l.value, 0);
        n._want = w ? n.in.reduce((a, l) => a + (l.s.y + l.s.h / 2) * l.value, 0) / w - n.h / 2 : n.y;
      });
      c.sort((a, b) => a._want - b._want || a.i - b.i);
      let y = -Infinity;
      c.forEach(n => {
        n.y = Math.max(n._want, y);
        y = n.y + n.h + pad;
      });
      const over = c.length ? c[c.length - 1].y + c[c.length - 1].h - H : 0;
      if (over > 0) {
        let yb = H;
        for (let j = c.length - 1; j >= 0; j--) {
          c[j].y = Math.min(c[j].y, yb - c[j].h);
          yb = c[j].y - pad;
        }
      }
      const under = c.length ? -c[0].y : 0;
      if (under > 0) c.forEach(n => {
        n.y += under;
      });
    }
    nodes.forEach(n => {
      let so = 0;
      n.out.sort((a, b) => a.t.y - b.t.y).forEach(l => {
        l.w = l.value * k;
        l.sy = n.y + so;
        so += l.w;
      });
      let to = 0;
      n.in.sort((a, b) => a.s.y - b.s.y).forEach(l => {
        l.ty = n.y + to;
        to += l.value * k;
      });
    });
    return {
      W,
      H,
      nw,
      nodes,
      links,
      maxD,
      cols
    };
  }
  function render(spec) {
    const {
      W,
      H,
      nw,
      nodes,
      links,
      maxD,
      cols
    } = layout(spec);
    const fmt = spec.format || money,
      op = spec.linkOpacity ?? 0.32,
      byT = (spec.linkColor || 'target') === 'target';
    const show = spec.showValues !== false;
    // label positions: centered on the node, nudged apart so two-line labels never collide
    const gap = show ? 25 : 14;
    cols.forEach(c => {
      const s = [...c].sort((a, b) => a.y - b.y);
      let prev = -Infinity;
      s.forEach(n => {
        n.ly = Math.max(n.y + n.h / 2, prev + gap);
        prev = n.ly;
      });
      const over = s.length ? s[s.length - 1].ly - (H + 6) : 0;
      if (over > 0) {
        let nxt = Infinity;
        for (let j = s.length - 1; j >= 0; j--) {
          s[j].ly = Math.min(s[j].ly - over, nxt - gap);
          nxt = s[j].ly;
        }
      }
    });
    const halo = spec.halo || '#F8F4F0'; // label halo = page background, keeps labels legible over bands
    const font = `font-family="'Fakt Pro','Fakt',system-ui,sans-serif" stroke="${halo}" stroke-width="3" stroke-linejoin="round" paint-order="stroke"`;
    const bottom = Math.max(H, ...nodes.map(n => n.ly + (show || n.sub ? 14 : 6)));
    const top = Math.min(0, ...nodes.map(n => n.ly - 12));
    let out = `<svg viewBox="0 ${top} ${W} ${bottom - top}" style="width:100%;height:auto;display:block;overflow:visible" role="img" aria-label="${esc(spec.title || 'Flow diagram')}">`;
    links.forEach(l => {
      const xa = l.s.x + nw,
        xb = l.t.x,
        xm = (xa + xb) / 2;
      const d = `M${xa},${l.sy}C${xm},${l.sy} ${xm},${l.ty} ${xb},${l.ty}L${xb},${l.ty + l.w}C${xm},${l.ty + l.w} ${xm},${l.sy + l.w} ${xa},${l.sy + l.w}Z`;
      out += `<path d="${d}" style="fill:${byT ? l.t.color : l.s.color};opacity:${op}"></path>`;
    });
    nodes.forEach(n => {
      out += `<rect x="${n.x}" y="${n.y}" width="${nw}" height="${n.h}" rx="2" style="fill:${n.color}"></rect>`;
      const left = n._d === 0 && maxD > 0,
        cy = n.ly;
      const tx = left ? n.x - 8 : n.x + nw + 8,
        anchor = left ? 'end' : 'start';
      const two = show || n.sub;
      const second = [show ? fmt(n.value) : null, n.sub || null].filter(Boolean).join(' · ');
      out += `<text x="${tx}" y="${two ? cy - 2 : cy + 4}" text-anchor="${anchor}" ${font} font-size="11" fill="#333333">${esc(n.label)}</text>`;
      if (two) out += `<text x="${tx}" y="${cy + 11}" text-anchor="${anchor}" ${font} font-size="9.5" fill="#5B6A71">${esc(second)}</text>`;
    });
    return out + '</svg>';
  }
  function mount(el, spec) {
    el.innerHTML = render(spec);
    return el;
  }
  window.FartherSankey = {
    render,
    mount,
    layout,
    format: {
      money
    }
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/charts/sankey.js", error: String((e && e.message) || e) }); }

// assets/compliance/disclosure.js
try { (() => {
/* Farther official client disclosure: single source of truth. Verbatim; do not edit without Compliance.
   <script src="assets/compliance/disclosure.js"></script>
   FartherDisclosure.mount(el, { variant: 'print' | 'slide' | 'dark', length: 'full' | 'condensed' })
   FartherDisclosure.heading, FartherDisclosure.paragraphs, FartherDisclosure.text (plain, \n\n-joined)
   Also auto-fills any element with data-farther-disclosure="print|slide|dark" (+ optional data-length="condensed") on load.
   full: multi-page reports and packages. condensed: one-pagers, fact sheets, slides, space-limited pieces. */
(function () {
  const heading = 'Important disclosures',
    headingCondensed = 'Important Disclosures';
  const condensed = ["This material is for informational and educational purposes only and is not investment, tax, or legal advice or a recommendation to buy or sell securities or pursue any strategy. Farther Finance Advisors, LLC (“Farther”) is an SEC-registered investment adviser; registration does not imply a particular level of skill or training.", "Examples and projections are hypothetical, illustrative only, and do not guarantee future results. Investing involves risk, including possible loss of principal. Tax and legal outcomes depend on individual circumstances and applicable law.", "Farther does not provide tax or legal advice or prepare tax returns. Consult qualified professionals before acting. For Farther’s Form ADV Part 2A Brochure and Form CRS, visit adviserinfo.sec.gov or contact Christopher Powers, Chief Compliance Officer, at 628-246-8004"];
  const paragraphs = ["This material is for informational and educational purposes only and does not constitute investment, tax, or legal advice, and is not a recommendation to buy or sell any security or pursue any strategy. Farther Finance Advisors, LLC (\"Farther\") is registered as an investment adviser with the U.S. Securities and Exchange Commission (SEC); such registration does not imply a certain level of skill or training. All examples, figures, and projections in this material are hypothetical and for illustrative purposes only; they are not a guarantee of future performance, and there is no assurance that any strategy will be profitable or achieve its objective. Investing involves risk, including the possible loss of principal. Tax and legal outcomes depend on each client's individual facts and circumstances and are subject to change based on changes in law.", "Farther provides investment advisory services on a wrap fee basis, generally charging a fee based on a percentage of assets under management (AUM). Because Farther's fee generally increases as the assets in a client's advisory account increase, Farther has an economic incentive to recommend that clients increase the assets it manages; this is a conflict of interest that clients should understand when evaluating any recommendation involving new deposits, consolidations, or rollovers.", "Farther does not provide tax or legal advice, does not prepare tax returns, and does not serve as a law firm or accounting firm. Consult your own qualified tax advisor and attorney before implementing any strategy described here. Additional information about Farther, including its Form ADV Part 2A Brochure and Form CRS, is available at www.adviserinfo.sec.gov or by contacting Farther's Chief Compliance Officer, Christopher Powers, at 628-246-8004."];
  const V = {
    print: {
      h: 'font-size:8px;letter-spacing:.16em;text-transform:uppercase;color:#9F8E75',
      p: 'font-size:6.4px;line-height:1.5;color:#5B6A71',
      gap: 8
    },
    slide: {
      h: 'font-size:24px;letter-spacing:.16em;text-transform:uppercase;color:#9F8E75',
      p: 'font-size:24px;line-height:1.45;color:#5B6A71',
      gap: 22
    },
    dark: {
      h: 'font-size:8px;letter-spacing:.16em;text-transform:uppercase;color:#B6D0ED',
      p: 'font-size:6.4px;line-height:1.5;color:#C9C9C9',
      gap: 8
    }
  };
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  function html(variant, len) {
    const v = V[variant] || V.print,
      cd = len === 'condensed',
      ps = cd ? condensed : paragraphs,
      hd = cd ? headingCondensed : heading;
    return '<div data-disclosure-rendered style="display:flex;flex-direction:column;gap:' + v.gap + 'px;font-family:\'Fakt Pro\',\'Fakt\',system-ui,sans-serif"><div style="' + v.h + '">' + hd + '</div>' + ps.map(p => '<p style="margin:0;' + v.p + ';text-wrap:pretty">' + esc(p) + '</p>').join('') + '</div>';
  }
  function mount(el, o) {
    el.innerHTML = html(o && o.variant || el.getAttribute('data-farther-disclosure') || 'print', o && o.length || el.getAttribute('data-length') || 'full');
    return el;
  }
  function scan() {
    document.querySelectorAll('[data-farther-disclosure]').forEach(el => {
      if (!el.querySelector('[data-disclosure-rendered]')) mount(el);
    });
  }
  window.FartherDisclosure = {
    heading,
    paragraphs,
    condensed,
    text: paragraphs.join('\n\n'),
    condensedText: condensed.join('\n\n'),
    html,
    mount,
    scan
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scan);else scan();
  new MutationObserver(scan).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/compliance/disclosure.js", error: String((e && e.message) || e) }); }

// assets/icons/farther-icons.js
try { (() => {
/* Farther diagram icons: 30 finance line icons (50x50, rounded, currentColor).
   Inline so they take the text color (an <img> of an SVG file cannot be recolored).

     <script src="assets/icons/farther-icons.js"></script>
     <span data-farther-icon="bank" style="color:#B68A4C;width:40px;height:40px"></span>   (auto-filled)
     FartherIcons.svg('tax', { size: 32, color: '#3B5A69' })                                  (markup string)
     FartherIcons.names

   Bronze #B68A4C in diagrams and callouts, Steel #3B5A69 in UI. 32px and up. */
(function () {
  var P = {
    "advisor": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><circle cx=\"18\" cy=\"19\" r=\"6\"></circle><path d=\"M7 41c0-7 5-12 11-12s11 5 11 12\"></path><path d=\"M30 9h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-6l-4 3v-3h-2a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z\"></path><path d=\"M34 15h6\"></path></g>",
    "allocation": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><circle cx=\"24\" cy=\"27\" r=\"14\"></circle><path d=\"M24 13v14h14\"></path><path d=\"M29 8a14 14 0 0 1 14 14H29z\"></path></g>",
    "bank": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><path d=\"M8 20L25 10l17 10\"></path><path d=\"M8 20h34\"></path><path d=\"M13 23v12\"></path><path d=\"M21 23v12\"></path><path d=\"M29 23v12\"></path><path d=\"M37 23v12\"></path><path d=\"M8 38h34\"></path><path d=\"M6 42h38\"></path></g>",
    "bonds": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><rect x=\"9\" y=\"10\" width=\"32\" height=\"24\" rx=\"2\"></rect><path d=\"M15 17h14\"></path><path d=\"M15 22h9\"></path><circle cx=\"33\" cy=\"30\" r=\"5\"></circle><path d=\"M30 34.2l-1.5 7.3 4.5-2.3 4.5 2.3-1.5-7.3\"></path></g>",
    "business": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><rect x=\"7\" y=\"16\" width=\"36\" height=\"24\" rx=\"3\"></rect><path d=\"M19 16v-3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3\"></path><path d=\"M7 27h15\"></path><path d=\"M28 27h15\"></path><rect x=\"22\" y=\"25\" width=\"6\" height=\"4\" rx=\"1\"></rect></g>",
    "calculator": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><rect x=\"12\" y=\"7\" width=\"26\" height=\"36\" rx=\"3\"></rect><rect x=\"16\" y=\"11\" width=\"18\" height=\"7\" rx=\"1\"></rect><circle cx=\"18\" cy=\"25\" r=\"1.2\"></circle><circle cx=\"18\" cy=\"31\" r=\"1.2\"></circle><circle cx=\"18\" cy=\"37\" r=\"1.2\"></circle><circle cx=\"25\" cy=\"25\" r=\"1.2\"></circle><circle cx=\"25\" cy=\"31\" r=\"1.2\"></circle><circle cx=\"25\" cy=\"37\" r=\"1.2\"></circle><circle cx=\"32\" cy=\"25\" r=\"1.2\"></circle><circle cx=\"32\" cy=\"31\" r=\"1.2\"></circle><circle cx=\"32\" cy=\"37\" r=\"1.2\"></circle></g>",
    "cash": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><rect x=\"6\" y=\"13\" width=\"38\" height=\"20\" rx=\"2\"></rect><circle cx=\"25\" cy=\"23\" r=\"5\"></circle><path d=\"M11 23h2\"></path><path d=\"M37 23h2\"></path><path d=\"M10 38h30\"></path></g>",
    "coin": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><circle cx=\"25\" cy=\"25\" r=\"15\"></circle><path d=\"M29 19.5c-.8-1.2-2.3-2-4-2-2.5 0-4 1.3-4 3.2 0 4.3 8 2.3 8 6.8 0 1.9-1.7 3.3-4 3.3-1.9 0-3.4-.8-4.2-2.1\"></path><path d=\"M25 15v2.5\"></path><path d=\"M25 30.8v3.2\"></path></g>",
    "contract": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><path d=\"M13 7h17l8 8v28H13z\"></path><path d=\"M30 7v8h8\"></path><path d=\"M18 20h9\"></path><path d=\"M18 25h15\"></path><path d=\"M18 36c2-3 3-3 4 0s2 3 4 0 3-2 4 1\"></path></g>",
    "debt": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><rect x=\"6\" y=\"11\" width=\"28\" height=\"18\" rx=\"2.5\"></rect><path d=\"M6 17h28\"></path><path d=\"M11 24h7\"></path><circle cx=\"38\" cy=\"37\" r=\"6\"></circle><path d=\"M35 37h6\"></path></g>",
    "dividends": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><ellipse cx=\"19\" cy=\"30\" rx=\"9\" ry=\"3\"></ellipse><path d=\"M10 30v8c0 1.66 4.03 3 9 3s9-1.34 9-3v-8\"></path><path d=\"M10 34c0 1.66 4.03 3 9 3s9-1.34 9-3\"></path><path d=\"M27 22l6-6 4 4 7-8\"></path><path d=\"M39 12h5v5\"></path></g>",
    "donation": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><path d=\"M25 24s-7-4.3-7-9.2a3.8 3.8 0 0 1 7-2.2 3.8 3.8 0 0 1 7 2.2c0 4.9-7 9.2-7 9.2z\"></path><path d=\"M9 29v15\"></path><path d=\"M9 31h5.5c1 0 2 .3 2.8.8L21 34h6a2 2 0 0 1 0 4h-7\"></path><path d=\"M9 42h8l3 1.5c.9.4 1.9.5 2.8.2L41 37.5a2 2 0 0 0-1.6-3.7L31 37\"></path></g>",
    "education": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><path d=\"M4 19l21-9 21 9-21 9z\"></path><path d=\"M13 23v9c0 3 5.5 6 12 6s12-3 12-6v-9\"></path><path d=\"M46 19v11\"></path></g>",
    "estate": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><path d=\"M25 9v32\"></path><path d=\"M17 41h16\"></path><path d=\"M10 15h30\"></path><path d=\"M10 15l-5 11a5 5 0 0 0 10 0z\"></path><path d=\"M40 15l-5 11a5 5 0 0 0 10 0z\"></path></g>",
    "family": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><circle cx=\"17\" cy=\"15\" r=\"5\"></circle><circle cx=\"33\" cy=\"15\" r=\"5\"></circle><circle cx=\"25\" cy=\"28\" r=\"3.5\"></circle><path d=\"M7 38c0-6 4.5-10.5 10-10.5 2 0 3.8.6 5.3 1.6\"></path><path d=\"M43 38c0-6-4.5-10.5-10-10.5-2 0-3.8.6-5.3 1.6\"></path><path d=\"M18 42c0-4 3-7 7-7s7 3 7 7\"></path></g>",
    "global": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><circle cx=\"25\" cy=\"25\" r=\"16\"></circle><path d=\"M9 25h32\"></path><ellipse cx=\"25\" cy=\"25\" rx=\"7\" ry=\"16\"></ellipse><path d=\"M11.5 17h27\"></path><path d=\"M11.5 33h27\"></path></g>",
    "goals": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><circle cx=\"23\" cy=\"27\" r=\"15\"></circle><circle cx=\"23\" cy=\"27\" r=\"9\"></circle><circle cx=\"23\" cy=\"27\" r=\"3\"></circle><path d=\"M23 27L40 10\"></path><path d=\"M36 8v6h6\"></path></g>",
    "growth": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><path d=\"M9 9v32h32\"></path><path d=\"M14 34l8-9 6 5 11-13\"></path><path d=\"M33 17h6v6\"></path></g>",
    "insurance": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><path d=\"M25 7l14 5v11c0 9-6 16-14 20-8-4-14-11-14-20V12z\"></path><path d=\"M19 25l4.5 4.5L32 21\"></path></g>",
    "investment": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><ellipse cx=\"25\" cy=\"38\" rx=\"10\" ry=\"3.5\"></ellipse><path d=\"M15 38v3c0 1.9 4.5 3.5 10 3.5s10-1.6 10-3.5v-3\"></path><path d=\"M25 34.5V21\"></path><path d=\"M25 27c-6 0-9-3.5-9-8 5 0 9 3 9 8z\"></path><path d=\"M25 23c0-5 3.5-8 9-8 0 5-3.5 8-9 8z\"></path></g>",
    "ledger": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><path d=\"M25 15c-4-3-9-4-16-3v24c7-1 12 0 16 3 4-3 9-4 16-3V12c-7-1-12 0-16 3z\"></path><path d=\"M25 15v24\"></path><path d=\"M13 19h7\"></path><path d=\"M13 24h7\"></path><path d=\"M13 29h7\"></path><path d=\"M30 19h7\"></path><path d=\"M30 24h7\"></path><path d=\"M30 29h5\"></path></g>",
    "performance": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><path d=\"M8 41h34\"></path><rect x=\"11\" y=\"28\" width=\"6\" height=\"13\" rx=\"1\"></rect><rect x=\"22\" y=\"20\" width=\"6\" height=\"21\" rx=\"1\"></rect><rect x=\"33\" y=\"11\" width=\"6\" height=\"30\" rx=\"1\"></rect></g>",
    "real-estate": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><path d=\"M8 24L25 10l17 14\"></path><path d=\"M12 21v20h26V21\"></path><path d=\"M21 41V30h8v11\"></path><path d=\"M33 14V9h4v8.3\"></path></g>",
    "retirement": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><path d=\"M6 35h38\"></path><path d=\"M13 35a12 12 0 0 1 24 0\"></path><path d=\"M25 13v4\"></path><path d=\"M10.5 21l2.8 2.8\"></path><path d=\"M39.5 21l-2.8 2.8\"></path><path d=\"M6 29h3\"></path><path d=\"M41 29h3\"></path><path d=\"M13 41h24\"></path></g>",
    "savings": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><path d=\"M36 21.5c2 1.5 3.5 3.6 4 6h3v6h-3.5c-1 2-2.6 3.6-4.5 4.6V43h-5v-3.2a16 16 0 0 1-6 0V43h-5v-4.9C14.6 36.2 12 32.9 12 29c0-6.6 6.3-12 14-12 3.7 0 7 1.2 9.5 3.2L39 17v4.5\"></path><path d=\"M22 22h7\"></path><circle cx=\"34\" cy=\"27\" r=\".8\"></circle><path d=\"M12 27c-2 0-3.5-1.3-3.5-3\"></path></g>",
    "security": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><rect x=\"12\" y=\"22\" width=\"26\" height=\"20\" rx=\"3\"></rect><path d=\"M17 22v-5a8 8 0 0 1 16 0v5\"></path><circle cx=\"25\" cy=\"31\" r=\"2.5\"></circle><path d=\"M25 33.5v3\"></path></g>",
    "tax": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><path d=\"M12 7h26v36l-4.3-2.8-4.3 2.8-4.4-2.8-4.3 2.8-4.4-2.8-4.3 2.8z\"></path><path d=\"M20 29l10-10\"></path><circle cx=\"20.5\" cy=\"19.5\" r=\"2\"></circle><circle cx=\"29.5\" cy=\"28.5\" r=\"2\"></circle><path d=\"M18 35h14\"></path></g>",
    "transfer": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><path d=\"M9 18h29\"></path><path d=\"M32 12l6 6-6 6\"></path><path d=\"M41 32H12\"></path><path d=\"M18 26l-6 6 6 6\"></path></g>",
    "trust": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><circle cx=\"16\" cy=\"25\" r=\"8\"></circle><circle cx=\"16\" cy=\"25\" r=\"2.5\"></circle><path d=\"M24 25h19\"></path><path d=\"M37 25v5\"></path><path d=\"M42 25v4\"></path></g>",
    "wallet": "<g transform=\"translate(25 25) scale(1.14) translate(-25 -25)\"><rect x=\"8\" y=\"15\" width=\"32\" height=\"24\" rx=\"3\"></rect><path d=\"M12 15l18-6 3 6\"></path><path d=\"M40 22h-8a4 4 0 0 0 0 8h8\"></path><circle cx=\"33\" cy=\"26\" r=\"1\"></circle></g>"
  };
  function svg(name, o) {
    o = o || {};
    var b = P[name];
    if (!b) return '';
    var sz = o.size || '100%',
      sw = o.stroke || (o.size && o.size < 32 ? 2.2 : 1.4);
    return '<svg viewBox="0 0 50 50" width="' + sz + '" height="' + sz + '" fill="none" stroke="' + (o.color || 'currentColor') + '" stroke-width="' + sw + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:block">' + b + '</svg>';
  }
  function fill(root) {
    (root || document).querySelectorAll('[data-farther-icon]').forEach(function (el) {
      if (el.firstChild) return;
      if (!el.style.display) el.style.display = 'inline-block';
      el.innerHTML = svg(el.getAttribute('data-farther-icon'), {
        stroke: el.getAttribute('data-stroke')
      });
    });
  }
  window.FartherIcons = {
    svg: svg,
    fill: fill,
    names: Object.keys(P)
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () {
    fill();
  });else fill();
  new MutationObserver(function () {
    fill();
  }).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/icons/farther-icons.js", error: String((e && e.message) || e) }); }

// assets/infographics/farther-infographics-examples.js
try { (() => {
// Sample specs for the Infographics cards; hypothetical data.
window.FARTHER_INFOGRAPHIC_EXAMPLES = {
  "steps": {
    "title": "Our planning process",
    "items": [{
      "label": "Discover",
      "desc": "Goals, family, values and what keeps you up at night.",
      "icon": "advisor"
    }, {
      "label": "Analyze",
      "desc": "Your full balance sheet, taxes, risk and estate.",
      "icon": "calculator"
    }, {
      "label": "Recommend",
      "desc": "A written plan with clear, prioritized actions.",
      "icon": "goals"
    }, {
      "label": "Implement",
      "desc": "We coordinate with your CPA and attorney.",
      "icon": "contract"
    }, {
      "label": "Review",
      "desc": "Quarterly check-ins and an annual deep dive.",
      "icon": "performance"
    }]
  },
  "stairs": {
    "title": "Building wealth in stages",
    "items": [{
      "label": "Emergency reserve",
      "value": "6 mo",
      "desc": "Cash for the unexpected"
    }, {
      "label": "Retirement accounts",
      "value": "Max",
      "desc": "401(k), IRA, HSA"
    }, {
      "label": "Taxable investing",
      "value": "15%",
      "desc": "Of income, diversified"
    }, {
      "label": "Legacy and giving",
      "value": "DAF",
      "desc": "Trusts, charitable vehicles"
    }]
  },
  "roadmap": {
    "title": "Your next 12 months",
    "items": [{
      "date": "Q4 2026",
      "label": "Harvest losses, Roth conversion",
      "desc": "Use this year’s low bracket before it closes.",
      "icon": "tax"
    }, {
      "date": "Q1 2027",
      "label": "Begin staged stock sale",
      "desc": "Tranche 1 of 4; fund the tax reserve.",
      "icon": "growth"
    }, {
      "date": "Q2 2027",
      "label": "Estate documents refresh",
      "desc": "Trust restatement with your attorney.",
      "icon": "estate"
    }, {
      "date": "Q3 2027",
      "label": "Education funding decision",
      "desc": "529 superfunding for both children.",
      "icon": "education"
    }]
  },
  "timeline": {
    "title": "Retirement milestones",
    "items": [{
      "date": "Age 55",
      "label": "Rule of 55",
      "desc": "Penalty-free 401(k) access"
    }, {
      "date": "Age 59½",
      "label": "IRA access",
      "desc": "No 10% penalty"
    }, {
      "date": "Age 62",
      "label": "Retire",
      "desc": "Planned date",
      "major": true
    }, {
      "date": "Age 65",
      "label": "Medicare",
      "desc": "Enroll by the deadline"
    }, {
      "date": "Age 70",
      "label": "Social Security",
      "desc": "Maximum benefit"
    }, {
      "date": "Age 75",
      "label": "RMDs begin",
      "desc": "SECURE 2.0"
    }]
  },
  "pyramid": {
    "title": "The wealth pyramid",
    "items": [{
      "label": "Legacy",
      "value": "Estate and giving",
      "desc": "Trusts, philanthropy, family governance"
    }, {
      "label": "Growth",
      "value": "Invest for the long term",
      "desc": "Diversified, tax-aware portfolio"
    }, {
      "label": "Protection",
      "value": "Insure what you can’t afford to lose",
      "desc": "Life, disability, umbrella, LTC"
    }, {
      "label": "Foundation",
      "value": "Cash flow and reserves",
      "desc": "Budget, emergency fund, debt plan"
    }]
  },
  "funnel": {
    "title": "From gross income to investable",
    "items": [{
      "label": "Gross income",
      "value": "$850K",
      "icon": "wallet"
    }, {
      "label": "After taxes",
      "value": "$578K",
      "desc": "Federal, state, payroll"
    }, {
      "label": "After living expenses",
      "value": "$248K",
      "desc": "Housing, family, lifestyle"
    }, {
      "label": "Investable savings",
      "value": "$208K",
      "icon": "growth"
    }]
  },
  "cycle": {
    "title": "The annual review cycle",
    "centerEyebrow": "Every year",
    "center": "Your plan, kept current",
    "items": [{
      "label": "Review goals",
      "icon": "goals"
    }, {
      "label": "Rebalance",
      "icon": "allocation"
    }, {
      "label": "Tax planning",
      "icon": "tax"
    }, {
      "label": "Estate check",
      "icon": "estate"
    }, {
      "label": "Insurance review",
      "icon": "insurance"
    }]
  },
  "compare": {
    "title": "Roth vs traditional",
    "options": [{
      "label": "Traditional",
      "desc": "Pay tax later",
      "icon": "tax"
    }, {
      "label": "Roth",
      "desc": "Pay tax now",
      "icon": "growth"
    }],
    "rows": [{
      "label": "Contributions",
      "a": "Pre-tax; lowers taxable income today",
      "b": "After-tax; no deduction today"
    }, {
      "label": "Growth",
      "a": "Tax-deferred",
      "b": "Tax-free"
    }, {
      "label": "Withdrawals",
      "a": "Taxed as ordinary income",
      "b": "Tax-free if qualified"
    }, {
      "label": "RMDs",
      "a": "Required from age 73–75",
      "b": "None for the original owner"
    }, {
      "label": "Best when",
      "a": "Your bracket is higher now than later",
      "b": "Your bracket is lower now than later"
    }]
  },
  "quadrant": {
    "title": "Risk tolerance vs risk capacity",
    "xLabel": "Risk capacity",
    "yLabel": "Risk tolerance",
    "items": [{
      "label": "Educate first",
      "desc": "Willing but unable: keep risk in line with capacity.",
      "icon": "education"
    }, {
      "label": "Growth-oriented",
      "desc": "Willing and able: long horizon, diversified growth.",
      "icon": "growth",
      "highlight": true
    }, {
      "label": "Preserve",
      "desc": "Neither: prioritize stability and income.",
      "icon": "security"
    }, {
      "label": "Build comfort",
      "desc": "Able but hesitant: step in gradually.",
      "icon": "advisor"
    }]
  },
  "tree": {
    "title": "Household map",
    "root": {
      "label": "Erik and Maya Hansen",
      "desc": "Joint decision-makers",
      "icon": "family",
      "children": [{
        "label": "Hansen Family Trust",
        "desc": "Revocable",
        "icon": "trust",
        "children": [{
          "label": "Residence"
        }, {
          "label": "Taxable portfolio"
        }]
      }, {
        "label": "Hansen Ventures LLC",
        "desc": "Operating business",
        "icon": "business",
        "children": [{
          "label": "Buy-sell agreement"
        }]
      }, {
        "label": "Donor-advised fund",
        "desc": "Philanthropy",
        "icon": "donation"
      }, {
        "label": "Children (2)",
        "desc": "529 plans, UTMA",
        "icon": "education",
        "children": [{
          "label": "529 plans"
        }, {
          "label": "Roth IRAs"
        }]
      }]
    }
  },
  "hub": {
    "title": "Your financial team",
    "center": "Your family",
    "centerIcon": "family",
    "items": [{
      "label": "Wealth advisor",
      "desc": "Leads the plan",
      "icon": "advisor"
    }, {
      "label": "CPA",
      "desc": "Tax filing",
      "icon": "tax"
    }, {
      "label": "Estate attorney",
      "desc": "Documents",
      "icon": "estate"
    }, {
      "label": "Insurance",
      "desc": "Protection",
      "icon": "insurance"
    }, {
      "label": "Banker",
      "desc": "Lending, cash",
      "icon": "bank"
    }, {
      "label": "Business manager",
      "desc": "Operations",
      "icon": "business"
    }]
  },
  "cards": {
    "title": "Six reasons to plan early",
    "numbered": true,
    "columns": 3,
    "items": [{
      "label": "Compounding needs time",
      "value": "2×",
      "desc": "Money at 7% doubles about every 10 years.",
      "icon": "growth"
    }, {
      "label": "Lower lifetime taxes",
      "desc": "Spread conversions and gains over low-bracket years.",
      "icon": "tax"
    }, {
      "label": "Flexibility",
      "desc": "More options when life changes.",
      "icon": "goals"
    }, {
      "label": "Protection in place",
      "desc": "Insurance is cheaper when you’re younger and healthier.",
      "icon": "security"
    }, {
      "label": "Peace of mind",
      "desc": "A plan you understand and trust.",
      "icon": "advisor",
      "highlight": true
    }, {
      "label": "Family readiness",
      "desc": "Heirs who know the plan.",
      "icon": "family"
    }]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/infographics/farther-infographics-examples.js", error: String((e && e.message) || e) }); }

// assets/infographics/farther-infographics.js
try { (() => {
/* Farther Infographics: 12 branded infographic layouts, native to this design system. No dependencies.
     <script src="assets/icons/farther-icons.js"></script>        (optional, enables icon: 'tax' etc.)
     <script src="assets/infographics/farther-infographics.js"></script>
     FartherInfographics.<type>(el, spec)    renders into el
     FartherInfographics.render.<type>(spec) returns HTML markup (inline styles, prints cleanly)
   Types: steps, stairs, roadmap, timeline, pyramid, funnel, cycle, compare, quadrant, tree, hub, cards.
   Common item fields: { label, desc?, value?, icon? (Farther icon name), date? }.
   Common options: dark (navy background), scale (type multiplier; use ~2.2 on 1920x1080 slides).
   Examples: assets/infographics/farther-infographics-examples.js, cards in the Infographics group. */
(function () {
  const C = {
    navy: '#31465C',
    steel: '#3B5A69',
    granite: '#567EA1',
    granite2: '#779AB9',
    sky: '#7DA8DD',
    sky2: '#B6D0ED',
    sky3: '#D0DBE7',
    mist: '#EAEEF4',
    aqua: '#3CC1D3',
    bronze: '#B68A4C',
    bronzeL: '#F4ECDD',
    clay: '#9F8E75',
    rule: '#E3D3C5',
    ink: '#333333',
    muted: '#5B6A71',
    cream: '#F8F4F0',
    white: '#FFFFFF'
  };
  const SEQ = [C.navy, C.steel, C.granite, C.granite2, C.sky, C.sky2, C.sky3];
  const SANS = "'Fakt Pro','Fakt',system-ui,sans-serif",
    SERIF = "'ABC Arizona Text',Georgia,serif";
  const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const dark = c => [C.navy, C.steel, C.granite].includes(c);
  const seq = (i, n) => SEQ[Math.round(i * (Math.min(n, SEQ.length) - 1) / Math.max(1, n - 1))];
  const ctx = s => {
    const k = s.scale || 1,
      d = !!s.dark;
    return {
      k,
      d,
      px: v => (v * k).toFixed(1) + 'px',
      ink: d ? C.cream : C.ink,
      mut: d ? '#C9D3DA' : C.muted,
      card: d ? 'rgba(248,244,240,.08)' : C.white,
      line: d ? 'rgba(248,244,240,.22)' : C.rule,
      acc: d ? C.sky2 : C.bronze
    };
  };
  const icon = (name, size, color) => name && window.FartherIcons ? `<span style="display:inline-block;flex:none;width:${size};height:${size};color:${color}">${window.FartherIcons.svg(name, {
    color
  })}</span>` : '';
  const label = (x, t, o = {}) => `<div style="font-family:${SERIF};font-weight:300;font-size:${x.px(o.size || 15)};line-height:1.15;letter-spacing:-.01em;color:${o.color || x.ink};text-wrap:balance">${esc(t)}</div>`;
  const desc = (x, t, o = {}) => t ? `<div style="font-size:${x.px(o.size || 10.5)};line-height:1.45;color:${o.color || x.mut};text-wrap:pretty">${esc(t)}</div>` : '';
  const value = (x, t, o = {}) => t ? `<div style="font-family:${SERIF};font-weight:300;font-size:${x.px(o.size || 24)};line-height:1;letter-spacing:-.02em;color:${o.color || x.ink}">${esc(t)}</div>` : '';
  const eyebrow = (x, t, color) => t ? `<div style="font-size:${x.px(9)};letter-spacing:.16em;text-transform:uppercase;font-weight:600;color:${color || x.acc}">${esc(t)}</div>` : '';
  const shell = (x, s, body) => `<div role="img" aria-label="${esc(s.title || 'Infographic')}" style="font-family:${SANS};color:${x.ink};${x.d ? `background:${C.navy};padding:${x.px(24)};border-radius:${x.px(12)};` : ''}">${body}</div>`;
  const num = (x, n, bg, fg, size = 28) => `<div style="flex:none;width:${x.px(size)};height:${x.px(size)};border-radius:50%;background:${bg};color:${fg};display:flex;align-items:center;justify-content:center;font-family:${SERIF};font-size:${x.px(size * .5)}">${n}</div>`;
  const R = {};

  // 1. Steps: horizontal numbered process with connectors
  R.steps = s => {
    const x = ctx(s),
      n = s.items.length;
    return shell(x, s, `<div style="display:grid;grid-template-columns:repeat(${n},minmax(0,1fr));gap:${x.px(12)}">${s.items.map((it, i) => {
      const c = seq(i, n);
      return `<div style="display:flex;flex-direction:column;gap:${x.px(8)};min-width:0"><div style="display:flex;align-items:center;gap:${x.px(8)}">${num(x, i + 1, c, dark(c) ? C.cream : C.ink)}${i < n - 1 ? `<div style="flex:1;height:0;border-top:${x.px(1.5)} dashed ${x.line}"></div><div style="width:0;height:0;border-left:${x.px(6)} solid ${x.line};border-top:${x.px(4)} solid transparent;border-bottom:${x.px(4)} solid transparent"></div>` : ''}</div>${icon(it.icon, x.px(30), x.acc)}${label(x, it.label, {
        size: 14
      })}${desc(x, it.desc)}</div>`;
    }).join('')}</div>`);
  };

  // 2. Stairs: ascending blocks, value/label on each tread
  R.stairs = s => {
    const x = ctx(s),
      n = s.items.length,
      h = s.height || 220;
    return shell(x, s, `<div style="display:flex;align-items:flex-end;gap:${x.px(6)};height:${x.px(h)}">${s.items.map((it, i) => {
      const c = seq(i, n),
        f = dark(c) ? C.cream : C.ink;
      return `<div style="flex:1;min-width:0;height:${(38 + 62 * i / Math.max(1, n - 1)).toFixed(1)}%;background:${c};border-radius:${x.px(8)} ${x.px(8)} 0 0;padding:${x.px(12)};display:flex;flex-direction:column;gap:${x.px(6)};box-sizing:border-box;overflow:hidden">${icon(it.icon, x.px(26), dark(c) ? C.sky2 : c === C.white ? C.bronze : C.navy)}${value(x, it.value, {
        color: f,
        size: 20
      })}${label(x, it.label, {
        color: f,
        size: 13
      })}${desc(x, it.desc, {
        color: dark(c) ? '#D8E0E6' : C.ink,
        size: 9.5
      })}</div>`;
    }).join('')}</div>`);
  };

  // 3. Roadmap: vertical timeline, items alternate left/right
  R.roadmap = s => {
    const x = ctx(s);
    return shell(x, s, `<div style="position:relative;display:flex;flex-direction:column;gap:${x.px(14)}"><div style="position:absolute;left:50%;top:0;bottom:0;border-left:${x.px(2)} solid ${x.line}"></div>${s.items.map((it, i) => {
      const L = i % 2 === 0,
        c = seq(i, s.items.length);
      const box = `<div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:${x.px(4)};text-align:${L ? 'right' : 'left'};align-items:${L ? 'flex-end' : 'flex-start'}">${eyebrow(x, it.date)}${label(x, it.label, {
        size: 14
      })}${desc(x, it.desc)}</div>`;
      return `<div style="position:relative;display:flex;align-items:center;gap:${x.px(22)}">${L ? box : '<div style="flex:1"></div>'}<div style="flex:none;width:${x.px(34)};height:${x.px(34)};border-radius:50%;background:${x.d ? C.navy : C.cream};border:${x.px(2)} solid ${c};display:flex;align-items:center;justify-content:center;position:relative">${it.icon ? icon(it.icon, x.px(20), x.acc) : `<span style="font-family:${SERIF};font-size:${x.px(13)};color:${x.ink}">${i + 1}</span>`}</div>${L ? '<div style="flex:1"></div>' : box}</div>`;
    }).join('')}</div>`);
  };

  // 4. Timeline: horizontal milestones on a rule, labels alternate above/below
  R.timeline = s => {
    const x = ctx(s),
      n = s.items.length;
    const cell = (it, i, top) => `<div style="min-width:0;display:flex;flex-direction:column;gap:${x.px(3)};justify-content:${top ? 'flex-end' : 'flex-start'};align-items:center;text-align:center;padding:0 ${x.px(4)}">${i % 2 === 0 === top ? `${top ? '' : `<div style="height:${x.px(6)}"></div>`}${eyebrow(x, it.date)}${label(x, it.label, {
      size: 13
    })}${desc(x, it.desc, {
      size: 9.5
    })}` : ''}</div>`;
    return shell(x, s, `<div style="display:grid;grid-template-columns:repeat(${n},minmax(0,1fr));row-gap:${x.px(10)}">${s.items.map((it, i) => cell(it, i, true)).join('')}${s.items.map((it, i) => `<div style="position:relative;height:${x.px(22)};display:flex;align-items:center;justify-content:center"><div style="position:absolute;left:${i ? 0 : '50%'};right:${i === n - 1 ? '50%' : 0};top:50%;border-top:${x.px(2)} solid ${x.line}"></div><div style="position:relative;width:${x.px(it.major ? 20 : 14)};height:${x.px(it.major ? 20 : 14)};border-radius:50%;background:${it.major ? x.acc : seq(i, n)};border:${x.px(3)} solid ${x.d ? C.navy : C.cream}"></div></div>`).join('')}${s.items.map((it, i) => cell(it, i, false)).join('')}</div>`);
  };

  // 5. Pyramid: tiers, top = narrowest; notes to the right
  R.pyramid = s => {
    const x = ctx(s),
      n = s.items.length;
    return shell(x, s, `<div style="display:flex;flex-direction:column;gap:${x.px(4)}">${s.items.map((it, i) => {
      const c = seq(i, n),
        w = 34 + 66 * (i + 1) / n,
        w0 = 34 + 66 * i / n,
        f = dark(c) ? C.cream : C.ink;
      return `<div style="display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:${x.px(16)};align-items:center"><div style="display:flex;justify-content:center"><div style="width:${w}%;clip-path:polygon(${((1 - w0 / w) * 50).toFixed(2)}% 0,${(100 - (1 - w0 / w) * 50).toFixed(2)}% 0,100% 100%,0 100%);background:${c};min-height:${x.px(48)};display:flex;align-items:center;justify-content:center;gap:${x.px(8)};padding:${x.px(8)} ${x.px(16)};box-sizing:border-box">${icon(it.icon, x.px(20), dark(c) ? C.sky2 : c === C.white ? C.bronze : C.navy)}${label(x, it.label, {
        color: f,
        size: 13
      })}</div></div><div style="display:flex;flex-direction:column;gap:${x.px(2)};border-left:${x.px(2)} solid ${c};padding-left:${x.px(10)}">${value(x, it.value, {
        size: 16
      })}${desc(x, it.desc)}</div></div>`;
    }).join('')}</div>`);
  };

  // 6. Funnel: narrowing bands with values (e.g. gross income to investable)
  R.funnel = s => {
    const x = ctx(s),
      n = s.items.length;
    return shell(x, s, `<div style="display:flex;flex-direction:column;gap:${x.px(4)};align-items:center">${s.items.map((it, i) => {
      const c = seq(i, n),
        w = 100 - 52 * i / Math.max(1, n - 1),
        w2 = 100 - 52 * (i + 1) / Math.max(1, n - 1),
        f = dark(c) ? C.cream : C.ink,
        inset = i === n - 1 ? 3 : (1 - w2 / w) * 50;
      return `<div style="width:${w}%;clip-path:polygon(0 0,100% 0,${(100 - inset).toFixed(2)}% 100%,${inset.toFixed(2)}% 100%);background:${c};padding:${x.px(10)} ${x.px(20)};box-sizing:border-box;display:flex;justify-content:space-between;align-items:center;gap:${x.px(12)};min-height:${x.px(50)}"><div style="display:flex;align-items:center;gap:${x.px(8)};min-width:0;padding-left:${(inset * 1.2).toFixed(1)}%">${icon(it.icon, x.px(20), dark(c) ? C.sky2 : c === C.white ? C.bronze : C.navy)}<div style="display:flex;flex-direction:column;gap:${x.px(1)}">${label(x, it.label, {
        color: f,
        size: 13
      })}${desc(x, it.desc, {
        color: dark(c) ? '#D8E0E6' : C.ink,
        size: 9
      })}</div></div><div style="padding-right:${(inset * 1.2).toFixed(1)}%">${value(x, it.value, {
        color: f,
        size: 18
      })}</div></div>`;
    }).join('')}</div>`);
  };

  // 7. Cycle: items around a ring with a centre label
  R.cycle = s => {
    const x = ctx(s),
      n = s.items.length,
      D = s.size || 420,
      r = 38;
    const ring = `<svg viewBox="0 0 100 100" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible"><defs><marker id="fa${n}" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0,0L10,5L0,10Z" fill="${x.d ? C.sky2 : C.granite2}"></path></marker></defs>${s.items.map((_, i) => {
      const a0 = i / n * 2 * Math.PI - Math.PI / 2 + .32,
        a1 = (i + 1) / n * 2 * Math.PI - Math.PI / 2 - .32;
      return `<path d="M${50 + r * Math.cos(a0)},${50 + r * Math.sin(a0)}A${r},${r} 0 0 1 ${50 + r * Math.cos(a1)},${50 + r * Math.sin(a1)}" fill="none" stroke="${x.d ? C.sky2 : C.granite2}" stroke-width=".7" marker-end="url(#fa${n})"></path>`;
    }).join('')}</svg>`;
    const nodes = s.items.map((it, i) => {
      const a = i / n * 2 * Math.PI - Math.PI / 2,
        c = seq(i, n);
      return `<div style="position:absolute;left:${50 + r * Math.cos(a)}%;top:${50 + r * Math.sin(a)}%;transform:translate(-50%,-50%);width:${x.px(D * .27)};display:flex;flex-direction:column;align-items:center;gap:${x.px(4)};text-align:center"><div style="width:${x.px(46)};height:${x.px(46)};border-radius:50%;background:${c};display:flex;align-items:center;justify-content:center">${it.icon ? icon(it.icon, x.px(26), dark(c) ? C.sky2 : c === C.white ? C.bronze : C.navy) : `<span style="font-family:${SERIF};font-size:${x.px(17)};color:${dark(c) ? C.cream : C.ink}">${i + 1}</span>`}</div>${label(x, it.label, {
        size: 12.5
      })}${desc(x, it.desc, {
        size: 9
      })}</div>`;
    }).join('');
    return shell(x, s, `<div style="position:relative;width:100%;max-width:${x.px(D)};aspect-ratio:1;margin:0 auto">${ring}<div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:36%;text-align:center;display:flex;flex-direction:column;gap:${x.px(4)};align-items:center">${eyebrow(x, s.centerEyebrow)}${label(x, s.center || '', {
      size: 17
    })}</div>${nodes}</div>`);
  };

  // 8. Compare: two options side by side with shared rows
  R.compare = s => {
    const x = ctx(s),
      [A, B] = s.options,
      rows = s.rows || [];
    const head = (o, c) => `<div style="background:${c};border-radius:${x.px(10)} ${x.px(10)} 0 0;padding:${x.px(14)};display:flex;align-items:center;gap:${x.px(10)}">${icon(o.icon, x.px(30), C.sky2)}<div style="display:flex;flex-direction:column;gap:${x.px(2)}">${label(x, o.label, {
      color: C.cream,
      size: 17
    })}${desc(x, o.desc, {
      color: '#D8E0E6',
      size: 9.5
    })}</div></div>`;
    return shell(x, s, `<div style="display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1fr) minmax(0,1fr);column-gap:${x.px(8)}"><div></div>${head(A, C.navy)}${head(B, C.granite)}${rows.map((r, i) => {
      const bg = i % 2 ? x.d ? 'rgba(248,244,240,.04)' : '#FBF9F7' : x.card,
        cell = v => `<div style="background:${bg};padding:${x.px(9)} ${x.px(12)};font-size:${x.px(10.5)};line-height:1.4;color:${x.ink};border-bottom:1px solid ${x.line}">${esc(v)}</div>`;
      return `<div style="padding:${x.px(9)} ${x.px(4)};font-size:${x.px(9)};letter-spacing:.1em;text-transform:uppercase;font-weight:600;color:${x.mut};border-bottom:1px solid ${x.line};display:flex;align-items:center">${esc(r.label)}</div>${cell(r.a)}${cell(r.b)}`;
    }).join('')}</div>`);
  };

  // 9. Quadrant: 2x2 with axis labels
  R.quadrant = s => {
    const x = ctx(s),
      q = s.items,
      bg = [C.mist, C.sky3, C.bronzeL, '#E6E3DB'];
    const cell = (it, i) => {
      const c = it.highlight ? C.navy : bg[i],
        f = dark(c) ? C.cream : C.ink;
      return `<div style="background:${c};border-radius:${x.px(8)};padding:${x.px(14)};display:flex;flex-direction:column;gap:${x.px(6)};min-height:${x.px(110)}">${icon(it.icon, x.px(26), dark(c) ? C.sky2 : c === C.white ? C.bronze : C.navy)}${label(x, it.label, {
        color: f,
        size: 14
      })}${desc(x, it.desc, {
        color: dark(c) ? '#D8E0E6' : C.ink
      })}</div>`;
    };
    return shell(x, s, `<div style="display:grid;grid-template-columns:${x.px(22)} minmax(0,1fr) minmax(0,1fr);grid-template-rows:auto auto ${x.px(20)};gap:${x.px(6)}"><div style="grid-row:1/3;writing-mode:vertical-rl;transform:rotate(180deg);text-align:center;font-size:${x.px(9)};letter-spacing:.14em;text-transform:uppercase;color:${x.mut}">${esc(s.yLabel || '')} →</div>${cell(q[0], 0)}${cell(q[1], 1)}${cell(q[2], 2)}${cell(q[3], 3)}<div></div><div style="grid-column:2/4;text-align:center;font-size:${x.px(9)};letter-spacing:.14em;text-transform:uppercase;color:${x.mut}">${esc(s.xLabel || '')} →</div></div>`);
  };

  // 10. Tree: root, children, optional grandchildren (household, entity or trust map)
  R.tree = s => {
    const x = ctx(s),
      kids = s.root.children || [],
      line = `border-color:${x.line}`;
    const node = (it, lvl) => {
      const c = it.color || [C.navy, C.granite, C.white][lvl],
        f = dark(c) ? C.cream : C.ink;
      return `<div style="background:${c};${lvl === 2 ? `border:1px solid ${x.line};` : ''}border-radius:${x.px(8)};padding:${x.px(lvl ? 8 : 12)} ${x.px(12)};display:flex;align-items:center;gap:${x.px(8)};text-align:left">${icon(it.icon, x.px(lvl ? 20 : 26), dark(c) ? C.sky2 : c === C.white ? C.bronze : C.navy)}<div style="display:flex;flex-direction:column;gap:${x.px(1)};min-width:0">${label(x, it.label, {
        color: f,
        size: lvl ? 12 : 15
      })}${desc(x, it.desc, {
        color: dark(c) ? '#D8E0E6' : C.ink,
        size: 9
      })}</div></div>`;
    };
    return shell(x, s, `<div style="display:flex;flex-direction:column;align-items:center"><div>${node(s.root, 0)}</div><div style="height:${x.px(14)};border-left:${x.px(1.5)} solid;${line}"></div><div style="display:grid;grid-template-columns:repeat(${kids.length},minmax(0,1fr));width:100%">${kids.map((k, i) => `<div style="display:flex;flex-direction:column;align-items:center;padding:0 ${x.px(5)}"><div style="align-self:stretch;height:${x.px(14)};display:flex"><div style="flex:1;border-top:${i ? `${x.px(1.5)} solid` : '0'};${line}"></div><div style="border-left:${x.px(1.5)} solid;${line}"></div><div style="flex:1;border-top:${i < kids.length - 1 ? `${x.px(1.5)} solid` : '0'};${line}"></div></div>${node(k, 1)}${(k.children || []).length ? `<div style="height:${x.px(10)};border-left:${x.px(1.5)} solid;${line}"></div><div style="display:flex;flex-direction:column;gap:${x.px(5)};align-self:stretch">${k.children.map(g => node(g, 2)).join('')}</div>` : ''}</div>`).join('')}</div></div>`);
  };

  // 11. Hub: centre concept with satellites (e.g. services around the client)
  R.hub = s => {
    const x = ctx(s),
      n = s.items.length,
      D = s.size || 460,
      r = 37;
    const spokes = `<svg viewBox="0 0 100 100" style="position:absolute;inset:0;width:100%;height:100%">${s.items.map((_, i) => {
      const a = i / n * 2 * Math.PI - Math.PI / 2;
      return `<line x1="50" y1="50" x2="${50 + r * Math.cos(a)}" y2="${50 + r * Math.sin(a)}" stroke="${x.line}" stroke-width=".5" stroke-dasharray="1.4 1.2"></line>`;
    }).join('')}</svg>`;
    return shell(x, s, `<div style="position:relative;width:100%;max-width:${x.px(D)};aspect-ratio:1;margin:0 auto">${spokes}<div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:30%;aspect-ratio:1;border-radius:50%;background:${C.navy};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:${x.px(4)};text-align:center;padding:${x.px(10)};box-sizing:border-box;${x.d ? `border:${x.px(2)} solid ${C.sky2}` : ''}">${icon(s.centerIcon, x.px(28), C.sky2)}${label(x, s.center, {
      color: C.cream,
      size: 15
    })}</div>${s.items.map((it, i) => {
      const a = i / n * 2 * Math.PI - Math.PI / 2;
      return `<div style="position:absolute;left:${50 + r * Math.cos(a)}%;top:${50 + r * Math.sin(a)}%;transform:translate(-50%,-50%);width:${x.px(D * .25)};background:${x.d ? C.steel : C.white};border:1px solid ${x.line};border-radius:${x.px(10)};padding:${x.px(9)};display:flex;flex-direction:column;align-items:center;gap:${x.px(4)};text-align:center">${icon(it.icon, x.px(24), x.acc)}${label(x, it.label, {
        size: 12
      })}${desc(x, it.desc, {
        size: 8.5
      })}</div>`;
    }).join('')}</div>`);
  };

  // 12. Cards: grid of icon/stat cards ("five reasons", key facts)
  R.cards = s => {
    const x = ctx(s),
      cols = s.columns || Math.min(4, s.items.length);
    return shell(x, s, `<div style="display:grid;grid-template-columns:repeat(${cols},minmax(0,1fr));gap:${x.px(10)}">${s.items.map((it, i) => {
      const hl = it.highlight,
        bg = hl ? C.navy : x.card,
        f = hl ? C.cream : x.ink;
      return `<div style="background:${bg};border:1px solid ${hl ? C.navy : x.line};border-radius:${x.px(10)};padding:${x.px(14)};display:flex;flex-direction:column;gap:${x.px(7)}"><div style="display:flex;justify-content:space-between;align-items:flex-start">${icon(it.icon, x.px(30), hl ? C.sky2 : x.acc) || `<span style="font-family:${SERIF};font-size:${x.px(22)};color:${hl ? C.sky2 : x.acc}">${String(i + 1).padStart(2, '0')}</span>`}${it.icon && s.numbered ? `<span style="font-size:${x.px(9)};color:${hl ? C.sky2 : x.mut}">${String(i + 1).padStart(2, '0')}</span>` : ''}</div>${value(x, it.value, {
        color: f,
        size: 24
      })}${label(x, it.label, {
        color: f,
        size: 13.5
      })}${desc(x, it.desc, {
        color: hl ? '#D8E0E6' : x.mut
      })}</div>`;
    }).join('')}</div>`);
  };
  const API = {
    render: R,
    colors: C,
    types: Object.keys(R)
  };
  Object.keys(R).forEach(k => {
    API[k] = (el, spec) => {
      el.innerHTML = R[k](spec);
      return el;
    };
  });
  window.FartherInfographics = API;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/infographics/farther-infographics.js", error: String((e && e.message) || e) }); }

// library/pieces/deck-stage.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* ═══ THIS PROJECT USES DESIGN COMPONENTS (.dc.html) ═══
 * Reference this stage from your <x-dc> template as an import — NEVER as a
 * raw <deck-stage> tag plus a <script src> (that hides the whole deck until
 * the stream finishes):
 *
 *   <x-import component-from-global-scope="deck-stage" from="./deck-stage.js"
 *             width="1920" height="1080" hint-size="100%,100%">
 *     <section data-label="Title" style="...">…</section>
 *     <section data-label="Agenda" style="...">…</section>
 *   </x-import>
 *
 * Slides are inline-styled <section> siblings; do not add a stylesheet or a
 * deck-stage:not(:defined) rule. The plain-HTML "Usage" block in the comment
 * below does NOT apply to .dc.html templates.
 */
/* BEGIN USAGE */
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→ and ↑/↓, PgUp/PgDn, Space, Home/End,
 *      number keys.
 *      On touch devices, tapping the left/right half of the stage goes
 *      prev/next — taps on links, buttons and other interactive slide
 *      content are left alone.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on
 *      idle; hovering or focusing its controls pins it visible until the
 *      pointer/focus leaves. While presenting it is pointer-summoned only:
 *      mouse movement (or hover/focus) shows it, slide changes never do.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *  (g) thumbnail rail — resizable left-hand column of per-slide thumbnails
 *      (static clones). Click to navigate — the clicked slide becomes the
 *      selected (highlighted) slide; shift-click selects a range and
 *      cmd/ctrl-click toggles slides in and out of the selection
 *      (Escape collapses it back to the current slide); ↑/↓ with a
 *      thumbnail focused to step between slides; Delete/Backspace with a
 *      thumbnail focused to delete the selection (one confirm dialog,
 *      one undoable operation); drag to reorder (dragging collapses a
 *      multi-selection); right-click for
 *      Skip / Move up / Move down / Duplicate / Delete — over a
 *      multi-selection the menu offers "Delete N slides". Drag the rail's right edge to resize;
 *      width persists to
 *      localStorage. Skipped slides carry `data-deck-skip`, are dimmed in
 *      the rail, omitted from prev/next navigation, and hidden at print.
 *      They also carry no rail number and are excluded from the overlay's
 *      slide count: the remaining slides are numbered contiguously
 *      (Keynote-style), and a skipped CURRENT slide (reachable by rail
 *      click or deep link, never by prev/next) shows '–' as its position.
 *      The rail is suppressed in presenting mode, in the host's Preview
 *      mode (ViewerMode='none'), on `noscale`, on narrow viewports
 *      (≤640px), and via the `no-rail` attribute. Rail mutations dispatch
 *      a `dc-op` CustomEvent on the element (see docs/dc-ops.md) and do
 *      NOT touch the DOM: the host applies the op and re-renders;
 *      structural rail input is locked until the host posts
 *      {__dc_op_ack: true, applied}.
 *  (h) typographic defaults — a zero-specificity stylesheet injected into
 *      the document gives headings `text-wrap: balance` and body text
 *      (p, li, blockquote, figcaption) `text-wrap: pretty`, so slides
 *      avoid widowed/orphaned words by default. Any text-wrap declaration
 *      you author on those elements wins over these defaults.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <style>deck-stage:not(:defined){visibility:hidden}</style>
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *   <script src="deck-stage.js"></script>
 *
 * The :not(:defined) rule prevents a flash of the first slide at its
 * authored styles before this script runs and attaches the shadow root.
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 *
 * Speaker notes stay in sync because the component posts {slideIndexChanged: N}
 * to the parent — just include the #speaker-notes script tag if asked for notes.
 *
 * Authoring guidance:
 *   - Write slide bodies as static HTML inside <deck-stage>, with sizing via
 *     CSS custom properties in a <style> block rather than JS constants.
 *     Static slide markup is what lets the user click a heading in edit mode
 *     and retype it directly; a slide rendered through <script type="text/babel">,
 *     React, or a loop over a JS array has to round-trip every tweak through a
 *     chat message instead. Reach for script-generated slides only when the
 *     content genuinely needs interactive behaviour static HTML can't express.
 *   - Do NOT set position/inset/width/height on the slide <section> elements —
 *     the component absolutely positions every slotted child for you.
 *   - Entrance animations: make the visible end-state the base style and
 *     animate *from* hidden, so print and reduced-motion show content.
 *     Gate the animation on [data-deck-active] and the motion query, e.g.
 *     `@media (prefers-reduced-motion:no-preference){ [data-deck-active] .x{animation:fade-in .5s both} }`.
 *     Avoid infinite decorative loops on slide content.
 */
/* END USAGE */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const FINE_POINTER_MQ = matchMedia('(hover: hover) and (pointer: fine)');
  const NARROW_MQ = matchMedia('(max-width: 640px)');
  // Slide-authored controls that should keep a tap instead of it navigating.
  const INTERACTIVE_SEL = 'a[href], button, input, select, textarea, summary, label, video[controls], audio[controls], [role="button"], [onclick], [tabindex]:not([tabindex^="-"]), [contenteditable]:not([contenteditable="false" i])';
  const pad2 = n => String(n).padStart(2, '0');

  // Label precedence: data-label → data-screen-label (number stripped) → first heading → "Slide".
  const getSlideLabel = el => {
    const explicit = el.getAttribute('data-label');
    if (explicit) return explicit;
    const existing = el.getAttribute('data-screen-label');
    if (existing) return existing.replace(/^\s*\d+\s*/, '').trim() || existing;
    const h = el.querySelector('h1, h2, h3, [data-title]');
    const t = h && (h.textContent || '').trim().slice(0, 40);
    if (t) return t;
    return 'Slide';
  };
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
    }
    /* connectedCallback holds this until document.fonts.ready (capped 2s) so
     * the first visible paint has the deck's real typography + final rail
     * layout. opacity (not visibility) so the active slide can't un-hide
     * itself via the ::slotted([data-deck-active]) visibility:visible rule.
     * Only the stage/rail hide — the black :host background stays, so the
     * iframe doesn't flash the page's default white. */
    :host([data-fonts-pending]) .stage,
    :host([data-fonts-pending]) .rail { opacity: 0; pointer-events: none; }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
      /* Slide edge on the black stage. Dark decks override the canvas
       * fill toward the stage's own black, leaving nothing to mark where
       * the slide ends — the faint white ring keeps the boundary legible
       * there while disappearing into the white of light decks. A
       * box-shadow, not outline/border: it follows any canvas rounding
       * and adds no layout size. */
      box-shadow: 0 0 0 1.5px rgba(255, 255, 255, 0.12);
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Thumbnail rail ──────────────────────────────────────────────────
       Fixed column on the left; each thumbnail is a static deep-clone of
       the light-DOM slide scaled into a 16:9 (or design-aspect) frame. The
       stage re-fits around it (see _fit); hidden during present / noscale
       / print so capture geometry and fullscreen output are unchanged. */
    .rail {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: var(--deck-rail-w, 188px);
      background: #141414;
      border-right: 1px solid rgba(255,255,255,0.08);
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 2147482500;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.18) transparent;
    }
    .rail::-webkit-scrollbar { width: 8px; }
    .rail::-webkit-scrollbar-track { background: transparent; margin: 2px; }
    .rail::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .rail::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.28);
      border: 2px solid transparent;
      background-clip: content-box;
    }
    :host([no-rail]) .rail,
    :host([noscale]) .rail { display: none; }
    .rail[data-presenting] { display: none; }
    @media (max-width: 640px) {
      .rail, .rail-resize { display: none; }
    }
    /* User-driven show/hide (the TweaksPanel toggle) slides instead of
       popping. Transitions are gated on :host([data-rail-anim]) — set only
       for the 200ms around the toggle — so window-resize and rail-width
       drag (which also call _fit) don't lag behind the cursor. */
    .rail[data-user-hidden] { transform: translateX(-100%); }
    :host([data-rail-anim]) .rail { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .stage { transition: left 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .canvas { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    /* transition shorthand replaces rather than merges — repeat the base
       .overlay opacity/transform/filter transitions so visibility changes
       during the 200ms toggle window still fade instead of popping. */
    :host([data-rail-anim]) .overlay {
      transition: margin-left 200ms cubic-bezier(.3,.7,.4,1),
                  opacity 260ms ease,
                  transform 260ms cubic-bezier(.2,.8,.2,1),
                  filter 260ms ease;
    }

    .thumb {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .thumb .num {
      width: 16px;
      flex-shrink: 0;
      font-size: 11px;
      font-weight: 500;
      text-align: right;
      color: rgba(255,255,255,0.55);
      padding-top: 2px;
      font-variant-numeric: tabular-nums;
    }
    .thumb .frame {
      position: relative;
      flex: 1;
      min-width: 0;
      aspect-ratio: var(--deck-aspect);
      background: #fff;
      border-radius: 4px;
      outline: 2px solid transparent;
      outline-offset: 0;
      overflow: hidden;
      transition: outline-color 120ms ease;
    }
    .thumb:hover .frame { outline-color: rgba(255,255,255,0.25); }
    .thumb { outline: none; }
    .thumb:focus-visible .frame { outline-color: rgba(255,255,255,0.5); }
    .thumb[data-selected] .num { color: #fff; }
    .thumb[data-selected] .frame {
      outline-color: rgba(217,119,87,0.65);
      box-shadow: 0 0 0 4px rgba(217,119,87,0.18);
    }
    .thumb[data-current] .num { color: #fff; }
    .thumb[data-current] .frame {
      outline-color: #D97757;
      box-shadow: 0 0 0 4px rgba(217,119,87,0.25);
    }
    /* While dragging, the thumb itself is the drag visual (the native drag
       image is suppressed in dragstart so the snapshot can't wander off the
       rail horizontally): elevate it rather than dim it, and let hit-testing
       ignore it so dragover reaches the sibling thumb under the pointer
       instead of the moving element itself. */
    .thumb[data-dragging] { opacity: 0.9; z-index: 30; pointer-events: none; }
    .thumb[data-dragging] .frame {
      outline-color: rgba(255,255,255,0.5);
      box-shadow: 0 6px 24px rgba(0,0,0,0.5);
    }
    .thumb::before {
      content: '';
      position: absolute;
      left: 24px;
      right: 0;
      height: 3px;
      border-radius: 2px;
      background: #D97757;
      opacity: 0;
      pointer-events: none;
    }
    .thumb[data-drop="before"]::before { top: -8px; opacity: 1; }
    .thumb[data-drop="after"]::before { bottom: -8px; opacity: 1; }
    .thumb[data-skip] .frame { opacity: 0.35; }
    .thumb[data-skip] .frame::after {
      content: 'Skipped';
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.45);
      color: #fff;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.04em;
    }

    .ctxmenu {
      position: fixed;
      min-width: 150px;
      padding: 4px;
      background: #242424;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 7px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.45);
      z-index: 2147483100;
      display: none;
      font-size: 12px;
    }
    .ctxmenu[data-open] { display: block; }
    .ctxmenu button {
      display: block;
      width: 100%;
      appearance: none;
      border: 0;
      background: transparent;
      color: #e8e8e8;
      font: inherit;
      text-align: left;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .ctxmenu button:hover:not(:disabled) { background: rgba(255,255,255,0.08); }
    .ctxmenu button:disabled { opacity: 0.35; cursor: default; }
    .ctxmenu hr {
      border: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      margin: 4px 2px;
    }

    .rail-resize {
      position: fixed;
      left: calc(var(--deck-rail-w, 188px) - 3px);
      top: 0;
      bottom: 0;
      width: 6px;
      cursor: col-resize;
      z-index: 2147482600;
      touch-action: none;
    }
    .rail-resize:hover,
    .rail-resize[data-dragging] { background: rgba(255,255,255,0.12); }
    :host([no-rail]) .rail-resize,
    :host([noscale]) .rail-resize,
    .rail[data-presenting] + .rail-resize,
    .rail[data-user-hidden] + .rail-resize { display: none; }

    /* Delete-confirm popup — matches the SPA's ConfirmDialog layout
       (title + message body, depressed footer with Cancel / Delete). */
    .confirm-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 2147483200;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .confirm-backdrop[data-open] { display: flex; }
    .confirm {
      width: 320px;
      max-width: calc(100vw - 32px);
      background: #2a2a2a;
      color: #e8e8e8;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.5);
      overflow: hidden;
      font-family: inherit;
      animation: deck-confirm-in 0.18s ease;
    }
    @keyframes deck-confirm-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .confirm .body { padding: 20px 20px 16px; }
    .confirm .title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
    .confirm .msg { font-size: 13px; line-height: 1.5; color: rgba(255,255,255,0.65); }
    .confirm .footer {
      padding: 14px 20px;
      background: #1f1f1f;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .confirm button {
      appearance: none;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
    }
    .confirm .cancel {
      background: transparent;
      border: 0;
      color: rgba(255,255,255,0.8);
    }
    .confirm .cancel:hover { background: rgba(255,255,255,0.08); }
    .confirm .danger {
      background: #c96442;
      border: 1px solid rgba(0,0,0,0.15);
      color: #fff;
      box-shadow: 0 1px 3px rgba(166,50,68,0.3), 0 2px 6px rgba(166,50,68,0.18);
    }
    .confirm .danger:hover { background: #b5563a; }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that _syncPrintPageRule appends
       to the document (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        /* Size containment: slotted content that overflows the design box
         * (an image-slot's aspect-ratio-derived width, say) must not count
         * toward Chromium's print document width — without this, an
         * abs-positioned child past the page edge shrinks the whole PDF
         * to fit (~75%). Containment is safe here because the definite
         * width/height above size the slide regardless of content.
         * (Absorbed from PR #2619 with its owner's agreement.) */
        contain: size !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      /* :last-child alone isn't enough once data-deck-skip hides the
         trailing slide(s) — the last *visible* slide still carries
         break-after:page and prints a blank sheet. _markLastVisible()
         maintains data-deck-last-visible on the last non-skipped slide. */
      ::slotted(*:last-child),
      ::slotted([data-deck-last-visible]) {
        break-after: auto;
        page-break-after: auto;
      }
      ::slotted([data-deck-skip]) { display: none !important; }
      .overlay, .rail, .rail-resize, .ctxmenu, .confirm-backdrop { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale', 'no-rail'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      // Explicit multi-selection (slide elements). Empty means the
      // selection is implicitly the current slide, so Delete always has
      // a well-defined target while the rail has focus.
      this._selected = new Set();
      this._selAnchor = null;
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._menuIndex = -1;
      // Overlay pinning: while the pointer is over the controls toolbar or
      // a control has keyboard focus, the idle-hide timeout must not
      // dismiss it (a pointer parked ON the controls doesn't generate
      // mousemove, so without the pin the toolbar vanishes under the
      // user's cursor after OVERLAY_HIDE_MS). Read by _flashOverlay's
      // hide timeout; cleared by mouseleave/focusout, which resume the
      // normal idle fade.
      this._overlayHover = false;
      this._overlayFocus = false;
      // Capability marker for the host's injected guest bundle. Copies
      // WITHOUT _navArrowsUpDown are frozen per-project builds that
      // predate native ArrowUp/ArrowDown slide nav — the bundle translates
      // Up/Down to Right/Left for those (installDeckArrowKeyTranslator in
      // apps/web/src/guest/edit-mode.ts) and must stand down here or every
      // press would advance twice. A marker, not a version number, so a
      // future capability can add its own independent probe.
      this._navArrowsUpDown = true;
      // Same contract for rail Delete/Backspace: copies WITHOUT
      // _railDeleteKey predate the thumbs' own Delete/Backspace binding,
      // and the bundle opens the delete confirm for them
      // (installDeckRailDeleteFallback in apps/web/src/guest/edit-mode.ts).
      // Current builds consume the key at the thumb (stopPropagation), so
      // the marker is belt-and-braces — it keeps the fallback standing
      // down even if a future build lets the key bubble past the thumb.
      this._railDeleteKey = true;
      // Same contract for skip-aware numbering: copies WITHOUT
      // _railSkipNumbers number every thumb 1..N and count skipped slides
      // in the overlay total — the bundle rewrites both for those
      // (installDeckSkipNumberingFallback in apps/web/src/guest/edit-mode.ts).
      // Here the component renumbers natively, so the fallback stands down.
      this._railSkipNumbers = true;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTap = this._onTap.bind(this);
      this._onMessage = this._onMessage.bind(this);
      // Capture-phase close so a click anywhere dismisses the menu, but
      // ignore clicks that land inside the menu itself — otherwise the
      // capture handler runs before the menu's own (bubble) handler and
      // clears _menuIndex out from under it.
      this._onDocClick = e => {
        if (this._menu && e.composedPath && e.composedPath().includes(this._menu)) return;
        this._closeMenu();
      };
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      // Presenter-view popup loads deckUrl?_snthumb=...#N for its prev/cur/
      // next thumbnails — the rail has no business rendering inside those
      // (wrong scale, and it offsets the stage so the thumb shows a gutter).
      if (/[?&]_snthumb=/.test(location.search)) this.setAttribute('no-rail', '');
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      this._ensurePrintSizingMeta();
      this._ensureTextWrapDefaults();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      window.addEventListener('message', this._onMessage);
      window.addEventListener('click', this._onDocClick, true);
      this.addEventListener('click', this._onTap);
      // Print lays every slide out as its own page, so [data-deck-active]-
      // gated entrance styles need the attribute on every slide (not just
      // the current one) or their content prints at the hidden base style.
      // The transient freeze style lands BEFORE the attributes so any
      // attribute-keyed transition fires at 0s (changing transition-
      // duration after a transition has started doesn't affect it).
      this._onBeforePrint = () => {
        this._syncPrintPageRule();
        // Self-heal: a departed doc-page may have removed the page-global
        // print-sizing meta this deck deferred to at connect time.
        this._ensurePrintSizingMeta();
        if (this._freezeStyle) this._freezeStyle.remove();
        this._freezeStyle = document.createElement('style');
        this._freezeStyle.textContent = '*,*::before,*::after{transition-duration:0s !important}';
        document.head.appendChild(this._freezeStyle);
        this._slides.forEach(s => s.setAttribute('data-deck-active', ''));
      };
      this._onAfterPrint = () => {
        this._applyIndex({
          showOverlay: false,
          broadcast: false
        });
        if (this._freezeStyle) {
          this._freezeStyle.remove();
          this._freezeStyle = null;
        }
      };
      window.addEventListener('beforeprint', this._onBeforePrint);
      window.addEventListener('afterprint', this._onAfterPrint);
      // Initial collection + layout happens via slotchange, which fires on mount.
      this._enableRail();
      // Hold the stage hidden until webfonts are ready so the first visible
      // paint has the deck's real typography — the :not(:defined) guard in
      // the page HTML only covers custom-element upgrade, not font load.
      // Capped so a 404'd font URL can't blank the deck indefinitely.
      this.setAttribute('data-fonts-pending', '');
      const reveal = () => this.removeAttribute('data-fonts-pending');
      // Unconditional cap — rAF can be suspended in a hidden iframe, which
      // would strand the one inside the rAF callback.
      setTimeout(reveal, 2000);
      // rAF first: fonts.ready is a pre-resolved promise until layout has
      // resolved the slotted text's font-family and pushed a FontFace into
      // 'loading'. Reading it here in connectedCallback (parse-time) would
      // settle the race in a microtask before any font fetch starts.
      requestAnimationFrame(() => {
        Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 2000))]).then(reveal, reveal);
      });
    }
    _enableRail() {
      // Idempotent — older host builds still post __omelette_rail_enabled.
      // no-rail guard keeps the observers/stylesheet walk off the cheap path
      // for presenter-popup thumbnail iframes (three per view — cur/prev/next).
      if (this._railEnabled || this.hasAttribute('no-rail')) return;
      this._railEnabled = true;
      // Per-viewer preference — restored alongside rail width. Default on;
      // only a stored '0' (from the TweaksPanel toggle) hides it.
      this._railVisible = true;
      try {
        if (localStorage.getItem('deck-stage.railVisible') === '0') this._railVisible = false;
      } catch (e) {}
      // Live thumbnail updates: watch the light-DOM slides for content
      // edits and re-clone just the affected thumb(s), debounced. Ignore
      // the data-deck-* / data-screen-label / data-om-validate attributes
      // this component itself writes so nav doesn't trigger spurious
      // refreshes — except data-deck-skip, which now arrives from the host
      // re-render and is what updates the rail badge, print bookkeeping,
      // and deckSkipped re-broadcast. Also ignore data-dc-tpl /
      // data-om-slide-id — host-reserved bookkeeping stamps (the host's
      // ATTR_RESERVED guard bounds them the same way) that structural
      // edits renumber/re-mint on slides whose content didn't change;
      // re-cloning on that churn is what made a slide move flash its
      // thumbnails.
      const OWN_ATTRS = /^data-(deck-(?!skip$)|screen-label$|om-(validate|slide-id)$|dc-tpl$)/;
      this._liveDirty = new Set();
      this._liveObserver = new MutationObserver(records => {
        for (const r of records) {
          if (r.type === 'attributes' && OWN_ATTRS.test(r.attributeName || '')) continue;
          let n = r.target;
          while (n && n.parentElement !== this) n = n.parentElement;
          // Skip/unskip is handled below without re-cloning (the badge sits
          // on the thumb wrapper, not the clone) — don't mark the slide
          // dirty for an attr change whose only visible effect is the badge.
          if (n && this._slideSet && this._slideSet.has(n) && !(r.type === 'attributes' && r.attributeName === 'data-deck-skip')) {
            this._liveDirty.add(n);
          }
          // Host-driven skip toggle: sync the rail badge + print + presenter
          // skipped-list the way _toggleSkip used to do locally.
          if (r.type === 'attributes' && r.attributeName === 'data-deck-skip' && n && this._slideSet && this._slideSet.has(n)) {
            const i = this._slides.indexOf(n);
            if (this._thumbs && this._thumbs[i]) {
              if (n.hasAttribute('data-deck-skip')) this._thumbs[i].thumb.setAttribute('data-skip', '');else this._thumbs[i].thumb.removeAttribute('data-skip');
            }
            this._markLastVisible();
            this._renumberRail();
            this._syncCount();
            try {
              window.postMessage({
                slideIndexChanged: this._index,
                deckTotal: this._slides.length,
                deckSkipped: this._skippedIndices()
              }, '*');
            } catch (e) {}
          }
        }
        if (this._liveDirty.size && !this._liveTimer) {
          this._liveTimer = setTimeout(() => {
            this._liveTimer = null;
            this._liveDirty.forEach(s => this._refreshThumb(s));
            this._liveDirty.clear();
          }, 200);
        }
      });
      this._liveObserver.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      // Lazy thumbnail materialization — clone the slide only when its
      // frame scrolls into (or near) the rail viewport. rootMargin gives
      // ~4 thumbs of pre-load so fast scrolling doesn't flash blanks.
      this._railObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.target.__deckThumb) {
            this._materialize(e.target.__deckThumb);
          }
        });
      }, {
        root: this._rail,
        rootMargin: '400px 0px'
      });
      // Tweaks typically change CSS vars / attrs OUTSIDE <deck-stage>
      // (on <html>, <body>, a wrapper div, or a <style> tag), which
      // _liveObserver can't see. Re-snapshot author CSS (constructable
      // sheet is shared by reference, so one replaceSync updates every
      // thumb shadow root) and re-sync each thumb host's attrs + custom
      // properties. In-slide DOM mutations are _liveObserver's job.
      // Debounced so slider drags don't thrash.
      this._onTweakChange = () => {
        clearTimeout(this._tweakTimer);
        this._tweakTimer = setTimeout(() => {
          this._snapshotAuthorCss();
          // One getComputedStyle for the whole batch — each
          // getPropertyValue read below reuses the same computed style
          // as long as nothing invalidates layout between thumbs.
          const cs = getComputedStyle(this);
          (this._thumbs || []).forEach(t => {
            if (t.host) this._syncThumbHostAttrs(t.host, cs);
          });
        }, 120);
      };
      window.addEventListener('tweakchange', this._onTweakChange);
      // Stylesheets that finish loading AFTER the snapshot below never
      // reach the thumbs on their own: a still-pending <link> contributes
      // nothing to document.styleSheets, and nothing re-reads it on load,
      // so the live slides restyle while every clone keeps the stale
      // sheet. dc-runtime's helmet mounts design-system <link>s at render
      // time, so a deck-stage that connects first snapshots before that
      // CSS exists. Funnel late arrivals into the same debounced resync:
      // hook load/error on every current <link>, and watch <head> for
      // links and styles mounted or rewritten later. Deliberately not
      // rAF- or fonts.ready-driven — rAF is throttled/suspended in hidden
      // iframes (thumbnail/presenter contexts), and a font-file load
      // doesn't change cssRules, so it needs no resync.
      this._hookedLinks = [];
      this._hookSheetLoad = el => {
        if (!el.matches || !el.matches('link[rel~="stylesheet" i]')) return;
        if (this._hookedLinks.indexOf(el) !== -1) return;
        this._hookedLinks.push(el);
        el.addEventListener('load', this._onTweakChange);
        el.addEventListener('error', this._onTweakChange);
      };
      document.querySelectorAll('link[rel~="stylesheet" i]').forEach(this._hookSheetLoad);
      this._headObserver = new MutationObserver(records => {
        let resync = false;
        for (const r of records) {
          if (r.type === 'characterData') {
            // Only <style> text is CSS — a ticking <title> shouldn't
            // wake the resync forever.
            const p = r.target.parentNode;
            if (p && p.nodeName === 'STYLE') resync = true;
            continue;
          }
          if (r.type === 'attributes') {
            // A late rel/href rewrite turns an inert <link> into a
            // stylesheet (hook it; its load fires even on cache hits);
            // a media/disabled flip changes effective rules with no
            // event. Resync only if this link is or ever was a
            // stylesheet — favicon/preload/canonical href churn isn't
            // a resync.
            if (r.target.nodeName === 'LINK') {
              this._hookSheetLoad(r.target);
              if (this._hookedLinks.indexOf(r.target) !== -1) resync = true;
            } else if (r.target.nodeName === 'STYLE') resync = true;
            continue;
          }
          // childList: only links and styles carry CSS. A new <link> has
          // no rules until it loads — hook it rather than resync now; a
          // <style> mount/unmount or text-node swap takes effect
          // immediately. _freezeStyle (our beforeprint helper) is skipped
          // on add only — no removal-side guard: _onAfterPrint nulls the
          // ref before the observer fires, so that check would be dead;
          // the one debounced no-op resync per print is harmless.
          if (r.target.nodeName === 'STYLE') resync = true;
          for (const n of r.addedNodes) {
            if (n.nodeName === 'LINK') this._hookSheetLoad(n);else if (n.nodeName === 'STYLE' && n !== this._freezeStyle) resync = true;
          }
          for (const n of r.removedNodes) {
            if (n.nodeName === 'LINK') {
              const hi = this._hookedLinks.indexOf(n);
              if (hi !== -1) {
                this._hookedLinks.splice(hi, 1);
                n.removeEventListener('load', this._onTweakChange);
                n.removeEventListener('error', this._onTweakChange);
                resync = true;
              }
            } else if (n.nodeName === 'STYLE') resync = true;
          }
        }
        if (resync) this._onTweakChange();
      });
      this._headObserver.observe(document.head, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
        attributeFilter: ['rel', 'href', 'media', 'disabled']
      });
      this._snapshotAuthorCss();
      // Re-snapshot once any still-loading stylesheet settles — it throws on
      // .cssRules above and silently contributes '' → unstyled thumbs on a
      // cold mount. {once:true}; routed through the debounced handler.
      document.querySelectorAll('link[rel~="stylesheet"]').forEach(l => {
        try {
          if (l.sheet && l.sheet.cssRules) return;
        } catch (e) {}
        l.addEventListener('load', this._onTweakChange, {
          once: true
        });
        l.addEventListener('error', this._onTweakChange, {
          once: true
        });
      });
      if (document.fonts) document.fonts.ready.then(this._onTweakChange, this._onTweakChange);
      // Build the rail now that it's enabled — slotchange already fired,
      // so _renderRail's early-return skipped the initial build.
      this._syncRailHidden();
      this._renderRail();
      this._fit();
    }

    /** Snapshot document stylesheets into a constructable sheet that each
     *  thumbnail's nested shadow root adopts — so author CSS styles the
     *  cloned slide content without touching this component's chrome.
     *  Cross-origin sheets throw on .cssRules — skip them. Re-callable:
     *  the existing constructable sheet is reused via replaceSync so every
     *  already-adopted shadow root picks up the fresh CSS without re-adopt. */
    _snapshotAuthorCss() {
      // :root in an adopted sheet inside a shadow root matches nothing
      // (only the document root qualifies), so author rules like
      // `:root[data-voice="modern"] .serif` never reach the clones.
      // Rewrite :root → :host and mirror <html>'s data-*/class/lang onto
      // each thumb host (see _syncThumbHostAttrs) so the same selectors
      // match inside the thumbnail's shadow tree.
      const authorCss = Array.from(document.styleSheets).map(sh => {
        try {
          return Array.from(sh.cssRules).map(r => r.cssText).join('\n');
        } catch (e) {
          return '';
        }
      }).join('\n')
      // The shadow host is featureless outside the functional :host(...)
      // form, so any compound on :root — [attr], .class, #id, :pseudo —
      // must become :host(<compound>) not :host<compound>. Same for the
      // html type selector (Tailwind class-strategy dark mode emits
      // html.dark; Pico uses html[data-theme]), which has nothing to
      // match inside the thumb's shadow tree.
      .replace(/:root((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)/g, ':host($1)').replace(/:root\b/g, ':host').replace(/(^|[\s,>~+(}])html((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)(?![-\w])/g, '$1:host($2)').replace(/(^|[\s,>~+(}])html(?![-\w])/g, '$1:host');
      // Every custom property the author references. _syncThumbHostAttrs
      // mirrors each one's *computed* value at <deck-stage> onto the
      // thumb host so the live value wins over the :host default above
      // regardless of which ancestor the tweak wrote to (<html>, <body>,
      // a wrapper div, or the deck-stage element itself all inherit
      // down to getComputedStyle(this)).
      this._authorVars = new Set(authorCss.match(/--[\w-]+/g) || []);
      try {
        if (!this._adoptedSheet) this._adoptedSheet = new CSSStyleSheet();
        this._adoptedSheet.replaceSync(authorCss);
      } catch (e) {
        this._adoptedSheet = null;
        this._authorCss = authorCss;
      }
    }
    _syncThumbHostAttrs(host, cs) {
      const de = document.documentElement;
      // setAttribute overwrites but can't delete — an attr removed from
      // <html> (toggleAttribute off, classList emptied) would linger on
      // the host and :host([data-*]) / :host(.foo) rules would keep
      // matching. Remove stale mirrored attrs first; iterate backward
      // because removeAttribute mutates the live NamedNodeMap.
      for (let i = host.attributes.length - 1; i >= 0; i--) {
        const n = host.attributes[i].name;
        if ((n.startsWith('data-') || n === 'class' || n === 'lang') && !de.hasAttribute(n)) {
          host.removeAttribute(n);
        }
      }
      for (const a of de.attributes) {
        if (a.name.startsWith('data-') || a.name === 'class' || a.name === 'lang') {
          host.setAttribute(a.name, a.value);
        }
      }
      // The :root→:host rewrite in _snapshotAuthorCss pins each custom
      // property to its stylesheet default on the thumb host, shadowing
      // the live value that would otherwise inherit. Tweaks can write the
      // live value on any ancestor — <html>, <body>, a wrapper div, the
      // deck-stage element — so read it as the *computed* value at
      // <deck-stage> (which sees the whole inheritance chain) rather than
      // trying to guess which element the author wrote to. Inline on the
      // host beats the :host{} rule. remove-stale covers vars dropped
      // from the stylesheet between snapshots.
      const vars = this._authorVars || new Set();
      for (let i = host.style.length - 1; i >= 0; i--) {
        const p = host.style[i];
        if (p.startsWith('--') && !vars.has(p)) host.style.removeProperty(p);
      }
      const live = cs || getComputedStyle(this);
      vars.forEach(p => {
        const v = live.getPropertyValue(p);
        if (v) host.style.setProperty(p, v.trim());else host.style.removeProperty(p);
      });
    }
    disconnectedCallback() {
      // A disconnect mid-drag never gets a dragend, so the document-level
      // drag tracker must be torn down here like every other global hook.
      this._stopDragTrack();
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      window.removeEventListener('message', this._onMessage);
      window.removeEventListener('click', this._onDocClick, true);
      window.removeEventListener('beforeprint', this._onBeforePrint);
      window.removeEventListener('afterprint', this._onAfterPrint);
      if (this._freezeStyle) {
        this._freezeStyle.remove();
        this._freezeStyle = null;
      }
      this.removeEventListener('click', this._onTap);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
      if (this._liveTimer) clearTimeout(this._liveTimer);
      if (this._tweakTimer) clearTimeout(this._tweakTimer);
      if (this._railAnimTimer) clearTimeout(this._railAnimTimer);
      if (this._scaleRaf) cancelAnimationFrame(this._scaleRaf);
      if (this._liveObserver) this._liveObserver.disconnect();
      if (this._railObserver) this._railObserver.disconnect();
      if (this._headObserver) this._headObserver.disconnect();
      (this._hookedLinks || []).forEach(l => {
        l.removeEventListener('load', this._onTweakChange);
        l.removeEventListener('error', this._onTweakChange);
      });
      this._hookedLinks = [];
      if (this._onTweakChange) window.removeEventListener('tweakchange', this._onTweakChange);
      // Drop the text-wrap defaults when the last deck-stage leaves, so a
      // deleted deck's typography can't restyle whatever replaces it.
      // (#deck-stage-print-page keeps its existing keep-forever lifecycle.)
      if (!document.querySelector('deck-stage')) {
        const tw = document.getElementById('deck-stage-text-wrap');
        if (tw) tw.remove();
        const ps = document.getElementById('deck-stage-print-sizing');
        if (ps) ps.remove();
      }
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        if (this._rail) {
          this._rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
        }
        this._fit();
        this._scaleThumbs();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-omelette-chrome', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._advance(-1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._advance(1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));

      // Pin the controls while the user is interacting with them —
      // hovering, or keyboard focus on a control. The hidden overlay is
      // pointer-events:none, so these only ever engage while it's already
      // visible. 'pointer' source: these are user-interaction paths, so
      // they may show/refresh the overlay even while presenting (see
      // _flashOverlay).
      overlay.addEventListener('mouseenter', () => {
        this._overlayHover = true;
        this._flashOverlay('pointer');
      });
      overlay.addEventListener('mouseleave', () => {
        const hadPin = this._overlayHover;
        this._overlayHover = false;
        // Resume the idle fade — never summon. Without the guard, a
        // mouseleave that fires because the overlay was force-hidden
        // (presenting entry flips it to pointer-events:none under the
        // cursor) would pop the controls right back up.
        if (hadPin || overlay.hasAttribute('data-visible')) this._flashOverlay('pointer');
      });
      overlay.addEventListener('focusin', e => {
        // Keyboard-origin focus only (:focus-visible): a mouse click also
        // focuses the clicked button, and pinning on that would hold the
        // controls open indefinitely after a single click — the hover pin
        // already covers the mouse case. Engines without :focus-visible
        // fall back to pinning on any focus (the safe direction).
        var kb = true;
        try {
          var t = e.target;
          kb = !(t && t.matches && !t.matches(':focus-visible'));
        } catch (err) {
          kb = true;
        }
        if (!kb) return;
        this._overlayFocus = true;
        this._flashOverlay('pointer');
      });
      overlay.addEventListener('focusout', e => {
        // Only unpin when focus truly left the toolbar — tabbing between
        // its buttons stays pinned. relatedTarget is null when focus
        // leaves the document entirely; treat that as leaving.
        if (e.relatedTarget && overlay.contains(e.relatedTarget)) return;
        const hadPin = this._overlayFocus;
        this._overlayFocus = false;
        // Resume-the-fade only (see mouseleave): a click-focused button
        // losing focus to a later stage click must not summon the
        // controls mid-presentation.
        if (hadPin || overlay.hasAttribute('data-visible')) this._flashOverlay('pointer');
      });

      // Thumbnail rail + context menu. Thumbnails are populated in
      // _renderRail() after _collectSlides().
      const rail = document.createElement('div');
      rail.className = 'rail export-hidden';
      rail.setAttribute('data-omelette-chrome', '');
      // Edit mode hooks wheel to pan the canvas; this opts the rail's own
      // scrollview out so thumbnails stay scrollable while editing.
      rail.setAttribute('data-dc-wheel-passthru', '');
      rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
      // Edge auto-scroll while dragging a thumb near the rail's top/bottom
      // so off-screen drop targets are reachable. Native dragover fires
      // continuously while the pointer is stationary, so a per-event nudge
      // (ramped by edge proximity) is enough — no rAF loop needed.
      rail.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        const r = rail.getBoundingClientRect();
        const EDGE = 40;
        const dt = e.clientY - r.top;
        const db = r.bottom - e.clientY;
        if (dt < EDGE) rail.scrollTop -= Math.ceil((EDGE - dt) / 3);else if (db < EDGE) rail.scrollTop += Math.ceil((EDGE - db) / 3);
      });
      const menu = document.createElement('div');
      menu.className = 'ctxmenu export-hidden';
      menu.setAttribute('data-omelette-chrome', '');
      menu.innerHTML = `
        <button type="button" data-act="skip">Skip slide</button>
        <button type="button" data-act="up">Move up</button>
        <button type="button" data-act="down">Move down</button>
        <button type="button" data-act="duplicate">Duplicate slide</button>
        <hr>
        <button type="button" data-act="delete">Delete slide</button>
      `;
      menu.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        const i = this._menuIndex;
        const list = this._menuIndices;
        this._closeMenu();
        if (act === 'skip') this._toggleSkip(i);else if (act === 'up') this._moveSlide(i, i - 1);else if (act === 'down') this._moveSlide(i, i + 1);else if (act === 'duplicate') this._duplicateSlide(i);else if (act === 'delete') this._openConfirm(list && list.length ? list : [i]);
      });
      menu.addEventListener('contextmenu', e => e.preventDefault());

      // Rail resize handle — drag to set --deck-rail-w, persisted to
      // localStorage so the width survives reloads.
      const resize = document.createElement('div');
      resize.className = 'rail-resize export-hidden';
      resize.setAttribute('data-omelette-chrome', '');
      resize.addEventListener('pointerdown', e => {
        e.preventDefault();
        resize.setPointerCapture(e.pointerId);
        resize.setAttribute('data-dragging', '');
        const move = ev => this._setRailWidth(ev.clientX);
        const up = () => {
          resize.removeEventListener('pointermove', move);
          resize.removeEventListener('pointerup', up);
          resize.removeEventListener('pointercancel', up);
          resize.removeAttribute('data-dragging');
          try {
            localStorage.setItem('deck-stage.railWidth', String(this._railPx));
          } catch (err) {}
        };
        resize.addEventListener('pointermove', move);
        resize.addEventListener('pointerup', up);
        resize.addEventListener('pointercancel', up);
      });

      // Delete-confirm dialog — mirrors the SPA's ConfirmDialog layout.
      const confirm = document.createElement('div');
      confirm.className = 'confirm-backdrop export-hidden';
      confirm.setAttribute('data-omelette-chrome', '');
      confirm.innerHTML = `
        <div class="confirm" role="dialog" aria-modal="true">
          <div class="body">
            <div class="title">Delete slide?</div>
            <div class="msg">This slide will be removed from the deck.</div>
          </div>
          <div class="footer">
            <button type="button" class="cancel">Cancel</button>
            <button type="button" class="danger">Delete</button>
          </div>
        </div>
      `;
      confirm.addEventListener('click', e => {
        if (e.target === confirm) {
          this._closeConfirm();
          this._focusCurrentThumb();
        }
      });
      confirm.querySelector('.cancel').addEventListener('click', () => {
        this._closeConfirm();
        this._focusCurrentThumb();
      });
      confirm.querySelector('.danger').addEventListener('click', () => {
        // Re-resolve at click time — the elements are the user's actual
        // selection; their indices may have shifted since confirm-open.
        const list = (this._confirmEls || []).map(el => this._slides.indexOf(el)).filter(i => i >= 0);
        this._closeConfirm();
        this._deleteSlides(list);
        this._focusCurrentThumb();
      });
      this._root.append(style, rail, resize, stage, overlay, menu, confirm);
      this._canvas = canvas;
      this._stage = stage;
      this._slot = slot;
      this._overlay = overlay;
      this._rail = rail;
      this._resize = resize;
      this._menu = menu;
      this._confirm = confirm;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');

      // Restore persisted rail width.
      let rw = 188;
      try {
        const s = localStorage.getItem('deck-stage.railWidth');
        if (s) rw = parseInt(s, 10) || rw;
      } catch (err) {}
      this._setRailWidth(rw);
      this._syncRailHidden();
    }
    _setRailWidth(px) {
      const w = Math.max(120, Math.min(360, Math.round(px)));
      this._railPx = w;
      this.style.setProperty('--deck-rail-w', w + 'px');
      this._fit();
      // _scaleThumbs forces a sync layout (frame.offsetWidth) then writes
      // N transforms. During a resize drag this runs per-pointermove;
      // coalesce to one per frame.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. (Re-)append so any author @page landing later in
     *  source order can't reintroduce a margin and push each slide onto
     *  two sheets; called again from beforeprint. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      (document.body || document.head).appendChild(tag);
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' +
      // Jump authored animations/transitions to their end state so print
      // never captures mid-entrance — pairs with the beforeprint handler
      // in connectedCallback that sets data-deck-active on every slide.
      '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Announces the deck's print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] content "default-landscape" — a
     *  deck prints one slide per page on the user's paper size, landscape.
     *  The export path probes the meta to decide what true paper size to
     *  inject at print time (the @page px rule above stays as the
     *  standalone-print fallback; an injected later rule overrides it).
     *  Never overrides an authored meta or another component's; removed
     *  when the last deck-stage leaves. data-omelette-injected keeps it
     *  out of serialized source. */
    _ensurePrintSizingMeta() {
      if (document.querySelector('meta[name="omelette-print-sizing"]')) return;
      const tag = document.createElement('meta');
      tag.id = 'deck-stage-print-sizing';
      tag.name = 'omelette-print-sizing';
      tag.content = 'default-landscape';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** Typographic defaults for slide text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins. Lives in the document,
     *  not the shadow root, for two reasons: document rules reach the
     *  slotted (light DOM) slides, and _snapshotAuthorCss copies document
     *  stylesheets into each thumbnail's shadow root, so the thumbs wrap
     *  the same way — a deck-stage-scoped selector would match nothing
     *  there. data-omelette-injected marks the tag for the host editor
     *  to strip at serialize, so it is never written back as authored
     *  source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('deck-stage-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'deck-stage-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }
    _onSlotChange() {
      // Self-mutate path already reconciled synchronously and emitted
      // slidechange; skip the async slotchange it caused.
      if (this._squelchSlotChange) {
        this._squelchSlotChange = false;
        return;
      }
      // Primary lock-clear is the host's __deck_rail_ack; this clears on a
      // dropped ack so the rail can't stay dead.
      this._railLock = false;
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
      // The deck just changed under any open rail surface — an open
      // confirm or menu is a question about the OLD deck (its labels and
      // counts may now lie), so close them rather than let a stale
      // answer fire. The element-held selection re-resolves, but the
      // user should re-read what they're deleting.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        this._closeConfirm();
        // The dialog held focus (danger button); hand it back to the rail.
        this._focusCurrentThumb(true);
      }
      if (this._menu && this._menu.hasAttribute('data-open')) this._closeMenu();
      // Editor-mode deletes rebuild the rail through here; a confirmed
      // delete that started from the keyboard still owes focus to the
      // (new) current thumb.
      if (this._pendingRailRefocus) this._focusCurrentThumb(true);
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slideSet = new Set(this._slides);
      // Selection is element-keyed: drop entries whose slide is gone
      // (deleted, or replaced wholesale by a host re-render).
      if (this._selected && this._selected.size) {
        this._selected.forEach(s => {
          if (!this._slideSet.has(s)) this._selected.delete(s);
        });
      }
      if (this._selAnchor && !this._slideSet.has(this._selAnchor)) this._selAnchor = null;
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        slide.setAttribute('data-screen-label', `${pad2(n)} ${getSlideLabel(slide)}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
      this._markLastVisible();
      this._syncCount();
      this._renderRail();
    }

    /** Tag the last non-skipped slide so print CSS can drop its
     *  break-after (see the @media print comment above — :last-child
     *  alone matches a hidden skipped slide). */
    _markLastVisible() {
      let last = null;
      this._slides.forEach(s => {
        s.removeAttribute('data-deck-last-visible');
        if (!s.hasAttribute('data-deck-skip')) last = s;
      });
      if (last) last.setAttribute('data-deck-last-visible', '');
    }
    _loadNotes() {
      // Per-slide data-speaker-notes is authoritative when present (attrs
      // travel with the element on reorder/dup/delete); a slide without
      // the attr falls through to the legacy #speaker-notes JSON array
      // PER SLIDE so a single attr on a JSON-authored deck doesn't blank
      // the rest.
      const tag = document.getElementById('speaker-notes');
      let json = null;
      if (tag) try {
        const p = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(p)) json = p;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
      }
      this._notes = this._slides.map((s, i) => {
        const a = s.getAttribute('data-speaker-notes');
        return a !== null ? a : json && typeof json[i] === 'string' ? json[i] : '';
      });
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      this._syncCount();
      // Follow-scroll on every navigation (init deep-link, keyboard, click,
      // tap, external goTo) — the only time we *don't* want the rail to
      // track current is after a rail-internal mutation, where _renderRail
      // has already restored the user's scroll position and yanking back to
      // current would undo it.
      this._syncRail(reason !== 'mutation');
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr,
            deckTotal: this._slides.length,
            deckSkipped: this._skippedIndices()
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay(source) {
      // Host posts __omelette_presenting while in fullscreen/tab
      // presentation mode. While presenting, the overlay is
      // pointer-summoned only: it appears on mouse movement and while the
      // user hovers/focuses the controls (source 'pointer'), but never
      // flashes on slide changes or nav-key presses (the default 'auto'
      // source) — a keyboard-driven advance must not blink chrome at the
      // audience. Outside presenting, both sources flash as before.
      if (!this._overlay) return;
      if (this._presenting && source !== 'pointer') return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        // Pinned by hover or focus on the controls — keep them up. The
        // matching mouseleave/focusout re-flashes, so the idle fade
        // resumes from that moment.
        if (this._overlayHover || this._overlayFocus) return;
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _railWidth() {
      // State-based, no offsetWidth: the first _fit() can run before the
      // rail has had layout on some load paths, and a 0 there paints the
      // slide full-width for one frame before the post-slotchange _fit()
      // corrects it.
      if (!this._railEnabled || !this._railVisible || this.hasAttribute('no-rail') || this.hasAttribute('noscale') || this._presenting || this._previewMode || NARROW_MQ.matches) return 0;
      return this._railPx || 0;
    }
    _fit() {
      if (!this._canvas) return;
      const stage = this._canvas.parentElement;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        if (stage) stage.style.left = '0';
        if (this._overlay) this._overlay.style.marginLeft = '0';
        return;
      }
      const rw = this._railWidth();
      if (stage) stage.style.left = rw + 'px';
      // Overlay is centred on the viewport via left:50% + translate(-50%);
      // marginLeft shifts the centre by rw/2 so it lands in the middle of
      // the [rw, innerWidth] stage region.
      if (this._overlay) this._overlay.style.marginLeft = rw / 2 + 'px';
      const vw = window.innerWidth - rw;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
      // Crossing the narrow-viewport breakpoint reveals the rail — rerun the
      // thumbnail scale the same way _setRailWidth does.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle. 'pointer'
      // source: mouse movement summons the controls even while presenting.
      this._flashOverlay('pointer');
    }
    _onMessage(e) {
      const d = e.data;
      if (d && typeof d.__omelette_presenting === 'boolean') {
        // Unchanged value → idempotent re-delivery (the guest bundle
        // re-posts when a deck mounts mid-presentation, and host + bundle
        // can both deliver at entry). Skip the resets: re-running the
        // entry work on every delivery would dismiss the pointer-summoned
        // overlay under a hovering cursor and close menus on every slide
        // change. Mirrors the preview_mode branch's unchanged-value guard
        // below.
        if (d.__omelette_presenting !== !!this._presenting) {
          this._presenting = d.__omelette_presenting;
          // A presenting transition invalidates interaction pins: carried
          // across the flip, a stale pin would hold the first summoned
          // overlay open with no pointer anywhere near it. Hide on BOTH
          // transitions: entry cleans the audience's screen, and on exit a
          // pin-skipped hide timeout may have left data-visible set with
          // no timer armed — without this, the footer would linger in the
          // editor until the next mousemove. The next interaction
          // re-summons it either way.
          this._overlayHover = false;
          this._overlayFocus = false;
          if (this._overlay) {
            this._overlay.removeAttribute('data-visible');
            if (this._hideTimer) clearTimeout(this._hideTimer);
          }
          this._syncRailHidden();
          this._closeMenu();
          this._closeConfirm();
          this._fit();
          this._scaleThumbs();
        }
      }
      // Host's Preview segment (ViewerMode='none'): the rail's drag-reorder /
      // right-click skip-delete affordances are editing chrome, so hide it
      // while the user is just looking at the deck. Same hard-hide path as
      // presenting; independent of the user's _railVisible preference so
      // returning to Edit restores whatever they had.
      if (d && typeof d.__omelette_preview_mode === 'boolean') {
        if (d.__omelette_preview_mode === this._previewMode) return;
        this._previewMode = d.__omelette_preview_mode;
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host has processed a dc-op; rail input is safe again. Not tied to
      // slotchange — setAttr and refusal don't fire one. On refusal,
      // revert the optimistic _index/hash adjustment so the next nav
      // starts from what's actually on screen.
      if (d && d.__dc_op_ack) {
        this._railLock = false;
        if (d.applied === false && this._indexBeforeEmit != null) {
          this._index = this._indexBeforeEmit;
          try {
            history.replaceState(null, '', '#' + (this._index + 1));
          } catch (e) {}
        }
        this._indexBeforeEmit = null;
        // A refused op never re-renders, so slotchange won't restore the
        // keyboard flow's focus — do it here. (Applied ops refocus in
        // _onSlotChange, after the rail has been rebuilt.)
        if (d.applied === false && this._pendingRailRefocus) {
          this._focusCurrentThumb(true);
        }
      }
      // Per-viewer show/hide, driven by the TweaksPanel's auto-injected
      // "Thumbnail rail" toggle (or any author script). Independent of
      // whether the Tweaks panel itself is open — closing the panel
      // doesn't change rail visibility. Persists alongside rail width.
      if (d && d.type === '__deck_rail_visible' && typeof d.on === 'boolean') {
        if (d.on === this._railVisible) return;
        this._railVisible = d.on;
        try {
          localStorage.setItem('deck-stage.railVisible', d.on ? '1' : '0');
        } catch (e) {}
        // Arm the transition, commit it, then flip state — otherwise the
        // browser coalesces both writes and nothing animates on show.
        this.setAttribute('data-rail-anim', '');
        void (this._rail && this._rail.offsetHeight);
        this._syncRailHidden();
        this._fit();
        this._scaleThumbs();
        clearTimeout(this._railAnimTimer);
        this._railAnimTimer = setTimeout(() => this.removeAttribute('data-rail-anim'), 220);
      }
      if (d && d.type === '__omelette_rail_enabled') this._enableRail();
    }
    _syncRailHidden() {
      if (!this._rail) return;
      // data-presenting is the hard hide (display:none) for flag-off,
      // presentation mode, and the host's Preview segment — instant, no
      // transition. data-user-hidden is the soft hide (translateX(-100%))
      // for the viewer's rail toggle, so show/hide slides under
      // :host([data-rail-anim]).
      const hard = !this._railEnabled || this._presenting || this._previewMode;
      if (hard) this._rail.setAttribute('data-presenting', '');else this._rail.removeAttribute('data-presenting');
      if (!this._railVisible) this._rail.setAttribute('data-user-hidden', '');else this._rail.removeAttribute('data-user-hidden');
      // translateX hide leaves thumbs (tabIndex=0) in the tab order —
      // inert keeps them unfocusable while the rail is off-screen.
      this._rail.inert = hard || !this._railVisible;
    }
    _onTap(e) {
      // Touch-only — keyboard + the overlay toolbar cover nav on desktop.
      if (FINE_POINTER_MQ.matches) return;
      // Only taps that land on the stage (slide content or letterbox); the
      // overlay / rail / menus are siblings with their own click handlers.
      const path = e.composedPath();
      if (!this._stage || !path.includes(this._stage)) return;
      // Let interactive slide content keep the tap. composedPath (not
      // e.target.closest) so we see through open shadow roots — a <button>
      // inside a slide-authored custom element retargets e.target to the
      // host but still appears in the composed path.
      if (e.defaultPrevented) return;
      for (const n of path) {
        if (n === this._stage) break;
        if (n.matches && n.matches(INTERACTIVE_SEL)) return;
      }
      e.preventDefault();
      const rw = this._railWidth();
      const mid = rw + (window.innerWidth - rw) / 2;
      this._advance(e.clientX < mid ? -1 : 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing. composedPath()[0], not e.target: a
      // window-level keydown retargets e.target to the shadow host, which
      // would miss an <input> or contenteditable inside a web component on
      // a slide (same reason _onTap uses composedPath).
      const t = e.composedPath ? e.composedPath()[0] : e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      // Confirm dialog swallows nav keys while open; Escape cancels. Enter
      // is left to the focused button's native activation so Tab→Cancel
      // →Enter activates Cancel, not the window-level confirm path.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        if (e.key === 'Escape') {
          this._closeConfirm();
          this._focusCurrentThumb();
          e.preventDefault();
        }
        return;
      }
      if (e.key === 'Escape' && this._menu && this._menu.hasAttribute('data-open')) {
        this._closeMenu();
        e.preventDefault();
        return;
      }
      if (e.key === 'Escape' && this._selected.size) {
        // Collapse the multi-selection back to the current slide (the
        // implicit selection), not to nothing.
        this._clearSelection();
        e.preventDefault();
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._advance(-1, 'keyboard');
      } else if (key === 'ArrowDown' && !e.defaultPrevented) {
        // ↓/↑ page slides like →/← (Keynote/PowerPoint parity). Window
        // level only: rail thumbs keep their own ↑/↓ walk (their handler
        // stops propagation before this one), and the typing guard above
        // already covers inputs and contenteditable slide content.
        // Deliberate tradeoff: like Space/PageDown before them, these are
        // scroll keys — slide content that wants keyboard scrolling claims
        // them with preventDefault, which this branch honors (checked here
        // and not for the long-standing keys above, so ←/→/Space behavior
        // is unchanged and ↑/↓ behave identically on frozen copies, whose
        // translator in the guest bundle applies the same guard).
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowUp' && !e.defaultPrevented) {
        this._advance(-1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      // User-initiated navigation collapses a multi-selection down to
      // the (implicit) current slide, like Keynote's arrow keys. 'click'
      // handles its own selection; programmatic reasons leave it alone.
      if (reason === 'keyboard' || reason === 'tap') this._clearSelection();
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    /** Step forward/back skipping any slide marked data-deck-skip. Falls
     *  back to _go's clamp-at-ends behaviour (flash overlay) when there's
     *  nothing further in that direction. */
    _advance(dir, reason) {
      if (!this._slides.length) return;
      let i = this._index + dir;
      while (i >= 0 && i < this._slides.length && this._slides[i].hasAttribute('data-deck-skip')) {
        i += dir;
      }
      if (i < 0 || i >= this._slides.length) {
        this._flashOverlay();
        return;
      }
      this._go(i, reason);
    }

    // ── Thumbnail rail ────────────────────────────────────────────────────
    //
    // Thumbs are keyed by slide element and reused across _renderRail()
    // calls, so a reorder/delete is an O(changed) DOM shuffle instead of an
    // O(N) teardown-and-re-clone. Each thumb starts as a lightweight shell
    // (num + empty frame); the clone is materialized lazily by an
    // IntersectionObserver when the frame scrolls into (or near) view, so
    // only visible-ish slides pay the clone + image-decode cost.

    _renderRail() {
      if (!this._rail || !this._railEnabled) {
        this._thumbs = [];
        return;
      }
      // FLIP: record each *materialized* thumb's top before the reconcile.
      // Off-screen (non-materialized) thumbs don't need the animation and
      // skipping their getBoundingClientRect saves a forced layout per
      // off-screen thumb on large decks.
      const prevTops = new Map();
      (this._thumbs || []).forEach(({
        thumb,
        slide,
        host
      }) => {
        if (host) prevTops.set(slide, thumb.getBoundingClientRect().top);
      });
      const st = this._rail.scrollTop;

      // Reconcile: reuse thumbs that already exist for a slide, create
      // shells for new slides, drop thumbs for removed slides.
      const bySlide = new Map();
      (this._thumbs || []).forEach(t => bySlide.set(t.slide, t));
      const next = [];
      this._slides.forEach(slide => {
        let t = bySlide.get(slide);
        if (t) bySlide.delete(slide);else t = this._makeThumb(slide);
        next.push(t);
      });
      // Orphans — slides removed since last render.
      bySlide.forEach(t => {
        if (this._railObserver) this._railObserver.unobserve(t.frame);
        t.thumb.remove();
      });
      // Put thumbs into document order to match _slides. insertBefore on
      // an already-correctly-placed node is a no-op, so this is cheap
      // when nothing moved.
      next.forEach((t, i) => {
        const want = t.thumb;
        const at = this._rail.children[i];
        if (at !== want) this._rail.insertBefore(want, at || null);
        t.i = i;
        if (t.slide.hasAttribute('data-deck-skip')) t.thumb.setAttribute('data-skip', '');else t.thumb.removeAttribute('data-skip');
        if (this._selected.has(t.slide)) t.thumb.setAttribute('data-selected', '');else t.thumb.removeAttribute('data-selected');
      });
      this._thumbs = next;
      this._renumberRail();
      this._rail.scrollTop = st;
      if (prevTops.size) {
        const moved = [];
        this._thumbs.forEach(({
          thumb,
          slide
        }) => {
          // The live-dragged thumb is positioned by the drag tracker; a
          // FLIP transform+transition here would clobber it mid-drag.
          if (thumb === this._dragThumb) return;
          const old = prevTops.get(slide);
          if (old == null) return;
          const dy = old - thumb.getBoundingClientRect().top;
          if (Math.abs(dy) < 1) return;
          thumb.style.transition = 'none';
          thumb.style.transform = `translateY(${dy}px)`;
          moved.push(thumb);
        });
        if (moved.length) {
          // Commit the inverted positions before flipping the transition
          // on — otherwise the browser coalesces both style writes and
          // nothing animates.
          void this._rail.offsetHeight;
          moved.forEach(t => {
            t.style.transition = 'transform 180ms cubic-bezier(.2,.7,.3,1)';
            t.style.transform = '';
          });
          setTimeout(() => moved.forEach(t => {
            t.style.transition = '';
          }), 220);
        }
      }
      requestAnimationFrame(() => this._scaleThumbs());
      this._syncRail(false);
    }

    /** Create a lightweight thumb shell for one slide. The clone is
     *  materialized later by the IntersectionObserver. Event handlers
     *  look up the thumb's *current* index (via _thumbs.indexOf) so the
     *  same element can be reused across reorders. */
    _makeThumb(slide) {
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.tabIndex = 0;
      const num = document.createElement('div');
      num.className = 'num';
      const frame = document.createElement('div');
      frame.className = 'frame';
      thumb.append(num, frame);
      const entry = {
        thumb,
        num,
        frame,
        slide,
        clone: null,
        host: null,
        i: -1
      };
      // entry.i is refreshed on every _renderRail reconcile pass, so
      // handlers read the thumb's current position without an O(N) scan.
      const idx = () => entry.i;
      thumb.addEventListener('click', e => {
        const i = idx();
        const slide = this._slides[i];
        // WebKit doesn't focus a plain element on click — focus
        // explicitly so Delete/Backspace works right after selecting a
        // slide by mouse. preventScroll: _syncRail owns the rail's
        // scroll position.
        thumb.focus({
          preventScroll: true
        });
        if (e.shiftKey || e.metaKey || e.ctrlKey) {
          // Multi-select gestures adjust the selection without
          // navigating (Keynote/Figma convention).
          e.preventDefault();
          if (e.shiftKey) {
            // Range from the anchor (last plain/cmd-clicked slide;
            // falls back to the current slide) to here, replacing any
            // previous range.
            let a = this._selAnchor ? this._slides.indexOf(this._selAnchor) : -1;
            if (a < 0) {
              a = this._index;
              this._selAnchor = this._slides[a] || null;
            }
            this._selected.clear();
            for (let j = Math.min(a, i); j <= Math.max(a, i); j++) {
              this._selected.add(this._slides[j]);
            }
          } else if (slide) {
            // Toggle. An empty explicit selection implicitly holds the
            // current slide — materialize it first so cmd-clicking a
            // second slide selects both.
            if (!this._selected.size && i !== this._index && this._slides[this._index]) {
              this._selected.add(this._slides[this._index]);
            }
            if (this._selected.has(slide)) this._selected.delete(slide);else {
              this._selected.add(slide);
              this._selAnchor = slide;
            }
          }
          this._syncSelection();
          return;
        }
        this._clearSelection();
        this._selAnchor = slide || null;
        this._go(i, 'click');
      });
      // ↑/↓ step through the rail when a thumb has focus. _go clamps at the
      // ends and _applyIndex→_syncRail scrolls the new current thumb into
      // view; we move focus to it (preventScroll — _syncRail already
      // scrolled) so a held key walks the whole list. stopPropagation keeps
      // this out of the window-level _onKey nav handler.
      thumb.addEventListener('keydown', e => {
        // Delete/Backspace with the rail focused deletes this thumb's
        // slide through the same confirm dialog as the menu item.
        // Listening on the thumb (never window-level) is what keeps
        // typing in the notes panel / slide inputs from ever landing
        // here; the target check is belt-and-braces for anything
        // focusable that ends up inside a thumb.
        if ((e.key === 'Delete' || e.key === 'Backspace') && !e.metaKey && !e.ctrlKey && !e.altKey) {
          const t = e.target;
          if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
          e.preventDefault();
          e.stopPropagation();
          // Same refusals as the menu item: never every slide, never
          // while a prior structural op is waiting on its ack. The
          // whole-deck refusal is announced (the menu greys its item
          // out; a silently dead key reads as breakage). The rail-lock
          // refusal stays silent: it lasts one ack round-trip and
          // matches the existing single-delete behavior.
          if (this._railLock) return;
          // Explicit selection wins; otherwise the focused thumb (which
          // plain click and ↑/↓ keep equal to the current slide).
          const sel = this._selected.size ? this._selectionIndices() : [idx()];
          if (sel.length >= this._slides.length) {
            this._showNotice(sel.length === 1 ? 'The last slide can’t be deleted.' : 'At least one slide has to stay — the whole deck can’t be deleted.');
            return;
          }
          this._openConfirm(sel);
          return;
        }
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        e.stopPropagation();
        this._go(idx() + (e.key === 'ArrowDown' ? 1 : -1), 'keyboard');
        const cur = this._thumbs && this._thumbs[this._index];
        if (cur) cur.thumb.focus({
          preventScroll: true
        });
      });
      thumb.addEventListener('contextmenu', e => {
        e.preventDefault();
        this._openMenu(idx(), e.clientX, e.clientY);
      });
      thumb.draggable = true;
      thumb.addEventListener('dragstart', e => {
        // v1: dragging moves ONE slide, so a multi-selection would lie
        // about what's about to move — collapse it. (Group drag would
        // instead keep it and emit a batched move.)
        this._clearSelection();
        this._dragFrom = idx();
        // Deferred to the next frame: the [data-dragging] rule sets
        // pointer-events:none on the drag SOURCE, and applying that
        // synchronously inside dragstart makes Chromium (and WebKit) cancel
        // the drag — dragstart then an immediate dragend, no dragover or
        // drop, so thumbnails could not be reordered by dragging at all.
        // One frame is invisible and lands before the first dragover needs
        // the source to be hit-test-transparent. Guarded twice so the
        // attribute can never strand on a thumb that is no longer being
        // dragged (pointer-events:none would leave it unclickable for the
        // session): the pending frame is cancelled in dragend
        // (_cancelDragAttr), and the callback itself re-checks that THIS
        // thumb is still the live drag source (a new drag on another thumb
        // re-points the drag state). Deliberately NOT cancelled in
        // _stopDragTrack — _startDragTrack calls it at the start of every
        // drag, which would kill the mark this dragstart just scheduled
        // (see _cancelDragAttr).
        this._dragAttrRaf = requestAnimationFrame(() => {
          this._dragAttrRaf = null;
          if (this._dragFrom != null && this._dragThumb === thumb) {
            thumb.setAttribute('data-dragging', '');
          }
        });
        e.dataTransfer.effectAllowed = 'move';
        try {
          e.dataTransfer.setData('text/plain', String(this._dragFrom));
        } catch (err) {}
        // Constrain the drag visual to the rail's vertical axis. The
        // browser's default drag image is a free-floating snapshot that
        // follows the OS cursor in BOTH axes and the DnD API offers no way
        // to constrain it — so swap it for a transparent stand-in and move
        // the thumb itself along Y instead (_startDragTrack). The drop
        // logic below always read only clientY; this makes the visual
        // match it.
        try {
          e.dataTransfer.setDragImage(this._dragBlank(), 0, 0);
        } catch (err) {}
        this._startDragTrack(thumb, e.clientY);
      });
      thumb.addEventListener('dragend', () => {
        this._cancelDragAttr();
        thumb.removeAttribute('data-dragging');
        this._stopDragTrack();
        this._clearDrop();
        this._dragFrom = null;
      });
      thumb.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const r = thumb.getBoundingClientRect();
        this._setDrop(idx(), e.clientY < r.top + r.height / 2 ? 'before' : 'after');
      });
      thumb.addEventListener('drop', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        const i = idx();
        const r = thumb.getBoundingClientRect();
        let to = e.clientY >= r.top + r.height / 2 ? i + 1 : i;
        if (this._dragFrom < to) to--;
        const from = this._dragFrom;
        this._clearDrop();
        this._dragFrom = null;
        if (to !== from) this._moveSlide(from, to);
      });
      if (this._railObserver) this._railObserver.observe(frame);
      frame.__deckThumb = entry;
      return entry;
    }

    /** Lazily build the clone for a thumb that has scrolled into view. */
    _materialize(entry) {
      if (entry.host) return;
      const dw = this.designWidth,
        dh = this.designHeight;
      let clone = entry.slide.cloneNode(true);
      // The clone participates in the document's flat tree, so the
      // templates' position-based CSS page counters (.slide
      // { counter-increment: page }) would count every materialized
      // thumb before the real slides — folios print offset by the
      // thumb count (slide 2 reading "7" on a five-slide deck).
      // Neutralize the counter on the clone and drop its folio pill:
      // a thumbnail's own page number is unreadable at thumb scale
      // anyway, and the real slides' numbers stay truthful.
      clone.style.counterIncrement = 'none';
      clone.querySelectorAll('.page-foot').forEach(pf => pf.remove());
      // Canvas bitmaps don't clone — swap each cloned canvas for an <img>
      // of the live pixels. Best-effort: tainted canvases throw (left
      // as-is); zero-size are skipped; WebGL without preserveDrawingBuffer
      // reads back blank and the thumb gets a blank img (same as before).
      const liveCanvases = entry.slide.querySelectorAll('canvas');
      const cloneCanvases = clone.querySelectorAll('canvas');
      cloneCanvases.forEach((cv, i) => {
        const live = liveCanvases[i];
        if (!live || !live.width || !live.height) return;
        try {
          const img = document.createElement('img');
          img.src = live.toDataURL();
          img.alt = '';
          img.style.cssText = cv.style.cssText;
          img.className = cv.className;
          img.width = live.width;
          img.height = live.height;
          // Author CSS that sized the <canvas> via tag selector won't match
          // the <img> — pin the live canvas's laid-out box on the snapshot.
          if (live.clientWidth) {
            img.style.width = live.clientWidth + 'px';
            img.style.height = live.clientHeight + 'px';
          }
          cv.replaceWith(img);
        } catch (e) {}
      });
      // Neuter heavy media; replace <video> with its poster so the box
      // keeps a visual. <iframe>/<audio> become empty placeholders.
      // Parity with _inertify: transient top-layer UI never belongs in a
      // static thumb.
      clone.querySelectorAll('[popover], dialog').forEach(el => el.remove());
      clone.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      clone.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      // Images: defer decode and let the browser pick the smallest
      // srcset candidate for the ~140px thumb. Same-URL clones reuse the
      // slide's decoded bitmap (URL-keyed cache), so the remaining cost
      // is paint/composite — lazy+async keeps that off the main thread.
      clone.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Custom elements inside the slide would have their
      // connectedCallback fire when the clone is appended. Replace them
      // with inert boxes (_neuter) so a component-heavy deck doesn't run
      // N copies of each component's mount logic in the rail. Children
      // are preserved so layout-wrapper elements (<my-column><h2>…</h2>)
      // still show their authored content, and a shadow tree cloned along
      // via attachShadow({clonable:true}) (e.g. <image-slot>) moves onto
      // the box so the thumb shows the component's rendered content. The
      // querySelectorAll NodeList is static, so nested custom elements in
      // the moved subtree are still visited on later iterations.
      // querySelectorAll('*') returns descendants only — a custom-element
      // slide root (<my-slide>…</my-slide>) would slip through and upgrade
      // on append. Swap the root first.
      if (clone.tagName.includes('-')) clone = this._neuter(clone);
      clone.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(this._neuter(el));
      });
      // Strip ids only now: a defined custom element upgrades synchronously
      // during cloneNode and re-renders on attribute callbacks, so removing
      // 'id' any earlier resets components (e.g. <image-slot> falls back to
      // its author src). Post-neuter, only inert boxes and plain elements
      // remain, where the strip is just the usual duplicate-id hygiene.
      clone.removeAttribute('id');
      clone.removeAttribute('data-deck-active');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      clone.style.cssText += ';position:absolute;top:0;left:0;transform-origin:0 0;' + 'pointer-events:none;width:' + dw + 'px;height:' + dh + 'px;' + 'box-sizing:border-box;overflow:hidden;visibility:visible;opacity:1;';
      const host = document.createElement('div');
      host.style.cssText = 'position:absolute;inset:0;';
      // Clones are display-only: inert removes anything focusable inside
      // them from the tab order, so the rail's Delete/Backspace handler
      // can never see a (retargeted) key press from cloned content.
      host.inert = true;
      this._syncThumbHostAttrs(host);
      const sr = host.attachShadow({
        mode: 'open'
      });
      if (this._adoptedSheet) sr.adoptedStyleSheets = [this._adoptedSheet];else {
        const st = document.createElement('style');
        st.textContent = this._authorCss || '';
        sr.appendChild(st);
      }
      sr.appendChild(clone);
      entry.frame.appendChild(host);
      entry.host = host;
      entry.clone = clone;
      if (this._thumbScale) clone.style.transform = 'scale(' + this._thumbScale + ')';
      // Once materialized the IO callback is a no-op early-return —
      // unobserve so scroll doesn't keep firing it.
      if (this._railObserver) this._railObserver.unobserve(entry.frame);
    }

    /** Replace a cloned custom element with an inert box (see the comment
     *  in _materialize). A shadow tree cloned along via {clonable:true}
     *  moves onto the box, so the thumb shows the component's real content
     *  with zero component logic; :host rules in the moved <style> match
     *  the box, and the preserved data-* attrs keep :host([data-…])
     *  selectors working. */
    _neuter(el) {
      // Adopt the shadow only when the cloned root carries renderable
      // content. A constructor-attach / connectedCallback-render component
      // clones into an empty (or style-only) slotless root — adopting that
      // would hide the light children the box is about to receive and drop
      // the placeholder chrome. Such components fall back to the plain box.
      let sr = el.shadowRoot;
      if (sr) {
        let renderable = false;
        for (let n = sr.firstElementChild; n; n = n.nextElementSibling) {
          const t = n.tagName;
          if (t !== 'STYLE' && t !== 'LINK') {
            renderable = true;
            break;
          }
        }
        if (!renderable) sr = null;
      }
      const box = document.createElement('div');
      box.style.cssText = (el.getAttribute('style') || '') + (sr ? '' : ';background:rgba(0,0,0,0.06);border:1px dashed rgba(0,0,0,0.15);');
      box.className = el.className;
      // Preserve theming/i18n hooks so [data-*] / :lang() / [dir]
      // descendant selectors still match the neutered root — but not
      // pointer-interaction transients (a mid-reframe/mid-drag re-clone
      // would render the interaction chrome statically in the thumb).
      for (const a of el.attributes) {
        const n = a.name;
        if (n === 'data-reframe' || n === 'data-panning' || n === 'data-over') continue;
        if (n.startsWith('data-') || n.startsWith('aria-') || n === 'lang' || n === 'dir' || n === 'role' || n === 'title') {
          box.setAttribute(n, a.value);
        }
      }
      while (el.firstChild) box.appendChild(el.firstChild);
      if (sr) this._adoptShadow(box, sr);
      return box;
    }

    /** Move a cloned shadow tree onto a neutered thumbnail box: attach an
     *  open root on the box, carry adoptedStyleSheets, move the children,
     *  then make the content inert. */
    _adoptShadow(box, sr) {
      let root;
      try {
        root = box.attachShadow({
          mode: 'open'
        });
      } catch (e) {
        return;
      }
      // Engine-cloned shadow roots never carry adoptedStyleSheets, but a
      // defined component's clone is upgrade-rebuilt (constructor runs
      // during cloneNode), so sheets it adopts there are present and
      // shared by reference — carry them.
      if (sr.adoptedStyleSheets && sr.adoptedStyleSheets.length) {
        try {
          root.adoptedStyleSheets = Array.prototype.slice.call(sr.adoptedStyleSheets);
        } catch (e) {}
      }
      // Clone rather than move: moving preserves listeners an upgraded
      // clone's constructor attached inside its shadow; cloning sheds
      // them, keeping thumbs free of component logic categorically.
      for (let n = sr.firstChild; n; n = n.nextSibling) {
        root.appendChild(n.cloneNode(true));
      }
      this._inertify(root);
    }

    /** Strip anything executable from copied shadow content and apply the
     *  same custom-element/media/img policy as the light-DOM clone.
     *  (Canvases inside copied shadow content stay blank — there is no
     *  live↔clone pairing across shadow boundaries to snapshot from.) */
    _inertify(root) {
      root.querySelectorAll('script').forEach(s => s.remove());
      // Transient top-layer UI can never belong in a static thumb. (A
      // cloned [popover] is display:none anyway — open state doesn't
      // clone — this just makes it categorical.)
      root.querySelectorAll('[popover], dialog').forEach(el => el.remove());
      // Same heavy-media policy as the light-DOM clone above.
      root.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      root.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      root.querySelectorAll('*').forEach(el => {
        for (let i = el.attributes.length - 1; i >= 0; i--) {
          if (/^on/i.test(el.attributes[i].name)) {
            el.removeAttribute(el.attributes[i].name);
          }
        }
      });
      root.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Nested custom elements inside copied shadow content would upgrade
      // on append — same treatment as the light DOM. querySelectorAll is
      // static, so boxes created mid-walk don't re-enter this loop.
      root.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(this._neuter(el));
      });
    }

    /** Re-clone a single thumb (live-update path). No-op if the thumb
     *  hasn't been materialized yet — it'll pick up current content when
     *  it scrolls into view. */
    _refreshThumb(slide) {
      const entry = (this._thumbs || []).find(t => t.slide === slide);
      if (!entry || !entry.host) return;
      entry.host.remove();
      entry.host = entry.clone = null;
      this._materialize(entry);
    }
    _scaleThumbs() {
      if (!this._thumbs || !this._thumbs.length) return;
      // Every frame is the same width; if it reads 0 the rail is
      // display:none (noscale / no-rail / presenting / print) — leave the
      // clones as-is and re-run when the rail is revealed.
      const fw = this._thumbs[0].frame.offsetWidth;
      if (!fw) return;
      this._thumbScale = fw / this.designWidth;
      this._thumbs.forEach(({
        clone
      }) => {
        if (clone) clone.style.transform = 'scale(' + this._thumbScale + ')';
      });
    }
    _setDrop(i, where) {
      // dragover fires at pointer-event rate; touch only the previous
      // and new target rather than sweeping all N thumbs.
      const t = this._thumbs && this._thumbs[i];
      if (this._dropOn && this._dropOn !== t) {
        this._dropOn.thumb.removeAttribute('data-drop');
      }
      if (t) t.thumb.setAttribute('data-drop', where);
      this._dropOn = t || null;
    }
    _clearDrop() {
      if (this._dropOn) this._dropOn.thumb.removeAttribute('data-drop');
      this._dropOn = null;
    }

    /** 1×1 transparent stand-in for setDragImage. Kept attached (offscreen
     *  in the shadow root) because some engines ignore a drag image that
     *  isn't in a rendered tree. Created lazily, reused for every drag. */
    _dragBlank() {
      if (!this._dragBlankEl) {
        const c = document.createElement('canvas');
        c.width = 1;
        c.height = 1;
        c.style.cssText = 'position:fixed;left:-9999px;top:0;width:1px;height:1px;';
        this._root.appendChild(c);
        this._dragBlankEl = c;
      }
      return this._dragBlankEl;
    }

    /** Vertical-only drag tracking: translate the dragged thumb along Y to
     *  follow the pointer, clamped to the rail, ignoring X entirely. A
     *  document-level capture listener is used because native dragover
     *  fires wherever the pointer is — so the thumb keeps tracking even
     *  while the pointer wanders over the stage — and it is removed the
     *  moment the drag ends. getBoundingClientRect already reflects the
     *  current transform, so the layout position is recovered by
     *  subtracting the translation applied so far (rail auto-scroll moves
     *  the layout position mid-drag; see the rail dragover handler). */
    _startDragTrack(thumb, startY) {
      // A lost dragend (the dragged thumb removed mid-drag by a remote
      // edit's re-render — browsers fire no dragend on a disconnected
      // source) would otherwise leave the previous listener installed
      // forever once this overwrite lands.
      this._stopDragTrack();
      this._dragThumb = thumb;
      // The FLIP reorder animation drives transform through a transition;
      // the live drag must not inherit one, or the thumb rubber-bands.
      // Killed BEFORE the grab-offset read: mid-FLIP the rect includes the
      // interpolated transform, which would bake a constant offset into
      // the whole drag.
      thumb.style.transition = 'none';
      this._dragGrab = startY - thumb.getBoundingClientRect().top;
      this._dragTy = 0;
      this._onDragTrack = e => {
        const t = this._dragThumb;
        if (!t) return;
        const rail = this._rail.getBoundingClientRect();
        const r = t.getBoundingClientRect();
        // A transformed ancestor (author wraps the deck in a CSS scale;
        // canvas-mode pan/zoom) scales viewport deltas: translateY(N)
        // moves the rect by s·N. Measure s from the thumb itself (rect is
        // scaled, offsetHeight is layout px) so the feedback loop stays
        // exact instead of oscillating at s ≥ 2. offsetHeight is 0 only
        // when unrendered — nothing to track then, treat as unscaled.
        const s = t.offsetHeight ? r.height / t.offsetHeight : 1;
        const layoutTop = r.top - s * this._dragTy;
        let want = e.clientY - this._dragGrab;
        want = Math.max(rail.top, Math.min(want, rail.bottom - r.height));
        this._dragTy = (want - layoutTop) / s;
        t.style.transform = 'translateY(' + this._dragTy + 'px)';
      };
      document.addEventListener('dragover', this._onDragTrack, true);
    }

    /** Cancel the thumb's deferred data-dragging mark if its frame has not
     *  fired yet — see the dragstart deferral. Called from dragend only:
     *  _stopDragTrack is the wrong home for it, because _startDragTrack
     *  defensively calls _stopDragTrack at the START of every drag (its
     *  lost-dragend reset), so a cancel there kills the mark the same
     *  dragstart just scheduled. The strand that matters — pointer-
     *  events:none left on a CONNECTED thumb that is no longer being
     *  dragged — is closed two ways: dragend cancels the pending frame
     *  here, and the frame callback re-checks that THIS thumb is still the
     *  live drag source (_dragFrom and _dragThumb, both cleared/re-pointed
     *  by dragend or by a new drag). The remaining lost-dragend case — the
     *  source slide removed mid-drag, so no dragend fires — ends with that
     *  thumb discarded by the rail reconcile (thumbs are keyed by slide
     *  element and a removed slide's thumb is not reused), so a mark landing
     *  on it is on a discarded node. The risk this defer adds over the old
     *  synchronous set is therefore the narrow rAF-after-dragend window,
     *  which the dragend cancel covers. */
    _cancelDragAttr() {
      if (this._dragAttrRaf != null) {
        cancelAnimationFrame(this._dragAttrRaf);
        this._dragAttrRaf = null;
      }
    }
    _stopDragTrack() {
      if (this._onDragTrack) {
        document.removeEventListener('dragover', this._onDragTrack, true);
        this._onDragTrack = null;
      }
      const t = this._dragThumb;
      if (t) {
        t.style.transform = '';
        t.style.transition = '';
      }
      this._dragThumb = null;
      this._dragTy = 0;
    }
    _syncRail(follow) {
      if (!this._thumbs) return;
      this._thumbs.forEach(({
        thumb
      }, i) => {
        if (i === this._index) {
          thumb.setAttribute('data-current', '');
          if (follow && typeof thumb.scrollIntoView === 'function') {
            thumb.scrollIntoView({
              block: 'nearest'
            });
          }
        } else {
          thumb.removeAttribute('data-current');
        }
      });
    }
    _openMenu(i, x, y) {
      if (!this._menu) return;
      this._menuIndex = i;
      const slide = this._slides[i];
      // Right-clicking a thumb OUTSIDE the selection collapses the
      // selection to that thumb (platform convention) — the menu then
      // always targets exactly what's highlighted.
      if (this._selected.size && slide && !this._selected.has(slide)) {
        this._selected.clear();
        this._selected.add(slide);
        this._selAnchor = slide;
        this._syncSelection();
      }
      const sel = this._selectionIndices();
      const bulk = sel.length > 1;
      this._menuIndices = bulk ? sel : [i];
      // Bulk mode offers only the one batched op that exists (delete);
      // the single-slide items address one index and stay hidden.
      this._menu.querySelectorAll('[data-act="skip"], [data-act="up"], [data-act="down"], [data-act="duplicate"], hr').forEach(el => {
        el.style.display = bulk ? 'none' : '';
      });
      const skip = slide && slide.hasAttribute('data-deck-skip');
      this._menu.querySelector('[data-act="skip"]').textContent = skip ? 'Unskip slide' : 'Skip slide';
      this._menu.querySelector('[data-act="up"]').disabled = i <= 0;
      this._menu.querySelector('[data-act="down"]').disabled = i >= this._slides.length - 1;
      const del = this._menu.querySelector('[data-act="delete"]');
      del.textContent = bulk ? 'Delete ' + sel.length + ' slides' : 'Delete slide';
      del.disabled = bulk ? sel.length >= this._slides.length : this._slides.length <= 1;
      // Place, then clamp to viewport after it's measurable.
      this._menu.style.left = x + 'px';
      this._menu.style.top = y + 'px';
      this._menu.setAttribute('data-open', '');
      const r = this._menu.getBoundingClientRect();
      const nx = Math.min(x, window.innerWidth - r.width - 4);
      const ny = Math.min(y, window.innerHeight - r.height - 4);
      this._menu.style.left = Math.max(4, nx) + 'px';
      this._menu.style.top = Math.max(4, ny) + 'px';
    }
    _closeMenu() {
      if (this._menu) this._menu.removeAttribute('data-open');
      this._menuIndex = -1;
      this._menuIndices = null;
    }
    _openConfirm(sel) {
      if (!this._confirm) return;
      const list = Array.isArray(sel) ? sel : [sel];
      // Hold the slide ELEMENTS: the deck can re-render while the dialog
      // is open (collaborator/agent edit), and a frozen index list would
      // then address the wrong slides — a same-count reorder even passes
      // the host's witness guard. Elements re-resolve at danger-click.
      this._confirmEls = list.map(i => this._slides[i]).filter(Boolean);
      // Title uses the rail's skip-aware label, so the confirm names the
      // number the user right-clicked (a raw index would disagree with the
      // rail whenever a skipped slide precedes the target).
      const lbl = list.length === 1 ? this._slideLabel(list[0]) : '';
      this._confirm.querySelector('.title').textContent = list.length === 1 ? lbl ? 'Delete slide ' + lbl + '?' : 'Delete skipped slide?' : 'Delete ' + list.length + ' slides?';
      this._confirm.querySelector('.msg').textContent = list.length === 1 ? 'This slide will be removed from the deck.' : 'These slides will be removed from the deck.';
      this._confirm.setAttribute('data-open', '');
      const btn = this._confirm.querySelector('.danger');
      if (btn && btn.focus) btn.focus();
    }
    _closeConfirm() {
      if (this._confirm) this._confirm.removeAttribute('data-open');
      this._confirmEls = null;
    }

    /** Return focus to the current slide's thumb so the keyboard flow
     *  (Delete → Enter → Delete …) survives the confirm dialog closing.
     *  Without 'force', skipped while a structural op is in flight
     *  (_railLock): _index is then an optimistic post-op value that
     *  doesn't address the pre-op thumb list — _pendingRailRefocus stays
     *  armed and the ack/slotchange paths call back with force once the
     *  rail reflects the op. Skipped (and disarmed) while the rail is
     *  inert (hidden / presenting). */
    _focusCurrentThumb(force) {
      if (!force && this._railLock) return;
      this._pendingRailRefocus = false;
      // Never yank focus from content the user reached meanwhile (e.g.
      // an input inside a slide during the ack round-trip) — only
      // reclaim it from the rail's own surfaces, or from nowhere.
      const ae = this._root && this._root.activeElement;
      const ours = !ae || this._rail && this._rail.contains(ae) || this._confirm && this._confirm.contains(ae) || this._menu && this._menu.contains(ae);
      const lightAe = document.activeElement;
      const lightOk = !lightAe || lightAe === document.body || lightAe === this;
      if (!ours || !lightOk) return;
      const cur = this._thumbs && this._thumbs[this._index];
      if (cur && this._rail && !this._rail.inert) cur.thumb.focus({
        preventScroll: true
      });
    }

    /** Selection as sorted slide indices. An empty explicit selection
     *  means the current slide (the rail's implicit selection). */
    _selectionIndices() {
      const out = [];
      this._slides.forEach((s, i) => {
        if (this._selected.has(s)) out.push(i);
      });
      if (!out.length && this._slides[this._index]) out.push(this._index);
      return out;
    }
    _clearSelection() {
      // Re-anchor before the early return: a plain click followed by
      // arrow/tap navigation leaves _selected empty but the anchor
      // pointing at the old slide, and a later shift-click would range
      // from there instead of the current slide.
      this._selAnchor = null;
      if (!this._selected.size) return;
      this._selected.clear();
      this._syncSelection();
    }
    _syncSelection() {
      (this._thumbs || []).forEach(t => {
        if (this._selected.has(t.slide)) t.thumb.setAttribute('data-selected', '');else t.thumb.removeAttribute('data-selected');
      });
    }

    /** Rail mutations. When a dc-runtime is present (`window.__dcUpdate`)
     *  the host owns the light DOM — handlers emit a dc-op only and the
     *  host applies it (to the editor's model or to the source file) and
     *  re-renders via dc-runtime; slotchange catches the rail up.
     *  Structural ops lock rail input until the host acks so a rapid second
     *  click can't address a stale index; setAttr/removeAttr respect the
     *  lock but don't set it (indices unchanged; the host serializes).
     *  `newIndex` is written to location.hash so slotchange's
     *  _restoreIndex lands on the right slide.
     *
     *  With NO dc-runtime (a raw .html deck), there's no re-render path,
     *  so handlers self-mutate locally for an instant update and emit
     *  `emitOnly: false`; the host persists to disk without
     *  re-rendering over the already-mutated DOM.
     *
     *  See docs/dc-ops.md for the contract. */
    /** True when the page's DC runtime reports a live template stream for
     *  any component here (newer support.js bundles only — older bundles
     *  lack the signal and the HOST-side gate covers those decks). Rail
     *  mutations are refused for the duration: a mid-stream op addresses
     *  slide indices the stream is rewriting underneath the click. */
    _streamActive() {
      try {
        return !!window.__dcUpdate && typeof window.__dcStreaming === 'function' && window.__dcStreaming();
      } catch (e) {
        return false;
      }
    }

    /** Transient in-stage notice for a refused mid-stream rail op. */
    _showStreamNotice() {
      this._showNotice('Claude is still updating this deck — try again when it finishes.');
    }

    /** Transient bottom-center toast for a refused rail gesture. */
    _showNotice(text) {
      if (!this._root) return;
      let n = this._streamNotice;
      if (!n) {
        n = document.createElement('div');
        n.className = 'export-hidden';
        n.setAttribute('data-omelette-chrome', '');
        n.setAttribute('role', 'status');
        n.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);' + 'background:rgba(22,22,22,.94);color:#fff;' + 'font:500 13px/1.4 system-ui,sans-serif;padding:8px 14px;' + 'border-radius:8px;z-index:2147483646;pointer-events:none;' + 'opacity:0;transition:opacity .15s ease';
        this._root.append(n);
        this._streamNotice = n;
      }
      n.textContent = text;
      n.style.opacity = '1';
      if (this._streamNoticeTimer) clearTimeout(this._streamNoticeTimer);
      this._streamNoticeTimer = setTimeout(() => {
        n.style.opacity = '0';
      }, 2600);
    }
    _emitDcOp(op, slide, lock, newIndex) {
      // Mid-stream guard: refuse the gesture outright — no lock, no
      // optimistic index change, no emit, no self-mutation (returning
      // true short-circuits every caller). The host applies the same
      // gate for decks whose committed support.js predates the signal.
      if (this._streamActive()) {
        this._showStreamNotice();
        return true;
      }
      // Slide index (template/script/style filtered — same as
      // _collectSlides). deck-stage is a filtered-index dc-op emitter;
      // the host resolves against findDeckStage().slideTids. Callers
      // already pass `to` as a slide index.
      op.at = this._slides.indexOf(slide);
      op.witness = {
        childCount: this._slides.length
      };
      // dc-runtime wraps an <x-import>-mounted component in a
      // <div class="sc-host-x" data-dc-tpl="N"> host — the stamp is on the
      // WRAPPER, not this element. closest() finds it (or this element's
      // own stamp when directly templated).
      const host = this.closest('[data-dc-tpl]');
      const tid = host && host.getAttribute('data-dc-tpl');
      op.mount = {
        tid: tid !== null ? parseInt(tid, 10) : null,
        tag: 'deck-stage'
      };
      op.emitOnly = !!window.__dcUpdate;
      if (op.emitOnly) {
        if (lock) this._railLock = true;
        if (newIndex != null && newIndex !== this._index) {
          this._indexBeforeEmit = this._index;
          this._index = newIndex;
          try {
            history.replaceState(null, '', '#' + (newIndex + 1));
          } catch (e) {}
        }
      }
      this.dispatchEvent(new CustomEvent('dc-op', {
        detail: op,
        bubbles: true,
        composed: true
      }));
      return op.emitOnly;
    }

    /** Delete a set of slides (pre-op indices). One slide delegates to
     *  _deleteSlide — the plain 'remove' op — so single deletes keep
     *  working against hosts that predate 'removeMany'. A bulk delete is
     *  ONE op: one host write, one undo snapshot, and indices that all
     *  address the same pre-op deck (N acked single ops would each need
     *  a fresh witness). */
    _deleteSlides(list) {
      if (this._railLock || !list) return;
      const indices = [...new Set(list)].filter(i => this._slides[i]).sort((a, b) => a - b);
      if (!indices.length || indices.length >= this._slides.length) return;
      if (indices.length === 1) {
        this._deleteSlide(indices[0]);
        return;
      }
      // Mirrors _duplicateSlide: check the stream gate before doing any
      // work (_emitDcOp re-checks).
      if (this._streamActive()) {
        this._showStreamNotice();
        return;
      }
      const els = indices.map(i => this._slides[i]);
      const del = new Set(indices);
      const cur = this._index;
      // New current index in post-op space: shift the kept slide left by
      // the deletions below it; if the current slide itself is deleted,
      // land on the nearest survivor (after, else before).
      const below = n => indices.reduce((k, x) => k + (x < n ? 1 : 0), 0);
      let ni;
      if (!del.has(cur)) {
        ni = cur - below(cur);
      } else {
        let s = -1;
        for (let j = cur + 1; j < this._slides.length; j++) {
          if (!del.has(j)) {
            s = j;
            break;
          }
        }
        if (s === -1) {
          for (let j = cur - 1; j >= 0; j--) {
            if (!del.has(j)) {
              s = j;
              break;
            }
          }
        }
        ni = s < 0 ? 0 : s - below(s);
      }
      // Emit-path deletes can't refocus until the host re-renders; arm
      // the flag at emit time (never on a refused/no-op path) so
      // ack/slotchange can finish the keyboard flow's focus hand-back.
      // The local path clears it via the caller's _focusCurrentThumb().
      this._pendingRailRefocus = true;
      if (this._emitDcOp({
        op: 'removeMany',
        indices
      }, els[0], true, ni)) return;
      this._index = ni;
      this._squelchSlotChange = true;
      els.forEach(el => el.remove());
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _deleteSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide || this._slides.length <= 1) return;
      const cur = this._index;
      const ni = i < cur || i === cur && i === this._slides.length - 1 ? cur - 1 : cur;
      this._pendingRailRefocus = true;
      if (this._emitDcOp({
        op: 'remove'
      }, slide, true, ni)) return;
      this._index = ni;
      this._squelchSlotChange = true;
      slide.remove();
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _duplicateSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      // Mint ids + copy component state BEFORE emitting, so the op can
      // carry the id map — but never mint for an op the stream gate is
      // about to refuse (_emitDcOp re-checks; this avoids orphaned keys).
      if (this._streamActive()) {
        this._showStreamNotice();
        return;
      }
      const copy = slide.cloneNode(true);
      copy.removeAttribute('id');
      const ids = this._remintDuplicateIds(copy);
      const op = {
        op: 'duplicate'
      };
      if (ids) op.ids = ids;
      if (this._emitDcOp(op, slide, true, i + 1)) return;
      this._index = i + 1;
      this._squelchSlotChange = true;
      this.insertBefore(copy, slide.nextSibling);
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }

    /** Duplicate id policy. Plain ids are stripped — two live slides must
     *  not share one id. But a component that KEYS persistent state by id
     *  (image-slot's sidecar photo) would silently lose that state with
     *  its id. Such a component opts out of the strip by exposing a
     *  static cloneSlot(fromId, isFree) that copies its stored state
     *  under a fresh id of its choosing and returns that id. The old→new
     *  map is returned (or null) and rides the dc-op so the host writes
     *  the SAME ids into source — without that, the copy's state would
     *  revert on reload (docs/dc-ops.md). */
    _remintDuplicateIds(copy) {
      const ids = {};
      let found = false;
      const used = new Set();
      const idOk = /^[A-Za-z][\w-]{0,63}$/;
      const isFree = id => idOk.test(id) && !used.has(id) && !document.getElementById(id);
      copy.querySelectorAll('[id]').forEach(el => {
        const tag = el.tagName.toLowerCase();
        const cls = tag.indexOf('-') >= 0 && customElements.get(tag);
        let next = null;
        if (el.id && cls && typeof cls.cloneSlot === 'function') {
          try {
            next = cls.cloneSlot(el.id, isFree);
          } catch (e) {}
        }
        // Re-checked here so a misbehaving static can't smuggle a dupe
        // or an unsafe value into the document / the emitted op.
        if (typeof next === 'string' && isFree(next)) {
          ids[el.id] = next;
          used.add(next);
          el.id = next;
          found = true;
        } else {
          el.removeAttribute('id');
        }
      });
      return found ? ids : null;
    }
    _toggleSkip(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      const on = !slide.hasAttribute('data-deck-skip');
      if (this._emitDcOp(on ? {
        op: 'setAttr',
        attr: 'data-deck-skip',
        value: ''
      } : {
        op: 'removeAttr',
        attr: 'data-deck-skip'
      }, slide, false)) return;
      if (on) slide.setAttribute('data-deck-skip', '');else slide.removeAttribute('data-deck-skip');
    }
    _skippedIndices() {
      const out = [];
      for (let i = 0; i < this._slides.length; i++) {
        if (this._slides[i].hasAttribute('data-deck-skip')) out.push(i);
      }
      return out;
    }

    /** Rail numbering, skip-aware: a skipped slide shows no number and the
     *  rest stay contiguous (1..visible), so the labels match the positions
     *  the overlay counter reports. Cheap (text writes are diffed), safe to
     *  call after any reconcile or skip toggle. */
    _renumberRail() {
      let v = 0;
      (this._thumbs || []).forEach(t => {
        const label = t.slide.hasAttribute('data-deck-skip') ? '' : String(++v);
        if (t.num.textContent !== label) t.num.textContent = label;
      });
    }

    /** Skip-aware label for slide i — the same numbering _renumberRail
     *  paints: '' for a skipped slide, else its 1-based position among
     *  non-skipped slides. Display surfaces (e.g. the delete confirm)
     *  use this so they never name a number the rail doesn't show. */
    _slideLabel(i) {
      const s = this._slides[i];
      if (!s || s.hasAttribute('data-deck-skip')) return '';
      let v = 0;
      for (let k = 0; k <= i; k++) {
        if (!this._slides[k].hasAttribute('data-deck-skip')) v++;
      }
      return String(v);
    }

    /** Overlay counter, skip-aware: position among non-skipped slides over
     *  the non-skipped total. A skipped CURRENT slide (reachable by rail
     *  click or deep link, never by _advance) shows '–' — its number is
     *  gone from the rail, so any digit here would lie. */
    _syncCount() {
      if (!this._countEl || !this._totalEl) return;
      // Empty deck: keep the overlay's initial "1 / 1" (it has nothing to
      // count and isn't visible without slides) — the guest fallback for
      // frozen copies leaves empty decks alone for the same rendering.
      if (!this._slides.length) {
        this._countEl.textContent = '1';
        this._totalEl.textContent = '1';
        return;
      }
      let pos = 0,
        total = 0;
      this._slides.forEach((s, i) => {
        if (!s.hasAttribute('data-deck-skip')) {
          total++;
          if (i <= this._index) pos = total;
        }
      });
      const cur = this._slides[this._index];
      const curSkipped = !cur || cur.hasAttribute('data-deck-skip');
      this._countEl.textContent = curSkipped ? '–' : String(pos);
      this._totalEl.textContent = String(total);
    }
    _moveSlide(i, j) {
      if (this._railLock || j < 0 || j >= this._slides.length || j === i) return;
      const cur = this._index;
      const ni = cur === i ? j : i < cur && j >= cur ? cur - 1 : i > cur && j <= cur ? cur + 1 : cur;
      const slide = this._slides[i];
      if (this._emitDcOp({
        op: 'move',
        to: j
      }, slide, true, ni)) return;
      const ref = j < i ? this._slides[j] : this._slides[j].nextSibling;
      this._index = ni;
      this._squelchSlotChange = true;
      this.insertBefore(slide, ref);
      this._collectSlides();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'mutation'
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._advance(1, 'api');
    }
    prev() {
      this._advance(-1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "library/pieces/deck-stage.js", error: String((e && e.message) || e) }); }

// library/pieces/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    /* Monolithic at print: Blink slices a transform-scaled child at
     * fragmentainer boundaries mapped in UNSCALED layout coordinates
     * (transforms are paint-time), so the .fit box (authored size, e.g.
     * 1400x990) gets cut at the page's free block space and spills onto
     * a second sheet even though its SCALED footprint fits the page by
     * construction. overflow:hidden makes .fit-box a scroll container —
     * monolithic under fragmentation (css-break-3) — so the scaled
     * content prints atomically on one sheet. No clipping for content
     * within the authored box: .fit-box is calc-sized to exactly the
     * scaled footprint. (Content that bleeds past content-width/height
     * is clipped at the footprint — fit mode's contract; it previously
     * painted beyond it at print.) Print-only, so the screen rendering
     * keeps visible overflow for editor affordances.
     * The export path injects the same rule into frozen copies
     * (print-eval.ts om-print-fit-contain). The .fit-mode scope is
     * load-bearing: .fit-box wraps slotted content in EVERY mode, and an
     * unscoped overflow:hidden would make whole flowing documents
     * monolithic (one truncated sheet). overflow:hidden, never clip —
     * clip is not a scroll container, so not monolithic. */
    @media print {
      .fit-mode .fit-box { overflow: hidden; }
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "library/pieces/doc-page.js", error: String((e && e.message) || e) }); }

// library/tools/fix-disclosure.js
try { (() => {
// Replace a library piece's legacy disclosure with the official one (guidelines/compliance/DISCLOSURE.md).
// Keeps topic-specific risk sentences (index, past performance, hypothetical limits, insurance, trusts, etc.)
// as a supplemental paragraph after the verbatim official text. Generic boilerplate now covered by the
// official text is dropped. Usage: eval(this file); const r = fixDisclosure(html, FULL, CONDENSED);
const GENERIC = [/prepared by Farther/i, /offer to sell|offer or solicitation|solicitation of an offer|not intended for distribution to, or use by/i, /registered (as an )?investment adviser|investment adviser registered|SEC-registered|registration (as an investment adviser )?does not imply|^Registration does not imply/i, /informational (and educational )?purposes only|educational and informational purposes/i, /does not constitute (personalized )?investment|^It does not constitute/i, /does not provide (tax or )?legal advice|does not provide tax or legal/i, /Form ADV|Form CRS/i, /involves risk, including (the )?possible loss of principal/i, /^Securities and Exchange Commission/i, /^Please consult (your own qualified tax advisor or attorney|your advisor regarding|a (qualified|licensed) attorney)/i, /^Consult your qualified tax advisor and attorney/i, /^Any tax-related discussion/i, /^Any hypothetical illustrations, examples, or scenarios/i, /^Any examples presented are hypothetical/i, /^Actual results will vary based on individual circumstances/i, /^Individual results will vary/i];
const dec = s => s.replace(/<[^>]+>/g, ' ').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
const enc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const split = t => t.replace(/U\.S\. /g, 'U.S.\u00a0').split(/(?<=[.!?])\s+(?=[A-Z"(])/).map(x => x.replace(/\u00a0/g, ' ').trim()).filter(Boolean);
const specific = t => split(t).filter(s => !GENERIC.some(r => r.test(s)));
function matchDiv(s, start) {
  let d = 0,
    i = start;
  const re = /<\/?div\b/g;
  re.lastIndex = start;
  let m;
  while (m = re.exec(s)) {
    d += m[0] === '<div' ? 1 : -1;
    if (d === 0) return s.indexOf('>', m.index) + 1;
  }
  return -1;
}
function fixDisclosure(html, FULL, CONDENSED) {
  if (html.includes('Christopher Powers')) return {
    html,
    status: 'already'
  };
  const hi = html.search(/Important disclosures?/i);
  if (hi < 0) return {
    html,
    status: 'none'
  };
  const inline = /^Important Disclosures?:/i.test(html.slice(hi, hi + 30));
  const divStart = html.lastIndexOf('<div', hi);
  if (inline) {
    const end = matchDiv(html, divStart),
      old = html.slice(divStart, end),
      openTag = old.slice(0, old.indexOf('>') + 1);
    const extra = specific(dec(old).replace(/^Important Disclosures?:\s*/i, ''));
    const tag = openTag.replace(/color:#[0-9a-fA-F]{3,6}/, 'color:#5B6A71');
    const text = 'Important Disclosures: ' + CONDENSED.join(' ') + (CONDENSED[2].endsWith('.') ? '' : '.') + (extra.length ? ' ' + extra.join(' ') : '');
    return {
      html: html.slice(0, divStart) + tag + enc(text) + '</div>' + html.slice(end),
      status: 'inline',
      extra: extra.length,
      delta: text.length - dec(old).length
    };
  }
  // block: heading div inside a container; replace the paragraph divs that follow the heading
  const cStart = html.lastIndexOf('<div', divStart - 1),
    cEnd = matchDiv(html, cStart),
    hEnd = matchDiv(html, divStart);
  const rest = html.slice(hEnd, cEnd - 6);
  const paras = [],
    keepRows = [];
  let i = 0,
    pStyle = null;
  while (true) {
    const a = rest.indexOf('<div', i);
    if (a < 0) break;
    const b = matchDiv(rest, a);
    const seg = rest.slice(a, b);
    if (/^<div[^>]*display:flex/.test(seg)) {
      keepRows.push(seg);
      i = b;
      continue;
    }
    pStyle = pStyle || seg.slice(0, seg.indexOf('>') + 1);
    paras.push(dec(seg));
    i = b;
  }
  const extra = specific(paras.join(' '));
  const tag = (pStyle || '<div style="font-size:6.3px;line-height:1.45;color:#5B6A71">').replace(/color:#[0-9a-fA-F]{3,6}/, 'color:#5B6A71');
  const body = FULL.map(p => tag + enc(p) + '</div>').join('\n      ') + (extra.length ? '\n      ' + tag + enc(extra.join(' ')) + '</div>' : '') + keepRows.map(r => '\n      ' + r).join('');
  const newHtml = html.slice(0, hEnd) + '\n      ' + body + '\n    ' + html.slice(cEnd - 6);
  return {
    html: newHtml,
    status: 'block',
    extra: extra.length,
    delta: dec(body).length - paras.join(' ').length
  };
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "library/tools/fix-disclosure.js", error: String((e && e.message) || e) }); }

// library/tools/ingest.js
try { (() => {
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
  const out = {
    unmappedImages: {},
    added: [],
    kept: [],
    index: [],
    briefs: 0,
    noAnchor: []
  };
  const have = {};
  if (opts.onlyNew) for (const d of ['pieces']) {
    have[d] = new Set(await ls('library/' + d));
    have[d + '/b'] = new Set(await ls('library/' + d + '/briefs').catch(() => []));
  }
  const known = (series, f, brief) => opts.onlyNew && have[series + (brief ? '/b' : '')]?.has(f);
  for (const f of await ls(dir)) {
    if (!/^(?:[CUSW]?\d\d[ -]|[a-z][a-z0-9-]+\.md$)/.test(f)) continue;
    if (/^(CLAUDE|README|github)/i.test(f)) continue;
    if (opts.onlyNew && f.endsWith('.md') && known('pieces', f, 1)) continue;
    if (opts.onlyNew && f.endsWith('.dc.html') && known('pieces', f)) continue;
    let s = await readFile(dir + '/' + f);
    if (f.endsWith('.md')) {
      const series = 'pieces';
      await saveFile('library/' + series + '/briefs/' + f, s);
      out.briefs++;
      continue;
    }
    if (!f.endsWith('.dc.html')) continue;
    s = s.split(DS).join('../../');
    {
      const r = relink(s, MAP);
      s = r.html;
      if (r.missing.length) out.unmappedImages[f] = r.missing;
    }
    const isOP = s.includes('<doc-page>');
    const series = 'pieces';
    if (f.startsWith('00')) out.index.push(f);else if (s.includes('data-advisor-slot')) out.kept.push(f);else {
      const r = placeSlot(s);
      if (r.ok) {
        s = r.html;
        out.added.push(f);
      } else {
        out.noAnchor.push(f);
      }
    }
    await saveFile('library/' + series + '/' + f, s);
  }
  return out;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "library/tools/ingest.js", error: String((e && e.message) || e) }); }

// library/tools/personalize.js
try { (() => {
// Fill every [data-advisor-slot] with one advisor's roster record.
//   eval(await readFile(PATH_TO('library/tools/personalize.js')));
//   html = personalize(html, advisor)   // advisor = one record from data/advisors.json
function personalize(html, A) {
  const esc = t => String(t ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const set = (h, k, v) => h.replace(new RegExp('(<[^>]*data-advisor="' + k + '"[^>]*>)[^<]*(</)', 'g'), (m, a, b) => a + esc(v) + b);
  html = set(html, 'name', A.nameAsPublished || A.displayName);
  html = A.title ? set(html, 'title', A.title) : html.replace(/<[^>]*data-advisor="title"[^>]*>[^<]*<\/(div|span)>/g, '');
  html = A.email ? set(html, 'email', A.email) : html.replace(/ &middot; <span data-advisor="email"[^>]*>[^<]*<\/span>|<span data-advisor="email"[^>]*>[^<]*<\/span>/g, '');
  html = A.phoneDisplay ? set(html, 'phone', A.phoneDisplay) : html.replace(/ &middot; <span data-advisor="phone"[^>]*>[^<]*<\/span>|<span data-advisor="phone"[^>]*>[^<]*<\/span>/g, '');
  const img = A.headshotJpgUrl || A.headshotUrl;
  html = img ? html.replace(/<img data-advisor="headshot"(?! src)/g, () => '<img data-advisor="headshot" src="' + img + '"') : html.replace(/<div data-advisor="headshot-wrap"[^>]*><img data-advisor="headshot"[^>]*><\/div>/g, '');
  // Optional fields, used by the Why Farther deck's advisor slide; no-ops on pieces without them.
  const loc = [A.city, A.state].filter(Boolean).join(', ');
  html = loc ? set(html, 'location', loc) : html.replace(/<span data-advisor="location">[^<]*<\/span>/g, '');
  const creds = (A.credentials && A.credentials.length ? A.credentials : A.designations || []).slice(0, 4);
  html = creds.length ? html.replace(/(<p[^>]*data-advisor="credentials"[^>]*>)[\s\S]*?(<\/p>)/g, (m, a, b) => a + creds.map(c => '<span>' + esc(c) + '</span>').join('') + b) : html.replace(/<div class="mitem" data-advisor="credentials-wrap">[\s\S]*?<\/p>\s*<\/div>/g, '');
  if (A.profileUrl) {
    html = html.replace(/<a data-advisor="profile" href="[^"]*">[^<]*<\/a>/g, '<a data-advisor="profile" href="' + A.profileUrl + '">' + esc(A.profileUrl.replace(/^https?:\/\/(www\.)?/, '')) + '</a>');
    html = html.split('data-advisor-qr="ADVISOR_PROFILE_URL"').join('data-advisor-qr="' + A.profileUrl + '"');
  }
  return html;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "library/tools/personalize.js", error: String((e && e.message) || e) }); }

// library/tools/relink.js
try { (() => {
// Point a piece's local asset paths (assets/topic/01.jpg, assets/headers/…, wordmarks) at this design
// system's image bank, waves and logos. Mapping built by matching the Drive copies to the Figma image bank.
//   const MAP = JSON.parse(await readFile('library/tools/image-map.json')); eval(await readFile('library/tools/relink.js'));
//   html = relink(html, MAP)  -> { html, missing: [paths with no mapping] }
function relink(html, MAP) {
  const missing = new Set();
  html = html.replace(/(src=")(assets\/[^"]+)(")/g, (m, a, p, b) => {
    if (MAP[p]) return a + MAP[p] + b;
    missing.add(p);
    return m;
  });
  return {
    html,
    missing: [...missing]
  };
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "library/tools/relink.js", error: String((e && e.message) || e) }); }

// library/tools/slot.js
try { (() => {
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
    if (/^\s*<div style="font-size:8px;letter-spacing:\.06em;color:#9F8E75">/.test(next)) {
      s = s.slice(0, i) + '<div style="font-size:10px;color:#5B6A71">Farther Wealth Management · farther.com</div>' + s.slice(end);
      continue;
    }
    if (/^\s*<div style="font-size:7\.5px;letter-spacing:\.06em;color:#9F8E75">/.test(next)) {
      const was = /^<div data-advisor-slot data-was="iws"/.test(s.slice(i)) ? 'The Intelligent Wealth Series' : 'Farther Wealth Management';
      s = s.slice(0, i) + '<div style="font-size:9px;color:#5B6A71">' + was + ' · farther.com</div>' + s.slice(end);
      continue;
    }
    let a = i;
    while (a > 0 && /\s/.test(s[a - 1])) a--;
    s = s.slice(0, a) + s.slice(end);
  }
  return s;
}
function _matchClose(s, i) {
  // index just past the </div> that closes the <div at i
  const re = /<div\b|<\/div>/g;
  re.lastIndex = i;
  let depth = 0,
    m;
  while (m = re.exec(s)) {
    depth += m[0] === '</div>' ? -1 : 1;
    if (depth === 0) return m.index + 6;
  }
  return -1;
}
function placeSlot(s) {
  s = _removeSlot(s);
  if (s.includes('<doc-page>')) {
    // one-pager: last item of the disclosure block, i.e. the page's bottom-left corner
    const m = /<div style="display:flex;flex-direction:column;gap:[\d.]+px(?:;margin-top:auto)?">(?=\s*<div style="[^"]*color:#8A8A8A[^"]*">Important Disclosures)/.exec(s);
    if (!m) return {
      html: s,
      ok: false
    };
    const close = _matchClose(s, m.index) - 6;
    return {
      html: s.slice(0, close) + '  ' + SLOT_OP + '\n    ' + s.slice(close),
      ok: true
    };
  }
  // four-page guide: the cover footer's left cell (replaces "Farther Wealth Management · farther.com")
  const FOOT = /<div style="font-size:10px;color:#5B6A71">Farther Wealth Management[^<]*<\/div>/;
  if (!FOOT.test(s)) return {
    html: s,
    ok: false
  };
  s = s.replace(FOOT, () => SLOT_IW);
  return {
    html: s,
    ok: true
  };
  return {
    html: s,
    ok: false
  };
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "library/tools/slot.js", error: String((e && e.message) || e) }); }

// slides/deck-stage.js
try { (() => {
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→, PgUp/PgDn, Space, Home/End, number keys.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on idle.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: current slide index is saved to localStorage keyed by the
 * document path, so refresh returns you to the same place.
 *
 * Usage:
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const STORAGE_PREFIX = 'deck-stage:slide:';
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const pad2 = n => String(n).padStart(2, '0');
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
    }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    /* Tap zones for mobile — back/forward thirds like Stories.
       Transparent, no visible UI, don't block the overlay. */
    .tapzones {
      position: fixed;
      inset: 0;
      display: flex;
      z-index: 2147482000;
      pointer-events: none;
    }
    .tapzone {
      flex: 1;
      pointer-events: auto;
      -webkit-tap-highlight-color: transparent;
    }
    /* Only activate tap zones on coarse pointers (touch devices). */
    @media (hover: hover) and (pointer: fine) {
      .tapzones { display: none; }
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that connectedCallback injects
       into <head> (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      ::slotted(*:last-child) {
        break-after: auto;
        page-break-after: auto;
      }
      .overlay, .tapzones { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._storageKey = STORAGE_PREFIX + (location.pathname || '/');
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTapBack = this._onTapBack.bind(this);
      this._onTapForward = this._onTapForward.bind(this);
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      // Initial collection + layout happens via slotchange, which fires on mount.
    }
    disconnectedCallback() {
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        this._fit();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Tap zones (mobile): left third = back, right third = forward.
      const tapzones = document.createElement('div');
      tapzones.className = 'tapzones export-hidden';
      tapzones.setAttribute('aria-hidden', 'true');
      const tzBack = document.createElement('div');
      tzBack.className = 'tapzone tapzone--back';
      const tzMid = document.createElement('div');
      tzMid.className = 'tapzone tapzone--mid';
      tzMid.style.pointerEvents = 'none';
      const tzFwd = document.createElement('div');
      tzFwd.className = 'tapzone tapzone--fwd';
      tzBack.addEventListener('click', this._onTapBack);
      tzFwd.addEventListener('click', this._onTapForward);
      tapzones.append(tzBack, tzMid, tzFwd);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._go(this._index - 1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._go(this._index + 1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));
      this._root.append(style, stage, tapzones, overlay);
      this._canvas = canvas;
      this._slot = slot;
      this._overlay = overlay;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. Inject/update a single <head> style tag so the print
     *  sheet matches the design size and Save-as-PDF yields one slide per
     *  page with no margins. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
        document.head.appendChild(tag);
      }
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }';
    }
    _onSlotChange() {
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        // Determine a label for comment flow: prefer explicit data-label,
        // then an existing data-screen-label, then first heading, else "Slide".
        let label = slide.getAttribute('data-label');
        if (!label) {
          const existing = slide.getAttribute('data-screen-label');
          if (existing) {
            // Strip any leading number the author may have included.
            label = existing.replace(/^\s*\d+\s*/, '').trim() || existing;
          }
        }
        if (!label) {
          const h = slide.querySelector('h1, h2, h3, [data-title]');
          if (h) label = (h.textContent || '').trim().slice(0, 40);
        }
        if (!label) label = 'Slide';
        slide.setAttribute('data-screen-label', `${pad2(n)} ${label}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._totalEl) this._totalEl.textContent = String(this._slides.length || 1);
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
    }
    _loadNotes() {
      const tag = document.getElementById('speaker-notes');
      if (!tag) {
        this._notes = [];
        return;
      }
      try {
        const parsed = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(parsed)) this._notes = parsed;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
        this._notes = [];
      }
    }
    _restoreIndex() {
      try {
        const raw = localStorage.getItem(this._storageKey);
        if (raw != null) {
          const n = parseInt(raw, 10);
          if (Number.isFinite(n) && n >= 0 && n < this._slides.length) {
            this._index = n;
          }
        }
      } catch (e) {/* ignore */}
    }
    _persistIndex() {
      try {
        localStorage.setItem(this._storageKey, String(this._index));
      } catch (e) {/* ignore */}
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      if (this._countEl) this._countEl.textContent = String(curr + 1);
      this._persistIndex();
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay() {
      if (!this._overlay) return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _fit() {
      if (!this._canvas) return;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        return;
      }
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle.
      this._flashOverlay();
    }
    _onTapBack(e) {
      e.preventDefault();
      this._go(this._index - 1, 'tap');
    }
    _onTapForward(e) {
      e.preventDefault();
      this._go(this._index + 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing.
      const t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._go(this._index + 1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._go(this._index - 1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._go(this._index + 1, 'api');
    }
    prev() {
      this._go(this._index - 1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/deck-stage.js", error: String((e && e.message) || e) }); }

// trials/lauren-moone/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "trials/lauren-moone/doc-page.js", error: String((e && e.message) || e) }); }

})();
