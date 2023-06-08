import {useTypeWriter} from "./useTypeWriter.js";
import {useEffect} from "react";
import {useWindowSize} from "@uidotdev/usehooks";

export function TypeWriter({ paddingX, paddingY, marginX, marginY, fontSize, lineHeight, height, color, children, widthSize, marginTop, marginBottom }) {
    const {width} = useWindowSize();

    const {text, typeWriter,  styles } = useTypeWriter( paddingX, paddingY, marginX, marginY, fontSize, lineHeight, height, color, width, widthSize, marginTop, marginBottom );

    useEffect(() => {
        typeWriter(children)
        // eslint-disable-next-line
    }, [children])
    return(
        <div style={styles.div}>
            <p style={styles.p}>
                {text}
                <span className="animate-fade animate-infinite animate-duration-[800ms] animate-ease-linear">
                    _
                </span>
            </p>
        </div>
    )
}