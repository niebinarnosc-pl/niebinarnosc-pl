import React from "react";
import "./styles.scss";

export default function Page({className, heading, subheading, children}) {
    return <div className={`page ${className}`}>
        {heading && <header>
            <h1>{heading}</h1>
            {subheading && <p>{subheading}</p>}
        </header>}
        {children}
    </div>
}