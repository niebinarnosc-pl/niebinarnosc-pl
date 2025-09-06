# Components: Abstract

This document outlines the framework-agnostic philosophy and high-level structure for the project's new component architecture.

## 1. Core Philosophy: Composition over Configuration

The primary goal is to favor **composition** over configuration. Instead of creating large, monolithic components with numerous props and complex internal logic (like the original `ContentItem`), we will build smaller, single-purpose components and assemble them to create complex UIs.

This approach leads to components that are:
*   **More Reusable**: Small, focused components can be used in more contexts.
*   **Easier to Maintain**: Simpler components are easier to understand, debug, and modify.
*   **More Predictable**: Each component has a clear, well-defined responsibility.

## 2. Component Categories

To organize our components, we'll group them into several conceptual categories, although they all reside in the `src/components/` directory:

1.  **Core Components**: The fundamental, unstyled or minimally styled building blocks of the UI (e.g., `Button`, `Icon`, `Badge`, `Card`).
2.  **Compound Components**: Components that combine several Core components to form common UI patterns (e.g., `FormGroup`, `ContentCard`).
3.  **Feature Components**: Application-specific components tied to a particular feature or data type (e.g., `DefinitionCard`, `StoryCard`, `RepresentationCard`).
4.  **Layout Components**: High-level components defining page structure (e.g., `Header`, `Footer`, `PageLayout`).

## 3. The `ContentItem` Refactor Strategy

The original `ContentItem` component was a prime example of a monolithic component that handled too many responsibilities. It contained conditional logic for definitions, stories, and representations, making it complex and difficult to manage.

Our new approach will break it down as follows:

1.  **`Card` (Core Component)**: A simple, generic container component that provides the basic visual styling (background, border-radius, shadow) of a card. It will have a default `<slot />` for its content.

2.  **`ContentCard` (Compound Component)**: This component will use the `Card` component as its base and define the common layout for all content summaries (e.g., a side-image and a text container). It will use named slots like `<slot name="thumbnail" />`, `<slot name="header" />`, and `<slot name="body" />` to allow its content to be customized.

3.  **Feature Components (`DefinitionCard`, `StoryCard`, `RepresentationCard`)**: Each of these components will be responsible for a single content type. They will:
    *   Accept a specific data object as a prop (e.g., a `story` object).
    *   Use the `ContentCard` component for their layout.
    *   Populate the `ContentCard`'s slots with the appropriate data and markup for their specific content type. For example, `StoryCard` will know how to render an author and trigger warnings in the `header` slot, while `RepresentationCard` will render the category and year.

This strategy moves the responsibility of rendering specific data types out of the generic layout component and into dedicated, more manageable feature components.
