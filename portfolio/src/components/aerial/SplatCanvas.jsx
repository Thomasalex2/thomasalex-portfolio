import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { SparkRenderer, SplatMesh } from '@sparkjsdev/spark'

/**
 * Imperative Three.js + Spark Gaussian Splat canvas.
 * Loaded only after the user clicks "Load 3D scene".
 */
const SplatCanvas = ({ url }) => {
  const containerRef = useRef(null)
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState('')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container || !url) return undefined

    let disposed = false
    let animationId = 0
    let renderer
    let controls
    let splatMesh
    let spark
    let resizeObserver

    const width = container.clientWidth || 800
    const height = container.clientHeight || 450

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0a0f0d)

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.01, 1000)
    camera.position.set(0, 1.5, 3.5)

    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance',
      })
    } catch {
      setStatus('error')
      setError('Could not create a WebGL context on this device.')
      return undefined
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setSize(width, height, false)
    container.appendChild(renderer.domElement)

    spark = new SparkRenderer({ renderer })
    scene.add(spark)

    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.08
    controls.target.set(0, 0, 0)

    const fitCameraToMesh = (mesh) => {
      try {
        const box = typeof mesh.getBoundingBox === 'function'
          ? mesh.getBoundingBox(true)
          : new THREE.Box3().setFromObject(mesh)
        if (!box || box.isEmpty()) return
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())
        const maxDim = Math.max(size.x, size.y, size.z) || 1
        controls.target.copy(center)
        camera.position.copy(center).add(new THREE.Vector3(maxDim * 0.6, maxDim * 0.35, maxDim * 0.9))
        camera.near = Math.max(maxDim / 200, 0.01)
        camera.far = maxDim * 30
        camera.updateProjectionMatrix()
        controls.update()
      } catch {
        // keep default camera if bounds fail
      }
    }

    splatMesh = new SplatMesh({
      url,
      onProgress: (event) => {
        if (event.lengthComputable && event.total > 0) {
          setProgress(Math.round((event.loaded / event.total) * 100))
        }
      },
      onLoad: (mesh) => {
        if (disposed) return
        // Common splat orientation fix (Y-up vs Z-up pipelines)
        mesh.quaternion.set(1, 0, 0, 0)
        fitCameraToMesh(mesh)
        setStatus('ready')
      },
    })

    scene.add(splatMesh)

    splatMesh.initialized
      .then((mesh) => {
        if (disposed) return
        mesh.quaternion.set(1, 0, 0, 0)
        fitCameraToMesh(mesh)
        setStatus('ready')
      })
      .catch((err) => {
        if (disposed) return
        console.error('Splat load failed', err)
        setStatus('error')
        setError('Failed to load the 3D scene. Check the splat URL or try again later.')
      })

    const onResize = () => {
      if (!container || !renderer) return
      const w = container.clientWidth
      const h = container.clientHeight
      if (w < 2 || h < 2) return
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h, false)
    }

    resizeObserver = new ResizeObserver(onResize)
    resizeObserver.observe(container)

    const animate = () => {
      if (disposed) return
      animationId = requestAnimationFrame(animate)
      controls?.update()
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      disposed = true
      cancelAnimationFrame(animationId)
      resizeObserver?.disconnect()
      controls?.dispose()
      splatMesh?.dispose?.()
      spark?.dispose?.()
      renderer?.dispose()
      if (renderer?.domElement?.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [url])

  return (
    <div className="absolute inset-0">
      <div ref={containerRef} className="absolute inset-0 touch-none" />

      {status === 'loading' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-charcoal/40 pointer-events-none">
          <p className="text-sm text-white/80">
            Downloading scene… {progress > 0 ? `${progress}%` : ''}
          </p>
          <p className="mt-2 text-xs text-white/50">First load may take a few seconds</p>
        </div>
      )}

      {status === 'error' && (
        <div className="absolute inset-0 flex items-center justify-center bg-charcoal/80 p-6">
          <p className="text-sm text-white/80 text-center max-w-md">{error}</p>
        </div>
      )}

      {status === 'ready' && (
        <p className="absolute bottom-3 left-3 text-xs text-white/50 bg-black/40 px-2 py-1 rounded">
          Drag to orbit · Scroll to zoom
        </p>
      )}
    </div>
  )
}

export default SplatCanvas
