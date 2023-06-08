import {useEffect, useState} from "react";

export const useHardData = (width, paddingTop, paddingBottom, paddingLeft, paddingRight, marginTop, marginBottom, marginLeft, marginRight) => {
    const [styles, setStyles] = useState({})
    const [open, setOpen] = useState(false)


    useEffect(() => {
        const updateStyles = () => {
            let divPaddingTop = paddingTop ? `${paddingTop}px` : '0px';
            let divPaddingBottom = paddingBottom ? `${paddingBottom}px` : '0px';
            let divPaddingLeft = paddingLeft ? `${paddingLeft}px` : '0px';
            let divPaddingRight = paddingRight ? `${paddingRight}px` : '0px';
            let divMarginTop = marginTop ? `${marginTop}px` : '0px';
            let divMarginBottom = marginBottom ? `${marginBottom}px` : '0px';
            let divMarginLeft = marginLeft ? `${marginLeft}px` : '0px';
            let divMarginRight = '0px';

            setStyles({
                div: {
                    paddingTop: divPaddingTop,
                    paddingBottom: divPaddingBottom,
                    paddingLeft: divPaddingLeft,
                    paddingRight: divPaddingRight,
                    marginTop: divMarginTop,
                    marginBottom: divMarginBottom,
                    marginLeft: divMarginLeft,
                    marginRight: divMarginRight,
                }
            })

        }

        updateStyles()
    }, [width, paddingTop, paddingBottom, paddingLeft, paddingRight, marginTop, marginBottom, marginLeft, marginRight])



    const data = [
        {number: 3, text: 'Años de experiencia'},
        {number: 1.5, text: 'Tazas de Café'},
        {number: 30, text: 'Cursos y certificados'}
    ]





    return {
        styles,
        data,
        open,
        setOpen
    }
}