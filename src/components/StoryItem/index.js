import React, { useState } from "react";
import "./styles.scss";
import { IconLogoFacebook, IconLogoInstagram, IconLogoTwitter } from "../Icons";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Lightbox from "../Lightbox";

export default function StoryItem({thumbnail, fullPhoto, name, socials, definitions, triggers, html}) {
    const [imageActive, setImageActive] = useState(false)
    const thumbnailElem = <button onClick={() => setImageActive(true)} className="thumbnail-button">
        <GatsbyImage image={getImage(thumbnail)} alt={name} onClick={() => setImageActive(true)}/>
    </button>
    return <div key={name} className="story-item">
        {imageActive && <Lightbox image={fullPhoto} alt={name} deactivate={() => setImageActive(false)}/>}
        <aside>
            {thumbnailElem}
        </aside>
        <article>
            <header>
                <div className="image">
                    {thumbnailElem}
                </div>
                <div className="info">
                    <h4>{name}</h4>
                    <div className="socials">
                        <a href={`https://www.facebook.com/${socials.facebook}`}>{<IconLogoFacebook size={1}/>}</a>
                        <a href={`https://twitter.com/${socials.twitter}`}>{<IconLogoTwitter size={1}/>}</a>
                        <a href={`https://www.instagram.com/${socials.instagram}`}>{<IconLogoInstagram size={1}/>}</a>
                    </div>
                </div>
                <div className="tags">
                    {definitions.map(definition => <a key={definition} href="#" className="badge-button">{definition}</a>)}
                </div>
                <div className="tags">
                    {triggers.map(trigger => <a key={trigger} href="#" className="badge-button error">{trigger}</a>)}
                </div>
            </header>
            <div dangerouslySetInnerHTML={{__html: html}}/>
        </article>
    </div>
}