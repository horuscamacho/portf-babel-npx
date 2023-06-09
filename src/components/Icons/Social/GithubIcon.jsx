import React from "react";
import {Icon} from "../index";

export function GithubIcon({width, color, onClick, xl}){
    const styles ={height: '50px', width: '50px', borderRadius: '50%'}
    return (
        <div style={ xl && styles} className="rounded-full w-10 h-10 flex justify-center bg-blacckk items-center mx-2">
            <Icon type="github" width={width} color={color} onClick={onClick} />
        </div>

    )
}