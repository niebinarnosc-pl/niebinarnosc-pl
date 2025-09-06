# Blueprint Approach and Guiding Principles

This blueprint serves as a comprehensive guide to the project. Its primary goal is to enable the complete, 1:1 recreation of the website by an LLM-powered AI agent, given this blueprint as input.

To achieve this, the blueprint will meticulously record:

*   **High-level details**: Project purpose, goals, target audience, and overall architecture.
*   **Implementation Details (As Needed)**: Specifics of code structure, component design, API integrations, styling choices, content models, deployment configurations, and other technical information will be documented to the level of detail necessary to understand and recreate the functionality *within the context of the current abstraction*. The guiding principle is to provide enough detail to answer the question: "Do I have all the necessary information to understand or implement this part of the abstraction?" Further detail is added only when such questions reveal a need.
*   **Non-Functional Requirements (As Needed)**: Pertinent NFRs (e.g., accessibility, performance, security, usability) relevant to specific abstractions, documented to the necessary level of detail.
*   **Decision-making processes**: Rationale behind significant architectural and technical choices.

The blueprint will be maintained in Markdown format and organized logically to ensure clarity and ease of use for both human developers and AI agents.

## Blueprint Structure and Usage

The blueprint will employ a nested directory structure. Each level in this hierarchy will correspond to a different level of abstraction related to the project. These levels are not strictly tied to the codebase's structure (e.g., file or module organization) but rather aim to reflect a human-centric (or LLM-centric) way of understanding and navigating the project's components and concepts. The specific abstraction levels will emerge organically based on the project's conceptual breakdown and can evolve as understanding deepens.

**Key Principles:**

*   **Flexibility within Levels**: The content and organization within each directory level will be tailored to the specific needs of that level of abstraction.
*   **Minimal Consistency**: While flexibility is encouraged, a minimal set of consistency guidelines will be maintained across all levels. These guidelines will be described within this `BLUEPRINT_GUIDELINES.md` file.
*   **Standard Module Files**: Each directory representing a distinct blueprint module (e.g., `/blog`, `/styles`) should ideally contain the following files:
    *   **`index.md`**:
        *   **Purpose**: Serves as the entry point and high-level navigational guide for its respective module directory.
        *   **Content**: It will list and provide brief summaries of all other `.md` files and any subdirectories directly within the current module directory. The goal is to help a user (human or AI) quickly understand the contents of the module and determine which file or subdirectory to explore next for specific information. It should generally not contain deep details itself but rather point to where those details can be found.
    *   **`abstract.md`**:
        *   **Purpose**: Contains a comprehensive, framework-agnostic description of the module's purpose, scope, features, and high-level design.
        *   **Content**: This file should detail what the module does, why it exists, and its conceptual structure, without referring to specific technologies or implementation details. For example, if describing a "User Authentication" module, the `abstract.md` would define user roles, login flows, and security considerations in general terms.
    *   **`implementation.md`**:
        *   **Purpose**: Describes the specific technical implementation of the module.
        *   **Content**: This file details how the concepts in `abstract.md` are realized using the project's chosen technology stack. It can and should include details about specific tools, libraries, file paths (for code), data schemas, API endpoints, and important algorithms or logic. Code snippets should be used sparingly and only when absolutely necessary to clarify a complex point that cannot be easily described in text.
    *   **`issues.md`**:
        *   **Purpose**: A log of significant issues, problems, or challenges encountered during the design or implementation of the module.
        *   **Content**: Each entry should describe the issue, when it occurred, any attempted solutions, and the final resolution (if achieved). This helps in understanding the evolution of the module and avoiding past pitfalls.
        *   **Note**: A top-level `blueprint/issues.md` file also exists for project-wide issues not specific to a single module.
