## Database Schema

### Users Collection
```
{
  userId: string (doc id)
  email: string
  createdAt: timestamp
  subscription: "free" | "basic" | "pro" | "enterprise"
  profile: {
    fullName: string
    bio: string
    location: string
    avatar: string (Firebase Storage URL)
  }
  stripe: {
    customerId: string
    subscriptionId: string
  }
}
```

### Projects Collection
```
{
  projectId: string (doc id)
  userId: string (creator)
  title: string
  description: string
  category: string
  imageUrl: string (Firebase Storage)
  link: string
  featured: boolean
  createdAt: timestamp
  updatedAt: timestamp
}
```

### Testimonials Collection
```
{
  testimonialId: string (doc id)
  name: string
  role: string
  quote: string
  rating: number (1-5)
  image: string (Firebase Storage)
  createdAt: timestamp
}
```

### Contact Leads Collection
```
{
  leadId: string (doc id)
  name: string
  email: string
  subject: string
  message: string
  status: "new" | "read" | "replied"
  createdAt: timestamp
  repliedAt: timestamp
}
```

### Subscriptions Collection
```
{
  subscriptionId: string (doc id = Stripe subscription ID)
  userId: string
  stripeCustomerId: string
  stripeSubscriptionId: string
  plan: "basic" | "pro" | "enterprise"
  status: "active" | "past_due" | "canceled" | "trialing"
  currentPeriodStart: timestamp
  currentPeriodEnd: timestamp
  canceledAt: timestamp
  updatedAt: timestamp
}
```

### Invoices Collection
```
{
  invoiceId: string (doc id = Stripe invoice ID)
  userId: string
  subscriptionId: string
  amount: number (in cents)
  currency: string
  status: "paid" | "draft" | "open" | "uncollectible" | "void"
  paidAt: timestamp
  createdAt: timestamp
}
```

### Pricing Plans Collection
```
{
  planId: string (doc id)
  name: string
  price: number
  period: "month" | "year"
  description: string
  features: string[]
  stripePriceId: string
  active: boolean
  displayOrder: number
}
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Create account
- `POST /api/auth/login` - Login (Firebase handled client-side)
- `POST /api/auth/logout` - Logout

### Contact
- `POST /api/contact` - Submit contact form

### Payments
- `POST /api/checkout` - Create checkout session
- `POST /api/webhooks/stripe` - Stripe webhook handler

### Projects (Future)
- `GET /api/projects` - List projects
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Users (Future)
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile
- `GET /api/users/subscription` - Get subscription

## Authentication Flow

1. User signs up with email/password or Google
2. Firebase Authentication creates user account
3. Firestore user document created with uid as docId
4. Auth context updates on client
5. User redirected to dashboard

## Payment Flow

1. User selects plan on pricing page
2. Click "Get Started" → `/checkout?plan=pro`
3. Create Stripe checkout session
4. User completes payment on Stripe
5. Stripe webhook triggers
6. Subscription created in Firestore
7. User account upgraded

## Storage Structure

### Firebase Storage Paths
```
storage/
├── avatars/
│   └── {userId}/
│       └── avatar.jpg
├── projects/
│   └── {userId}/
│       └── {projectId}/
│           ├── cover.jpg
│           ├── image1.jpg
│           └── ...
└── testimonials/
    └── {testimonialId}/
        └── image.jpg
```

## Security Considerations

- Use Firestore Security Rules
- Validate input on backend (API routes)
- Never expose Stripe secret key
- Use Firebase Authentication
- Implement rate limiting
- CORS configured properly
- Environment variables for secrets
