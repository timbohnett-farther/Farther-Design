// Point a piece's local asset paths (assets/topic/01.jpg, assets/headers/…, wordmarks) at this design
// system's image bank, waves and logos. Mapping built by matching the Drive copies to the Figma image bank.
//   const MAP = JSON.parse(await readFile('library/tools/image-map.json')); eval(await readFile('library/tools/relink.js'));
//   html = relink(html, MAP)  -> { html, missing: [paths with no mapping] }
function relink(html, MAP) {
  const missing = new Set();
  html = html.replace(/(src=")(assets\/[^"]+)(")/g, (m, a, p, b) => {
    if (MAP[p]) return a + MAP[p] + b;
    missing.add(p); return m;
  });
  return { html, missing: [...missing] };
}
