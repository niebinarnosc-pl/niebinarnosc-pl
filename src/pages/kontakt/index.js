import React from "react";
import Page from "../../components/Page";
import { IconEmail } from "../../components/Icons";
import Seo from "../../components/Seo";

export default function Kontakt() {
    return <Page className={"kontakt"} heading={"Kontakt"}>
        <p className="font-weight-500">Masz do nas pytania? Szukasz pomocy? Napisz do nas na maila lub wypełnij formularz.</p>
        <p><a href="mailto:kontakt@niebinarnosc.pl" className="contact-mail"><IconEmail/>kontakt@niebinarnosc.pl</a></p>
        <form>
            <label><IconEmail/><input type="email" placeholder="E-mail, np. nazwa@gmail.com"/></label>
            <textarea placeholder="Tutaj wpisz swoją wiadomość"/>
            <button type="submit" className="button">Wyślij wiadomość</button>
        </form>
    </Page>
}

export const Head = ({location}) => <Seo title={"Kontakt"} addTitleTemplate location={location}/>