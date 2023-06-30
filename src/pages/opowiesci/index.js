import React from "react";
import Page from "../../components/Page";
import ContactCard from "../../components/ContactCard";
import Seo from "../../components/Seo";
import { graphql } from "gatsby";
import StoryItem from "../../components/StoryItem";

export default function Opowiesci({data}) {
    return <Page className={"opowiesci"} heading={"Opowieści"}>
        <ContactCard/>
        {data.allFile.nodes.map(({childMarkdownRemark: {html, frontmatter}}, index) => <StoryItem key={index} html={html} {...frontmatter}/>)}
    </Page>
}

export const Head = ({location}) => <Seo title={"Opowieści"} addTitleTemplate location={location}/>

export const query = graphql`
{
  allFile(filter: {sourceInstanceName: {eq: "stories"}, extension: {eq: "md"}}) {
    nodes {
      childMarkdownRemark {
        html
        frontmatter {
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
          fullPhoto {
            childImageSharp {
              gatsbyImageData(
                transformOptions: {
                  fit: INSIDE
                }
              )
            }
          }
          name
          socials {
            facebook
            twitter
            instagram
          }
          definitions
          triggers
        }
      }
    }
  }
}
`