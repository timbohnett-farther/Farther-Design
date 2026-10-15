# Report Input Guide

This guide covers what Claude needs to produce the best possible Farther report, deck or one-pager. The Design Orchestrator (`skills/design-orchestrator/SKILL.md`) checks the supplied material against this guide in Stage 1 and turns what's missing into its Gate A questions (five at most). The quality of a report depends on the quality of its inputs. Claude never invents a figure to fill a gap.

## How to use this guide

1. Sort what was supplied into the tiers below.
2. **Tier 1 missing**: ask for it. If it still isn't available, mark it "Advisor confirmation required" on the page.
3. **Tier 2 missing**: build without it and say what it would have added.
4. **Tier 3 missing**: build without it and say nothing.

## Tier 1: Required for every report

- **Advisor**: an email or full name, so the cover can be filled from `data/advisors.json`
- **Client or subject**: the household name as it should appear on the cover, or the topic, company or audience
- **Audience**: client, prospect, seminar group, or internal only
- **Purpose**: the meeting or moment (review, first meeting, decision, seminar, follow-up) and the one to three messages the reader must leave with
- **As-of date**: the date the figures are valid as of
- **Source data**: at least one of statements, performance reports, a financial plan, tax returns, meeting notes or a transcript

## Tier 2: Strongly improves the report

- **Custodial data** (Schwab, Fidelity): holdings, balances, cost basis, transactions, by account and registration
- **Performance** (Black Diamond): QTD, YTD, 1, 3, 5-year and since-inception returns, benchmark, net or gross of fees, cash flows
- **Financial plan** (eMoney, RightCapital, MoneyGuide): goals, probability of success, assumptions, retirement income plan
- **Tax return**, most recent year: AGI, taxable income, brackets, capital gains, carryforwards, charitable giving
- **Target allocation and ranges**, or the current IPS
- **Held-away assets**: 401(k)s, real estate, business interests, private investments, debt
- **Meeting notes** from the last meeting: commitments, life events, concerns, decisions pending
- **Estate and insurance summary**: documents with dates, trusts, beneficiaries, policies and coverage amounts
- **Previous report**, so the new one can show changes since then

## Tier 3: Nice to have

- Family details: names, ages, children and grandchildren, decision-makers
- Outside professionals: CPA, attorney, insurance agent
- Communication preferences: detail level, visual or narrative, pace
- Service log: trades, rebalancing, tax-loss harvesting and coordination completed
- A preferred cover image theme or a photo to avoid

## Extra inputs by report type

- **Client Review Package**: Tier 1 and all of Tier 2, plus last quarter's action plan and its status
- **Investment Policy Statement**: objectives, time horizon, liquidity needs, risk capacity and tolerance, restrictions, account types and tax status, and rebalancing preferences. Run `ips-data-extractor` first
- **Data-Heavy Single Report**: 8 to 20 key figures with sources, and at least one time series or breakdown for the main chart
- **Client Decision Deck**: each decision, the options, the numbers for each option, the recommendation, deadlines, and who decides
- **Group Education Deck**: topic, audience profile, session length, format (in person or webinar), and any current-year limits or law changes to cite
- **Client Education Guide**: the strategy, who it fits and who it doesn't, three headline numbers, and a worked example
- **Benefits & Equity Guide**: company name or ticker (Claude pulls SEC filings through `employer-benefits-analyzer`), plus the client's own grants if known
- **Why Farther deck**: prospect's family structure, complexity drivers, and what they said matters to them
- **Estate content**: document dates, trust names and types, asset titling, estate values, and the order-of-death scenarios to show
- **Equity compensation**: grant type, grant date, vesting schedule, strike price, shares, current price and tax situation

## Formats Claude works best with

- **Best**: native exports (CSV or XLSX from the custodian or Black Diamond, PDF statements, plan PDFs) and pasted tables
- **Good**: PDFs of reports and tax returns, meeting transcripts from Zoom or Jump, typed notes
- **Workable**: screenshots of tables. Claude will read them and flag any figure it can't read clearly
- Label every file with the household name and as-of date where possible
- One source per fact. When sources conflict, Claude follows the source hierarchy (custodian for balances and returns, tax return for prior-year facts, plan for goals and projections) and lists the conflict for the advisor

## What Claude never does without input

- Invent advisor names, credentials, contact details or headshots
- Assume a return objective, risk tolerance, liquidity reserve, restriction or target allocation
- Fill a missing number with an estimate unless it's labelled hypothetical and the advisor approved it
- Guess family names, ages or relationships
- Present projections without the assumptions behind them

## A good one-line request

> "Client Review for the Hansen family, advisor jane.doe@farther.com, as of 9/30/26, for their Q3 review meeting. Focus on the Roth conversion window and the concentrated AAPL position. Statements, Black Diamond report and 2025 return attached."

That request covers every Tier 1 item, so Claude can build with zero or one question.
