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

*   A dedicated `defaultSocialImage` field serves as the default social sharing (Open Graph) image for any page that does not define its own.
*   The `title` field serves as the site name for use in page title templates.
*   There is no schema for a default SEO description.

### 3. Content Type Schemas

The following document type schemas include an optional `seo` field of type `seo`:
*   `page.ts`
*   `definition.ts`

This allows content editors to set SEO settings on a per-document basis. `story` and `representation` types do not have this field as they do not generate individual pages.

## Astro Frontend Implementation

### 1. GROQ Queries

GROQ queries for content types that are represented in structured data schemas will be updated to fetch all necessary fields. For instance, the query for a single `definition` will be updated to fetch a plain text version of its body for use in the `DefinedTerm` schema.

### 2. SEO Components (`Seo.astro`, `Schema.astro`)

#### `Seo.astro`

The `src/components/Seo.astro` component is the central place for rendering all SEO-related meta tags (`<title>`, `<meta name="description">`, Open Graph tags).

*   **Props**: It accepts `page` (the Sanity document), `title` (a string override), `description` (a string override), and `siteSettings`.
*   **Logic**:
    1.  **Title**: It determines a `baseTitle` from (in order of priority): `page.seo.title`, `page.title`, or the `title` prop. For the homepage, the final title is just `baseTitle`. For all other pages, it is `{baseTitle} - {site_name}`.
    2.  **Description**: It uses `page.seo.description` if available, falling back to the `description` prop. If neither is provided, the meta tag is omitted.
    3.  **Image**: It uses `page.seo.image` if available, falling back to `siteSettings.defaultSocialImage`.
*   **Output**: It renders `<title>`, `<meta name="description">`, canonical link, and all necessary Open Graph tags.

#### `Schema.astro` (New Component)

A new component at `src/components/Schema.astro` will generate the JSON-LD structured data script.
*   **Props**: It accepts the same props as `Seo.astro`: `page`, `title`, `description`, and `siteSettings`.
*   **Logic**:
    1. It generates a graph of schema objects. At a minimum, this includes `Organization` and `WebSite` schemas on every page.
    2. It adds a `WebPage` schema for the current page, using the same title and description logic as `Seo.astro`.
    3. If the page is a `definition`, it also generates a `DefinedTerm` schema with the term's name, English name, and a plain-text description.
*   **Output**: It renders a `<script type="application/ld+json">` tag containing the structured data graph.

### 3. `Layout.astro`

The main layout at `src/layouts/Layout.astro` is responsible for fetching `siteSettings` and passing the correct props to the SEO components.
*   It accepts an optional `page` prop (containing Sanity data) and optional `title` and `description` props (strings).
*   It passes these props, along with `siteSettings`, to both `<Seo />` and `<Schema />`. This allows pages without Sanity documents (like `index.astro` and `404.astro`) to define their metadata.
