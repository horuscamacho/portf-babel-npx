import React from "react";
import {Icon} from "./index";

export function CloseIcon({width, color, onClick}) {
    return (
        <Icon type="close" width={width} color={color} onClick={onClick} />
    )
}