import HeroSection from '../components/HeroSection'
import '../App.css'
import '../components/WorkCards.css'
import styles from './Pages.module.css'
import Reveal from '../components/Reveal'
import WorkCard from '../components/WorkCard'
import { useEffect,  useState } from 'react'

interface Dictionary<T> {
    [id: string]: T
}

type Repo = {
    id: number,
    name: string,
    html_url: string,
    description: string | null,
    language: string
}

type File = {
    name: string,
    download_url: string
}


function Works() {
    const GitURL = "https://api.github.com/users/sh1nobiidesu/repos"
    const [repos, setRepo] = useState<Repo[]>([])
    const [file, setFile] = useState<Dictionary<string>>({})
    const [loading, setLoading] = useState(false)
    const [errorOccured, setError] = useState(false)



    useEffect(() => {
        const fetchRepos = async () => {
            setLoading(true)
            try {
                const response = await fetch(GitURL)
                const data = await response.json()
                setRepo(data)
                data.map(async (repo : Repo) => {
                    if(repo.name.includes("TM_"))
                        fetchImage(repo.name)
                })
                console.log("done loading")
                setLoading(false)
            }
            catch (error) {
                console.log(`ERROR OCCURED : ${error}`) 
                setError(true)
            }

        }
        
        fetchRepos()
    }, [])

    async function fetchImage(repoName : string)
    {
            setLoading(true)
            try{
                const response = await fetch (`https://api.github.com/repos/sh1nobiidesu/${repoName}/contents/images`)
                const data  = await response.json()
                data.map(async (currFile : File) => 
                {
                    setFile(prevFiles => ({...prevFiles,[repoName]:currFile.download_url}))
                    console.log("file is ")
                    console.log(currFile)
                })
            }
            catch (error){
                console.log(`ERROR OCCURED : ${error}`) 
                setError(true)
            }
    }

    const loadWorks = () => {
        return repos.map((repo : Repo) => {
            if(repo.name.includes("TM_"))
            {
                console.log("Display here")
                // console.log(file)
                return <Reveal> <WorkCard src={file[repo.name]} text={repo.name} path={repo.html_url} desc={repo.description} label={repo.language} /> </Reveal>
            }
        })
    }

    if (loading) return (
        <>
            <HeroSection>
                <Reveal>
                    <h1 className={styles.mainHeader} style={{width:"100%"}}>Loading Projects . . .</h1>
                </Reveal>
            </HeroSection>
        </>
    )

    if (errorOccured) return (
        <>
            <HeroSection>
                <Reveal>
                    <h1 className={styles.mainHeader} style={{width:"100%"}}>Error occured while fetching projects. . .</h1>
                </Reveal>
            </HeroSection>
        </>
    )

    return(
        <div className='cards__container'>
            <div className="cards__wrapper">
                <ul className="cards__items">
                    {loadWorks()}
                    {/* Hard Coded Since Repo is not made Public */}
                    <Reveal>
                        <WorkCard src='images/capstone.jpg' text='ThereMIDI' path='/Works' 
                        desc='Handless Musical Instrument where you play a wide range of instruments without the need of physical touch.
                        Simple Gestures with the hand lead to different notes being played, Alongside many features such as recording and playback. (No github repository available)' 
                        label='C, Python, ...'/>
                    </Reveal>
                    <Reveal>
                        <WorkCard src='images/car-coding.jpg' text='More to Come' path='/Works' desc='Making more projects!' label='Coding . . .'/>
                    </Reveal>
                </ul>
            </div>
        </div>
    )










    // return (
    //     <>
    //     {(() => {
    //         console.log(loading)
    //         console.log(errorOccured)
    //         if(loading) return(
    //             <>
    //                 <HeroSection>
    //                     <Reveal>
    //                         <h1 className={styles.mainHeader} style={{width:"100%"}}>Error occured while fetching projects. . .</h1>
    //                     </Reveal>
    //                 </HeroSection>
    //             </>
    //         )
    //         if(errorOccured) return(
    //             <>
    //                 <HeroSection>
    //                     <Reveal>
    //                         <h1 className={styles.mainHeader} style={{width:"100%"}}>Error occured while fetching projects. . .</h1>
    //                     </Reveal>
    //                 </HeroSection>
    //             </>
    //         )

    //         return(
    //             <div className='cards__container'>
    //                 <div className="cards__wrapper">
    //                     <ul className="cards__items">
    //                         {loadWorks}
    //                         {/* Hard Coded Since Repo is not made Public */}
    //                         <Reveal>
    //                             <WorkCard src='images/capstone.jpg' text='ThereMIDI' path='/Works' 
    //                             desc='Handless Musical Instrument where you play a wide range of instruments without the need of physical touch.
    //                             Simple Gestures with the hand lead to different notes being played, Alongside many features such as recording and playback' 
    //                             label='C, Python, ...'/>
    //                         </Reveal>
    //                         <Reveal>
    //                             <WorkCard src='images/car-coding.jpg' text='More to Come' path='/Works' desc='Making more projects!' label='Coding . . .'/>
    //                         </Reveal>
    //                     </ul>
    //                 </div>
    //             </div>
    //         )
    //     })()}
    //     </>
    // )
}

export default Works