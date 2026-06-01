'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';

export default function PricingPage() {
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
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-32 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-20 text-center"
          >
            <motion.h1 variants={itemVariants} className="text-6xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-white/60 max-w-2xl mx-auto">
              Choose the perfect plan for your needs
            </motion.p>
          </motion.div>

          {/* Pricing Section from home */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: 'Basic',
                price: 29,
                features: ['5 projects', 'Basic analytics', 'Email support'],
              },
              {
                name: 'Pro',
                price: 79,
                features: ['Unlimited projects', 'Advanced analytics', 'Priority support'],
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: 199,
                features: ['Everything in Pro', 'Dedicated support', 'API access'],
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`p-8 rounded-2xl border ${
                  plan.highlighted
                    ? 'bg-orange-500 border-orange-500 text-black'
                    : 'bg-white/5 border-white/10 text-white'
                }`}
              >
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className={plan.highlighted ? 'text-black/70' : 'text-white/70'}>/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-colors ${
                    plan.highlighted
                      ? 'bg-black text-orange-500 hover:bg-black/80'
                      : 'bg-orange-500 text-black hover:bg-orange-600'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
