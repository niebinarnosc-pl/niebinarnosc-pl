# Layout Component

*   **Source**: `niebinarnosc-pl-old/src/components/Layout/index.js`
*   **Styling**: `niebinarnosc-pl-old/src/components/Layout/styles.scss`

## Purpose and Functionality

The `Layout` component is the root wrapper for every page on the site. It is responsible for:
1.  Establishing the overall page structure (header, main content, footer).
2.  Importing global styles and fonts.

## Props

| Name       | Type     | Required | Description                                    |
|------------|----------|----------|------------------------------------------------|
| `location` | `object` | Yes      | Gatsby's location object, passed down to the `Header`. |
| `children` | `node`   | Yes      | The page content to be rendered inside the `<main>` tag. |

## Dependencies

*   `Footer`: The site footer component.
*   `Header`: The site header component.
*   `@fontsource/noto-sans`: The package for the primary site font.

## Behavior

*   It implements a "sticky footer" pattern using flexbox, ensuring the footer is at the bottom of the viewport even on short pages.

## Global Styles (`styles.scss`)

The component's stylesheet also serves as the entry point for global styles, including:
*   Font imports.
*   Global `box-sizing: border-box`.
*   Base styles for `body`, headings, links, etc.
*   Transition styles for `react-transition-group` (`.fade-*`, `.expand-*`).
