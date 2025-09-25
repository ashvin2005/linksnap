import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {isDark ? <Sun className="theme-icon" size={20} /> : <Moon className="theme-icon" size={20} />}
    </button>
  )
}

export default ThemeToggle