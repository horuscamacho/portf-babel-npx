import {useEffect, useState} from 'react';
export const useHeroTitle = (paddingX, paddingY, marginX, marginY, width, fontSize, marginTop, marginBottom) => {
    const [styles, setStyles] = useState({});

    useEffect(() => {
        const updateStyles = () => {
            let divPaddingInline = paddingX ? paddingX :'0px';
            let divPaddingBlock = paddingY ? paddingY : '0px';
            let divMarginBlock = marginY ? marginY : '0px';
            let divMarginInline = marginX ? marginX : '0px';
            let divFontSize = fontSize ? fontSize : '64px';
            let divMarginTop = marginTop ? marginTop : '0px';
            let divMarginBottom = marginBottom ? marginBottom : '0px';

            if (width && width < 450) {
                divPaddingInline = paddingX ? `${paddingX}px` : '18px';
                divPaddingBlock = paddingY ? `${paddingY}px` : '24px';
                divMarginBlock = marginY ? `${marginY}px` : '24px';
                divMarginInline = marginX ? `${marginX}px` : '16px';
                divFontSize = fontSize ? `${fontSize}px` : '36px';
                divMarginTop = marginTop ? `${marginTop}px` : '80px';
                divMarginBottom = marginBottom ? `${marginBottom}px` : '24px';
            } else if (width && width < 800) {
                divPaddingInline = paddingX ? `${paddingX}px` : '46px';
                divPaddingBlock = paddingY ? `${paddingY}px` : '36px';
                divMarginBlock = marginY ? `${marginY}px` : '36px';
                divMarginInline = marginX ? `${marginX}px` : '46px';
                divFontSize = fontSize ? `${fontSize}px` : '64px';
                divMarginTop = marginTop ? `${marginTop}px` : '106px';
                divMarginBottom = marginBottom ? `${marginBottom}px` : '24px';
            }

            setStyles({
                div: {
                    paddingInline: divPaddingInline,
                    paddingBlock: divPaddingBlock,
                    marginBlock: divMarginBlock,
                    marginInline: divMarginInline,
                    fontSize: divFontSize,
                    marginTop: divMarginTop,
                    marginBottom: divMarginBottom,
                },
            });
        };

        updateStyles();
    },[ paddingX, paddingY, marginX, marginY, width, fontSize, marginBottom, marginTop]);

    return {
        styles
    }
}