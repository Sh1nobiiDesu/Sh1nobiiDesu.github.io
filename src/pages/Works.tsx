// import React from 'react'
import HeroSection from '../components/HeroSection'
import '../App.css'
import styles from './Pages.module.css'
import Reveal from '../components/Reveal'

function Works() {
    return (
        <HeroSection>
            <Reveal>
                <h1 className={styles.mainHeader} style={{width:"100%"}}>My <span className='name'>Works</span></h1>
            </Reveal>
        </HeroSection>
    )
}

export default Works