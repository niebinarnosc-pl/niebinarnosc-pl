# Components: Implementation (Astro)

This document describes the specific technical implementation of the component architecture using Astro, with client-side interactivity powered by Alpine.js.

## 1. Directory Structure

All components reside directly in the `src/components/` directory. They are organized conceptually into categories as defined in the `abstract.md`, but not into physical subdirectories.

```
src/components/
├── Button.astro
├── Card.astro
├── ContentCard.astro
├── DefinitionCard.astro
├── Header.astro
└── ...
```

## 2. Astro Component Patterns

### Composition with Slots

We will heavily utilize Astro's `<slot />` feature to achieve composition.

**Example: `Card.astro`**
This component provides the basic wrapper and styling.

```astro
---
// src/components/Card.astro
---
<div class="bg-white rounded-xl shadow p-4">
  <slot /> <!-- Default slot for content -->
</div>
```

**Example: `ContentCard.astro`**
This component defines the layout for content summaries using named slots.

```astro
---
// src/components/ContentCard.astro
import Card from './Card.astro';
---
<Card>
  <article class="flex flex-col lg:flex-row gap-6">
    <div class="hidden lg:block">
      <slot name="thumbnail" />
    </div>
    <div class="flex-1 flex flex-col gap-4">
      <header>
        <div class="lg:hidden">
          <slot name="thumbnail" />
        </div>
        <slot name="header" />
      </header>
      <div class="prose">
        <slot name="body" />
      </div>
    </div>
  </article>
</Card>
```

**Example: `StoryCard.astro`**
This component consumes `ContentCard` and populates its slots with story-specific data.

```astro
---
// src/components/StoryCard.astro
import ContentCard from './ContentCard.astro';
import Thumbnail from './Thumbnail.astro'; // Assumed component
import Badge from '../core/Badge.astro';
const { story } = Astro.props;
---
<ContentCard>
  <div slot="thumbnail">
    <Thumbnail image={story.thumbnail} />
  </div>
  <div slot="header">
    <h4 class="text-xl font-bold">{story.title}</h4>
    {story.triggers && (
      <div class="flex gap-2">
        {story.triggers.map(trigger => <Badge variant="error">{trigger}</Badge>)}
      </div>
    )}
  </div>
  <div slot="body">
    <p>{story.excerpt}</p>
  </div>
</ContentCard>
```

### Component Props and Variants

Props will be used to pass data and control variants. For example, a `Button` component could accept a `variant` prop.

```astro
---
// src/components/Button.astro
interface Props {
  variant?: 'primary' | 'secondary';
  href?: string;
}
const { variant = 'primary', href } = Astro.props;

const tag = href ? 'a' : 'button';
const variantClasses = {
  primary: 'btn bg-purple-100 text-white ...',
  secondary: 'btn bg-white text-purple-80 ...'
}
---
<tag class:list={[variantClasses[variant]]} href={href}>
  <slot />
</tag>
```

## 3. Client-Side Interactivity with Alpine.js

For components requiring client-side state or interactivity (e.g., a Lightbox, mobile menu toggle), we will use Alpine.js. The necessary Alpine directives (`x-data`, `x-show`, `@click`, etc.) will be added directly to the elements within our `.astro` components. This keeps the interactivity logic co-located with the component's markup while avoiding the need for a heavier JavaScript framework.
