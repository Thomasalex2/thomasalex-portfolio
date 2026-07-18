import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
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
    <section id="services" className="section">
      <div className="container-custom">
        <h2 className="font-heading text-2xl md:text-3xl font-bold">Services</h2>
        <p className="mt-3 text-white/70 max-w-2xl">
          Clear ways to work together — embedded systems, small-business websites, and aerial capture.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const isInternal = service.href.startsWith('/')
            const cta = service.cta || (isInternal ? 'View aerial work' : 'Get in touch')

            const content = (
              <>
                <h3 className="font-heading text-lg font-semibold group-hover:text-forest-light transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-white/75 flex-1">{service.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm text-forest-light">
                  {cta}
                  <HiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
                </span>
              </>
            )

            const className =
              'card p-6 h-full flex flex-col group hover:border-forest/40 transition-colors text-left w-full'

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                {isInternal ? (
                  <Link to={service.href} className={className}>
                    {content}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className={className}
                    onClick={() => scrollToContact(service.inquiryType)}
                  >
                    {content}
                  </button>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
