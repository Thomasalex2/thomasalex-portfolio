import React from 'react'
import { motion } from 'framer-motion'
import { about } from '../data/content.js'
import LazyImage from './LazyImage.jsx'

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container-custom grid md:grid-cols-3 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">
            <LazyImage
              src={about.image}
              alt="Profile"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover border-2 border-forest glow-border"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold">About</h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            {about.bio}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
