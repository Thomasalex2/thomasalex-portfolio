import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t hairline py-8 mt-8">
      <div className="container-custom text-center ink-muted text-sm">
        Built by Thomas Alex • © {year}
      </div>
    </footer>
  )
}

export default Footer
