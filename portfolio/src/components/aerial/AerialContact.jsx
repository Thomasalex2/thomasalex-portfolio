import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { aerial, contact } from '../../data/content.js'

const fieldClass =
  'mt-2 w-full bg-transparent border hairline-strong rounded-md px-4 py-3 outline-none focus:border-forest-light transition-colors ink'

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  siteLocation: '',
  jobType: 'Property / marketing',
  message: '',
  inquiryType: 'Aerial',
  source: 'aerial',
}

const AerialContact = () => {
  const { contact: aerialContact, jobTypes } = aerial
  const [form, setForm] = useState(emptyForm)
  const [sent, setSent] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const encode = (data) =>
      Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')

    const body = encode({ 'form-name': 'contact', ...form, 'bot-field': '' })

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
      .then(() => {
        setSent(true)
        setForm(emptyForm)
      })
      .catch(() => setSent(true))
  }

  const mailtoHref = `mailto:${contact.email}?subject=${encodeURIComponent('Aerial shoot enquiry')}`
  const phone = aerialContact.phone?.trim()
  const phoneHref = phone ? `tel:${phone.replace(/[^\d+]/g, '')}` : ''
  const whatsappHref =
    phone && aerialContact.whatsapp
      ? `https://wa.me/${phone.replace(/\D/g, '')}`
      : ''

  return (
    <section id="aerial-contact" className="section border-t hairline-soft">
      <div className="container-custom">
        <h2 className="font-heading text-2xl md:text-3xl font-bold ink">{aerialContact.title}</h2>
        <p className="mt-3 ink-muted max-w-2xl">{aerialContact.subtitle}</p>
        <p className="mt-2 ink-subtle text-sm max-w-2xl">{aerialContact.message}</p>

        <form
          onSubmit={onSubmit}
          data-netlify="true"
          name="contact"
          method="POST"
          className="mt-6 card p-6 sm:p-8"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="inquiryType" value="Aerial" />
          <input type="hidden" name="source" value="aerial" />

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm ink-muted font-medium" htmlFor="aerial-name">
                Name
              </label>
              <input
                id="aerial-name"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                autoComplete="name"
                placeholder="Your name"
                className={fieldClass}
              />
            </div>
            <div>
              <label className="text-sm ink-muted font-medium" htmlFor="aerial-email">
                Email
              </label>
              <input
                id="aerial-email"
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                autoComplete="email"
                placeholder="you@example.com"
                className={fieldClass}
              />
            </div>
            <div>
              <label className="text-sm ink-muted font-medium" htmlFor="aerial-phone">
                Phone <span className="ink-faint font-normal">(optional)</span>
              </label>
              <input
                id="aerial-phone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={onChange}
                autoComplete="tel"
                placeholder="For a quicker callback"
                className={fieldClass}
              />
            </div>
            <div>
              <label className="text-sm ink-muted font-medium" htmlFor="aerial-site">
                Site location
              </label>
              <input
                id="aerial-site"
                name="siteLocation"
                value={form.siteLocation}
                onChange={onChange}
                required
                placeholder="Town, county, or Eircode"
                className={fieldClass}
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="text-sm ink-muted font-medium" htmlFor="aerial-job-type">
              What do you need?
            </label>
            <select
              id="aerial-job-type"
              name="jobType"
              value={form.jobType}
              onChange={onChange}
              className={`${fieldClass} [&>option]:bg-charcoal [&>option]:text-white`}
            >
              {(jobTypes || []).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-5">
            <label className="text-sm ink-muted font-medium" htmlFor="aerial-message">
              Project details
            </label>
            <textarea
              id="aerial-message"
              name="message"
              value={form.message}
              onChange={onChange}
              required
              rows="5"
              placeholder="Timing, access notes, and deliverables you need..."
              className={`${fieldClass} resize-none`}
            />
          </div>

          <div className="mt-6">
            <button type="submit" className="btn btn-primary" disabled={sent}>
              {sent ? 'Message Sent!' : 'Send request'}
            </button>
            {sent && (
              <p className="mt-3 text-forest-light text-sm">Thank you! I will get back to you soon.</p>
            )}
          </div>

          <div className="mt-6 pt-5 border-t hairline-soft">
            <p className="text-sm ink-faint">Prefer to skip the form?</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="ink-faint w-20 shrink-0">Email</span>
                <a href={mailtoHref} className="text-forest-light hover:underline break-all">
                  {contact.email}
                </a>
              </li>
              {phoneHref ? (
                <li className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="ink-faint w-20 shrink-0">Call</span>
                  <a href={phoneHref} className="text-forest-light hover:underline">
                    {phone}
                  </a>
                </li>
              ) : null}
              {whatsappHref ? (
                <li className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="ink-faint w-20 shrink-0">WhatsApp</span>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest-light hover:underline"
                  >
                    {phone}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </form>

        <p className="mt-6 text-sm ink-faint">
          Looking for hardware or firmware work?{' '}
          <Link to="/#contact" className="text-forest-light hover:underline">
            Contact via the main portfolio
          </Link>
          .
        </p>
      </div>
    </section>
  )
}

export default AerialContact
