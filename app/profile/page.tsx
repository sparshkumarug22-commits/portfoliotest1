'use client';

import { motion } from 'framer-motion';
import { useAuth } from '@/lib/auth-context';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/sections/Footer';
import Link from 'next/link';

export default function ProfilePage() {
  const { user, loading, signOut } = useAuth();

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

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <Navbar />
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-white">Access Denied</h1>
          <p className="text-white/60">Please sign in to view your profile</p>
          <Link
            href="/login"
            className="inline-block px-8 py-4 rounded-full bg-orange-500 text-black font-semibold hover:bg-orange-600 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-32 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Header */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h1 className="text-5xl font-bold text-white mb-2">My Profile</h1>
                <p className="text-white/60">Manage your account and subscription</p>
              </div>
              <button
                onClick={signOut}
                className="mt-6 md:mt-0 px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors"
              >
                Sign Out
              </button>
            </motion.div>

            {/* Profile Card */}
            <motion.div
              variants={itemVariants}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 space-y-6"
            >
              <h2 className="text-2xl font-bold text-white">Account Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-white/60 text-sm">Email</label>
                  <p className="text-white mt-2">{user.email}</p>
                </div>
                <div>
                  <label className="text-white/60 text-sm">User ID</label>
                  <p className="text-white/80 text-sm mt-2 break-all">{user.uid}</p>
                </div>
                <div>
                  <label className="text-white/60 text-sm">Joined</label>
                  <p className="text-white mt-2">
                    {user.metadata?.creationTime
                      ? new Date(user.metadata.creationTime).toLocaleDateString()
                      : 'N/A'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Plans Section */}
            <motion.div
              variants={itemVariants}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 space-y-6"
            >
              <h2 className="text-2xl font-bold text-white">Subscription</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-white/60 text-sm">Current Plan</label>
                  <p className="text-white mt-2">Pro Plan</p>
                </div>
                <div>
                  <label className="text-white/60 text-sm">Renewal Date</label>
                  <p className="text-white mt-2">July 1, 2026</p>
                </div>
              </div>
              <Link
                href="/pricing"
                className="inline-block mt-4 px-6 py-3 rounded-full bg-orange-500 text-black font-semibold hover:bg-orange-600 transition-colors"
              >
                Manage Subscription
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
