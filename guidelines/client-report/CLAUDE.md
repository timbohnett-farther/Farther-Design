# Report page density (hard rule)

Every report page must use roughly 90% of the page — no sparse, mostly-empty pages.
Fill pages with data: tables, charts/graphs (bar splits, allocation bars, gain-intensity charts, etc.), KPI grids, and callouts. Clients and advisors respond to visuals — favor charts and tables over long paragraphs of prose.
When a page feels light, add another relevant chart, table, or stat grid rather than leaving whitespace or stretching text.

# Reference report (ideal wireframe)

"Client Report.html" (in this folder) is the gold-standard layout for client reports. Match its structure and density: full-bleed cover with 2×2 KPI panel and advisor block → summary and cost → data analysis (table + grouped bar chart + supporting panels) → strategy and value table with chart panels → putting it together with disclosure. Aim for 4–6 visuals per interior page. Report length is not fixed: it matches the source material, and reports can cover any wealth topic (portfolio, tax, retirement, estate, fees, client reviews, etc.). Repeat analysis and strategy pages as needed; cover first, closer with disclosure last. Full spec: guidelines/client-report/Client Report.html. For slide decks, follow guidelines/client-deck/Client Deck.html (same story order and density at 1920×1080, one idea per slide, disclosure as the final slide).

Cover image: choose from the image bank and, where possible, match the report's content or theme (e.g. bridge or road for a transition, calm water for retirement income, foundations or architecture for estate planning, growth landscapes for portfolio reviews). Avoid people when the client requests it.


# Advisor closing block (hard rule)

Every client report, one-pager, fact sheet and guide puts a "Your Farther advisor" block on its last page, directly above the disclosure. This is in addition to the cover's advisor slot. It holds the headshot, name, title, email, phone and location, filled from `data/advisors.json` by `library/tools/personalize.js`, which fills every `data-advisor` field on the page. Copy the markup from `guidelines/client-report/advisor-closing.html`, then lay out the page so the block and the disclosure both fit. If the advisor has no email or phone on file, leave that line out. Never invent advisor details. For decks, the same block goes on the closing slide before the disclosure slide.

# Required disclosure (hard rule)

Every report generated (client- or advisor-facing) must end with this disclosure, verbatim, under the heading "Important disclosures". Place it on the final page; if the closer has no room, give it its own final page. Report-specific source notes (e.g. "Figures come from the RightCapital report dated…") may appear above it but never replace it.

This material is for informational and educational purposes only and does not constitute investment, tax, or legal advice, and is not a recommendation to buy or sell any security or pursue any strategy. Farther Finance Advisors, LLC ("Farther") is registered as an investment adviser with the U.S. Securities and Exchange Commission (SEC); such registration does not imply a certain level of skill or training. All examples, figures, and projections in this material are hypothetical and for illustrative purposes only; they are not a guarantee of future performance, and there is no assurance that any strategy will be profitable or achieve its objective. Investing involves risk, including the possible loss of principal. Tax and legal outcomes depend on each client's individual facts and circumstances and are subject to change based on changes in law.

Farther provides investment advisory services on a wrap fee basis, generally charging a fee based on a percentage of assets under management (AUM). Because Farther's fee generally increases as the assets in a client's advisory account increase, Farther has an economic incentive to recommend that clients increase the assets it manages; this is a conflict of interest that clients should understand when evaluating any recommendation involving new deposits, consolidations, or rollovers.

Farther does not provide tax or legal advice, does not prepare tax returns, and does not serve as a law firm or accounting firm. Consult your own qualified tax advisor and attorney before implementing any strategy described here. Additional information about Farther, including its Form ADV Part 2A Brochure and Form CRS, is available at www.adviserinfo.sec.gov or by contacting Farther's Chief Compliance Officer, Christopher Powers, at 628-246-8004.

The single source for this text is `guidelines/compliance/DISCLOSURE.md` (code: `assets/compliance/disclosure.js`). If the two ever differ, that file wins.


# Icons

Callouts, stat tiles, icon lists and section headers use the Farther diagram icons (`assets/icons/farther-icons.js`) when one fits the content: one icon per element, Bronze on light, Sky on navy, 32px minimum. See `preview/icons-callouts.html`.
