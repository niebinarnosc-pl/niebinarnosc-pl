import React from "react";
import Page from "../../components/Page"
import Seo from "../../components/Seo";
import { graphql } from "gatsby";
import DefinitionItem from "../../components/DefinitionItem";

export default function Definicje({data: {definitions}}) {
    return <Page className={"definicje"} heading={"Definicje"}>
        {definitions.nodes.map((definition, index, nodes) => <React.Fragment key={index}>
            <DefinitionItem {...definition}/>
            {index !== nodes.length - 1 && <hr/>}
        </React.Fragment>)}
    </Page>
}

export const Head = ({location}) => <Seo title={"Definicje"} addTitleTemplate location={location}/>

export const query = graphql`
{
  definitions: allMarkdownRemark(
    filter: {fields: {sourceName: {eq: "definitions"}}, frontmatter: {draft: {eq: false}}},
    sort: [{frontmatter: {priority: DESC}}, {frontmatter: {heading: ASC}}]
  ) {
    nodes {
      ...Definition
    }
  }
}
`