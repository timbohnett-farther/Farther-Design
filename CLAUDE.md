# Advisor information: ALWAYS from the attached design system (hard rule)

**Every piece of advisor information must come from this design system's roster, never from anywhere else.** That covers name, designations, title, email, phone, location, team, profile URL and headshot. The source of truth is https://github.com/timbohnett-farther/Farther-advisor-profile, and the snapshot in this design system is `data/advisors.json` / `data/advisors.csv` (field guide: `data/README.md`); check the repo for the latest.

- Look the advisor up in the roster by email (case-insensitive; some records have `email: null`, so guard for it, then fall back to name).
- Use the headshot from the roster record, not an upload, a web search, LinkedIn, or a guess.
- Do NOT ask the advisor to type or upload their own name, title, phone, or photo. Ask for their email only, then fill everything from the roster.
- If there is no match, stop and say so. Never invent advisor names, credentials, contact details, or headshots.
- If the design system is not attached or the roster can't be read, tell the user to attach "Farther Design + Images + Advisor Data" instead of improvising.

# Farther logo (hard rule)

The default Farther logo everywhere is the **Farther Intelligent Wealth lockup** (wordmark + "intelligent wealth"):
- On light backgrounds (Limestone, white, Clay): `assets/logos/wordmark-iw-dark.svg` (Steel 700 `#3B5A69`).
- On dark backgrounds, Steel/Granite/Charcoal panels and photos: `assets/logos/wordmark-iw-light.svg` (Limestone `#F8F4F0`).
- Library pieces use the copies in `library/assets/`; templates use their own `assets/` copies.

The old plain wordmarks (`wordmark-navy.*`, `wordmark-cream.*`) are retired: never use them in new work, and swap them out when editing older pieces. The lockup has no built-in side padding, so don't add negative `margin-left` offsets. Email newsletters set the wordmark in type, which is still allowed there.

# Required disclosure (hard rule)

Every client-facing piece (reports, decks, guides, one-pagers, fact sheets, library pieces) ends with Farther's official disclosure, verbatim: the full version for multi-page reports and anything about deposits, consolidations or rollovers; the condensed version for one-pagers, fact sheets, slides and other space-limited pieces. The text, placement and minimum sizes live in `guidelines/compliance/DISCLOSURE.md`, which is the single source of truth and overrides any older disclosure wording in templates or examples. In HTML, drop in `<div data-farther-disclosure="print"></div>` (or `slide` / `dark`; add `data-length="condensed"` for the short version) with `assets/compliance/disclosure.js` loaded, so the text always comes from one file. Never paraphrase, shorten or retype it.

# No Draft Mode (hard rule)

Templates, decks, reports, guides, one-pagers and library pieces never start in Draft Mode and are never marked as drafts. Don't add "Draft", "DRAFT" watermarks, "Draft Mode" toggles or tweaks, "Preliminary" or "For review only" banners, draft status chips, or draft suffixes in titles, footers, filenames or version strings. Every file opens in its final, presentation-ready state. Items that need advisor input use the "Advisor confirmation required" marker on the specific field, not a draft label on the piece.

# Design Orchestrator (start here)

Every design request, whether or not it names a template, runs through `skills/design-orchestrator/SKILL.md`. It builds one design brief from the material, then picks the template or combined package, the charts, infographics and icons, and the image-bank photos. It asks the advisor at most five questions, and only when the answers change the build. What each report needs is listed in `guidelines/report-inputs/CLAUDE.md`. It builds in the Farther voice with the required disclosure, and runs quality control before delivery.

# Client reports and decks

When building any client- or advisor-facing report, follow `guidelines/client-report/CLAUDE.md` (density, layout, cover image, required disclosure) and the wireframe spec in `guidelines/client-report/Client Report.html`.

When building a client slide deck, follow the same rules plus the wireframe spec in `guidelines/client-deck/Client Deck.html` (1920×1080, one idea per slide, required disclosure as the final slide).

When building a company benefits guide or one-page data fact sheet, follow `templates/benefits-guide/CLAUDE.md` and start from `templates/benefits-guide/BenefitsGuide.dc.html` (match `Example - QCOM Benefits Guide.dc.html` for density and tone).

When building a client education guide (Intelligent Wealth Series explainer), follow `templates/education-guide/BUILD-RULES.md` and start from `templates/education-guide/EducationGuide.dc.html`; pick the page-2 layout from `Guide Layouts 1a-1d.dc.html` and match `Example - Tax-Loss Harvesting.dc.html` for density and tone.

