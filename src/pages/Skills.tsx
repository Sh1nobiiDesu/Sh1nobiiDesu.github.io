import '../App.css'
import styles from './Pages.module.css'
import './Skills.css'
import Reveal from '../components/Reveal'
import SkillCard from '../components/SkillCard'
import HeroSection from '../components/HeroSection'

function Skills() {
    return (
        <div className={styles.mainContainer}>
            <HeroSection>
                <Reveal>
                    <h1 className={styles.mainHeader} style={{width:"100%"}}>My <span className='name'>Skills</span></h1>
                </Reveal>
            </HeroSection>

            <div className="skill-cards">
                <div className="skill-block">
                    <div className={styles.revealCenter}>
                        <Reveal>
                            <h5 className={`${styles.subHeader} skill-header`} >OOP</h5>
                        </Reveal>
                    </div>
                    <SkillCard text='C#' level={98} />
                    <SkillCard text='C' level={91} />
                    <SkillCard text='C++' level={68} />
                    <SkillCard text='Python' level={79} />
                </div>
                <div className="skill-block">
                    <div className={styles.revealCenter}>
                        <Reveal>
                            <h5 className={`${styles.subHeader} skill-header`} >Front End</h5>
                        </Reveal>
                    </div>
                    <SkillCard text='HTML' level={95} />
                    <SkillCard text='CSS' level={90} />
                    <SkillCard text='Javascript' level={90} />
                    <SkillCard text='TypeScript' level={85} />
                    <SkillCard text='React' level={80} />
                </div>
                <div className="skill-block">
                    <div className={styles.revealCenter}>
                        <Reveal>
                            <h5 className={`${styles.subHeader} skill-header`} >Back End</h5>
                        </Reveal>
                    </div>
                    <SkillCard text='Node.js' level={89} />
                    <SkillCard text='Jquery' level={87} />
                    <SkillCard text='PHP' level={87} />
                    <SkillCard text='Flask' level={74} />
                    <SkillCard text='ASP.NET' level={70} />
                    <SkillCard text='REST' level={70} />
                </div>
                <div className="skill-block">
                    <div className={styles.revealCenter}>
                        <Reveal>
                            <h5 className={`${styles.subHeader} skill-header`} >Databases</h5>
                        </Reveal>
                    </div>
                    <SkillCard text='MySQL' level={80} />
                    <SkillCard text='SQL' level={81} />
                    <SkillCard text='MongoDB' level={34} />
                </div>
                <div className="skill-block">
                    <div className={styles.revealCenter}>
                        <Reveal>
                            <h5 className={`${styles.subHeader} skill-header`} >Others</h5>
                        </Reveal>
                    </div>
                    <SkillCard text='PLC Logic' level={72} />
                    <SkillCard text='Github' level={68} />
                    <SkillCard text='Linux' level={49} />
                </div>

            </div>
        </div>
    )
}

export default Skills