# Component Styles (Tailwind CSS)

> **Tailwind v4 Syntax Advisory**
> This document's examples have been updated to reflect Tailwind CSS v4 syntax. For a comprehensive overview of changes from v3, always refer to the [**Tailwind v4 Upgrade Guide**](./TAILWIND_V4_GUIDE.md).

This document provides a detailed breakdown of styling patterns for major UI components using Tailwind CSS.

## Alert

*   **Layout**: `flex justify-between items-start gap-6`.
*   **Base Styles**: `rounded-xl p-4`.
*   **Variants**:
    *   `.alert-success`: `bg-purple-20 text-purple-100`.
    *   `.alert-error`: `bg-[#ffe6e6] text-[#ff2222]`.
*   **Implementation**: A custom utility can be created for variants.

## Buttons

### Standard Button (`.btn`)

A base `.btn` class can be created for common styles.

```css
/* src/styles/globals.css */
@utility .btn {
  display: flex;
  gap: 0.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  font-weight: 800;
  font-size: 1rem;
  line-height: 1.5rem;
  border-radius: 0.75rem;
  cursor: pointer;
  width: 100%;
  text-decoration-line: none;
}
@media (min-width: 600px) { /* tp breakpoint */
  .btn {
    width: fit-content;
  }
}
@utility .btn:hover {
  text-decoration-line: none;
}
```

*   **Variants**:
    *   **Primary**: `btn bg-purple-100 text-white border border-purple-dark-1 hover:bg-purple-dark-1 hover:border-purple-dark-2`. Use with `.btn-3d`.
    *   **Secondary**: `btn bg-white text-purple-80 border border-purple-60 hover:text-purple-100 hover:border-purple-80 hover:bg-purple-5`. Use with `.btn-3d` and custom shadow color.
    *   **Disabled**: `btn bg-purple-10 text-purple-40 border border-purple-20` with a matching box shadow color.

### Clear Button

*   **Styling**: No base class needed. Apply utilities directly: `bg-transparent border-none p-0 cursor-pointer hover:underline`.

### Badge Button

*   **Use Case**: Tags and category links.
*   **Styling**: `inline-flex h-8 px-3 py-1 justify-center items-center whitespace-nowrap text-sm font-medium rounded-full border-none transition-colors duration-100`.
*   **State/Variants**:
    *   **Normal**: `bg-purple-10 text-indigo hover:bg-purple-20`.
    *   **Selected**: `bg-indigo text-white`.

## Form Elements

*   **Layout**: `flex flex-col gap-3`.
*   **Wrapper (`label`)**: `flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-40 has-[:focus]:outline has-[:focus]:outline-1 has-[:focus]:outline-purple-100`.
*   **Icon**: `text-gray-80 group-has-[:focus]:text-purple-100`. (The label needs to be the group).
*   **Input**: `p-0 m-0 border-none rounded-none w-full focus:outline-none`.

## Header

The header has three parts: Desktop, Mobile (Top), and Mobile (Bottom Nav). Alpine.js controls mobile nav expansion and hide-on-scroll behavior.

### Desktop Header (`.standard-site-header`)

*   **Layout**: Hidden by default, `tl:block`. A `flex justify-between items-center` container.
*   **Styling**: `px-6 py-5 bg-white` with the static 3D border effect (a border and box-shadow that don't change on hover).

### Mobile Header (`.mobile-site-header`)

*   **Layout**: `flex flex-col tp:hidden` (or `tl:hidden`).
*   **Styling**: `p-4 tp:p-6 bg-white` with static 3D border.
*   **Nav Expansion**: The nav wrapper uses a grid-template-rows transition, controlled by Alpine.js. See [effects.md](./effects.md).

### Mobile Bottom Buttons

*   **Layout**: `sticky bottom-0 z-50 tl:hidden`. Contains a `nav` with `flex justify-center w-full`.
*   **Styling**: `bg-white border-t border-purple-60`.
*   **Links**: `flex flex-col items-center gap-1 p-2 text-gray-80`.
*   **Active Link**: `text-purple-100 bg-purple-5 font-bold`.

## Home Nav

*   **Layout**: A flex-based grid. `flex flex-col gap-4 tp:gap-6`. Inner divs are also `flex flex-col tp:flex-row gap-4 tp:gap-6`.
*   **Item Styling**: Each link is a `.btn-3d` element.
*   **Hover Effect**: On hover, the icon's background element expands to fill the card. This requires careful positioning and transitions.
    *   The link is `relative`.
    *   The icon wrapper is `relative` with a `z-10`.
    *   The expanding background `div` is `absolute` and transitions its `width` and `height` from fixed values to `100%` on `group-hover`. The link needs to be a `group`.

---
## Mentioned by

*   [./index.md](./index.md)
