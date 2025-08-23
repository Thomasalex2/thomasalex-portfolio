import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext.jsx'
import { HiSun, HiMoon } from 'react-icons/hi'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <HiSun size={20} className="text-yellow-400" />
        ) : (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <HiMoon size={20} className="text-blue-400" />
          </motion.div>
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
