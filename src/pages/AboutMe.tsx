// import React from 'react'
import '../App.css'
import Reveal from '../components/Reveal'
import styles from './Pages.module.css'
import HeroSection from '../components/HeroSection'
import './AboutMe.css'

function AboutMe() {
  return (
    <div className={styles.mainContainer}>
      <HeroSection>
        <Reveal>
          <h1 className={styles.mainHeader} style={{width:"100%"}}>About <span className='name'>Me</span></h1>
        </Reveal>
      </HeroSection>
      <div className="AboutContainer">
        <Reveal>
          <div className="TextArea">
            <h1 className='mainAbout'>
              Hey! My name is Mark Frederick Tangon, a software developer with a solid foundation in programming. I'm always eager to learn new things.
              I've had my fair share of code that does not work that even the great ChatGPT can't fix but have always managed to find ways to get around them.
            </h1>
          <br/>
            <h1 className='mainAbout'>
              Whenever I'm not on my 5th can of monster trying to fix my code, You can find me listening to J-Pop/J-Rock while playing video games.
              If not, I will be on FL Studios making some beats or on my guitar practicing my skills or just leisurely watching some anime.
            </h1>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default AboutMe