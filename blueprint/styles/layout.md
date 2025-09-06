# Layout (Tailwind CSS)

> **Tailwind v4 Syntax Advisory**
> This document's examples have been updated to reflect Tailwind CSS v4 syntax. For a comprehensive overview of changes from v3, always refer to the [**Tailwind v4 Upgrade Guide**](./TAILWIND_V4_GUIDE.md).

This document outlines the responsive layout system, custom breakpoints, and main site structure using Tailwind CSS.

## Breakpoints

To match the original design's responsive behavior, we will define custom breakpoints in `src/styles/globals.css`.

| Name              | Size       | Old Mixin                   | Notes                                         |
|-------------------|------------|-----------------------------|-----------------------------------------------|
| `tp` (tablet portrait) | `600px`    | `for-tablet-portrait-up`    | For tablets in portrait mode and larger.      |
| `tl` (tablet landscape) | `900px`    | `for-tablet-landscape-up`   | For tablets in landscape mode and larger.     |
| `dt` (desktop)      | `1200px`   | `for-desktop-up`            | For standard desktop monitors.                |
| `bdt` (big desktop) | `1800px`   | `for-big-desktop-up`        | For large desktop monitors.                   |

### Implementation

The breakpoints are defined in the `@theme` block in `src/styles/globals.css`.

```css
/* src/styles/globals.css */
@theme {
  --breakpoint-tp: 600px;
  --breakpoint-tl: 900px;
  --breakpoint-dt: 1200px;
  --breakpoint-bdt: 1800px;
}
```

Usage in HTML will be, for example: `w-full tl:w-1/2`.

## Page Structure

### Main Layout

The main site layout is handled by `src/layouts/Layout.astro` and uses a flexbox-based sticky footer pattern.

*   The `<body>` tag is a flex column with `min-h-screen`.
*   The `<main>` tag grows to fill available space with `flex-1`.

### Page Content Container

The primary content container on most pages will be a `<section>` or `<article>` element.

*   **Max Width**: `max-w-[72rem]`.
*   **Centering**: Horizontally centered using `mx-auto`.
*   **Side Padding**:
    *   Mobile: `px-4` (`1rem`).
    *   Tablet Landscape & up: `tl:px-6` (`1.5rem`).
*   **Top Margin**: A top margin is applied to create space below the sticky header. This can be `mt-26` (`6.5rem`) on mobile and `tp:mt-30` (`7.5rem`) on tablet and up.

Example:
```html
<section class="page mx-auto w-full max-w-[72rem] px-4 tl:px-6 mt-26 tp:mt-30 pb-6 tp:pb-11">
  <!-- Page content -->
</section>
```

## Column Layout

A two-column layout can be created using Flexbox or Grid utilities.

*   **Behavior**: Stacks vertically by default (mobile-first), and becomes a horizontal row on tablet landscape screens (`tl:flex-row`).
*   **Reversal**: The order can be reversed on desktop with `tl:flex-row-reverse`.
*   **Gapping**: `gap-*` utilities provide spacing between columns.

Example:
```html
<div class="flex flex-col tl:flex-row tl:flex-row-reverse gap-4 tl:gap-14">
  <div class="flex-1">Column 1</div>
  <div class="flex-1">Column 2</div>
</div>
```

---
## Mentioned by

*   [./index.md](./index.md)
