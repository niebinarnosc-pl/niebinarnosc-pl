# Project-Wide Known Issues & Resolutions

This document lists known issues encountered during the development of the project that are not specific to a single blueprint module, or that relate to the overall tooling and development environment.

## 1. Astro/TypeScript Parser Quirk with Multi-line Type Exports

*   **Issue Date**: 2025-06-20
*   **Symptom**: In `.astro` files, directly exporting a multi-line TypeScript type definition can lead to parsing errors (e.g., "Unexpected `|`").
    ```typescript
    // ---
    // This can cause an error:
    export type MyType =
      | 'option1'
      | 'option2'
      | 'option3';
    // ---
    ```
*   **Context**: Observed in `src/components/Icon.astro` when defining the `IconName` type. The error "Unexpected `|`" was reported, even though the pipe character was syntactically correct for a union type.
*   **Resolution/Workaround**: Declare the multi-line type first, and then export it in a separate statement. This resolves the parsing issue.
    ```typescript
    // ---
    // This works:
    type MyType =
      | 'option1'
      | 'option2'
      | 'option3';
    export type { MyType };
    // ---
    ```
    Alternatively, defining the type on a single line also works:
    ```typescript
    // ---
    // This also works:
    export type MyType = 'option1' | 'option2' | 'option3';
    // ---
    ```
*   **Possible Reason**: This is likely a quirk or an edge case in Astro's SFC (Single File Component) parser or its interaction with the TypeScript compiler/transpiler. Separating the declaration and export simplifies the syntax for the parser in each step.
*   **Status**: Documented / Workaround identified.
*   **Commit (example fix)**: `01a22af` (refactor: Refactor IconName type to single line) - though the final fix in the user's codebase involved separating declaration and export.

## 2. Asset Path Conventions and Accuracy

*   **Issue Date**: 2025-06-22
*   **Symptom**: Incorrect relative paths used when importing assets (e.g., SVGs) into Astro components. For example, `../../assets/transheart.svg` was used in `src/components/Footer.astro` when `../assets/transheart.svg` was correct. Similarly, `../../src/assets/logo.svg` was used in `src/components/Header.astro` when `../assets/logo.svg` was simpler and correct.
*   **Context**: Asset paths in Astro components (and generally in web development) are relative to the current file's location or rely on configured aliases (e.g., `@/assets/`). Using an incorrect number of `../` segments or unnecessarily including `src` when it's part of the standard resolution path can lead to broken image links or build errors.
*   **Resolution**: Always double-check relative paths for assets.
    *   From `src/components/*`, assets in `src/assets/` should typically be accessed via `../assets/`.
    *   Avoid redundant path segments like `src` if the build tool or framework resolves paths from the `src` directory by default for certain import types or if an alias like `@/` is configured to point to `src/`.
*   **Guidance**: Pay close attention to the file structure when constructing relative paths. Test to ensure assets load correctly. For AI agents, explicitly verify the path based on the component's location within the `src` directory and the asset's location.
*   **Status**: Documented / Guideline established.

---

## 3. JSX Syntax in Astro Frontmatter Causes Parsing Errors

