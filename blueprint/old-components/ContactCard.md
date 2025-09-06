# ContactCard Component

*   **Source**: `niebinarnosc-pl-old/src/components/ContactCard/index.js`
*   **Styling**: `niebinarnosc-pl-old/src/components/ContactCard/styles.scss`

## Purpose and Functionality

The `ContactCard` is a promotional component used on the "Opowieści" (Stories) page. It encourages users to share their own story by providing a link to an external contact form.

## Props

This component does not accept any props.

## Dependencies

*   `graphql`, `useStaticQuery`: Used to fetch the `contactFormUrl` from Gatsby's site metadata.
*   `ExternalLink`: A component for rendering links to external websites.

## Styling

*   The card is a flex container that stacks vertically on mobile and has responsive padding and gaps.
*   It has a primary brand purple background (`$purple-100`) and white text.
*   On larger screens, it has rounded corners (`0.75rem`).
*   It contains a button with a white border (`.button.border`).
*   The component uses responsive display logic to show either an inline link or a full button depending on the screen size (`@include for-desktop-up`).
