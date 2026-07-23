import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import BackToTop from './components/BackToTop.jsx'
import HashScroll from './components/HashScroll.jsx'
import Starfield from './components/Starfield.jsx'
import TechnicalNetwork from './components/TechnicalNetwork.jsx'
import { useTheme } from './contexts/ThemeContext.jsx'
import content from './data/content.js'

const AmbientBackground = () => {
  const { isDark } = useTheme()
  const [softMode, setSoftMode] = useState(false)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mobileQuery = window.matchMedia('(max-width: 768px)')
    const update = () => setSoftMode(motionQuery.matches || mobileQuery.matches)
    update()
    motionQuery.addEventListener('change', update)
    mobileQuery.addEventListener('change', update)
    return () => {
      motionQuery.removeEventListener('change', update)
      mobileQuery.removeEventListener('change', update)
    }
  }, [])

  if (isDark) {
    const starfield = content.starfield || {}
    return (
      <Starfield
        {...starfield}
        count={softMode ? Math.round((starfield.count || 80) * 0.45) : starfield.count}
        shootingStars={{
          ...(starfield.shootingStars || {}),
          enabled: !softMode && starfield.shootingStars?.enabled !== false,
        }}
      />
    )
  }

  return (
    <TechnicalNetwork
      animationSpeed={softMode ? 0.15 : 0.25}
      driftSpeed={softMode ? 0.08 : 0.12}
      baseDotCount={softMode ? 60 : 100}
      baseLineCount={softMode ? 90 : 160}
      baseClusterCount={softMode ? 4 : 6}
      minOpacity={0.12}
      maxOpacity={0.35}
      dotSize={1.5}
      lineWidth={0.8}
    />
  )
}

const App = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen relative surface">
        <HashScroll />
        <ScrollProgress />
        <AmbientBackground />
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
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default App
