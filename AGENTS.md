<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep public content and location facts in `src/lib/site-data.ts`, shared by the homepage and location pages, so hours and prices stay consistent.
- Keep the site static and use direct WhatsApp contact rather than online booking, because personal contact is part of the clinical method.
- Keep the pain/origin diagram as the homepage's only prominent interactive illustration, implemented client-side without external media, so discovery responds to pointer, touch, and keyboard input.
- Build prerenders every route to static HTML (list in vite.config.ts `pages`, router `trailingSlash: "always"`), output dist/client deployed to GitHub Pages — because Pages cannot run a server; add new routes to `pages`.
