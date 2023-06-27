import React, {useEffect, useState} from "react";
import "./styles.scss";
import Footer from "../Footer";
import CookieBanner from "../CookieBanner";
import Header from "../Header";

export default function Layout({children}) {
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
            <Header/>
            <main className={"site-main"}>
                {children}
            </main>
            <>
                {typeof areCookiesAllowed === "undefined" && <CookieBanner setAreCookiesAllowed={setAreCookiesAllowed}/>}
                <Footer/>
            </>
        </div>
    )
}