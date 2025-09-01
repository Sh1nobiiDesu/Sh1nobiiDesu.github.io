import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ParticleBg from './components/ParticlesBackground'


function App() {

  return (
    <>
      <ParticleBg />
      <Router>
          <Navbar />
          <Routes>
            <Route path='/'></Route>
            <Route path='/Works'></Route>
            <Route path='/About Me'></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
