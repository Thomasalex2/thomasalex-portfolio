import React from 'react'
import { motion } from 'framer-motion'
import { experience } from '../data/content.js'

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({ opacity: 1, x: 0, transition: { delay: 0.1 * i, duration: 0.5 } })
}

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <h2 className="font-heading text-2xl md:text-3xl font-bold">Experience</h2>
        <div className="mt-8 space-y-6">
          {experience.map((job, index) => (
            <motion.div
              key={job.company + job.role}
              className="card p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={itemVariants}
              custom={index + 1}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-semibold text-lg">
                    {job.role} <span className="text-white/60">• {job.company}</span>
                  </h3>
                </div>
                <div className="text-sm text-white/60">
                  {job.period} • {job.location}
                </div>
              </div>
              <div className="space-y-3">
                {job.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-forest rounded-full mt-2 flex-shrink-0" />
                    <p className="text-white/80 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience


