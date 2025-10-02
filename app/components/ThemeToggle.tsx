'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-700 animate-pulse" />
    )
  }

  return (
    <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
      <button
        onClick={() => setTheme('light')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
          theme === 'light'
            ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
        title="Light mode"
      >
        ☀️
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
          theme === 'system'
            ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
        title="System preference"
      >
        💻
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
          theme === 'dark'
            ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
        title="Dark mode"
      >
        🌙
      </button>
    </div>
  )
}
