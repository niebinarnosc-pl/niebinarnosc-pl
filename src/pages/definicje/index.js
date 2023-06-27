import React from "react";
import Page from "../../components/Page"
import Seo from "../../components/Seo";
import { graphql } from "gatsby";

export default function Definicje({data}) {
    return <Page className={"definicje"} heading={"Definicje"}>
        {data.allFile.nodes.map(({childMarkdownRemark: {html, frontmatter}}) => <div key={frontmatter.name} className="text-item">
            <h4>{frontmatter.name}</h4>
            <div dangerouslySetInnerHTML={{__html: html}}/>
        </div>)}
    </Page>
}

export const Head = ({location}) => <Seo title={"Definicje"} addTitleTemplate location={location}/>

export const query = graphql`
{
  allFile(filter: {sourceInstanceName: {eq: "definitions"}}) {
    nodes {
      childMarkdownRemark {
        html
        frontmatter {
          name
        }
      }
    }
  }
}
`