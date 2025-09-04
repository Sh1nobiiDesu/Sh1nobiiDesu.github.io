// import React from 'react'
import HeroSection from '../components/HeroSection'
import '../App.css'
import Reveal from '../components/Reveal'
import styles from './Pages.module.css'
import { useEffect, useState } from 'react'

function Home() {
    const [isMobile, setMobile] = useState(false)

    const checkIfMobile = () => {
        if(window.innerWidth <= 780)
            setMobile(true)
        else
            setMobile(false)
    }

    useEffect(() => {
        checkIfMobile()
    ,[]})

    window.addEventListener("resize", checkIfMobile)

    return (
        <HeroSection>
            <Reveal>
                <h1 className={styles.mainHeader}>Hello there, I'm <span className="name">Mark</span>  Tangon</h1>
            </Reveal>
            <div style={{alignSelf: "center", width:`${isMobile ? "" : "45%"}`}}>
                <Reveal>
                    <p className={styles.subHeader}>Software Developer</p>
                </Reveal>
            </div>
        </HeroSection>
    )
}

export default Home