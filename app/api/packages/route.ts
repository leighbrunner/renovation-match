import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { PackageType } from '@prisma/client'

// GET all packages
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const designerId = searchParams.get('designerId')
    const type = searchParams.get('type')

    const where: any = { active: true }

    if (designerId) {
      where.designerId = designerId
    }

    if (type) {
      where.type = type as PackageType
    }

    const packages = await prisma.package.findMany({
      where,
      include: {
        designer: {
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
        },
      },
      orderBy: {
        price: 'asc',
      },
    })

    return NextResponse.json(packages)
  } catch (error) {
    console.error('Error fetching packages:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST create package
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      designerId,
      type,
      name,
      description,
      price,
      features,
      deliveryDays,
    } = body

    // Validate required fields
    if (!designerId || !type || !name || !description || !price || !features || !deliveryDays) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create package
    const newPackage = await prisma.package.create({
      data: {
        designerId,
        type,
        name,
        description,
        price,
        features,
        deliveryDays,
      },
      include: {
        designer: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
    })

    return NextResponse.json(newPackage, { status: 201 })
  } catch (error) {
    console.error('Error creating package:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
