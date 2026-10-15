# Investment Policy Statement: build rules

A two-page decision framework for an individual or household client. A client should understand it in five minutes, and an auditor should be able to trace every statement back to documented client facts. Start from `IPS.dc.html`.

## Structure (US Letter, 2 client pages + internal QA)

**Page 1: Client Investment Mandate**
1. Header and scope: household and entities, accounts in scope (managed, plus held-away for planning context only), investment authority and who approves policy changes, advisor, effective date, next review.
2. Investment mandate: 2–3 plain-English sentences on the purpose of the portfolio.
3. Objectives in priority order (primary, secondary), plus a **success definition** stated as goal funding, not a return target.
4. Time horizon (0–3, 3–10, 10+ years, tied to specific goals) and a cash-flow table: contributions, withdrawals, large outflows, gifts, and the liquidity reserve.
5. Risk profile: willingness, capacity, downside tolerance, and one behavioral guardrail sentence.

**Page 2: Portfolio Guidelines and Governance**
6. Strategic allocation table: asset class, target, allowed range, implementation note. Never a fund or security list.
7. Implementation rules, each tagged Required / Monitored / Prior approval / Prohibited: diversification, tax management, concentrated positions, illiquid and alternatives, leverage, margin, derivatives and options.
8. Restrictions and preferences: exclusions, legacy holdings, tax constraints.
9. Rebalancing triggers; review cadence and review events; evaluation against objectives and policy allocation.
10. Roles, acknowledgment ("not a guarantee of returns"), signatures, and the **condensed** disclosure (`data-farther-disclosure="print" data-length="condensed"`). Use the full disclosure if the IPS covers a rollover or consolidation.

**Advisor QA page (internal, never sent):** word and page count, fields needing confirmation, a source trace (field → value → source → Verified / Inferred / Missing), missing facts, conflicts, suitability and compliance flags, and items the client confirms in the meeting.

## Hard constraints

- 900–1,100 words across the two client pages; two pages maximum.
- No return promises ("will earn 7%"), no invented client data, no generic education, no capital-market commentary, no fund lists, no MPT explainers, no ADV boilerplate.
- Any field without evidence shows the **Advisor confirmation required** marker, never a guess.
- Allocation weights come from the financial plan, risk capacity, account types and tax position, not a questionnaire model alone.
- Use controlled vocabulary: objectives (growth, preservation, income, total return, legacy, philanthropy); risk levels (conservative, moderate, moderate growth, growth, aggressive); rule status (required, monitored, prior approval, prohibited).
- Plain language, "you" or the family name, Farther voice (see `dont-write-like-ai`), CFP® and other marks with ®.

## Two-step workflow

1. **Extract**: produce JSON matching `ips-schema.json`, separating explicit facts, reasonable inferences with evidence, and missing facts. Never assume a return objective, liquidity reserve, restriction or risk tolerance.
2. **Draft**: fill the wireframe from validated fields only, then generate the Advisor QA page from `source_evidence`, `missing_information` and `conflicts`.

References: SEC Commission Interpretation Regarding Standard of Conduct for Investment Advisers (IA-5248, 2019); CFA Institute, *Elements of an Investment Policy Statement for Individual Investors*; FINRA Rule 2111 investor-profile factors.
