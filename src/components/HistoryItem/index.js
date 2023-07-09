import React from "react";
import "./styles.scss";
import { graphql } from "gatsby";

export default function HistoryItem({frontmatter: {title}, html}) {
    return <article className="history-item">
        <h4>{title}</h4>
        <div dangerouslySetInnerHTML={{__html: html}}/>
    </article>
}

export const query = graphql`
fragment History on MarkdownRemark {
  html
  frontmatter {
    title
  }
}
`