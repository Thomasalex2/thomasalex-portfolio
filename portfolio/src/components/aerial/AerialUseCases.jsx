import React from 'react'
import { aerial } from '../../data/content.js'

const AerialUseCases = () => {
  const { useCases } = aerial
  if (!useCases?.items?.length) return null

  return (
    <section id="aerial-use-cases" className="section border-t hairline-soft">
      <div className="container-custom">
        <h2 className="font-heading text-2xl md:text-3xl font-bold ink">{useCases.title}</h2>
        <p className="mt-3 ink-muted max-w-2xl">{useCases.subtitle}</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {useCases.items.map((item) => (
            <article key={item.title} className="p-4 sm:p-5 border-l-2 border-forest/60 surface-soft">
              <h3 className="font-heading font-semibold ink">{item.title}</h3>
              <p className="mt-2 text-sm ink-muted leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AerialUseCases
