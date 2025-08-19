import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { nav } from '../data/content.js'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const links = nav.map((item) => (
    <a
      key={item.label}
      href={item.href}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noreferrer noopener' : undefined}
      className="px-3 py-2 text-sm md:text-base text-white/90 hover:text-white hover:bg-white/5 rounded-md transition-colors"
      onClick={() => setOpen(false)}
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


