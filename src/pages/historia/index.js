import React from "react";
import Page from "../../components/Page";
import Seo from "../../components/Seo";
import { graphql } from "gatsby";
import {TextContentItemContainer} from "../../components/TextContentItem";

export default function Historia({data}) {
    return <Page className={"historia"} heading={"Historia"} subheading={"Jaka jest nasza historia? Dowiedz się więcej o niebinarności."}>
        <TextContentItemContainer items={data.historyItems.nodes}/>
    </Page>
}

export const Head = ({location}) => <Seo title={"Historia"} addTitleTemplate location={location}
    description={"Jaka jest nasza historia? Dowiedz się więcej o niebinarności."}
/>

export const query = graphql`
{
  historyItems: allMarkdownRemark(
    filter: {fields: {sourceName: {eq: "history"}}, frontmatter: {draft: {eq: false}}},
    sort: {frontmatter: {priority: DESC}}
  ) {
    nodes {
      ...History
    }
  }
}
`