import React from "react";
import Page from "../../components/Page";
import ContactCard from "../../components/ContactCard";
import Seo from "../../components/Seo";
import { graphql } from "gatsby";
import StoryItem from "../../components/StoryItem";

export default function Opowiesci({data}) {
    return <Page className={"opowiesci"} heading={"Opowieści"}>
        <ContactCard/>
        {data.allMarkdownRemark.nodes.map((story, index) => <StoryItem key={index} {...story}/>)}
    </Page>
}

export const Head = ({location}) => <Seo title={"Opowieści"} addTitleTemplate location={location}
    description={"Jak wygląda życie osób niebinarnych? Poznaj naszą perspektywę, codzienność i marzenia."}
/>

export const query = graphql`
{
  allMarkdownRemark(filter: {fields: {sourceName: {eq: "stories"}}, frontmatter: {draft: {eq: false}}}) {
    nodes {
      ...Story
    }
  }
}
`