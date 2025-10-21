# SEO: Implementation (Sanity & Astro)

This document details the technical implementation of the SEO strategy using Sanity as the CMS and Astro for the frontend.

## Sanity Schema Implementation

### 1. `seo.ts` (Reusable Object)

A new reusable object schema will be created at `sanity/schemas/objects/seo.ts` to encapsulate SEO fields.

*   `title`: `string` - The SEO title.
*   `description`: `text` - The meta description.
*   `image`: `image` - The Open Graph social sharing image.

### 2. `siteSettings.ts` (Singleton)

The `siteSettings` schema will be updated to include global SEO defaults.

*   `ogImage` field will be removed.
*   A new field `defaultSeo` of type `seo` will be added. This will hold the site-wide default title, description, and image.
*   The `title` field will serve as the site name for the title template.

### 3. Content Type Schemas

The following document type schemas will be updated to include an optional `seo` field of type `seo`:
*   `page.ts`
*   `story.ts`
*   `definition.ts`
*   `representation.ts`

This will allow content editors to override the default SEO settings on a per-document basis.

## Astro Frontend Implementation

### 1. GROQ Queries

All GROQ queries that fetch a single document for a page (`page`, `story`, `definition`, etc.) must be updated to include the `seo` field. The `siteSettingsQuery` will be updated to fetch `defaultSeo`.

### 2. `Seo.astro` Component

The `src/components/Seo.astro` component will be the central place for rendering all SEO-related meta tags.

*   **Props**: It will accept `pageSeo` (from the specific document) and `siteSettings` (containing `defaultSeo` and site `title`).
*   **Logic**:
    1.  Determine the final `title`. It will use `pageSeo.title` if available, otherwise it will use the document's main `title` or `heading`. It will be combined with the site title from `siteSettings.title` to form a full title like `Page Title | Site Name`.
    2.  Determine the final `description`. It will use `pageSeo.description` if available, falling back to `siteSettings.defaultSeo.description`.
    3.  Determine the final `ogImage`. It will use `pageSeo.image` if available, falling back to `siteSettings.defaultSeo.image`.
*   **Output**: It will render `<title>`, `<meta name="description">`, canonical link tag, and all necessary Open Graph tags (`og:title`, `og:description`, `og:image`, etc.).

### 3. `Layout.astro`

The main layout at `src/layouts/Layout.astro` will be responsible for fetching `siteSettings` and passing the correct props to the `Seo.astro` component.
*   It receives the current page's data via a `page` prop.
*   It will extract `page.seo` to pass as the `pageSeo` prop.
*   The entire `siteSettings` object will be passed to `Seo.astro`.
