import deburr from "lodash/deburr"
import React from "react";
import ReactDOMServer from 'react-dom/server';

const slugify = (str) => {
    if (React.isValidElement(str)) 
        str = ReactDOMServer.renderToString(str);
    return deburr(str)
    .toLowerCase() // Convert the string to lowercase
    .replace(/<[^>]*>/g, '') // Remove tags
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]+/g, '') // Remove all non-word characters except hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+/, '') // Trim leading hyphens
    .replace(/-+$/, ''); // Trim trailing hyphens
}

export default slugify