import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ParticleBg from './components/ParticlesBackground'
import Home from './pages/Home'
import MyWorks from './pages/MyWorks'
import AboutMe from './pages/AboutMe'
import Skills from './pages/Skills'


function App() {

  return (
    <>
      <ParticleBg />
      <Router>
          <Navbar />
          <Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/Works' Component={MyWorks}></Route>
            <Route path='/AboutMe' Component={AboutMe}></Route>
            <Route path='/Skills' Component={Skills}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
