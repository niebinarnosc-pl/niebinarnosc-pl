import React from "react";
import "./styles.scss"
import { graphql, useStaticQuery } from "gatsby";
import ExternalLink from "../ExternalLink";

export default function ContactCard() {
    const {site: {siteMetadata: {contactFormUrl}}} = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          contactFormUrl
        }
      }
    }
    `)
    return <section className="contact-card">
        <h4>Opowiedz nam swoją historię</h4>
        <div>
            <p><span>Jesteś osobą niebinarną? Chcesz, aby Twoja opowieść pojawiła się na stronie? <br/>Podziel się nią i </span>
                <span>napisz nam o sobie</span>
                <ExternalLink to={contactFormUrl}>napisz nam o sobie</ExternalLink>.</p>
            <ExternalLink to={contactFormUrl} className="button border">Napisz nam o sobie</ExternalLink>
        </div>
    </section>
}