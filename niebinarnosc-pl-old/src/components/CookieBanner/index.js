import React from "react";
import "./styles.scss"

export default function CookieBanner({setAreCookiesAllowed}) {
    const allowCookies = allowed => {
        const getExpires = days => new Date(Date.now() + (days*24*60*60*1000)).toUTCString()
        if (allowed) {
            document.cookie = "allow_cookies=1;expires=" + getExpires(9999) + ";path=/";
            setAreCookiesAllowed(true)
        } else {
            document.cookie = "allow_cookies=0;expires=" + getExpires(1) + ";path=/";
            setAreCookiesAllowed(false)
        }
    }
    return <section className={"cookie-banner"}>
        <p>Używamy plików cookie do personalizacji treści i analizy dostępu do naszej strony internetowej. Możesz wybrać, czy akceptujesz tylko te pliki cookie, które są niezbędne do funkcjonowania witryny, czy też chcesz zezwolić na pliki cookie do śledzenia. Aby uzyskać więcej informacji, zapoznaj się z naszą polityką prywatności.</p>
        <div>
            <button className={"button primary accept"} onClick={() => allowCookies(true)}>Zaakceptuj wszystkie</button>
            <button className={"clear-button decline"} onClick={() => allowCookies(false)}>Zaakceptuj tylko niezbędne</button>
        </div>
    </section>
}