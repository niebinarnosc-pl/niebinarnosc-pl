import React, { useState } from "react";
import "./styles.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Lightbox from "../Lightbox";
import { Link, graphql } from "gatsby";
import defaultThumbnail from "../../images/logo-square.svg"

export const ContentItemContainer = ({items, isLinks}) => <div className={`content-item-container${isLinks ? " with-links" : ""}`}>
    {items.map((item, index) => <ContentItem {...item} isLink={isLinks} key={index}/>)}
</div>

export const ContentItem = ({isLink, frontmatter: {id, thumbnail, fullPhoto, title, titleEn, definitions, triggers}, html, excerpt}) => {
    const [imageActive, setImageActive] = useState(false)
    const thumbnailElem = <div className="thumbnail">
        {thumbnail ? 
            <button onClick={() => setImageActive(true)}>
                <GatsbyImage image={getImage(thumbnail)} alt={title} onClick={() => setImageActive(true)}/>
            </button> :
            <img src={defaultThumbnail} alt="Flaga niebinarna"/>
        }
    </div>
    const article = <article className="content-item" id={id}>
        {fullPhoto && imageActive && <Lightbox image={fullPhoto} alt={title} deactivate={() => setImageActive(false)}/>}
        <div className="side-image">
            {thumbnailElem}
        </div>
        <div className="text-container">
            <header>
                <div className="header-image">
                    {thumbnailElem}
                </div>
                <div className="info">
                    <h4>{title + (titleEn ? ` (${titleEn.toLowerCase()})` : "")}</h4>
                    {definitions && <div className="tags">
                        {definitions.map(({frontmatter: {slug, title}}) => <p key={slug} className="badge-button"><Link to={`/${slug}`}>{title}</Link></p>)}
                    </div>}
                    {triggers && <div className="tags">
                        {triggers.map(trigger => <p key={trigger} className="badge-button error">{trigger}</p>)}
                    </div>}
                </div>
            </header>
            <div className="text" dangerouslySetInnerHTML={{__html: isLink ? excerpt : html}}/>
        </div>
    </article>
    return isLink ? <Link className="content-item-as-link" to={`/opowiesci#${id}`}>{article}</Link> : article
}


export const query = graphql`
fragment Story on MarkdownRemark {
  html
  excerpt(format: HTML, pruneLength: 250)
  frontmatter {
    id: storyId
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

fragment Definition on MarkdownRemark {
  html
  frontmatter {
    title
    titleEn
    slug
  }
}
`