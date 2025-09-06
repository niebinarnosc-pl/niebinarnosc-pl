import React from "react"
import "./styles.scss"
import {Link} from "gatsby";
import { IconEmail, IconLogoFacebook, IconLogoInstagram } from "../Icons";
import logo from "../../images/logo-full.svg";
import useLinks from "../../hooks/useLinks";
import ExternalLink from "../ExternalLink";

export default function Footer() {
    const links = useLinks();
    return (
        <footer className={"site-footer"}>
            <div className="footer-contents">
                <Link to={"/"}>
                    <img className="logo" src={logo} alt={"niebinarnosc.pl"}/>
                </Link>
                {/* <p><strong>niebinarnosc.pl</strong></p> */}
                <div className="contact-container">
                    <div className="sm">
                        <ExternalLink to={links.instagram}><IconLogoInstagram size={1.75}/></ExternalLink>
                        <ExternalLink to={links.facebook}><IconLogoFacebook size={1.75}/></ExternalLink>
                    </div>
                    <Link to="/#kontakt"><strong>Napisz do nas</strong></Link>
                    <ExternalLink to="mailto:kontakt@niebinarnosc.pl" className="contact-mail white"><IconEmail size={1.5}/>kontakt@niebinarnosc.pl</ExternalLink>
                </div>
                {/* <p>© 2023 Wszelkie prawa zastrzeżone | <Link to={`/polityka-prywatnosci/`}>Polityka Prywatności</Link></p> */}
            </div>
        </footer>
    )
}