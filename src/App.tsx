import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ParticleBg from './components/ParticlesBackground'
import Home from './pages/Home'
import Works from './pages/Works'
import AboutMe from './pages/AboutMe'


function App() {

  return (
    <>
      <ParticleBg />
      <Router>
          <Navbar />
          <Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/Works' Component={Works}></Route>
            <Route path='/AboutMe' Component={AboutMe}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
