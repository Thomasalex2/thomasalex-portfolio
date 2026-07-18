import React from 'react'
import { motion } from 'framer-motion'
import { aerial } from '../../data/content.js'

const AerialCapture = () => {
  const { capture } = aerial

  return (
    <section id="aerial-capture" className="section">
      <div className="container-custom">
        <h2 className="font-heading text-2xl md:text-3xl font-bold">{capture.title}</h2>
        <p className="mt-3 text-white/70 max-w-2xl">{capture.subtitle}</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {capture.items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AerialCapture
