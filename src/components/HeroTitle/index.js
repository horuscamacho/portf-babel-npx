import {useHeroTitle} from "./useHeroTitle";
import {useWindowSize} from "@uidotdev/usehooks";
export function HeroTitle({fontSize, padding}){
    const {width} = useWindowSize();
    const {styles} = useHeroTitle(padding, padding, padding, padding, width, fontSize);




    return (
        <>
            <div style={styles.div}  className="leading-none mt-10 font-bold w-full">
                <p className="text-white">¡Hola y bienvenido </p>
                <p className="text-yellow underline">  a este espacio! </p>
            </div>
        </>
    )
}