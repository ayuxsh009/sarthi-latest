"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Header'
import Footer from '../Footer'


const ProgramCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="flex flex-col items-center bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
  >
    <div className="w-16 h-16 mb-4 bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center shadow-md">
      <img src={icon} alt={title} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </motion.div>
);

const Program = () => {
  return (
    <div>
      <Header/>
      {/* <Header /> */}
      <main className="bg-white text-gray-900">
        {/* Program Hero Section */}
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
            Our <span className="text-yellow-400">Program</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative text-lg md:text-xl mb-10 max-w-3xl mx-auto z-10"
          >
            Empowering education with innovative approaches tailored to bridge gaps and create opportunities for every child.
          </motion.p>
        </section>

        {/* Program Features */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Key <span className="text-yellow-400">Features</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Unlock a world of learning with cutting-edge technology and carefully designed features.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <ProgramCard
                icon="./gamified-lessons.png"
                title="Gamified Learning"
                description="Making education fun and interactive through points, badges, and rewards."
              />
              <ProgramCard
                icon="./localized-content.png"
                title="Localized Content"
                description="Engaging lessons in local languages tailored to community needs."
              />
              <ProgramCard
                icon="./progress-tracking.png"
                title="Real-Time Tracking"
                description="Monitor learning progress with detailed analytics and reporting."
              />
              <ProgramCard
                icon="./community-learning.png"
                title="Community Focus"
                description="Foster collaboration and support within student and teacher communities."
              />
              <ProgramCard
                icon="./accessibility.png"
                title="Accessible Everywhere"
                description="Offline and online access for uninterrupted learning."
              />
              <ProgramCard
                icon="./personalized-learning.png"
                title="Personalized Learning"
                description="Adaptive pathways that cater to each child’s unique pace and abilities."
              />
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose <span className="text-yellow-400">Our Program</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                A proven approach to learning that brings together technology, community, and innovation for holistic development.
              </p>
            </motion.div>
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 md:p-12 relative">
              <div className="space-y-6 text-gray-700 text-lg">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex items-start space-x-4"
                >
                  <img src="./diverse-learning.png" alt="Diverse Learning" className="w-12 h-12" />
                  <p>Built to accommodate diverse learning needs across varied environments.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <img src="./creativity.png" alt="Creativity" className="w-12 h-12" />
                  <p>Encourages creativity, problem-solving, and critical thinking.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex items-start space-x-4"
                >
                  <img src="./opportunities.png" alt="Opportunities" className="w-12 h-12" />
                  <p>Provides equal opportunities for underserved communities.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex items-start space-x-4"
                >
                  <img src="./progress-tracking.png" alt="Progress Tracking" className="w-12 h-12" />
                  <p>Tracks progress and outcomes to ensure impactful results.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default Program;
