import React from "react";
import Page from "../../components/Page";
import Seo from "../../components/Seo";
import { graphql } from "gatsby";
import {TextContentItemContainer} from "../../components/TextContentItem";

export default function Poradnik({data}) {
    return <Page isArticle className={"poradnik"} heading={"Poradnik"} subheading={"Pomyłki się zdarzają i nie ma w nich nic złego. O ile ktoś nie misgenderuje lub deadname’uje nas z premedytacją, wszystko jest w porządku. Jeśli nie chcesz być osobą enbyfobiczną, przyswój sobie poniższe zasady."}>
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