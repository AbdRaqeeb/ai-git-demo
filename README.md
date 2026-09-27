# AI Adoption Dashboard

Pilot built through a lightweight **RFC → PR → merge** workflow, driven with
AI assistance end-to-end. Goal: prove that AI-assisted engineering can be
**fast and controlled** — a human reviews and approves every git step.

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
```

## The workflow

1. **RFC** — a one-page decision doc in `docs/` proposes the change.
2. **Branch** — work happens on a short-lived feature branch.
3. **PR** — `gh pr create` links the change to its RFC.
4. **Review + checks** — a human reads `gh pr diff`, CI must pass.
5. **Merge** — squash-merge, branch deleted, full audit trail in `gh pr list`.

Every step is executed by an AI assistant **only after human approval**; the
`gh` CLI keeps everything visible and auditable.

## RFCs

| RFC | Title | Status |
| --- | --- | --- |
| RFC-0001 | AI Adoption Dashboard | Accepted |
| RFC-0002 | Team drill-down + adoption trend | Under review (see PR) |