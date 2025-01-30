"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Header'
import Footer from '../Footer'

const HowitWorks = () => {
  const StepCard = ({ icon, title, description }) => (
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

  const BenefitCard = ({ icon, title, description }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
    >
      <img src={icon} alt="" className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );

  return (
    <div>
      <Header/>
      {/* <Header /> */}
      <main className="bg-white text-gray-900">
        {/* How It Works Hero Section */}
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
            How <span className="text-yellow-400">It Works</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative text-lg md:text-xl mb-10 max-w-3xl mx-auto z-10"
          >
            Saarthi combines innovation and accessibility to make education a reality for children in rural areas, empowering them with knowledge and skills for a better future.
          </motion.p>
        </section>

        {/* Steps Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12 space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Steps to <span className="text-yellow-400">Empowerment</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                From understanding the learner to delivering quality education, every step is carefully designed for impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <StepCard
                icon="./personalized-learning.png"
                title="Personalized Learning Paths"
                description="Assessments adapt to the learner's needs, making every lesson relevant and effective."
              />
              <StepCard
                icon="./gamified-lessons.png"
                title="Interactive Gamified Lessons"
                description="Rewards and challenges ensure learning feels like an adventure."
              />
              <StepCard
                icon="./progress-tracking.png"
                title="Comprehensive Analytics"
                description="Track every milestone to celebrate growth and address challenges early."
              />
              <StepCard
                icon="./community-learning.png"
                title="Community-Based Approach"
                description="Encourage peer interaction and foster a sense of belonging while learning."
              />
              <StepCard
                icon="./localized-content.png"
                title="Localized and Inclusive Content"
                description="Content tailored to local languages and cultures for better relatability."
              />
              <StepCard
                icon="./support-resources.png"
                title="Dedicated Support Resources"
                description="Guides, helplines, and tools for students and educators to navigate challenges."
              />
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose <span className="text-yellow-400">Saarthi?</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Discover the unique advantages of Saarthi’s platform, designed for impact.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BenefitCard
                icon="./impact.png"
                title="High Impact Learning"
                description="Proven methods to improve educational outcomes in underserved areas."
              />
              <BenefitCard
                icon="./technology.png"
                title="Innovative Technology"
                description="Leveraging cutting-edge tools for better accessibility and engagement."
              />
              <BenefitCard
                icon="./affordable.png"
                title="Affordable Solutions"
                description="Making quality education accessible without financial burdens."
              />
              <BenefitCard
                icon="./collaboration.png"
                title="Collaborative Ecosystem"
                description="Builds bridges between students, educators, and communities."
              />
              <BenefitCard
                icon="./scalable.png"
                title="Scalable Model"
                description="Adaptable framework that grows with the needs of the learners."
              />
              <BenefitCard
                icon="./impact-stories.png"
                title="Real-Life Impact"
                description="Inspiring stories of transformation through education."
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              What Our <span className="text-yellow-400">Users Say</span>
            </h2>
            <div className="space-y-8">
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 text-gray-700"
              >
                "Saarthi transformed our classroom. The kids love learning with gamified lessons, and their engagement has soared!"
              </motion.blockquote>
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 text-gray-700"
              >
                "The personalized learning paths have made a huge difference in my child's progress. It's like having a private tutor!"
              </motion.blockquote>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default HowitWorks;
