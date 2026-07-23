import React from 'react'
import { experience } from '../data/content.js'

const Experience = () => {
  return (
    <section id="experience" className="section border-t hairline-soft">
      <div className="container-custom">
        <h2 className="font-heading text-2xl md:text-3xl font-bold ink">Experience</h2>
        <p className="mt-3 ink-muted max-w-2xl">
          Product hardware and embedded systems roles across medical and IoT.
        </p>

        <div className="mt-6 space-y-5">
          {experience.map((job) => (
            <article key={job.company + job.role} className="p-5 border-l-2 border-forest/60 surface-soft">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex items-start gap-3">
                  {job.logo && (
                    <div className="w-12 h-12 surface-elevated rounded-lg flex items-center justify-center flex-shrink-0 border hairline">
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="font-heading font-semibold ink">
                      {job.role}
                      <span className="ink-subtle font-normal"> · {job.company}</span>
                    </h3>
                    <p className="mt-1 text-sm ink-faint">
                      {job.period} · {job.location}
                    </p>
                  </div>
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {job.points.map((point) => (
                  <li key={point} className="text-sm ink-muted pl-4 border-l border-forest/30 leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
