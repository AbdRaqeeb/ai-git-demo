# RFC-0001: AI Adoption Dashboard

| | |
|---|---|
| Status | **Accepted** |
| Author | AbdRaqeeb (drafted with AI assistance) |
| Date | 2026-09-27 |
| Reviewers | Workshop attendees |

## 1. Problem

We are investing in AI-assisted engineering but have no shared, visible way to
track whether adoption is actually happening. Adoption data lives in per-team
spreadsheets and gut feel. Leadership asks "is this working?" and nobody has a
single answer.

## 2. Proposal

Ship a small web dashboard that aggregates one source of truth per team:

- **RFCs authored** — decisions written down
- **PRs merged** — shipped work
- **AI-assisted PRs** — how much of that work went through AI copilots
- **Hours saved** — estimated time recovered

Built with **Vue 3 + Vite** (our standard frontend stack) and **mock data** for
the pilot — the point is the workflow and the UI, not the data pipeline.

## 3. Alternatives considered

| Option | Why rejected |
| --- | --- |
| Pull from GitHub API directly | Great later, but adds auth + rate-limit complexity to the pilot |
| Static HTML, no framework | Works, but does not exercise our real frontend stack |
| Commercial BI tool | License cost and onboarding friction for a pilot |

## 4. Decision

**Accepted.** Build a Vue 3 dashboard with four metric cards and a per-team
breakdown table, fed by mock data in `src/data.js`. Deploy via static hosting.

## 5. Follow-ups

- Wire real data source (GitHub API) — new RFC
- Team drill-down with adoption trend — **RFC-0002**