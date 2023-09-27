import React, { useState } from "react";
import "./styles.scss";
import { IconLogoFacebook, IconLogoInstagram, IconLogoTwitter } from "../Icons";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Lightbox from "../Lightbox";
import { Link, graphql } from "gatsby";
import defaultThumbnail from "../../images/nb-flag-square.svg"

export default function StoryItem({frontmatter: {id, thumbnail, fullPhoto, title, definitions, triggers}, html, excerpt, expandable = false}) {
    const [expanded, setExpanded] = useState(false)
    const [imageActive, setImageActive] = useState(false)
    const thumbnailElem = <div className="thumbnail">
        {thumbnail ? 
            <button onClick={() => setImageActive(true)}>
                <GatsbyImage image={getImage(thumbnail)} alt={title} onClick={() => setImageActive(true)}/>
            </button> :
            <img src={defaultThumbnail} alt="Flaga niebinarna"/>
        }
    </div>
    return <div key={title} className="story-item" id={id}>
        {fullPhoto && imageActive && <Lightbox image={fullPhoto} alt={title} deactivate={() => setImageActive(false)}/>}
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
                    <div className="tags">
                        {definitions.map(({frontmatter: {slug, title}}) => <p key={slug} className="badge-button"><Link to={`/${slug}`}>{title}</Link></p>)}
                    </div>
                    {triggers && <div className="tags">
                        {triggers.map(trigger => <p key={trigger} className="badge-button error">{trigger}</p>)}
                    </div>}
                </div>
            </header>
            <div dangerouslySetInnerHTML={{__html: !expandable || expanded ? html : excerpt}}/>
            {expandable && <div><p><strong><button className="clear-button" onClick={() => setExpanded(!expanded)}>
                {!expanded ? "Przeczytaj więcej" : "Schowaj"}
            </button></strong></p></div>}
        </article>
    </div>
}
