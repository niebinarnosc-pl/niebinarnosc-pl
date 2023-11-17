import React, {useEffect, useState} from "react";
import "./styles.scss";
import Footer from "../Footer";
import CookieBanner from "../CookieBanner";
import Header from "../Header";

export default function Layout({location, children}) {
    const [areCookiesAllowed, setAreCookiesAllowed] = useState(true)
    useEffect(() => {
        const cookie = ('; ' + document.cookie).split('; allow_cookies=').pop().split(';').shift()
        if (cookie === "1")
            setAreCookiesAllowed(true)
        else if (cookie === "0") {
            setAreCookiesAllowed(false)
            if (process.env.NODE_ENV === "production")
                window.gtag("consent", "update", {
                    "ad_storage": "denied",
                    "analytics_storage": "denied",
                })
        } else
            setAreCookiesAllowed(undefined)
    }, [areCookiesAllowed])
    return (
        <div className={"site-root"}>
            <Header location={location}/>
            <main className={"site-main"}>
                {children}
            </main>
            <>
                {typeof areCookiesAllowed === "undefined" && <CookieBanner setAreCookiesAllowed={setAreCookiesAllowed}/>}
                <Footer/>
                {/* <Header bottom location={location}/> */}
            </>
        </div>
    )
}