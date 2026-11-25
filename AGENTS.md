<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Content accuracy

Publish only events, dates, partners, and team roles the community owner has confirmed; label
partnership items as areas Nova Gen is open to, never as programmes already running. Why: the
website brief forbids invented events, dates, or existing-programme claims.

## Site structure

Keep all site copy, nav, and asset URLs in `src/content/nova-gen.ts`, page components in
`src/components/site`, and one thin route file per path in `src/routes`; the shared header and
footer render from `src/routes/__root.tsx` through `SiteLayout`. Why: copy and branding stay
editable in one place instead of being duplicated across pages.

## Hosting and static assets

Let TanStack Start handle page routing and serve files from `public/` directly; do not add a
catch-all Vercel rewrite. Why: broad HTML fallbacks can misroute static image requests.

