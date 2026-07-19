import React, { useEffect } from 'react'
import ErrorBoundary from '../components/ErrorBoundary.jsx'
import Footer from '../components/Footer.jsx'
import BackToTop from '../components/BackToTop.jsx'
import ScrollProgress from '../components/ScrollProgress.jsx'
import AerialNavbar from '../components/aerial/AerialNavbar.jsx'
import AerialHero from '../components/aerial/AerialHero.jsx'
import AerialCapture from '../components/aerial/AerialCapture.jsx'
// import AerialShowreel from '../components/aerial/AerialShowreel.jsx' // hero video covers this for now
import Aerial3D from '../components/aerial/Aerial3D.jsx'
import AerialDeliverables from '../components/aerial/AerialDeliverables.jsx'
import AerialContact from '../components/aerial/AerialContact.jsx'
import { aerial } from '../data/content.js'

const AerialPage = () => {
  useEffect(() => {
    const previousTitle = document.title
    document.title = aerial.meta.title

    let descriptionTag = document.querySelector('meta[name="description"]')
    const previousDescription = descriptionTag?.getAttribute('content') || ''
    if (descriptionTag) {
      descriptionTag.setAttribute('content', aerial.meta.description)
    }

    window.scrollTo(0, 0)

    return () => {
      document.title = previousTitle
      if (descriptionTag && previousDescription) {
        descriptionTag.setAttribute('content', previousDescription)
      }
    }
  }, [])

  return (
    <ErrorBoundary>
      <div className="aerial-page min-h-screen relative">
        <ScrollProgress />
        <div className="aerial-page-glow pointer-events-none fixed inset-0" aria-hidden="true" />
        <div className="relative z-10">
          <AerialNavbar />
          <main className="overflow-x-hidden">
            <AerialHero />
            <AerialCapture />
            {/* <AerialShowreel /> */}
            <Aerial3D />
            <AerialDeliverables />
            <AerialContact />
          </main>
          <Footer />
          <BackToTop />
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default AerialPage
