import React from "react";
import "./styles.scss";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const TextContentItemContainer = ({items}) => <div className="text-content-item-container">
    {console.log(items)}
    {items.map((item, index) => <TextContentItem {...item} key={index}/>)}
</div>

export const TextContentItem = ({frontmatter: {title, fullPhoto, fullPhotoAlt, slug}, html}) => {
    return <article className={`text-content-item${fullPhoto ? " with-photo" : ""}`} id={slug}>
        {fullPhoto && <GatsbyImage image={getImage(fullPhoto)} alt={fullPhotoAlt || title}/>}
        <div className="text-container">
            <h4>{title}</h4>
            <div dangerouslySetInnerHTML={{__html: html}}/>
        </div>
    </article>
}

export const query = graphql`
fragment TextContentItem on MarkdownRemark {
  html
  frontmatter {
    title
    fullPhoto {
      childImageSharp {
        gatsbyImageData(
          width: 500
          placeholder: BLURRED
          transformOptions: {
            fit: INSIDE
          }
        )
      }
    }
    fullPhotoAlt
    slug
  }
}

fragment History on MarkdownRemark {
  ...TextContentItem
}

fragment Guide on MarkdownRemark {
  ...TextContentItem
}
`