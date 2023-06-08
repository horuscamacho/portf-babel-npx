import {useHeroTitle} from "./useHeroTitle";
import {useWindowSize} from "@uidotdev/usehooks";
export function HeroTitle({fontSize, paddingX, paddingY, marginX, marginY, marginTop, marginBottom}){
    const {width} = useWindowSize();
    const {styles} = useHeroTitle(paddingX, paddingY, marginX, marginY, width, fontSize, marginTop, marginBottom);

    return (
        <>
            <div style={styles.div}  className="leading-none font-bold">
                <p className="text-white">¡Hola y bienvenido </p>
                <p className="text-yellow underline">  a este espacio! </p>
            </div>
        </>
    )
}