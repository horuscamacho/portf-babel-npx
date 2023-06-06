import {useState} from "react";

export function MenuList({menu}){
    const [isHovered, setIsHovered] = useState()
    return (
        <ul className="w-full flex flex-col items-center text-2xl h-1/2">
            {menu.map((item, index) => <li
                className={isHovered === index ? 'cursor-pointer animate-wiggle animate-duration-300 animate-delay-0 animate-ease-linear text-yellow' :`animate-fade animate-duration-500 animate-delay-[100ms] animate-ease-linear`}
                key={index}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
            >
                {item.name}
            </li>)}
        </ul>
    )
}