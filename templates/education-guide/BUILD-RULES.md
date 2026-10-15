# Client Education Guide — build rules for Claude Design

Four-page, client-facing education explainer in the Farther brand. US Letter, print-first, 612 × 792 px per page (Letter at 72dpi, zoomed to 8.5 × 11 in on print). This is the format used for the 135 multi-page reports in the Intelligent Wealth Series.

## Files
- `EducationGuide.dc.html` — the wireframe. Every `[bracket]` is a slot to fill. Modules carry `data-slot` names.
- `Example - Tax-Loss Harvesting.dc.html` — a finished report to match for density, tone, and number treatment.
- `Guide Layouts 1a-1d.dc.html` — the four approved page-2 layouts.
- `assets/` — cream and navy wordmarks (explicit fills; the class-based logo files render black), a placeholder cover, and the example's cover.
- `support.js` — runtime. Keep it next to the `.dc.html` files.
- Stylesheets and bundle load from `../../` (the design system root). In a consuming project, point the three `<helmet>` paths at the bound `_ds/<folder>/` instead.

## Workflow
1. Read the source material first. Count what it actually contains before choosing a layout.
2. Duplicate `EducationGuide.dc.html` → `[NN] [Topic].dc.html`, one file per report.
3. Pick the page-2 layout from the content (below). Say which one and why in one line.
4. Replace every bracket. Never invent numbers; if the data won't support a chart, keep the table.
5. Check every page fits (see "Fit and print"). Trim copy before shrinking type.
6. Export with the "Print or PDF" button in the nav bar. The nav hides on print.

## The four pages
| Page | Slots | Rules |
|---|---|---|
| 01 Cover | `cover-image`, `series-line`, `headline`, `deck`, `headline-numbers`, `compliance-mark` | Top half full-bleed image. Cream wordmark top-left; series line directly under it in caps: `Intelligent wealth strategies: [Topic]`. Three headline numbers (value ≤ 8 chars, label ≤ 14 words). **These numbers never repeat on later pages.** No disclosure, no advisor block. |
| 02 Guide | `guide-intro`, `how-it-works`, `comparison`, `chart` | Headline ≤ 14 words, deck 35–55 words, 3–5 steps, one scenario table plus callout, and the piece's core chart. |
| 03 Fit and reference | `designed-for`, `key-benefits`, `considerations`, `quick-reference`, `farther-approach`, `questions` | 3 profiles, 3–4 benefits, 3 considerations, 5–7 quick-reference rows, 50–80 words on Farther's approach, 3 questions. |
| 04 Data appendix | `appendix-table`, `appendix-chart`, `disclosures` | Deep-dive tables and charts, then the full disclosure (verbatim, already in the wireframe), then the reference line. |

## Choosing the page-2 layout
- **1a Stat band + narrative** — a process to teach (3–5 steps), a scenario table, 2–3 hero stats. Default for strategy explainers. (The wireframe ships in 1a.)
- **1b Left spine** — a handful of fixed parameters define the topic (caps, eligibility, deadlines). Default for account and vehicle explainers.
- **1c Module grid** — 6+ independent facts with no dominant chart. Densest.
- **1d Hero chart** — one chart or number is the whole argument.

Tie-breakers: more prose than data → 1a. More parameters than prose → 1b. More facts than either → 1c. One chart worth more than all the words → 1d. Do not invent a fifth layout.

## Compliance
- Every page ends with a compliance mark bottom-right: `(1Word-MM-DD-YY)`, e.g. `DirectIndexing-07-31-26`. 7.5–8px, Clay 400, the last element on the page.
- Every non-cover page carries `Farther Wealth Management · farther.com`.
- The disclosure lives only on page 4, verbatim. Do not edit it.
- General education for all advisors: no advisor names, emails, phone numbers, or "Prepared for" blocks. Strip them from source material.
- Every illustrative figure carries a hypothetical-illustration note with its assumptions. Cite named sources (publication or regulator, year).

## Cover imagery
Pick from the design system image bank for a readable connection to the topic: architecture for business sales and equity comp; families for gifting, education, and trusts; landscapes for time horizons and transitions; still life (pen, compass, chess, bonsai) for deadlines, decisions, and long-term growth. Never assign alphabetically. Avoid the abstract neon set and the watermarked comps (`stocksy-*`, `shutterstock-*`, `adobestock-547151154-preview`).

## Data graphics
- At least one chart per report. Default: horizontal bar comparison built from the piece's own table figures.
- Steel Blue 700 / Smalt 500 / Sky Blue 300 on a Limestone track (`#F4F1EC`); Granite Blue for the darkest series. Pomegranate only for negative values.
- The chart replaces the table it would duplicate.
- Numbers in ABC Arizona Text Light; right-align numeric columns; bold the one number that matters in prose.

## Fit and print
- Each content page wraps its body in `[data-fit]`. The logic class scales an over-full page down, with a floor of 0.72. Aim to land at 1.0; if a page scales below ~0.9, cut copy.
- Never let a page overflow its 792px box: overflow prints as a near-blank extra sheet.
- Never leave a module half-empty. Cut it instead.
- Type floor at 1.0 scale: 6.3px disclosure, 7px notes, 9px body.

## Voice
Farther brand voice: second person, sentence case, no terminal period on single-sentence headlines, en dashes for ranges, Oxford commas, "and" over "&" in prose, no emoji. Keep user-supplied copy verbatim. Hedge planning language ("consider", "may"); no buy, sell, or hold recommendations.
