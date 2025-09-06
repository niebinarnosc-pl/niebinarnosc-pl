# Typography (Tailwind CSS)

> **Tailwind v4 Syntax Advisory**
> This document's examples have been updated to reflect Tailwind CSS v4 syntax. For a comprehensive overview of changes from v3, always refer to the [**Tailwind v4 Upgrade Guide**](./TAILWIND_V4_GUIDE.md).

This document outlines the typographic system for the new project, implemented with Tailwind CSS and global base styles.

## Font Family

*   **Primary Font**: 'Noto Sans'. This is imported in `src/layouts/Layout.astro` via the `@fontsource/noto-sans` package.
*   **Implementation**: The font is applied to the `html` element in `src/styles/globals.css`.

### Font Weights

The project uses several font weights. We will map them to Tailwind's `font-*` utilities.

*   `400` (normal): `font-normal`
*   `500` (medium): `font-medium` (Default body weight)
*   `700` (bold): `font-bold`
*   `800` (extra-bold): `font-extrabold`

## Base Styles

Base typographic styles are defined in `src/styles/globals.css` within the `@layer base` directive.

```css
/* src/styles/globals.css */
@layer base {
  html {
    font-family: 'Noto Sans', sans-serif;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    scroll-padding-top: 6rem; /* 96px */
  }
  @media (min-width: 640px) { /* sm breakpoint */
    html {
      scroll-padding-top: 7rem; /* 112px */
    }
  }
  @media (max-width: 639px) { /* below sm breakpoint */
    html {
      font-size: 4.5vw;
    }
  }

  *, *::before, *::after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }

  body {
    @apply font-medium bg-purple-5 text-black;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-bold;
  }
  
  strong {
    @apply font-bold text-purple-60;
  }

  a {
    @apply text-inherit no-underline hover:underline;
  }

  /* ... other base styles ... */
}
```

## Heading Styles

Specific heading styles should be applied using utility classes on the elements themselves, or within a "prose" like container for CMS-rendered content.

| Element | Mobile (`<640px`)          | Tablet+ (`>=640px`)      | Color            |
|---------|----------------------------|--------------------------|------------------|
| `h1`    | `text-xl` (`1.25rem`)      | `sm:text-3xl` (`2rem`)   | `text-purple-dark-2` |
| `h2`    | `text-2xl` (`1.5rem`)      | `sm:text-3xl` (`2rem`)   | `text-black`     |
| `h4`    | `text-lg` (`1.125rem`)     | `sm:text-2xl` (`1.5rem`) | `text-black`     |

### Decorative `h2` Style

The decorative `h2` used for section titles can be recreated with a custom utility class.

```css
/* in src/styles/globals.css */
@utility h2Decorated {
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 700;
  color: var(--color-black);
  height: 1rem;
  background-color: var(--color-purple-10);
  border-radius: 0.75rem;
  padding: 0;
  margin-left: 1.5rem;
  text-indent: -1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: flex-end;

  @media (min-width: 640px) { /* sm breakpoint */
    font-size: 2rem;
    margin-bottom: 2rem;
  }
}
```

## Block Elements

### Blockquote

Base styles for blockquotes in CMS content:

```css
/* in src/styles/globals.css, inside @layer base */
blockquote {
  @apply text-lg sm:text-2xl leading-normal border-l-[0.3em] border-purple-100 bg-purple-5 my-6 py-2 px-6;
}
blockquote p {
  @apply text-base;
}
```

---
## Mentioned by

*   [./index.md](./index.md)
