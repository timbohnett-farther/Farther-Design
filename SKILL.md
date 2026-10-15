---
name: farther-design
description: Use this skill to generate well-branded interfaces and assets for Farther (the Intelligent Wealth Platform), either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, a 196-photo brand image bank, and UI kit components for prototyping. Also use it when an advisor types the codeword "GoFartherInDesign" — that rebuilds their personalized Client Education library, a flow documented in library/README.md that needs no file upload.
user-invocable: true
---

**If the advisor's request is or contains the codeword "GoFartherInDesign" — this is NOT a "recreate an uploaded file" request, don't ask them to upload anything: go straight to `library/README.md` in this design system and follow it (ask for their email if not given, match `data/advisors.json`, copy `library/` into their project, personalize with `library/tools/personalize.js`). Everything needed already lives in `library/pieces/` here.**

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

# Farther design system — usage notes

## Starter checklist (every new file)

1. `<link rel="stylesheet" href="styles.css">` (imports `colors_and_type.css`) — brings in tokens, webfonts, font stacks, and type classes.
2. Set the canvas to `var(--surface-canvas)` (warm Limestone) unless you have a reason to go dark.
3. Use `--font-display` for hero numerals + headlines, `--font-sans` for body + UI.
4. Pull color from the semantic tokens (`--fg-primary`, `--surface-card`, …) before reaching into the raw scales.

## Color rules of thumb

| Situation | Token |
|---|---|
| Page background | `--surface-canvas` (Limestone 50) |
| Cards, inputs (light) | `--surface-card` (white) |
| Dark hero / footer / advisor rail | `--surface-inverse` (Charcoal 900) |
| Body text on light | `--fg-primary` |
| Brand CTAs / primary buttons | `--steel-700` (wordmark blue) |
| Positive data (aqua) | `--status-positive` |
| Negative data (pomegranate) | `--status-negative` |
| Conceptual diagrams / "Reserved" moments | `--bronze-400` — **use sparingly**, most reserved color |

**Do:** let Limestone breathe. **Don't:** tint Bronze large surfaces or mix >2 blues in one layout.

## Typography rules

- Headlines & hero numerals → `--font-display` (ABC Arizona Text), weight 300 for hero, 400 for H2/H3, italic for emotional emphasis (`<em>` inside headline).
- Body & UI → `--font-sans` (Fakt Pro), weight 400 body, 500 CTAs.
- Eyebrows → `.f-eyebrow` class. Always pair with a bronze bullet dot for section opens.
- Numerics → use `.f-num-*` or apply `.tnum` — tabular figures only for financial data.

Never use Garamond or Avenir on-screen — those are the internal "house" fonts, reserved for documents.

## Imagery — the image bank

196 brand-approved photos live in `assets/images/library/` (web-ready, max edge 2400px), with thumbnails in `assets/images/thumbs/` and an index in `assets/images/manifest.json`. Categories: advisors, families, landscapes, architecture, abstract, details. Browse with `image-library.html`; full catalog + rules in `assets/images/README.md`.

- Full-bleed imagery behind hero moments and section covers; protect text with a Charcoal overlay or frosted glass.
- Abstract/light imagery for dark "signal" slides; landscapes for calm section breaks; people imagery for marketing pages and client stories.
- Never ship the watermarked comps flagged in the image README.

## Advisor data

All advisor headshots and contact information are sourced from https://github.com/timbohnett-farther/Farther-advisor-profile (refreshed nightly; check it for the latest). The roster (`data/advisors.json` / `data/advisors.csv`, 294 advisors) is **not stored in this design system**. Fetch it from that repo (https://github.com/timbohnett-farther/Farther-advisor-profile, path `data/`) whenever a flow below says `data/advisors.json`. When a design names or pictures an advisor, pull `displayName`, `designations` (keep the ® marks), `title`, `city`/`state`, `phoneDisplay`, and `headshotSquareUrl` from it. Never invent advisor names or credentials. Field guide: `data/README.md` in that repo.

