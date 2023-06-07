import { useEffect, useState } from 'react';

const useTypeWriter = ( paddingX, paddingY, marginX, marginY, fontSize, lineHeight, height, color, width) => {
    const [text, setText] = useState('');
    const [styles, setStyles] = useState({});

    useEffect(() => {
        const updateStyles = () => {
            let divPaddingInline = paddingX ? `${paddingX}px` :'46px';
            let divPaddingBlock = paddingY ? `${paddingY}px` : '36px';
            let divMarginBlock = marginY ? `${paddingY}px` : '36px';
            let divMarginInline = marginX ? `${marginX}px` : '46px';
            let divFontSize = fontSize ? `${fontSize}px` : '16px';
            let divLineHeight = lineHeight ? `${lineHeight}px` : '24px';

            if (width && width < 450) {
                divPaddingInline = paddingX ? `${paddingX}px` : '18px';
                divPaddingBlock = paddingY ? `${paddingY}px` : '24px';
                divMarginBlock = paddingY ? `${paddingY}px` : '24px';
                divMarginInline = marginY ? `${marginX}px` : '16px';
                divFontSize = fontSize ? `${fontSize}px` : '12px';
                divLineHeight = lineHeight ? `${lineHeight}px` : '20px';
            } else if (width && width < 800) {
                divPaddingInline = paddingX ? `${paddingX}px` : '46px';
                divPaddingBlock = paddingY ? `${paddingY}px` : '36px';
                divMarginBlock = marginY ? `${marginY}px` : '36px';
                divMarginInline = marginX ? `${marginX}px` : '46px';
                divFontSize = fontSize ? `${fontSize}px` : '20px';
                divLineHeight = lineHeight ? `${lineHeight}px` : '30px';
            }

            setStyles({
                div: {
                    paddingInline: divPaddingInline,
                    paddingBlock: divPaddingBlock,
                    marginBlock: divMarginBlock,
                    marginInline: divMarginInline,
                    fontSize: divFontSize,
                    height: height ? `${height}px` : 'auto',
                    color: color,
                },
                p: {
                    lineHeight: divLineHeight,
                },
            });
        };

        updateStyles();
    }, [width, paddingX, paddingY, marginX, marginY, fontSize, lineHeight, height, color]);

    const typeWriter = (textArray) => {
        const newTextArray = [];
        const text = textArray.split('');
        const length = text.length;

        for (let i = 0; i < length; i++) {
            setTimeout(() => {
                newTextArray.push(text[i]);
                setText(newTextArray.join(''));
            }, i * 30);
        }
    };

    return {
        text,
        typeWriter,
        styles,
    };
};

export { useTypeWriter };