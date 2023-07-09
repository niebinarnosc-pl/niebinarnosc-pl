import React from "react";
import "./styles.scss";
import { Link, graphql } from "gatsby";

export default function DefinitionItem({frontmatter: {heading, slug}, html, hideHeading = false}) {
    return <article className="definition-item">
        {!hideHeading && <h4><Link to={`/${slug}`}>{heading}</Link></h4>}
        <div dangerouslySetInnerHTML={{__html: html}}/>
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