import {MobileNav} from "./MobileNav";
import {BlackLogo} from "../Logo/BlackLogo";
import {HamburgerIcon} from "../Icons/HamburgerIcon";
import {MenuMobile} from "./MobileNav/MenuMobile";
import {Header} from "./MobileNav/MenuMobile/Header";
import {Body} from "./MobileNav/MenuMobile/Body";
import {MenuList} from "./MobileNav/MenuMobile/MenuList";
import {Footer} from "./MobileNav/Footer";
import {TwitterIcon} from "../Icons/Social/TwitterIcon";
import {YoutubeIcon} from "../Icons/Social/YoutubeIcon";
import {LinkedInIcon} from "../Icons/Social/LinkedInIcon";
import {GithubIcon} from "../Icons/Social/GithubIcon";
import {NavBar} from "./NavBar";

export function Navigation({open, closing, menu, toggleMenu}) {


    return (
        <>
            <MobileNav>
                <BlackLogo width={125} />
                <HamburgerIcon width={24} color={"#2D3539"} onClick={toggleMenu} />
            </MobileNav>
            {open &&
                <MenuMobile closing={closing}>
                    <Header onClick={toggleMenu}/>
                    <Body>
                        <MenuList menu={menu} />
                    </Body>
                    <Footer>
                        <TwitterIcon width={24} color={"#FFF"} />
                        <YoutubeIcon width={24} color={"#FFF"} />
                        <LinkedInIcon width={24} color={"#FFF"} />
                        <GithubIcon width={24} color={"#FFF"} />
                    </Footer>
                </MenuMobile>
            }
            <NavBar menu={menu} />
        </>
    )
}