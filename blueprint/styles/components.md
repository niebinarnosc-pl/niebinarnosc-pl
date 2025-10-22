# Component Styles (Tailwind CSS)

> **Tailwind v4 Syntax Advisory**
> This document's examples have been updated to reflect Tailwind CSS v4 syntax. For a comprehensive overview of changes from v3, always refer to the [**Tailwind v4 Upgrade Guide**](./TAILWIND_V4_GUIDE.md).

This document provides a detailed breakdown of styling patterns for major UI components using Tailwind CSS.

## Alert

*   **Layout**: `flex justify-between items-start gap-6`.
*   **Base Styles**: `rounded-xl p-4`.
*   **Variants**:
    *   `.alert-success`: `bg-purple-10 text-purple-100` (Note: `purple-10` is often used for a softer background).
    *   `.alert-error`: `bg-[#ffe6e6] text-[#ff2222]`.
*   **Implementation**: These styles are typically applied directly. When used with Alpine.js for dynamic visibility (e.g., for form submission feedback), a close button can be included.

### Example with Close Button (Alpine.js)

```html
<!-- Assumes x-data is managed by a parent component -->
<div x-show="successMessage" style="display: none;" 
     class="flex justify-between items-start gap-6 rounded-xl p-4 mb-4 bg-purple-10 text-purple-100">
    <div>
        <p class="font-bold !mb-2">Success!</p>
        <p class="!mb-0">Your message was sent.</p>
    </div>
    <button @click="successMessage = false" type="button" class="bg-transparent border-none p-0 cursor-pointer hover:underline">
        <!-- Assumes an <Icon /> component is available -->
        <Icon name="close" size="1.3em" />
        <span class="sr-only">Close</span>
    </button>
</div>
```

## Buttons

### Standard Button (`btn`)

A base `btn` utility can be created for common styles.

```css
/* src/styles/globals.css */
@utility btn {
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

  @media (min-width: 640px) { /* sm breakpoint */
    width: fit-content;
  }
  
  &:hover {
    text-decoration-line: none;
  }
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

*   **Layout**: Hidden by default, `lg:block`. A `flex justify-between items-center` container.
*   **Styling**: `px-6 py-5 bg-white` with the static 3D border effect (a border and box-shadow that don't change on hover).

### Mobile Header (`.mobile-site-header`)

*   **Layout**: `flex flex-col lg:hidden`.
*   **Styling**: `p-4 sm:p-6 bg-white` with static 3D border.
*   **Nav Expansion**: The nav wrapper uses a grid-template-rows transition, controlled by Alpine.js. See [effects.md](./effects.md).

### Mobile Bottom Buttons

*   **Layout**: `sticky bottom-0 z-50 lg:hidden`. Contains a `nav` with `flex justify-center w-full`.
*   **Styling**: `bg-white border-t border-purple-60`.
*   **Links**: `flex flex-col items-center gap-1 p-2 text-gray-80`.
*   **Active Link**: `text-purple-100 bg-purple-5 font-bold`.

## Home Nav

*   **Layout**: A flex-based grid. `flex flex-col gap-4 sm:gap-6`. Inner divs are also `flex flex-col sm:flex-row gap-4 sm:gap-6`.
*   **Item Styling**: Each link is a `.btn-3d` element.
*   **Hover Effect**: On hover, the icon's background element expands to fill the card. This requires careful positioning and transitions.
    *   The link is `relative`.
    *   The icon wrapper is `relative` with a `z-10`.
    *   The expanding background `div` is `absolute` and transitions its `width` and `height` from fixed values to `100%` on `group-hover`. The link needs to be a `group`.

## Content Cards

Content cards are used throughout the site to display summaries of definitions, stories, and representation entries. The implementation uses a base layout component (`src/components/ContentCard.astro`) with specific card components for each content type.

### Base Component (`ContentCard.astro`)

*   **Purpose**: Provides the shared responsive layout (flexbox, padding, gaps) and common slots (`thumbnail`, `header`, `body`, `footer`).
*   **Props**:
    *   `href?: string`: If provided, the entire card becomes an `<a>` tag, styled as a clickable button-like card.
*   **Styling**:
    *   **Standard View**: Uses the `.card` utility class for a white background with a 3D border.
    *   **Link View (`href` provided)**: Uses the `.btn-card` utility class, which adds different border/shadow colors on hover. It also adds the `group` class to enable styling of child elements on hover (e.g., `group-hover:text-purple-80` on headings).

### Specific Card Components (e.g., `DefinitionCard.astro`)

*   **Purpose**: Provide the content and styling variations for a specific content type.
*   **Props**:
    *   `variant?: 'full' | 'summary'`: Controls the presentation.
        *   `'summary'`: Renders a compact view with an excerpt. Passes an `href` to `ContentCard` to make it a link. Displays a decorative "Read more" button in the footer.
        *   `'full'`: Renders the full content view with functional buttons in the footer.
*   **Styling**: Specific cards are responsible for type-specific styles, such as the `aspect-square` or `aspect-video` class on the thumbnail element they pass into the `thumbnail` slot.

---
## Mentioned by

*   [./index.md](./index.md)
