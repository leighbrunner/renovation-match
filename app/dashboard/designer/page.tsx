import Link from 'next/link'

export default function DesignerDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-slate-900">
              RenovateMatch
            </Link>
            <div className="flex gap-4">
              <Link href="/designers" className="text-slate-600 hover:text-slate-900">
                View All Designers
              </Link>
              <Link href="/" className="text-blue-600 hover:underline">
                Logout
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Designer Dashboard</h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Active Projects</h3>
            <p className="text-3xl font-bold text-blue-600 mb-2">0</p>
            <p className="text-slate-600">No active projects</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Messages</h3>
            <p className="text-3xl font-bold text-blue-600 mb-2">0</p>
            <p className="text-slate-600">No new messages</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Profile Views</h3>
            <p className="text-3xl font-bold text-blue-600 mb-2">--</p>
            <p className="text-slate-600">Complete your profile</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">My Packages</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-slate-600 mb-4">
              You haven't created any packages yet. Create your service packages to start
              receiving client inquiries.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Create Package
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Profile Completion</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-semibold mb-2">Complete your designer profile</h3>
            <p className="text-slate-700 mb-4">
              Add your bio, portfolio, and packages to start attracting clients.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Complete Profile
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
