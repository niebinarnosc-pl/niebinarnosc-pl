import React from "react"
import "./styles.scss"
import logo from "../../../../images/logo.svg"
import Link from "../../../Link"

export default function StandardHeader({navLinks}) {
    return (
        <section className={"standard-site-header"}>
            <div className={"header-body"}>
                <Link to={"/"}>
                    {/* <img className="logo" src={logo} alt={"nowatecza.pl"}/> */}
                    niebinarnosc.pl
                </Link>
                <nav>
                    {navLinks}
                    {/* <a href={"https://www.facebook.com/nowatecza"}>
                        <FontAwesomeIcon icon={faFacebookF} className="fb-icon"/>
                    </a>
                    <a href={"https://www.instagram.com/nowatecza"}>
                        <FontAwesomeIcon icon={faInstagram} className="instg-icon"/>
                    </a> */}
                </nav>
            </div>
        </section>
    )
}