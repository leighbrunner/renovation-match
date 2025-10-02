import Link from 'next/link'
import { Header } from '../../components/Header'

export default function DesignerDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Designer Dashboard</h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Active Projects</h3>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">0</p>
            <p className="text-slate-600 dark:text-slate-400">No active projects</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Messages</h3>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">0</p>
            <p className="text-slate-600 dark:text-slate-400">No new messages</p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Profile Views</h3>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">--</p>
            <p className="text-slate-600 dark:text-slate-400">Complete your profile</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">My Packages</h2>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border border-slate-200 dark:border-slate-700">
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              You haven't created any packages yet. Create your service packages to start
              receiving client inquiries.
            </p>
            <button className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600">
              Create Package
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Profile Completion</h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <h3 className="font-semibold mb-2 dark:text-white">Complete your designer profile</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Add your bio, portfolio, and packages to start attracting clients.
            </p>
            <button className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600">
              Complete Profile
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
