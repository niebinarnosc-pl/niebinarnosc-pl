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
*   **Content**:
    *   A page header.
    *   A grid or list of all `Definition` items, sorted by priority.

### 3. Single Definition (`/definicje/[slug]`)

*   **Purpose**: To display a single definition and related content.
*   **Content**:
    *   The full content of a single `Definition`.
    *   A section listing all `Story` items that reference this definition.
    *   A "Contact Card" to encourage story submissions.

### 4. Stories (`/opowiesci`)

*   **Purpose**: A listing page for all personal stories.
*   **Content**:
    *   A page header.
    *   A "Contact Card".
    *   A grid or list of all `Story` items.

### 5. Representation (`/reprezentacja`)

*   **Purpose**: A listing page for all media representations.
*   **Content**:
    *   A page header with a call-to-action to suggest new entries.
    *   A filter/tag selector for the different media `category` values.
    *   A grid or list of `Representation` items, filterable by category.

### 6. History (`/historia`)

*   **Purpose**: A static page detailing the history of non-binary identities and terminology.
*   **Content**: The content of the "History" singleton `Page` from the CMS.

### 7. Guide (`/poradnik`)

*   **Purpose**: A static guide for allies.
*   **Content**: The content of the "Guide" singleton `Page` from the CMS, which includes two-column layouts.

### 8. 404 Not Found

*   **Purpose**: A custom page for handling requests to non-existent URLs.
*   **Content**: A simple 404 message.
