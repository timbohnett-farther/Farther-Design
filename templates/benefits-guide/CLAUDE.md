# Benefits & Equity Guide — build rules for Claude Design

One-page, advisor-facing brief on a public company's employee benefits and equity program. Built as a Design Component on `doc-page` (US Letter, 8.5 × 11, full bleed).

## Files
- `BenefitsGuide.dc.html` — the wireframe. Every `[bracket]` is a slot to fill. Sections carry `data-slot` names.
- `Example - QCOM Benefits Guide.dc.html` — a finished page to match for density and tone.
- `doc-page.js`, `support.js` — runtime. Keep next to the `.dc.html` files.
- Stylesheets and bundle load from `../../` (this design system's root). In a consuming project, point the three `<helmet>` paths at the bound `_ds/<folder>/` instead.

## Workflow
1. Duplicate `BenefitsGuide.dc.html` → `[TICKER] Benefits Guide.dc.html`. The same page anatomy works for other one-page data fact sheets: keep the slots, retitle modules to fit the subject.
2. Source content from the 10-K, DEF 14A (proxy), and public benefits pages. Record filing names and dates for the header and footer.
3. Replace every bracket. Remove no sections; swap a module title only if the company lacks that program (e.g. "Deferred Comp" → "Pension").
4. Check the page fits: no overflow, no big empty band above the anchors. If short, extend bullets; if long, trim bullets before shrinking type.
5. Export via Save as PDF.

## Page anatomy (top → bottom)
| Slot | Content | Limit |
|---|---|---|
| header | Farther · Advisor Intelligence; "Internal · Advisor Prep"; primary filings + dates | 1 line |
| title | Eyebrow, company legal name, ticker · exchange, sector, HQ, FY end, employees/shares | name ≤ 40 chars |
| overall-read | Italic summary: characterization → planning value → watch items | 50–70 words |
| snapshot | 4 stat tiles. Top-border color = meaning: **aqua** positive benefit, **steel** retirement, **clay** scale, **pomegranate** risk | value ≤ 8 chars |
| modules (left) | Retirement & Savings + aqua highlight callout; Equity & Stock + steel ESPP callout | 4 bullets each, ≤ 25 words/bullet |
| modules (right) | Cash & Bonus; Deferred Comp; Health, Family & Lifestyle | 3–4 bullets each |
| executive | "What they get" vs "By design — what [Company] omits" + Advisor angle | 4 bullets per side |
| risk | Pink flagged band: concentration + company-specific risk with figure | 50–70 words |
| anchors | ★ Advisor Talking Points (7, imperative, bold lead) + ★ Key Dates (8 rows) | pinned to bottom |
| footer | Disclaimer (verbatim below) + advisor name, title, email, phone | — |

## Required footer disclaimer (verbatim, then add filing list)
> Internal use only — advisor preparation. Information is based on Corporate Filings, SEC/EDGAR Documentation, and Public Documentation.

## Style rules
- Inline styles only; Farther tokens via `var(--*)`. No new colors.
- Type floor: 7pt footer, 7.6pt tables, 8pt body. Headings Fakt caps; names and numbers ABC Arizona Light.
- Numbers exact from filings; en dash for ranges (1–3%); "and" over "&" in prose.
- Hedge planning language ("consider", "confirm", "may"). No buy/sell/hold recommendations.
- No emoji. No left-border accent cards.
