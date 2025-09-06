# Iconography

This document describes the SVG icon system used in the project.

## Implementation

Icons are implemented as React components that wrap an SVG. A base component (`IconBase`) handles the common SVG attributes, making icons easy to resize and color.

*   **Wrapper**: `svg` element.
*   **Sizing**: Icons default to a `width` and `height` of `4/3em` (approximately `1.33em`), making them scale with the font size of their parent element. The size can be overridden via props.
*   **Coloring**: The `fill` and `stroke` are set to `currentColor`, allowing the icon color to be controlled by the CSS `color` property of the parent element.
*   **ViewBox**: All icons use a `0 0 16 16` viewBox.

## Available Icons

The following icons are available in the system:

*   `IconArrowRight`
*   `IconChartRelationship`
*   `IconClose`
*   `IconEmail`
*   `IconIdentification`
*   `IconLogoFacebook`
*   `IconLogoInstagram`
*   `IconLogoTwitter`
*   `IconMenu` (Hamburger menu icon)
*   `IconNotebook`
*   `IconUserSimulation`
*   `IconVoiceActivate`
