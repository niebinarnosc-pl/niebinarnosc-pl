import React from "react";
import "./styles.scss";

export default function Page({className, heading, children}) {
    return <section className={`page ${className}`}>
        <header>
            <h1>{heading}</h1>
        </header>
        <main>
            {children}
        </main>
    </section>
}