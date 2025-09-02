// import React from 'react'
import HeroSection from '../components/HeroSection'
import '../App.css'
import Reveal from '../components/Reveal'
import styles from './Home.module.css'

function Home() {
    return (
        <HeroSection>
            <Reveal>
                <h1 className={styles.mainHeader}>Hello there, I'm <span className="name">Mark</span>  Tangon</h1>
            </Reveal>
            <div style={{alignSelf: "flex-start", marginLeft:"28%"}}>
                <Reveal>
                    <p className={styles.subHeader}>Software Engineer</p>
                </Reveal>
            </div>
        </HeroSection>
    )
}

export default Home