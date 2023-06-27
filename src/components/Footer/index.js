import React from "react"
import "./styles.scss"
import love from "../../images/transheart.svg";
import {Link} from "gatsby";

export default function Footer() {
    return (
        <footer className={"site-footer"}>
            <div className="footer-contents">
                <div className={"icon-links"}>
                    {/* <a href={"https://www.facebook.com/nowatecza"}>
                        <FontAwesomeIcon icon={faFacebook} size={"2x"}/>
                    </a>
                    <a href={"https://www.instagram.com/nowatecza"}>
                        <FontAwesomeIcon icon={faInstagram} size={"2x"}/>
                    </a> */}
                </div>
                <p>© 2023 Wszelkie prawa zastrzeżone | <Link to={`/polityka-prywatnosci/`}>Polityka Prywatności</Link></p>
                <p className={"credit"}>Made with <img src={love} alt={"love"}/> by cddlee</p>
            </div>
        </footer>
    )
}