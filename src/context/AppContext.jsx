import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from '../i18n'

const AppContext = createContext(null)

function readStorage(key) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* ignore */
  }
}

export function AppProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = readStorage('lang')
    return saved === 'en' || saved === 'fr' ? saved : 'fr'
  })

  const [theme, setTheme] = useState(() => {
    const saved = readStorage('theme')
    if (saved === 'dark' || saved === 'light') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    writeStorage('theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang
    writeStorage('lang', lang)
  }, [lang])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  const value = { lang, setLang, theme, toggleTheme, t: translations[lang] }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp doit être utilisé dans <AppProvider>')
  return ctx
}