# Pages: Implementation (Astro)

This document describes the technical implementation of the site's pages using Astro and fetching data from Sanity.

## Routing and File Structure

The page structure will be implemented in `src/pages/` as follows:

*   **Home**: `src/pages/index.astro`
*   **Generic Page Renderer**: `src/pages/[slug].astro`. This file renders all `Page` documents from the CMS by their slug. This includes what were previously static list pages (Definitions, Stories, Representation) and content pages (History, Guide).
*   **Definitions (Single)**: `src/pages/definicje/[slug].astro`
*   **Representation (filtered by category)**: `src/pages/reprezentacja/[category].astro`.
*   **404**: `src/pages/404.astro`

## Data Fetching

*   All pages fetch their content from Sanity using the Astro Sanity integration (`sanity:client`).
*   `getStaticPaths` is used for dynamic routes to pre-render pages at build time.
*   The generic page renderer at `[slug].astro` fetches a `Page` document from Sanity and dynamically renders its content based on the components in its `preBody` and `body` fields.
*   Queries will be written in GROQ and will fetch the necessary data for each page. For example, `src/pages/definicje/[slug].astro` will fetch a single definition by its slug, as well as all stories that reference it.
