import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import BIRDS from 'vanta/src/vanta.birds.js'
import Header from './Header.jsx'
import Homepage from './HomePage.jsx'
import AboutMe from './AboutMe.jsx'
import SkillsPage from './SkillsPage.jsx'
import ProjectSection from  './ProjectSection.jsx'
import Contact from './Contact.jsx'
import './App.css'



function App(){
  // vanta.js setup
  const appBackgroundRef = useRef(null)
  const vantaEffectRef = useRef(null)

  useEffect(() => {
    if (!appBackgroundRef.current || vantaEffectRef.current) {
      return undefined
    }

    try {
      vantaEffectRef.current = BIRDS({
        el: appBackgroundRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 100,
        minWidth: 100,
        scale: 1,
        scaleMobile: 1,
        backgroundColor: 0x112A4F,
        color1: 0x00FFEC,
        color2: 0x005BCC,  
        colorMode: 'lerp',
        birdSize: 0.50,
        wingSpan: 11,
        speedLimit: 3,
        separation: 50,
        alignment: 50,
        cohesion: 14,
        quantity: 6,
      })
    } catch (error) {
      console.error('[VANTA] NET init failed:', error)
      vantaEffectRef.current = null
    }

    return () => {
      if (!vantaEffectRef.current) {
        return
      }

      try {
        vantaEffectRef.current.destroy()
      } catch (error) {
        console.warn('[VANTA] BIRDS cleanup warning:', error)
      } finally {
        vantaEffectRef.current = null
      }
    }
  }, [])

  return(
    <>
    
    <div className= "mainBodyContainer container" ref={appBackgroundRef}>
      <div className= "headerContainer">
        <Header />
      </div>  
      <div className="container">
        <Homepage />
      </div>
      <div className="container">
        <AboutMe />
      </div>
      <div className="container">
        <SkillsPage />
      </div>
      <div className="container">
        <ProjectSection />
      </div>
      <div className="container">
        <Contact />
      </div>

    </div>
    </>
  )
}

export default App