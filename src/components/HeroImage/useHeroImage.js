import {useEffect, useState} from "react";

export const useHeroImage = (size, width, circleSize, bottom, avatarSize) => {
    const [styles, setStyles] = useState({});

    useEffect(() => {
        const updateStyles = () => {
            let divCircle = circleSize ? `${circleSize}px` : '500px';
            let avatarWidth = avatarSize ? avatarSize : 420;

            if (width && width < 450) {
                divCircle = circleSize ? `${circleSize}px` : '240px';
                avatarWidth = avatarSize ? avatarSize : 200;

            } else if (width && width < 800) {
                divCircle = circleSize ? `${circleSize}px` : '350px';
                avatarWidth = avatarSize ? avatarSize : 310;
            }


            setStyles({
                div: {
                    width: divCircle,
                    height: divCircle,
                    border: "0 solid black",
                    borderRadius: '50%',
                    position: 'relative',

                },
                avatar: {
                    width: avatarWidth,
                },
                span: {
                    bottom: bottom,
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }
            })
        }
        updateStyles();
    }, [width, size, circleSize, bottom, avatarSize])



    return {
        styles
    }
};