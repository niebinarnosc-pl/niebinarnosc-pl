# SEO: Abstract

This document defines the Search Engine Optimization (SEO) content strategy for the project. The goal is to provide granular control over how content appears in search engine results and on social media platforms.

## Core Concepts

### 1. Global SEO Defaults

A central configuration will hold site-wide default SEO values.
*   **Title Template**: Page titles are constructed using the template `{page_title} - {site_name}`. The homepage is an exception and uses only its title.
*   **Default Social Sharing Image (Open Graph Image)**: A default image (`defaultSocialImage` in `siteSettings`) is used when a page is shared on social media and does not have its own specific image.
*   There is **no** global fallback for meta descriptions. If a page does not have a specific description, the tag is omitted.

### 2. Per-Content SEO Overrides

Content types that represent their own pages (`page`, `definition`) will have an optional set of SEO fields to override the defaults.
*   **SEO Title**: Sets or overrides the page title. If not set, the page's main `title` field is used.
*   **SEO Description**: Sets the meta description. If not provided, no description meta tag will be rendered.
*   **Social Sharing Image**: A specific image for social media sharing, which overrides the global default.

## Metadata Requirements

The system must generate the following HTML meta tags for every page:

*   **`<title>`**: The page title, constructed using the title template.
*   **`canonical` link**: The definitive URL for the page to prevent duplicate content issues.
*   **`meta name="description"`**: The page's meta description.

### Open Graph Tags (for Social Media)

To control how content appears when shared on platforms like Facebook, Twitter, etc., the following Open Graph tags are required:
*   `og:title`: The title of the page.
*   `og:description`: The description of the page.
*   `og:image`: The URL of the image to display.
*   `og:url`: The canonical URL of the page.
*   `og:site_name`: The name of the website.
*   `og:type`: Should be set to `website` by default.

### Structured Data (Schema.org)

To provide more context to search engines, the site will generate structured data using the Schema.org vocabulary in JSON-LD format.
*   **`Organization`**: Represents the website/organization itself, including name and logo.
*   **`WebSite`**: Represents the website as a whole.
*   **`WebPage`**: Represents a generic web page. This will be the base for all pages.
*   **`DefinedTerm`**: For definition pages, this schema will be used to mark up the term being defined, its description, and its English alternative.
