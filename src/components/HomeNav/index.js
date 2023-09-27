import React from "react";
import "./styles.scss"
import { Link } from "gatsby";
import { IconChartRelationship, IconIdentification, IconNotebook, IconUserSimulation, IconVoiceActivate } from "../Icons";

function HomeNavItem ({to, color, icon, heading, desc}) {
  return <Link to={to} className={color}>
    <div className={color}>
      <div className={color}/>
      {icon}
    </div>
    <div>
      <h6>{heading}</h6>
      <p>{desc}</p>
    </div>
  </Link>
}

export default function HomeNav() {
  return <nav className="home-nav">
    <div>
      <HomeNavItem to="/definicje/" color="yellow" icon={<IconChartRelationship/>} heading="Definicje" desc="Czym jest niebinarność i inne."/>
      <HomeNavItem to="/poradnik/" color="yellow" icon={<IconUserSimulation/>} heading="Poradnik" desc="Jak nie być osobą genitalną."/>
      <HomeNavItem to="/opowiesci/" color="purple" icon={<IconVoiceActivate/>} heading="Opowieści" desc="Nasze opowieści o płciowości."/>
    </div>
    <div>
      <HomeNavItem to="/historia/" color="purple" icon={<IconNotebook/>} heading="Historia" desc="Pierwsze użycie terminu niebinarność. Niebinarność w dawnych kulturach."/>
      <HomeNavItem to="/reprezentacja/" color="black" icon={<IconIdentification/>} heading="Reprezentacja" desc="Osoby niebinarne w wytworach kultury."/>
    </div>
  </nav>
}