# Footer Component

*   **Source**: `niebinarnosc-pl-old/src/components/Footer/index.js`
*   **Styling**: `niebinarnosc-pl-old/src/components/Footer/styles.scss`

## Purpose and Functionality

The `Footer` component is the main site footer, displayed at the bottom of every page. It contains the site logo, social media links, and contact information.

## Props

This component does not accept any props.

## Dependencies

*   `Link` (Gatsby): For the internal link to the homepage.
*   `IconEmail`, `IconLogoFacebook`, `IconLogoInstagram`: Icon components.
*   `logo`: The full site logo SVG image.
*   `useLinks`: A custom hook to fetch social media URLs from site metadata.
*   `ExternalLink`: For rendering the social media and mailto links.

## Styling

*   The footer has a very dark purple background (`$purple-dark-2`) and light purple text (`$purple-5`).
*   It uses a flex layout that is a column on mobile and a row with `space-between` alignment on larger screens.
*   The logo has a fixed height.
*   Social media icons (`sm` class) have specific padding and alignment for different screen sizes.
