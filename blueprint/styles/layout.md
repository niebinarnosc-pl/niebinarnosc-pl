# Layout (Tailwind CSS)

> **Tailwind v4 Syntax Advisory**
> This document's examples have been updated to reflect Tailwind CSS v4 syntax. For a comprehensive overview of changes from v3, always refer to the [**Tailwind v4 Upgrade Guide**](./TAILWIND_V4_GUIDE.md).

This document outlines the responsive layout system, custom breakpoints, and main site structure using Tailwind CSS.

## Breakpoints

The project will use Tailwind's default breakpoints. We will map the old site's custom breakpoints to the nearest Tailwind equivalent to guide the responsive design.

| Old Name (Size)         | Tailwind Equivalent (Size) | Usage Notes                                       |
|-------------------------|----------------------------|---------------------------------------------------|
| `tp` (600px)            | `sm` (640px)               | For tablets in portrait mode and larger.          |
| `tl` (900px)            | `lg` (1024px)              | For tablets in landscape mode and larger.         |
| `dt` (1200px)           | `xl` (1280px)              | For standard desktop monitors.                    |
| `bdt` (1800px)          | `2xl` (1536px)             | For large monitors. Note: This is smaller than original. |

This means we do not need to define custom breakpoints in `src/styles/globals.css`. Responsive utilities will use Tailwind's standard prefixes (e.g., `sm:`, `lg:`, `xl:`).

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
    *   Tablet Landscape & up: `lg:px-6` (`1.5rem`).
*   **Top Margin**: A top margin is applied to create space below the sticky header. This can be `mt-26` (`6.5rem`) on mobile and `sm:mt-30` (`7.5rem`) on tablet and up.

Example:
```html
<section class="page mx-auto w-full max-w-[72rem] px-4 lg:px-6 mt-26 sm:mt-30 pb-6 sm:pb-11">
  <!-- Page content -->
</section>
```

## Column Layout

A two-column layout can be created using Flexbox or Grid utilities.

*   **Behavior**: Stacks vertically by default (mobile-first), and becomes a horizontal row on large screens (`lg:flex-row`).
*   **Reversal**: The order can be reversed on large screens with `lg:flex-row-reverse`.
*   **Gapping**: `gap-*` utilities provide spacing between columns.

Example:
```html
<div class="flex flex-col lg:flex-row lg:flex-row-reverse gap-4 lg:gap-14">
  <div class="flex-1">Column 1</div>
  <div class="flex-1">Column 2</div>
</div>
```

---
## Mentioned by

*   [./index.md](./index.md)
