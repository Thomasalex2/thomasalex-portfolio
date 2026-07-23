import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { aerial, contact } from '../../data/content.js'

const fieldClass =
  'mt-2 w-full bg-transparent border hairline-strong rounded-md px-4 py-3 outline-none focus:border-forest-light transition-colors ink'

const AerialContact = () => {
  const { contact: aerialContact } = aerial
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    inquiryType: 'Aerial',
    source: 'aerial',
  })
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
        setForm({
          name: '',
          email: '',
          message: '',
          inquiryType: 'Aerial',
          source: 'aerial',
        })
      })
      .catch(() => setSent(true))
  }

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
              <label className="text-sm ink-muted font-medium">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                required
                placeholder="Your name"
                className={fieldClass}
              />
            </div>
            <div>
              <label className="text-sm ink-muted font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                placeholder="you@example.com"
                className={fieldClass}
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="text-sm ink-muted font-medium">Project details</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              required
              rows="5"
              placeholder="Site location, timing, and deliverables you need..."
              className={`${fieldClass} resize-none`}
            />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <button type="submit" className="btn btn-primary" disabled={sent}>
              {sent ? 'Message Sent!' : 'Send request'}
            </button>
            <a href={`mailto:${contact.email}`} className="text-sm ink-subtle hover:text-forest-light">
              or email {contact.email}
            </a>
          </div>
          {sent && (
            <p className="mt-3 text-forest-light text-sm">Thank you! I will get back to you soon.</p>
          )}
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
