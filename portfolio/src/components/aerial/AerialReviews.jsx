import React, { useEffect, useRef, useState } from 'react'
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
  const { title, subtitle, attribution, barkUrl, items } = aerialReviews
  const trackRef = useRef(null)
  const [canScroll, setCanScroll] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [finePointer, setFinePointer] = useState(false)

  useEffect(() => {
    const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const pointerMq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const updateMotion = () => setReduceMotion(motionMq.matches)
    const updatePointer = () => setFinePointer(pointerMq.matches)
    updateMotion()
    updatePointer()
    motionMq.addEventListener('change', updateMotion)
    pointerMq.addEventListener('change', updatePointer)
    return () => {
      motionMq.removeEventListener('change', updateMotion)
      pointerMq.removeEventListener('change', updatePointer)
    }
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const check = () => {
      setCanScroll(el.scrollWidth > el.clientWidth + 4)
    }

    check()
    const ro = new ResizeObserver(check)
    ro.observe(el)
    window.addEventListener('resize', check)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', check)
    }
  }, [items])

  // Auto-scroll only for mouse hover, never while touch-dragging
  useEffect(() => {
    if (!hovering || !canScroll || reduceMotion || !finePointer) return
    const el = trackRef.current
    if (!el) return

    let rafId = 0
    const step = () => {
      el.scrollLeft += 0.55
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
        el.scrollLeft = 0
      }
      rafId = requestAnimationFrame(step)
    }

    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [hovering, canScroll, reduceMotion, finePointer])

  if (!items?.length) return null

  return (
    <section id="aerial-reviews" className="section border-t hairline-soft">
      <div className="container-custom">
        <h2 className="font-heading text-2xl md:text-3xl font-bold ink">{title}</h2>
        <p className="mt-3 ink-muted max-w-2xl">{subtitle}</p>
        {attribution && barkUrl ? (
          <a
            href={barkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-sm text-forest-light hover:underline"
          >
            {attribution}
          </a>
        ) : attribution ? (
          <p className="mt-1 text-sm ink-faint">{attribution}</p>
        ) : null}

        <div
          className="mt-6"
          onMouseEnter={() => {
            if (finePointer) setHovering(true)
          }}
          onMouseLeave={() => setHovering(false)}
        >
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto overscroll-x-contain pb-1 [scrollbar-width:thin] [-webkit-overflow-scrolling:touch]"
            style={{
              scrollSnapType: canScroll ? 'x proximity' : undefined,
            }}
            tabIndex={canScroll ? 0 : undefined}
            aria-label="Client reviews"
            onPointerDown={() => setHovering(false)}
            onTouchStart={() => setHovering(false)}
            onWheel={() => setHovering(false)}
          >
            {items.map((item, index) => (
              <article
                key={`${item.name}-${item.date || item.location}-${index}`}
                className="shrink-0 w-[min(85%,22rem)] sm:w-[24rem] p-5 border-l-2 border-forest/60 surface-soft"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="flex items-center justify-between gap-3">
                  <StarRow rating={item.stars} />
                  {item.date ? <span className="text-xs ink-faint shrink-0">{item.date}</span> : null}
                </div>
                <p className="mt-3 text-sm ink-secondary leading-relaxed">&ldquo;{item.review}&rdquo;</p>
                <div className="mt-4">
                  <span className="font-heading font-semibold ink text-sm">{item.name}</span>
                  {item.location ? (
                    <p className="mt-0.5 text-sm ink-faint">{item.location}</p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
          {canScroll ? (
            <p className="mt-2 text-xs ink-ghost">
              {finePointer && !reduceMotion ? 'Hover to scroll' : 'Swipe for more'}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default AerialReviews
