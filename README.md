# RenovateMatch - Designer-Client Connection Platform

A full-stack web application connecting interior designers with busy professionals who need renovation help. Built with Next.js, TypeScript, Prisma, and PostgreSQL.

## 🎯 Project Overview

**Mission**: Help busy corporate professionals renovate single rooms without the stress of decision fatigue by connecting them with expert designers offering affordable, tiered service packages.

### Market Research Insights
- **38%** of homeowners delay projects due to choice overwhelm
- Main pain points: decision fatigue (tiles, fixtures, colors), time constraints, budget uncertainty
- Optimal pricing: $150 consultation, $499 design package, $1,499+ full-service

## 🚀 Features

### For Clients
- **Browse Designers**: Filter by location, specialty, and rating
- **Compare Packages**: Three-tier pricing (Consultation, Design Package, Full-Service)
- **Dashboard**: Project tracking, messages, saved designers

### For Designers
- **Profile Management**: Portfolio, specialties, experience, verification badge
- **Package Creation**: Customizable service offerings with detailed features
- **Client Management**: Project tracking, messaging, reviews

### Platform Features
- **Smart Matching**: Filter designers by specialty (Modern, Traditional, etc.)
- **Rating System**: Star ratings and review counts
- **Secure Authentication**: Email/password with bcrypt hashing
- **Real-time Data**: PostgreSQL with Prisma ORM
- **Isolated Testing**: Playwright on port 3001 (separate from other apps)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router) + TypeScript
- **Database**: PostgreSQL + Prisma ORM
- **Styling**: Tailwind CSS 4
- **Authentication**: bcryptjs (ready for NextAuth integration)
- **Testing**: Playwright (isolated on port 3001)
- **Development**: Prisma Dev (local PostgreSQL server)

## 📦 Installation & Setup

### Prerequisites
- Node.js 20+
- npm

### Quick Start

```bash
# Navigate to project
cd renovation-match

# Install dependencies (already done)
npm install

# Start Prisma Dev server (if not running)
npx prisma dev

# Run database migrations (already done)
npx prisma migrate dev

# Seed database with sample data
npm run seed

# Start development server on port 3001
npm run dev
```

### Access the App
- **App**: http://localhost:3001
- **Port**: 3001 (isolated from other apps)

## 🧪 Testing

### Run E2E Tests
```bash
# Run all tests
npm run test:e2e

# Run with UI
npm run test:e2e:ui

# Run in headed mode (see browser)
npm run test:e2e:headed
```

### Test Coverage
- ✅ Homepage display and navigation
- ✅ Designer listing and filtering
- ✅ Authentication (login/register)
- ✅ User roles (Client/Designer)
- ✅ Dashboard access

## 🔐 Sample Credentials

```
Designers:
- sarah.designer@example.com / password123
- michael.designer@example.com / password123
- emma.designer@example.com / password123

Client:
- john.client@example.com / password123
```

## 📊 Database Schema

### Core Models
- **User**: Base user model with role (CLIENT/DESIGNER)
- **DesignerProfile**: Extended designer information, portfolio, ratings
- **Package**: Service offerings (CONSULTATION, DESIGN_PACKAGE, FULL_SERVICE)
- **Project**: Client-designer engagements
- **Message**: In-app messaging
- **Review**: Designer ratings and feedback
- **Payment**: Transaction tracking (Stripe-ready)

### Package Pricing Examples
**Consultation** ($125-$200)
- 1-hour expert consultation
- Style direction & color palette
- Product recommendations

**Design Package** ($399-$699)
- Complete design development
- 3D visualization
- Detailed specifications
- Shopping lists

**Full Service** ($1,299-$2,499+)
- Everything in Design Package
- Product procurement
- Contractor coordination
- Installation oversight

## 🎨 Designer Profiles

### Sarah Chen (San Francisco, CA)
- **Specialties**: Modern, Minimalist, Scandinavian
- **Experience**: 8 years
- **Rating**: 4.8/5 (24 reviews)
- **Starting at**: $150
- ✓ Verified

