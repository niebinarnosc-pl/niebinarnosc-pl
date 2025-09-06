# Effects (Tailwind CSS)

> **Tailwind v4 Syntax Advisory**
> This document's examples have been updated to reflect Tailwind CSS v4 syntax. For a comprehensive overview of changes from v3, always refer to the [**Tailwind v4 Upgrade Guide**](./TAILWIND_V4_GUIDE.md).

This document describes common visual effects, transitions, and animations, and how to implement them with Tailwind CSS and Alpine.js.

## 3D Button Effect

This effect gives buttons a sense of depth and interactivity. It can be implemented as a custom utility class.

### Implementation

Add the following to `src/styles/globals.css`:

```css
/* src/styles/globals.css */
@utility btn-3d {
  --btn-shadow-color: var(--color-purple-dark-1); /* Default shadow color */
  box-shadow: 0 4px 0 0 var(--btn-shadow-color);
  transform: translateY(0);
  transition: box-shadow 100ms, border-color 100ms, transform 100ms, color 100ms, background-color 100ms;

  &:active:not(:disabled) {
    transform: translateY(4px);
    box-shadow: 0 0 0 0 var(--btn-shadow-color);
  }
}
```

### Usage

This utility can then be applied to button elements. The `--btn-shadow-color` can be overridden for different button variants.

```html
<button class="button primary btn-3d" style="--btn-shadow-color: var(--color-purple-dark-2);">
  Click Me
</button>
```

## Hide-on-Scroll Header

The main site header disappears on scroll-down and reappears on scroll-up. This is managed with Alpine.js.

*   **Implementation**: A sticky header element will have its visibility toggled by adding/removing a class based on scroll direction.
*   **CSS**:
    *   The header has `sticky top-0 transition-all duration-200`.
    *   The hidden state class (e.g., `.header-hidden`) sets `top: -7rem`.
*   **Alpine.js Logic**:
    ```html
    <header x-data="{ atTop: true, prevY: 0, isVisible: true }" 
            @scroll.window="
                newY = window.scrollY;
                atTop = newY <= 0;
                isVisible = atTop || newY < prevY;
                prevY = newY;
            "
            :class="{ '!-top-28': !isVisible }"
            class="sticky top-0 z-50 transition-all duration-200">
      <!-- Header content -->
    </header>
    ```

## Fade & Expand Transitions

These effects are perfect for Alpine.js's `x-transition` directives, which handle the underlying opacity and transform/scale transitions.

### Fade Example (Alert)

```html
<div x-data="{ show: true }" x-show="show" x-transition.opacity.duration.200ms>
  <!-- Alert content -->
  <button @click="show = false">Close</button>
</div>
```

### Expand Example (Mobile Nav)

The mobile navigation menu can be expanded and collapsed smoothly.

```html
<div x-data="{ expanded: false }">
  <button @click="expanded = !expanded">Menu</button>
  
  <nav x-show="expanded"
       x-transition:enter="grid-rows-[1fr] transition-[grid-template-rows] duration-200"
       x-transition:leave="grid-rows-[0fr] transition-[grid-template-rows] duration-200"
       class="grid grid-rows-[0fr]">
    <div class="overflow-hidden">
      <!-- Nav links -->
    </div>
  </nav>
</div>
```
This uses a `grid-template-rows` transition which is what the original site used and provides a smooth height animation.

---
## Mentioned by

*   [./index.md](./index.md)
