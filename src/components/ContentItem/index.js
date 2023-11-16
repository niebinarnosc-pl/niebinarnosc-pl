import React, { useState } from "react";
import "./styles.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Lightbox from "../Lightbox";
import { Link, graphql } from "gatsby";
import defaultThumbnail from "../../images/logo-square.svg"
import { IconArrowRight } from "../Icons";
import renderAst from "../../utils/renderAst";

export const ContentItemContainer = ({items, isButtons, singleDefinition}) => <div className={
    "content-item-container" +
    (isButtons ? " with-links" : "")
    }>
        {items.map((item, index) => <ContentItem {...item} isButton={isButtons} singleDefinition={singleDefinition} key={index}/>)}
</div>

export const ContentItem = ({isButton, singleDefinition, fields: {sourceName}, frontmatter: {slug, thumbnail, thumbnailFromPhoto, fullPhoto, title, titleEn, definitionsRemark, triggers, description}, htmlAst, excerpt}) => {
    const [imageActive, setImageActive] = useState(false)
    const thumbnailPic = thumbnail || thumbnailFromPhoto
    const thumbnailElem = <div className={
        "thumbnail" +
        (["stories", "definitions"].includes(sourceName) ? " square" : "")
    }>
        {thumbnailPic ? 
            <button onClick={() => setImageActive(true)}>
                {typeof getImage(thumbnailPic) !== "undefined" ? 
                    <GatsbyImage image={getImage(thumbnailPic)} alt={title} onClick={() => setImageActive(true)}/> :
                    <img src={thumbnailPic.publicURL} alt={title} onClick={() => setImageActive(true)}/>
                }
            </button> :
            <img src={defaultThumbnail} alt="Flaga niebinarna z logiem niebinarnosc.pl"/>
        }
    </div>
    const href = {
        "definitions": `/${slug}`,
        "stories": `/opowiesci#${slug}`,
        "history": `/historia#${slug}`,
        "guide": `/poradnik#${slug}`,
        "representation": `/reprezentacja/${slug}`,
    }[sourceName]
    const shouldHideThumbnail = ["history", "guide"].includes(sourceName) ? " hidden" : ""
    const article = <article className="content-item" id={slug}>
        {fullPhoto && imageActive && <Lightbox image={fullPhoto} alt={title} deactivate={() => setImageActive(false)}/>}
        <div className={`side-image${shouldHideThumbnail}`}>
            {thumbnailElem}
        </div>
        <div className="text-container">
            <header>
                <div className={`header-image${shouldHideThumbnail}`}>
                    {thumbnailElem}
                </div>
                <div className="info">
                    <h4>{title + (titleEn ? ` (${titleEn.toLowerCase()})` : "")}</h4>
                    {definitionsRemark && <div className="tags">
                        {definitionsRemark.map(({frontmatter: {slug, title}}) => <p key={slug} className="badge-button"><Link to={`/${slug}`}>{title}</Link></p>)}
                    </div>}
                    {triggers && <div className="tags">
                        {triggers.map(trigger => <p key={trigger} className="badge-button error">{trigger}</p>)}
                    </div>}
                </div>
            </header>
            <div className="text">{isButton ? (description || excerpt) : renderAst(htmlAst)}</div>
            {isButton && <button className="button secondary">Czytaj więcej <IconArrowRight/></button>}
            {sourceName === "definitions" && !isButton && (singleDefinition ?
                <Link to={"/definicje/"} className="button secondary">Zobacz inne definicje <IconArrowRight/></Link> :
                <Link to={href} className="button secondary">Zobacz opowieści <IconArrowRight/></Link>
            )}
        </div>
    </article>
    return isButton ? <Link className="content-item-as-link" to={href}>{article}</Link> : article
}


export const query = graphql`
fragment ContentItem on MarkdownRemark {
  fields {
    sourceName
  }
  htmlAst
  excerpt(pruneLength: 250)
  frontmatter {
    slug
    thumbnail {
      publicURL
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
        )
      }
    }
    thumbnailFromPhoto: fullPhoto {
      publicURL
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
        )
      }
    }
    fullPhoto {
      publicURL
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          transformOptions: {
            fit: INSIDE
          }
        )
      }
    }
    title
    definitionsRemark {
      frontmatter {
        title
        slug
      }
    }
    triggers
    description
  }
}

fragment Story on MarkdownRemark {
  ...ContentItem
  frontmatter {
    definitionsRemark {
      frontmatter {
        title
        slug
      }
    }
    triggers
  }
}

fragment Definition on MarkdownRemark {
  ...ContentItem
  frontmatter {
    titleEn
  }
}
`