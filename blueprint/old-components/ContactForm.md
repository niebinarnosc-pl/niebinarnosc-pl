# ContactForm Component

*   **Source**: `niebinarnosc-pl-old/src/components/ContactForm/index.js`
*   **Styling**: `niebinarnosc-pl-old/src/components/ContactForm/styles.scss`

## Purpose and Functionality

The `ContactForm` component provides a standard contact form for users to send messages. It is designed to integrate with Netlify's form handling feature. It includes fields for email and a message, along with submission handling, loading states, and user feedback via the `Alert` component.

## Props

This component does not accept any props.

## State Management

*   `userEmail`: Stores the value of the email input to dynamically create a subject line.
*   `isSending`: A boolean to track the form submission state, used to disable the submit button.
*   `alertOpen`, `alertMessage`, `alertType`: State variables to control the visibility, content, and type (`success`/`error`) of the `Alert` component.

## Dependencies

*   `IconEmail`: The icon used within the email input field.
*   `Alert`: The component used to display feedback after form submission.
*   `ExternalLink`: Used to display the contact email address as a mailto link.

## Styling

*   The component is a two-column layout on larger screens (`@include for-tablet-landscape-up`) and stacks vertically on mobile.
*   Form elements (`label`, `input`, `textarea`) have a consistent style with a white background, padding, rounded corners, and a gray border.
*   A `:focus-within` state on the label provides a purple outline and changes the icon color to purple for better user feedback.
