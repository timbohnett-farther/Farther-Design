---
name: farther-design-orchestrator
description: Entry point for every Farther design request. Use when an advisor hands the Farther Design System any material (statements, plans, tax returns, transcripts, notes, spreadsheets, a topic, a company ticker, or a loose request), with or without a template named. If the request is or contains the codeword "GoFartherInDesign", skip the six-stage process and go straight to library/README.md to rebuild the advisor's personalized Client Education library — no upload needed. Otherwise reads everything supplied, builds one design brief, routes the work through six stages (intake, template architecture, visual direction, image curation, copy and compliance, quality control), picks the best template or combines several into one package, chooses the charts, infographics, icons and image-bank photos for each section, asks the advisor up to five questions only when the answer changes the build, and delivers finished, presentation-ready files. Triggers include "make something from this," "what's the best way to show this," "build this for my client," "turn this into a deliverable," "design a report / deck / one-pager for…," or any upload with no instruction.
user-invocable: true
---

# Farther Design Orchestrator

This skill coordinates the work. It doesn't design by feel. Six stages run in order, each with its own job, and they share one **design brief**. No stage goes ahead until the gate before it passes.

Before starting, read the root `SKILL.md` and `CLAUDE.md`. Every rule there applies at every stage: brand, the required disclosure, advisor data from the roster, and No Draft Mode.

**Codeword fast path.** If the advisor's request is or contains "GoFartherInDesign", skip all six stages below — this is not a design brief to build from scratch. Go straight to the root `library/README.md` and follow it: ask for their email if not given, match it in `data/advisors.json`, copy `library/` into their project, and personalize with `library/tools/personalize.js`. No upload needed; do not ask Gate A questions for this path.

```
Material in
  → 1 Intake Analyst       → design brief
  → 2 Template Architect   → template plan (single or combined)
  → 3 Visual Director      → chart / infographic / icon plan per section
  → 4 Image Curator        → photo plan per section
  ── Gate A: advisor questions (max 5, only if needed) ──
  → 5 Copy & Compliance    → built files
  → 6 Quality Control      → pass / fix
  ── Gate B: delivery ──
Finished pieces out
```

## The design brief (shared by all stages)

Every stage reads from and writes to one brief. Keep it internal and never ship it.

- **Subject**: household, prospect, group audience, company or topic
- **Audience**: client, prospect, seminar room, or advisor only (internal)
- **Moment**: quarterly review, first meeting, decision meeting, seminar, email follow-up, hand-out
- **Key messages**: the one to three things the reader must leave with
- **Fact base**: every number and fact, with its source and as-of date, marked verified, inferred or missing
- **Advisor**: roster record from `data/advisors.json`, matched by email or name
- **Template plan**, **visual plan** and **image plan** (filled in by stages 2 to 4)
- **Open questions**: gaps that change the build
- **Assumptions**: defaults taken without confirmation, each stated

## Stage 1: Intake Analyst

Read every file and message before deciding anything. Check the material against `guidelines/report-inputs/CLAUDE.md` (Tier 1 required, Tier 2 strongly helps, Tier 3 nice to have, plus the extra inputs for each report type). Missing Tier 1 items become Gate A questions. Fill in the brief: subject, audience, moment, key messages and fact base. Record the data shape (headline numbers, time series, allocations, flows, comparisons, dated events, narrative) and the volume (one page, 2 to 4 pages, 10 or more pages, or a slide sequence). Look the advisor up in the roster. Never invent names, credentials, contact details, figures or headshots.

When the material is large or specialist, hand the analysis to the matching Farther skill first and design from its output:

- Meeting transcript → `meeting-discovery-orchestrator`
- Quarterly or annual review → `client-review-orchestrator`
- IPS → `ips-data-extractor` then `ips-drafter`
- Employer benefits or a ticker → `employer-benefits-analyzer`
- Equity comp → `equity-compensation-strategy-engine`
- Estate → `estate-advisory-orchestrator`
- Insurance or annuities → `insurance-annuity-review`
- Options overlays → `derivatives-overlay-orchestrator`
- Market context → `capital-market-assumptions-builder`
- Unclear scope → `wealth-management-front-door`

## Stage 2: Template Architect

