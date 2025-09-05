// import React from 'react'
import HeroSection from '../components/HeroSection'
import '../App.css'
import '../components/WorkCards.css'
import styles from './Pages.module.css'
import Reveal from '../components/Reveal'
import WorkCard from '../components/WorkCard'
import { useEffect, useState } from 'react'

type Repo = {
    id: number,
    name: string,
    html_url: string,
    description: string | null
}

type File = {
    name: string,
    path: string
}

function Works() {
    const [repos, setRepo] = useState<Repo[]>([])
    const [files, setFile] = useState<File[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)



    const fetchRepos = () => {
        try {
            setLoading(true)
            fetch("https://api.github.com/users/sh1nobiidesu/repos") .then((respone) => respone.json()) .then((data) => {setRepo(data); }) 
        }
        catch (error) {
            console.log(error) 
            setError(true)
        }
    }

    useEffect(() => {
        fetchRepos()
    }, [])

    useEffect(() => {
        console.log("test")
        repos.map((repo) => {
            console.log(repo)
        })
        setLoading(false)
    } , [repos])

    if (loading) return (
        <>
            <HeroSection>
                <Reveal>
                    <h1 className={styles.mainHeader} style={{width:"100%"}}>Loading Projects . . .</h1>
                </Reveal>
            </HeroSection>
        </>
    )

    if (error) return (
        <>
            <HeroSection>
                <Reveal>
                    <h1 className={styles.mainHeader} style={{width:"100%"}}>Error occured while fetching projects. . .</h1>
                </Reveal>
            </HeroSection>
        </>
    )

    return (
        <div className='cards__container'>
            <div className="cards__wrapper">
                <ul className="cards__items">
                    {/* Hard Coded Since Repo is not made Public */}
                    <Reveal>
                        <WorkCard src='images/capstone.jpg' text='ThereMIDI' path='/Works' 
                        desc='Handless Musical Instrument where you play a wide range of instruments without the need of physical touch.
                        Simple Gestures with the hand lead to different notes being played, Alongside many features such as recording and playback' 
                        label='C, Python, ...'/>
                    </Reveal>
                    <Reveal>
                        <WorkCard src='images/car-coding.jpg' text='More to Come' path='/Works' desc='Making more projects!' label='Coding . . .'/>
                    </Reveal>
                </ul>
                {/* {repos.map((repo) => (
                ))} */}
            </div>
        </div>
    )
}

export default Works