# RFC-0001: Team Todo App

| | |
|---|---|
| Status | **Accepted** |
| Author | AbdRaqeeb (drafted with AI assistance) |
| Date | 2026-09-27 |
| Reviewers | Workshop attendees |

## 1. Problem

Teams coordinate tasks across chat, spreadsheets and email. There is no single
place to see "what are we working on this sprint". Coordination overhead grows
with team size.

## 2. Proposal

Ship a single-file web app (`index.html`) that provides a shared todo list:

- Add / complete / delete tasks
- Persist locally in the browser (`localStorage`) — no backend, zero infra
- Simple, dependency-free, deployable to any static host

Scope is deliberately minimal: a working MVP in one afternoon, not a platform.

## 3. Alternatives considered

| Option | Why rejected |
| --- | --- |
| Jira / existing tooling | Already available, but heavy; requires config + accounts |
| Backend + database (e.g. FastAPI + Postgres) | Overkill for MVP; adds ops surface |
| Spreadsheet | Works, but not a shared live UI |

## 4. Decision

**Accepted.** Build the single-file static app as the pilot for the "RFC →
PR → merge" AI-assisted workflow. It is small enough to review in one sitting
and real enough to be useful.