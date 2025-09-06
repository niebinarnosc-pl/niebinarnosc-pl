# Seo Component

*   **Source**: `niebinarnosc-pl-old/src/components/Seo/index.js`

## Purpose and Functionality

The `Seo` component is responsible for rendering all SEO-related `<meta>` tags, the page `<title>`, the canonical link, and structured data (`schema.org`). It centralizes SEO logic, pulling default values from `siteMetadata` and allowing them to be overridden by page-specific props.

## Props

| Name               | Type      | Default | Description                                          |
|--------------------|-----------|---------|------------------------------------------------------|
| `title`            | `string`  | -       | The title of the page.                               |
| `description`      | `string`  | -       | The meta description for the page.                   |
| `ogImage`          | `string`  | -       | The filename of the Open Graph image.                |
| `addTitleTemplate` | `boolean` | `false` | If true, applies the site-wide title template (e.g., "Page Title | Site Name"). |
| `landingPage`      | `boolean` | `false` | If true, adds `schema.org` data for a `WebSite`.     |
| `location`         | `object`  | Yes     | Gatsby's location object, for generating the canonical URL. |
| `pageContext`      | `object`  | Yes     | Gatsby's page context object.                        |

## Dependencies

*   `graphql`, `useStaticQuery`: To fetch default SEO values from `siteMetadata` in `gatsby-config.js`.

## Behavior

*   It constructs a comprehensive `seo` object by merging default metadata with page-specific props.
*   It generates a full canonical URL using the `siteUrl` and the current `pathname`.
*   It generates a full URL for the Open Graph image.
*   It renders a wide array of tags, including `og:title`, `og:description`, `og:image`, `og:type`, `canonical`, etc.
