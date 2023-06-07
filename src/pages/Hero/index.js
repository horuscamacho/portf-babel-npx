import {useWindowSize} from "@uidotdev/usehooks";
import {HeroTitle} from "../../components/HeroTitle";
import {TypeWriter} from "../../components/TypeWriter";
import {CVLink} from "../../components/TextUrl/CVLink";
import {HeroImage} from "../../components/HeroImage";



export function Hero({}){
    const {width} = useWindowSize();


    return (
        <section style={{width: '100%', maxWidth: '1200px', height: '100vh', maxHeight: `calc(100vh - ${width < 800 ? 64 : 116}px)`, position: 'relative', display: 'flex', flexDirection: "column"}} >
            <>
                <HeroTitle  />
                <TypeWriter color={"white"} paddingY={'0'} height={'140'}>
                    Mi nombre es Horus Sinhue Camacho, soy desarrollador web Full Stack, me especializo en el desarrollo de aplicaciones web con ReactJS y NodeJS, pero también tengo experiencia en el desarrollo de aplicaciones con Angular. Actualmente cuento más de 3 años de experiencia en el desarrollo.
                </TypeWriter>
                <CVLink paddingY={"0"} marginY={'24px'} iconSize={13.5} >
                    Descargar CV
                </CVLink>

                <div style={{position: 'fixed', bottom: '-50px', left: '50%', transform: 'translateX(-50%)'}}>
                    <HeroImage bottom={50} type={'normal'} />
                </div>

            </>



        </section>
    )
};