import React, { useState, useEffect } from 'react'
import { site, hero as heroContent } from '../data/content.js'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const roles = heroContent.roles

  useEffect(() => {
    const currentRole = roles[currentIndex]

    if (isDeleting) {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 25)
        return () => clearTimeout(timeout)
      }
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % roles.length)
      return undefined
    }

    if (displayText.length < currentRole.length) {
      const timeout = setTimeout(
        () => setDisplayText(currentRole.slice(0, displayText.length + 1)),
        25
      )
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(() => setIsDeleting(true), 1000)
    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, roles])

  return (
    <section id="top" className="section">
      <div className="container-custom grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex flex-col justify-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight ink">
            {site.name}
          </h1>
          <div className="mt-3 text-forest-light font-semibold text-lg min-h-[1.5rem] leading-relaxed">
            <span>{displayText}</span>
            <span className="animate-pulse">|</span>
          </div>
          <p className="mt-4 ink-muted max-w-prose leading-relaxed">{site.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={heroContent.ctaPrimary.href} className="btn btn-primary">
              {heroContent.ctaPrimary.label}
            </a>
            <a href={heroContent.ctaSecondary.href} className="btn btn-secondary">
              {heroContent.ctaSecondary.label}
            </a>
          </div>
        </div>

        <div className="relative h-56 sm:h-72 md:h-80 rounded-xl overflow-hidden border hairline">
          <div className="absolute inset-0 bg-gradient-to-br from-forest/40 via-forest/10 to-transparent z-[1]" />
          <img
            src={heroContent.image}
            alt="Hero"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
