'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'
type ThemeContextType = { theme: Theme; toggle: () => void }

const ThemeContext = createContext<ThemeContextType>({ theme: 'dark', toggle: () => {} })

export function useTheme() {
  return useContext(ThemeContext)
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved)
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light')
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  function toggle() {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div data-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  )
}