### Michael Rodriguez (Los Angeles, CA)
- **Specialties**: Contemporary, Industrial, Urban
- **Experience**: 12 years
- **Rating**: 4.9/5 (31 reviews)
- **Starting at**: $200
- ✓ Verified

### Emma Thompson (Seattle, WA)
- **Specialties**: Traditional, Transitional, Coastal
- **Experience**: 6 years
- **Rating**: 4.6/5 (18 reviews)
- **Starting at**: $125

## 🔄 API Endpoints

### Authentication
- `POST /api/auth/register` - Create new user
- `POST /api/auth/login` - User login

### Designers
- `GET /api/designers` - List all designers (with filters)
- `GET /api/designers/[id]` - Get designer details
- `POST /api/designers` - Create designer profile
- `PATCH /api/designers/[id]` - Update designer profile

### Packages
- `GET /api/packages` - List packages (filter by designer/type)
- `POST /api/packages` - Create package

### Projects
- `GET /api/projects` - List projects (filter by client/designer/status)
- `POST /api/projects` - Create project

## 🏗️ Project Structure

```
renovation-match/
├── app/
│   ├── api/              # API routes
│   │   ├── auth/         # Authentication
│   │   ├── designers/    # Designer endpoints
│   │   ├── packages/     # Package endpoints
│   │   └── projects/     # Project endpoints
│   ├── auth/             # Auth pages (login/register)
│   ├── dashboard/        # User dashboards
│   │   ├── client/       # Client dashboard
│   │   └── designer/     # Designer dashboard
│   ├── designers/        # Designer browsing
│   └── page.tsx          # Homepage
├── e2e/                  # Playwright tests
├── lib/                  # Utilities
│   ├── auth.ts           # Password hashing
│   └── prisma.ts         # Prisma client
├── prisma/
│   ├── schema.prisma     # Database schema
│   ├── seed.ts           # Sample data
│   └── migrations/       # Database migrations
└── playwright.config.ts  # Isolated test config (port 3001)
```

## 🌟 Key Differentiators

### Based on Market Research
1. **Decision Simplification**: Curated designer matches reduce choice overwhelm
2. **Transparent Pricing**: Clear package tiers eliminate budget anxiety
3. **Time-Optimized**: Async communication, quick consultations
4. **Verification System**: Trusted, vetted designers
5. **Specialty Matching**: Find designers by style preference

## 🔮 Future Enhancements

- [ ] Payment integration (Stripe)
- [ ] Real-time messaging
- [ ] File upload for portfolio/deliverables
- [ ] Advanced search filters
- [ ] Designer availability calendar
- [ ] Client review submission
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Analytics and insights
- [ ] Mobile app

## 🧑‍💻 Development

### Environment Variables
```env
DATABASE_URL=          # Prisma Postgres connection
NEXTAUTH_SECRET=       # Session secret
NEXTAUTH_URL=          # App URL (http://localhost:3001)
STRIPE_PUBLISHABLE_KEY= # Stripe public key
STRIPE_SECRET_KEY=     # Stripe secret key
```

### Database Commands
```bash
# Generate Prisma client
npx prisma generate

# Create migration
npx prisma migrate dev --name description

# Reset database
npx prisma migrate reset

# Open Prisma Studio
npx prisma studio
```

## 📝 Notes

- **Port 3001**: Isolated from other Playwright instances
- **Prisma Dev**: Local PostgreSQL server on ports 51213-51215
- **Design System**: Tailwind CSS with consistent spacing/colors
- **Type Safety**: Full TypeScript coverage
- **Best Practices**: Server components, API routes, error handling

## 🤝 Contributing

This is a portfolio/demonstration project showcasing:
- Full-stack development with Next.js 15
- Database design and relationships
- User authentication patterns
- E2E testing with Playwright
- Market-driven feature development
- Clean code architecture

---

**Built with research-driven insights from Perplexity AI**
Helping busy professionals renovate without the stress. 🏠✨
