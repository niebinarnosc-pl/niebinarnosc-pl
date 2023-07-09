import React from "react";
import "./styles.scss"
import Seo from "../components/Seo";
import Page from "../components/Page";
import { Link, graphql } from "gatsby";
import DefinitionItem from "../components/DefinitionItem";
import StoryItem from "../components/StoryItem";
import HistoryItem from "../components/HistoryItem";
import HomeNav from "../components/HomeNav";

export default function Home({data}) {
    return <Page className={"home"} heading={<>Niebinarność <span>jest dziobakiem wśród płci.</span> <span>Ni to wydra, ni to kaczka, <em>still cute</em></span></>}>
        <HomeNav/>
        <h3>Definicje</h3>
        <p className="font-weight-500">Niebinarność, demipłciowość, panpłciowość... Co to oznacza? Przejrzyj nasz słowniczek.</p>
        <DefinitionItem {...data.definition}/>
        <Link to={`/definicje/`} className="button margin-top-bottom">Zobacz więcej definicji</Link>
        <hr/>
        <h3>Opowieści</h3>
        <p className="font-weight-500">Jak wygląda nasze życie? Poznaj naszą perspektywę, codzienne perspektywy i marzenia.</p>
        <StoryItem {...data.luStory} expandable/>
        <StoryItem {...data.hihiStory} expandable/>
        <StoryItem {...data.sybiliuszStory} expandable/>
        <Link to={`/opowiesci/`} className="button margin-top-bottom">Zobacz więcej opowieści</Link>
        <hr/>
        <h3>Historia</h3>
        <p className="font-weight-500">Jaka jest nasza historia? Dowiedz się więcej o niebinarności.</p>
        <HistoryItem {...data.history}/>
        <Link to={`/historia/`} className="button margin-top-bottom">Zobacz więcej informacji</Link>
    </Page>
}

export const Head = ({location}) => <Seo title={"niebinarnosc.pl"} location={location}/>

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