import React from "react"
import "./styles.scss"
import logo from "../../../../images/logo.svg"

export default function MobileBottomButtons({navLinks}) {
    return (
        <section className="mobile-bottom-buttons">
            <nav>
                {navLinks}
            </nav>
        </section>
    )
}