'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Header } from '../components/Header'

interface Designer {
  id: string
  bio: string
  specialties: string[]
  yearsExperience: number
  location: string
  rating: number
  reviewCount: number
  verified: boolean
  user: {
    id: string
    name: string
    email: string
    avatar: string | null
  }
  packages: { id: string; price: number }[]
}

export default function DesignersPage() {
  const [designers, setDesigners] = useState<Designer[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    location: '',
    specialty: '',
    minRating: '',
  })

  const fetchDesigners = React.useCallback(async () => {
    try {
      const params = new URLSearchParams()
      if (filters.location) params.append('location', filters.location)
      if (filters.specialty) params.append('specialty', filters.specialty)
      if (filters.minRating) params.append('minRating', filters.minRating)

      const response = await fetch(`/api/designers?${params}`)
      const data = await response.json()
      setDesigners(data)
    } catch (error) {
      console.error('Error fetching designers:', error)
    } finally {
      setLoading(false)
    }
  }, [filters])

  useEffect(() => {
    fetchDesigners()
  }, [fetchDesigners])

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }

  const applyFilters = () => {
    setLoading(true)
    fetchDesigners()
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Find Your Designer</h1>

        {/* Filters */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md mb-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-lg font-semibold mb-4 dark:text-white">Filter Designers</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={filters.location}
              onChange={handleFilterChange}
              className="border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg px-4 py-2"
            />
            <input
              type="text"
              name="specialty"
              placeholder="Specialty (e.g., Modern)"
              value={filters.specialty}
              onChange={handleFilterChange}
              className="border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg px-4 py-2"
            />
            <select
              name="minRating"
              value={filters.minRating}
              onChange={handleFilterChange}
              className="border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg px-4 py-2"
            >
              <option value="">Any Rating</option>
              <option value="3">3+ Stars</option>
              <option value="4">4+ Stars</option>
              <option value="4.5">4.5+ Stars</option>
            </select>
            <button
              onClick={applyFilters}
              className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600"
            >
              Apply Filters
            </button>
          </div>
        </div>

        {/* Designers List */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400">Loading designers...</p>
          </div>
        ) : designers.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
            <p className="text-slate-600 dark:text-slate-400">No designers found. Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designers.map((designer) => (
              <div key={designer.id} className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition border border-slate-200 dark:border-slate-700">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {designer.user.name}
                      {designer.verified && (
                        <span className="ml-2 text-blue-600 dark:text-blue-400">✓</span>
                      )}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{designer.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="font-semibold dark:text-white">{designer.rating.toFixed(1)}</span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">({designer.reviewCount} reviews)</p>
                  </div>
                </div>

                <p className="text-slate-700 dark:text-slate-300 mb-4 line-clamp-3">{designer.bio}</p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-2">
                    {designer.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-3 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  <span className="font-semibold">{designer.yearsExperience}</span> years experience
                </div>

                {designer.packages.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                      Starting at ${Math.min(...designer.packages.map(p => p.price))}
                    </p>
                  </div>
                )}

                <Link
                  href={`/designers/${designer.id}`}
                  className="block w-full text-center bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition"
                >
                  View Profile
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
