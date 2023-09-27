import React from "react";
import "./styles.scss"
import quote from "../../images/quote.svg"

export default function HomeHeader() {
  return <header className="home-header">
    <img src={quote} alt="Cudzysłów"/>
    <h1><strong>Niebinarność</strong> jest dziobakiem wśród płci.<br/>Ni to wydra, ni to kaczka, still cute.</h1>
    <button className="button">Zaproponuj motto</button>
  </header>
}