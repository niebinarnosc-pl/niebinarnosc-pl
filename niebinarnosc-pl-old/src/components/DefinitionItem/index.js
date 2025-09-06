import React from "react";
import "./styles.scss";
import { Link, graphql } from "gatsby";

export default function DefinitionItem({frontmatter: {title, titleEn, slug}, html, hideHeading = false, hideButton = false}) {
    return <article className="definition-item">
        {!hideHeading && <h4>{title + (titleEn ? ` (${titleEn.toLowerCase()})` : "")}</h4>}
        <div dangerouslySetInnerHTML={{__html: html}}/>
        {!hideButton && <Link to={`/${slug}/`} className="button">Zobacz opowieści</Link>}
    </article>
}
