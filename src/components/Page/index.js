import React from "react";
import "./styles.scss";

export default function Page({className, heading, heading2, children}) {
    return <section className={`page ${className}`}>
        <header>
            <h1>{heading}</h1>
            {heading2 && <h2>{heading2}</h2>}
        </header>
        {children}
    </section>
}