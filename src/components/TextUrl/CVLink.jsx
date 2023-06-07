import {TextUrl} from "./index";
import  {useTextUrl} from "./useTextUrl";
import {useWindowSize} from "@uidotdev/usehooks";

export function CVLink({children, color, iconSize, paddingX, paddingY, marginX, marginY, fontSize}){
    const {width} = useWindowSize();
    const {styles} = useTextUrl(paddingX, paddingY, marginX, marginY, fontSize,  color, width);
    return(
        <div style={styles.div} className="flex items-center justify-center">
            <TextUrl type="cv" width={iconSize} />
            <span className="ml-2 text-yellow">{children}</span>
        </div>
    )
}