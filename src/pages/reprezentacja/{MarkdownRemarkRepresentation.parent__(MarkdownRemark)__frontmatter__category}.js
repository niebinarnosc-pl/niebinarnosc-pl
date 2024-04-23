import React from "react";
import Seo from "../../components/Seo";
import Page from "../../components/Page"
import { graphql } from "gatsby";
import { ContentItemContainer } from "../../components/ContentItem";
import ExternalLink from "../../components/ExternalLink";
import TagSelector from "../../components/TagSelector";

export default function Reprezentacja({data: {representations: {nodes}, categories: {group}}, pageContext: {parent__frontmatter__category}}) {
    return <Page className={"reprezentacje"} heading={""} subheading={""}>
        <header>
          <h1>Reprezentacja</h1>
          <p>Zaproponuj nam swoją pozycję z odniesieniami w kulturze.</p>
          <ExternalLink className="button primary align-left" to="https://forms.gle/cuWkGHvyWbbfbsd16">Zaproponuj artykuł</ExternalLink>
          {group && <TagSelector basePath={"/reprezentacja"} tags={group.map(({fieldValue}) => fieldValue)} active={parent__frontmatter__category}/>}
        </header>
        <ContentItemContainer items={nodes}/>
    </Page>
}

export const Head = ({location}) => <Seo title={"Reprezentacja"} addTitleTemplate location={location}
    description={"W jakich teskstach kultury występują osoby niebinarne? Polecamy książki, seriale i inne."}
/>

export const query = graphql`
query($parent__frontmatter__category: String) {
  categories: allMarkdownRemark(
    filter: {
      fields: {sourceName: {eq: "representation"}},
      frontmatter: {
        draft: {eq: false},
      }
    }
  ) {
    group(field: {frontmatter: {category: SELECT}}) {
      fieldValue
    }
  }
  representations: allMarkdownRemark(
    filter: {
      fields: {sourceName: {eq: "representation"}},
      frontmatter: {
        draft: {eq: false},
        category: {eq: $parent__frontmatter__category}
      }
    },
    sort: [{frontmatter: {date: DESC}}]
  ) {
    nodes {
      ...Representation
    }
  }
}
`