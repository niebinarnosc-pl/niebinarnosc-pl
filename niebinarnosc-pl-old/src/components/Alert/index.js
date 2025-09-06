import React from "react";
import "./styles.scss";
import { IconClose } from "../Icons";

export default function Alert({message, type = "success", close}) {
    return <div className={`alert ${type}`}>
        <span>{message}</span>
        <button type="button" onClick={close} aria-label="Zamknij">
            <IconClose/>
        </button>
    </div>
}