*   **Submodules**: If a part of a module is complex enough to be considered a submodule, it should be placed in its own subdirectory within the parent module's directory. This subdirectory would then follow the same standard file structure (e.g., `index.md`, `abstract.md`, etc.).
*   **Cross-Referencing**: To maintain clarity and navigability, clear and consistent methods for linking between related sections of the blueprint, even across different abstraction levels, should be used (e.g., direct Markdown links with descriptive text).
*   **"Mentioned by" Sections**:
    *   At the end of each blueprint file, if that file is referenced (linked to or clearly indicated) by any other blueprint file(s), a section titled "## Mentioned by" should be included.
    *   This section will list blueprint files that reference the current file, with each item being a relative Markdown link to the referencing file. However, to avoid clutter and highlight only significant cross-references, mentions from the following types of files should **not** be listed:
        *   Files in the direct parent directory (i.e., the `index.md` of the parent directory linking to a file/subdirectory within it).
        *   Files in a direct child directory (i.e., an `index.md` in a subdirectory linking back to its parent's `index.md` or other files in the parent).
        *   Files within the same directory (i.e., at the same level of abstraction).
    *   The goal is to primarily highlight "indirect" relationships or mentions from more distant parts of the blueprint, thereby improving clarity on broader inter-dependencies.
    *   This practice is crucial for maintaining link integrity and understanding inter-document relationships. When files are moved, renamed, or deleted, these "Mentioned by" sections (and the corresponding links in the referencing files) must be updated according to these guidelines.
*   **Visual Aids**: Where beneficial for understanding complex concepts, architecture, or flows, diagrams and visual aids should be incorporated. This can include embedded diagrams using Mermaid syntax or clear textual descriptions. Externally stored diagram images should be avoided to keep the blueprint self-contained.
*   **Example Abstraction Levels**: While the specific abstraction levels will emerge organically, a hypothetical example of a few nested levels could be: `Project Goals` -> `High-Level Features` (e.g., `Blog Functionality`) -> `UI Component Groups` (e.g., `Post Navigation`) -> `Specific UI Component Details` (e.g., `Pagination Component`). This can be adapted as the project's conceptual breakdown solidifies.

## Glossary of Terms

A glossary of project-specific terms, domain-specific vocabulary (especially concerning transgender topics to ensure sensitive and accurate language), and any technical jargon used distinctively within the project is maintained in [**`GLOSSARY.md`**](./GLOSSARY.md). This central glossary aids clarity and consistent understanding for all users of the blueprint, including AI agents.

When a term defined in the glossary is first introduced in a blueprint file, it should ideally be hyperlinked to its definition in `GLOSSARY.md`. Contributors are encouraged to propose additions or clarifications to the glossary as new terms emerge or existing definitions require refinement.

## Blueprint-First Development Workflow

A core principle of this project is the **blueprint-first** approach. This means:

1.  **Intent**: All development begins with a clear understanding of the goal or feature to be implemented.
2.  **Blueprint**: Before any code is written, the relevant sections of this blueprint must be created or updated to reflect the intended changes, new features, or architectural decisions. This includes adhering to the structural rules outlined in section 3.1.
3.  **Code**: Code generation and implementation strictly follow the specifications, designs, and details laid out in the blueprint.

This workflow (Intent → Blueprint → Code) is paramount for maintaining the integrity and utility of theblueprint, especially for AI agents tasked with understanding or modifying the project. All contributors, human or AI, are expected to adhere to this process.

## 5. Architectural Decision Records (ADRs)

To document significant architectural decisions, their rationale, and consequences, this project uses Architectural Decision Records (ADRs).

*   **Location**: ADRs are stored in the [`./decisions/`](./decisions/index.md) directory.
*   **Purpose**: They provide a historical log of why certain architectural choices were made, helping to avoid re-litigation of past decisions and aiding in the onboarding of new team members (human or AI).
*   **Process**: Refer to [`./decisions/index.md`](./decisions/index.md) for details on when and how to create ADRs, including the use of the provided [ADR template](./decisions/TEMPLATE.md).
*   **Integration**: Key decisions captured in ADRs should be referenced from relevant blueprint sections where appropriate.

Maintaining ADRs is crucial for understanding the evolution of the project's architecture and the trade-offs involved in its design.

## 6. Blueprint Validation and Linting Principles

To ensure the quality, consistency, and utility of the blueprint, especially for AI-driven recreation, the following general validation and linting principles should be observed. While automated linting is not currently in place, these serve as guidelines for human review and AI self-correction.

*   **`index.md` Completeness**: Every `index.md` file must accurately list and briefly describe all files and subdirectories within its current directory.
*   **Link Integrity**: All internal Markdown links (cross-references) within the blueprint must point to valid, existing files or sections.
    *   "Mentioned by" sections must be kept up-to-date. Broken links here indicate a potential loss of referential integrity.
*   **Glossary Usage**: Terms defined in [`GLOSSARY.md`](./GLOSSARY.md) should be hyperlinked on their first significant use within a blueprint document.
*   **ADR Referencing**: Significant architectural discussions or implementations detailed in the blueprint should reference corresponding ADRs from the [`./decisions/`](./decisions/index.md) directory if applicable.
*   **Blueprint-First Adherence**: Evidence of changes (e.g., new features, significant refactoring) should first appear as updates or additions to the blueprint before code implementation.
*   **Clarity and Specificity**: Blueprint descriptions should be clear, unambiguous, and provide sufficient detail for an AI agent to understand and implement the described functionality or structure without needing to make significant assumptions.
*   **Consistency**:
    *   Formatting (headings, lists, code blocks) should be consistent within and across blueprint documents.
    *   Terminology should align with the project `GLOSSARY.md`.
    *   The level of detail should be appropriate for the abstraction level of the document.

These principles are intended to make the blueprint more robust, maintainable, and reliably interpretable by AI agents. Specific blueprint sections (e.g., `blog/index.md` for Sanity schema definitions) may have their own implicit validation rules based on their content.
