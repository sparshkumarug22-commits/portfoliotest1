'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    id: 1,
    name: 'Basic Plan',
    price: 29,
    period: 'month',
    description: 'Start your portfolio journey',
    features: [
      'Up to 5 projects',
      'Basic analytics',
      'Email support',
      'Standard templates',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    id: 2,
    name: 'Pro Plan',
    price: 79,
    period: 'month',
    description: 'Perfect for professionals',
    features: [
      'Unlimited projects',
      'Advanced analytics',
      'Priority support',
      'Custom domain',
      'Team collaboration',
      'Advanced templates',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 199,
    period: 'month',
    description: 'For agencies & teams',
    features: [
      'Everything in Pro',
      'Dedicated support',
      'API access',
      'Custom branding',
      'Multi-team management',
      'Advanced integrations',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function PricingSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20 text-center"
        >
          <motion.span
            variants={itemVariants}
            className="text-orange-500 text-sm font-semibold"
          >
            Pricing
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-5xl lg:text-6xl font-bold text-white mt-4 max-w-2xl mx-auto"
          >
            Choose Your Plan
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-white/60 mt-6 max-w-lg mx-auto text-lg"
          >
            Simple, transparent pricing that scales with your needs.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-8 lg:gap-6"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative rounded-2xl border transition-all ${
                plan.highlighted
                  ? 'bg-orange-500 border-orange-500 text-black lg:scale-105'
                  : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
              }`}
            >
              {/* Highlighted badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full bg-black text-orange-500 text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Plan name */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`mb-8 ${plan.highlighted ? 'text-black/70' : 'text-white/60'}`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className={plan.highlighted ? 'text-black/70' : 'text-white/60'}>
                      /{plan.period}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/checkout?plan=${plan.id}`}
                  className={`block w-full py-3 rounded-full font-semibold text-center mb-8 transition-all ${
                    plan.highlighted
                      ? 'bg-black text-orange-500 hover:bg-black/80'
                      : 'bg-orange-500 text-black hover:bg-orange-600'
                  }`}
                >
                  {plan.cta}
                </Link>

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check
                        size={20}
                        className={plan.highlighted ? 'text-black' : 'text-orange-500'}
                      />
                      <span className={plan.highlighted ? 'text-black/80' : 'text-white/80'}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Link */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-20 text-center"
        >
          <p className="text-white/60 mb-6">
            Have questions about our plans?{' '}
            <Link href="/faq" className="text-orange-500 hover:text-orange-400 font-semibold">
              View FAQ
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
