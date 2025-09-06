# ContentItem & ContentItemContainer Components

*   **Source**: `niebinarnosc-pl-old/src/components/ContentItem/index.js`
*   **Styling**: `niebinarnosc-pl-old/src/components/ContentItem/styles.scss`

## Purpose and Functionality

This file exports two components:
1.  **`ContentItemContainer`**: A wrapper that maps over an array of `items` and renders a `ContentItem` for each one.
2.  **`ContentItem`**: A highly versatile card-based component used to display summaries of various content types across the site, including definitions, stories, and representation entries. Its appearance and behavior adapt based on its props and the source of its data.

## `ContentItemContainer` Props

| Name       | Type    | Required | Default | Description                               |
|------------|---------|----------|---------|-------------------------------------------|
| `items`    | `array` | Yes      | -       | An array of content nodes to be rendered by `ContentItem`. |
| `isButtons`| `boolean`| No      | `false` | If true, renders items as link-wrapped cards with a "Read more" button. |
| `singleDefinition` | `boolean` | No | `false` | A prop passed down to `ContentItem`. |

## `ContentItem` Props

The `ContentItem` component receives a destructured Gatsby `MarkdownRemark` node, which includes `fields`, `frontmatter`, `htmlAst`, and `excerpt`.

## State Management

*   `imageActive`: A boolean state to control the visibility of the `Lightbox` component for the item's full-size photo.

## Dependencies

*   `GatsbyImage`, `getImage`: For optimized image rendering.
*   `Lightbox`: To display a full-size image in an overlay.
*   `Link` (Gatsby): For internal navigation.
*   `IconArrowRight`: An icon for the "Read more" button.
*   `renderAst`: To render markdown content.
*   `slugify`: To create URL-safe slugs from tags/categories.

## Styling and Behavior

*   **Layout**: A responsive flexbox container. On mobile, it's a simple vertical layout. On larger screens (`tablet-landscape-up`), it features a side image next to the text content.
*   **Thumbnail**: Displays a thumbnail image. If clicked, it opens the `Lightbox` with a full-size version.
*   **Content**: Displays title, author, category, tags (`badge-button`), trigger warnings, and a description or excerpt.
*   **Variants**:
    *   **Standard**: A static content card.
    *   **Button/Link (`isButton`)**: The entire card is wrapped in a `<Link>` and has a hover effect (`button-border` mixin). It shows an excerpt of the content.
