import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { contact, inquiryTypes } from '../data/content.js'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const fieldClass =
  'mt-2 w-full bg-transparent border hairline-strong rounded-md px-4 py-3 outline-none focus:border-forest-light transition-colors ink'

const Contact = () => {
  const location = useLocation()
  const [form, setForm] = useState({
    name: '',
    email: '',
    inquiryType: 'Hardware & IoT',
    message: '',
  })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const hashParams = location.hash.includes('?')
      ? new URLSearchParams(location.hash.split('?')[1])
      : null
    const type = params.get('type') || hashParams?.get('type')
    if (type && inquiryTypes.includes(type)) {
      setForm((f) => ({ ...f, inquiryType: type }))
    }
  }, [location.search, location.hash])

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
        setForm({ name: '', email: '', inquiryType: 'Hardware & IoT', message: '' })
      })
      .catch(() => setSent(true))
  }

  return (
    <section id="contact" className="section border-t hairline-soft">
      <div className="container-custom">
        <h2 className="font-heading text-2xl md:text-3xl font-bold ink">Contact</h2>
        <p className="mt-3 ink-muted max-w-2xl">{contact.message}</p>

        <form
          onSubmit={onSubmit}
          data-netlify="true"
          name="contact"
          method="POST"
          className="mt-6 card p-6 sm:p-8"
        >
          <input type="hidden" name="form-name" value="contact" />

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
            <label className="text-sm ink-muted font-medium">What do you need?</label>
            <select
              name="inquiryType"
              value={form.inquiryType}
              onChange={onChange}
              className={`${fieldClass} [&>option]:bg-charcoal [&>option]:text-white`}
            >
              {inquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-5">
            <label className="text-sm ink-muted font-medium">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              required
              rows="5"
              placeholder="How can I help you?"
              className={`${fieldClass} resize-none`}
            />
          </div>

          <div className="mt-5">
            <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={sent}>
              {sent ? 'Message Sent!' : 'Send Message'}
            </button>
            {sent && (
              <p className="mt-3 text-forest-light text-sm">Thank you! I'll get back to you soon.</p>
            )}
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="ink-faint mb-4 text-sm">Or connect with me on</p>
          <div className="flex justify-center items-center gap-4">
            <a
              href={contact.social.github}
              target="_blank"
              rel="noreferrer noopener"
              className="p-3 rounded-full surface-elevated border hairline hover:border-forest/40 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={contact.social.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="p-3 rounded-full surface-elevated border hairline hover:border-forest/40 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href={contact.social.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="p-3 rounded-full surface-elevated border hairline hover:border-forest/40 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
