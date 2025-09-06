import {useEffect, useState} from "react";

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState("up")
    useEffect(() => {
      let prevScrollpos = window.pageYOffset;
      const handleScroll = (event) => {
        const maxScroll = document.body.clientHeight - window.innerHeight;
        let currentScrollPos = window.pageYOffset;
        if (
            (maxScroll > 0 && prevScrollpos > currentScrollPos && prevScrollpos <= maxScroll) 
        || (maxScroll <= 0 && prevScrollpos > currentScrollPos)
        || (prevScrollpos <= 0 && currentScrollPos <= 0)
        ) {
          setScrollDirection("up")
        } else {
          setScrollDirection("down")
        }
        prevScrollpos = currentScrollPos;
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    return {isScrollDown: scrollDirection === "down", isScrollUp: scrollDirection === "up"}
}

export default useScrollDirection;