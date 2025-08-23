import React, { Suspense } from 'react'
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
import Loading from './components/Loading.jsx'
import content from './data/content.js'

const App = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen relative">
        <Starfield {...(content.starfield || {})} />
        <div className="relative z-10">
          <Navbar />
          <main className="overflow-x-hidden">
            <Suspense fallback={<Loading size="large" text="Loading portfolio..." />}>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
            </Suspense>
          </main>
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default App