When building a 1 pager (Letter-size advisor reference), pick a layout from `guidelines/one-pager/1 Pager Design Wireframes.dc.html`: 1a stat strip + two-column body (8–10 facts of equal weight), 1b chart-led (one visual carries the pitch), 1c fact rail (story top to bottom, facts pinned left), 1d quadrants (repeatable across topics). Say which one and why. Same brand, density, and disclosure rules as client reports.

When building a data-heavy single-page report (one Letter page of charts and KPIs), pick a layout from `templates/data-report/DataReport.dc.html`: 1a Venn + trend, 1b mosaic, 1c trend-led, 1d bubble breakdown, 1e score + geography, 1f narrative + proof. Say which one and why. Keep the advisor slot bottom-left and end with the required disclosure. Use `assets/charts/sankey.js` or `estate-flow.js` where a flow chart fits.

When building a quarterly client review ("Client Review Package"), start from `templates/client-review/ClientReview.dc.html`. It has three layers: a 10-page client executive report (01 cover, 02 relationship snapshot, 03 executive dashboard, 04 performance, 05 allocation and risk, 06 plan progress, 07 tax intelligence, 08 estate, insurance and legacy, 09 service delivered, 10 action plan), an appendix (A1–A3), and an internal advisor meeting brief (B1–B2) that never goes to the client. Rules: as-of date on every section, status chips always carry an explanation, a dollar implication and a next action, source hierarchy and confidence flags as shown, advisor approval before release, and the required disclosure closing the client report and appendix. Pages stack in a single column, one per row; don't use canvas mode.

When building an Investment Policy Statement (IPS), follow `templates/ips/BUILD-RULES.md` and start from `templates/ips/IPS.dc.html`. It has two client pages (Client Investment Mandate; Portfolio Guidelines and Governance) and an internal Advisor QA page. Extract to `templates/ips/ips-schema.json` first; 900–1,100 words; no return promises or invented data; mark gaps "Advisor confirmation required"; condensed disclosure.

# Advisor closing block (hard rule)

Every client report, one-pager, fact sheet and guide puts a "Your Farther advisor" block on its last page, directly above the disclosure, in addition to the cover's advisor slot. Markup: `guidelines/client-report/advisor-closing.html`. It's filled from `data/advisors.json` by `library/tools/personalize.js`.

# Client tax reports

Pick by household: retirees and pre-retirees (Social Security, IRMAA, gains stacking) → `templates/tax-return-analysis/`; working families and business owners (Schedule C/E, self-employment tax, business income deduction, itemizing, child credits, NIIT and Roth limits) → `templates/tax-return-working-household/`. One-page summary → `templates/tax-snapshot/`. For filing season, `templates/tax-letter/TaxLetter.dc.html` lists the forms to expect and the year's events the preparer must know about (donor-advised fund gifts, 60-day rollovers, Roth conversions, HSA contributions); build it from Farther account activity, toggle off events that didn't happen, and add rows for any other accounts. All tax templates keep plain client language, one idea per block, and the photo header on the cover.

For a client tax report built from a filed return, start from `templates/tax-return-analysis/TaxReturnAnalysis.dc.html`. It has eight Letter pages: cover with key figures, ordinary brackets, gains stacking and investment-income efficiency, Social Security and Medicare IRMAA, Schedules B and D with deductions, MAGI thresholds with headroom, observations with owners, then the advisor block and full disclosure. For a single page, start from `templates/tax-snapshot/TaxSnapshot.dc.html` (condensed disclosure). Rules:
- Use only figures from the return. Look up current-year brackets and thresholds and cite them.
- Show the effective marginal rate whenever gains stacking or phase-outs make it differ from the bracket.
- Phrase observations as items to discuss, and send tax actions to the client's CPA.
- Federal tax only unless state data is supplied.
- Drop the Social Security and Medicare or MAGI pages when they don't apply. Both are page toggles.

# Charts in reports

When a report, deck or one-pager needs a chart, use the design-system charts before drawing one by hand. `assets/charts/farther-charts.js` covers Monte Carlo fans, waterfalls, allocation vs. target, cash-flow timelines, growth of $10K, tax bracket fill, periodic tables, drawdowns, treemaps, bullets, heat maps, timelines, risk vs. return, tornadoes and state tile maps. Use `sankey.js` for flows and `estate-flow.js` for estate distribution. Examples are in the Charts group (`preview/charts-*.html`). Label hypothetical data as hypothetical.

