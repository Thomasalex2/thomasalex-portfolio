import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'

import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Starfield from './components/Starfield.jsx'
import content from './data/content.js'

const App = () => {
  return (
    <div className="min-h-screen relative">
      <Starfield {...(content.starfield || {})} />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
                  <Experience />
        <Projects />
        <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App


