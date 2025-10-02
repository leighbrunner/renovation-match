import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET all designers with optional filtering
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const location = searchParams.get('location')
    const specialty = searchParams.get('specialty')
    const minRating = searchParams.get('minRating')

    const where: any = {}

    if (location) {
      where.location = { contains: location, mode: 'insensitive' }
    }

    if (specialty) {
      where.specialties = { has: specialty }
    }

    if (minRating) {
      where.rating = { gte: parseFloat(minRating) }
    }

    const designers = await prisma.designerProfile.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
          },
        },
        packages: {
          where: { active: true },
        },
      },
      orderBy: {
        rating: 'desc',
      },
    })

    return NextResponse.json(designers)
  } catch (error) {
    console.error('Error fetching designers:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST create designer profile
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      userId,
      bio,
      specialties,
      yearsExperience,
      location,
      portfolio,
      hourlyRate,
    } = body

    // Validate required fields
    if (!userId || !bio || !specialties || !yearsExperience || !location) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if user exists and is a designer
    const user = await prisma.user.findUnique({
      where: { id: userId },
    })

    if (!user || user.role !== 'DESIGNER') {
      return NextResponse.json(
        { error: 'Invalid user or user is not a designer' },
        { status: 400 }
      )
    }

    // Create designer profile
    const designerProfile = await prisma.designerProfile.create({
      data: {
        userId,
        bio,
        specialties,
        yearsExperience,
        location,
        portfolio: portfolio || [],
        hourlyRate,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
          },
        },
      },
    })

    return NextResponse.json(designerProfile, { status: 201 })
  } catch (error) {
    console.error('Error creating designer profile:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
