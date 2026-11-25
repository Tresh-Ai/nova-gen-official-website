# Project memory

## Product intent & audience

- Vite + React project featuring a "challenge" page that presents design/innovation briefs to visitors.
- Active challenge: "Farm to Future — The Scenario" — displayed with brief text, artwork, open status, and deadline.
- Audience: participants/visitors browsing active challenge briefs.

## Brand personality & voice

- Not yet inferred from available context.

## Visual design & UX direction

- Challenge page renders an active challenge card containing: title, brief, artwork image, status badge, and deadline.
- Previously showed an empty state ("no challenges listed" / empty archive message); now replaced with a real active card.
- Layout centers on a single active challenge card rather than a list/archive (at least for current state).

## Decisions, constraints & rationale

- Challenge facts are stored as top-level data in site data (not only inside page components), so they survive page rewrites.
- Restored/reverted files can drop previously-added challenge facts — re-apply data alongside visible UI changes.
- Tests assert presence of challenge facts; build + test suite must both pass before considering work complete.
- Sessions may lose installed `node_modules`; dependency reinstall may be needed before verification runs.

## Open questions & assumptions

- Full project scope beyond the challenge page is unknown (other pages/features not yet surfaced).
- Whether multiple challenges or only one active challenge should be shown is unconfirmed.
- Brand voice, color system, typography, and detailed component patterns not yet inferred.