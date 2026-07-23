import React from 'react'
import { aerial } from '../../data/content.js'

const AerialDeliverables = () => {
  const { deliverables } = aerial

  return (
    <section id="aerial-deliverables" className="section border-t hairline-soft">
      <div className="container-custom">
        <h2 className="font-heading text-2xl md:text-3xl font-bold ink">{deliverables.title}</h2>
        <p className="mt-3 ink-muted max-w-2xl">{deliverables.subtitle}</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {deliverables.items.map((item) => (
            <div key={item.title} className="p-4 sm:p-5 border-l-2 border-forest/60 surface-soft">
              <h3 className="font-heading font-semibold ink">{item.title}</h3>
              <p className="mt-2 text-sm ink-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AerialDeliverables
