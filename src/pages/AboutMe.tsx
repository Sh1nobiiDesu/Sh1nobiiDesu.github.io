// import React from 'react'
import '../App.css'
import Reveal from '../components/Reveal'
import styles from './Pages.module.css'
import './AboutMe.css'
import { Link } from 'react-router-dom'

function AboutMe() {
  return (
    <div className={styles.mainContainer} style={{height: "100%"}}>
        <Reveal>
          <h1 className={styles.mainHeader} style={{width:"100%"}}>About <span className='name'>Me</span></h1>
        </Reveal>


      <div className="sub-container">
        <div className="AboutContainer">
            <Reveal>
              <div className="TextArea">
                <h1 className='mainAbout'>
                    Hey! My name is <span className='name'>Mark Frederick Tangon</span>, a software developer with a solid foundation in programming, And 
                    I've had my fair share of code that does not work that even the great ChatGPT can't fix but have always managed to find ways to get around them.
                    I'm always eager to learn new things and can learn things quite quick. I work well in team environments and believe that everybody has to pull
                    their own weight including my own. Whenever I hit a wall or rock bottom I always tell myself that this is part of the process and as long as
                    I don't give up I will always conquer whatever challenge is in front of me.
                </h1>
                <br/>
                <h1 className='mainAbout'>
                  Whenever I'm not on my 5th can of monster trying to fix my code, You can find me listening to J-Pop/J-Rock while playing video games.
                  If not, I will be on FL Studios making some beats or on my guitar practicing my skills or just leisurely watching some anime.
                  Being born in the Philippines I can speak both English and Tagalog, and being fascinated by Japanese culture I have learned basic level Japanese.
                </h1>
                <br/>
              </div>
            </Reveal>
            <div className="image-container">
              <Reveal>
                <img className='myImage' src='images/me.jpg'/>
              </Reveal>
              <Reveal>
                <h4 className='subtext'>Distinguished Gentlemen I encountered while working</h4>
              </Reveal>
            </div>
        </div>

        <div className="social-links">
          <Reveal>
            <Link to='https://www.instagram.com/markfrdrik?igsh=MTNwMjdia3V4M2Z0cA==' target='_blank' aria-label='Instagram' className="social-icon-link instagram">
              <i className="fab fa-instagram"></i>
            </Link>
          </Reveal>
          <Reveal>
            <Link to='https://github.com/Sh1nobiiDesu' target='_blank' aria-label='Github' className="social-icon-link github">
              <i className="fab fa-github"></i>
            </Link>
          </Reveal>
          <Reveal>
            <Link to='www.linkedin.com/in/mark-tangon-69b047364' target='_blank' aria-label='LinkeDin' className="social-icon-link linkedin">
              <i className="fab fa-linkedin"></i>
            </Link>
          </Reveal>
          <Reveal>
            <Link to='https://mail.google.com/mail/?view=cm&fs=1&to=marktangon01@gmail.com' target='_blank' aria-label='Gmail' className="social-icon-link gmail">
              <i className="fab fa-google"></i>
            </Link>
          </Reveal>
        </div>

      </div>
    </div>
  )
}

export default AboutMe