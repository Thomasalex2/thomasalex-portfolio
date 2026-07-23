import React from 'react'
import { aerial } from '../../data/content.js'

const AerialCapture = () => {
  const { capture } = aerial

  return (
    <section id="aerial-capture" className="section border-t hairline-soft">
      <div className="container-custom">
        <h2 className="font-heading text-2xl md:text-3xl font-bold ink">{capture.title}</h2>
        <p className="mt-3 ink-muted max-w-2xl">{capture.subtitle}</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {capture.items.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-lg border hairline surface-soft"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-heading font-semibold ink">{item.title}</h3>
                <p className="mt-2 text-sm ink-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AerialCapture
