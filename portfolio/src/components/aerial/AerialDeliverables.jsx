import React from 'react'
import { motion } from 'framer-motion'
import { aerial } from '../../data/content.js'

const AerialDeliverables = () => {
  const { deliverables } = aerial

  return (
    <section id="aerial-deliverables" className="section border-t border-white/5">
      <div className="container-custom">
        <h2 className="font-heading text-2xl md:text-3xl font-bold">{deliverables.title}</h2>
        <p className="mt-3 text-white/70 max-w-2xl">{deliverables.subtitle}</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {deliverables.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="p-5 border-l-2 border-forest/60 bg-white/[0.03]"
            >
              <h3 className="font-heading font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AerialDeliverables
