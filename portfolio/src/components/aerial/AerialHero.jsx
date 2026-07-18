import React from 'react'
import { motion } from 'framer-motion'
import { aerial } from '../../data/content.js'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.45 },
  }),
}

const AerialHero = () => {
  const { hero } = aerial
  const cover = hero.coverImage || '/images/aerial/aerial-cover.svg'
  const videoSrc = hero.videoSrc || ''

  return (
    <section id="aerial-top" className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Poster / fallback still */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${cover}')` }}
        aria-hidden="true"
      />

      {/* Looping muted background clip (shown when videoSrc is set) */}
      {videoSrc && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={cover}
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      <div className="aerial-hero-scrim absolute inset-0" aria-hidden="true" />
      <div className="aerial-hero-glow absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="container-custom relative z-10 py-20 md:py-28">
        <motion.p
          className="font-heading text-forest-light text-sm sm:text-base tracking-wide uppercase"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          {hero.brand}
        </motion.p>
        <motion.h1
          className="mt-4 font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-3xl aerial-hero-title"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
        >
          {hero.headline}
        </motion.h1>
        <motion.p
          className="mt-5 text-white/80 text-base sm:text-lg max-w-xl"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
        >
          {hero.subcopy}
        </motion.p>
        <motion.p
          className="mt-3 text-sm text-white/50"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={4}
        >
          {hero.location}
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={5}
        >
          <a href={hero.ctaPrimary.href} className="btn btn-primary">
            {hero.ctaPrimary.label}
          </a>
          <a href={hero.ctaSecondary.href} className="btn btn-secondary">
            {hero.ctaSecondary.label}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default AerialHero
