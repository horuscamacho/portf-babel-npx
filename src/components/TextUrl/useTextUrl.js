import {useEffect, useState} from "react";

export const useTextUrl = (paddingX, paddingY, marginX, marginY, fontSize,   width) => {
    const [styles, setStyles] = useState({});

    useEffect(() => {
        const updateStyles = () => {
            let divPaddingInline = paddingX ? `${paddingX}px` :'46px';
            let divPaddingBlock = paddingY ? `${paddingY}px` : '36px';
            let divMarginBlock = marginY ? `${marginY}px` : '36px';
            let divMarginInline = marginX ? `${marginX}px` : '46px';
            let divFontSize = fontSize ? fontSize : '16px';

            if (width && width < 450) {
                divPaddingInline = paddingX ? `${paddingX}px` : '18px';
                divPaddingBlock = paddingY ? `${paddingY}px` : '6px';
                divMarginBlock = paddingY ? `${marginY}px` : '6px';
                divMarginInline = marginY ? `${marginX}px` : '16px';
                divFontSize = fontSize ? `${fontSize}px` : '12px';
              } else if (width && width < 800) {
                divPaddingInline = paddingX ? `${paddingX}px` : '46px';
                divPaddingBlock = paddingY ? `${paddingY}px` : '36px';
                divMarginBlock = marginY ? `${marginY}px` : '36px';
                divMarginInline = marginX ? `${marginX}px` : '46px';
                divFontSize = fontSize ? `${fontSize}px` : '24px';
            }

            setStyles({
                div: {
                    paddingInline: divPaddingInline,
                    paddingBlock: divPaddingBlock,
                    marginBlock: divMarginBlock,
                    marginInline: divMarginInline,
                    fontSize: divFontSize,
                    display: 'flex',
                    color: '#fff',
                }
            })
        };
        updateStyles()
    }, [width, paddingY, marginX, marginY, fontSize, paddingX]);

    return {
        styles
    }

}