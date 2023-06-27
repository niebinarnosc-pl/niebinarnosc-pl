import React from "react";
import "./404.scss"
import Seo from "../components/Seo";
import Card from "../components/Card";

export default function e404() {
    return (
        <section className={"e404"}>
            <header>
                <h1>404</h1>
                <h2>Nie znaleziono</h2>
                <Card>
                  <blockquote>"Pójdzie do pokoju numer 301, dostanie tam numerek i ustawi się w kolejce do pokoju numer 200, tak? Tam powiedzą co dalej, do widzenia.  ... DRZWI! to jest PRXYCHODNIA nie SUPERMARKET!1"</blockquote>
                  <cite>Miła pani z pokoju 404 :)</cite>
                </Card>
            </header>
        </section>
    )
}

export const Head = ({pageContext, location}) => <Seo title={"404"} pageContext={pageContext} addTitleTemplate location={location}/>