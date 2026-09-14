---
name: farther-design
description: Use this skill to generate well-branded interfaces and assets for Farther (the Intelligent Wealth Platform), either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, a 196-photo brand image bank, and UI kit components for prototyping.
user-invocable: true
---

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

- `assets/logos/` — wordmark navy, cream, IW lockup, symbol
- `assets/icons/` — brand F-symbol SVG variants (decorative only)
- `assets/waves/` — six "Waves of Wealth" tonal background panels
- UI icons → Lucide at stroke-width 1.5, rounded caps. Steel for UI chrome, Bronze for conceptual diagrams.
- `assets/chart-samples/` — reference renders from the guidelines

## When something is missing

- Need a photo? Pick from the image bank first (`image-library.html`); only fall back to a Limestone/Clay 160° gradient if nothing fits.
- No real advisor headshot? Initials on a Steel-700 circle.
- Unsure which blue? Default to **Steel** — it's the wordmark lock color.
