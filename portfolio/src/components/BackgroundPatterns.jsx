import React from 'react'
import { useTheme } from '../contexts/ThemeContext.jsx'

const BackgroundPatterns = () => {
  const { isDark } = useTheme()

  // Don't show anything in light theme, keep starfield only in dark theme
  if (isDark) return null

  return null
}

export default BackgroundPatterns
