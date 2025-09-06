# Styles Blueprint (Astro/Tailwind CSS)

> **Tailwind v4 Syntax Advisory**
> This document's examples have been updated to reflect Tailwind CSS v4 syntax. For a comprehensive overview of changes from v3, always refer to the [**Tailwind v4 Upgrade Guide**](./TAILWIND_V4_GUIDE.md).
> Key takeaway: custom colors defined in `@theme` (e.g., `--color-purple-100`) are used directly in classes (e.g., `bg-purple-100`, `text-purple-100`).

This module defines the canonical styles blueprint for the project, built with Astro and Tailwind CSS. It is the authoritative guide for the project's visual identity and styling implementation.

This blueprint is based on the original design from the Gatsby/Sass project, documented in [`/blueprint/old-styles`](../old-styles/index.md), and adapted for the new technology stack.

## Style System Documentation

*   [`colors.md`](./colors.md): Defines the project's color palette as Tailwind CSS theme variables.
*   [`layout.md`](./layout.md): Outlines the responsive layout system, custom breakpoints, and main site structure.
*   [`typography.md`](./typography.md): Describes the fonts, base styles for text, and typographic scale using Tailwind utilities and custom base styles.
*   [`effects.md`](./effects.md): Documents common visual effects like button styles, animations, and decorative elements, and how to implement them with Tailwind.
*   [`iconography.md`](./iconography.md): Explains how SVG icons are managed and integrated using a centralized Astro component.
*   [`components.md`](./components.md): Provides patterns for styling components, with a focus on creating reusable component styles and utility classes.
*   [`issues.md`](./issues.md): A log for any significant issues or quirks discovered within the Tailwind CSS styling implementation.

## Tailwind CSS Version and Guide

This project uses **Tailwind CSS v4**. All code and conventions should be compliant with this version. For a detailed guide on migrating from v3 and understanding the key changes in v4, refer to the local guide:

*   **[`TAILWIND_V4_GUIDE.md`](./TAILWIND_V4_GUIDE.md)**
---
## Mentioned by

*(This section will be populated if other blueprint files, outside of the parent directory or direct children, reference this document.)*
