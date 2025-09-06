# Components: Abstract

This document outlines the framework-agnostic philosophy and high-level structure for the project's new component architecture.

## 1. Core Philosophy: Composition over Configuration

The primary goal is to favor **composition** over configuration. Instead of creating large, monolithic components with numerous props and complex internal logic (like the original `ContentItem`), we will build smaller, single-purpose components and assemble them to create complex UIs.

This approach leads to components that are:
*   **More Reusable**: Small, focused components can be used in more contexts.
*   **Easier to Maintain**: Simpler components are easier to understand, debug, and modify.
*   **More Predictable**: Each component has a clear, well-defined responsibility.

## 2. Component Categories

To organize our components, we'll group them into several conceptual categories:

1.  **Core Components**: The fundamental, unstyled or minimally styled building blocks of the UI.
    *   **Examples**: `Button`, `Icon`, `Badge`, `Card`.
    *   **Purpose**: These components provide the basic interactive and structural elements.

2.  **Compound Components**: Components that combine several Core components to form common UI patterns.
    *   **Examples**: `FormGroup` (combines an `Input`, `Label`, and `Icon`), `ContentCard` (uses a `Card` as a base and provides slots for content).
    *   **Purpose**: To create reusable, structured UI elements.

3.  **Feature Components**: Application-specific components that are tied to a particular feature or data type. These often compose Compound components.
    *   **Examples**: `DefinitionCard`, `StoryCard`, `RepresentationCard`.
    *   **Purpose**: To encapsulate the logic and presentation for a specific piece of content.

4.  **Layout Components**: High-level components that define the structure and layout of pages.
    *   **Examples**: `Header`, `Footer`, `PageLayout`.
    *   **Purpose**: To provide a consistent structure across the site.

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
