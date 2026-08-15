import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { aerial, contact } from '../data/content.js'

const Footer = () => {
  const year = new Date().getFullYear()
  const isAerial = useLocation().pathname.startsWith('/aerial')
  const phone = aerial.contact?.phone?.trim()

  return (
    <footer className="border-t hairline py-8 mt-8">
      <div className="container-custom text-center ink-muted text-sm space-y-2">
        {isAerial ? (
          <>
            <p>EU &amp; US licensed drone photography · Available across Ireland</p>
            <p>
              <a href={`mailto:${contact.email}`} className="text-forest-light hover:underline">
                {contact.email}
              </a>
              {phone ? (
                <>
                  {' · '}
                  <a
                    href={`tel:${phone.replace(/[^\d+]/g, '')}`}
                    className="text-forest-light hover:underline"
                  >
                    {phone}
                  </a>
                </>
              ) : null}
            </p>
          </>
        ) : (
          <p>
            <Link to="/aerial" className="text-forest-light hover:underline">
              Aerial photography across Ireland
            </Link>
          </p>
        )}
        <p>Built by Thomas Alex • © {year}</p>
      </div>
    </footer>
  )
}

export default Footer
