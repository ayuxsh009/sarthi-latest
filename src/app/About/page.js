"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';
import Header from '../Header'
import Footer from '../Footer';



const About = () => {
  const FeatureCard = ({ icon, title, description }) => (
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
        {/* <Header/> */}
        <main className="bg-white text-gray-900">
      {/* About Hero Section */}
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
          About <span className="text-yellow-400">Saarthi</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative text-lg md:text-xl mb-10 max-w-3xl mx-auto z-10"
        >
          Saarthi is on a mission to revolutionize rural education by blending
          innovation, creativity, and gamification to empower children to learn
          and thrive.
        </motion.p>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 space-y-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-yellow-400">Mission</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Our mission is to make education accessible, exciting, and
              impactful for every child, especially in underserved communities.
              Through interactive tools and engaging activities, we aim to
              unlock each child's true potential.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <FeatureCard
              icon="./vision.png"
              title="Vision"
              description="To create a world where every child has the tools to learn, grow, and succeed."
            />
            <FeatureCard
              icon="./values.png"
              title="Core Values"
              description="Empathy, Innovation, Integrity, and Inclusivity are the pillars of our journey."
            />
            <FeatureCard
              icon="./team.png"
              title="Our Team"
              description="A passionate group of educators, technologists, and designers committed to change."
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12">
            Why <span className="text-yellow-400">Choose Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <img
                src="./children-learning.png"
                alt="Children Learning"
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700">
                At Saarthi, we believe in the power of education to transform
                lives. Our platform is designed to cater to the unique needs of
                rural children, ensuring they have equal opportunities to
                succeed in life.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Interactive and gamified learning experiences</li>
                <li>Empowerment through skill-building activities</li>
                <li>Accessible tools for underserved communities</li>
                <li>Passionate and dedicated support team</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
    <Footer/> 
    </div>
  );
};

export default About;
