# HomeNav Component

*   **Source**: `niebinarnosc-pl-old/src/components/HomeNav/index.js`
*   **Styling**: `niebinarnosc-pl-old/src/components/HomeNav/styles.scss`

## Purpose and Functionality

The `HomeNav` component displays the primary navigation links on the homepage. It is presented as a grid of large, colorful, and interactive cards, each leading to a main section of the site.

It is composed of a main `HomeNav` component and a `HomeNavItem` sub-component.

## `HomeNavItem` Props

| Name      | Type     | Required | Description                     |
|-----------|----------|----------|---------------------------------|
| `to`      | `string` | Yes      | The destination URL.            |
| `color`   | `string` | Yes      | The color theme (`yellow`, `purple`, `black`). |
| `icon`    | `node`   | Yes      | The icon component to display.  |
| `heading` | `string` | Yes      | The main text for the nav item. |
| `desc`    | `string` | Yes      | The descriptive sub-text.       |

## Dependencies

*   `Link` (Gatsby): For navigation.
*   Various `Icon` components.

## Styling and Effects

*   The layout is a responsive flex-based grid that rearranges from a single column to multiple columns on larger screens.
*   Each `HomeNavItem` is a link with distinct styling based on its `color` prop (`.yellow`, `.purple`, `.black`).
*   **3D Button Effect**: Each item uses the `button-border` mixin to create a pressable button effect.
*   **Hover Animation**: On hover, a background `div` behind the icon expands to fill the entire card, creating a dynamic visual effect. This is achieved with absolute positioning and transitions.
