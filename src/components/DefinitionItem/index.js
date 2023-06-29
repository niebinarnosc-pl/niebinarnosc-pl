import React from "react";
import "./styles.scss";

export default function DefinitionItem({name, html}) {
    return <div key={name} className="definition-item">
        <h4>{name}</h4>
        <div dangerouslySetInnerHTML={{__html: html}}/>
    </div>
}