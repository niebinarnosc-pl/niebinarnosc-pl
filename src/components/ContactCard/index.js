import React from "react";
import "./styles.scss"

export default function ContactCard() {
    return <section className="contact-card">
        <h4>Opowiedz nam swoją historię</h4>
        <div>
            <p><span>Jesteś osobą niebinarną? Chcesz, aby Twoja opowieść pojawiła się na stronie? <br/>Podziel się nią i </span>
                <span>napisz nam o sobie</span>
                <a href="">napisz nam o sobie</a>.</p>
            <button className="button border">Napisz nam o sobie</button>
        </div>
    </section>
}