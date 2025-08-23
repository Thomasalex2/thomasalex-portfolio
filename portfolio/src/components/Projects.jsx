import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/content.js'
import { HiOutlineExternalLink } from 'react-icons/hi'

const ProjectCard = ({ project, hasLink, Component }) => {

  return (
    <Component
      href={hasLink ? project.link : undefined}
      target={hasLink && project.link?.startsWith('http') ? '_blank' : undefined}
      rel={hasLink && project.link?.startsWith('http') ? 'noreferrer noopener' : undefined}
      className={`card overflow-hidden group h-full flex flex-col ${hasLink ? 'cursor-pointer' : ''}`}
      {...(hasLink && {
        whileHover: { 
          scale: 1.02,
          y: -4,
          transition: { duration: 0.2 }
        }
      })}
    >
      <div className="h-32 sm:h-40 bg-white/5 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" 
        />
      </div>
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 sm:gap-3 mb-2">
          <h3 className="font-semibold text-sm sm:text-base">{project.title}</h3>
          {hasLink && (
            <HiOutlineExternalLink className="text-white/60 group-hover:text-forest-light transition-colors flex-shrink-0" />
          )}
        </div>
        <p className="text-xs sm:text-sm text-white/80 mb-3 flex-1">{project.description}</p>
        
        {/* Tech Stack Tags */}
        {project.techStack && (
          <div className="flex flex-wrap gap-1 mb-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-forest/20 text-forest-light rounded-full border border-forest/30"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        
        {/* Project Meta */}
        <div className="flex items-center justify-between text-xs text-white/60 mt-auto pt-2 border-t border-white/10">
          <span className="capitalize">{project.category}</span>
          <span className="px-2 py-1 bg-white/10 rounded-full">
            {project.difficulty}
          </span>
        </div>
      </div>
    </Component>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <h2 className="font-heading text-2xl md:text-3xl font-bold">Personal Projects</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => {
            const hasLink = project.link && project.link !== '_blank'
            const Component = hasLink ? motion.a : motion.div
            
            return (
              <ProjectCard
                key={project.title}
                project={project}
                hasLink={hasLink}
                Component={Component}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects


