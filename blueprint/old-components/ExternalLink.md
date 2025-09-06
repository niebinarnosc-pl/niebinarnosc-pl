# ExternalLink Component

*   **Source**: `niebinarnosc-pl-old/src/components/ExternalLink/index.js`

## Purpose and Functionality

`ExternalLink` is a simple wrapper around the standard HTML `<a>` tag. Its purpose is to provide a consistent way to create links to external websites, automatically including the `target="_blank"` and `rel="nofollow noopener noreferrer"` attributes for security and SEO best practices.

## Props

| Name       | Type     | Required | Default | Description                               |
|------------|----------|----------|---------|-------------------------------------------|
| `children` | `node`   | Yes      | -       | The content to be displayed inside the link. |
| `to`       | `string` | Yes      | -       | The URL of the external site.             |
| `...rest`  | `object` | No       | -       | Any other props (e.g., `className`) are passed down to the `<a>` tag. |

## Dependencies

This component has no external dependencies.

## Styling

This component has no dedicated stylesheet. It receives its styling via the `className` prop.
