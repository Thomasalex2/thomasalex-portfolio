import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { aerial, contact } from '../../data/content.js'

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
    <section id="aerial-contact" className="section border-t border-white/5">
      <div className="container-custom">
        <h2 className="font-heading text-2xl md:text-3xl font-bold">{aerialContact.title}</h2>
        <p className="mt-3 text-white/70 max-w-2xl">{aerialContact.subtitle}</p>
        <p className="mt-2 text-white/60 text-sm max-w-2xl">{aerialContact.message}</p>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          onSubmit={onSubmit}
          data-netlify="true"
          name="contact"
          method="POST"
          className="mt-8 card p-8"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="inquiryType" value="Aerial" />
          <input type="hidden" name="source" value="aerial" />

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-white/70 font-medium">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                required
                placeholder="Your name"
                className="mt-2 w-full bg-transparent border border-white/20 rounded-md px-4 py-3 outline-none focus:border-forest-light transition-colors"
              />
            </div>
            <div>
              <label className="text-sm text-white/70 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                placeholder="you@example.com"
                className="mt-2 w-full bg-transparent border border-white/20 rounded-md px-4 py-3 outline-none focus:border-forest-light transition-colors"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="text-sm text-white/70 font-medium">Project details</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              required
              rows="5"
              placeholder="Site location, timing, and deliverables you need..."
              className="mt-2 w-full bg-transparent border border-white/20 rounded-md px-4 py-3 outline-none focus:border-forest-light transition-colors resize-none"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button type="submit" className="btn btn-primary" disabled={sent}>
              {sent ? 'Message Sent!' : 'Send request'}
            </button>
            <a href={`mailto:${contact.email}`} className="text-sm text-white/60 hover:text-forest-light">
              or email {contact.email}
            </a>
          </div>
          {sent && (
            <p className="mt-3 text-forest-light text-sm">Thank you — I will get back to you soon.</p>
          )}
        </motion.form>

        <p className="mt-8 text-sm text-white/50">
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
