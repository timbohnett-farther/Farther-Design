/* Farther official client disclosure: single source of truth. Verbatim; do not edit without Compliance.
   <script src="assets/compliance/disclosure.js"></script>
   FartherDisclosure.mount(el, { variant: 'print' | 'slide' | 'dark', length: 'full' | 'condensed' })
   FartherDisclosure.heading, FartherDisclosure.paragraphs, FartherDisclosure.text (plain, \n\n-joined)
   Also auto-fills any element with data-farther-disclosure="print|slide|dark" (+ optional data-length="condensed") on load.
   full: multi-page reports and packages. condensed: one-pagers, fact sheets, slides, space-limited pieces. */
(function () {
  const heading = 'Important disclosures', headingCondensed = 'Important Disclosures';
  const condensed = [
  "This material is for informational and educational purposes only and is not investment, tax, or legal advice or a recommendation to buy or sell securities or pursue any strategy. Farther Finance Advisors, LLC (“Farther”) is an SEC-registered investment adviser; registration does not imply a particular level of skill or training.",
  "Examples and projections are hypothetical, illustrative only, and do not guarantee future results. Investing involves risk, including possible loss of principal. Tax and legal outcomes depend on individual circumstances and applicable law.",
  "Farther does not provide tax or legal advice or prepare tax returns. Consult qualified professionals before acting. For Farther’s Form ADV Part 2A Brochure and Form CRS, visit adviserinfo.sec.gov or contact Christopher Powers, Chief Compliance Officer, at 628-246-8004"
];
  const paragraphs = [
  "This material is for informational and educational purposes only and does not constitute investment, tax, or legal advice, and is not a recommendation to buy or sell any security or pursue any strategy. Farther Finance Advisors, LLC (\"Farther\") is registered as an investment adviser with the U.S. Securities and Exchange Commission (SEC); such registration does not imply a certain level of skill or training. All examples, figures, and projections in this material are hypothetical and for illustrative purposes only; they are not a guarantee of future performance, and there is no assurance that any strategy will be profitable or achieve its objective. Investing involves risk, including the possible loss of principal. Tax and legal outcomes depend on each client's individual facts and circumstances and are subject to change based on changes in law.",
  "Farther provides investment advisory services on a wrap fee basis, generally charging a fee based on a percentage of assets under management (AUM). Because Farther's fee generally increases as the assets in a client's advisory account increase, Farther has an economic incentive to recommend that clients increase the assets it manages; this is a conflict of interest that clients should understand when evaluating any recommendation involving new deposits, consolidations, or rollovers.",
  "Farther does not provide tax or legal advice, does not prepare tax returns, and does not serve as a law firm or accounting firm. Consult your own qualified tax advisor and attorney before implementing any strategy described here. Additional information about Farther, including its Form ADV Part 2A Brochure and Form CRS, is available at www.adviserinfo.sec.gov or by contacting Farther's Chief Compliance Officer, Christopher Powers, at 628-246-8004."
];
  const V = {
    print: { h: 'font-size:8px;letter-spacing:.16em;text-transform:uppercase;color:#9F8E75', p: 'font-size:6.4px;line-height:1.5;color:#5B6A71', gap: 8 },
    slide: { h: 'font-size:24px;letter-spacing:.16em;text-transform:uppercase;color:#9F8E75', p: 'font-size:24px;line-height:1.45;color:#5B6A71', gap: 22 },
    dark:  { h: 'font-size:8px;letter-spacing:.16em;text-transform:uppercase;color:#B6D0ED', p: 'font-size:6.4px;line-height:1.5;color:#C9C9C9', gap: 8 }
  };
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  function html(variant, len) { const v = V[variant] || V.print, cd = len === 'condensed', ps = cd ? condensed : paragraphs, hd = cd ? headingCondensed : heading; return '<div data-disclosure-rendered style="display:flex;flex-direction:column;gap:' + v.gap + 'px;font-family:\'Fakt Pro\',\'Fakt\',system-ui,sans-serif"><div style="' + v.h + '">' + hd + '</div>' + ps.map(p => '<p style="margin:0;' + v.p + ';text-wrap:pretty">' + esc(p) + '</p>').join('') + '</div>'; }
  function mount(el, o) { el.innerHTML = html((o && o.variant) || el.getAttribute('data-farther-disclosure') || 'print', (o && o.length) || el.getAttribute('data-length') || 'full'); return el; }
  function scan() { document.querySelectorAll('[data-farther-disclosure]').forEach(el => { if (!el.querySelector('[data-disclosure-rendered]')) mount(el); }); }
  window.FartherDisclosure = { heading, paragraphs, condensed, text: paragraphs.join('\n\n'), condensedText: condensed.join('\n\n'), html, mount, scan };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scan); else scan();
  new MutationObserver(scan).observe(document.documentElement, { childList: true, subtree: true });
})();
