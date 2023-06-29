import React from "react";
import "./styles.scss";

export default function StoryItem({name, html}) {
    return <div key={name} className="story-item">
        <div>
            <h4>{name}</h4>
        </div>
        <div dangerouslySetInnerHTML={{__html: html}}/>
    </div>
}