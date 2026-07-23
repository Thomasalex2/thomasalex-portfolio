import React from 'react'
import { skills } from '../data/content.js'

const Skills = () => {
  return (
    <section id="skills" className="section border-t hairline-soft">
      <div className="container-custom">
        <h2 className="font-heading text-2xl md:text-3xl font-bold ink">Skills</h2>
        <p className="mt-3 ink-muted max-w-2xl">
          Hardware, firmware, and systems work across product development.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((group) => (
            <div key={group.category} className="p-5 border hairline surface-soft rounded-lg">
              <h3 className="font-heading font-semibold text-forest-light text-sm uppercase tracking-wide">
                {group.category}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm ink-muted pl-4 border-l-2 border-forest/50">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
