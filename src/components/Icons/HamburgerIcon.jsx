import React from "react";
import { Icon } from "./index";

export function HamburgerIcon({width, color, onClick}){
    return(
        <Icon type="hamburger" width={width} color={color} onClick={onClick} />
    )
}