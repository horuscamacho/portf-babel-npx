import {CloseIcon} from "../../Icons/CloseIcon";

export function Header({onClick}) {
    return (
        <header className="h-16 w-full flex justify-end px-4">
            <CloseIcon onClick={onClick} width={32} color="white" />
        </header>
    )
}