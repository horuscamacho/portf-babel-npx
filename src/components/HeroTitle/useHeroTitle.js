import {useEffect, useState} from 'react';
export const useHeroTitle = (paddingX, paddingY, marginX, marginY, width, fontSize) => {
    const [styles, setStyles] = useState({});

    useEffect(() => {
        const updateStyles = () => {
            let divPaddingInline = '46px';
            let divPaddingBlock = '36px';
            let divMarginBlock = '36px';
            let divMarginInline = '46px';
            let divFontSize = '64px';

            if (width && width < 450) {
                divPaddingInline = paddingX ? `${paddingX}px` : '18px';
                divPaddingBlock = paddingY ? `${paddingY}px` : '24px';
                divMarginBlock = paddingY ? `${paddingY}px` : '24px';
                divMarginInline = marginY ? `${marginY}px` : '16px';
                divFontSize = fontSize ? `${fontSize}px` : '36px';
            } else if (width && width < 800) {
                divPaddingInline = paddingX ? `${paddingX}px` : '46px';
                divPaddingBlock = paddingY ? `${paddingY}px` : '36px';
                divMarginBlock = marginY ? `${marginY}px` : '36px';
                divMarginInline = marginX ? `${marginX}px` : '46px';
                divFontSize = fontSize ? `${fontSize}px` : '64px';
            }

            setStyles({
                div: {
                    paddingInline: divPaddingInline,
                    paddingBlock: divPaddingBlock,
                    marginBlock: divMarginBlock,
                    marginInline: divMarginInline,
                    fontSize: divFontSize,
                },
            });
        };

        updateStyles();
    },[])

    return {
        styles
    }
}