*   **Issue Date**: 2025-06-25
*   **Symptom**: Using JSX syntax directly within the frontmatter script block (between `---` fences) of an `.astro` file leads to parsing errors, such as "Unexpected token". This occurs even if the JSX is part of a function definition that is not immediately executed. For example, `const elem = <div></div>;` in the frontmatter will cause an error.
*   **Context**: Observed in `src/pages/article/[slug].astro` when defining custom components for `astro-portabletext` as inline functions returning JSX. The Astro parser for the frontmatter script block does not, by default, transpile JSX syntax. JSX is a syntax extension and needs transformation to standard JavaScript.
*   **Resolution/Workaround**: Move any component logic that involves JSX into its own separate component file.
    *   For `astro-portabletext` custom components, this means creating individual `.astro` (or `.tsx`/`.jsx` if using a UI framework like React for the component's internals) files for each custom type and mark renderer.
    *   These separate component files are then imported into the page/component where `PortableText` is used, and referenced in the `components` prop.
    *   Example: Instead of `types: { myType: ({value}) => <MyComponent value={value} /> }`, use `import MyTypeRenderer from '...'; types: { myType: MyTypeRenderer }`.
*   **Impact**: This ensures that JSX is handled in contexts where Astro's build process is configured to transpile it (i.e., in `.astro` templates or dedicated `.jsx`/`.tsx` files).
*   **Status**: Documented. Refactoring applied to `src/pages/article/[slug].astro`.

---

## 4. Client-Side Variable Passed as Prop to Server-Rendered Astro Component

*   **Issue Date**: 2025-06-25
*   **Symptom**: Error "post is not defined" in `src/pages/index.astro` (specifically at line 182, column 54 in the user's initial report). This occurred when attempting to pass a client-side variable `post` (defined within an Alpine.js `x-for` loop) as a prop to the `<BlogPostWidget />` Astro component.
*   **Context**: Astro components are primarily server-rendered. Their props are evaluated and expected to be available in the server-side scope during the build or server-rendering phase. Client-side variables, like those managed by Alpine.js within an `x-for` loop, are not accessible to Astro components at that stage.
*   **Resolution**:
    *   The rendering strategy was modified. Astro now iterates over the server-side `allPostsData` array using its native `.map()` method to render all potential `BlogPostWidget` instances. This ensures the `post` prop is correctly passed from Astro's server-side context.
    *   Alpine.js is now responsible for managing the visibility of each list item (`<li>`) containing a `BlogPostWidget`. This is achieved using an `x-show` directive that calls a new Alpine.js method `shouldDisplayPost(postId)`.
    *   The Alpine.js `x-data` logic was updated:
        *   The `initialRegularPosts` and `filteredPosts` getters were removed.
        *   The `shouldDisplayPost(postId)` method was introduced to determine if a post (identified by its `postId`) should be displayed based on the featured post status and selected tags.
    *   Conditional messages for "no posts match" and "no blog posts found" were updated to align with the new client-side visibility logic and server-side data availability.
*   **File Affected**: `src/pages/index.astro`
*   **Commit**: `d775b2a` (fix: Resolve "post is not defined" by using Astro map)
*   **Status**: Resolved.

---

## 5. Alpine.js Scope Issues with Server-Side Variables in Astro Component

*   **Issue Date**: 2025-06-26
*   **Symptom**: Errors in an Astro component using Alpine.js, such as `Alpine Expression Error: collapsedImageUrl is not defined` or `Alpine Expression Error: post is not defined`. This occurred when Alpine expressions (e.g., in `:src` or `x-text`) tried to access variables that were either:
    1.  Defined in the Astro component's server-side script but not explicitly passed into the Alpine `x-data` scope.
    2.  Astro props (like `post.subheading`) that were not correctly made available to client-side Alpine.js.
    3.  Dynamically constructed attributes (like image `src`) attempting to use Alpine variables during Astro's server-side rendering phase.
*   **Context**: Observed in `src/components/BlogPostWidget.astro` for the non-featured post widget. The `<img>` tag's `:src` attribute and a `<p>` tag's `x-text` attribute were trying to use `expandedImageUrl`, `collapsedImageUrl`, and `post.subheading` which were not properly initialized within the `x-data` directive's scope. Initial attempts to fix this by directly interpolating Astro variables into Alpine expressions (e.g., `:src="expanded ? '${expandedImageUrl}' : '${collapsedImageUrl}'"`) failed because these Astro variables are server-side.
*   **Resolution**:
    1.  **Pre-calculate Server-Side Values**: Image URLs (`collapsedImageUrl`, `expandedImageUrl`) were pre-calculated in the Astro component's frontmatter script.
    2.  **Initialize in `x-data`**: These pre-calculated URLs and the relevant `post.subheading` were explicitly passed as initial values to the Alpine.js `x-data` object.
    3.  **Correct `x-data` Formatting**: The `x-data` attribute string was constructed using an Astro template literal (backticks). Values passed into this string, especially strings themselves (like URLs or the subheading), were wrapped with `JSON.stringify()` to ensure they were valid JavaScript string literals within the `x-data` object. For potentially null/undefined image URLs, `?? ''` was used with `JSON.stringify()` to default to an empty string.
        *   Example (final simplified version): `x-data={\`{ "expanded": false, "imgUrl": ${JSON.stringify(thumbnailImageUrl ?? '')}, "pSubheading": ${post.subheading ? JSON.stringify(post.subheading) : "''"} }\`}`
    4.  **Use Alpine Data Properties**: Alpine expressions were updated to use these newly defined properties from its own data scope (e.g., `:src="imgUrl"` and `x-text="expanded ? pSubheading : ..."`).
*   **Files Affected**: `src/components/BlogPostWidget.astro`
*   **Commits**:
    *   `6cecca4` (fix: Pre-calculate widget image URLs to fix expanded SSR error) - Initial attempt.
    *   `4dc4d08` (fix: Resolve Alpine data scope errors in blog widget) - Attempt to pass to x-data.
    *   `7534848` (fix: Properly format x-data string for Alpine.js) - Final fix ensuring correct string literal formatting in x-data.
*   **Status**: Resolved.

---

## 6. Incorrect Usage of `client:*` Directives on `.astro` Components

*   **Issue Date**: 2025-06-27
*   **Symptom**: A `client:*` directive (e.g., `client:visible`) was used on a standard `.astro` component (`<BlogPostWidget.astro>`) in `src/pages/index.astro`.
*   **Context**: `client:*` directives are designed to hydrate UI framework components (like React, Svelte, Vue) by sending their JavaScript to the browser. They have no effect on `.astro` components, which are server-rendered HTML templates and do not have a client-side runtime to hydrate. Using them on `.astro` components is incorrect and can be misleading. Interactivity in the `BlogPostWidget` is handled by Alpine.js, which is initialized independently of Astro's component hydration mechanism.
*   **Resolution**: The `client:visible` directive was removed from the `<BlogPostWidget />` invocation.
*   **File Affected**: `src/pages/index.astro`
*   **Status**: Resolved.

---

## 7. Alpine.js Function Not Defined in Astro Component

*   **Issue Date**: 2025-10-22
*   **Symptom**: A JavaScript error `... is not defined` occurs in the browser when an Alpine.js `x-data` attribute tries to call a function (e.g., `x-data="myFunction()"`) defined in a `<script>` tag within an `.astro` component.
*   **Context**: By default, Astro processes and bundles `<script>` tags. This means their contents are scoped and not exposed to the global `window` object. Since Alpine.js looks for `x-data` functions in the global scope, it cannot find functions defined in standard, non-inlined script tags.
*   **Resolution/Workaround**: Add the `is:inline` directive to the `<script>` tag (e.g., `<script is:inline>`). This directive prevents Astro from bundling the script, causing it to be rendered directly into the HTML as a plain script tag. Functions defined within it are then correctly placed in the global scope, making them accessible to Alpine.js.
*   **File Affected**: `src/components/ContactForm.astro`
*   **Status**: Resolved.
---
## Mentioned by

*(This section will be populated if other blueprint files, outside of the parent directory or direct children, reference this document.)*
