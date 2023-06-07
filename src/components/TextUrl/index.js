import {ReactComponent as CVSVG} from "./svg/cv.svg";
import {ReactComponent as ArrowRightSVG} from "./svg/arrowright.svg";

const linkType= {
    cv: (width) => <CVSVG width={width} />,
    arrow: (width) => <ArrowRightSVG width={width} />,
}

export function TextUrl({type, width}){
    return(
        <span>
            {linkType[type](width)}
        </span>
    )
}