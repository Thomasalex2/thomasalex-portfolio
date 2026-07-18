import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scroll to hash targets after client-side navigations (e.g. /?type=Aerial#contact). */
const HashScroll = () => {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '').split('?')[0]
    if (!id) return

    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 50)

    return () => window.clearTimeout(timer)
  }, [hash, pathname])

  return null
}

export default HashScroll
