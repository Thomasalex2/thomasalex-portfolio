import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/content.js'
import { HiOutlineExternalLink } from 'react-icons/hi'

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <h2 className="font-heading text-2xl md:text-3xl font-bold">Personal Projects</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => {
            const hasLink = p.link && p.link !== '_blank'
            const Component = hasLink ? motion.a : motion.div
            
            return (
              <Component
                key={p.title}
                href={hasLink ? p.link : undefined}
                target={hasLink && p.link?.startsWith('http') ? '_blank' : undefined}
                rel={hasLink && p.link?.startsWith('http') ? 'noreferrer noopener' : undefined}
                className="card overflow-hidden group"
                whileHover={hasLink ? { scale: 1.02 } : undefined}
                transition={{ duration: 0.2 }}
              >
                <div className="h-40 bg-white/5 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold">{p.title}</h3>
                    {hasLink && (
                      <HiOutlineExternalLink className="text-white/60 group-hover:text-forest-light transition-colors" />
                    )}
                  </div>
                  <p className="mt-2 text-sm text-white/80">{p.description}</p>
                </div>
              </Component>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects


