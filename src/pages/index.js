import React from "react";
import "./styles.scss"
import Seo from "../components/Seo";

export default function Home() {
    return (
        <section className={"home"}>
        </section>
    )
}

export const Head = ({location}) => <Seo title={"niebinarnosc.pl"} location={location}/>
