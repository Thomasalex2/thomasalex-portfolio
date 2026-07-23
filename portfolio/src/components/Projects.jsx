import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/content.js'
import { HiOutlineExternalLink } from 'react-icons/hi'

const ProjectCard = ({ project, hasLink, isInternal }) => {
  const className = `group h-full flex flex-col overflow-hidden rounded-lg border hairline surface-soft ${
    hasLink ? 'cursor-pointer hover:border-forest/40 transition-colors' : ''
  }`

  const body = (
    <>
      <div className="h-36 sm:h-40 overflow-hidden surface-elevated">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
        />
      </div>
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-heading font-semibold text-sm sm:text-base ink">{project.title}</h3>
          {hasLink && (
            <HiOutlineExternalLink className="ink-faint group-hover:text-forest-light transition-colors flex-shrink-0" />
          )}
        </div>
        <p className="text-sm ink-muted mb-3 flex-1">{project.description}</p>

        {project.techStack && (
          <div className="flex flex-wrap gap-1 mb-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs text-forest-light border border-forest/30 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between text-xs ink-faint mt-auto pt-2 border-t hairline">
          <span>{project.category}</span>
          <span>{project.difficulty}</span>
        </div>
      </div>
    </>
  )

  if (!hasLink) return <div className={className}>{body}</div>
  if (isInternal) {
    return (
      <Link to={project.link} className={className}>
        {body}
      </Link>
    )
  }
  return (
    <a href={project.link} target="_blank" rel="noreferrer noopener" className={className}>
      {body}
    </a>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="section border-t hairline-soft">
      <div className="container-custom">
        <h2 className="font-heading text-2xl md:text-3xl font-bold ink">Personal Projects</h2>
        <p className="mt-3 ink-muted max-w-2xl">Selected work across hardware, software, and aerial capture.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => {
            const hasLink = project.link && project.link !== '_blank'
            const isInternal = hasLink && project.link.startsWith('/')
            return (
              <ProjectCard
                key={project.title}
                project={project}
                hasLink={hasLink}
                isInternal={isInternal}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
