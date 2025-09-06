import React from "react";
import Seo from "../../components/Seo";
import Page from "../../components/Page"
import { graphql } from "gatsby";
import { ContentItemContainer } from "../../components/ContentItem";
import ContactCard from "../../components/ContactCard";
import ExternalLink from "../../components/ExternalLink";

export default function Definicja({data: {definition, stories, site}}) {
    const {title} = definition.frontmatter
    return <Page isArticle className={"definicja"} heading={title}>
        <ContentItemContainer singleDefinition items={[definition]}/>
        <h2>Opowieści</h2>
        {stories.nodes.length !== 0 ?
            <ContentItemContainer items={stories.nodes}/> :
            <div className="container">
                <h4>Brak opowieści :(</h4>
                <p>Niestety, nikt nie podzielił się jeszcze swoją opowieścią.</p>
                <p>Chcesz być pierwsz_? <strong><ExternalLink to={site.siteMetadata.contactFormUrl}>Napisz do nas.</ExternalLink></strong></p>
            </div>
            }
        <ContactCard/>
    </Page>
}

export const Head = ({pageContext, location}) => <Seo title={pageContext.title} addTitleTemplate location={location}/>

export const query = graphql`
query($slug: String, $filename: String) {
  definition: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    ...Definition
  }
  stories: allMarkdownRemark(filter: {frontmatter: {definitions: {eq: $filename}, draft: {eq: false}}}) {
    nodes {
      ...Story
    }
  }
  site {
    siteMetadata {
      contactFormUrl
    }
  }
}
`