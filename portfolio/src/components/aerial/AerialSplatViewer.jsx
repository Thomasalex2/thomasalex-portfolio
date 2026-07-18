import React, { useEffect, useState, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { aerial } from '../../data/content.js'

const SplatCanvas = lazy(() => import('./SplatCanvas.jsx'))

const AerialSplatViewer = () => {
  const { splat } = aerial
  const [shouldLoad, setShouldLoad] = useState(false)
  const [webglOk, setWebglOk] = useState(true)

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const gl =
        canvas.getContext('webgl2') ||
        canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl')
      setWebglOk(Boolean(gl))
    } catch {
      setWebglOk(false)
    }
  }, [])

  return (
    <section id="aerial-3d" className="section border-t border-white/5">
      <div className="container-custom">
        <h2 className="font-heading text-2xl md:text-3xl font-bold">{splat.title}</h2>
        <p className="mt-3 text-white/70 max-w-2xl">{splat.subtitle}</p>

        {splat.benefits?.length > 0 && (
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 max-w-3xl">
            {splat.benefits.map((benefit) => (
              <li
                key={benefit}
                className="text-sm text-white/75 pl-4 border-l-2 border-forest/50"
              >
                {benefit}
              </li>
            ))}
          </ul>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="mt-8 relative aspect-[16/10] sm:aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/50"
        >
          {!shouldLoad && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <img
                src={splat.poster}
                alt="3D scene poster"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-charcoal/55" />
              <div className="relative z-10 text-center px-6">
                {!webglOk ? (
                  <p className="text-sm text-white/80 max-w-md">
                    Interactive 3D requires WebGL, which is unavailable in this browser. View the
                    gallery and showreel instead, or try on a desktop device.
                  </p>
                ) : (
                  <>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setShouldLoad(true)}
                    >
                      {splat.loadLabel}
                    </button>
                    <p className="mt-3 text-xs text-white/60 max-w-sm mx-auto">{splat.hint}</p>
                  </>
                )}
              </div>
            </div>
          )}

          {shouldLoad && (
            <Suspense
              fallback={
                <div className="absolute inset-0 flex items-center justify-center text-white/70 text-sm">
                  Loading 3D viewer…
                </div>
              }
            >
              <SplatCanvas url={splat.url} />
            </Suspense>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default AerialSplatViewer
