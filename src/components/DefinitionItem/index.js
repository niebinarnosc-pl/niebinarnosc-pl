import React from "react";
import "./styles.scss";
import { Link, graphql } from "gatsby";

export default function DefinitionItem({frontmatter: {heading, slug}, html, hideHeading = false, hideButton = false}) {
    return <article className="definition-item">
        {!hideHeading && <h4>{heading}</h4>}
        <div dangerouslySetInnerHTML={{__html: html}}/>
        {!hideButton && <Link to={`/${slug}/`} className="button">Zobacz opowieści</Link>}
    </article>
}

export const query = graphql`
fragment Definition on MarkdownRemark {
  html
  frontmatter {
    heading
    slug
  }
}
`