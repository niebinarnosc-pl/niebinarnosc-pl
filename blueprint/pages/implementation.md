# Pages: Implementation (Astro)

This document describes the technical implementation of the site's pages using Astro and fetching data from Sanity.

## Routing and File Structure

The page structure will be implemented in `src/pages/` as follows:

*   **Home**: `src/pages/index.astro`
*   **Definitions**:
    *   List: `src/pages/definicje.astro`
    *   Single: `src/pages/definicje/[slug].astro`
*   **Stories**: `src/pages/opowiesci.astro`
*   **Representation**:
    *   List (all and filtered): `src/pages/reprezentacja/[[...category]].astro`. This will use optional catch-all routing to handle both `/reprezentacja` and `/reprezentacja/[category]`.
*   **History**: `src/pages/historia.astro`
*   **Guide**: `src/pages/poradnik.astro`
*   **404**: `src/pages/404.astro`

## Data Fetching

*   All pages will fetch their content from Sanity using the Astro Sanity integration (`sanity:client`).
*   `getStaticPaths` will be used for dynamic routes (`/definicje/[slug]`, `/reprezentacja/[[...category]]`) to pre-render pages at build time.
*   Queries will be written in GROQ and will fetch the necessary data for each page. For example, `src/pages/definicje/[slug].astro` will fetch a single definition by its slug, as well as all stories that reference it.
