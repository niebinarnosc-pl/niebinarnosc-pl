import React from "react";
import Page from "../../components/Page"
import Seo from "../../components/Seo";
import { graphql } from "gatsby";
import DefinitionItem from "../../components/DefinitionItem";
import StoryItem from "../../components/StoryItem";

export default function Definicje({data: {markdownRemark: {frontmatter, html}}}) {
    return <Page className={"definicja"} heading={frontmatter.heading}>
        <DefinitionItem {...frontmatter} html={html} hideHeading/>
        {frontmatter.stories
            .map(({html, frontmatter}, index) => <StoryItem key={index} html={html} {...frontmatter}/>)}
    </Page>
}

export const Head = ({pageContext, location}) => <Seo title={pageContext.heading} addTitleTemplate location={location}/>

export const query = graphql`
query($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      title
      heading
      stories {
        html
        frontmatter {  
          thumbnail {
            childImageSharp {
              gatsbyImageData(
                width: 200
              )
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
          title
          socials {
            facebook
            twitter
            instagram
          }
          definitions {
            frontmatter {
              title
              slug
            }
          }
          triggers
        }
      }
    }
  }
}
`