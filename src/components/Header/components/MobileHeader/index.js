import React, {useRef} from "react"
import "./styles.scss"
import useClickOutside from "../../../../hooks/useClickOutside";
import Link from "../../../Link"
import { StaticImage } from "gatsby-plugin-image";
import { IconMenu } from "../../../Icons";

export default function MobileHeader({navLinks, expanded, setExpanded}) {
    const refNav = useRef(null)
    const refTitleBar = useRef(null)
    useClickOutside([refNav, refTitleBar], () => setExpanded(false))
    return (
        <section className={"mobile-site-header"}>
            <nav className={expanded ? "expanded" : undefined} ref={refNav}>
                {navLinks}
                <div className={"nav-end"} />
            </nav>
            <div className={"header-container fixed"}>
                <div className={"title-bar"} ref={refTitleBar}>
                    <Link to={"/"}>
                        <StaticImage className="logo" width={400} src={"../../../../images/logo.png"} alt={"niebinarnosc.pl"}/>
                    </Link>
                    <button className={"nav-expand-button"} onClick={() => setExpanded(!expanded)}>
                        <IconMenu/>
                    </button>
                </div>
            </div>
        </section>
    )
}