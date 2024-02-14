import React from "react";

export default function ExternalLink({children, to, ...rest}) {
    return <a href={to} target="_blank" rel="nofollow noopener noreferrer" {...rest}>
        {children}
    </a>
}