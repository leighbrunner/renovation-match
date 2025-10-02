import Link from 'next/link'
import { Header } from '../../components/Header'

export default function ClientDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Client Dashboard</h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">My Projects</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">You have no active projects yet.</p>
            <Link
              href="/designers"
              className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 inline-block"
            >
              Find a Designer
            </Link>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Messages</h3>
            <p className="text-slate-600 dark:text-slate-400">No new messages</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Saved Designers</h3>
            <p className="text-slate-600 dark:text-slate-400">No saved designers yet</p>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Welcome to RenovateMatch!</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            You're ready to start your renovation journey. Browse our vetted designers,
            compare packages, and find the perfect match for your project.
          </p>
          <Link
            href="/designers"
            className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 inline-block"
          >
            Browse Designers
          </Link>
        </div>
      </main>
    </div>
  )
}
