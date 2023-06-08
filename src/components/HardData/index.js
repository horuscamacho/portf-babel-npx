import {useHardData} from "./useHardData";
import {motion} from "framer-motion";

export function HardData() {
    const {styles, data, open, setOpen} = useHardData();

    return (
        <motion.div
            onClick={() => setOpen(!open)} animate={open ? {x: 184} : {x: 0}}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            style={{width: '240px',  position: "absolute", left: -194, paddingLeft: '30px', cursor: 'default'}}>
            <div className="flex text-white">
                <span style={styles} className="flex flex-col">
                {data.map((item, index) => {
                    return (
                        <span style={{display: 'flex', flexDirection: 'column'}} key={index} >
                            <span style={{fontSize: '32px', fontWeight: 'bold'}}>{item.number}+</span>
                            <span style={{fontSize: '16px', fontWeight: 'normal', marginTop: '14px'}}>{item.text}</span>
                        </span>
                    )
                })}
                </span>
                <span style={{width: "25px", background: '#FFD500', borderBottomRightRadius: '8px', borderTopRightRadius: '8px', marginLeft: "16px", display: "flex", alignItems: "center"}}>
                    <p style={{writingMode: 'vertical-rl', textOrientation: 'mixed', display: "flex", justifyContent: 'flex-end', alignItems: 'flex-end', color: 'black', fontWeight: 'bolder', fontSize: '18px'}}>Más info</p>
                </span>
            </div>
        </motion.div>
    )
}