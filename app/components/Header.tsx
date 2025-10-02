import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  return (
    <header className="bg-white dark:bg-slate-900 shadow-sm border-b border-slate-200 dark:border-slate-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">
            RenovateMatch
          </Link>
          <div className="flex gap-4 items-center">
            <Link
              href="/designers"
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium transition"
            >
              Find Designers
            </Link>
            <ThemeToggle />
            <Link
              href="/auth/login"
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium transition"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 font-semibold shadow-sm transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
