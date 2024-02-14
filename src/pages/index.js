import React from "react";
import Seo from "../components/Seo";
import Page from "../components/Page";
import { graphql } from "gatsby";
import { ContentItemContainer } from "../components/ContentItem";
import HomeNav from "../components/HomeNav";
import HomeHeader from "../components/HomeHeader";
import ContactForm from "../components/ContactForm";

export default function Home({data}) {
    return <Page className={"home"}>
        <HomeHeader/>
        <HomeNav/>
        <section>
          <h2>Niusy</h2>
          <ContentItemContainer isButtons items={data.news.nodes}/>
        </section>
        <ContactForm/>
    </Page>
}

export const Head = ({location}) => <Seo
    title={"niebinarnosc.pl - polska strona o niebinarności, tworzona przez osoby niebinarne"}
    description={"Dowiedz się, czym są niebinarne tożsamości płciowe. Poznaj historię niebinarności oraz opowieści osób niebinarnych."}
    location={location}
/>

export const query = graphql`
{
  news: allMarkdownRemark(
    filter: {frontmatter: {draft: {eq: false}}},
    sort: {frontmatter: {date: DESC}},
    limit: 3
  ) {
    nodes {
      ...ContentItem
    }
  }
}
`