import React from "react";
import "./styles.scss"
import Seo from "../components/Seo";
import Page from "../components/Page";
import { Link, graphql } from "gatsby";
import HomeNav from "../components/HomeNav";
import HomeHeader from "../components/HomeHeader";
import ContactForm from "../components/ContactForm";
import { ContentItemContainer } from "../components/ContentItem";

export default function Home({data}) {
    return <Page className={"home"}>
        <HomeHeader/>
        <HomeNav/>
        <section>
          <h3>Niusy</h3>
          <ContentItemContainer isLinks items={[data.luStory, data.hihiStory, data.sybiliuszStory]}/>
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
  luStory: markdownRemark(frontmatter: {storyId: {eq: "lu"}}) {
    ...Story
  }
  hihiStory: markdownRemark(frontmatter: {storyId: {eq: "hihi"}}) {
    ...Story
  }
  sybiliuszStory: markdownRemark(frontmatter: {storyId: {eq: "sybiliusz-mykofanes"}}) {
    ...Story
  }
  definition: markdownRemark(frontmatter: {definitionId: {eq: "niebinarnosc"}}) {
    ...Definition
  }
  history: markdownRemark(frontmatter: {historyId: {eq: "termin-niebinarnosc"}}) {
    frontmatter {
      title
    }
    html: excerpt(format: HTML)
  }
}
`