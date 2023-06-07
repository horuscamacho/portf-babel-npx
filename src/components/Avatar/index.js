import { ReactComponent as AvatarSVG } from './svg/avatar.svg';

const avatarTypes = {
    normal: (width) => <AvatarSVG width={width} />,
}

export function Avatar({ width, type }) {
    return (
        <>
            {avatarTypes[type](width)}
        </>
    )
}