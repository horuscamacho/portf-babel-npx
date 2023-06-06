import {useTypeWriter} from "./useTypeWriter.js";
import {useEffect} from "react";

export function TypeWriter({children}) {
    const {text, typeWriter } = useTypeWriter(children);

    useEffect(() => {
        typeWriter(children)
    }, [])

    return(
        <>
            <p className="text-lg text-blue-700">{text}<span className="animate-fade animate-infinite animate-duration-[800ms] animate-ease-linear">_</span></p>
        </>
    )
}