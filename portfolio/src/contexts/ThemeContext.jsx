import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true)
  const [hasUserPreference, setHasUserPreference] = useState(false)

  useEffect(() => {
    try {
      // Check for saved theme preference
      const savedTheme = localStorage.getItem('theme')
      const hasUserToggled = localStorage.getItem('hasUserToggled')
      
      if (savedTheme && hasUserToggled === 'true') {
        // User has explicitly chosen a theme, respect their choice
        setIsDark(savedTheme === 'dark')
        setHasUserPreference(true)
      } else if (savedTheme) {
        // First time visitor with saved theme, check if it matches system preference
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const savedThemeMatchesSystem = (savedTheme === 'dark') === systemPrefersDark
        
        if (savedThemeMatchesSystem) {
          // Theme matches system preference, use it
          setIsDark(savedTheme === 'dark')
        } else {
          // Theme doesn't match system preference, use system preference
          setIsDark(systemPrefersDark)
          localStorage.setItem('theme', systemPrefersDark ? 'dark' : 'light')
        }
      } else {
        // First time visitor, use system preference
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setIsDark(systemPrefersDark)
        localStorage.setItem('theme', systemPrefersDark ? 'dark' : 'light')
      }
    } catch (error) {
      console.error('Error setting theme:', error)
      // Fallback to dark theme
      setIsDark(true)
    }
  }, [])

  // Listen for system theme changes (only for users who haven't explicitly chosen)
  useEffect(() => {
    if (hasUserPreference) return // Don't listen if user has explicitly chosen

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      setIsDark(e.matches)
      localStorage.setItem('theme', e.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [hasUserPreference])

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.classList.toggle('light', !isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
    // Mark that user has explicitly chosen a theme
    localStorage.setItem('hasUserToggled', 'true')
    setHasUserPreference(true)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
