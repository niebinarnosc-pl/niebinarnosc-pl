import React from "react";
import Page from "../../components/Page"
import Seo from "../../components/Seo";
import { graphql } from "gatsby";
import { ContentItemContainer } from "../../components/ContentItem";

export default function Definicje({data: {definitions}}) {
    return <Page className={"definicje"} heading={"Definicje"} subheading={"Czym jest niebinarność i inne."}>
        <ContentItemContainer items={definitions.nodes} />
    </Page>
}

export const Head = ({location}) => <Seo title={"Definicje"} addTitleTemplate location={location}
    description={"Niebinarność, demipłciowość, panpłciowość... Co to oznacza? Przejrzyj nasz słowniczek."}
/>

export const query = graphql`
{
  definitions: allMarkdownRemark(
    filter: {fields: {sourceName: {eq: "definitions"}}, frontmatter: {draft: {eq: false}}},
    sort: [{frontmatter: {priority: DESC}}, {frontmatter: {title: ASC}}]
  ) {
    nodes {
      ...Definition
    }
  }
}
`