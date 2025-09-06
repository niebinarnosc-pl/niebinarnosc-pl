# DefinitionItem Component

*   **Source**: `niebinarnosc-pl-old/src/components/DefinitionItem/index.js`
*   **Styling**: `niebinarnosc-pl-old/src/components/DefinitionItem/styles.scss`

## Purpose and Functionality

The `DefinitionItem` component is responsible for displaying a single definition. It shows the term's title, its English equivalent (if available), the HTML content of the definition, and an optional button to see related stories.

## Props

| Name          | Type      | Required | Default | Description                                       |
|---------------|-----------|----------|---------|---------------------------------------------------|
| `frontmatter` | `object`  | Yes      | -       | Contains `title`, `titleEn`, and `slug`.          |
| `html`        | `string`  | Yes      | -       | The HTML content of the definition to be rendered. |
| `hideHeading` | `boolean` | No       | `false` | If true, the `<h4>` title is not rendered.        |
| `hideButton`  | `boolean` | No       | `false` | If true, the "Zobacz opowieści" button is not rendered. |

## Dependencies

*   `Link` (Gatsby): Used for the button to navigate to the page for the specific definition slug.

## Styling

*   The component is an `<article>` tag.
*   It has responsive vertical margins (`1rem` on mobile, `2.5rem` on tablet+).
