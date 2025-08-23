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
import ErrorBoundary from './components/ErrorBoundary.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import BackToTop from './components/BackToTop.jsx'
import TouchGestures from './components/TouchGestures.jsx'
import BackgroundPatterns from './components/BackgroundPatterns.jsx'
import TechnicalNetwork from './components/TechnicalNetwork.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import content from './data/content.js'

const App = () => {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div className="min-h-screen relative">
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
              <Projects />
              <Contact />
            </main>
            <Footer />
            <BackToTop />
            <TouchGestures />
          </div>
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App


