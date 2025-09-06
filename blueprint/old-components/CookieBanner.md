# CookieBanner Component

*   **Source**: `niebinarnosc-pl-old/src/components/CookieBanner/index.js`
*   **Styling**: `niebinarnosc-pl-old/src/components/CookieBanner/styles.scss`

## Purpose and Functionality

This component displays a banner at the bottom of the screen to inform users about cookie usage and ask for their consent. It is shown only if the user has not previously made a choice.

## Props

| Name                 | Type       | Required | Default | Description                                |
|----------------------|------------|----------|---------|--------------------------------------------|
| `setAreCookiesAllowed`| `function`| Yes      | -       | A state setter function from the parent `Layout` component. |

## Dependencies

This component has no external dependencies.

## Behavior

*   The component sets a cookie named `allow_cookies` with a value of `1` (allow) or `0` (decline).
*   The "allow" cookie is set to expire in 9999 days.
*   The "decline" cookie is set to expire in 1 day.
*   After the user makes a choice, it calls the `setAreCookiesAllowed` function to update the state in the parent component, which causes the banner to be unmounted.

## Styling

*   The banner is a `position: fixed` element at the bottom of the viewport.
*   It uses a flex layout, which switches from column on mobile to row on tablet and up.
*   It has a white background and a top border.
*   It contains a primary button for accepting and a clear button for declining.
