import { ReactComponent as LogoWhiteSVG } from "./svg/logo.svg";
import { ReactComponent as LogoBlueSVG} from "./svg/logo_color.svg";
import { ReactComponent as LogoBlackSVG} from "./svg/logo_black.svg";

const logoTypes = {
    white: (width) => <LogoWhiteSVG width={width}/>,
    blue: (width) => <LogoBlueSVG width={width}/>,
    black: (width) => <LogoBlackSVG width={width} />
}
export function Logo({type, width}){
    return (
        <>
            {logoTypes[type](width)}
        </>
    )
}