Check `library/` first. If a finished piece already covers the topic, recreate it with the advisor's details rather than building new.

Otherwise, score each template from 0 to 3 on fit with subject, audience, moment, data shape and volume. The highest total wins. If two score within 2 points and serve different audiences or moments, combine them.

| Template | Path | Best when |
|---|---|---|
| Client Review Package | `templates/client-review/ClientReview.dc.html` | One household, periodic review, performance and plan data, multi-section |
| Investment Policy Statement | `templates/ips/IPS.dc.html` + `BUILD-RULES.md` | Objectives, risk, allocation ranges, governance for one client |
| Data-Heavy Single Report | `templates/data-report/DataReport.dc.html` (1a to 1f) | Many numbers that must fit on one Letter page |
| Client Decision Deck | `templates/client-decision-deck/ClientDecisionDeck.dc.html` | One household facing decisions in a meeting |
| Group Education Deck | `templates/group-education-deck/GroupEducationDeck.dc.html` | One topic taught to a room or webinar |
| Why Farther deck | `templates/why-farther/WhyFarther.dc.html` | Prospect pitch, complex or multi-generational family |
| Client Education Guide | `templates/education-guide/EducationGuide.dc.html` + `BUILD-RULES.md` | A strategy explained in depth, 4 pages |
| Benefits & Equity Guide | `templates/benefits-guide/BenefitsGuide.dc.html` + `CLAUDE.md` | A company's benefits or equity program, or any fact sheet |
| 1 Pager | `guidelines/one-pager/1 Pager Design Wireframes.dc.html` (1a to 1d) | Short reference or leave-behind |
| Client Report (general) | `guidelines/client-report/Client Report.html` | Multi-page report that fits none of the above |
| Advisor Newsletter email | `email/Advisor Newsletter.html` | Content sent by email |

Tie-breakers: a client-facing template beats an internal one. A one-page format wins when the data fits. A meeting calls for a deck. Something the client takes away calls for a document.

**Combining.** Combine by sections, not by blending styles. Each part keeps its own template's layout and rules. The package shares one cover, one advisor slot, one as-of date and one closing disclosure. Common packages:

- **Review meeting**: Client Review Package + Client Decision Deck + meeting takeaway page
- **New prospect**: Why Farther deck + Data-Heavy Single Report (their current picture) + one library piece on their key issue
- **Strategy recommendation**: Client Decision Deck + Client Education Guide + IPS update if the allocation changes
- **Equity-comp client**: Benefits & Equity Guide + Data-Heavy Single Report + education guide on RSUs, ISOs or ESPP
- **Seminar**: Group Education Deck + matching 1 Pager hand-out + Advisor Newsletter follow-up

When a template has layout variants (1a to 1f, 1a to 1d), pick one and write down why.

## Stage 3: Visual Director

For each section, name the one message the data has to carry, then choose the visual that shows it fastest. Use one primary visual per section. Never draw a chart by hand when a design-system chart fits, and never add a chart just to fill space.

**Charts** (`assets/charts/farther-charts.js`, `FartherCharts.<type>(el, spec)`; start from `farther-charts-examples.js`):

| The data says | Use |
|---|---|
| Range of future outcomes, plan success probability | `fan` |
| How a start value became an end value (returns, fees, taxes, flows) | `waterfall` |
| Current vs. target allocation, drift against ranges | `allocation` |
| Income, spending, savings or withdrawals by year | `cashflow` |
| Growth over time vs. a benchmark | `growth` |
| Room left in a tax bracket (Roth conversions, gain harvesting) | `brackets` |
| Asset-class returns ranked by year, diversification | `periodic` |
| Peak-to-trough losses and recovery, sequence risk | `drawdown` |
| Holdings or exposure by size (concentration, sectors) | `treemap` |
| One metric against a target (funded ratio, savings rate) | `bullet` |
| A grid of values (returns by account and period, correlations) | `heatmap` + diverging scale |
| Dated events and deadlines (vesting, RMDs, gifting calendar) | `timeline` |
| Risk vs. return for portfolios or funds | `scatter` |
| Which assumption moves the outcome most | `tornado` |
| Values by state (domicile, state tax, client map) | `choropleth` |
| Money moving between sources and uses | `assets/charts/sankey.js` |
| Who receives what at each death, trust stages | `assets/charts/estate-flow.js` |

