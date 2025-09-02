import '../App.css'
import styles from './Home.module.css'
import './Skills.css'
import Reveal from '../components/Reveal'
import SkillCard from './SkillCard'

function Skills() {
    return (
        <div className="main-container">
            <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"centers",
            marginBottom:"50px"
            }}>
                <Reveal>
                    <h1 className={styles.mainHeader} style={{width:"100%"}}>My <span className='name'>Skills</span></h1>
                </Reveal>
            </div>

            <div className="skill-cards">
                <SkillCard text='C#' level={98} />
                <SkillCard text='C' level={91} />
                <SkillCard text='C++' level={76} />
                <SkillCard text='Python' level={82} />
                <SkillCard text='HTML' level={95} />
                <SkillCard text='CSS' level={90} />
                <SkillCard text='Javascript' level={90} />
                <SkillCard text='Jquery' level={87} />
                <SkillCard text='PHP' level={87} />
                <SkillCard text='TypeScript' level={85} />

            </div>
        </div>
    )
}

export default Skills