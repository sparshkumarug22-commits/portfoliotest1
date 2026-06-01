'use client';

import { motion } from 'framer-motion';
import { useAuth } from '@/lib/auth-context';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function DashboardProjectsPage() {
  const { user } = useAuth();
  const [projects, setProjects] = useState([
    { id: 1, title: 'Brand Identity', category: 'branding', status: 'completed' },
    { id: 2, title: 'Website Redesign', category: 'web', status: 'in-progress' },
  ]);

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
          <motion.div
            variants={itemVariants}
            className="flex justify-between items-center"
          >
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">My Projects</h1>
              <p className="text-white/60">Manage and showcase your portfolio projects</p>
            </div>
            <button className="px-6 py-3 rounded-lg bg-orange-500 text-black font-semibold hover:bg-orange-600 transition-colors">
              + New Project
            </button>
          </motion.div>

          {/* Projects Table */}
          <motion.div
            variants={itemVariants}
            className="rounded-xl border border-white/10 bg-white/5 overflow-hidden"
          >
            <table className="w-full">
              <thead className="border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-semibold">Title</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Category</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Status</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr key={project.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-white">{project.title}</td>
                    <td className="px-6 py-4 text-white/60 capitalize">{project.category}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm capitalize ${
                        project.status === 'completed'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 space-x-2">
                      <button className="text-orange-500 hover:text-orange-400 transition-colors">Edit</button>
                      <button className="text-red-500 hover:text-red-400 transition-colors">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
