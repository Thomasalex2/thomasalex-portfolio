import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

console.log('Main.jsx loading...')
console.log('Current location:', window.location.href)
console.log('User agent:', navigator.userAgent)
console.log('Script loading time:', new Date().toISOString())

// Register service worker for PWA - temporarily disabled for debugging
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('./sw.js')
//       .then((registration) => {
//       console.log('SW registered: ', registration)
//     })
//       .catch((registrationError) => {
//       console.log('SW registration failed: ', registrationError)
//     })
//   })
// }

const container = document.getElementById('root')
console.log('Container found:', container)

if (!container) {
  console.error('Root container not found!')
} else {
  const root = createRoot(container)
  console.log('Root created, rendering App...')
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}


