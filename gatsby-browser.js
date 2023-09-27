import PageElement from "./wrapPageElement"

export const wrapPageElement = PageElement

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
    if (location.hash) {
        setTimeout(() => {
            const targetId = location.hash.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }, 0);
    }
    return false;
};