import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { nav } from '../data/content.js'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setFocusedIndex(-1)
      }
      
      if (e.key === 'Enter' && focusedIndex >= 0) {
        const link = nav[focusedIndex]
        if (link.external) {
          window.open(link.href, '_blank', 'noopener,noreferrer')
        } else {
          document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
        }
        setOpen(false)
        setFocusedIndex(-1)
      }
    }

    if (open) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, focusedIndex])

  const links = nav.map((item, index) => (
    <a
      key={item.label}
      href={item.href}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noreferrer noopener' : undefined}
      className={`px-3 py-2 text-sm md:text-base text-white/90 hover:text-white hover:bg-white/5 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-charcoal ${
        focusedIndex === index ? 'bg-forest/20 text-forest-light' : ''
      }`}
      onClick={() => setOpen(false)}
      onFocus={() => setFocusedIndex(index)}
      onBlur={() => setFocusedIndex(-1)}
      tabIndex={open ? 0 : -1}
      role="menuitem"
      aria-label={item.label}
    >
      {item.label}
    </a>
  ))

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-charcoal/70 border-b border-white/10">
      <div className="container-custom flex items-center justify-between h-16">
        <a href="#top" className="font-heading font-bold text-lg">Thomas Alex</a>

        <nav className="hidden md:flex items-center gap-2">
          {links}
        </nav>

        <button
          className="md:hidden p-2 rounded-md hover:bg-white/5"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden border-t border-white/10"
          >
            <div className="container-custom py-2 flex flex-col gap-1">
              {links}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar


