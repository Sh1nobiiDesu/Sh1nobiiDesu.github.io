import HeroSection from "../components/HeroSection"
import Reveal from "../components/Reveal"
import styles from "./Pages.module.css"
import Works from "./Works"
import '../App.css'

function MyWorks() {
    return (
        <div className={styles.mainContainer}>
            <HeroSection>
                <Reveal>
                    <h1 className={styles.mainHeader} style={{width:"100%"}}>My <span className='name'>Works</span></h1>
                </Reveal>
            </HeroSection>
            <Works />
        </div>
    )
}

export default MyWorks