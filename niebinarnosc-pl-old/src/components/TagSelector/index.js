import React from "react";
import "./styles.scss";
import slugify from "../../utils/slugify";
import { Link } from "gatsby";

export default function TagSelector({basePath, tags, active}) {
    return <div className="tag-selector">
        <Link to={basePath} className={`badge-button${typeof active === "undefined" ? " selected" : ""}`}>Wszystko</Link>
        {tags.map(tag => <Link key={tag} to={`${basePath}/${slugify(tag)}`} className={`badge-button${active === tag ? " selected" : ""}`}>{tag}</Link>)}
    </div>
}