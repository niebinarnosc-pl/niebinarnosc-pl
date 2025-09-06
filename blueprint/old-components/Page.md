# Page Component

*   **Source**: `niebinarnosc-pl-old/src/components/Page/index.js`
*   **Styling**: `niebinarnosc-pl-old/src/components/Page/styles.scss`

## Purpose and Functionality

The `Page` component is a standard wrapper for the main content area of most pages. It sets up consistent layout constraints (max-width, padding) and provides a slot for a page header with a title and subheading. It can render as either a `<section>` or an `<article>` tag.

## Props

| Name         | Type      | Default | Description                                            |
|--------------|-----------|---------|--------------------------------------------------------|
| `className`  | `string`  | -       | Additional CSS classes to apply to the root element.   |
| `heading`    | `string`  | -       | The main `<h1>` title for the page.                    |
| `subheading` | `string`  | -       | An optional `<p>` subheading displayed below the title. |
| `isArticle`  | `boolean` | `false` | If true, the root element is an `<article>` instead of a `<section>`. |
| `children`   | `node`    | -       | The content of the page.                               |

## Styling

*   The component enforces a `max-width` (`$page-max-width`) and is centered horizontally (`margin: 0 auto`).
*   It has responsive side padding and top margin to account for the sticky header.
*   The stylesheet (`styles.scss`) also contains a large number of base styles for generic HTML elements that appear within a page, such as `h1`, `h2`, `h4`, `blockquote`, `p`, `form` elements, etc. This acts as a "prose" styling context.
