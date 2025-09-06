# Icons Component System

*   **Source**: `niebinarnosc-pl-old/src/components/Icons/index.js`

## Purpose and Functionality

This file defines the SVG icon system for the project. It exports a base component, `IconBase`, and a series of individual icon components that use it. This approach provides a consistent way to style and size icons throughout the application.

## `IconBase` Component

`IconBase` is the foundational component that wraps the SVG markup.

### `IconBase` Props

| Name       | Type            | Default | Description                            |
|------------|-----------------|---------|----------------------------------------|
| `children` | `node`          | -       | The `<path>` element(s) for the SVG.    |
| `size`     | `number/string` | `4/3`   | The size of the icon.                  |
| `sizeUnit` | `string`        | `em`    | The unit for the size (e.g., `em`, `rem`, `px`). |

## Individual Icons

Each exported icon (e.g., `IconArrowRight`, `IconEmail`) is a functional component that passes its props to `IconBase` and includes the specific SVG `<path>` data for that icon as a child.

## Behavior and Styling

*   **Sizing**: By default, icons have a width and height of `4/3em`, which makes them scale relative to the `font-size` of their parent element. The size can be overridden with the `size` prop.
*   **Coloring**: The `fill` and `stroke` attributes of the SVG are set to `currentColor`. This allows the icon's color to be controlled by the CSS `color` property of its parent.
*   **ViewBox**: All icons use a consistent `0 0 16 16` viewBox.
