import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-900">RenovateMatch</h1>
            <div className="flex gap-4">
              <Link
                href="/auth/login"
                className="text-slate-700 hover:text-slate-900 font-medium"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-semibold shadow-sm"
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section with Enhanced Copy */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ✨ Trusted by 500+ Busy Professionals
          </div>
          <h2 className="text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Your Dream Renovation,
            <br />
            <span className="text-blue-600">Without the Overwhelm</span>
          </h2>
          <p className="text-2xl text-slate-700 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
            Stop drowning in Pinterest boards and tile samples. Get matched with expert designers
            who understand your style, your budget, and your busy schedule.
          </p>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto">
            From first consultation to final installation, we make renovation decisions simple.
            <span className="font-semibold text-slate-900"> No endless meetings. No decision paralysis. Just beautiful results.</span>
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/designers"
              className="bg-blue-600 text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Find Your Designer →
            </Link>
            <Link
              href="/auth/register?role=designer"
              className="bg-white text-blue-600 border-2 border-blue-600 px-10 py-5 rounded-xl text-lg font-bold hover:bg-blue-50 transition shadow-lg"
            >
              Join as Designer
            </Link>
          </div>
        </div>

        {/* Before & After Showcase */}
        <div className="mt-24 mb-24">
          <h3 className="text-4xl font-bold text-center mb-4 text-slate-900">
            Real Transformations, Real Results
          </h3>
          <p className="text-center text-slate-600 mb-12 text-lg">
            See how our designers turn outdated spaces into stunning sanctuaries
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Kitchen Transformation */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
              <div className="grid grid-cols-2">
                {/* Before */}
                <div className="relative bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600 h-64 flex items-center justify-center">
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    BEFORE
                  </div>
                  <div className="text-center text-white p-6">
                    <div className="text-5xl mb-3">🍳</div>
                    <p className="text-sm opacity-90">Outdated 1990s kitchen</p>
                    <p className="text-xs opacity-75 mt-2">Dark cabinets, worn counters</p>
                  </div>
                </div>
                {/* After */}
                <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 h-64 flex items-center justify-center">
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    AFTER
                  </div>
                  <div className="text-center text-slate-800 p-6">
                    <div className="text-5xl mb-3">✨</div>
                    <p className="text-sm font-semibold">Modern culinary haven</p>
                    <p className="text-xs text-slate-600 mt-2">White shaker cabinets, quartz counters</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-slate-50">
                <h4 className="font-bold text-lg mb-2 text-slate-900">San Francisco Kitchen Makeover</h4>
                <p className="text-slate-600 text-sm mb-3">
                  Sarah helped us transform our dated kitchen into a bright, functional space perfect for entertaining.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">Designer: Sarah Chen</span>
                  <span className="text-slate-500 text-sm">$8,500 • 3 weeks</span>
                </div>
              </div>
            </div>

            {/* Bathroom Transformation */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
              <div className="grid grid-cols-2">
                {/* Before */}
                <div className="relative bg-gradient-to-br from-amber-700 via-amber-800 to-amber-900 h-64 flex items-center justify-center">
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    BEFORE
                  </div>
                  <div className="text-center text-white p-6">
                    <div className="text-5xl mb-3">🚿</div>
                    <p className="text-sm opacity-90">Cramped 80s bathroom</p>
                    <p className="text-xs opacity-75 mt-2">Beige tiles, poor lighting</p>
                  </div>
                </div>
                {/* After */}
                <div className="relative bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 h-64 flex items-center justify-center">
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    AFTER
                  </div>
                  <div className="text-center text-slate-800 p-6">
                    <div className="text-5xl mb-3">🛁</div>
                    <p className="text-sm font-semibold">Spa-like retreat</p>
                    <p className="text-xs text-slate-600 mt-2">Subway tiles, rainfall shower, natural light</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-slate-50">
                <h4 className="font-bold text-lg mb-2 text-slate-900">Los Angeles Bathroom Refresh</h4>
                <p className="text-slate-600 text-sm mb-3">
                  Michael guided every decision from tiles to fixtures. We love coming home to this spa experience!
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold">Designer: Michael Rodriguez</span>
                  <span className="text-slate-500 text-sm">$6,200 • 2 weeks</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Small Showcases */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-100 p-6 rounded-xl border-2 border-emerald-200">
              <div className="text-3xl mb-3">🏠</div>
              <h4 className="font-bold text-slate-900 mb-2">Powder Room Glow-Up</h4>
              <p className="text-slate-700 text-sm mb-2">Bold wallpaper + brass fixtures = instant luxury</p>
              <p className="text-emerald-700 font-semibold text-sm">$2,800 transformation</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-xl border-2 border-purple-200">
              <div className="text-3xl mb-3">👔</div>
              <h4 className="font-bold text-slate-900 mb-2">Master Suite Refresh</h4>
              <p className="text-slate-700 text-sm mb-2">Calming coastal vibes for better sleep</p>
              <p className="text-purple-700 font-semibold text-sm">$4,500 makeover</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-100 p-6 rounded-xl border-2 border-orange-200">
              <div className="text-3xl mb-3">☕</div>
              <h4 className="font-bold text-slate-900 mb-2">Breakfast Nook Magic</h4>
              <p className="text-slate-700 text-sm mb-2">Built-in seating + pendant lighting perfection</p>
              <p className="text-orange-700 font-semibold text-sm">$3,200 upgrade</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">End Decision Fatigue</h3>
            <p className="text-slate-700 leading-relaxed">
              <span className="font-semibold">No more paralysis.</span> Our designers curate the perfect
              tiles, fixtures, and colors based on your style—not endless options.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
            <div className="text-4xl mb-4">💸</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Transparent Pricing</h3>
            <p className="text-slate-700 leading-relaxed">
              <span className="font-semibold">Know exactly what you're paying.</span> From $150 consultations
              to full-service packages—no hidden fees, no surprises.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Built for Busy Lives</h3>
            <p className="text-slate-700 leading-relaxed">
              <span className="font-semibold">Your schedule, your pace.</span> Evening calls, weekend walkthroughs,
              async updates—renovation that fits your life.
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-24 bg-slate-50 rounded-2xl p-12 border border-slate-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Loved by Busy Professionals</h3>
            <div className="flex justify-center gap-8 text-center">
              <div>
                <div className="text-4xl font-extrabold text-blue-600">4.8★</div>
                <p className="text-slate-600 mt-1">Average Rating</p>
              </div>
              <div className="border-l border-slate-300"></div>
              <div>
                <div className="text-4xl font-extrabold text-blue-600">500+</div>
                <p className="text-slate-600 mt-1">Projects Completed</p>
              </div>
              <div className="border-l border-slate-300"></div>
              <div>
                <div className="text-4xl font-extrabold text-blue-600">98%</div>
                <p className="text-slate-600 mt-1">Would Recommend</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-yellow-400 text-xl mb-2">★★★★★</div>
              <p className="text-slate-700 mb-3 italic">
                "Finally, someone who gets that I don't have time to visit 12 tile shops. Sarah nailed it in one meeting."
              </p>
              <p className="text-slate-900 font-semibold">— Jessica M., Product Manager</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-yellow-400 text-xl mb-2">★★★★★</div>
              <p className="text-slate-700 mb-3 italic">
                "Transparent pricing, no upsells. Michael stayed on budget and the bathroom is gorgeous."
              </p>
              <p className="text-slate-900 font-semibold">— David L., Consultant</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-yellow-400 text-xl mb-2">★★★★★</div>
              <p className="text-slate-700 mb-3 italic">
                "Best investment ever. Emma handled everything while I focused on work. Zero stress!"
              </p>
              <p className="text-slate-900 font-semibold">— Rachel K., Lawyer</p>
            </div>
          </div>
        </div>

        {/* Packages Preview */}
        <div className="mt-24">
          <h3 className="text-4xl font-bold text-center mb-4 text-slate-900">
            Choose Your Service Level
          </h3>
          <p className="text-center text-slate-600 mb-12 text-lg">
            From quick guidance to complete project management—we've got you covered
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation Package */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-slate-200 hover:border-blue-300 transition">
              <h4 className="text-2xl font-bold mb-2 text-slate-900">Consultation</h4>
              <p className="text-5xl font-extrabold text-blue-600 mb-4">$150</p>
              <p className="text-slate-600 mb-6">Perfect for DIYers who need expert direction</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span className="text-slate-700">1-hour expert consultation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span className="text-slate-700">Custom style direction & color palette</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span className="text-slate-700">Curated product recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span className="text-slate-700">Follow-up email summary</span>
                </li>
              </ul>
            </div>

            {/* Design Package */}
            <div className="bg-gradient-to-b from-blue-600 to-blue-700 p-8 rounded-xl shadow-2xl border-2 border-blue-600 text-white transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-blue-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                ⭐ MOST POPULAR
              </div>
              <h4 className="text-2xl font-bold mb-2 mt-2">Design Package</h4>
              <p className="text-5xl font-extrabold mb-4">$499</p>
              <p className="text-blue-100 mb-6">Complete design solution, ready to execute</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2 text-xl">✓</span>
                  <span>Complete design development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2 text-xl">✓</span>
                  <span>3D visualization & mood boards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2 text-xl">✓</span>
                  <span>Detailed shopping list with links</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2 text-xl">✓</span>
                  <span>Installation guidance & timeline</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2 text-xl">✓</span>
                  <span>Two revision rounds included</span>
                </li>
              </ul>
            </div>

            {/* Full Service */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-slate-200 hover:border-blue-300 transition">
              <h4 className="text-2xl font-bold mb-2 text-slate-900">Full Service</h4>
              <p className="text-5xl font-extrabold text-blue-600 mb-4">$1,499+</p>
              <p className="text-slate-600 mb-6">White-glove service from start to finish</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span className="text-slate-700">Everything in Design Package</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span className="text-slate-700">Product procurement & delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span className="text-slate-700">Contractor coordination & oversight</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span className="text-slate-700">Quality control & installation checks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span className="text-slate-700">Final styling & finishing touches</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-16 text-center text-white shadow-2xl">
          <h3 className="text-4xl font-extrabold mb-4">
            Stop Stressing. Start Renovating.
          </h3>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join hundreds of busy professionals who trusted RenovateMatch to transform
            their spaces without the overwhelm.
          </p>
          <Link
            href="/designers"
            className="bg-white text-blue-600 px-12 py-5 rounded-xl text-lg font-bold hover:bg-slate-100 transition inline-block shadow-xl transform hover:scale-105"
          >
            Browse Designers Now →
          </Link>
          <p className="text-blue-200 text-sm mt-6">
            ✓ No commitment  ✓ Free browsing  ✓ Money-back guarantee
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="mb-2">&copy; 2025 RenovateMatch. Connecting designers with busy professionals.</p>
          <p className="text-sm text-slate-400">Your dream renovation, without the stress. 🏠✨</p>
        </div>
      </footer>
    </div>
  )
}
