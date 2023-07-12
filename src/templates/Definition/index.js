import React from "react";
import Page from "../../components/Page"
import Seo from "../../components/Seo";
import { Link, graphql } from "gatsby";
import DefinitionItem from "../../components/DefinitionItem";
import StoryItem from "../../components/StoryItem";
import ContactCard from "../../components/ContactCard";

export default function Definicje({data: {definition, site}}) {
    const {title, titleEn} = definition.frontmatter
    return <Page className={"definicja"} heading={title + (titleEn ? ` (${titleEn.toLowerCase()})` : "")}>
        <DefinitionItem {...definition} hideHeading hideButton/>
        <Link className="button margin-top-bottom" to="/definicje/">Zobacz inne definicje</Link>
        <hr/>
        <ContactCard/>
        {definition.frontmatter.stories.length !== 0 ?
            definition.frontmatter.stories.map((story, index) => <StoryItem key={index} {...story}/>) :
            <div>
                <h4>Brak opowieści :(</h4>
                <p>Niestety, nikt nie podzielił się jeszcze swoją opowieścią.</p>
                <p>Chcesz być pierwsz_? <strong><a href={site.siteMetadata.contactFormUrl}>Napisz do nas.</a></strong></p>
            </div>
            }
    </Page>
}

export const Head = ({pageContext, location}) => <Seo title={pageContext.title} addTitleTemplate location={location}/>

export const query = graphql`
query($slug: String) {
  definition: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      title
      titleEn
      stories {
        ...Story
      }
    }
  }
  site {
    siteMetadata {
      contactFormUrl
    }
  }
}
`