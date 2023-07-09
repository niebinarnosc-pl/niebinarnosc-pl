import React from "react";
import Page from "../../components/Page";
import Seo from "../../components/Seo";
import { graphql } from "gatsby";
import HistoryItem from "../../components/HistoryItem";

export default function Historia({data}) {
    return <Page className={"historia"} heading={"Historia"}>
        {data.historyItems.nodes.map((historyItem, index) => <HistoryItem key={index} {...historyItem}/>)}
    </Page>
}

export const Head = ({location}) => <Seo title={"Historia"} addTitleTemplate location={location}/>

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