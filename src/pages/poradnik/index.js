import React from "react";
import Page from "../../components/Page";
import Seo from "../../components/Seo";
import { graphql } from "gatsby";
import {TextContentItemContainer} from "../../components/TextContentItem";

export default function Poradnik({data}) {
    return <Page isArticle className={"poradnik"} heading={""} subheading={""}>
        <header>
          <h1>Poradnik</h1>
          <p>Stworzyliśmy ten poradnik, by pokazać, że komunikacja z osobami niebinarnymi może być prosta.</p>
          <p>Słyszał_ś o „tych dziwnych zaimkach” i czujesz się tym trochę skołowan_? Może znasz osobę niebinarną i chcesz wiedzieć, jak się do niej zwracać? Albo próbujesz dowiedzieć się jak być osobą sojuszniczą?</p>
          <p>W każdym z tych przypadków trafił_ś idealnie. Dzięki, że jesteś tu z nami.</p>
        </header>
        <TextContentItemContainer items={data.guideItems.nodes}/>
    </Page>
}

export const Head = ({location}) => <Seo title={"Poradnik"} addTitleTemplate location={location}
    description={"O co nie pytać osób niebinarnych? Czego nie mówić? Dowiedz się z naszego poradnika."}
/>

export const query = graphql`
{
  guideItems: allMarkdownRemark(
    filter: {fields: {sourceName: {eq: "guide"}}, frontmatter: {draft: {eq: false}}},
    sort: {frontmatter: {priority: DESC}}
  ) {
    nodes {
      ...Guide
    }
  }
}
`