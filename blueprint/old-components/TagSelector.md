# TagSelector Component

*   **Source**: `niebinarnosc-pl-old/src/components/TagSelector/index.js`
*   **Styling**: `niebinarnosc-pl-old/src/components/TagSelector/styles.scss`

## Purpose and Functionality

The `TagSelector` component renders a list of tag links that allow users to filter content on a page. It includes a default "Wszystko" (All) link to clear the filter. The currently active tag is visually highlighted.

## Props

| Name       | Type     | Required | Description                                       |
|------------|----------|----------|---------------------------------------------------|
| `basePath` | `string` | Yes      | The base URL path for the tag links (e.g., `/reprezentacja`). |
| `tags`     | `array`  | Yes      | An array of strings, where each string is a tag name. |
| `active`   | `string` | No       | The currently active tag. If undefined, "All" is considered active. |

## Dependencies

*   `slugify`: A utility to convert tag strings into URL-friendly slugs.
*   `Link` (Gatsby): For creating the navigation links.

## Styling

*   The component is a flex container with a gap between the tag buttons.
*   Each tag is a link styled as a `.badge-button`.
*   The `.selected` class is applied to the active tag, which gives it a different background and text color to indicate its state.
