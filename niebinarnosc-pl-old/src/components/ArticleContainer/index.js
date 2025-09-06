import React from "react";
import "./styles.scss";
import { graphql } from "gatsby";
import renderAst from "../../utils/renderAst";

export default function ArticleContainer({htmlAst}) {
  return <div className="article-container">
    {renderAst(htmlAst)}
  </div>
}

export const query = graphql`
fragment Article on MarkdownRemark {
  htmlAst
  frontmatter {
    title
  }
}

fragment History on MarkdownRemark {
  ...Article
}

fragment Guide on MarkdownRemark {
  ...Article
}
`