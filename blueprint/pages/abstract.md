# Pages: Abstract

This document provides a framework-agnostic overview of the website's pages, based on the structure of the original Gatsby project.

## Page Index

### 1. Home (`/`)

*   **Purpose**: The main landing page of the site.
*   **Content**:
    *   A prominent header with a slogan.
    *   A large navigation section linking to the main areas of the site (`HomeNav`).
    *   A "Niusy" (News) section displaying the 3 most recent content items (stories, representations, etc.).
    *   A contact form.

### 2. Definitions (`/definicje`)

*   **Purpose**: A listing page for all glossary terms.
*   **Implementation**: A `Page` document from the CMS with the slug `definicje`. Its body contains a `contentListing` block configured to show "Definitions".

### 3. Single Definition (`/definicje/[slug]`)

*   **Purpose**: To display a single definition and related content.
*   **Content**:
    *   The full content of a single `Definition`.
    *   A section listing all `Story` items that reference this definition.
    *   A "Contact Card" to encourage story submissions.

### 4. Stories (`/opowiesci`)

*   **Purpose**: A listing page for all personal stories.
*   **Implementation**: A `Page` document from the CMS with the slug `opowiesci`. It uses a `contactCardWidget` in its `preBody` and a `contentListing` block (for "Stories") in its `body`.

### 5. Representation (`/reprezentacja`)

*   **Purpose**: A listing page for all media representations.
*   **Implementation**: A `Page` document from the CMS with the slug `reprezentacja`. It uses a `representationHeaderWidget` in its `preBody` and a `contentListing` block (for "Representations") in its `body`.

### 6. History (`/historia`)

*   **Purpose**: A static page detailing the history of non-binary identities and terminology.
*   **Implementation**: A `Page` document from the CMS with the slug `historia`.

### 7. Guide (`/poradnik`)

*   **Purpose**: A static guide for allies.
*   **Implementation**: A `Page` document from the CMS with the slug `poradnik`, which utilizes two-column layouts in its body.

### 8. 404 Not Found

*   **Purpose**: A custom page for handling requests to non-existent URLs.
*   **Content**: A simple 404 message.
