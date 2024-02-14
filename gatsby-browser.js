import PageElement from "./wrapPageElement"
import ReactDOM from "react-dom/client";

export const wrapPageElement = PageElement

export const onInitialClientRender = () => {
    if (window.location.hash) {
        setTimeout(() => {
            const targetId = window.location.hash.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }, 0);
    }
};

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
    if (location.hash) {
        setTimeout(() => {
            const targetId = location.hash.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }, 0);
        return false;
    }
    return true;
};

export const replaceHydrateFunction = () => {
    return (element, container) => {
        const root = ReactDOM.createRoot(container)
        root.render(element)
    }
}