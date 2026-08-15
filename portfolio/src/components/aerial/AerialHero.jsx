import React, { useEffect, useState } from 'react'
import { aerial } from '../../data/content.js'

const AerialHero = () => {
  const { hero } = aerial
  const cover = hero.coverImage || '/images/aerial/aerial-cover.jpg'
  const videoSrc = hero.videoSrc || ''
  const [loadVideo, setLoadVideo] = useState(false)

  useEffect(() => {
    if (!videoSrc) return
    if (navigator.webdriver) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const enable = () => setLoadVideo(true)
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(enable, { timeout: 2500 })
      return () => cancelIdleCallback(id)
    }
    const timer = setTimeout(enable, 1200)
    return () => clearTimeout(timer)
  }, [videoSrc])

  return (
    <section id="aerial-top" className="relative min-h-[70vh] sm:min-h-[75vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${cover}')` }}
        aria-hidden="true"
      />

      {loadVideo && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={cover}
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      <div className="aerial-hero-scrim absolute inset-0" aria-hidden="true" />
      <div className="aerial-hero-glow absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="container-custom relative z-10 py-16 md:py-20">
        <p className="font-heading text-forest-light text-sm sm:text-base tracking-wide uppercase">
          {hero.brand}
        </p>
        <h1 className="mt-3 font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-3xl on-media-title">
          {hero.headline}
        </h1>
        <p className="mt-4 on-media text-base sm:text-lg max-w-xl">{hero.subcopy}</p>
        <p className="mt-2 text-sm on-media-muted">{hero.location}</p>
        {hero.credentials?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {hero.credentials.map((item) => (
              <li
                key={item}
                className="text-xs sm:text-sm px-3 py-1 rounded-full border border-white/25 on-media-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={hero.ctaPrimary.href} className="btn btn-primary">
            {hero.ctaPrimary.label}
          </a>
          <a href={hero.ctaSecondary.href} className="btn btn-secondary">
            {hero.ctaSecondary.label}
          </a>
        </div>
      </div>
    </section>
  )
}

export default AerialHero
