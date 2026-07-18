import React from 'react'
import { motion } from 'framer-motion'
import { aerial } from '../../data/content.js'

const Aerial3D = () => {
  const { capture3d } = aerial

  return (
    <section id="aerial-3d" className="section border-t border-white/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold">{capture3d.title}</h2>
            <p className="mt-3 text-white/70 max-w-xl">{capture3d.subtitle}</p>
            <p className="mt-4 text-white/65 text-sm sm:text-base max-w-xl leading-relaxed">
              {capture3d.body}
            </p>

            {capture3d.useCases?.length > 0 && (
              <div className="mt-8">
                <h3 className="font-heading font-semibold text-sm uppercase tracking-wide text-forest-light">
                  Good for
                </h3>
                <ul className="mt-3 space-y-2">
                  {capture3d.useCases.map((item) => (
                    <li key={item} className="text-sm text-white/75 pl-4 border-l-2 border-forest/50">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <a href="#aerial-contact" className="btn btn-primary mt-8">
              {capture3d.ctaLabel}
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
              <img
                src={capture3d.image}
                alt={capture3d.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-sm text-white/90">
                {capture3d.imageCaption}
              </p>
            </div>

            {capture3d.benefits?.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-3">
                {capture3d.benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="p-4 border border-white/10 bg-white/[0.03] rounded-lg"
                  >
                    <h4 className="font-heading font-semibold text-sm">{benefit.title}</h4>
                    <p className="mt-1.5 text-xs text-white/65 leading-relaxed">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Aerial3D
