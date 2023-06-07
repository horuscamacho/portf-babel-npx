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
import {HeroTitle} from "./components/HeroTitle";
import {TypeWriter} from "./components/TypeWriter";
import {CVLink} from "./components/TextUrl/CVLink";
import {HeroImage} from "./components/HeroImage";
import { useWindowSize } from "@uidotdev/usehooks";
import {NavBar} from "./components/NavBar";

function App() {
    const { open, closing, menu, toggleMenu } = useNavBar();

    const size = useWindowSize();


  return (
          <main  className="flex flex-col  items-center ">

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
              <HeroTitle width={size.width} />

                  <TypeWriter width={size.width} color={"white"} height={"100"}>
                      Mi nombre es Horus Sinhue Camacho, soy desarrollador web Full Stack, me especializo en el desarrollo
                      de aplicaciones web con ReactJS y NodeJS, pero también tengo experiencia en el desarrollo de
                      aplicaciones con Angular. Actualmente cuento más de 3 años de experiencia en el desarrollo.
                  </TypeWriter>


                  <div className="mt-11">
                      <CVLink fontSize={size.width < 400 ? "13.5px" : size.width > 400 ? "18px" : "18px" } iconSize={size.width < 400 ? "16" : size.width > 400 ? "24" : "24"} >
                          Descargar CV
                      </CVLink>
                  </div>
                  <div className="mt-10 flex justify-center">
                      {size.width < 400 && <HeroImage width={"200"} size={"240px"} bottom={"-10px"}/>}
                      {size.width > 400 && <HeroImage width={"350"} size={"370px"} bottom={"-10px"}/>}
                  </div>





          </main>


  );
}

export default App;
