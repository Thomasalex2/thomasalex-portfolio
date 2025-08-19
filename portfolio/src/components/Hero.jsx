import React from 'react'
import { motion } from 'framer-motion'
import { site, hero as heroContent } from '../data/content.js'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.6 } })
}

const Hero = () => {
  return (
    <section id="top" className="section">
      <div className="container-custom grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold"
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
          >
            {site.name}
          </motion.h1>
          <motion.p
            className="mt-4 text-forest-light font-semibold text-lg"
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
          >
            {site.role}
          </motion.p>
          <motion.p
            className="mt-4 text-white/80 max-w-prose"
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
          transition={{ duration: 0.6 }}
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


