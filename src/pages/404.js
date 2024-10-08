import React from "react";
import "./404.scss"
import Seo from "../components/Seo";
import Page from "../components/Page";

export default function e404() {
    return (
        <Page className={"e404"} heading={"404"} subheading={"Nie znaleziono"}>
            <div className="container">
                <blockquote>"Tu? Tu <em>nic</em> nie ma. Pójdzie do pokoju numer 301, dostanie tam numerek i ustawi się w kolejce do pokoju numer 200, tak? Tam powiedzą co dalej, do widzenia.  ... DRZWI! to jest PRXYCHODNIA nie SUPERMARKET!1"</blockquote>
                <cite>Miła pani z pokoju 404 :)</cite>
            </div>
        </Page>
    )
}

export const Head = ({pageContext, location}) => <Seo title={"404"} pageContext={pageContext} addTitleTemplate location={location}/>