import React, {useRef, useState} from "react";
import StandardHeader from "./components/StandardHeader";
import MobileHeader from "./components/MobileHeader";
import "./styles.scss"
import Link from "../Link";
import useClickOutside from "../../hooks/useClickOutside";
import {CSSTransition} from "react-transition-group";
import { IconChartRelationship, IconEmail, IconNotebook, IconVoiceActivate } from "../Icons";
import MobileBottomButtons from "./components/MobileBottomButtons";

export default function Header({location, bottom=false}) {
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [expanded, setExpanded] = useState(false)

    const navLinksDictionary = {
        "Definicje": {route: "/definicje/", icon: <IconChartRelationship size={2}/>},
        "Opowieści": {route: "/opowiesci/", icon: <IconVoiceActivate size={2}/>},
        "Historia": {route: "/historia/", icon: <IconNotebook size={2}/>},
        "Kontakt": {route: "/kontakt/", icon: <IconEmail size={2}/>}
    }
    
    const dropdownRef = useRef(null)
    useClickOutside([dropdownRef], () => setActiveDropdown(null))
    const makeLink = (link, index, navBorderDir, transition) => {
        const [text, {route}] = link
        if (typeof route === "string")
            return <Link
                key={index} to={route}
                className={location.pathname.includes(route) ? "active" : ""}
                onClick={() => {setExpanded(false); setActiveDropdown(null)}}>{text}</Link>
        else if (typeof route === "object")
            return <div className={"nav-dropdown"} key={index}>
                <button onClick={() => activeDropdown === text ? setActiveDropdown(null) : setActiveDropdown(text)}>
                    {/* {text}<span><FontAwesomeIcon icon={faCaretDown}/></span> */}
                </button>
                <CSSTransition in={activeDropdown === text} timeout={200} classNames={transition} unmountOnExit mountOnEnter>
                    <div>
                        {Object.entries(route).map(makeLinkMobile)}
                    </div>
                </CSSTransition>
            </div>
    }
    const makeLinkBottom = (link, index) => {
        const [text, {route, icon}] = link
        if (typeof route === "string")
            return <Link
                key={index} to={route}
                className={location.pathname.includes(route) ? "active" : ""}
                onClick={() => {setExpanded(false); setActiveDropdown(null)}}>
                {icon}
                <span>{text}</span>
            </Link>
        return <></>
    }
    const makeLinkStandard = (link, index) => makeLink(link, index, "bottom", "expand")
    const makeLinkMobile = (link, index) => makeLink(link, index, "right", "expand")
    const navLinksStandard = Object.entries(navLinksDictionary).map(makeLinkStandard)
    const navLinksMobile = Object.entries(navLinksDictionary).map(makeLinkMobile)
    const navLinksBottom = Object.entries(navLinksDictionary).map(makeLinkBottom)
    return !bottom ? <header className={"site-header"} ref={dropdownRef}>
        <StandardHeader navLinks={navLinksStandard}/>
        <MobileHeader navLinks={navLinksMobile} expanded={expanded} setExpanded={setExpanded}/>
    </header> : <MobileBottomButtons navLinks={navLinksBottom}/>
}