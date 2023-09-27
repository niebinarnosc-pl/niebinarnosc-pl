import React, {useRef} from "react"
import "./styles.scss"
import useClickOutside from "../../../../hooks/useClickOutside";
import Link from "../../../Link"
import logo from "../../../../images/logo.svg"
import { IconMenu } from "../../../Icons";

export default function MobileHeader({navLinks, expanded, setExpanded}) {
    const refNav = useRef(null)
    useClickOutside([refNav], () => setExpanded(false))
    return (
        <section className={"mobile-site-header"} ref={refNav}>
            <div className={"title-bar"}>
                <Link to={"/"}>
                    <img className="logo" src={logo} alt={"niebinarnosc.pl"}/>
                </Link>
                <button className={"nav-expand-button"} onClick={() => setExpanded(!expanded)}>
                    <IconMenu/>
                </button>
            </div>
            <div className={`nav-wrapper ${expanded ? "expanded" : ""}`}>
                <nav>
                    <div/>
                    {navLinks}
                </nav>
            </div>
        </section>
    )
}