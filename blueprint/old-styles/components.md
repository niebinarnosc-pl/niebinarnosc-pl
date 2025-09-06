# Component Styles

This document provides a detailed breakdown of the styling for each major UI component in the project.

## Alert

*   **Layout**: A flex container with space between the message and the close button.
*   **Base Styles**: `border-radius: 0.75rem`, `padding: 1rem`.
*   **Variants**:
    *   `.success`: Light purple background (`$purple-20`) with dark purple text (`$purple-100`).
    *   `.error`: Light red background (`#ffe6e6`) with red text (`#ff2222`).

## Article Container

*   **Layout**: The main wrapper for long-form article content (e.g., History, Guide).
*   **Styling**: White background, responsive padding, and a `border-radius` on larger screens.
*   **Content Styling**:
    *   Paragraphs (`p`) have a `max-width` of `50rem` to improve readability.
    *   Headings (`h2.article-h2`) have specific top/bottom margins.
    *   Horizontal rules (`hr`) are styled as a thin purple line (`border-bottom: 1px solid $purple-10`).

## Buttons

### Standard Button (`.button`)

*   **Layout**: Flex container to align icon and text.
*   **Sizing**: `padding: 0.75rem 2rem`. Full-width on mobile, `width: fit-content` on tablet+.
*   **Typography**: `font-weight: 800`, `font-size: 1rem`.
*   **Base Styles**: `border-radius: 12px`.
*   **Variants**:
    *   `.primary`: Purple background (`$purple-100`), white text. Uses the "3D Button Effect".
    *   `.secondary`: White background, purple text (`$purple-80`). Uses the "3D Button Effect".
    *   `:disabled`: Light purple (`$purple-10`) background and border, pale purple (`$purple-40`) text.

### Clear Button (`.clear-button`)

*   **Styling**: Transparent background, no border. Inherits text color and font styles. Underlines on hover.

### Badge Button (`.badge-button`)

*   **Use Case**: Used for tags and category links.
*   **Styling**: Pill-shaped (`border-radius: 100px`), small font size (`0.875rem`), and padding.
*   **State/Variants**:
    *   **Normal**: Light purple background (`$purple-10`), dark indigo text (`$indigo`). Darkens slightly on hover.
    *   **Selected**: Dark indigo background (`$indigo`), white text.
    *   **Error**: Light red background, red text. Used for trigger warnings.

## Contact Card

*   **Layout**: A flex container, stacking vertically on mobile and horizontally on desktop.
*   **Styling**: Brand purple background (`$purple-100`), white text. Responsive padding and `border-radius` on desktop.

## Form Elements (Contact Form)

*   **Layout**: The form is a flex column with `gap`.
*   **Inputs, Textareas, and Labels**:
    *   Styled as a single unit with a white background, `padding`, `border-radius`, and a gray border.
    *   The icon and input field inside a `label` are spaced with `gap`.
    *   **Focus State**: An outer purple outline (`outline: 1px solid $purple-100`) is applied to the `label` on `:focus-within`. The icon color also changes to purple.

## Content Item

*   **Use Case**: A versatile card component for displaying summaries of stories, definitions, and representations.
*   **Layout**: A main flex container, with responsive `gap`.
*   **Structure**:
    *   **Thumbnail**: A square or rectangular image on the left.
    *   **Text Container**: Contains the header, description, and action buttons.
    *   **Header**: Contains the title, author/tags, and category.
*   **Variants**:
    *   **Standard**: White background with padding.
    *   **Link Wrapper (`.content-item-as-link`)**: The entire component is a link and gains the "3D Button Effect" on hover/active.
*   **Responsive**: The thumbnail is hidden on mobile and appears as a side image on tablet landscape and up.

## Footer

*   **Layout**: Flex container, space-between on desktop, column on mobile.
*   **Styling**: Dark purple background (`$purple-dark-2`), very light purple text (`$purple-5` and `$purple-20`).

## Header

### Standard Header (Desktop)

*   **Layout**: Flex container to space the logo and navigation links.
*   **Styling**: White background, `1.25rem 1.5rem` padding. Has the `button-border` effect applied statically (no hover).
*   **Navigation Links**:
    *   **Hover/Active State**: Text becomes bolder (`700`) and color changes to `$indigo`. No underline. A subtle negative margin is used to keep the layout stable when the font weight changes.

### Mobile Header

*   **Layout**: A flex column. The top part (`.title-bar`) contains the logo and menu button. The bottom part (`.nav-wrapper`) is an expandable navigation container.
*   **Expansion**: Uses `grid-template-rows` to animate the nav opening and closing. The `nav` has `overflow: hidden`.
*   **Styling**: White background, `button-border` effect.

### Mobile Bottom Buttons

*   **Layout**: A sticky navigation bar at the bottom of the screen on mobile.
*   **Styling**: White background, top border. Icons are stacked on top of text labels.
*   **Active State**: The active link has a purple background (`$purple-5`), purple text (`$purple-100`), and bold font weight.

## Home Nav

*   **Layout**: A responsive flex-based grid of navigation items.
*   **Item Styling**: Each item is a link with an icon and text.
*   **Color Variants**: Items have distinct color schemes based on a class (`.yellow`, `.purple`, `.black`), which controls background and text colors.
*   **Effects**: Uses the "3D Button Effect" on hover, with a special border animation. On hover, the icon's background square expands to fill the entire card.

## Page

*   **Purpose**: The main wrapper for page content.
*   **Styling**: It's primarily responsible for setting the page's `max-width`, horizontal centering, and side `padding`. It also defines the base styles for generic HTML elements within its scope, such as `h1`, `h2`, `p`, `blockquote`, etc. (See Typography blueprint).
