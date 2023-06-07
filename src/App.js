import './index.css';
import {useNavBar} from "./components/Navigation/MobileNav/useNavBar";
/*import {HeroTitle} from "./components/HeroTitle";
import {TypeWriter} from "./components/TypeWriter";
import {CVLink} from "./components/TextUrl/CVLink";
import {HeroImage} from "./components/HeroImage";
import { useWindowSize } from "@uidotdev/usehooks";*/
import {Navigation} from "./components/Navigation";
import {Hero} from "./pages/Hero";

function App() {
    const { open, closing, menu, toggleMenu } = useNavBar();

    //const size = useWindowSize();


  return (
          <main  className="flex flex-col  items-center ">


              <Navigation open={open} closing={closing} menu={menu} toggleMenu={toggleMenu} />
            {/*  <HeroTitle />

                  <TypeWriter width={size.width} color={"white"} height={"100"}>
                      Mi nombre es Horus Sinhue Camacho, soy desarrollador web Full Stack, me especializo en el desarrollo
                      de aplicaciones web con ReactJS y NodeJS, pero también tengo experiencia en el desarrollo de
                      aplicaciones con Angular. Actualmente cuento más de 3 años de experiencia en el desarrollo.
                  </TypeWriter>



                      <CVLink iconSize={13.5}>
                          Descargar CV
                      </CVLink>

                  <div className="mt-10 flex justify-center">
                     <HeroImage bottom={-10} />
                  </div>
*/}

              <Hero />




          </main>


  );
}

export default App;
