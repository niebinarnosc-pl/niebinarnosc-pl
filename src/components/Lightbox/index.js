import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useEffect, useRef } from "react";
import "./styles.scss"

export default function Lightbox({image, alt="", deactivate}) {
    const ref = useRef(null)
    useEffect(() => {
        ref.current.focus()
    }, [])
    return <div className={`lightbox`} ref={ref} role="button" onClick={deactivate} tabIndex={0} onKeyDown={deactivate}>
        <div>
            {typeof getImage(image) !== "undefined" ? 
                <GatsbyImage image={getImage(image)} alt={alt}/> :
                <img src={image.publicURL} alt={alt}/>
            }
        </div>
    </div>
}