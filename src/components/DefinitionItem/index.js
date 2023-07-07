import React from "react";
import "./styles.scss";
import { Link } from "gatsby";

export default function DefinitionItem({heading, slug, html, hideHeading = false}) {
    return <article className="definition-item">
        {!hideHeading && <h4><Link to={`/${slug}`}>{heading}</Link></h4>}
        <div dangerouslySetInnerHTML={{__html: html}}/>
    </article>
}