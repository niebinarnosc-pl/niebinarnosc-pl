# Styles Issues (Tailwind CSS)

> **Tailwind v4 Syntax Advisory**
> This document's examples have been updated to reflect Tailwind CSS v4 syntax. For a comprehensive overview of changes from v3, always refer to the [**Tailwind v4 Upgrade Guide**](./TAILWIND_V4_GUIDE.md).
> Key takeaway: custom colors defined in `@theme` (e.g., `--color-violet`) are used directly in classes (e.g., `bg-violet`, `text-violet-dark1`).

This document is a log for any significant issues, problems, or non-obvious behaviors discovered within the Tailwind CSS-based styling implementation of the website. This can help inform development by highlighting potential pitfalls or areas that require special attention.

# 1. `@apply` and dynamic color functions are not supported within `@utility` or `@layer`

*   **Issue Date**: 2025-08-10
*   **Symptom**: PostCSS build errors: `@apply is not supported within nested at-rules like @utility` and `The text-color(blue-dark3) class does not exist.`
*   **Context**: These errors occur when using `@apply` with either standard utility classes or dynamic color functions (e.g., `color()`) inside a custom utility defined with `@utility` or within `@layer base`. This is a design limitation of Tailwind CSS v4's engine.
*   **Resolution/Workaround**: Manually expand the utilities and functions into their corresponding raw CSS properties.
    *   For example, `@apply rounded-3xl;` becomes `border-radius: 1.5rem;`.
    *   `@apply text-color(blue-dark3);` becomes `color: var(--color-blue-dark3);`.
    *   If a utility like `.btn-rainbow` was composing another utility (`@apply btn`), its styles must be updated to manually include the properties from `.btn` instead of using `@apply`.
*   **Files Affected**: `src/styles/globals.css`, `blueprint/styles/components.md`, `blueprint/styles/effects.md`, `blueprint/styles/typography.md`.
*   **Status**: Resolved.

# 2. Incorrect Syntax for Custom Animation and Keyframe Definitions

*   **Issue Date**: 2025-08-11
*   **Symptom**: Custom animations (e.g., `blink`, `spin-slow`) were not working as expected.
*   **Context**: Custom animation definitions in `src/styles/globals.css` used an incorrect syntax. Tailwind CSS v4 requires custom animations to be defined via `--animate-{name}` variables within the `@theme` directive, and the corresponding keyframes to be defined using a standard `@keyframes {name}` block in the global CSS scope. The previous implementation incorrectly used `--animation-*` instead of `--animate-*` and attempted to define keyframes within a non-standard `--keyframes-*` variable inside `@theme`, using an invalid object-like syntax.
*   **Resolution/Workaround**: The animation definitions were corrected to follow the proper Tailwind v4 convention.
    *   Animation variables were renamed to `--animate-*` inside `@theme`.
    *   Keyframe definitions were moved out of `@theme` into proper `@keyframes` blocks.
    *   The syntax within the `@keyframes` blocks was corrected to standard CSS.
*   **Files Affected**: `src/styles/globals.css`, `blueprint/styles/effects.md`.
*   **Status**: Resolved.
