# Layout

This document outlines the responsive layout system, breakpoints, and main site structure.

## Breakpoints

The responsive design uses a set of named breakpoints to control layout changes across different screen sizes.

| Name                        | Media Query                 | Notes                                         |
|-----------------------------|-----------------------------|-----------------------------------------------|
| `for-phone-only`            | `(max-width: 599px)`        | Styles for small mobile devices.              |
| `for-tablet-portrait-up`    | `(min-width: 600px)`        | Styles for tablets in portrait mode and larger. |
| `for-tablet-portrait-down`  | `(max-width: 899px)`        | Styles for tablets in portrait mode and smaller. |
| `for-tablet-landscape-up`   | `(min-width: 900px)`        | Styles for tablets in landscape mode and larger. |
| `for-tablet-landscape-down` | `(max-width: 1199px)`       | Styles for tablets in landscape mode and smaller.|
| `for-desktop-up`            | `(min-width: 1200px)`       | Styles for standard desktop monitors.         |
| `for-desktop-down`          | `(max-width: 1799px)`       | Styles for standard desktops and smaller.     |
| `for-big-desktop-up`        | `(min-width: 1800px)`       | Styles for large desktop monitors.            |

## Page Structure

### Main Layout

The main site layout (`<Layout>`) uses a flexbox-based sticky footer pattern.

*   The root container (`.site-root`) is a flex column with `min-height: 100vh`.
*   The main content area (`.site-main`) grows to fill available space with `flex: 1`.
*   This ensures the footer (`<Footer>`) stays at the bottom of the viewport on pages with short content.

### Content Container (`.page`)

The primary content on each page is wrapped in a `.page` container.

*   **Max Width**: `72rem` (`$page-max-width`).
*   **Centering**: Horizontally centered using `margin: 0 auto`.
*   **Side Padding**:
    *   Mobile (`< 900px`): `1rem` (`$side-padding-small`).
    *   Desktop (`>= 900px`): `1.5rem` (`$side-padding-big`).
*   **Top Margin**: Has a top margin to create space below the sticky header (`6.5rem` on mobile, `7.5rem` on tablet+).

## Column Layout (`.columns`)

A two-column layout is available for use within articles and other content areas.

*   **Behavior**: Stacks vertically (flex-direction: column) on mobile. Becomes a horizontal row (flex-direction: row) on tablet landscape screens and larger.
*   **Reversal**: An optional `.reverse` class can be added to reverse the column order on desktop (`flex-direction: row-reverse`), which is useful for alternating image/text layouts.
*   **Gapping**: Uses `gap` for spacing between columns.
