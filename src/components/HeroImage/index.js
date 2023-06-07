import {NormalAvatar} from "../Avatar/NormalAvatar";

export function HeroImage({size, width, bottom}){
    return(
        <div style={{border: "0 solid black", borderRadius: '50%', width: size, height: size}} className=" bg-yellow relative">
            <span style={{bottom: bottom}} className="absolute animate-fade-up animate-once animate-duration-1000 animate-delay-1000 left-6">
                <NormalAvatar width={width} />
            </span>
        </div>
    )
}