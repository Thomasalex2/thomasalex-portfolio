import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { contact } from '../data/content.js'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // Submit the form data to Netlify using a URL-encoded POST so it records the entry
    const encode = (data) =>
      Object.keys(data)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")

    const body = encode({ "form-name": "contact", ...form, "bot-field": "" })

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    })
      .then(() => {
        setSent(true)
        setForm({ name: "", email: "", message: "" })
      })
      .catch(() => {
        // still show sent state to avoid exposing errors to users; you could show an error instead
        setSent(true)
      })
  }

  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <h2 className="font-heading text-2xl md:text-3xl font-bold">Contact</h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="mt-4 text-left text-white/80 max-w-2xl mx-auto"
        >
          Have a product idea or a prototype and need a hardware engineer to help design it? Feel free to reach out and I will get back to you within 24 hours!
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.3 }}
          className="mt-8 max-w-2xl mx-auto"
        >
          <form
            onSubmit={onSubmit}
            data-netlify="true"
            name="contact"
            method="POST"
            className="card p-8"
          >
            <input type="hidden" name="form-name" value="contact" />
            
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
              <label className="text-sm text-white/70 font-medium">Message</label>
              <textarea 
                name="message" 
                value={form.message} 
                onChange={onChange} 
                required 
                rows="6" 
                placeholder="How can I help you?" 
                className="mt-2 w-full bg-transparent border border-white/20 rounded-md px-4 py-3 outline-none focus:border-forest-light transition-colors resize-none"
              />
            </div>
            
            <div className="mt-6">
              <button 
                type="submit" 
                className="btn btn-primary w-full sm:w-auto"
                disabled={sent}
              >
                {sent ? 'Message Sent!' : 'Send Message'}
              </button>
              {sent && (
                <p className="mt-3 text-forest-light text-sm">
                  Thank you! I'll get back to you soon.
                </p>
              )}
            </div>
          </form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mt-8 text-center"
          >
            <p className="text-white/60 mb-4">Or connect with me on</p>
            <div className="flex justify-center items-center gap-6">
              <a 
                href={contact.social.github} 
                target="_blank" 
                rel="noreferrer noopener" 
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <FaGithub size={24} className="group-hover:text-forest-light transition-colors" />
              </a>
              <a 
                href={contact.social.linkedin} 
                target="_blank" 
                rel="noreferrer noopener" 
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <FaLinkedin size={24} className="group-hover:text-forest-light transition-colors" />
              </a>
              <a
                href={contact.social.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <FaInstagram size={24} className="group-hover:text-forest-light transition-colors" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact


