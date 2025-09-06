# CMS Known Issues & Resolutions

This document lists known issues encountered during the setup, integration, or general use of Sanity CMS within the project.

## 1. `sanity assets create` Command Unavailability

*   **Issue Date**: 2025-06-23
*   **Symptom**: Attempting to use `sanity assets create image <path-to-image>` results in an error: `"assets" is not a sanity command.`
*   **Context**: The `sanity assets` command group was available in older versions of the Sanity CLI (e.g., v2.x). In newer versions (v3+), this command group for direct binary asset uploading via CLI has been removed or significantly changed. The `sanity --help` output for current CLI versions does not list an `assets` command.
*   **Resolution/Workaround**: To upload image assets (or other binary files) to Sanity and obtain their metadata for use in mock data or scripts:
    1.  **Upload via Sanity Studio**: The primary method is to upload assets through the Sanity Studio interface (usually accessible via `sanity dev`).
    2.  **Obtain Metadata**: After uploading, the asset's metadata (including `_id`, `url`, `sha1hash`, etc.) can be found by inspecting the asset in the Studio's Media library or by querying the dataset.
    3.  This metadata is then used to create `sanity.imageAsset` documents in NDJSON files for import.
*   **Impact**: Documentation or scripts relying on `sanity assets create` need to be updated to reflect the current asset management workflow. See [`implementation.md#generating-and-updating-mock-data-recommended-workflow`](./implementation.md#generating-and-updating-mock-data-recommended-workflow) for the updated procedure.
*   **Status**: Documented. Guideline updated.

---

## 2. Sanity CLI Help Output (as of 2025-06-23)

The following is the output of `sanity --help` as provided on 2025-06-23. This is recorded for reference, particularly in understanding the available commands at that time.

```
Commands:
   backup      Manage backups.
   blueprints  Deploy and manage Sanity Blueprints and Stacks (IaC)
   build       Builds the Sanity Studio configuration into a static bundle
   codemod     Updates Sanity Studio codebase with a code modification script
   cors        Configures CORS settings for Sanity projects
   dataset     Manages datasets, like create or delete, within projects
   debug       Provides diagnostic info for Sanity Studio troubleshooting
   deploy      Builds and deploys Sanity Studio or application to Sanity hosting
   dev         Starts a local dev server for Sanity Studio with live reloading
   docs        Opens Sanity Studio documentation in your web browser
   documents   Manages documents in your Sanity Content Lake datasets
   exec        Executes a script within the Sanity Studio context
   functions   Manage, test, and observe Sanity Functions
   graphql     Deploys changes to your project's GraphQL API(s)
   help        Displays help information about Sanity CLI commands
   hook        Sets up and manages webhooks within your Sanity project
   init        Initializes a new Sanity Studio and/or project
   install     Installs dependencies for Sanity Studio project
   learn       Opens Sanity Learn in your web browser
   login       Authenticates the CLI for access to Sanity projects
   logout      Logs out the CLI from the current user session
   manage      Opens project management interface in your web browser
   manifest    Interacts with the studio configuration.
   migration   Manages content migrations for Content Lake datasets
   preview     Starts a server to preview a production build of Sanity Studio
   projects    Lists all projects associated with your logged-in account
   schema      Interacts with Sanity Studio schema configurations
   start       Alias for `sanity preview`
   telemetry   Manages telemetry settings, opting in or out of data collection
   typegen     Beta: Generate TypeScript types for schema and GROQ
   undeploy    Removes the deployed Sanity Studio from Sanity hosting
   users       Manages users of your Sanity project
   versions    Shows installed versions of Sanity Studio and components
```

---

## 3. Duplicate List Item IDs in Sanity Studio Structure

*   **Issue Date**: 2025-06-26
*   **Symptom**: Sanity Studio shows an error: "Encountered an error while reading structure. Structure path 0. Error: List items with same ID found (post, author, tag)".
*   **Context**: In `sanity.config.ts`, the structure builder was configured to manually add list items for `post`, `author`, and `tag` using `S.documentTypeListItem()`. Subsequently, it used `...S.documentTypeListItems()` to automatically add all other document types. This function also includes `post`, `author`, and `tag`, leading to duplicate IDs in the structure list.
*   **Resolution**: The filter applied to `S.documentTypeListItems()` was updated to explicitly exclude the document types that were already added manually (`post`, `author`, `tag`).
*   **File Affected**: `sanity.config.ts`
*   **Commit**: `53cd5af`
*   **Status**: Resolved.

---

## 4. Custom Portable Text Components Not Receiving Props

*   **Issue Date**: 2025-06-27
*   **Symptom**: Custom components for `astro-portabletext` (for custom blocks and marks) were failing with errors like `Cannot read properties of undefined`, because they were not receiving the expected data prop. Debugging showed the prop was `undefined`.
*   **Context**: The `astro-portabletext` library has different ways of passing data to custom components for blocks versus marks.
    *   **For custom blocks** (e.g., `image`, `imageComparisonBlock`), the entire block object from Sanity is passed in a `node` prop.
    *   **For custom marks** (e.g., `link`, `citationLink`), the library passes a "span" object in the `node` prop. This span object contains the actual mark data within a `markDef` property.
*   **Resolution**: The custom components were updated to reflect the correct prop-passing strategy for their type.
    *   **Block Components**: Updated to destructure the `node` prop and use it directly. Example: `const { node } = Astro.props;`
    *   **Mark Components**: Updated to destructure the `node` prop, and then access the mark data via `node.markDef`. Example: `const { node } = Astro.props; const value = node.markDef;`
*   **Files Affected**:
    *   **Blocks (using `node` prop)**: `src/components/portabletext/PortableTextImage.astro`, `src/components/portabletext/PortableTextImageComparison.astro`, `src/components/portabletext/PortableTextVideoEmbed.astro`.
    *   **Marks (using `node.markDef`)**: `src/components/portabletext/PortableTextLink.astro`, `src/components/portabletext/PortableTextCitationLink.astro`.
*   **Commit**: `89b7c98` (fix: Access portable text data via node prop) - *Note: This commit message was based on an incomplete understanding. The fix required different approaches for blocks and marks.*
*   **Status**: Resolved.

---

## 5. Incorrect Imports in Custom Sanity Component

*   **Issue Date**: 2025-06-28
*   **Symptom**: Sanity Studio failed to compile a custom component, reporting an error that `"memo" is not exported from "sanity"`. A related TypeScript error indicated that `ImageInputProps` should be imported using a type-only import.
*   **Context**: The custom component `SeoImageGenerator.tsx` was attempting to import the `memo` Higher-Order Component from the `sanity` package, but `memo` is a standard part of the `react` package. Additionally, the `ImageInputProps` type was being imported alongside runtime values, which is not best practice in TypeScript.
*   **Resolution**:
    1.  The `memo` import was moved from the `sanity` package to the `react` package: `import React, {useState, useCallback, memo} from 'react'`.
    2.  The `ImageInputProps` import was changed to a type-only import: `import type {ImageInputProps} from 'sanity'`.
*   **File Affected**: `sanity/components/SeoImageGenerator.tsx`
*   **Commit**: `b1ad69c`
*   **Status**: Resolved.

---

## 6. Missing Namespace for GROQ Functions

*   **Issue Date**: 2025-08-13
*   **Symptom**: GROQ queries fail with an error like `Unknown function: startsWith`.
*   **Context**: Some built-in GROQ functions are namespaced. For example, `startsWith` belongs to the `string` namespace. When using such functions in a query, they must be prefixed with their namespace (e.g., `string::startsWith(...)`). This was missed in an initial implementation for detecting external links.
*   **Resolution**: The GROQ query for navigation links was updated to use the fully qualified function name `string::startsWith(url, "/")` instead of just `startsWith(url, "/")`.
*   **File Affected**: `src/lib/queries.ts`
*   **Commit**: `eba49c6`
*   **Status**: Resolved.

---

## 7. `toPlainText` Fails for Heading Nodes in Portable Text

*   **Issue Date**: 2025-08-13
*   **Symptom**: Headings rendered from Portable Text (`h2`, `h3`, `h4`) were not generating correct slugs. The `toPlainText` function from `astro-portabletext` returned an empty string. This happened because the heading `node` object passed from `astro-portabletext` to custom components is not a standard Portable Text block, but a "toolkit-specific type representing a portable text span that can hold other spans".
*   **Context**: This issue was discovered after downgrading React to v18, which fixed a separate issue with Portable Text rendering. The `toPlainText` utility is designed to work on an array of standard Portable Text blocks and does not correctly parse the specialized span object used for headings.
*   **Resolution**: The `toPlainText` function was replaced with `spanToPlainText` from the `astro-portabletext` package in the `src/components/portabletext/Heading.astro` component. The `spanToPlainText` function is specifically designed to handle these toolkit-specific span objects and correctly extracts their text content.
*   **File Affected**: `src/components/portabletext/Heading.astro`
*   **Status**: Resolved.

---

## 8. Incorrect Key Naming in `portableTextComponents` for `astro-portabletext`

*   **Issue Date**: 2025-08-24
*   **Symptom**: Custom Portable Text components (for blocks, marks, or types) are not rendered, and the default rendering is used instead. No explicit error is thrown, which can make debugging difficult.
*   **Context**: The `astro-portabletext` library's `PortableText` component accepts a `components` prop to override rendering for different Portable Text elements. The keys within this `components` object must be in their singular form: `block`, `mark`, and `type`. Using the plural forms (`blocks`, `marks`, `types`) will cause the overrides to be silently ignored.
*   **Resolution**: Always use the singular form for keys in the `portableTextComponents` object.
    ```javascript
    // Correct usage
    const portableTextComponents = {
      block: { h2: H2Component },
      mark: { link: LinkComponent },
      type: { image: ImageComponent },
    };

    // Incorrect usage
    const portableTextComponents = {
      blocks: { h2: H2Component }, // Will be ignored
      marks: { link: LinkComponent }, // Will be ignored
    };
    ```
*   **Files Affected**: Any file where the `PortableText` component is used with custom components, such as `src/components/Page.astro`, `src/pages/index.astro`, and `src/pages/[lang]/index.astro`.
*   **Status**: Documented.

---

## 9. File Asset URL Construction

*   **Issue Date**: 2025-08-27
*   **Context**: The functionality for linking to file assets (`assetLink` in Portable Text) relies on manually constructing the asset's CDN URL in the frontend (`src/components/portabletext/Link.astro`). The URL is built by parsing the asset's `_ref` (e.g., `file-assetId-extension`) and combining it with the project ID and dataset.
*   **Potential Issues & Limitations**:
    *   **Fragility**: This approach assumes the Sanity CDN URL structure (`https://cdn.sanity.io/files/...`) and the `_ref` format will not change. If Sanity were to alter either of these, all asset links on the site would break and require a code update.
    *   **No Access to Metadata**: This method does not fetch the `sanity.fileAsset` document, so it cannot access metadata like `originalFilename` to use in the `download` attribute of the link. The link relies on the browser using the filename from the `Content-Disposition` header served by the CDN.
*   **Resolution**: This approach was chosen for its simplicity, as it avoids the need to modify all GROQ queries for Portable Text to expand asset references. It is considered an acceptable trade-off for now. If issues arise, the alternative would be to resolve the `file.asset` reference in GROQ queries, which would provide the full asset document including the `url` and `originalFilename`.
*   **Status**: Documented.

## Mentioned by

*(This section will be populated if other blueprint files, outside of the parent directory or direct children, reference this document.)*
