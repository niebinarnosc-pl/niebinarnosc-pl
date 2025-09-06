# Header Component

*   **Source**: `niebinarnosc-pl-old/src/components/Header/index.js`
*   **Styling**: `niebinarnosc-pl-old/src/components/Header/styles.scss`

## Purpose and Functionality

The `Header` is a high-level component that acts as a controller for the site's navigation. It decides whether to render the desktop header, the mobile header, or the mobile bottom navigation buttons based on the viewport size and props. It also implements the "hide on scroll down, show on scroll up" behavior.

## Sub-components

*   **`StandardHeader`**: The navigation bar for desktop screens (`tablet-landscape-up`).
*   **`MobileHeader`**: The top navigation bar for mobile/tablet screens, which includes the logo and a hamburger menu button to expand the navigation.
*   **`MobileBottomButtons`**: A sticky navigation bar at the bottom of the screen on mobile/tablet devices.

## Props

| Name       | Type     | Required | Default | Description                                  |
|------------|----------|----------|---------|----------------------------------------------|
| `location` | `object` | Yes      | -       | Gatsby's location object, used to determine the active link. |
| `bottom`   | `boolean`| No       | `false` | If true, renders only the `MobileBottomButtons` component. |

## State Management

*   `expanded`: A boolean state to control the expanded/collapsed state of the mobile navigation menu. This state is passed down to `MobileHeader`.
*   The component uses the `useScrollDirection` custom hook to get `isScrollDown`, which determines if the header should be hidden.

## Dependencies

*   `useScrollDirection`: A custom hook to detect the user's scroll direction.
*   Icon components for navigation links.

## Behavior

*   It dynamically generates navigation links from a `navLinksDictionary` object.
*   The `active` class is applied to a link if its route is included in the current `location.pathname`.
*   When scrolling down, the `hidden` class is added to the header, which animates it off-screen.
*   The mobile menu is automatically collapsed when the user scrolls down.
