import { useEffect,useRef, type ReactNode } from 'react'
import { motion,useInView,useAnimation } from 'motion/react'
import './HeroSection.css'

interface Props{
    children: ReactNode
}

function Reveal({children} : Props) {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    
    const mainControl = useAnimation()
    const slideControl = useAnimation()

    useEffect(() => {
        console.log(isInView)
        if(isInView){
            mainControl.start("visible")
            slideControl.start("visible")
        }
    })


    return (
        <div ref={ref} style={{position:"relative"}}>
            <motion.div
            variants={{
                hidden: {opacity:0, y:75},
                visible: {opacity:1, y:0}
            }}
            initial="hidden"
            animate={mainControl}
            transition={{duration:0.5, delay:0.25}}
            >
                {children}
            </motion.div>

            <motion.div
            variants={{
                hidden: {left: 0},
                visible: {left: "100%"}
            }}
            initial="hidden"
            animate={slideControl}
            transition={{duration: 0.5, ease:"easeIn"}}
            style={{
                position: "absolute",
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,
                backgroundColor: "#1ED760",
                zIndex: 20
            }}
            >
            </motion.div>
        </div>
        
    )
}

export default Reveal