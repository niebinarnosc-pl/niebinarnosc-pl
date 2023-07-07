import React from "react"
import "./styles.scss"
import Link from "../../../Link"
import { StaticImage } from "gatsby-plugin-image"

export default function StandardHeader({navLinks}) {
    return (
        <section className={"standard-site-header"}>
            <div className={"header-body"}>
                <Link to={"/"}>
                    <StaticImage className="logo" width={400} src={"../../../../images/logo.png"} alt={"niebinarnosc.pl"}/>
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