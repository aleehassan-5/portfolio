import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <motion.button
      onClick={onToggle}
      className="w-9 h-9 rounded-lg flex items-center justify-center card transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -30, opacity: 0 }}
        animate={{ rotate: 0,   opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        {theme === 'dark'
          ? <Sun  size={15} color="var(--primary)" />
          : <Moon size={15} color="var(--primary)" />
        }
      </motion.div>
    </motion.button>
  )
}
