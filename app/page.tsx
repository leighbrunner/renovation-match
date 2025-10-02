import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-900">RenovateMatch</h1>
            <div className="flex gap-4">
              <Link
                href="/auth/login"
                className="text-slate-600 hover:text-slate-900"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Transform Your Space Without the Stress
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Connect with expert designers who make renovation decisions simple.
            Perfect for busy professionals who want beautiful results without the
            overwhelm.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/designers"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Find a Designer
            </Link>
            <Link
              href="/auth/register?role=designer"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition"
            >
              Become a Designer
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
            <p className="text-slate-600">
              Skip the decision fatigue. Our designers help you choose tiles,
              fixtures, and colors with confidence.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-3">Affordable Packages</h3>
            <p className="text-slate-600">
              From $150 consultations to full-service packages. Quality design at
              prices that work for busy professionals.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-3xl mb-4">⏱️</div>
            <h3 className="text-xl font-semibold mb-3">Time-Saving Process</h3>
            <p className="text-slate-600">
              Designed for your schedule. Get expert help without endless meetings
              or time-consuming research.
            </p>
          </div>
        </div>

        {/* Packages Preview */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12">
            Choose Your Service Level
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation Package */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-slate-200">
              <h4 className="text-2xl font-bold mb-2">Consultation</h4>
              <p className="text-4xl font-bold text-blue-600 mb-4">$150</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>1-hour expert consultation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Style direction & color palette</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Key product recommendations</span>
                </li>
              </ul>
            </div>

            {/* Design Package */}
            <div className="bg-gradient-to-b from-blue-600 to-blue-700 p-8 rounded-xl shadow-lg border-2 border-blue-600 text-white transform scale-105">
              <div className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                MOST POPULAR
              </div>
              <h4 className="text-2xl font-bold mb-2">Design Package</h4>
              <p className="text-4xl font-bold mb-4">$499</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Complete design development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>3D visualization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Detailed shopping list</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">✓</span>
                  <span>Installation guidance</span>
                </li>
              </ul>
            </div>

            {/* Full Service */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-slate-200">
              <h4 className="text-2xl font-bold mb-2">Full Service</h4>
              <p className="text-4xl font-bold text-blue-600 mb-4">$1,499+</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Everything in Design Package</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Product procurement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Contractor coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Installation oversight</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 bg-blue-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Renovation?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Browse our vetted designers and find the perfect match for your
            project.
          </p>
          <Link
            href="/designers"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-100 transition inline-block"
          >
            View Designers
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-slate-600">
          <p>&copy; 2025 RenovateMatch. Connecting designers with busy professionals.</p>
        </div>
      </footer>
    </div>
  )
}
