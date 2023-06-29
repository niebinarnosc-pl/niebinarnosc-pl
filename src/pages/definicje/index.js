import React from "react";
import Page from "../../components/Page"
import Seo from "../../components/Seo";
import { graphql } from "gatsby";
import DefinitionItem from "../../components/DefinitionItem";

export default function Definicje({data}) {
    return <Page className={"definicje"} heading={"Definicje"}>
        {data.allFile.nodes.map(({childMarkdownRemark: {html, frontmatter}}) => <DefinitionItem name={frontmatter.name} html={html}/>)}
    </Page>
}

export const Head = ({location}) => <Seo title={"Definicje"} addTitleTemplate location={location}/>

export const query = graphql`
{
  allFile(filter: {sourceInstanceName: {eq: "definitions"}}) {
    nodes {
      childMarkdownRemark {
        html
        frontmatter {
          name
        }
      }
    }
  }
}
`