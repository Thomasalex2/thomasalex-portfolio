import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { site, hero as heroContent } from '../data/content.js'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * i, duration: 0.3 } })
}

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const roles = heroContent.roles

  useEffect(() => {
    const currentRole = roles[currentIndex]
    
    if (isDeleting) {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 25) // Reduced from 100ms to 50ms for faster deletion
        return () => clearTimeout(timeout)
      } else {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % roles.length)
      }
    } else {
      if (displayText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        }, 25) // Reduced from 150ms to 75ms for faster typing
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 1000) // Reduced from 2000ms to 1000ms for faster pause between words
        return () => clearTimeout(timeout)
      }
    }
  }, [displayText, currentIndex, isDeleting, roles])

  return (
    <section id="top" className="section">
      <div className="container-custom grid md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col justify-center">
          <motion.h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-left"
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
          >
            {site.name}
          </motion.h1>
          <motion.div
            className="mt-4 text-forest-light font-semibold text-lg min-h-[1.5rem] leading-relaxed text-left"
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
          >
            <span>{displayText}</span>
            <span className="animate-pulse">|</span>
          </motion.div>
          <motion.p
            className="mt-4 text-white/80 max-w-prose leading-relaxed"
            initial="hidden" animate="visible" variants={fadeUp} custom={3}
          >
            {site.tagline}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial="hidden" animate="visible" variants={fadeUp} custom={4}
          >
            <a href={heroContent.ctaPrimary.href} className="btn btn-primary">
              {heroContent.ctaPrimary.label}
            </a>
            <a href={heroContent.ctaSecondary.href} className="btn btn-secondary">
              {heroContent.ctaSecondary.label}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.3 }}
          className="relative h-56 sm:h-72 md:h-80 rounded-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-forest/40 via-forest/10 to-transparent" />
          <img
            src={heroContent.image}
            alt="Hero"
            className="w-full h-full object-cover opacity-80"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero


