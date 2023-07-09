import React from "react";
import Page from "../../components/Page"
import Seo from "../../components/Seo";
import { Link, graphql } from "gatsby";
import DefinitionItem from "../../components/DefinitionItem";
import StoryItem from "../../components/StoryItem";

export default function Definicje({data: {definition}}) {
    return <Page className={"definicja"} heading={definition.frontmatter.heading}>
        <DefinitionItem {...definition} hideHeading/>
        <Link className="button margin-top-bottom" to="/definicje/">Zobacz inne definicje</Link>
        {definition.frontmatter.stories
            .map((story, index) => <StoryItem key={index} {...story}/>)}
    </Page>
}

export const Head = ({pageContext, location}) => <Seo title={pageContext.heading} addTitleTemplate location={location}/>

export const query = graphql`
query($slug: String) {
  definition: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      title
      heading
      stories {
        ...Story
      }
    }
  }
}
`