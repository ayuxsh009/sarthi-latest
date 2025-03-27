"use client";
import { motion } from 'framer-motion';
import { Gamepad2, Languages, BarChart4, Users, Smartphone, BookOpen } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import { Award } from "lucide-react";

const Program = () => {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:100px_100px] opacity-10"
          />
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm"
            >
              <Gamepad2 className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium text-white">OUR PROGRAMS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Transformative <span className="text-yellow-400">Learning</span><br />
              Programs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto"
            >
              Empowering rural education with innovative approaches tailored to bridge gaps and create opportunities.
            </motion.p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-4 py-2 mb-4">
                <Gamepad2 className="h-4 w-4" />
                <span className="text-sm font-semibold">KEY FEATURES</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Revolutionizing <span className="text-blue-600">Rural Education</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge technology meets carefully designed pedagogy for holistic development.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProgramCard
                icon={<Gamepad2 className="h-8 w-8 text-blue-600" />}
                title="Gamified Learning"
                description="Making education fun through points, badges, and rewards."
                color="blue"
                delay={0.1}
              />
              <ProgramCard
                icon={<Languages className="h-8 w-8 text-purple-600" />}
                title="Localized Content"
                description="Engaging lessons in local languages tailored to community needs."
                color="purple"
                delay={0.2}
              />
              <ProgramCard
                icon={<BarChart4 className="h-8 w-8 text-yellow-500" />}
                title="Progress Tracking"
                description="Monitor learning with detailed analytics and reporting."
                color="yellow"
                delay={0.3}
              />
              <ProgramCard
                icon={<Users className="h-8 w-8 text-blue-600" />}
                title="Community Focus"
                description="Foster collaboration within student and teacher communities."
                color="blue"
                delay={0.4}
              />
              <ProgramCard
                icon={<Smartphone className="h-8 w-8 text-purple-600" />}
                title="Accessible Everywhere"
                description="Offline and online access for uninterrupted learning."
                color="purple"
                delay={0.5}
              />
              <ProgramCard
                icon={<BookOpen className="h-8 w-8 text-yellow-500" />}
                title="Personalized Learning"
                description="Adaptive pathways for each child's unique pace and abilities."
                color="yellow"
                delay={0.6}
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-28 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-600 rounded-full px-4 py-2 mb-4">
                <BarChart4 className="h-4 w-4" />
                <span className="text-sm font-semibold">WHY IT WORKS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The <span className="text-yellow-400">Saarthi Advantage</span>
              </h2>
            </motion.div>

            <div className="max-w-5xl mx-auto bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="p-8 md:p-12"
                >
                  <ul className="space-y-6">
                    {[
                      "Built for diverse learning needs across environments",
                      "Encourages creativity and critical thinking",
                      "Provides equal opportunities for underserved communities",
                      "Tracks progress to ensure impactful results",
                      "Low-bandwidth optimized platform",
                      "Teacher training and support included"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="bg-blue-100 p-1.5 rounded-full">
                            <div className={`h-2 w-2 rounded-full ${
                              index % 3 === 0 ? 'bg-blue-600' : 
                              index % 3 === 1 ? 'bg-purple-600' : 'bg-yellow-500'
                            }`} />
                          </div>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 md:p-12 flex items-center justify-center"
                >
                  <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/children-learning.png"
                      alt="Children learning with Saarthi"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCard 
                value="85%" 
                label="Engagement Increase" 
                icon={<Gamepad2 className="h-8 w-8 text-white" />}
                color="white"
                delay={0}
              />
              <StatCard 
                value="200+" 
                label="Villages Reached" 
                icon={<Languages className="h-8 w-8 text-white" />}
                color="white"
                delay={0.1}
              />
              <StatCard 
                value="10+" 
                label="Regional Languages" 
                icon={<Users className="h-8 w-8 text-white" />}
                color="white"
                delay={0.2}
              />
              <StatCard 
                value="95%" 
                label="Satisfaction Rate" 
                icon={<Award className="h-8 w-8 text-white" />}
                color="white"
                delay={0.3}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// Reusable Components
const ProgramCard = ({ icon, title, description, color = "blue", delay = 0 }) => {
  const colorClasses = {
    blue: "from-blue-50 to-blue-100 text-blue-600",
    purple: "from-purple-50 to-purple-100 text-purple-600",
    yellow: "from-yellow-50 to-yellow-100 text-yellow-600"
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10 }}
      className={`bg-gradient-to-br ${colorClasses[color]} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all h-full`}
    >
      <div className="flex flex-col h-full">
        <div className={`p-3 rounded-lg bg-white shadow-md border border-white/20 w-12 h-12 flex items-center justify-center mb-6`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-700 flex-grow">{description}</p>
      </div>
    </motion.div>
  );
};

const StatCard = ({ value, label, icon, color = "blue", delay = 0 }) => {
  const colorClasses = {
    blue: "text-blue-600",
    purple: "text-purple-600",
    yellow: "text-yellow-500",
    white: "text-white"
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, margin: "-100px" }}
      className="text-center"
    >
      <motion.div
        initial={{ scale: 1 }}
        whileInView={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.8, delay: delay + 0.3 }}
        viewport={{ once: true }}
        className={`text-5xl font-bold mb-3 ${colorClasses[color]}`}
      >
        {value}
      </motion.div>
      <div className={`flex items-center justify-center gap-2 ${color === "white" ? "text-blue-100" : "text-gray-600"}`}>
        {icon}
        <span className="font-medium">{label}</span>
      </div>
    </motion.div>
  );
};

export default Program;