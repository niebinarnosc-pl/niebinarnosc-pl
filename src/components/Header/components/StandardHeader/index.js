import React from "react"
import "./styles.scss"
import { Link } from "gatsby"
import logo from "../../../../images/logo-full.svg"

export default function StandardHeader({navLinks}) {
    return (
        <section className={"standard-site-header"}>
            <div className={"header-body"}>
                <Link to={"/"}>
                    <img className="logo" src={logo} alt={"niebinarnosc.pl"}/>
                </Link>
                <nav>
                    {navLinks}
                </nav>
            </div>
        </section>
    )
}