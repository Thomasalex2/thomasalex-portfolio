import React, { useEffect, useRef } from 'react'

/** Subtle network ambient for light theme (main portfolio only). */
const TechnicalNetwork = ({
  animationSpeed = 0.25,
  driftSpeed = 0.12,
  baseDotCount = 100,
  baseLineCount = 160,
  dotSize = 1.5,
  lineWidth = 0.8,
  dotColor = '#6B7280',
  lineColor = '#D1D5DB',
  baseClusterCount = 6,
  clusterDensity = 0.4,
  baseConnectionDistance = 110,
  minOpacity = 0.12,
  maxOpacity = 0.35,
}) => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const dotsRef = useRef([])
  const linesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')

    canvas.width = 1920
    canvas.height = 1080

    const createDots = () => {
      const dots = []
      const clusters = []

      for (let i = 0; i < baseClusterCount; i++) {
        clusters.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 100 + Math.random() * 150,
        })
      }

      for (let i = 0; i < baseDotCount; i++) {
        const cluster = clusters[Math.floor(Math.random() * clusters.length)]
        let x
        let y

        if (Math.random() < clusterDensity) {
          const angle = Math.random() * Math.PI * 2
          const distance = Math.random() * cluster.radius
          x = cluster.x + Math.cos(angle) * distance
          y = cluster.y + Math.sin(angle) * distance
        } else {
          x = Math.random() * canvas.width
          y = Math.random() * canvas.height
        }

        dots.push({
          x,
          y,
          vx: (Math.random() - 0.5) * driftSpeed,
          vy: (Math.random() - 0.5) * driftSpeed,
          opacity: minOpacity + Math.random() * (maxOpacity - minOpacity),
          pulsePhase: Math.random() * Math.PI * 2,
        })
      }

      return dots
    }

    const createLines = () => {
      const lines = []
      const connectionsPerDot = Math.max(1, Math.floor(baseLineCount / baseDotCount))

      dotsRef.current.forEach((dot, index) => {
        const nearbyDots = dotsRef.current
          .map((otherDot, otherIndex) => ({
            dot: otherDot,
            distance: Math.hypot(otherDot.x - dot.x, otherDot.y - dot.y),
            index: otherIndex,
          }))
          .filter((item) => item.index !== index && item.distance < baseConnectionDistance)
          .sort((a, b) => a.distance - b.distance)

        const connectionsToMake = Math.min(connectionsPerDot, nearbyDots.length)
        for (let i = 0; i < connectionsToMake; i++) {
          const targetDot = nearbyDots[i].dot
          const exists = lines.some(
            (line) =>
              (line.dot1 === dot && line.dot2 === targetDot) ||
              (line.dot1 === targetDot && line.dot2 === dot)
          )
          if (!exists) {
            lines.push({
              dot1: dot,
              dot2: targetDot,
              opacity: minOpacity + Math.random() * (maxOpacity - minOpacity),
              fadePhase: Math.random() * Math.PI * 2,
            })
          }
        }
      })

      return lines
    }

    dotsRef.current = createDots()
    linesRef.current = createLines()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dotsRef.current.forEach((dot) => {
        dot.x += dot.vx
        dot.y += dot.vy
        if (dot.x < 0) dot.x = canvas.width
        if (dot.x > canvas.width) dot.x = 0
        if (dot.y < 0) dot.y = canvas.height
        if (dot.y > canvas.height) dot.y = 0

        dot.pulsePhase += animationSpeed * 0.02
        const pulseOpacity = dot.opacity + Math.sin(dot.pulsePhase) * 0.06

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2)
        ctx.fillStyle = dotColor
        ctx.globalAlpha = Math.max(0, Math.min(1, pulseOpacity))
        ctx.fill()
      })

      linesRef.current.forEach((line) => {
        const distance = Math.hypot(line.dot2.x - line.dot1.x, line.dot2.y - line.dot1.y)
        if (distance >= baseConnectionDistance) return

        line.fadePhase += animationSpeed * 0.01
        const fadeOpacity = line.opacity + Math.sin(line.fadePhase) * 0.06

        ctx.beginPath()
        ctx.moveTo(line.dot1.x, line.dot1.y)
        ctx.lineTo(line.dot2.x, line.dot2.y)
        ctx.strokeStyle = lineColor
        ctx.lineWidth = lineWidth
        ctx.globalAlpha = Math.max(0, Math.min(1, fadeOpacity))
        ctx.stroke()
      })

      ctx.globalAlpha = 1
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [
    animationSpeed,
    driftSpeed,
    baseDotCount,
    baseLineCount,
    dotSize,
    lineWidth,
    dotColor,
    lineColor,
    baseClusterCount,
    clusterDensity,
    baseConnectionDistance,
    minOpacity,
    maxOpacity,
  ])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent', objectFit: 'cover' }}
    />
  )
}

export default TechnicalNetwork
