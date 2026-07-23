import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { services } from '../data/content.js'
import { HiArrowRight } from 'react-icons/hi'

const Services = () => {
  const navigate = useNavigate()

  const scrollToContact = (inquiryType) => {
    navigate(`/?type=${encodeURIComponent(inquiryType)}#contact`, { replace: false })
    window.requestAnimationFrame(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    })
  }

  return (
    <section id="services" className="section border-t hairline-soft">
      <div className="container-custom">
        <h2 className="font-heading text-2xl md:text-3xl font-bold ink">Services</h2>
        <p className="mt-3 ink-muted max-w-2xl">
          Clear ways to work together: embedded systems, automation tools, websites, and aerial capture.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service) => {
            const isInternal = service.href.startsWith('/')
            const cta = service.cta || (isInternal ? 'View aerial work' : 'Get in touch')
            const className =
              'p-5 h-full flex flex-col text-left w-full border hairline surface-soft rounded-lg group hover:border-forest/40 transition-colors'

            const content = (
              <>
                <h3 className="font-heading text-lg font-semibold ink group-hover:text-forest-light transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm ink-muted flex-1">{service.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm text-forest-light">
                  {cta}
                  <HiArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </>
            )

            return isInternal ? (
              <Link key={service.id} to={service.href} className={className}>
                {content}
              </Link>
            ) : (
              <button
                key={service.id}
                type="button"
                className={className}
                onClick={() => scrollToContact(service.inquiryType)}
              >
                {content}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
