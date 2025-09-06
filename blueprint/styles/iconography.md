# Iconography (Astro)

> **Tailwind v4 Syntax Advisory**
> This document's examples have been updated to reflect Tailwind CSS v4 syntax. For a comprehensive overview of changes from v3, always refer to the [**Tailwind v4 Upgrade Guide**](./TAILWIND_V4_GUIDE.md).

This document describes the SVG icon system for the Astro project. It is based on a single, reusable Astro component that dynamically renders icons.

## Implementation Strategy

We will use a central `<Icon />` component located at `src/components/Icon.astro`. This component will accept a `name` prop to specify which icon to render.

### Icon Component (`src/components/Icon.astro`)

The component will dynamically import the requested SVG file from an `src/assets/icons/` directory.

```astro
---
// src/components/Icon.astro
import { glob } from 'astro:assets';

export type IconName = 
  | 'arrow-right'
  | 'chart-relationship'
  // ... other icon names
  ;

interface Props {
  name: IconName;
  class?: string;
  size?: number | string; // em units by default
}

const { name, class: className, size = '4/3' } = Astro.props;

const icons = await glob('/src/assets/icons/*.svg', { as: 'raw' });
const iconMap = new Map(icons.map(icon => {
  const name = icon.split('/').pop()?.replace('.svg', '');
  return [name, icon];
}));

const iconContent = iconMap.get(name);
---
<svg
  class:list={['icon', className]}
  style=`width: ${size}em; height: ${size}em;`
  viewBox="0 0 16 16"
  fill="currentColor"
  stroke="currentColor"
  stroke-width="0"
  xmlns="http://www.w3.org/2000/svg"
  set:html={iconContent}
/>
```

### SVG Icon Files

Each icon from the original project will be saved as a separate `.svg` file in `src/assets/icons/`. The file name will match the `IconName` type (e.g., `arrow-right.svg`). The SVG file should only contain the inner paths, not the `<svg>` wrapper.

Example (`src/assets/icons/arrow-right.svg`):
```xml
<path d="M9 3L8.285 3.6965L12.075 7.5H2V8.5H12.075L8.285 12.2865L9 13L14 8L9 3Z"/>
```

## Usage

The component can be used anywhere in the project. The color can be controlled with Tailwind's `text-*` utilities, and the size can be adjusted with the `size` prop or by setting the `font-size` on a parent element.

```astro
---
import Icon from '../components/Icon.astro';
---
<button class="text-purple-100 text-2xl">
  <Icon name="arrow-right" />
</button>

<p class="text-xl">
  An icon scaled with text <Icon name="chart-relationship" />
</p>
```

---
## Mentioned by

*   [./index.md](./index.md)
