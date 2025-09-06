# niebinarnosc.pl - Project Blueprint

## 1. Project Overview

### 1.1. Project Goal

TO BE ADDED

### 1.2. Target Audience

TO BE ADDED

## 2. Technology Stack

The project will be developed using the following technologies:

*   **Framework**: Astro (for building fast, content-focused websites)
*   **Language**: TypeScript (for type safety and improved developer experience)
*   **JavaScript Framework**: Alpine.js (for lightweight client-side interactivity)
*   **Styling**: Tailwind CSS v4 (a utility-first CSS framework)
*   **Content Management**: Sanity CMS (a headless CMS for managing website content)
*   **Analytics**: Umami (a privacy-focused web analytics solution)
*   **Hosting**: Netlify (for continuous deployment and hosting)
*   **Environment Configuration**: Project-specific configurations (e.g., Sanity `projectId`, `dataset`) are managed using environment variables, typically loaded from a `.env` file (which is not committed to version control, as per `.gitignore`). An `.env.example` file serves as a template for these variables. In `astro.config.mjs`, Vite's `loadEnv` function is used to load these variables from the `.env` file, making them available for configuring integrations like Sanity. This is distinct from `import.meta.env.VARIABLE_NAME`, which is typically used for client-side environment variables.

## 3. Blueprint System Overview

This blueprint serves as a comprehensive guide to the project, designed to enable its complete, 1:1 recreation by an LLM-powered AI agent.
For detailed guidelines on the blueprint structure, usage, glossary, and the blueprint-first development workflow, please refer to [BLUEPRINT_GUIDELINES.md](./BLUEPRINT_GUIDELINES.md).

**Subdirectories:**

*   [`old-styles/`](./old-styles/index.md): A framework-agnostic representation of the styles from the original Gatsby/Sass project, serving as an archive and reference.
*   [`old-components/`](./old-components/index.md): Documents the components from the original Gatsby project, serving as a reference for migration.
*   [`styles/`](./styles/index.md): The canonical styles blueprint for the new Astro/Tailwind CSS project.
*   [`issues.md`](./issues.md): Documents project-wide known issues and their resolutions.
*   [`DEVELOPMENT_PROCESS.md`](./DEVELOPMENT_PROCESS.md): Describes the guidelines and principles for the project's development process, with a special focus on human-AI agent collaboration, workflow, and best practices.
*   [`GLOSSARY.md`](./GLOSSARY.md): A glossary of project-specific terms, domain vocabulary, and technical jargon.
