import React from "react"
import "./styles.scss"

export default function MobileBottomButtons({navLinks}) {
    return (
        <section className="mobile-bottom-buttons">
            <nav>
                {navLinks}
            </nav>
        </section>
    )
}