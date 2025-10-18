# CMS: Abstract

This document provides a framework-agnostic description of the project's content model. The model is designed to be flexible and structured, capturing all the content previously stored in Markdown files.

## Content Types (Collections)

### 1. Story

Represents personal stories and experiences.
*   **Fields**: Title, Slug, Date, Thumbnail Image, Full-size Image, Body (rich text), Author, related Definitions (references).
*   **Purpose**: To share personal narratives related to non-binary identity.

### 2. Definition

Represents a single term and its definition.
*   **Fields**: Title, English Title (optional), Slug, Date, Featured Image, Body (rich text).
*   **Purpose**: To build a glossary of terms related to gender identity.

### 3. Representation

Represents an instance of non-binary representation in media (e.g., books, series).
*   **Fields**: Title, Slug, Date, Featured Image, Author(s), Category (e.g., "Serial", "Książka"), Story Description, Representation Description.
*   **Purpose**: To create a curated list of media featuring non-binary characters or themes.

## Content Types (Singletons)

These content types represent unique, single pages on the website.

### 1. Page

A generic page type used for creating singleton content pages.
*   **Fields**: Title, Slug, Pre-Body Components (optional, for widgets like contact cards), Body (a flexible content builder with rich text, content listings, etc.).
*   **Instances**: This is used for all main pages, including "Historia" (History), "Poradnik" (Guide), "Opowieści" (Stories), "Definicje" (Definitions), and "Reprezentacja" (Representation).

## Reusable Content Objects

### Author

Represents the author of a piece of media (for Representations).
*   **Fields**: Name.
*   **Purpose**: To be used within the `Representation` content type.

## Rich Text Content (Body)

The `body` field for all content types will be a rich text editor that supports:
*   Standard formatting (bold, italics, lists, links).
*   Images.
*   **Custom "Columns" Component**: A two-column layout object that can be inserted into the text. It will contain a left column, a right column (both with rich text), and an option to reverse the order on desktop. This is necessary to recreate the layout from the "Poradnik" page.
*   **Custom "Content Listing" Component**: A block that renders a list of other content types (e.g., a list of all Stories), with options for sorting (by date or title, ascending/descending) and pinning items to the top.
