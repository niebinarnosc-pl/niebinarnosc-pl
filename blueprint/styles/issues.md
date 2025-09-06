# Styles Issues (Tailwind CSS)

> **Tailwind v4 Syntax Advisory**
> This document's examples have been updated to reflect Tailwind CSS v4 syntax. For a comprehensive overview of changes from v3, always refer to the [**Tailwind v4 Upgrade Guide**](./TAILWIND_V4_GUIDE.md).
> Key takeaway: custom colors defined in `@theme` (e.g., `--color-violet`) are used directly in classes (e.g., `bg-violet`, `text-violet-dark1`).

This document is a log for any significant issues, problems, or non-obvious behaviors discovered within the Tailwind CSS-based styling implementation of the website. This can help inform development by highlighting potential pitfalls or areas that require special attention.

# 1. `@apply` is not supported within `@utility`

*   **Issue Date**: 2025-08-10
*   **Symptom**: PostCSS build errors: `@apply is not supported within nested at-rules like @utility`.
*   **Context**: These errors occur when using `@apply` with standard utility classes inside a custom utility defined with `@utility`. This is a design limitation of Tailwind CSS v4's engine. The `@apply` directive is, however, supported within `@layer` blocks.
*   **Resolution/Workaround**: For custom utilities defined with `@utility`, manually expand the utilities into their corresponding raw CSS properties. For styles within `@layer`, use `@apply` where possible to align with Tailwind best practices.
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

# 3. Invalid Utility Name Error for Utilities Starting with a Dot

*   **Issue Date**: 2025-09-06
*   **Symptom**: PostCSS build errors: `@utility .h2-decorated defines an invalid utility name. Utilities should be alphanumeric and start with a lowercase letter.`
*   **Context**: This error occurs when a custom utility name in an `@utility` rule starts with a `.` character. The error message is slightly misleading, as it suggests only alphanumeric characters are allowed. In fact, hyphens are permitted in utility names. The key constraint is that the name must start with a lowercase letter, and `.` is not a letter.
*   **Resolution/Workaround**: Remove the leading `.` from any `@utility` definitions. For example, `@utility .btn` should be corrected to `@utility btn`. The corresponding class name used in HTML/Astro components remains the same (e.g., `class="btn"`).
*   **Files Affected**: `src/styles/globals.css`, various blueprint documents.
*   **Status**: Resolved.