# Infographics

For process, timeline, hierarchy, comparison and relationship graphics, use `assets/infographics/farther-infographics.js` (12 layouts; examples in the Infographics group). Don't point at or load external infographic libraries.

# Icons in reports and callouts

Use the Farther diagram icons (`assets/icons/farther-icons.js`, 30 finance icons; names in `preview/icons-farther.html`) wherever a report, one-pager, deck or guide has a callout, stat tile, icon list or section marker, and a matching icon exists. Patterns and rules: `preview/icons-callouts.html`. Use one icon per callout, list item or section; Bronze #B68A4C on light surfaces, Sky #B6D0ED on navy, Steel #3B5A69 for section markers; 32px minimum, 40px in callouts. Never add icons as decoration, in rows without text, or inside approved library pieces (`library/pieces/`). If no icon fits, leave it out or use Lucide at stroke 1.5; don't use emoji or other icon sets.

# GoFartherInDesign

Trigger codeword: **"GoFartherInDesign"** — when an advisor types this (alone, or with their email), rebuild their whole personalized Client Education library. It's a codeword, not a plain-English request, specifically so it can't collide with a generic "recreate this uploaded file" flow — do not accept "Recreate Client Material" or "build my client library" as substitutes; point advisors to the codeword. This flow needs **no upload**: everything already lives in `library/pieces/` here. Follow `library/README.md`: ask for their email, match it exactly in `data/advisors.json`, copy the whole library (Client Education one-pagers and Intelligent Wealth Series guides) into their project, and fill the cover advisor slot with `library/tools/personalize.js`. Change nothing else in the pieces.

# Advisor newsletter emails

Start from `email/Advisor Newsletter.html`: send-ready, image-free HTML (tables and inline styles only, Georgia headings, Avenir/Helvetica/Arial body). The wordmark is set in type, not an image. Keep the condensed disclosure verbatim in the footer, plus topic-specific lines (index data, tax deadlines) as needed. Advisor name, designations, title and contact details come from `data/advisors.json`.

# Why Farther deck

For a client pitch deck, start from `templates/why-farther/WhyFarther.dc.html` (19 slides, 1920×1080, steel edition). The advisor cover block and the "Your advisor" slide are filled from `data/advisors.json` with `library/tools/personalize.js`, using the email of whoever is building. Never invent advisor details. The final slide is the condensed disclosure plus topic lines for the charts, alternatives, lending and estate content.

# Client decision decks (one household)

For a meeting deck built around one client household's decision (not part of the education series), start from `templates/client-decision-deck/ClientDecisionDeck.dc.html`. Sequence: cover (client question as title, advisor block bottom-left), the decision in front of you, what this means for your family, coordination map, current picture, decision map, strategy comparison, quantified consequences, sensitivity, sequencing, decision agenda, standard closing ("From insight to coordinated action", verbatim), and the condensed disclosure slide. Rules: 16:9, one idea per slide, three visual zones maximum, 45–60 visible words, 24px minimum, sentence-case headlines under 12 words, a total-wealth connection bar with the active domains filled, and a scenario label on every projection (client-specific analysis, illustrative scenario, historical analysis, planning estimate, third-party estimate). `{{Double-brace}}` fields hold client and advisor data. Never invent client data; drop the field or go qualitative. Never imply Farther gives tax or legal advice. Each deck also produces a presenter version with speaker notes, a PDF, and the one-page meeting takeaway (T1).

# Group education decks (education series)

The finished series is `library/pieces/G01`–`G10` (Dimensions of Modern Wealth). New decks follow the same pattern. Each topic gets a broad-audience deck for seminars, webinars, employee sessions, business-owner roundtables and family education. Start from `templates/group-education-deck/GroupEducationDeck.dc.html`. The arc runs: opening question, why it matters, core framework, key components, tradeoffs, illustrative case, common mistakes, action framework, how coordination helps, takeaways and discussion, then the disclosure slide. Speak to "you", households, families or business owners, never a named client. No personal data, account-level recommendations, allocations or personal action plans. Include at least three engagement prompts (poll, myth or reality, reflection, case discussion, decision card, self-assessment). Every slide gets presenter notes: teaching point, transition, optional prompt and compliance point. Use only current, sourced figures with a dated source line. No simulated performance or probabilities. Label every teaching slide as general education. Personal questions go to a private follow-up.
