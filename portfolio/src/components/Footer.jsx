import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 py-8 mt-8">
      <div className="container-custom text-center text-white/70 text-sm">
        Built by Thomas Alex • © {year}
      </div>
    </footer>
  )
}

export default Footer


