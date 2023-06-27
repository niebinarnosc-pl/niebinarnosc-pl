import React from "react";
import "./styles.scss";

export default function Card({children, heading, color="", className="", html}) {
    return <section className={`card ${className} ${color}`}>
        {heading && <h3 className={`card-heading`}><span>{heading}</span></h3>}
        {children}
        <div dangerouslySetInnerHTML={{__html: html}}/>
    </section>
}