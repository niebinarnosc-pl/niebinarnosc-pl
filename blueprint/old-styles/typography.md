# Typography

This document outlines the typographic system, including fonts, weights, sizes, and styles for various text elements.

## Font Family

*   **Primary Font**: 'Noto Sans', sans-serif.
*   **Weights Used**: 400 (normal), 500 (medium), 700 (bold), 800 (extra-bold).
*   **Default Weight**: 500 (medium).

## Base Styles

*   **Base Text Color**: `$black` (`#2C2C2C`).
*   **Page Background Color**: `$purple-5` (`#F7F2F9`).
*   **Mobile Font Sizing**: The root font size is responsive on small screens, set to `4.5vw`.
*   **Global Box Sizing**: `border-box` is applied to all elements.

## Headings

All headings use a `font-weight` of `700`.

| Element | Font Size (Mobile) | Font Size (Tablet+) | Line Height | Color            | Notes                                         |
|---------|--------------------|---------------------|-------------|------------------|-----------------------------------------------|
| `h1`    | `1.25rem`          | `2rem`              | `1.2`       | `$purple-dark-2` | Page and article titles.                      |
| `h2`    | `1.5rem`           | `2rem`              | `1.5`       | `$black`         | Section titles. Special decorative style (see below). |
| `h4`    | `1.125rem`         | `1.5rem`            | `1.5`       | `$black`         | Component titles and sub-section headings.    |
| `h6`    | `1.25em`           | `1.5em`             | -           | -                | Used in `HomeNav` component.                  |

### Decorative `h2` Style

Section headings (`h2` elements not inside an article) have a distinct decorative style: they appear as if they are "underlined" by a thick, rounded bar of color. This is achieved with a `background-color` and `border-radius` on the `h2` element itself, which has a small height (`1rem`) and uses `text-indent` to place the text before the colored bar.

## Body Text

| Element      | Font Size | Line Height | Notes                               |
|--------------|-----------|-------------|-------------------------------------|
| `p`, `li`    | `1rem`    | `1.5`       | Standard paragraph and list item text. |
| `strong`     | `inherit` | `inherit`   | Color: `$purple-60`, `font-weight: 700`. |
| `a` (links)  | `inherit` | `inherit`   | Inherits color, no underline by default. Underlines on hover. |

## Block Elements

### Blockquote

*   **Font Size**: `1.125rem` (mobile), `1.5rem` (tablet+).
*   **Line Height**: `1.5`.
*   **Styling**:
    *   `border-left: 0.3em solid $purple-100`.
    *   `background-color: $purple-5`.
    *   Vertical `margin` of `1.5rem`.
    *   Horizontal `padding`.

### Lists

*   `ul` elements have a `padding-left` of `1.5rem`.
