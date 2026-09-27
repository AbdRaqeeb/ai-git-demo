# RFC-0002: Team Drill-Down with Adoption Trend

| | |
|---|---|
| Status | **Under review** |
| Author | AbdRaqeeb (drafted with AI assistance) |
| Date | 2026-09-27 |
| Reviewers | Workshop attendees |

## 1. Problem

RFC-0001 shipped an aggregate dashboard. It answers "is adoption happening
company-wide?" but not "is it happening **in Platform this week**?" Managers
need to spot teams that are accelerating and teams that are stalling.

## 2. Proposal

Add a drill-down panel to the existing dashboard:

- A **team selector** (dropdown of the five teams)
- A **4-week PR trend line** for the selected team
- The selected team's row is **highlighted** in the breakdown table

Data comes from the existing mock source in `src/data.js` — the shape already
contains weekly PRs per team (`weeklyPrs`).

## 3. Alternatives considered

| Option | Why rejected |
| --- | --- |
| Clickable table rows as the selector | Dropdown is more discoverable; row highlight still added |
| New route/page per team | Overkill for a pilot; keep single page |
| Realtime API data | Out of scope — RFC-0001 follow-up |

## 4. Decision

**Proposed for review.** Small, additive change: two new components
(`TeamSelect`, `TeamTrendChart`), one `data.js` addition, table highlight.

## 5. Open questions

- Should the trend include RFCs + hours, or PRs only for v1?
- Which team should be the default selection?