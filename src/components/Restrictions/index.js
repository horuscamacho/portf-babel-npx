import React from "react";
import ReactDOM from "react-dom";
import {TypeWriter} from "../TypeWriter";


export function Restrictions({children, turned}) {

    return ReactDOM.createPortal(
        <div className={turned ? "flex justify-center items-center text-white fixed top-0 left-0 right-0 bottom-0 bg-black" : 'hidden'}>
            <TypeWriter color={'#FFD500'}>
                {children}
            </TypeWriter>
        </div>,
        document.getElementById("restrictions")
    );
}