import Link from 'next/link'

export default function ClientDashboard() {
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
                Find Designers
              </Link>
              <Link href="/" className="text-blue-600 hover:underline">
                Logout
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Client Dashboard</h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">My Projects</h3>
            <p className="text-slate-600 mb-4">You have no active projects yet.</p>
            <Link
              href="/designers"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 inline-block"
            >
              Find a Designer
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Messages</h3>
            <p className="text-slate-600">No new messages</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Saved Designers</h3>
            <p className="text-slate-600">No saved designers yet</p>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Welcome to RenovateMatch!</h2>
          <p className="text-slate-700 mb-4">
            You're ready to start your renovation journey. Browse our vetted designers,
            compare packages, and find the perfect match for your project.
          </p>
          <Link
            href="/designers"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block"
          >
            Browse Designers
          </Link>
        </div>
      </main>
    </div>
  )
}
