import React from "react";
import Page from "../../components/Page";
import Seo from "../../components/Seo";
import { graphql } from "gatsby";
import ArticleContainer from "../../components/ArticleContainer";

export default function Historia({data: {history}}) {
    return <Page isArticle className={"historia"} heading={"Historia"} subheading={"Jaka jest nasza historia? Dowiedz się więcej o niebinarności."}>
        <ArticleContainer {...history}/>
    </Page>
}

export const Head = ({location}) => <Seo title={"Historia"} addTitleTemplate location={location}
    description={"Jaka jest nasza historia? Dowiedz się więcej o niebinarności."}
/>

export const query = graphql`
{
  history: markdownRemark(fields: {sourceName: {eq: "history"}}, frontmatter: {title: {eq: "Historia"}}) {
    ...History
  }
}
`