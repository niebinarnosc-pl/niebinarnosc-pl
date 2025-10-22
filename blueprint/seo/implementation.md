# SEO: Implementation (Sanity & Astro)

This document details the technical implementation of the SEO strategy using Sanity as the CMS and Astro for the frontend.

## Sanity Schema Implementation

### 1. `seo.ts` (Reusable Object)

A new reusable object schema will be created at `sanity/schemas/objects/seo.ts` to encapsulate SEO fields.

*   `title`: `string` - The SEO title.
*   `description`: `text` - The meta description.
*   `image`: `image` - The Open Graph social sharing image.

### 2. `siteSettings.ts` (Singleton)

The `siteSettings` schema holds global SEO-related defaults.

*   The `placeholderImage` field serves as the default social sharing (Open Graph) image for any page that does not define its own.
*   The `title` field serves as the site name for use in page title templates.
*   There is no schema for a default SEO description.

### 3. Content Type Schemas

The following document type schemas include an optional `seo` field of type `seo`:
*   `page.ts`
*   `definition.ts`

This allows content editors to set SEO settings on a per-document basis. `story` and `representation` types do not have this field as they do not generate individual pages.

## Astro Frontend Implementation

### 1. GROQ Queries

All GROQ queries that fetch a single document for a page (`page`, `story`, `definition`, etc.) must be updated to include the `seo` field. The `siteSettingsQuery` will be updated to fetch `defaultSeo`.

### 2. `Seo.astro` Component

The `src/components/Seo.astro` component will be the central place for rendering all SEO-related meta tags.

*   **Props**: It accepts `page` (the Sanity document for the current page, if one exists), `title` (a string for pages without a Sanity document, like the homepage or 404 page), and `siteSettings`.
*   **Logic**:
    1.  **Title**:
        *   It determines a `baseTitle` from (in order of priority): `page.seo.title`, `page.title`, or the `title` prop.
        *   For the homepage (`/`), the final title is just `baseTitle`.
        *   For all other pages, the final title is `{baseTitle} - {site_name}`.
    2.  **Description**:
        *   It uses `page.seo.description` if available.
        *   If no description is provided, the `<meta name="description">` tag is **not rendered**. There is no global fallback.
    3.  **Image**:
        *   It uses `page.seo.image` if available.
        *   If not, it falls back to `siteSettings.placeholderImage`.
*   **Output**: It will render `<title>`, `<meta name="description">`, canonical link tag, and all necessary Open Graph tags (`og:title`, `og:description`, `og:image`, etc.).

### 3. `Layout.astro`

The main layout at `src/layouts/Layout.astro` is responsible for fetching `siteSettings` and passing the correct props to the `Seo.astro` component.
*   It accepts an optional `page` prop (containing Sanity data) and an optional `title` prop (a string).
*   It passes these props, along with `siteSettings`, to `Seo.astro`. Pages like `index.astro` and `404.astro` that don't have Sanity documents can pass a `title` prop to define their `<title>`.
