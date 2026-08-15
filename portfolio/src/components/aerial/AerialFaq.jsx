import React from 'react'
import { aerial } from '../../data/content.js'

const AerialFaq = () => {
  const { faq } = aerial
  if (!faq?.items?.length) return null

  return (
    <section id="aerial-faq" className="section border-t hairline-soft">
      <div className="container-custom">
        <h2 className="font-heading text-2xl md:text-3xl font-bold ink">{faq.title}</h2>
        <div className="mt-6 space-y-3">
          {faq.items.map((item) => (
            <details
              key={item.question}
              className="group border hairline surface-soft rounded-lg px-4 py-3"
            >
              <summary className="cursor-pointer font-heading font-semibold ink list-none flex items-center justify-between gap-3">
                <span>{item.question}</span>
                <span className="ink-ghost text-lg leading-none group-open:rotate-45 transition-transform" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm ink-muted leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AerialFaq
