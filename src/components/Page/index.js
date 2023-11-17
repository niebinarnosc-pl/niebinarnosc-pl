import React from "react";
import "./styles.scss";

export default function Page({className, heading, subheading, isArticle, children}) {
    const pageContent = <>
        {heading && <header>
            <h1>{heading}</h1>
            {subheading && <p>{subheading}</p>}
        </header>}
        {children}
    </>
    return !isArticle ?
        <section className={`page ${className}`}>{pageContent}</section> :
        <article className={`page ${className}`}>{pageContent}</article>
}