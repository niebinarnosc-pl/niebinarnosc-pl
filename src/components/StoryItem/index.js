import React, { useState } from "react";
import "./styles.scss";
import { IconLogoFacebook, IconLogoInstagram, IconLogoTwitter } from "../Icons";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Lightbox from "../Lightbox";
import { Link } from "gatsby";

export default function StoryItem({thumbnail, fullPhoto, title, socials, definitions, triggers, html}) {
    const [imageActive, setImageActive] = useState(false)
    const thumbnailElem = <button onClick={() => setImageActive(true)} className="thumbnail-button">
        <GatsbyImage image={getImage(thumbnail)} alt={title} onClick={() => setImageActive(true)}/>
    </button>
    return <div key={title} className="story-item">
        {imageActive && <Lightbox image={fullPhoto} alt={title} deactivate={() => setImageActive(false)}/>}
        <aside>
            {thumbnailElem}
        </aside>
        <article>
            <header>
                <div className="image">
                    {thumbnailElem}
                </div>
                <div className="info">
                    <h4>{title}</h4>
                    {/* <div className="socials">
                        <a href={`https://www.facebook.com/${socials.facebook}`}>{<IconLogoFacebook size={1}/>}</a>
                        <a href={`https://twitter.com/${socials.twitter}`}>{<IconLogoTwitter size={1}/>}</a>
                        <a href={`https://www.instagram.com/${socials.instagram}`}>{<IconLogoInstagram size={1}/>}</a>
                    </div> */}
                    <div className="tags">
                        {definitions.map(({frontmatter: {slug, title}}) => <p key={slug} className="badge-button"><Link to={`/${slug}`}>{title}</Link></p>)}
                    </div>
                    <div className="tags">
                        {triggers.map(trigger => <p key={trigger} className="badge-button error">{trigger}</p>)}
                    </div>
                </div>
            </header>
            <div dangerouslySetInnerHTML={{__html: html}}/>
        </article>
    </div>
}