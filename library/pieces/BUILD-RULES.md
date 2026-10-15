# Project instructions

## What this project produces

Data-dense, client-facing **wealth management education 1-pagers** — US Letter,
print-first, in the Farther brand. The user will hand over reports, research, or
raw notes; the job is to turn each one into a single dense page (two pages only
when the content genuinely demands it, as in the Tax-Aware Long/Short SMA
example).

Reference examples live in `uploads/`:
- `Direct Indexing - Green.pdf` — 1 page, client-facing
- `Tax-Aware Long-Short SMA.pdf` — 2 pages, client-facing
- `Farther - Trump Accounts.pdf` — 2 pages, advisor quick reference

## Page structure — four pages

1. **Cover** — `Series Cover.dc.html` (see below). Carries the three headline
   numbers; **those numbers never repeat on later pages.**
2. **Guide** — the chosen layout from the four below: headline, deck, how it
   works, and the piece's core data graphic(s).
3. **Fit and reference** — who it's designed for, key benefits, important
   considerations, quick reference, how Farther approaches this, questions worth
   asking your advisor.
4. **Data appendix** — the deep-dive tables and charts, ending with the full
   disclosures and the reference line.

## The four approved layouts

All four live in `Education 1-Pager Wireframes.dc.html` (ids `1a`–`1d`). They are
the sanctioned structures. **Do not invent a fifth layout** unless asked.

| Id | Layout | Structure |
|---|---|---|
| **1a** | Stat band + narrative | Header rule → eyebrow/headline/deck → 3-stat band between hairlines → "How it works" with 4 numbered steps → two-column base: comparison table + callout, and a bar chart |
| **1b** | Left spine | Dark charcoal rail (190px) holding the title, deck, and 3 stacked key facts → right column of stacked modules: prose, a 4-column reference table, two sub-modules, an area/growth graphic |
| **1c** | Module grid | 4 metric tiles → 2-up (prose + donut) → 3 numbered advantages → 2-up (before/after ledger + chart) → 3-column footer strip. Densest option |
| **1d** | Hero chart | Limestone header band with headline + deck → one large chart occupying the upper third → 3 supporting stats → 2-up prose columns → charcoal footer bar |

## Choosing the layout — decide from the content, don't ask

Read the source material first, count what it actually contains, then pick:

- **1a** when the piece is a **narrative explainer with a process** — there is a
  sequence to teach ("how it works" in 3–5 steps), a headline scenario table, and
  2–3 hero stats. Default for strategy explainers (direct indexing, long/short
  SMA, DAFs, CRTs, 10b5-1 plans).
- **1b** when a handful of **fixed parameters define the topic** and belong in a
  persistent rail — contribution caps, eligibility, minimums, deadlines, account
  types — with a reference table and a growth graphic doing the rest. Default for
  account/vehicle explainers (Trump accounts, 529s, HSAs, backdoor Roth, DSTs).
- **1c** when the content is **many small independent facts** with no single
  dominant chart — comparisons, eligibility screens, pros/cons, ledger examples.
  Choose it when you have 6+ distinct content blocks that don't nest. Densest of
  the four; use it when cutting content isn't an option.
- **1d** when **one chart or one number is the whole argument** — a compounding
  curve, a break-even, a before/after over time. Choose it when the data would be
  wasted at quarter-page size. Weakest choice when there are more than ~5
  supporting facts.

Tie-breakers: more prose than data → 1a. More parameters than prose → 1b.
More facts than either → 1c. One chart worth more than all the words → 1d.

State the choice and the reason in one line before building. If the content
genuinely straddles two, build the better fit and say what the alternative was —
don't build both unless asked.

## Build rules

- One `Name.dc.html` per report, named for the topic.
- Page geometry: 612 × 792 px (US Letter at 72dpi) per page; fixed height, no
  overflow. Print-ready without extra print CSS.
- **The layout is a skeleton, not a straitjacket.** Match its structure, rhythm,
  and hierarchy; swap a bar chart for a donut, drop a module, or add a row when
  the content calls for it. Never let a module sit half-empty — cut it instead.
- These are general education pieces for all advisors — **no advisor names,
  emails, or personalized contact details anywhere.**
- **Every page carries a compliance mark in its bottom-right corner**, format
  `(1Word-MM-DD-YY)` — one topic word, then the date, e.g. `DirectIndexing-07-31-26`.
  Small (7–8px), Clay 400, always the last element on the page.
- The full disclosure paragraph is NOT on the cover — it lives on the final page.
  Every non-cover piece still ends with `Farther Wealth Management · farther.com`.
- Charts stay in the Steel Blue / Granite Blue / Smalt / Sky Blue family, with
  Charcoal and Limestone neutrals. Pomegranate only for negative values.
- Illustrative figures always carry a hypothetical-illustration note.

## The cover

`Series Cover.dc.html` is the standard front page: top half full-bleed brand
image, cream wordmark top-left, and directly under it — aligned to the wordmark —
the series line in small caps, `Intelligent wealth strategies: <topic>`. Lower
half carries the topic headline, one-line deck, the three headline numbers, the
farther.com line, and the compliance mark. No disclosure, no advisor block.

**Cover imagery must fit the topic.** Each piece has its own image at
`assets/topic/<NN>.jpg`, chosen from the design system's image bank for a
readable connection to the subject: architecture and skylines for business
sales, equity comp, and opportunity zones; families and generations for gifting,
education funding, and trusts; landscapes for time horizons, sequencing, and
transitions; still-life details (pen, compass, chess, bonsai) for signing
deadlines, ordering decisions, strategy, and long-term growth. Never assign an
image alphabetically or by convenience, and avoid the abstract neon/light-trail
set — it reads as generic art. Watermarked comps (`stocksy-*`, `shutterstock-*`,
`adobestock-547151154-preview`) are never used.

## Data graphics

Every piece carries at least one chart. The default pattern is a horizontal bar
comparison built from the piece's own table figures, in Steel Blue 700 /
Smalt 500 / Sky Blue 300 on a Limestone track — the chart replaces the table it
would otherwise duplicate. Never invent numbers to fill a graphic; if the data
will not support a chart, keep the table.

## Voice

Follow the Farther brand voice in the design system: second person, sentence
case, no terminal period on single-sentence headlines, en dashes for ranges,
Oxford commas, no emoji. Never rewrite copy the user supplies verbatim.
