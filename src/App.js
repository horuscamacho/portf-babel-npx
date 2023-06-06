import './index.css';
import {MobileNav} from "./components/MobileNav";
import {MenuMobile} from "./components/MobileNav/MenuMobile";
import {useNavBar} from "./components/MobileNav/useNavBar";
import {BlackLogo} from "./components/Logo/BlackLogo";
import {HamburgerIcon} from "./components/Icons/HamburgerIcon";
import {Header} from "./components/MobileNav/MenuMobile/Header";
import {Body} from "./components/MobileNav/MenuMobile/Body";
import {MenuList} from "./components/MobileNav/MenuMobile/MenuList";
import {Footer} from "./components/MobileNav/Footer";
import {TwitterIcon} from "./components/Icons/Social/TwitterIcon";
import {YoutubeIcon} from "./components/Icons/Social/YoutubeIcon";
import {LinkedInIcon} from "./components/Icons/Social/LinkedInIcon";
import {GithubIcon} from "./components/Icons/Social/GithubIcon";
import {WhiteLogo} from "./components/Logo/WhiteLogo";

function App() {
    const { open, closing, menu, toggleMenu } = useNavBar();



  return (
      <>
          <div className="lg:hidden">
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
          </div>
          <header style={{height: '116px'}} className="hidden  w-full lg:flex justify-center">
              <div style={{maxWidth: '1200px', borderBottom: '1px solid var(--yellow)', paddingTop: '42px'}} className="w-full h-full flex justify-between">
                  <WhiteLogo width={150} />
                  <nav>
                      <ul className="flex">
                          {menu.map((item, index) => <li className="text-nav text-white mx-5 hover:animate-wiggle hover:animate-duration-300 hover:animate-normal hover:text-yellow hover:underline hover:cursor-pointer" key={index}>{item.name}</li>)}
                      </ul>
                  </nav>
              </div>
          </header>
      </>

  );
}

export default App;
