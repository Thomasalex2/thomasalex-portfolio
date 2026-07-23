import React from 'react'
import { about } from '../data/content.js'

const About = () => {
  return (
    <section id="about" className="section border-t hairline-soft">
      <div className="container-custom grid md:grid-cols-3 gap-8 md:gap-10 items-center">
        <div className="flex justify-center md:justify-start">
          <img
            src={about.image}
            alt="Profile"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full object-cover border-2 border-forest"
          />
        </div>
        <div className="md:col-span-2">
          <h2 className="font-heading text-2xl md:text-3xl font-bold ink">About</h2>
          <p className="mt-3 ink-muted leading-relaxed">{about.bio}</p>
        </div>
      </div>
    </section>
  )
}

export default About
