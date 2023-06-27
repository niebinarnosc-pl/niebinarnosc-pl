import {useEffect} from "react";

function useClickOutside(refs, callback) {
    useEffect(() => {
        const handleClickOutside = e => {
            let shouldCall = true
            refs.every(ref => {
                if (ref.current && !ref.current.contains(e.target))
                    return true
                else {
                    shouldCall = false
                    return false
                }
            })
            if (shouldCall)
                callback()
        }
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside)
    }, [refs, callback]);
}

export default useClickOutside;