import {TextUrl} from "./index";

export function CVLink({children, color, iconSize, paddingX, paddingY, marginX, marginY, fontSize}){
    return(
        <div style={{color: color, fontSize: fontSize}} className="flex items-center justify-center w-full">
            <TextUrl type="cv" width={iconSize} />
            <span className="ml-2 text-yellow">{children}</span>
        </div>
    )
}