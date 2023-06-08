import React from "react";
import ReactDOM from "react-dom";

export function MenuMobile({ children, closing, opening }) {
    return ReactDOM.createPortal(
        <div style={{zIndex: 2}} className={opening ? 'flex flex-col text-white fixed top-0 left-0 right-0 bottom-0 bg-black animate-fade-left animate-duration-300 animate-normal' : closing ? "flex flex-col text-white fixed top-0 left-0 right-0 bottom-0 bg-black animate-fade-left animate-normal animate-fade-left animate-duration-300 animate-reverse " : 'flex flex-col text-white fixed top-0 left-0 right-0 bottom-0 bg-black' }>
            {children}
        </div>,
        document.getElementById("menu-mobile")
    );
}