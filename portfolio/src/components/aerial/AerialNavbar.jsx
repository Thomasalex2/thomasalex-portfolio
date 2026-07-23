import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import ThemeToggle from '../ThemeToggle.jsx'

const links = [
  { label: 'Capture', href: '#aerial-capture' },
  { label: '3D Capture', href: '#aerial-3d' },
  { label: 'Deliverables', href: '#aerial-deliverables' },
  { label: 'Contact', href: '#aerial-contact' },
]

const navLinkClass =
  'px-3 py-2 text-sm ink-secondary rounded-md transition-colors hover:bg-white/5'

const AerialNavbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b hairline" style={{ backgroundColor: 'color-mix(in srgb, var(--surface) 70%, transparent)' }}>
      <div className="container-custom flex items-center justify-between h-16 relative">
        <div className="flex items-center gap-2 sm:gap-4 z-10 min-w-0">
          <Link to="/" className="font-heading font-bold text-base sm:text-lg ink hover:text-forest-light transition-colors truncate">
            Thomas Alex
          </Link>
          <span className="ink-ghost shrink-0">/</span>
          <a href="#aerial-top" className="text-sm text-forest-light font-medium shrink-0">
            Aerial
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {links.map((item) => (
            <a key={item.label} href={item.href} className={navLinkClass}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 z-10">
          <ThemeToggle />
          <button
            className="md:hidden p-2 rounded-md hover:bg-white/5"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t hairline"
          >
            <div className="container-custom py-2 flex flex-col gap-1">
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={navLinkClass}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Link
                to="/"
                className="px-3 py-2 text-sm text-forest-light"
                onClick={() => setOpen(false)}
              >
                Back to portfolio
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default AerialNavbar
