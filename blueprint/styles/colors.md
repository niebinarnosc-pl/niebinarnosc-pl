# Color Palette (Tailwind CSS)

> **Tailwind v4 Syntax Advisory**
> This document's examples have been updated to reflect Tailwind CSS v4 syntax. For a comprehensive overview of changes from v3, always refer to the [**Tailwind v4 Upgrade Guide**](./TAILWIND_V4_GUIDE.md).
> Key takeaway: custom colors defined in `@theme` (e.g., `--color-purple-100`) are used directly in classes (e.g., `bg-purple-100`, `text-purple-100`).

This document defines the project's color palette for use with Tailwind CSS v4. The colors are defined as CSS custom properties within an `@theme` block in `src/styles/globals.css`.

This approach makes all colors available as standard Tailwind utility classes (e.g., `bg-purple-100`, `text-yellow-80`, `border-gray-40`).

## Color Definitions

The following code should be placed in `src/styles/globals.css` to define the color palette.

```css
/* src/styles/globals.css */
@theme {
  /* Grayscale */
  --color-black: #2c2c2c;
  --color-gray-100: var(--color-black);
  --color-gray-80: #24252d;
  --color-gray-60: #454d56;
  --color-gray-40: #a3a3a3;
  --color-gray-20: #d1d1d1;
  --color-gray-10: #e9e9e9;
  --color-gray-5: #f3f3f3;
  --color-white: #ffffff;

  /* Purple Scale */
  --color-indigo: #1f2044;
  --color-purple-dark-2: #2e0242;
  --color-purple-dark-1: #430063;
  --color-purple-100: #61008f;
  --color-purple-80: #8133a5;
  --color-purple-60: #a066bc;
  --color-purple-40: #c099d2;
  --color-purple-20: #dfcce9;
  --color-purple-10: #f0e6f4;
  --color-purple-5: #f7f2f9;

  /* Yellow Scale */
  --color-yellow-100: #f5dc00;
  --color-yellow-80: #f7e333;
  --color-yellow-60: #f9ea66;
  --color-yellow-40: #fbf199;
  --color-yellow-20: #fdf8cc;
  --color-yellow-10: #fefce6;
  --color-yellow-5: #fefdf2;
}
```

---
## Mentioned by

*   [./index.md](./index.md)
