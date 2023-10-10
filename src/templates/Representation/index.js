import React from "react";
import "./styles.scss";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Page from "../../components/Page";
import Seo from "../../components/Seo";

export default function Representation({data: {representation: {frontmatter: {title, fullPhoto, authors, category, year, ageLimit, description}, html}}}) {
    return <Page isArticle className="representation">
        <header>
          {fullPhoto && <GatsbyImage image={getImage(fullPhoto)} alt={title}/>}
          <div className="header-info">
            <h1>{title}</h1>
            <div className="short-info">
              <a className="badge-button">{category}</a>
              <p>{year}</p>
              {ageLimit && <p>{ageLimit}+</p>}
            </div>
            <div>
              <p><span>{authors.length > 1 ? "Osoby autorskie:" : "Osoba autorska:"}</span>{authors.map(author => author.link ?
                <a key={author.name} href={author.link}>{author.name}</a> :
                <React.Fragment key={author.name}>{author.name}</React.Fragment>
              ).reduce((acc, current) => <>{acc}, {current}</>)}</p>
            </div>
            <p>{description}</p>
          </div>
        </header>
        <div className="text-container">
            <div dangerouslySetInnerHTML={{__html: html}}/>
        </div>
    </Page>
}

export const Head = ({pageContext, location}) => <Seo title={pageContext.title} addTitleTemplate location={location}/>

export const query = graphql`
fragment Representation on MarkdownRemark {
  ...ContentItem
  frontmatter {
    authors {
      name
      link
    }
    category
    year
    ageLimit
    description
  }
}

query($slug: String) {
  representation: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    ...Representation
  }
  site {
    siteMetadata {
      contactFormUrl
    }
  }
}
`