import React from "react";
import "./styles.scss"
import { Link } from "gatsby";
import { IconChartRelationship, IconEmail, IconNotebook, IconVoiceActivate } from "../Icons";

export default function HomeNav() {
    return <nav className="home-nav">
      <div>
        <Link to="/definicje/"><IconChartRelationship size={1.75}/>Definicje</Link>
        <Link to="/opowiesci/"><IconVoiceActivate size={1.75}/>Opowieści</Link>
      </div>
      <div>
        <Link to="/historia/"><IconNotebook size={1.75}/>Historia</Link>
        <Link to="/kontakt/"><IconEmail size={1.75}/>Kontakt</Link>
      </div>
    </nav>
}