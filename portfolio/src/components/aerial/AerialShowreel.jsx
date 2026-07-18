import React from 'react'
import { motion } from 'framer-motion'
import { aerial } from '../../data/content.js'

const AerialShowreel = () => {
  const { showreel } = aerial
  const hasVideo = Boolean(showreel.youtubeId)

  return (
    <section id="aerial-showreel" className="section border-t border-white/5">
      <div className="container-custom">
        <h2 className="font-heading text-2xl md:text-3xl font-bold">{showreel.title}</h2>
        <p className="mt-3 text-white/70 max-w-2xl">{showreel.subtitle}</p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="mt-8 relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/40"
        >
          {hasVideo ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${showreel.youtubeId}?rel=0`}
              title="Aerial showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <img
                src={showreel.poster}
                alt="Showreel poster placeholder"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="relative z-10 text-center px-6">
                <p className="font-heading text-xl font-semibold">Showreel coming soon</p>
                <p className="mt-2 text-sm text-white/70 max-w-md">
                  Add a YouTube video ID in <code className="text-forest-light">aerial.showreel.youtubeId</code>{' '}
                  in content.js, or replace the poster image.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default AerialShowreel
