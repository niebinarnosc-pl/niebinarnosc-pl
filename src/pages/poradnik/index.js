import React from "react";
import Page from "../../components/Page";
import Seo from "../../components/Seo";
import { graphql } from "gatsby";
import ArticleContainer from "../../components/ArticleContainer"

export default function Poradnik({data: {guide}}) {
    return <Page isArticle className={"poradnik"} heading={"Poradnik"} subheading={"Słyszał_ś o „tych dziwnych zaimkach” i czujesz się tym trochę skołowan_? Może znasz osobę niebinarną i chcesz wiedzieć, jak się do niej zwracać? Albo próbujesz dowiedzieć się jak być osobą sojuszniczą? W każdym z tych przypadków trafił_ś idealnie. Dzięki, że jesteś tu z nami."}>
        <ArticleContainer {...guide}/>
    </Page>
}

export const Head = ({location}) => <Seo title={"Poradnik"} addTitleTemplate location={location}
    description={"O co nie pytać osób niebinarnych? Czego nie mówić? Dowiedz się z naszego poradnika."}
/>

export const query = graphql`
{
  guide: markdownRemark(fields: {sourceName: {eq: "guide"}}, frontmatter: {title: {eq: "Poradnik"}}) {
    htmlAst
    html
    frontmatter {
      title
    }
  }
}
`