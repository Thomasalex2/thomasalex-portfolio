import React from 'react'
import { aerialReviews } from '../../data/aerialReviews.js'

const StarRow = ({ rating }) => {
  const clamped = Math.min(5, Math.max(0, Math.round(Number(rating) || 0)))
  return (
    <div className="flex items-center gap-0.5 text-lg leading-none" aria-label={`${clamped} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={i < clamped ? 'text-forest-light' : 'ink-ghost'}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  )
}

const AerialReviews = () => {
  const { title, subtitle, items } = aerialReviews

  if (!items?.length) return null

  return (
    <section id="aerial-reviews" className="section border-t hairline-soft">
      <div className="container-custom">
        <h2 className="font-heading text-2xl md:text-3xl font-bold ink">{title}</h2>
        <p className="mt-3 ink-muted max-w-2xl">{subtitle}</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <article
              key={`${item.name}-${item.date || item.location}-${index}`}
              className="flex flex-col p-5 border-l-2 border-forest/60 surface-soft"
            >
              <div className="flex items-center justify-between gap-3">
                <StarRow rating={item.stars} />
                {item.date ? <span className="text-xs ink-faint shrink-0">{item.date}</span> : null}
              </div>
              <p className="mt-3 text-sm ink-secondary leading-relaxed italic">&ldquo;{item.review}&rdquo;</p>
              {item.videoUrl ? (
                <a
                  href={item.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm text-forest-light hover:underline"
                >
                  {item.videoLabel || 'Watch the video'}
                </a>
              ) : null}
              <div className="mt-auto pt-4">
                <span className="font-heading font-semibold ink text-sm">{item.name}</span>
                {item.location ? (
                  <p className="mt-0.5 text-sm ink-faint">{item.location}</p>
                ) : null}
                {item.source ? (
                  item.sourceUrl ? (
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-xs text-forest-light hover:underline"
                    >
                      Via {item.source}
                    </a>
                  ) : (
                    <p className="mt-1 text-xs ink-faint">Via {item.source}</p>
                  )
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AerialReviews