- A single headline number gets a stat tile with a diagram icon, not a chart.
- Anything that runs from negative to positive uses the diverging scale.
- Every chart gets a source and an as-of date. Label hypothetical data as hypothetical.

**Infographics** (`assets/infographics/farther-infographics.js`) show ideas rather than numbers. Use `steps` for a process, `stairs` for stages, `roadmap` or `timeline` for a sequence, pyramids for priorities, funnels for narrowing choices, household trees for family and entity structure, and comparisons for options side by side.

**Icons**: the 30 diagram icons (`assets/icons/farther-icons.js`, names in `preview/icons-farther.html`) go in callouts, stat tiles, icon lists and section markers. Match each icon to its concept, and use at most one per callout.

## Stage 4: Image Curator

Choose from the image bank (`assets/images/manifest.json`, browse in `image-library.html`) by what the section is about, never alphabetically or by convenience.

- **Covers and section openers**: pick an image with a clear link to the theme. Use bridges or roads for transitions, calm water for retirement income, foundations or architecture for business, equity comp or structure, families for gifting, education and trusts, and landscapes for time horizons and long-term plans.
- Protect text on photos with a Charcoal overlay or frosted glass.
- Use no more than one photo per spread. Data pages carry charts, not photos.
- Don't use the same photo twice in one package.
- Never use the abstract neon or light-trail set, or any watermarked comp (`stocksy-*`, `shutterstock-*`, `adobestock-547151154-preview`).
- The advisor's `headshotSquareUrl` goes in the advisor slot only.

## Gate A: Advisor questions (up to 5, only if needed)

Show the advisor the plan: the template or package with a one-line reason, then each section with its chosen visual and image and a one-line reason for each.

Ask only questions whose answers change the build. If the material already answers a question, don't ask it. If nothing is unclear, ask nothing and build. Never ask more than five. Give each question a stated default so the advisor can accept everything in one go. Pick from these, in priority order:

1. **Audience**: who will see this? (client, prospect, seminar group, internal only)
2. **Format**: meeting slides, a leave-behind document, email, or a combined package?
3. **Advisor**: whose name and contact go on the cover? (skip if known)
4. **Focus**: which one or two messages must the reader leave with?
5. **Gaps**: confirm or supply a missing fact (as-of date, target allocation, goal amount)
6. **Depth**: one page, a short guide, or a full report?
7. **Household name**: how should the family be named on the cover?

Wait for the answers, update the brief, then continue.

## Stage 5: Copy & Compliance

- Copy the chosen templates into the advisor's project and fill them from the fact base only.
- Put the advisor's roster details on cover pages only, as in the `GoFartherInDesign` flow (`library/README.md`).
- Mark any unsupported field "Advisor confirmation required". Never guess.
- Put an as-of date on every data section. Label hypothetical data.
- Write in Farther voice. Run `dont-write-like-ai`, use sentence case, and add ® to every designation mark.
- Run `social-language-compliance-checker` on client copy for promissory phrasing, absolute claims and fee-language precision.
- End every client-facing part with the required disclosure from `guidelines/compliance/DISCLOSURE.md` via `assets/compliance/disclosure.js`. Use the full version for multi-page reports, deposits, consolidations and rollovers, and the condensed version for one-pagers and slides.
- Internal layers (advisor meeting brief, IPS QA page) never go into client material.

## Stage 6: Quality Control

Check each item and fix any failures before delivery:

- Every number traces to the fact base, and every total adds up (estate-flow stages match, allocations sum to 100%)
- Every chart fits its message and carries a source, an as-of date and a "hypothetical" label where needed
- Images are on-theme, not repeated and not watermarked, and text over them is readable
- Advisor details match the roster exactly, including ® marks
- The disclosure is present, verbatim and the right length
- No draft labels, watermarks or Draft Mode anywhere. Every file opens final
- Minimum sizes are met: 24px for slide text, 12pt for print body copy
- No filler sections and no placeholder text left in client copy

## Gate B: Delivery

Tell the advisor in three lines or fewer: what you built and why that template and those visuals, what's marked "Advisor confirmation required", and one suggested next step.
