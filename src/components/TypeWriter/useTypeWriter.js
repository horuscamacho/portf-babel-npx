import { useEffect, useState } from 'react';

const useTypeWriter = ( paddingX, paddingY, marginX, marginY, fontSize, lineHeight, height, color, width, widthSize, marginTop, marginBottom ) => {
    const [text, setText] = useState('');
    const [styles, setStyles] = useState({});

    useEffect(() => {
        const updateStyles = () => {
            let divPaddingInline = paddingX ? `${paddingX}px` :'0';
            let divPaddingBlock = paddingY ? `${paddingY}px` : '0';
            let divMarginBlock = marginY ? `${paddingY}px` : '0';
            let divMarginInline = marginX ? `${marginX}px` : '0';
            let divFontSize = fontSize ? `${fontSize}px` : '16px';
            let divLineHeight = lineHeight ? `${lineHeight}px` : '';
            let divWidth = widthSize ? `${widthSize}px` : '355px';
            let divTop = marginTop ? `${marginY}px` : '0';
            let divBottom = marginBottom ? `${marginY}px` : '0';
            let divHeight = height ? `${height}px` : 'auto';

            if (width && width < 450) {
                divPaddingInline = paddingX ? `${paddingX}px` : '18px';
                divPaddingBlock = paddingY ? `${paddingY}px` : '24px';
                divMarginBlock = paddingY ? `${paddingY}px` : '24px';
                divMarginInline = marginY ? `${marginX}px` : '16px';
                divFontSize = fontSize ? `${fontSize}px` : '12px';
                divLineHeight = lineHeight ? `${lineHeight}px` : '20px';
                divWidth = widthSize ? `${widthSize}px` : 'auto';
                divTop = marginTop ? `${marginY}px` : '0';
                divBottom = marginBottom ? `${marginY}px` : '0';
                divHeight = height ? `${height}px` : '140px';

            } else if (width && width < 800) {
                divPaddingInline = paddingX ? `${paddingX}px` : '46px';
                divPaddingBlock = paddingY ? `${paddingY}px` : '36px';
                divMarginBlock = marginY ? `${marginY}px` : '36px';
                divMarginInline = marginX ? `${marginX}px` : '46px';
                divFontSize = fontSize ? `${fontSize}px` : '20px';
                divLineHeight = lineHeight ? `${lineHeight}px` : '30px';
                divWidth = widthSize ? `${widthSize}px` : 'auto';
                divTop = marginTop ? `${marginY}px` : '0';
                divBottom = marginBottom ? `${marginY}px` : '0';
                divHeight = height ? `${height}px` : '170px';
            }

            setStyles({
                div: {
                    paddingInline: divPaddingInline,
                    paddingBlock: divPaddingBlock,
                    marginBlock: divMarginBlock,
                    marginInline: divMarginInline,
                    fontSize: divFontSize,
                    color: color,
                    width: divWidth,
                    marginTop: divTop,
                    marginBottom: divBottom,
                    height: divHeight,
                },
                p: {
                    lineHeight: divLineHeight,
                },
            });

        };

        updateStyles();
        // eslint-disable-next-line
    }, [width, paddingX, paddingY, marginX, marginY, fontSize, lineHeight, height, color, widthSize, marginTop, marginBottom, height ]);

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