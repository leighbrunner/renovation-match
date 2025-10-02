import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting database seed...')

  // Create sample designers
  const designer1 = await prisma.user.create({
    data: {
      email: 'sarah.designer@example.com',
      name: 'Sarah Chen',
      password: await bcrypt.hash('password123', 10),
      role: 'DESIGNER',
      avatar: null,
      phone: '+1-555-0101',
    },
  })

  const designer2 = await prisma.user.create({
    data: {
      email: 'michael.designer@example.com',
      name: 'Michael Rodriguez',
      password: await bcrypt.hash('password123', 10),
      role: 'DESIGNER',
      avatar: null,
      phone: '+1-555-0102',
    },
  })

  const designer3 = await prisma.user.create({
    data: {
      email: 'emma.designer@example.com',
      name: 'Emma Thompson',
      password: await bcrypt.hash('password123', 10),
      role: 'DESIGNER',
      avatar: null,
      phone: '+1-555-0103',
    },
  })

  // Create sample client
  const client1 = await prisma.user.create({
    data: {
      email: 'john.client@example.com',
      name: 'John Smith',
      password: await bcrypt.hash('password123', 10),
      role: 'CLIENT',
      avatar: null,
      phone: '+1-555-0201',
    },
  })

  // Create designer profiles
  const profile1 = await prisma.designerProfile.create({
    data: {
      userId: designer1.id,
      bio: 'Award-winning interior designer specializing in modern minimalist spaces. I help busy professionals create calm, functional environments that reduce decision fatigue and enhance daily living.',
      specialties: ['Modern', 'Minimalist', 'Scandinavian'],
      yearsExperience: 8,
      location: 'San Francisco, CA',
      portfolio: [
        {
          imageUrl: '/portfolio/modern-kitchen.jpg',
          title: 'Modern Kitchen Renovation',
          description: 'Complete kitchen transformation with clean lines and smart storage',
        },
        {
          imageUrl: '/portfolio/minimalist-bathroom.jpg',
          title: 'Spa-Inspired Bathroom',
          description: 'Serene bathroom design with natural materials',
        },
      ],
      hourlyRate: 150,
      rating: 4.8,
      reviewCount: 24,
      verified: true,
    },
  })

  const profile2 = await prisma.designerProfile.create({
    data: {
      userId: designer2.id,
      bio: 'Expert in transforming outdated spaces into contemporary havens. My approach focuses on maximizing functionality while maintaining aesthetic appeal, perfect for time-constrained professionals.',
      specialties: ['Contemporary', 'Industrial', 'Urban'],
      yearsExperience: 12,
      location: 'Los Angeles, CA',
      portfolio: [
        {
          imageUrl: '/portfolio/industrial-loft.jpg',
          title: 'Industrial Loft Conversion',
          description: 'Urban loft with exposed brick and modern fixtures',
        },
      ],
      hourlyRate: 200,
      rating: 4.9,
      reviewCount: 31,
      verified: true,
    },
  })

  const profile3 = await prisma.designerProfile.create({
    data: {
      userId: designer3.id,
      bio: 'Passionate about creating warm, inviting spaces that tell your story. I specialize in helping busy clients make confident design decisions without the overwhelming research.',
      specialties: ['Traditional', 'Transitional', 'Coastal'],
      yearsExperience: 6,
      location: 'Seattle, WA',
      portfolio: [],
      hourlyRate: 125,
      rating: 4.6,
      reviewCount: 18,
      verified: false,
    },
  })

  // Create packages for each designer
  // Sarah's packages
  await prisma.package.create({
    data: {
      designerId: profile1.id,
      type: 'CONSULTATION',
      name: 'Design Consultation',
      description: 'One-hour consultation to discuss your vision, challenges, and key decisions. Receive expert guidance on color palettes, style direction, and product recommendations.',
      price: 150,
      features: [
        '1-hour video consultation',
        'Style direction & mood board',
        'Color palette recommendations',
        'Key product suggestions',
        'Follow-up email summary',
      ],
      deliveryDays: 1,
      active: true,
    },
  })

  await prisma.package.create({
    data: {
      designerId: profile1.id,
      type: 'DESIGN_PACKAGE',
      name: 'Complete Design Package',
      description: 'Comprehensive design solution including 3D visualization, detailed specifications, and shopping lists. Everything you need to execute your renovation with confidence.',
      price: 499,
      features: [
        'Complete design development',
        '3D visualization renders',
        'Detailed floor plan',
        'Material & finish specifications',
        'Complete shopping list with links',
        'Installation guide',
        'Two revision rounds',
      ],
      deliveryDays: 7,
      active: true,
    },
  })

  await prisma.package.create({
    data: {
      designerId: profile1.id,
      type: 'FULL_SERVICE',
      name: 'Full-Service Design',
      description: 'Turnkey design and project management. From concept to completion, I handle everything so you can focus on your work and life.',
      price: 1499,
      features: [
        'Everything in Design Package',
        'Product procurement',
        'Contractor coordination',
        'Installation oversight',
        'Quality assurance',
        'Styling & finishing touches',
        'Unlimited revisions',
      ],
      deliveryDays: 30,
      active: true,
    },
  })

  // Michael's packages
  await prisma.package.create({
    data: {
      designerId: profile2.id,
      type: 'CONSULTATION',
      name: 'Expert Consultation',
      description: 'Intensive consultation session focused on solving your biggest design challenges and creating an actionable plan.',
      price: 200,
      features: [
        '90-minute consultation',
        'Problem-solving session',
        'Design strategy document',
        'Product recommendations',
        '1-week email support',
      ],
      deliveryDays: 1,
      active: true,
    },
  })

  await prisma.package.create({
    data: {
      designerId: profile2.id,
      type: 'DESIGN_PACKAGE',
      name: 'Premium Design Package',
      description: 'High-end design solution with photorealistic renderings and premium material selections. Perfect for discerning clients.',
      price: 699,
      features: [
        'Premium design development',
        'Photorealistic 3D renders',
        'Custom floor plan',
        'Premium material selections',
        'Detailed specifications',
        'Shopping list & sourcing',
        'Three revision rounds',
      ],
      deliveryDays: 10,
      active: true,
    },
  })

  await prisma.package.create({
    data: {
      designerId: profile2.id,
      type: 'FULL_SERVICE',
      name: 'White Glove Service',
      description: 'Premium full-service experience with dedicated project management and concierge-level support.',
      price: 2499,
      features: [
        'Everything in Premium Design',
        'Dedicated project manager',
        'Product procurement & delivery',
        'Contractor management',
        'Quality control inspections',
        'Styling services',
        'Priority support',
      ],
      deliveryDays: 45,
      active: true,
    },
  })

  // Emma's packages
  await prisma.package.create({
    data: {
      designerId: profile3.id,
      type: 'CONSULTATION',
      name: 'Getting Started Session',
      description: 'Friendly consultation to help you understand your options and make confident first steps in your renovation journey.',
      price: 125,
      features: [
        '1-hour consultation',
        'Style exploration',
        'Budget planning tips',
        'Product recommendations',
        'Action plan',
      ],
      deliveryDays: 1,
      active: true,
    },
  })

  await prisma.package.create({
    data: {
      designerId: profile3.id,
      type: 'DESIGN_PACKAGE',
      name: 'Essential Design Package',
      description: 'Affordable, comprehensive design solution that covers all the essentials for a successful renovation.',
      price: 399,
      features: [
        'Full design concept',
        '3D visualization',
        'Floor plan',
        'Material specifications',
        'Shopping list',
        'Installation tips',
        'One revision round',
      ],
      deliveryDays: 5,
      active: true,
    },
  })

  await prisma.package.create({
    data: {
      designerId: profile3.id,
      type: 'FULL_SERVICE',
      name: 'Guided Full Service',
      description: 'Hands-on support throughout your renovation with personalized guidance at every step.',
      price: 1299,
      features: [
        'Everything in Essential Design',
        'Product ordering assistance',
        'Contractor recommendations',
        'Progress check-ins',
        'Problem-solving support',
        'Final styling',
      ],
      deliveryDays: 30,
      active: true,
    },
  })

  console.log('Database seeded successfully!')
  console.log('Sample credentials:')
  console.log('Designer: sarah.designer@example.com / password123')
  console.log('Designer: michael.designer@example.com / password123')
  console.log('Designer: emma.designer@example.com / password123')
  console.log('Client: john.client@example.com / password123')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
