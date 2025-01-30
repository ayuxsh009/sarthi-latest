"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Header';
import Footer from '../Footer';

const Resources = () => {
  const ResourceCard = ({ icon, title, description }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-center space-x-4 bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
    >
      <img src={icon} alt="" className="w-16 h-16" />
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );

  return (
    <div>
      <Header/>
      {/* <Header /> */}
      <main className="bg-white text-gray-900">
        {/* Resources Hero Section */}
        <section className="relative text-center py-20 bg-gradient-to-tr from-purple-800 via-indigo-700 to-blue-600 text-white overflow-hidden">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-20 blur-2xl"
          ></motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative text-4xl md:text-5xl font-extrabold mb-6 z-10"
          >
            Learning <span className="text-yellow-400">Resources</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative text-lg md:text-xl mb-10 max-w-3xl mx-auto z-10"
          >
            Discover tools, guides, and platforms tailored to support diverse learning styles and needs.
          </motion.p>
        </section>

        {/* Resources Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12 space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Explore <span className="text-yellow-400">Resources</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Designed to empower learners and educators, our resources are accessible and impactful.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <ResourceCard
                icon="./digital-library.png"
                title="Digital Library"
                description="Access a collection of textbooks, guides, and journals to support academic and skill-based learning."
              />
              <ResourceCard
                icon="./live-sessions.png"
                title="Live Interactive Sessions"
                description="Join real-time expert-led classes and workshops to stay ahead in your learning journey."
              />
              <ResourceCard
                icon="./skill-modules.png"
                title="Skill Development Modules"
                description="Short, targeted courses focused on practical skills for personal and professional growth."
              />
              <ResourceCard
                icon="./quizzes.png"
                title="Quizzes & Assessments"
                description="Interactive quizzes to test understanding and reinforce learning outcomes."
              />
              <ResourceCard
                icon="./language-tools.png"
                title="Language Learning Tools"
                description="Resources tailored for improving English proficiency and fostering communication skills."
              />
              <ResourceCard
                icon="./resource-sharing.png"
                title="Resource Sharing Hub"
                description="A collaborative platform for students and educators to exchange study materials and ideas."
              />
            </motion.div>
          </div>
        </section>

        {/* Additional Resources Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6 md:px-12 space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Additional <span className="text-yellow-400">Resources</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Explore more tools designed to enrich the educational experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <ResourceCard
                icon="./ai-coaching.png"
                title="AI-Powered Coaching"
                description="Personalized coaching to address individual learning challenges and boost confidence."
              />
              <ResourceCard
                icon="./mentor-guides.png"
                title="Mentor Guides"
                description="In-depth guides to help mentors structure sessions and achieve better outcomes."
              />
              <ResourceCard
                icon="./community-network.png"
                title="Community Networking"
                description="Connect with peers and mentors to create a strong learning ecosystem."
              />
              <ResourceCard
                icon="./offline-tools.png"
                title="Offline Tools"
                description="Ensure continuity in learning with offline-compatible resources and materials."
              />
              <ResourceCard
                icon="./visual-aids.png"
                title="Visual Learning Aids"
                description="Enhance comprehension with infographics, charts, and visualized content."
              />
              <ResourceCard
                icon="./support-platform.png"
                title="Support Platform"
                description="A centralized hub for donors to contribute and help bridge educational gaps in rural areas."
              />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default Resources;
