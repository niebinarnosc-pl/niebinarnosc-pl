import React from "react";
import Page from "../../components/Page";
import Seo from "../../components/Seo";
import { graphql } from "gatsby";

export default function Historia({data}) {
    return <Page className={"historia"} heading={"Historia"}>
        <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>
    </Page>
}

export const Head = ({location}) => <Seo title={"Historia"} addTitleTemplate location={location}/>

export const query = graphql`
{
  markdownRemark(fields: {sourceName: {eq: "history"}}) {
    html
  }
}
`