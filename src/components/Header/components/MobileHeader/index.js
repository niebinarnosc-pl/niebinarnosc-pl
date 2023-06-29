import React, {useRef} from "react"
import "./styles.scss"
import useClickOutside from "../../../../hooks/useClickOutside";
import logo from "../../../../images/logo.svg"
import Link from "../../../Link"

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
                        {/* <img className="logo" src={logo} alt={"nowatecza.pl"}/> */}
                        niebinarnosc.pl
                    </Link>
                    <div>
                        {/* <a href={"https://www.facebook.com/nowatecza"}>
                            <FontAwesomeIcon icon={faFacebookF} className="fb-icon"/>
                        </a>
                        <a href={"https://www.instagram.com/nowatecza"}>
                            <FontAwesomeIcon icon={faInstagram} className="instg-icon"/>
                        </a> */}
                        <button className={"nav-expand-button"} onClick={() => setExpanded(!expanded)}>
                            {/* <FontAwesomeIcon icon={faBars}/> */}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}