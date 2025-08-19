import React, { useEffect, useMemo, useRef } from 'react'

const DEFAULT_CONFIG = {
  count: 200,
  speed: 0.2,
  maxStarSize: 1.8,
  minStarSize: 0.4,
  starColor: '#ffffff',
  twinkle: { enabled: true, speed: 0.015, minOpacity: 0.2, maxOpacity: 1 },
  movement: {
    type: 'random', // 'random' | 'direction' | 'parallax'
    directionAngleDeg: -20,
    parallax: {
      layers: 3,
      layerSpeeds: [0.35, 0.65, 1],
      layerCounts: [0.5, 0.3, 0.2],
      sizeMultipliers: [0.7, 1, 1.4],
    },
  },
  shootingStars: {
    enabled: true,
    intervalSeconds: 10,
    speed: 12,
    length: 140,
    angleDeg: -30,
    spreadDeg: 20,
    opacity: 0.9,
  },
}

function hexToRgb(hex) {
  const normalized = hex.replace('#', '')
  const bigint = parseInt(normalized.length === 3
    ? normalized.split('').map((c) => c + c).join('')
    : normalized, 16)
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  }
}

const Starfield = (props) => {
  const config = useMemo(() => ({
    ...DEFAULT_CONFIG,
    ...props,
    twinkle: { ...DEFAULT_CONFIG.twinkle, ...(props?.twinkle || {}) },
    movement: {
      ...DEFAULT_CONFIG.movement,
      ...(props?.movement || {}),
      parallax: {
        ...DEFAULT_CONFIG.movement.parallax,
        ...((props && props.movement && props.movement.parallax) || {}),
      },
    },
    shootingStars: { ...DEFAULT_CONFIG.shootingStars, ...(props?.shootingStars || {}) },
  }), [props])

  const canvasRef = useRef(null)
  const animationRef = useRef(0)
  const starsRef = useRef([])
  const shootingRef = useRef([])
  const nextShootingAtRef = useRef(0)

  // Create stars based on density relative to a base resolution
  const createStars = (width, height) => {
    const baseArea = 1920 * 1080
    const area = width * height
    const scaledCount = Math.max(10, Math.round(config.count * (area / baseArea)))

    const stars = []

    const pushStar = (layerIndex) => {
      const sizeBase = Math.random() * (config.maxStarSize - config.minStarSize) + config.minStarSize
      const layerSizeMult = config.movement.type === 'parallax'
        ? (config.movement.parallax.sizeMultipliers[layerIndex] || 1)
        : 1
      const size = sizeBase * layerSizeMult

      let angleRad
      if (config.movement.type === 'direction' || config.movement.type === 'parallax') {
        angleRad = (config.movement.directionAngleDeg * Math.PI) / 180
      } else {
        angleRad = Math.random() * Math.PI * 2
      }

      const baseSpeed = (Math.random() * 0.6 + 0.4) * config.speed
      const layerSpeedMult = config.movement.type === 'parallax'
        ? (config.movement.parallax.layerSpeeds[layerIndex] || 1)
        : 1
      const jitterMult = (config.movement.type === 'direction' || config.movement.type === 'parallax')
        ? (Math.random() * 0.4 + 0.8)
        : 1
      const speed = baseSpeed * layerSpeedMult * jitterMult

      const baseOpacity = config.twinkle.enabled
        ? Math.random() * (config.twinkle.maxOpacity - config.twinkle.minOpacity) + config.twinkle.minOpacity
        : 1

      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(angleRad) * speed,
        vy: Math.sin(angleRad) * speed,
        size,
        baseOpacity,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: (Math.random() * 0.6 + 0.7) * config.twinkle.speed,
      })
    }

    if (config.movement.type === 'parallax') {
      const weights = config.movement.parallax.layerCounts
      const layers = Math.max(1, config.movement.parallax.layers || (weights ? weights.length : 1))
      const normalizedWeights = new Array(layers).fill(0).map((_, i) => (weights && weights[i] != null ? weights[i] : (1 / layers)))
      const sum = normalizedWeights.reduce((a, b) => a + b, 0) || 1
      const counts = normalizedWeights.map((w) => Math.max(1, Math.round((w / sum) * scaledCount)))
      for (let i = 0; i < counts.length; i += 1) {
        for (let c = 0; c < counts[i]; c += 1) pushStar(i)
      }
    } else {
      for (let i = 0; i < scaledCount; i += 1) pushStar(0)
    }

    starsRef.current = stars
  }

  const draw = (ctx, width, height) => {
    ctx.clearRect(0, 0, width, height)
    const { r, g, b } = hexToRgb(config.starColor)
    for (let i = 0; i < starsRef.current.length; i += 1) {
      const s = starsRef.current[i]

      // Update position
      s.x += s.vx
      s.y += s.vy

      // Wrap around edges
      if (s.x < 0) s.x = width
      if (s.x > width) s.x = 0
      if (s.y < 0) s.y = height
      if (s.y > height) s.y = 0

      // Twinkle
      let opacity = s.baseOpacity
      if (config.twinkle.enabled) {
        s.twinklePhase += s.twinkleSpeed
        const oscillation = (Math.sin(s.twinklePhase) + 1) / 2
        const { minOpacity, maxOpacity } = config.twinkle
        opacity = minOpacity + (maxOpacity - minOpacity) * oscillation
      }

      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
      ctx.fill()
    }

    // Draw shooting stars
    if (shootingRef.current.length > 0) {
      for (let i = shootingRef.current.length - 1; i >= 0; i -= 1) {
        const sh = shootingRef.current[i]
        sh.x += sh.vx
        sh.y += sh.vy
        sh.life += 1

        const out = sh.x < -sh.length || sh.x > width + sh.length || sh.y < -sh.length || sh.y > height + sh.length
        if (out || sh.life > sh.maxLife) {
          shootingRef.current.splice(i, 1)
          continue
        }

        const dirX = sh.vx
        const dirY = sh.vy
        const len = sh.length
        const mag = Math.sqrt(dirX * dirX + dirY * dirY) || 1
        const nx = (dirX / mag)
        const ny = (dirY / mag)
        const tailX = sh.x - nx * len
        const tailY = sh.y - ny * len

        const grad = ctx.createLinearGradient(sh.x, sh.y, tailX, tailY)
        grad.addColorStop(0, `rgba(255,255,255,${config.shootingStars.opacity})`)
        grad.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.strokeStyle = grad
        ctx.lineWidth = Math.max(1, sh.thickness)
        ctx.beginPath()
        ctx.moveTo(tailX, tailY)
        ctx.lineTo(sh.x, sh.y)
        ctx.stroke()
      }
    }
  }

  const scheduleNextShooting = (ts) => {
    const intervalMs = Math.max(1000, (config.shootingStars.intervalSeconds || 10) * 1000)
    const jitter = Math.random() * intervalMs
    nextShootingAtRef.current = ts + intervalMs / 2 + jitter / 2
  }

  const spawnShootingStar = (width, height) => {
    const angleBase = (config.shootingStars.angleDeg * Math.PI) / 180
    const spread = (config.shootingStars.spreadDeg * Math.PI) / 180
    const angle = angleBase + (Math.random() * spread - spread / 2)
    const speed = config.shootingStars.speed
    const vx = Math.cos(angle) * speed
    const vy = Math.sin(angle) * speed

    let x
    let y
    const margin = 50
    if (vx > 0) {
      x = -margin
    } else {
      x = width + margin
    }
    y = Math.random() * height

    shootingRef.current.push({
      x,
      y,
      vx,
      vy,
      length: config.shootingStars.length,
      life: 0,
      maxLife: Math.max(60, Math.round((width + height) / (speed * 0.8))),
      thickness: 2,
    })
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return () => {}
    const ctx = canvas.getContext('2d', { alpha: true })

    const setSize = () => {
      const devicePixelRatio = window.devicePixelRatio || 1
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      canvas.width = Math.floor(w * devicePixelRatio)
      canvas.height = Math.floor(h * devicePixelRatio)
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
      createStars(w, h)
    }

    setSize()

    let lastTs = 0
    const loop = (ts) => {
      // Frame skip protection on tab restores
      if (ts - lastTs > 1000) lastTs = ts
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      draw(ctx, width, height)
      lastTs = ts
      if (config.shootingStars.enabled) {
        if (!nextShootingAtRef.current) scheduleNextShooting(ts)
        if (ts >= nextShootingAtRef.current) {
          spawnShootingStar(width, height)
          scheduleNextShooting(ts)
        }
      }
      animationRef.current = requestAnimationFrame(loop)
    }
    animationRef.current = requestAnimationFrame(loop)

    const onResize = () => setSize()
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', onResize)
    }
  }, [config])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
    />
  )
}

export default Starfield


