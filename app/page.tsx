import Link from 'next/link'
import Image from 'next/image'
import { Header } from './components/Header'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <Header />

      {/* Hero Section with Enhanced Copy */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            ✨ Trusted by 500+ Busy Professionals
          </div>
          <h2 className="text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            Your Dream Renovation,
            <br />
            <span className="text-blue-600 dark:text-blue-400">Without the Overwhelm</span>
          </h2>
          <p className="text-2xl text-slate-700 dark:text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
            Stop drowning in Pinterest boards and tile samples. Get matched with expert designers
            who understand your style, your budget, and your busy schedule.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
            From first consultation to final installation, we make renovation decisions simple.
            <span className="font-semibold text-slate-900 dark:text-white"> No endless meetings. No decision paralysis. Just beautiful results.</span>
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/designers"
              className="bg-blue-600 dark:bg-blue-500 text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-blue-700 dark:hover:bg-blue-600 transition shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Find Your Designer →
            </Link>
            <Link
              href="/auth/register?role=designer"
              className="bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 px-10 py-5 rounded-xl text-lg font-bold hover:bg-blue-50 dark:hover:bg-slate-700 transition shadow-lg"
            >
              Join as Designer
            </Link>
          </div>
        </div>

        {/* Before & After Showcase */}
        <div className="mt-24 mb-24">
          <h3 className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
            Real Transformations, Real Results
          </h3>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 text-lg">
            See how our designers turn outdated spaces into stunning sanctuaries
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Kitchen Transformation */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
              <div className="grid grid-cols-2">
                {/* Before */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/transformations/kitchen-before.jpg"
                    alt="Outdated 1990s kitchen with dark cabinets"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    BEFORE
                  </div>
                </div>
                {/* After */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/transformations/kitchen-after.jpg"
                    alt="Modern bright kitchen with white cabinets"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    AFTER
                  </div>
                </div>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-800/50">
                <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">San Francisco Kitchen Makeover</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                  Sarah helped us transform our dated kitchen into a bright, functional space perfect for entertaining.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">Designer: Sarah Chen</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">$8,500 • 3 weeks</span>
                </div>
              </div>
            </div>

            {/* Bathroom Transformation */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
              <div className="grid grid-cols-2">
                {/* Before */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/transformations/bathroom-before.jpg"
                    alt="Cramped 1980s bathroom with beige tiles"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    BEFORE
                  </div>
                </div>
                {/* After */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/transformations/bathroom-after.jpg"
                    alt="Modern spa-like bathroom with subway tiles"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    AFTER
                  </div>
                </div>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-800/50">
                <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">Los Angeles Bathroom Refresh</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                  Michael guided every decision from tiles to fixtures. We love coming home to this spa experience!
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">Designer: Michael Rodriguez</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">$6,200 • 2 weeks</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Small Showcases */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border-2 border-emerald-200 dark:border-emerald-800">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/transformations/powder-room.jpg"
                  alt="Powder room with bold wallpaper and brass fixtures"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Powder Room Glow-Up</h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm mb-2">Bold wallpaper + brass fixtures = instant luxury</p>
                <p className="text-emerald-700 dark:text-emerald-400 font-semibold text-sm">$2,800 transformation</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border-2 border-purple-200 dark:border-purple-800">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/transformations/master-suite.jpg"
                  alt="Calming coastal master suite bedroom"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Master Suite Refresh</h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm mb-2">Calming coastal vibes for better sleep</p>
                <p className="text-purple-700 dark:text-purple-400 font-semibold text-sm">$4,500 makeover</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border-2 border-orange-200 dark:border-orange-800">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/transformations/breakfast-nook.jpg"
                  alt="Modern breakfast nook with built-in seating"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Breakfast Nook Magic</h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm mb-2">Built-in seating + pendant lighting perfection</p>
                <p className="text-orange-700 dark:text-orange-400 font-semibold text-sm">$3,200 upgrade</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">End Decision Fatigue</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">No more paralysis.</span> Our designers curate the perfect
              tiles, fixtures, and colors based on your style—not endless options.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="text-4xl mb-4">💸</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Transparent Pricing</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Know exactly what you're paying.</span> From $150 consultations
              to full-service packages—no hidden fees, no surprises.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Built for Busy Lives</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Your schedule, your pace.</span> Evening calls, weekend walkthroughs,
              async updates—renovation that fits your life.
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-24 bg-slate-50 dark:bg-slate-800 rounded-2xl p-12 border border-slate-200 dark:border-slate-700">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Loved by Busy Professionals</h3>
            <div className="flex justify-center gap-8 text-center">
              <div>
                <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">4.8★</div>
                <p className="text-slate-600 dark:text-slate-400 mt-1">Average Rating</p>
              </div>
              <div className="border-l border-slate-300 dark:border-slate-600"></div>
              <div>
                <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">500+</div>
                <p className="text-slate-600 dark:text-slate-400 mt-1">Projects Completed</p>
              </div>
              <div className="border-l border-slate-300 dark:border-slate-600"></div>
              <div>
                <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">98%</div>
                <p className="text-slate-600 dark:text-slate-400 mt-1">Would Recommend</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
              <div className="text-yellow-400 text-xl mb-2">★★★★★</div>
              <p className="text-slate-700 dark:text-slate-300 mb-3 italic">
                "Finally, someone who gets that I don't have time to visit 12 tile shops. Sarah nailed it in one meeting."
              </p>
              <p className="text-slate-900 dark:text-white font-semibold">— Jessica M., Product Manager</p>
            </div>
            <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
              <div className="text-yellow-400 text-xl mb-2">★★★★★</div>
              <p className="text-slate-700 dark:text-slate-300 mb-3 italic">
                "Transparent pricing, no upsells. Michael stayed on budget and the bathroom is gorgeous."
              </p>
              <p className="text-slate-900 dark:text-white font-semibold">— David L., Consultant</p>
            </div>
            <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
              <div className="text-yellow-400 text-xl mb-2">★★★★★</div>
              <p className="text-slate-700 dark:text-slate-300 mb-3 italic">
                "Best investment ever. Emma handled everything while I focused on work. Zero stress!"
              </p>
              <p className="text-slate-900 dark:text-white font-semibold">— Rachel K., Lawyer</p>
            </div>
          </div>
        </div>

        {/* Packages Preview */}
        <div className="mt-24">
          <h3 className="text-4xl font-bold text-center mb-4 text-slate-900 dark:text-white">
            Choose Your Service Level
          </h3>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 text-lg">
            From quick guidance to complete project management—we've got you covered
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Consultation Package */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border-2 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 transition">
              <h4 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Consultation</h4>
              <p className="text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-4">$150</p>
              <p className="text-slate-600 dark:text-slate-400 mb-6">Perfect for DIYers who need expert direction</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 dark:text-green-400 mr-2 text-xl">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">1-hour expert consultation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 dark:text-green-400 mr-2 text-xl">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Custom style direction & color palette</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 dark:text-green-400 mr-2 text-xl">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Curated product recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 dark:text-green-400 mr-2 text-xl">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Follow-up email summary</span>
                </li>
              </ul>
            </div>

            {/* Design Package */}
            <div className="bg-gradient-to-b from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 p-8 rounded-xl shadow-2xl border-2 border-blue-600 dark:border-blue-500 text-white transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-blue-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                ⭐ MOST POPULAR
              </div>
              <h4 className="text-2xl font-bold mb-2 mt-2">Design Package</h4>
              <p className="text-5xl font-extrabold mb-4">$499</p>
              <p className="text-blue-100 dark:text-blue-200 mb-6">Complete design solution, ready to execute</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-yellow-300 dark:text-yellow-200 mr-2 text-xl">✓</span>
                  <span>Complete design development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 dark:text-yellow-200 mr-2 text-xl">✓</span>
                  <span>3D visualization & mood boards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 dark:text-yellow-200 mr-2 text-xl">✓</span>
                  <span>Detailed shopping list with links</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 dark:text-yellow-200 mr-2 text-xl">✓</span>
                  <span>Installation guidance & timeline</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 dark:text-yellow-200 mr-2 text-xl">✓</span>
                  <span>Two revision rounds included</span>
                </li>
              </ul>
            </div>

            {/* Full Service */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg border-2 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 transition">
              <h4 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Full Service</h4>
              <p className="text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-4">$1,499+</p>
              <p className="text-slate-600 dark:text-slate-400 mb-6">White-glove service from start to finish</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 dark:text-green-400 mr-2 text-xl">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Everything in Design Package</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 dark:text-green-400 mr-2 text-xl">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Product procurement & delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 dark:text-green-400 mr-2 text-xl">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Contractor coordination & oversight</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 dark:text-green-400 mr-2 text-xl">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Quality control & installation checks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 dark:text-green-400 mr-2 text-xl">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Final styling & finishing touches</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-2xl p-16 text-center text-white shadow-2xl">
          <h3 className="text-4xl font-extrabold mb-4">
            Stop Stressing. Start Renovating.
          </h3>
          <p className="text-xl mb-8 text-blue-100 dark:text-blue-200 max-w-2xl mx-auto">
            Join hundreds of busy professionals who trusted RenovateMatch to transform
            their spaces without the overwhelm.
          </p>
          <Link
            href="/designers"
            className="bg-white text-blue-600 dark:bg-slate-900 dark:text-blue-400 px-12 py-5 rounded-xl text-lg font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition inline-block shadow-xl transform hover:scale-105"
          >
            Browse Designers Now →
          </Link>
          <p className="text-blue-200 dark:text-blue-300 text-sm mt-6">
            ✓ No commitment  ✓ Free browsing  ✓ Money-back guarantee
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-slate-300 dark:text-slate-400 mt-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="mb-2">&copy; 2025 RenovateMatch. Connecting designers with busy professionals.</p>
          <p className="text-sm text-slate-400">Your dream renovation, without the stress. 🏠✨</p>
        </div>
      </footer>
    </div>
  )
}
