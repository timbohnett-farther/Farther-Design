# Farther Design System

> The Intelligent Wealth Platform — built from the ground up to unlock greater
> wealth for clients throughout their financial lives.

Farther is a wealth-management company and technology platform. Its product
serves two audiences:

- **Modern Wealth Builders** — HNW/UHNW individuals ($1M–$10M+ investable
  assets) who want growth, clarity, and one unified financial picture instead
  of fragmented accounts.
- **Elite Advisors** — high-performing RIAs and breakaway brokers
  ($50M–$500M+ AUM) who want to scale their book without the administrative
  drag of legacy tech.

The category Farther owns is **Intelligent Wealth** — expert advisors fused
with native, AI-driven technology. The brand deliberately sits in the
"winning quadrant": high benefit to both clients and advisors, and built
ground-up rather than retrofitted onto legacy systems.

This design system is the canonical kit for designing anything Farther —
product UI, marketing site, decks, social, stationery. Everything lives at
the **root** of this project; ui_kits/, slides/, preview/, and assets/
hang off it.

## Index

| Path | What it is |
|---|---|
| `colors_and_type.css` | All color + type CSS variables and semantic text classes. Import first on any new page. |
| `assets/logos/` | **Default logo: the Farther Intelligent Wealth lockup** — `wordmark-iw-dark.svg` (Steel 700, on light backgrounds) and `wordmark-iw-light.svg` (Limestone, on dark backgrounds and photos). Also the Symbol. The old plain wordmarks (`wordmark-navy`, `wordmark-cream`) are retired; don't use them. |
| `assets/icons/` | 31 variants of the Farther **F-symbol** (brand mark derivatives). |
| `assets/charts/sankey.js` | **Sankey (flow) diagram** renderer: `FartherSankey.mount(el, {nodes, links})` draws a static, print-ready SVG in brand colors. Use it for income distribution, estate distribution and asset allocation. Examples: `preview/chart-sankey-*.html`. |
| `assets/charts/estate-flow.js` | **Estate flow chart**: a stage-by-stage estate distribution (before the first death, at the first death, after the first death, after the second death) with an **order-of-death toggle**. `FartherEstateFlow.mount(el, {scenarios})`. Vertical layout for Letter reports, `orientation:'horizontal'` for 16:9 slides. Example data in `estate-flow-example.js`; cards in `preview/estate-flow-report.html` and `preview/estate-flow-slide.html`. |
| `assets/charts/farther-charts.js` | **15 finance chart types** as static, print-ready SVG: `fan` (Monte Carlo), `waterfall`, `allocation` (vs. target and ranges), `cashflow`, `growth` (growth of $10K), `brackets` (tax bracket fill), `periodic` (table of returns), `drawdown`, `treemap`, `bullet`, `heatmap`, `timeline`, `scatter` (risk vs. return), `tornado`, `choropleth` (U.S. tile map). Call `FartherCharts.<type>(el, spec)`. Sample specs are in `farther-charts-examples.js`; cards are in the Charts group (`preview/charts-*.html`). |
| `assets/infographics/farther-infographics.js` | **12 Farther infographic layouts** (native, no external library): `steps`, `stairs`, `roadmap`, `timeline`, `pyramid`, `funnel`, `cycle`, `compare`, `quadrant`, `tree`, `hub`, `cards`. Call `FartherInfographics.<type>(el, spec)`. Uses Farther icons, `dark` for navy grounds, `scale` for slides. Sample specs are in `farther-infographics-examples.js`; cards are in the Infographics group (`preview/ig-*.html`). Layout ideas were informed by antvis/infographic (MIT); no code was copied. |
| `assets/chart-samples/` | Reference images of Farther charts and diagrams (activity gauge, line+bar, pies, positioning matrix). |
| `assets/misc/` | Ellipses, frame backgrounds, graphic-element explorations. |
| `assets/images/` | **The image bank** — 196 brand-approved photos in 6 categories (web-ready `library/` + `thumbs/` + `manifest.json` + its own README). |
| *(external)* | **Advisor information** lives in [Farther-advisor-profile](https://github.com/timbohnett-farther/Farther-advisor-profile), not in this repo: `data/advisors.json` / `data/advisors.csv` (all 294 active advisors: name, designations, title, contact, location, team, profile URL, headshot URLs) plus its field guide `data/README.md`. Refreshed nightly. |
| `guidelines/client-report/` | **Client report wireframe** — `Client Report.html` (page archetypes, components, content rules, build workflow) + `CLAUDE.md` (90% page density, cover-image matching, required disclosure verbatim). |
| `guidelines/client-deck/` | **Client deck wireframe** — `Client Deck.html` (10 slide archetypes, report-to-deck sequence, slide density, type/color at slide scale, checklist, required disclosure). Shares rules with `guidelines/client-report/CLAUDE.md`. |
| `templates/benefits-guide/` | **Benefits & Equity Guide / data fact sheet template** — `BenefitsGuide.dc.html` (one-page US Letter wireframe with named slots), a finished QCOM example, and `CLAUDE.md` (slot limits, verbatim footer disclaimer, style rules). |
| `templates/education-guide/` | **Client Education Guide template** — `EducationGuide.dc.html` (four-page US Letter explainer: cover, guide, fit and reference, data appendix), four page-2 layouts (`Guide Layouts 1a-1d.dc.html`), a finished Tax-Loss Harvesting example, and `BUILD-RULES.md` (slot limits, layout choice, compliance mark, verbatim disclosure). |
| `guidelines/one-pager/` | **1 Pager wireframes** — `1 Pager Design Wireframes.dc.html`: four Letter-size layouts for advisor one-page references (1a stat strip, 1b chart-led, 1c fact rail, 1d quadrants). |
| `templates/data-report/` | **Data-heavy single report**: six US Letter wireframes (1a–1f) for single-page reports with lots of data (KPIs, charts, maps). Each has a header, a tile grid, the advisor slot bottom-left and a disclosure band. Also shown as a card in the Reports group (`guidelines/data-report/`). |
| `templates/client-review/` | **Client Review Package**: three-layer quarterly review wireframes: a 10-page client executive report, a 3-page appendix, and a 2-page internal advisor meeting brief. Reuses the Client Report cover, the data-report layouts, the estate flow chart and the Farther icons. Card in the Reports group (`guidelines/client-review/`). |
| `guidelines/compliance/DISCLOSURE.md` + `assets/compliance/disclosure.js` | **Official client disclosure** (single source of truth). Verbatim text, placement rules, and a drop-in `data-farther-disclosure` element. Card: Brand › Official disclosure. |
| `templates/ips/` | **Investment Policy Statement**: two-page client IPS wireframe (mandate; guidelines and governance) plus an internal advisor QA page, with build rules (`BUILD-RULES.md`) and an extraction schema (`ips-schema.json`). Card in the Reports group. |
| `email/` | **Advisor newsletter email**: `Advisor Newsletter.html`, a send-ready, image-free HTML email (600px, table layout, Outlook and dark-mode safe) with masthead, numbered insights, market snapshot, pull quote, deadline calendar, CTA button, advisor signature and the condensed disclosure. |
| `templates/why-farther/` | **Why Farther deck**: 19-slide client pitch for complex families (1920×1080). It was copied from the "Why Farther Deck v2 Steel" project, with Farther icons and the disclosure slide added and the advisor filled from the roster. Also in the client material library. |
| `templates/client-decision-deck/` | **Client Decision Deck**: a decision-led 16:9 deck for one client household's meeting (not part of the education series). 13 slide wireframes with speaker notes (client question banner, connection bar, coordination map, strategy comparison and decision cards, scenario labels, standard closing, disclosure) plus a one-page meeting takeaway. Card in the Reports group. |
| `templates/group-education-deck/` | **Group Education Deck**: the education-series presentation, a 10-slide broad-audience deck for seminars and webinars with no personal data. Standard ten-step arc, engagement prompts, full presenter notes per slide, and the disclosure slide. Card in the Reports group. |
| `image-library.html` | Visual browser for the image bank — filter by category, click any image to copy its path. |
| `fonts/` | Webfont fallbacks (see Visual Foundations > Typography note). |
| `preview/` | Design-System tab cards (colors, type, components, etc.). |
| `ui_kits/marketing/` | Marketing site (farther.com) UI kit — header, hero with Waves of Wealth, stats, features, advisor grid, client quote, CTA, footer. |
| `ui_kits/advisor-app/` | In-product **advisor workspace** — dark rail nav, KPI row, stacked-bar book growth, client list, task list, allocation donut, IW opportunity card. |
| `slides/sample-deck.html` | 6-slide Farther-brand deck (cover → stat hero → pillars → dark chart → client story → closer). Built on `<deck-stage>`. |
| `SKILL.md` | Agent/skill manifest — makes this kit invokable by name. |
| `research/` | Extracted text and reference material from the source Brand Guidelines PDFs. |

## Source materials

All brand material was provided via the `uploads/` folder. That folder is
**local-only** (gitignored) — its ~89MB of raw PDFs aren't committed; the
extracted text agents need already lives in `research/`. Primary sources:

- **Farther Brand Guidelines — December 2025** (`Farther BG_*.pdf`, ~20
  chapters covering strategy, audience, messaging, tone, implementation,
  sample copy)
- **Visual identity system** — `Farther_Visual_Identity_*.pdf` (wordmark,
  symbol, tagline lockup, color use, clearspace, incorrect usage)
- **Color system** — `Farther_Color_*.pdf` (palette, primary/secondary/accent
  scales, accessibility, ratio, in-use examples)
- **Typography system** — `Farther_Typography_*.pdf` (primary: ABC Arizona
  Text; secondary: Fakt Pro; house: Garamond + Avenir; hierarchy, in-use)
- **Graphic elements** — `Farther_GraphicElements*.pdf` ("Waves of Wealth"
  motion/color/growth), `Frosted Glass*.pdf`, `Diagrams.pdf`, `Charts*.pdf`,
  `Icons.pdf`
- **Asset images** — `Activity gauge.png`, `Line and bar chart.png`, advisor
  association pie charts, positioning matrix, ellipse/frame graphics
- **"In practice"** — `Farther-1.pdf` through `Farther-20.pdf` (website,
  social, deck, advisor portrait, lifestyle, and video graphics sections)
- **Figma: "2026 Image Bank.fig"** — the brand image library (Image-Library
  page, ~200 frames). All photographs in `assets/images/` were exported from
  this file. Other pages (Image-Guidelines, Slide-Backgrounds, In-Depth
  Guides, FFO images) exist in the file but were out of scope for this pass.
- **GitHub: [timbohnett-farther/FartherDesign](https://github.com/timbohnett-farther/FartherDesign)**
  — the base design system (tokens, fonts, assets, UI kits, slides, preview
  cards) this project imported and extends. Explore it for history and
  deeper reference material.
- **GitHub: [timbohnett-farther/Farther-advisor-profile](https://github.com/timbohnett-farther/Farther-advisor-profile)**
  — the advisor roster, refreshed nightly from the Sanity CMS behind
  farther.com. `data/advisors.json` and `data/advisors.csv` are copied into
  `data/`. Use it for any design that names or pictures real advisors.

No farther.com codebase was provided. UI kits are reconstructed from the
brand PDFs; if you (the reader) have the live codebase or product Figma,
attach it so the kits can be tightened against ground truth.

---

## Content fundamentals

The Farther brand voice is **Proactive, Precise, Empowering**. It speaks
with the clarity of a tech innovator and the conviction of a trusted partner.

**Five "we are, but not…" dials:**

1. **Visionary, but not idealistic.** Forward-thinking, grounded in data and
   mechanics. Say "Our platform builds optimized roadmaps that evolve as your
   life evolves" — not "Imagine a world where financial freedom is effortless."
2. **Precise, but not cold.** Outcome-focused, human-centered, no jargon.
   Say "We use direct indexing and asset location to optimize your portfolio's
   tax efficiency" — not "We leverage algorithms to optimize your alpha
   coefficient."
3. **Candid, but not combative.** Direct and confident without attacking
   competitors. Say "By automating complex strategies that others often miss,
   clients can gain up to 1–3% greater after-tax returns" — not "Stop losing
   money with outdated advisors."
4. **Accessible, but not simplistic.** Respect the audience's intelligence.
   Say "We provide exclusive access to top-tier investment strategies
   typically reserved for family offices" — not "We make investing super easy."
5. **Grounded, but not nostalgic.** Credibility comes from substantiated
   outcomes, not legacy-bank nostalgia. Cite numbers (4x AUM growth, 1–3%
   after-tax lift) over "bespoke white-glove stewardship."

**Second person.** Copy addresses the reader as "you" — "Know exactly where
you stand, at all times." Farther says "we" when describing the firm. Never
"our customers" or "our partners."

**Casing & punctuation.** Strict rules from the guidelines:

- **Sentence case throughout.** Title Case only for data viz, tables,
  reports.
- **No period on single-sentence headlines.** Multiple sentences keep their
  periods.
- **"and" not "&"** wherever space allows.
- **Oxford commas.** Always.
- **Em dash with spaces** for emphasis: "Modern, but rooted — innovative,
  but reliable."
- **En dash without spaces** for number ranges: 2024–2026, 1–3%, $1M–10M+.
- **Numeric abbreviations:** 7B+, $84T–$124T, 4.6k — never "Trillion,"
  "Billion," "thousand."
- **Hanging punctuation** for inline quotes, numbered lists, and bullets.

**Vocabulary.**

- Category: "Intelligent Wealth Management" (never plain "wealth management").
- Product: "Intelligent Wealth Platform" (capitalized).
- Platform qualifiers (use): **Native, Unified, Proactive, Precise, Active**.
  Avoid: Revolutionary, Disruptive, Advanced.
- Clients: "Modern wealth builders" — never "HNW individuals," "customers,"
  "users."
- Advisors: "Elite advisors" or "expert advisors" — never "FAs," "our
  partners."

**Emoji.** Not used. The brand is premium-but-not-gatekept; emoji feel
consumer-casual and off-tone. Icons from the line-drawing system and the
F-symbol do the expressive work.

**Example one-liners** (pulled from the Sample Copy page):

- "Built for greater wealth"
- "Complexity, clarified"
- "Action over admin"
- "Unified financial ecosystem, total financial clarity"
- "Unlock your full financial potential"

---

## Visual foundations

### Color

Three tiers — **Primary** does the heavy lifting, **Secondary** adds variety,
**Accent** is used sparingly (especially in charts).

**Primary.**

- **Limestone 50** `#F8F4F0` — dominant warm-neutral background. "Soft and
  grounded… calm simplicity and effortless natural refinement."
- **Charcoal Black 900** `#333333` — primary text and high-contrast surfaces.
  "Quiet confidence, balancing strength and sophistication." Never use pure
  `#000`.
- **Clay 400** `#9F8E75` — warm earth tone for graphic elements and the Waves
  of Wealth gradient. Fails AA for body copy — only use at large sizes or as
  a surface.
- **White** `#FFFFFF` — secondary background, cards, and high-contrast pops.

**Secondary (cool, trust-signalling blues).**

- **Steel Blue 700** `#3B5A69` — **wordmark lock color** and primary brand
  blue. Depth, trust, refined determination.
- **Granite Blue 800** `#31465C` — deepest blue for enduring strength.
- **Slate Blue 500** `#5B6A71` — cool neutral, subtle and discreet.
- **Smalt Blue 500** `#557A89` — crisp focus, modern capability.
- **Sky Blue 300** `#B6D0ED` — optimistic lightness, used on lighter
  surfaces.

**Accent (reserved, mostly for charting).**

- **Pomegranate 500** `#CE3657` — urgency and negative chart values.
- **Serene Aqua 500** `#3CC1D3` — positive data points, moments of clarity.
- **Bronze 400** `#B68A4C` — the most reserved color; used for the custom
  line-drawing icons, special invitations, and stationery only.

All full scales (25/50/100/…/900) are in `colors_and_type.css`.

**Color ratio.** Roughly 70% primary (Limestone + Charcoal dominant), 25%
secondary (Steel/Slate/Smalt/Granite), 5% accent.

**Accessibility.** Charcoal-on-Limestone is the workhorse pairing (contrast
11.5). Never use Charcoal on Clay for small text (3.97 → AA large only,
FAIL for body).

### Typography

**Brand fonts** (external-facing product, site, decks):

- **ABC Arizona Text** (Display, serif) — Headlines, titles, numbers. Sharp
  serifs with soft flares, humanist, "historically rooted and visually
  novel." Weights: Light / Regular / Medium / Bold. Used at 110% leading,
  -3% tracking, sentence case.
- **Fakt Pro** (Sans, grotesque/geometric) — Body, subheads, eyebrows, CTAs.
  Weights: Blonde / Normal / Medium / Semibold / Bold.

**House fonts** (internal documents only — memos, letters):

- **Garamond (EB Garamond)** — primary.
- **Avenir** — secondary.

**Type hierarchy** (exact settings from the guidelines):

| Style | Face | Leading | Tracking | Case | Notes |
|---|---|---|---|---|---|
| Eyebrow | Fakt | 120% | +5% | UPPER | "SUMMARY" |
| Headline / Title | Arizona Text | 110% | −3% | Sentence | No terminal period (unless multi-sentence) |
| Subhead | Fakt Normal | 110% | −2% | Sentence | |
| Body | Fakt Normal | 140% | −3% | Sentence | |
| Numbers | Arizona Text Light | 100% | −3% | Sentence | Big stat treatment |
| CTA / Tag | Fakt Regular | 100% | −2% | Sentence | |

> **Font status.** Licensed and live in `fonts/`:
>
> - **ABC Arizona Text** — Light (300) + Light Italic (300, italic)
> - **Fakt Pro** — Blonde 300, Normal 400, Medium 500, Semibold 600, Bold 700 — each with matching italics
>
> Every headline, body line, button, and eyebrow across this kit now renders
> in the real brand fonts.
>
> Still substituted (narrow use):
>
> - **Arizona Text Regular/Medium/Bold** → **Fraunces** (only hit if a
>   heavier serif is explicitly requested — the brand almost always uses Light)
> - **Garamond / Avenir** (house fonts, internal-only) → EB Garamond / Nunito Sans

### Spacing, radii, elevation

The guidelines don't define an explicit spacing token scale; I've proposed a
4-point system (4, 8, 12, 16, 24, 32, 48, 64, 96, 128) that matches the
quiet, grid-based layout used across the brand PDFs.

- **Radii:** small (4–6), medium (10–12), and **pill** (9999) for CTAs.
  Cards typically use 12–16. The symbol's container square uses 12.
- **Borders:** Hairline `1px solid #E3D3C5` (Limestone 200) on Limestone
  backgrounds; `1px solid #E7E7E7` (Charcoal 100) on white.
- **Shadows:** The brand is mostly flat. When elevation is needed it's a
  soft, low-opacity drop in a warm tint:
  `0 1px 2px rgba(51,51,51,0.04), 0 8px 24px rgba(51,51,51,0.06)`.
  No glows, no neon, no inner shadows.

### Backgrounds, surfaces, texture

- **Default canvas** is Limestone 50 (`#F8F4F0`), not white. White is
  reserved for cards on Limestone, or for all-white "clarity" product
  moments.
- **Waves of Wealth** — the signature brand surface: 3D-rendered
  draped/topographic wavescapes with soft volumetric shading and bright
  crest highlights. Six brand-approved tonal panels ship in
  `assets/waves/` (steel, slate, aqua, limestone, sky, smalt). Used
  full-bleed behind hero moments and section covers. See
  `preview/background-waves.html` for the full set; steel/slate/limestone/
  sky are hi-res originals, aqua/smalt are reference crops.
- **Frosted glass** — soft, elevated surfaces used as dividers and floating
  panels. Implemented as `backdrop-filter: blur(24px)` over Limestone,
  with a 1px Limestone-200 hairline.
- **Ellipse imagery** — out-of-focus warm-neutral blobs
  (`assets/misc/ellipse-*.png`) — used as ambient backdrops behind avatars
  or stats.

### Imagery

- **Modern families** — aspirational, elevated, contemporary. Covers a range
  of demographics, age brackets, and locations. Warm, natural light; never
  corporate stock.
- **Client-advisor moments** — authentic, intimate, beyond a typical office.
- **Advisor portraits** — artful, not corporate head shots; show nuance and
  personalization.
- **Lifestyle** — aspirational but believable.

**The image bank ships in this kit.** `assets/images/library/` holds 196
brand-approved photographs (max edge 2400px, web-ready JPEG) with 360px
thumbnails in `assets/images/thumbs/` and a machine-readable
`assets/images/manifest.json`. Six categories:

| Category | Count | Use for |
|---|---|---|
| Advisors and work | 51 | Advisor portraits, client meetings, professional verticals |
| Families and lifestyle | 33 | Modern-family and aspirational lifestyle moments |
| Landscapes and nature | 33 | Calm section breaks, journey metaphors |
| Cities and architecture | 13 | Skylines, bridges, modern buildings |
| Thematic and abstract | 45 | Full-bleed slide/section backgrounds, dark signal moments |
| Still life and details | 21 | Macro objects, seasonal, editorial details |

Browse them in `image-library.html` or the Imagery group of the Design
System tab. Full per-image catalog and usage rules: `assets/images/README.md`.
Avoid the few watermarked comps flagged there (`stocksy-*`, `shutterstock-*`,
`adobestock-547151154-preview`) in shipping work.

### Iconography

Two parallel icon systems. See `ICONOGRAPHY` below.

### Motion & interaction

- **Motion metaphor:** "Waves of Wealth" — steady, reliable growth. Easing
  is `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quint), calm and confident —
  never bouncy.
- **Hover:** primary buttons darken (to Steel Blue 800). Secondary buttons
  fill with a 6% Charcoal overlay. Link hover: opacity 1 with a 1px
  underline appearing.
- **Press:** subtle `translateY(1px)` + darker fill; no shrink/bounce.
- **Transitions:** default 160ms ease-out for color/opacity, 240ms for
  size/position. No long flashy animations in product UI.
- **Blur & transparency:** used for elevated panels (frosted glass) and
  sometimes in charts (gauge rings fade to 50% opacity). Avoid decorative
  translucency on text.

### Layout rules

- Generous whitespace; the PDFs use page-width-sized negative space as a
  design element.
- Fixed marketing-site header; sticky product-app top bar.
- **Footer** uses Charcoal 900 with Limestone 50 text.
- Never use rounded-corners-with-left-color-accent cards (AI trope). Cards
  are either all-white with a hairline, or frosted glass.
- Pie/donut charts consistently use the **Steel Blue / Granite Blue / Smalt
  / Sky Blue** family for segmentation.

---

## Iconography

Farther uses **two distinct icon systems**:

### 1. Brand symbol family

31 hand-made variants of the **F-symbol** live in `assets/icons/symbol-*.svg`.
These are all derivatives of the wordmark's "F" with trailing strokes that
build the brand's growth-and-expansion story. They are **brand marks, not
UI icons** — use them for:

- Avatar/favicon-style brand moments
- Decorative section dividers
- Hero graphics and loading placeholders
- Social post templates

**Do not** use them in buttons or as inline status icons.

### 2. Line-drawing UI/diagram icons

The guidelines define a **custom conceptual icon family** with these
construction rules:

- 50×50 artboard, content centered
- ~1pt stroke, **rounded endpoints, rounded joins**
- Slight corner radius after construction
- **Rendered in Bronze 400 (`#B68A4C`)** when used in diagrams

No SVG sources of this library were included in the uploads. Until the
library lands, this kit **substitutes [Lucide](https://lucide.dev)** — 1pt
stroke, rounded line-cap/join, matching visual weight. Lucide is loaded via
CDN in every page that needs icons:

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="trending-up"></i>
<script>lucide.createIcons();</script>
```

**Farther diagram icons (`assets/icons/diagrams/`).** 30 finance line icons drawn to this spec (50×50 artboard, 1.4 stroke, rounded caps and joins, `currentColor`): advisor, allocation, bank, bonds, business, calculator, cash, coin, contract, debt, dividends, donation, education, estate, family, global, goals, growth, insurance, investment, ledger, performance, real-estate, retirement, savings, security, tax, transfer, trust, wallet. Use them at 32px and up. Color them Bronze 400 in diagrams and Steel 700 in UI. Preview card: `preview/icons-farther.html`. **Use them in reports and callouts:** load `assets/icons/farther-icons.js` and write `<span data-farther-icon="tax">`. The span takes its color from CSS `color` (a plain `<img>` of the SVG can't be recolored). Callout, stat tile, icon list and section-marker patterns: `preview/icons-callouts.html`. For concepts not in the set, or for UI sizes of 24px and below, use Lucide at stroke 1.5.

**Emoji** — never used in brand materials.

**Unicode as icons** — the brand occasionally uses the em-dash (—) as a
connective glyph, and the degree-of-motion arrow (→, ↗) in stat tiles.
Otherwise, no.

---

## Iterating on this kit

Things that would tighten this kit a lot, if you can share them:

1. **Licensed Arizona Text + Fakt Pro font files** (right now everything
   renders in Google-Fonts substitutes).
2. **The farther.com codebase, or a Figma link** — the current UI kits are
   reconstructed from the PDFs; code or Figma would let us match real
   components pixel-perfectly.
3. **The custom line-drawing icon library** (the Bronze-rendered set
   described in `Farther-7.pdf`).
4. **Photography** — any brand-approved modern-families, advisor-portrait,
   or lifestyle imagery.


**Diverging scale (chart negatives → positives).** Seven steps, from large negative to large positive: `--diverge-neg-3` Pomegranate 500 #CE3657, `--diverge-neg-2` Pomegranate 300 #DE788E, `--diverge-neg-1` #EFBDC8, `--diverge-0` Clay 100 #E6E3DB (neutral or flat), `--diverge-pos-1` #BFEBF1, `--diverge-pos-2` Serene Aqua 300 #7FD6E2, `--diverge-pos-3` Serene Aqua 500 #3CC1D3. Use it for heat maps, return tables, gain/loss cells and change maps. Use white text on `--diverge-neg-3` and ink #333 on every other step. Don't use red-green.
