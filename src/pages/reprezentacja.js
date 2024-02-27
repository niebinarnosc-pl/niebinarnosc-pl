import React from "react";
import Seo from "../components/Seo";
import Page from "../components/Page"
import { graphql } from "gatsby";
import { ContentItemContainer } from "../components/ContentItem";
import ExternalLink from "../components/ExternalLink";

export default function Reprezentacja({data: {representations}}) {
    return <Page className={"reprezentacje"} heading={""} subheading={""}>
        <header>
          <h1>Reprezentacja</h1>
          <p>Zaproponuj nam swoją pozycję z odniesieniami w kulturze.</p>
          <ExternalLink className="button primary align-left" to="https://forms.gle/cuWkGHvyWbbfbsd16">Zaproponuj artykuł</ExternalLink>
        </header>
        <ContentItemContainer items={representations.nodes}/>
    </Page>
}

export const Head = ({location}) => <Seo title={"Reprezentacja"} addTitleTemplate location={location}
    description={"W jakich teskstach kultury występują osoby niebinarne? Polecamy książki, seriale i inne."}
/>

export const query = graphql`
{
  representations: allMarkdownRemark(
    filter: {fields: {sourceName: {eq: "representation"}}, frontmatter: {draft: {eq: false}}},
    sort: [{frontmatter: {date: DESC}}]
  ) {
    nodes {
      ...Representation
    }
  }
}
`