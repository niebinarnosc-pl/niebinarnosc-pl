import React from "react";
import Page from "../../components/Page"
import Seo from "../../components/Seo";
import { graphql } from "gatsby";
import { ContentItemContainer } from "../../components/ContentItem";

export default function Reprezentacja({data: {representations}}) {
    return <Page className={"reprezentacje"} heading={""} subheading={""}>
        <header>
          <h1>Reprezentacja</h1>
          <p>Zaproponuj nam swoją pozycję z odniesieniami w kulturze.</p>
          <a className="button primary align-left" href="https://forms.gle/cuWkGHvyWbbfbsd16">Zaproponuj artykuł</a>
        </header>
        <ContentItemContainer isButtons items={representations.nodes}/>
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