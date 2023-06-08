import {useWindowSize} from "@uidotdev/usehooks";
import {HeroTitle} from "../../components/HeroTitle";
import {TypeWriter} from "../../components/TypeWriter";
import {CVLink} from "../../components/TextUrl/CVLink";
import {HeroImage} from "../../components/HeroImage";
import {TwitterIcon} from "../../components/Icons/Social/TwitterIcon";
import {YoutubeIcon} from "../../components/Icons/Social/YoutubeIcon";
import {LinkedInIcon} from "../../components/Icons/Social/LinkedInIcon";
import {GithubIcon} from "../../components/Icons/Social/GithubIcon";



export function Hero(){
    const {width} = useWindowSize();



    return (
        <section style={{width: '100%', maxWidth: '1200px', height: '100vh', maxHeight: `calc(100vh - ${width < 800 ? 64 : 116}px)`, position: 'relative', display: 'flex', flexDirection: "column"}} >
            { width < 800 ? <>
                <HeroTitle  />
                <TypeWriter color={"white"} paddingY={'0'} height={width > 450 ? '170' : '140' }>
                    Mi nombre es Horus Sinhue Camacho, soy desarrollador web Full Stack, me especializo en el desarrollo de aplicaciones web con ReactJS y NodeJS, pero también tengo experiencia en el desarrollo de aplicaciones con Angular. Actualmente cuento más de 3 años de experiencia en el desarrollo.
                </TypeWriter>
                <CVLink paddingY={"0"} marginY={'24px'} iconSize={width > 450 ? 25 : 13.5} >
                    Descargar CV
                </CVLink>

                <div style={{position: 'fixed', bottom: '-50px', left: '50%', transform: 'translateX(-50%)'}}>
                    <HeroImage bottom={50} type={'normal'} />
                </div>

            </> :
            <>
                <div className="flex justify-between w-full relative">
                    <div className="w-1/2">
                        <HeroTitle marginTop={215} marginX={0} />
                        <div className="flex mt-16">
                            <TwitterIcon width={35} height={35} color={'white'} xl={true} />
                            <YoutubeIcon width={35} height={35} color={'white'} xl={true} />
                            <LinkedInIcon width={35} height={35} color={'white'} xl={true} />
                            <GithubIcon width={35} height={35} color={'white'} xl={true} />
                        </div>
                    </div>
                    <div style={{paddingTop: '214px'}} className="w-1/2 flex flex-col items-end">
                        <TypeWriter color={"white"}>
                            Mi nombre es Horus Sinhue Camacho, soy desarrollador web Full Stack, me especializo en el desarrollo de aplicaciones web con ReactJS y NodeJS, pero también tengo experiencia en el desarrollo de aplicaciones con Angular. Actualmente cuento con más de 3 años en el mundo del desarrollo.
                        </TypeWriter>
                    </div>
                    <div style={{position: 'fixed', bottom: '-50px', left: '50%', transform: 'translateX(-50%)'}}>
                        <HeroImage bottom={50} type={'normal'} />
                    </div>

                </div>

            </>
            }
        </section>
    )
};