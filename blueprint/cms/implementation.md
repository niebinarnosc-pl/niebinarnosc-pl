# CMS: Implementation (Sanity)

This document describes the technical implementation of the content model using Sanity. All schemas will be located in the `sanity/schemas/` directory.

## Schema Definitions

### `story.ts`

Defines the `story` document type.
*   `title`: `string`
*   `slug`: `slug` (auto-generated from title)
*   `thumbnail`: `image`
*   `fullPhoto`: `image`
*   `author`: `string` (The original `stories` didn't have authors, so this is a simple string for now)
*   `definitions`: `array` of `reference` to `definition` documents.
*   `body`: `blockContent` (custom portable text type)

### `definition.ts`

Defines the `definition` document type.
*   `title`: `string`
*   `titleEn`: `string` (optional English title)
*   `slug`: `slug` (auto-generated from title)
*   `fullPhoto`: `image`
*   `body`: `blockContent`

### `representation.ts`

Defines the `representation` document type.
*   `title`: `string`
*   `slug`: `slug` (auto-generated from title)
*   `fullPhoto`: `image`
*   `authors`: `array` of `author` objects.
*   `category`: `reference` to a `category` document.
*   `storyDescription`: `text`
*   `representationDescription`: `text`

### `category.ts`

Defines the `category` document type for representations.
*   `title`: `string`
*   `slug`: `slug` (auto-generated from title)

### `author.ts`

Defines the reusable `author` object type.
*   `name`: `string`

### `page.ts`

A generic schema for all pages, including content pages and list pages.
*   `title`: `string`
*   `slug`: `slug`
*   `preBody`: `array` of widgets (`contactCardWidget`, `representationHeaderWidget`) to be rendered before the main content.
*   `body`: `blockContent`

### `contactCardWidget.ts` (object)

A simple object to indicate where a `ContactCard` should be rendered.

### `representationHeaderWidget.ts` (object)

An object to render the header for the representation page, including a configurable link for content suggestions.

### `contentListing.ts` (object)

An object that can be inserted into `blockContent` to render a list of content.
*   `contentType`: `string` (select from 'story', 'definition', 'representation').
*   `sortBy`: `string` (select from 'date', 'title').
*   `sortOrder`: `string` (select from 'asc', 'desc').
*   `pinnedItems`: `array` of `reference` to pin items to the top of the list.

### `blockContent.ts`

This schema defines the custom Portable Text editor configuration.
*   It will be an `array` of `block` types.
*   It will include standard decorators and list styles.
*   It will define custom object types that can be added to the array:
    *   `columns`: Has `left_content`, `right_content`, and a `reverse` boolean.
    *   `contentListing`: Allows choosing a content type to display in a list.

## Studio Configuration (`sanity.config.ts`)

The main configuration file will:
*   Import all schema types.
*   Define the project ID and dataset.
*   Configure the Sanity Studio with the defined schema types.
*   Include the Vision plugin for querying data.

## Mock Data

The `sanity/data/import.ndjson` file contains a set of mock documents that can be imported into a clean Sanity dataset to populate the project with initial content. This is useful for development and testing.

The data is based on the content from the original Gatsby project.

### Importing Mock Data

To import the data, run the following Sanity CLI command from the root of the project:

```bash
sanity dataset import sanity/data/import.ndjson production --replace
```

**Warning**: The `--replace` flag will delete all existing documents in the dataset before importing the new ones. Only use this on a development dataset.

The NDJSON file includes `definition`, `story`, `representation`, and `page` documents with content from the old markdown files, converted to Portable Text format.
