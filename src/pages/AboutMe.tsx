// import React from 'react'
import '../App.css'
import Reveal from '../components/Reveal'
import styles from './Pages.module.css'
import HeroSection from '../components/HeroSection'

function AboutMe() {
  return (
    <div className={styles.mainContainer}>
      <HeroSection>
        <Reveal>
          <h1 className={styles.mainHeader} style={{width:"100%"}}>About <span className='name'>Me</span></h1>
        </Reveal>
      </HeroSection>
    </div>
  )
}

export default AboutMe