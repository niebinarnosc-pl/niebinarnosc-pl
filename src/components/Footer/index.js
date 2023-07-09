import React from "react"
import "./styles.scss"
import love from "../../images/transheart.svg";
import {Link} from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { IconEmail } from "../Icons";

export default function Footer() {
    return (
        <footer className={"site-footer"}>
            <div className="footer-contents">
                <Link to={"/"}>
                    <StaticImage className="logo" width={400} src={"../../images/logo-white.png"} alt={"niebinarnosc.pl"}/>
                </Link>
                <p><strong>niebinarnosc.pl</strong></p>
                <div className="contact-container">
                    <Link to="/kontakt/"><strong>Formularz kontaktowy</strong></Link>
                    <a href="mailto:kontakt@niebinarnosc.pl" className="contact-mail white"><IconEmail/>kontakt@niebinarnosc.pl</a>
                </div>
                {/* <p>© 2023 Wszelkie prawa zastrzeżone | <Link to={`/polityka-prywatnosci/`}>Polityka Prywatności</Link></p> */}
            </div>
        </footer>
    )
}