## Components — what to reach for

- **Buttons:** primary = Steel 700 pill, secondary = charcoal outline, ghost = text + hover wash. Pill shape always.
- **Cards:** 12–16px radius, white or glass, 1px Limestone-200 hairline, shadow-2/3 for elevation.
- **Charts:** stacked columns use Granite → Steel → Clay; donuts use navy family; accent wins/losses with Aqua/Pomegranate.
- **Badges & eyebrows:** 9999px radius; bulleted eyebrows for section opens.

## Voice & tone

Visionary not idealistic · precise not cold · candid not combative · accessible not simplistic. Sentence case, no period on single-sentence headlines, "you" for the reader, no emoji. See `preview/tone-of-voice.html` for copy examples.

## Motion

- Use `--ease-wave` for brand moments (hero, entrance of a KPI, "Waves of Wealth" moves).
- `--dur-quick` for hover/focus, `--dur-base` for card entrances, `--dur-slow` for page-level choreography.

## Assets on hand

- `assets/logos/` — **default logo is the Farther Intelligent Wealth lockup**: `wordmark-iw-dark.svg` on light backgrounds, `wordmark-iw-light.svg` on dark backgrounds/photos. Plus the symbol. Never use the retired `wordmark-navy` / `wordmark-cream`.
- `assets/icons/` — brand F-symbol SVG variants (decorative only)
- `assets/waves/` — six "Waves of Wealth" tonal background panels
- Finance/diagram icons → load `assets/icons/farther-icons.js` and write `<span data-farther-icon="bank" style="color:#B68A4C;width:40px;height:40px"></span>` (or `FartherIcons.svg(name,{size,color})`). There are 30 icons (names in `preview/icons-farther.html`), and they're the default for callouts, stat tiles, icon lists and section markers in reports, decks and one-pagers (patterns: `preview/icons-callouts.html`). Raw SVGs live in `assets/icons/diagrams/`.
- Small UI icons (≤24px) or concepts not in that set → Lucide at stroke-width 1.5, rounded caps.
- `assets/chart-samples/` — reference renders from the guidelines
- `assets/charts/sankey.js` — Sankey flow diagram (`FartherSankey.mount(el, {nodes, links})`) for income, estate and asset-distribution flows. Color conventions: sources Steel, taxes Pomegranate, spending Clay, savings Aqua, giving Bronze, heirs/trusts Granite and Sky. See `preview/chart-sankey-*.html`.
- `assets/charts/farther-charts.js`: 15 finance charts, called as `FartherCharts.<type>(el, spec)`: fan, waterfall, allocation, cashflow, growth, brackets, periodic, drawdown, treemap, bullet, heatmap, timeline, scatter, tornado, choropleth. Copy a spec from `farther-charts-examples.js` and swap in real data. Prefer these to hand-drawn charts in reports, decks and one-pagers.
- `assets/charts/estate-flow.js` — estate distribution chart by stage with an order-of-death toggle (`FartherEstateFlow.mount(el, {scenarios})`). Vertical for reports, `orientation:'horizontal'` for slides. Card kinds: asset (Steel), trust (Granite), spouse (Sky), charity (Bronze), tax (Pomegranate), heirs (Aqua). Every stage should total the same amount; the chart prints each stage total so mismatches show. Starting points: `preview/estate-flow-report.html` (Letter, with required disclosure) and `preview/estate-flow-slide.html` (1920×1080).

## When something is missing

- Need a photo? Pick from the image bank first (`image-library.html`); only fall back to a Limestone/Clay 160° gradient if nothing fits.
- Need an advisor headshot? Use `headshotSquareUrl` from `data/advisors.json`; initials on a Steel-700 circle only if none loads.
- Unsure which blue? Default to **Steel** — it's the wordmark lock color.

## Recreate Client Material

