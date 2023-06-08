import './index.css';
import {useNavBar} from "./components/Navigation/MobileNav/useNavBar";
import {Navigation} from "./components/Navigation";
import {Hero} from "./pages/Hero";
import {Restrictions} from "./components/Restrictions";
import {useOrientation, useWindowScroll} from "@uidotdev/usehooks";
import {useEffect, useState} from "react";
import {HardData} from "./components/HardData";

function App() {

    const [{ y }] = useWindowScroll();
    const [opacity, setOpacity] = useState(1);
    const {angle} = useOrientation();
    const { open, closing, menu, toggleMenu } = useNavBar();


    useEffect(() => {
        setOpacity(.99 - ( y / 100 ));
    }, [y]);

  return (

      <>
          <main style={{height: '1000px', position: 'relative'}} className="flex flex-col items-center ">

                      <span style={{position: 'fixed', zIndex: 1, width: '100%'}}>
                          <Navigation open={open} closing={closing} menu={menu} toggleMenu={toggleMenu} />
                      </span>

              <span style={{opacity: opacity, width: "100%"}} className="flex justify-center" >
                  <Hero />
              </span>



          </main>

          <HardData  />


          <Restrictions turned={angle > 0}>
              Para disfrutar de una mejor experiencia, por favor, gira tu dispositivo.
          </Restrictions>
      </>



  );
}

export default App;
