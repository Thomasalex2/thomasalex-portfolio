import React from 'react'
import { aerial } from '../../data/content.js'

const Aerial3D = () => {
  const { capture3d } = aerial

  return (
    <section id="aerial-3d" className="section border-t hairline-soft">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold ink">{capture3d.title}</h2>
            <p className="mt-3 ink-muted max-w-xl">{capture3d.subtitle}</p>
            <p className="mt-3 ink-subtle text-sm sm:text-base max-w-xl leading-relaxed">
              {capture3d.body}
            </p>

            {capture3d.useCases?.length > 0 && (
              <div className="mt-6">
                <h3 className="font-heading font-semibold text-sm uppercase tracking-wide text-forest-light">
                  Good for
                </h3>
                <ul className="mt-3 space-y-2">
                  {capture3d.useCases.map((item) => (
                    <li key={item} className="text-sm ink-muted pl-4 border-l-2 border-forest/50">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <a href="#aerial-contact" className="btn btn-primary mt-6">
              {capture3d.ctaLabel}
            </a>
          </div>

          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border hairline">
              <img
                src={capture3d.image}
                alt={capture3d.imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-sm on-media">
                {capture3d.imageCaption}
              </p>
            </div>

            {capture3d.benefits?.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-3">
                {capture3d.benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="p-4 border hairline surface-soft rounded-lg"
                  >
                    <h4 className="font-heading font-semibold text-sm ink">{benefit.title}</h4>
                    <p className="mt-1.5 text-xs ink-subtle leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aerial3D
