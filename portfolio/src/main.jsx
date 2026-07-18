import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import App from './App.jsx'
import AerialPage from './pages/AerialPage.jsx'
import './index.css'

const container = document.getElementById('root')

if (!container) {
  console.error('Root container not found!')
} else {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/aerial" element={<AerialPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  )
}
