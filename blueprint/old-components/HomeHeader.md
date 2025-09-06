# HomeHeader Component

*   **Source**: `niebinarnosc-pl-old/src/components/HomeHeader/index.js`
*   **Styling**: `niebinarnosc-pl-old/src/components/HomeHeader/styles.scss`

## Purpose and Functionality

The `HomeHeader` component is a specialized header displayed only on the homepage. It features a large, decorative slogan, a call-to-action button to suggest a new slogan, and social media links.

## Props

This component does not accept any props.

## Dependencies

*   `quote.svg`: A decorative SVG image of a quotation mark.
*   `ExternalLink`: Used for the slogan suggestion button and social media links.
*   `useLinks`: A custom hook to fetch social media URLs.
*   `IconLogoFacebook`, `IconLogoInstagram`: Social media icon components.

## Styling

*   The header has a relative position to allow for absolute positioning of the decorative quote image.
*   The `h1` slogan is centered and uses a larger font size for the `<strong>` element.
*   The quote image is positioned absolutely and has low opacity (`0.15`) to serve as a background element.
*   Social media links are aligned to the right on larger screens.
