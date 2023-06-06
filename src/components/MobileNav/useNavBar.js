import {useState} from "react";

export function useNavBar(){
    const [open, setOpen] = useState(false);
    const [closing, setClosing] = useState(false);
    const [opening, setOpening] = useState(false);

    const menu = [
        {name: "Home", nombre: "Inicio", url: "/"},
        {name: "Certifications", nombre: "Certificaciones", url: "/certifications"},
        {name: "Portfolio", nombre: "Portafolio", url: "/portfolio"},
        {name: "Blog", nombre: "Blog", url: "/blog"},
        {name: "Contact", nombre: "Contacto", url: "/contact"},
    ]
    function toggleMenu(){
      if(!open){
            setOpen(true)
            setOpening(true)
      } else {
            setOpening(false)
            setClosing(true)
            setTimeout(() => {
                setOpen(false)
                setClosing(false)
            }, 500)
      }
    }

    return {
        open,
        closing,
        opening,
        menu,
        toggleMenu
    }
}