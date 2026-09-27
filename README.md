# RFC + AI-Driven Git Demo

Workshop demo: a lightweight RFC that becomes a real app through a
controlled, AI-assisted git workflow.

## The workflow

1. **RFC** — a one-page decision doc (`docs/`) defines the problem and proposal.
2. **Branch** — feature work happens on a short-lived branch.
3. **PR** — `gh pr create` links the change to the RFC.
4. **Review + checks** — a human reviews `gh pr diff`, CI must pass.
5. **Merge** — squash-merge, branch deleted, audit trail in `gh pr list`.

Every git step is driven by an AI assistant **only after human approval**.
`gh` CLI keeps the whole flow visible and auditable.

## App

Single-file todo app in `index.html`. Open it in any browser.