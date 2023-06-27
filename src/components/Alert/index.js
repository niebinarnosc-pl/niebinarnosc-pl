import React from "react";
import "./styles.scss";

export default function Alert({message, type = "success", isOpen, setIsOpen}) {
    return <div className={`alert ${type} ${isOpen || "closed"}`}>
        <span>{message}</span>
        <button type="button" onClick={() => setIsOpen(false)}>
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
}