# Effects

This document describes common visual effects, transitions, and animations used throughout the site.

## 3D Button Effect

This effect is applied to most buttons and some clickable card components to give them a sense of depth and interactivity. It is implemented via the `button-border` Sass mixin.

*   **Resting State**: A `box-shadow` is used to simulate a bottom "edge" (`box-shadow: 0 4px 0 0 $color;`). The color matches the border or a darker shade of the background.
*   **Hover State**: The `border-color` and `box-shadow` color typically become slightly darker or more saturated.
*   **Active (Pressed) State**:
    *   The element is shifted down by `4px` using `transform: translateY(4px)`.
    *   The `box-shadow` is removed (`box-shadow: 0 0 0 0 $color;`), making the button appear flush with the surface.
*   **Transition**: A fast `100ms` transition is applied to `transform`, `box-shadow`, `border-color`, and `color` for a snappy feel.

## Hide-on-Scroll Header

The main site header is sticky but disappears when the user scrolls down, and reappears when they scroll up. This is a common UX pattern to maximize screen real estate.

*   **Implementation**: The header has `position: sticky` and `top: 0`.
*   **Hiding**: When the user scrolls down, a `.hidden` class is added via JavaScript. This class sets `top: -7rem`, which moves the header completely out of the viewport.
*   **Transition**: A `200ms` transition on the `top` property ensures the header animates smoothly in and out of view.

## Fade & Expand Transitions

These effects are used for elements that appear or disappear dynamically, such as alerts or expandable navigation menus. They are designed for use with a library like `react-transition-group`.

*   **Fade Transition**:
    *   **Enter**: Fades in by transitioning `opacity` from `0` to `1`.
    *   **Exit**: Fades out by transitioning `opacity` from `1` to `0`.
    *   **Duration**: `200ms`.

*   **Expand Transition**:
    *   **Enter**: Expands by transitioning `max-height` from `0` to a large value (e.g., `50rem`).
    *   **Exit**: Collapses by transitioning `max-height` from a large value to `0`.
    *   **Duration**: `200ms`.

## Lightbox Overlay

Used for displaying images in a full-screen modal.

*   **Implementation**: A `div` with `position: fixed` that covers the entire viewport (`top: 0`, `left: 0`, `width: 100vw`, `height: 100vh`).
*   **Background**: A semi-transparent black overlay (`background-color: rgba(0,0,0,0.6)`).
*   **Content**: The image is centered within this overlay.
