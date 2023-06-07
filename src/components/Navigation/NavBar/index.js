import {WhiteLogo} from "../../Logo/WhiteLogo";

export function NavBar({menu}){
    return(
        <header style={{height: '116px'}} className="hidden  w-full lg:flex justify-center items-center">
            <div style={{maxWidth: '1200px', borderBottom: '1px solid var(--yellow)', paddingTop: '42px'}} className="w-full h-full flex justify-between items-start">
                <WhiteLogo width={150} />
                <nav>
                    <ul className="flex">
                        {menu.map((item, index) => <li className="text-nav text-white mx-5 hover:animate-wiggle hover:animate-duration-300 hover:animate-normal hover:text-yellow hover:underline hover:cursor-pointer" key={index}>{item.name}</li>)}
                    </ul>
                </nav>
            </div>
        </header>
    )
}