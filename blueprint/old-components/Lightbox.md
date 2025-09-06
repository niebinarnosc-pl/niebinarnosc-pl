# Lightbox Component

*   **Source**: `niebinarnosc-pl-old/src/components/Lightbox/index.js`
*   **Styling**: `niebinarnosc-pl-old/src/components/Lightbox/styles.scss`

## Purpose and Functionality

The `Lightbox` component displays an image in a full-screen, semi-transparent overlay. It is used to show a larger version of a thumbnail image when clicked. The lightbox can be dismissed by clicking on it or pressing a key.

## Props

| Name        | Type       | Required | Description                             |
|-------------|------------|----------|-----------------------------------------|
| `image`     | `object`   | Yes      | The Gatsby image data object.           |
| `alt`       | `string`   | No       | The alt text for the image.             |
| `deactivate`| `function` | Yes      | A callback function to close the lightbox. |

## Behavior

*   When the component mounts, it automatically focuses itself (`ref.current.focus()`) to capture keyboard events.
*   It can be closed by either clicking anywhere on the overlay or by any keydown event, both of which trigger the `deactivate` callback.

## Dependencies

*   `GatsbyImage`, `getImage`: For optimized image rendering.

## Styling

*   The main container is a `position: fixed` element that covers the entire viewport (`width: 100vw`, `height: 100vh`).
*   It has a semi-transparent black background (`rgba(0,0,0,0.6)`).
*   The image is centered within the overlay and is constrained to a maximum size (`85vh` and `85vw`) to ensure it doesn't touch the screen edges.
