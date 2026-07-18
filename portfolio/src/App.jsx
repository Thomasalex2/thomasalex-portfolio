import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Starfield from './components/Starfield.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import BackToTop from './components/BackToTop.jsx'
import TouchGestures from './components/TouchGestures.jsx'
import BackgroundPatterns from './components/BackgroundPatterns.jsx'
import TechnicalNetwork from './components/TechnicalNetwork.jsx'
import HashScroll from './components/HashScroll.jsx'
import content from './data/content.js'

const App = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen relative">
        <HashScroll />
        <ScrollProgress />
        <Starfield {...(content.starfield || {})} />
        <BackgroundPatterns />
        <TechnicalNetwork />
        <div className="relative z-10">
          <Navbar />
          <main className="overflow-x-hidden">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Services />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
          <TouchGestures />
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default App
