import React, { useEffect, useRef } from 'react'

const TouchGestures = () => {
  const touchStartRef = useRef({ x: 0, y: 0, time: 0 })
  const touchEndRef = useRef({ x: 0, y: 0, time: 0 })

  useEffect(() => {
    const handleTouchStart = (e) => {
      const touch = e.touches[0]
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now()
      }
    }

    const handleTouchEnd = (e) => {
      const touch = e.changedTouches[0]
      touchEndRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now()
      }

      const start = touchStartRef.current
      const end = touchEndRef.current
      const duration = end.time - start.time
      const distance = Math.sqrt(
        Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
      )

      // Swipe detection
      if (duration < 500 && distance > 50) {
        const deltaX = end.x - start.x
        const deltaY = end.y - start.y

        // Horizontal swipe
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          if (deltaX > 0) {
            // Swipe right - could navigate to previous section
            console.log('Swipe right detected')
          } else {
            // Swipe left - could navigate to next section
            console.log('Swipe left detected')
          }
        } else {
          // Vertical swipe
          if (deltaY > 0) {
            // Swipe down - could scroll down
            console.log('Swipe down detected')
          } else {
            // Swipe up - could scroll up or show navigation
            console.log('Swipe up detected')
          }
        }
      }

      // Double tap detection
      const lastTap = parseInt(localStorage.getItem('lastTap') || '0')
      const now = Date.now()
      if (now - lastTap < 300) {
        // Double tap detected
        console.log('Double tap detected')
        // Could toggle theme, scroll to top, etc.
      }
      localStorage.setItem('lastTap', now.toString())
    }

    // Add touch event listeners
    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  // This component doesn't render anything visible
  return null
}

export default TouchGestures
