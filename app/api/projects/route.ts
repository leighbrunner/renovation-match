import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { ProjectStatus, RoomType } from '@prisma/client'

// GET all projects
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const clientId = searchParams.get('clientId')
    const designerId = searchParams.get('designerId')
    const status = searchParams.get('status')

    const where: Record<string, unknown> = {}

    if (clientId) {
      where.clientId = clientId
    }

    if (designerId) {
      where.designerId = designerId
    }

    if (status) {
      where.status = status as ProjectStatus
    }

    const projects = await prisma.project.findMany({
      where,
      include: {
        client: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
          },
        },
        designer: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
          },
        },
        package: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(projects)
  } catch (error) {
    console.error('Error fetching projects:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST create project
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      clientId,
      designerId,
      packageId,
      title,
      description,
      roomType,
      budget,
      requirements,
    } = body

    // Validate required fields
    if (!clientId || !designerId || !packageId || !title || !description || !roomType || !budget) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create project
    const project = await prisma.project.create({
      data: {
        clientId,
        designerId,
        packageId,
        title,
        description,
        roomType: roomType as RoomType,
        budget,
        requirements,
        deliverables: [],
      },
      include: {
        client: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        designer: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        package: true,
      },
    })

    return NextResponse.json(project, { status: 201 })
  } catch (error) {
    console.error('Error creating project:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
