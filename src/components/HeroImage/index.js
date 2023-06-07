import {NormalAvatar} from "../Avatar/NormalAvatar";
import {useHeroImage} from "./useHeroImage";
import {useWindowSize} from "@uidotdev/usehooks";

export function HeroImage({size, circleSize, avatarSize, bottom, type, }){
    const {width} = useWindowSize();

    const {styles} = useHeroImage(size, width, circleSize, bottom, avatarSize);


    const avatarType = (type, width) => {
        switch (type) {
            case "normal":
                return <NormalAvatar width={width }/>
            default:
                return <NormalAvatar width={width }/>
        }
    }

    return(
        <div style={styles.div} className=" bg-yellow animate-fade animate-once animate-duration-[2000ms]">
            <span style={styles.span} >
                {avatarType(type, styles.avatar?.width)}
            </span>
        </div>
    )
}