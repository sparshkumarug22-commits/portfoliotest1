# Premium Portfolio SaaS

A production-ready luxury portfolio platform built with Next.js 15, TypeScript, Tailwind CSS, and Firebase.

## Features

### Public Pages
- **Home**: Hero section with animations, featured projects, services, testimonials, pricing
- **Portfolio**: Project showcase with filtering and search
- **Services**: Detailed service descriptions
- **Pricing**: Multiple subscription tiers with Stripe integration
- **Contact**: Contact form with lead capture

### Authentication
- Email/password signup and login
- Google OAuth integration
- Protected routes
- User profile management

### User Dashboard
- Project management
- Portfolio settings
- Analytics and metrics
- Subscription management

### Admin Dashboard (Coming Soon)
- Project management (CRUD)
- User management
- Analytics dashboard
- Testimonials management
- Pricing configuration

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Authentication**: Firebase Authentication
- **Database**: Firestore
- **Storage**: Firebase Storage
- **Payments**: Stripe
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Firebase project
- Stripe account

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfoliotest1.git
cd portfoliotest1
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
```bash
cp .env.example .env.local
```

Fill in your Firebase and Stripe credentials:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_key
STRIPE_SECRET_KEY=your_key
STRIPE_WEBHOOK_SECRET=your_secret
```

4. Run development server
```bash
npm run dev
```

Visit `http://localhost:3000`

## Project Structure

```
portfoliotest1/
├── app/
│   ├── api/
│   │   ├── contact/
│   │   ├── checkout/
│   │   └── webhooks/
│   ├── dashboard/
│   ├── login/
│   ├── signup/
│   ├── portfolio/
│   ├── services/
│   ├── pricing/
│   ├── contact/
│   ├── profile/
│   ├── layout.tsx
│   ├── globals.css
│   └── page.tsx
├── components/
│   ├── layout/
│   │   └── Navbar.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── FeaturedProjects.tsx
│       ├── ServicesSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── PricingSection.tsx
│       ├── CTASection.tsx
│       └── Footer.tsx
├── lib/
│   ├── firebase.ts
│   ├── stripe.ts
│   └── auth-context.tsx
├── public/
│   └── robots.txt
└── package.json
```

## Firestore Collections

### users
```
{
  email: string
  createdAt: timestamp
  subscription: string
  profile: {
    fullName: string
    bio: string
    location: string
    avatar: string
  }
}
```

### projects
```
{
  title: string
  description: string
  category: string
  imageUrl: string
  link: string
  createdAt: timestamp
  userId: string
}
```

### testimonials
```
{
  name: string
  role: string
  quote: string
  rating: number
  image: string
}
```

### contactLeads
```
{
  name: string
  email: string
  subject: string
  message: string
  createdAt: timestamp
  status: string
}
```

### subscriptions
```
{
  userId: string
  stripeCustomerId: string
  stripeSubscriptionId: string
  plan: string
  status: string
  currentPeriodEnd: timestamp
}
```

## Deployment

### Deploy to Vercel

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

```bash
vercel
```

## SEO

The site includes:
- Meta tags and OpenGraph
- Sitemap.xml
- robots.txt
- Structured data (coming soon)

## Performance

- Image optimization with Next.js Image
- Code splitting and lazy loading
- CSS-in-JS optimization
- Lighthouse score target: 90+

## Development

### Build
```bash
npm run build
```

### Type Check
```bash
npm run type-check
```

### Lint
```bash
npm run lint
```

## Contributing

1. Create a feature branch
2. Commit changes
3. Push to GitHub
4. Create Pull Request

## License

MIT

## Support

For support, email support@portfolio.example.com
