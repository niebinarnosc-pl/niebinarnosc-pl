# SEO: Abstract

This document defines the Search Engine Optimization (SEO) content strategy for the project. The goal is to provide granular control over how content appears in search engine results and on social media platforms.

## Core Concepts

### 1. Global SEO Defaults

A central configuration will hold site-wide default SEO values. This ensures that every page has baseline metadata even if not explicitly set.
*   **Default SEO Title**: A base title for the site.
*   **Title Template**: A template for constructing page titles, e.g., `{page_title} | {site_name}`.
*   **Default SEO Description**: A fallback meta description.
*   **Default Social Sharing Image (Open Graph Image)**: A default image to be used when a page is shared on social media and does not have its own specific image.

### 2. Per-Content SEO Overrides

Every major content type (Pages, Stories, Definitions, Representations) will have an optional set of SEO fields to override the global defaults. This allows content editors to tailor the SEO and social sharing appearance for specific pieces of content.
*   **SEO Title**: Overrides the default page title.
*   **SEO Description**: Overrides the default meta description.
*   **Social Sharing Image**: A specific image for social media sharing.

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
