'use client';

import { motion } from 'framer-motion';
import { useAuth } from '@/lib/auth-context';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <div className="w-12 h-12 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

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
    <div className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl font-bold text-white mb-2">Dashboard</h1>
            <p className="text-white/60">Welcome back, {user?.email?.split('@')[0]}</p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { label: 'Total Projects', value: '12' },
              { label: 'Active Subscription', value: 'Pro' },
              { label: 'Views', value: '2.4K' },
              { label: 'Likes', value: '384' },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-white/10 bg-white/5"
              >
                <p className="text-white/60 text-sm mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            <Link
              href="/dashboard/projects"
              className="p-8 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            >
              <div className="text-3xl mb-3">📁</div>
              <h3 className="text-xl font-bold text-white mb-2">Projects</h3>
              <p className="text-white/60 text-sm">Manage your portfolio projects</p>
            </Link>
            <Link
              href="/dashboard/settings"
              className="p-8 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            >
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="text-xl font-bold text-white mb-2">Settings</h3>
              <p className="text-white/60 text-sm">Update your profile and preferences</p>
            </Link>
            <Link
              href="/dashboard/analytics"
              className="p-8 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
            >
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl font-bold text-white mb-2">Analytics</h3>
              <p className="text-white/60 text-sm">View portfolio performance metrics</p>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
