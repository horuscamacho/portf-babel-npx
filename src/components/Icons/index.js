import {ReactComponent as HamburgerSVG} from "./svg/hamburger.svg";
import {ReactComponent as CloseSVG} from "./svg/close.svg";
import {ReactComponent as TwitterSVG} from "./svg/twitter.svg";
import {ReactComponent as YoutubeSVG} from "./svg/youtube.svg";
import {ReactComponent as LinkedinSVG} from "./svg/linkedin-in.svg";
import {ReactComponent as GithubSVG} from "./svg/github.svg";

const iconTypes = {
    hamburger: (width, color) => <HamburgerSVG width={width} fill={color} />,
    close: (width, color) => <CloseSVG width={width} fill={color} />,
    twitter: (width, color) => <TwitterSVG width={width} fill={color} />,
    youtube: (width, color) => <YoutubeSVG width={width} fill={color} />,
    linkedin: (width, color) => <LinkedinSVG width={width} fill={color} />,
    github: (width, color) => <GithubSVG width={width} fill={color} />,
};

export function Icon({type, width, color, onClick}) {
    return (
        <span onClick={onClick} className="cursor-pointer">
            {iconTypes[type](width, color)}
        </span>
    )
}