`library/` holds the finished client pieces (Client Education Library one-pagers and Intelligent Wealth Series guides), each with an advisor slot on the cover. When an advisor says "Recreate Client Material", "Client Education", or asks for their client education platform/library with their details, follow `library/README.md`: match their email in `data/advisors.json`, copy the whole library into their project, and personalize it with `library/tools/personalize.js`.

## Single-page reports with lots of data

For a one-page report packed with KPIs, charts and maps, start from `templates/data-report/DataReport.dc.html` and pick a layout: 1a Venn + trend, 1b mosaic, 1c trend-led, 1d bubble breakdown, 1e score + geography, 1f narrative + proof. Keep the advisor slot bottom-left and end with the required disclosure. Use `assets/charts/sankey.js` or `estate-flow.js` where a flow chart fits.

## Client Review Package

For quarterly reviews, start from `templates/client-review/ClientReview.dc.html`, which has three layers. The client executive report (01–10) runs cover, relationship snapshot, dashboard, performance, allocation and risk, plan progress, tax, estate, service and action plan. The appendix (A1–A3) holds holdings, transactions, assumptions and full disclosures. The advisor brief (B1–B2) is internal only. Put an as-of date on every section. Give each status an explanation, a dollar implication and a next action. Tag every claim Verified, Inferred, Pending or Recommendation. Label tax pages as planning coordination with the CPA.

## Design Orchestrator (start here)

Every design request runs through `skills/design-orchestrator/SKILL.md`. It reads everything supplied into one design brief, then works through six stages: intake, template architecture (single template or a combined package), visual direction (charts, infographics, icons), image curation, copy and compliance, and quality control. It asks the advisor at most five questions, and only when the answers change the build.

## No Draft Mode

Nothing starts in Draft Mode or carries a draft label: no "Draft" watermarks, Draft Mode toggles or tweaks, "Preliminary" / "For review only" banners, draft status chips, or draft suffixes in titles, footers, filenames or versions. Every template, deck and report opens final and presentation-ready. Flag missing inputs with "Advisor confirmation required" on the field itself.

## Required disclosure

All client-facing output ends with the official disclosure in `guidelines/compliance/DISCLOSURE.md`, verbatim, under "Important disclosures". Load `assets/compliance/disclosure.js` and place `<div data-farther-disclosure="print"></div>` (`slide` for decks at 24px, `dark` on navy). Add `data-length="condensed"` for one-pagers, fact sheets and slides; use the full version for multi-page reports and anything about deposits, consolidations or rollovers. Never retype or edit the text.

## Infographics

`assets/infographics/farther-infographics.js` provides 12 branded layouts, called as `FartherInfographics.<type>(el, spec)`: steps (process), stairs (stages), roadmap (vertical timeline), timeline (milestones), pyramid, funnel, cycle, compare (A vs B), quadrant (2×2), tree (household or entity map), hub (team or services), and cards (reasons or key facts). Load `assets/icons/farther-icons.js` first so the `icon` names render. Use `dark: true` on navy and `scale: 2.2` on 1920×1080 slides. Copy a spec from `farther-infographics-examples.js`. Don't use an external infographic library.

## Positive / negative colors

For values that run negative to positive, use the 7-step diverging scale `--diverge-neg-3` … `--diverge-0` … `--diverge-pos-3`, which runs Pomegranate 500 → Clay 100 neutral → Serene Aqua 500. Put white text on `--diverge-neg-3` and ink #333 on the other steps. In charts, `FartherCharts.heatmap` with `diverging: true` uses this scale, and `FartherCharts.colors.div` holds the hex list.

## Investment Policy Statement

Start from `templates/ips/IPS.dc.html` and follow `templates/ips/BUILD-RULES.md`. Extract client facts to `ips-schema.json` (verified, inferred or missing, each with evidence), then draft two client pages of 900–1,100 words plus the internal Advisor QA page. Mark any unevidenced field "Advisor confirmation required". Never include a return promise or a fund list.
