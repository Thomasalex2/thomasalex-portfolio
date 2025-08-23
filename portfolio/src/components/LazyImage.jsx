import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Loading from './Loading.jsx'

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = null,
  loading = 'lazy',
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [error, setError] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setError(true)
  }

  if (error) {
    return (
      <div className={`${className} bg-white/5 flex items-center justify-center text-white/40`}>
        <span className="text-sm">Image failed to load</span>
      </div>
    )
  }

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {!isLoaded && isInView && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/5">
          <Loading size="small" text="" />
        </div>
      )}
      
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'}`}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          {...props}
        />
      )}
      
      {!isInView && placeholder && (
        <div className={`${className} bg-white/5`}>
          {placeholder}
        </div>
      )}
    </div>
  )
}

export default LazyImage
