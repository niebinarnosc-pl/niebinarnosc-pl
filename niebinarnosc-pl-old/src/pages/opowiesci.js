import React from "react";
import Seo from "../components/Seo";
import Page from "../components/Page";
import { ContentItemContainer } from "../components/ContentItem";
import ContactCard from "../components/ContactCard";
import { graphql } from "gatsby";

export default function Opowiesci({data: {stories}}) {
    return <Page className={"opowiesci"} heading={"Opowieści"} subheading={"Nasze opowieści o płciowości."}>
        <ContactCard/>
        <ContentItemContainer items={stories.nodes} />
    </Page>
}

export const Head = ({location}) => <Seo title={"Opowieści"} addTitleTemplate location={location}
    description={"Jak wygląda życie osób niebinarnych? Poznaj naszą perspektywę, codzienność i marzenia."}
/>

export const query = graphql`
{
  stories: allMarkdownRemark(filter: {fields: {sourceName: {eq: "stories"}}, frontmatter: {draft: {eq: false}}}) {
    nodes {
      ...Story
    }
  }
}
`