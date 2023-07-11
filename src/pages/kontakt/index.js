import React, { useState } from "react";
import Page from "../../components/Page";
import { IconEmail } from "../../components/Icons";
import Seo from "../../components/Seo";

export default function Kontakt() {
    const [userEmail, setUserEmail] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/", {
          method: "POST",
          headers: {"Content-Type": "application/x-www-form-urlencoded"},
          body: new URLSearchParams(new FormData(e.target)).toString()
        })
        .then(() => console.log("thank you"))
        .catch((error) => console.error(error));
    }
    return <Page className={"kontakt"} heading={"Kontakt"}>
        <p className="font-weight-500">Masz do nas pytania? Szukasz pomocy? Napisz do nas na maila lub wypełnij formularz.</p>
        <p><a href="mailto:kontakt@niebinarnosc.pl" className="contact-mail"><IconEmail/>kontakt@niebinarnosc.pl</a></p>
        <form name="Kontakt" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="Kontakt"/>
            <input type="hidden" name="subject" data-remove-prefix value={`Wiadomość od ${userEmail}`}/>
            <label><IconEmail/><input type="email" placeholder="E-mail, np. nazwa@gmail.com" onChange={e => setUserEmail(e.target.value)} required/></label>
            <textarea placeholder="Tutaj wpisz swoją wiadomość" required/>
            <label className="display-none">Nie wypełniaj, jeśli jesteś niebinarna_y:<input name="bot-field"/></label>
            <button type="submit" className="button">Wyślij wiadomość</button>
        </form>
    </Page>
}

export const Head = ({location}) => <Seo title={"Kontakt"} addTitleTemplate location={location}/>