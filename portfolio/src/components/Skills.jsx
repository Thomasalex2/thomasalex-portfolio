import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data/content.js'

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <h2 className="font-heading text-2xl md:text-3xl font-bold">Skills</h2>
        
        {/* Option A: Grid with category cards (currently active) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIndex * 0.05, duration: 0.2 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="card p-6"
            >
              <h3 className="font-semibold text-forest-light mb-4">{group.category}</h3>
              <div className="space-y-2">
                {group.items.map((item, itemIndex) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (groupIndex * 0.05) + (itemIndex * 0.02), duration: 0.2 }}
                    className="flex items-center gap-2 text-white/80 text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-forest rounded-full flex-shrink-0" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Option B: Horizontal layout with category sections (uncomment to use)
        <div className="mt-8 space-y-8">
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIndex * 0.1, duration: 0.4 }}
            >
              <h3 className="font-semibold text-forest-light text-lg mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item, itemIndex) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (groupIndex * 0.1) + (itemIndex * 0.05), duration: 0.3 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 bg-forest/20 border border-forest/30 rounded-full text-sm font-medium hover:bg-forest/30 transition-colors"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        */}

        {/* Option C: Accordion-style layout (uncomment to use)
        <div className="mt-8 space-y-4">
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIndex * 0.1, duration: 0.4 }}
              className="card overflow-hidden"
            >
              <div className="p-6 border-b border-white/10">
                <h3 className="font-semibold text-forest-light">{group.category}</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.items.map((item, itemIndex) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (groupIndex * 0.1) + (itemIndex * 0.05), duration: 0.3 }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <div className="w-2 h-2 bg-forest rounded-full flex-shrink-0" />
                      <span className="text-white/90 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}
       
      </div>
    </section>
  )
}

export default Skills


