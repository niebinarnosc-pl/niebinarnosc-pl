# Alert Component

*   **Source**: `niebinarnosc-pl-old/src/components/Alert/index.js`
*   **Styling**: `niebinarnosc-pl-old/src/components/Alert/styles.scss`

## Purpose and Functionality

The `Alert` component displays a simple, dismissible message to the user. It is typically used for feedback after a form submission, showing either a success or an error message.

## Props

| Name      | Type       | Required | Default   | Description                                     |
|-----------|------------|----------|-----------|-------------------------------------------------|
| `message` | `string`   | Yes      | -         | The text content of the alert.                  |
| `type`    | `string`   | No       | `success` | The type of alert (`success` or `error`), which controls its styling. |
| `close`   | `function` | Yes      | -         | A callback function that is executed when the close button is clicked. |

## Dependencies

*   `IconClose`: The icon component used for the close button.

## Styling

*   The component is a flex container that spaces out the message and the close button.
*   It has rounded corners (`0.75rem`) and padding (`1rem`).
*   The `.success` variant has a light purple background (`$purple-20`) and dark purple text (`$purple-100`).
*   The `.error` variant has a light red background (`#ffe6e6`) and red text (`#ff2222`).
*   The close button is transparent with no border.
