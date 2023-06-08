import React from "react";
import {Icon} from "../index";

export function TwitterIcon({width, color, onClick, xl}){
    const styles ={height: '50px', width: '50px', borderRadius: '50%'}

    return (
        <div style={xl && styles} className="rounded-full w-10 h-10 flex justify-center items-center bg-blue-400 mx-2">
            <Icon type="twitter" width={width} color={color} onClick={onClick} />
        </div>

    )
}