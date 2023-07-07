import React from "react";
import Page from "../../components/Page"
import Seo from "../../components/Seo";
import { graphql } from "gatsby";
import DefinitionItem from "../../components/DefinitionItem";

export default function Definicje({data}) {
    return <Page className={"definicje"} heading={"Definicje"}>
        {data.allMarkdownRemark.nodes
            .map(({html, frontmatter}, index) => <DefinitionItem key={index} {...frontmatter} html={html}/>)}
    </Page>
}

export const Head = ({location}) => <Seo title={"Definicje"} addTitleTemplate location={location}/>

export const query = graphql`
{
  allMarkdownRemark(
    filter: {fields: {sourceName: {eq: "definitions"}}, frontmatter: {draft: {eq: false}}},
    sort: [{frontmatter: {priority: DESC}}, {frontmatter: {heading: ASC}}]
  ) {
    nodes {
      html
      frontmatter {
        heading
        slug
      }
    }
  }
}
`