import CountUp from 'react-countup'
import { motion, useInView, useAnimation } from 'motion/react'
import '../pages/Skills.css'
import { useRef, useEffect } from 'react'

interface SkillProps{
    text: string,
    level: number,
}

function SkillCard({text,level} : SkillProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const mainControls = useAnimation();


    useEffect(() => {
        if(isInView){
        mainControls.start("visible");
        }
    })

    return (
        <div ref={ref}>
        <motion.div
        variants={{
            hidden: {opacity: 0, y:75},
            visible: {opacity:1, y:0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration: 0.5}}
        >
        <div className='skill-card-container'>

                <div className="skill-card-display">
                    <p style={{color:"#fff", marginLeft:"10px"}}>{text}</p>
                    <CountUp end={level} duration={1.5} style={{color: "#1ED760"}} suffix='%'/>
                </div>
                
                {/* Progress bar */}
                <div style={{ width:"100%", height:"20px", borderRadius:"10px", backgroundColor:"#e6e6e6", marginBottom:"10px" }} >
                    <motion.div
                    variants={{
                    starting: {width:0},
                    ending: {width:`${level}%`}
                    }}
                    initial="starting"
                    animate="ending"
                    transition={{duration: 1, ease:"easeIn"}}
                    style={{
                    height: "100%",
                    borderRadius: "10px",
                    backgroundColor: "#1ED760"
                    }}
                    >
                    </motion.div>
                </div>

        </div>

        </motion.div>
    </div>
    )
}

export default SkillCard