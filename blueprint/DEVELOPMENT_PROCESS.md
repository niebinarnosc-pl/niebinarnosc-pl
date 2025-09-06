# Development Process Guidelines

## 1. Introduction

This document outlines the guidelines and principles for the development process of the project. Its primary aim is to ensure consistency, quality, and effective collaboration, particularly in the context of a development team that includes both human developers and AI-powered agents. Adherence to these guidelines is crucial for maintaining the integrity of the blueprint-first approach and achieving the project's goals.

## 2. Core Development Philosophy

### 2.1. Blueprint-First Approach

As detailed in the [BLUEPRINT_GUIDELINES.md](./BLUEPRINT_GUIDELINES.md), all development work **must** begin with the blueprint.
1.  **Intent**: Clearly define the goal, feature, or change.
2.  **Blueprint**: Create or update the relevant blueprint sections to meticulously describe the change. This includes structural, functional, and stylistic specifications.
3.  **Code**: Implement the code strictly according to the approved blueprint.

This Intent → Blueprint → Code workflow is paramount.

### 2.2. Iterative Development

The project will follow an iterative development model. Changes will be implemented in small, manageable increments, allowing for regular review and feedback. This applies to both blueprinting and coding stages.

## 3. Human-AI Agent Collaboration Model

This project leverages AI agents for blueprinting and code generation. Effective collaboration requires a clear understanding of roles and communication protocols.

### 3.1. Roles & Responsibilities

*   **Human Developer(s)**:
    *   Define high-level project goals, features, and user stories.
    *   Provide clear and specific intent for tasks assigned to AI agents.
    *   Review and approve AI-generated blueprint sections.
    *   Review and approve AI-generated code.
    *   Resolve ambiguities and make critical design decisions.
    *   Perform final integration and testing.
    *   Maintain the overall integrity and vision of the project and its blueprint.
*   **AI Agent(s)**:
    *   Assist in drafting detailed blueprint sections based on human-provided intent.
    *   Generate code that strictly adheres to the specifications in the blueprint.
    *   Identify potential issues, inconsistencies, or areas needing clarification in requests or the existing blueprint.
    *   Adhere to all documented guidelines, conventions, and best practices.
    *   Request clarification when instructions are ambiguous or incomplete.

### 3.2. Communication & Interaction

*   **Clarity in Requests**: Human developers must provide clear, concise, and specific instructions to AI agents. Ambiguity will lead to incorrect or suboptimal outcomes.
*   **Scope Definition**: Clearly define the scope of each task.
*   **AI Clarification**: AI agents should proactively ask for clarification if a request is ambiguous, conflicts with existing blueprint information, or seems to overlook a critical aspect.
*   **Output Formats**: AI agents are expected to provide changes in specified formats (e.g., SEARCH/REPLACE blocks for code, Markdown for blueprint updates), adhering to file path and naming conventions.
*   **Contextual Information**: AI agents should utilize all provided context, including file summaries, chat history, and the existing blueprint, to inform their work.

### 3.3. Iterative Workflow Example

1.  **Task Definition (Human)**: Human defines a new feature or change and its high-level requirements.
2.  **Initial Blueprinting (Human/AI)**: Human may outline the blueprint changes or ask the AI to draft them based on the intent.
3.  **Blueprint Review & Approval (Human)**: Human reviews the drafted blueprint changes, provides feedback, and approves the final version.
4.  **Code Generation (AI)**: AI generates code based on the approved blueprint section.
5.  **Code Review & Integration (Human)**: Human reviews the generated code, tests it, and integrates it into the project.
6.  **Blueprint Update (Human/AI)**: Ensure any minor deviations or necessary adjustments discovered during coding are reflected back into the blueprint.

## 4. AI Agent Operating Principles

*   **Blueprint as Single Source of Truth**: All development activities performed by AI agents must be strictly derived from and aligned with the project blueprint.
*   **Strict Scope Adherence**: AI agents must only perform the tasks explicitly requested. No unsolicited changes, improvements, or refactoring of unrelated parts of the codebase or blueprint are allowed.
*   **Convention and Best Practice Adherence**: AI agents must follow all established coding standards, architectural patterns, styling guidelines, and blueprinting conventions documented in the project.
*   **Assume Good Intent, Verify Details**: While AI agents should assume requests are well-intentioned, they should also cross-reference with the blueprint to ensure consistency and correctness.
*   **No Modification of Core Guidelines**: AI agents should not propose changes to `BLUEPRINT_GUIDELINES.md` or this `DEVELOPMENT_PROCESS.md` file unless explicitly asked to do so by a human developer.

## 5. General Development Practices

### 5.1. Version Control (Git)

*   **Commit Frequency**: Commit changes frequently with clear, descriptive messages.
*   **Commit Messages**: Follow Conventional Commits format (e.g., `feat: add user login functionality`, `fix: correct layout issue on mobile`, `docs: update blog content model`).
*   **Branching**: (A specific branching strategy may be defined later. For now, work on feature branches or as directed).

### 5.2. Blueprint Maintenance

The blueprint is a living document. It must be kept in sync with the actual state of the project.
*   Any deviation from the blueprint during implementation must be justified and immediately reflected back in the blueprint.
*   Regular reviews of the blueprint for accuracy and completeness are encouraged.

### 5.3. Issue Tracking

(To be defined if/when an issue tracking system is formally adopted.)

## 6. Review Process

All significant blueprint changes and code contributions, especially those generated by AI, must be reviewed by a human developer.

*   **Blueprint Review Checklist**:
    *   Clarity and completeness of the description.
    *   Alignment with project goals and overall architecture.
    *   Adherence to `BLUEPRINT_GUIDELINES.md`.
    *   Consistency with other parts of the blueprint.
*   **Code Review Checklist**:
    *   Strict adherence to the corresponding blueprint section.
    *   Correctness and functionality.
    *   Adherence to coding standards and best practices.
    *   No out-of-scope changes.
    *   Performance, security, and accessibility considerations (as applicable).

---
## Mentioned by

*(This section will be populated if other blueprint files, outside of the parent directory or direct children, reference this document.)*
