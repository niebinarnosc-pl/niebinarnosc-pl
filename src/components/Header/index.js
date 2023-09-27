import React, {useEffect, useRef, useState} from "react";
import StandardHeader from "./components/StandardHeader";
import MobileHeader from "./components/MobileHeader";
import "./styles.scss"
import Link from "../Link";
import { IconChartRelationship, IconEmail, IconIdentification, IconNotebook, IconUserSimulation, IconVoiceActivate } from "../Icons";
import MobileBottomButtons from "./components/MobileBottomButtons";
import useScrollDirection from "../../hooks/useScrollDirection";

export default function Header({location, bottom=false}) {
    const [expanded, setExpanded] = useState(false)
    const {isScrollDown, isScrollUp} = useScrollDirection()

    useEffect(() => {
        isScrollDown && setExpanded(false)
    }, [isScrollDown])

    const navLinksDictionary = {
        "Definicje": {route: "/definicje/", icon: <IconChartRelationship/>},
        "Poradnik": {route: "/poradnik/", icon: <IconUserSimulation/>},
        "Opowieści": {route: "/opowiesci/", icon: <IconVoiceActivate/>},
        "Historia": {route: "/historia/", icon: <IconNotebook/>},
        "Reprezentacja": {route: "/reprezentacja/", icon: <IconIdentification/>},
        "Kontakt": {route: "/#kontakt", icon: <IconEmail/>}
    }
    
    const makeLink = (link, index, showIcon) => {
        const [text, {route, icon}] = link
            return <Link
                key={index} to={route}
                className={location.pathname.includes(route) ? "active" : ""}
                onClick={() => {setExpanded(false);}}>
                {showIcon && icon}
                <span>{text}</span>
            </Link>
    }
    const navLinks = Object.entries(navLinksDictionary).map((link, index) => makeLink(link, index, false))
    const navLinksIcons = Object.entries(navLinksDictionary).map((link, index) => makeLink(link, index, true))
    return !bottom ? <header className={`site-header ${isScrollDown ? "hidden" : ""}`}><div className="site-header-container">
        <StandardHeader navLinks={navLinks}/>
        <MobileHeader navLinks={navLinksIcons} expanded={expanded} setExpanded={setExpanded}/>
    </div></header> : <MobileBottomButtons navLinks={navLinksIcons}/>
}