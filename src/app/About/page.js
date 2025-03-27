"use client";
import { motion } from 'framer-motion';
import { Rocket, Lightbulb, HeartHandshake, Users, Award, BookOpen } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const About = () => {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      
      <main className="overflow-hidden">
        {/* Hero Section with Parallax */}
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
              <Rocket className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium text-white">OUR STORY</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Empowering <span className="text-yellow-400">Rural Education</span><br />
              Through Innovation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto"
            >
              Saarthi revolutionizes learning by blending cutting-edge technology with proven educational methods for underserved communities.
            </motion.p>
          </div>
        </section>

        {/* Mission Section */}
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
                <Lightbulb className="h-4 w-4" />
                <span className="text-sm font-semibold">OUR MISSION</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Bridging the <span className="text-blue-600">Educational Divide</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're committed to making quality education accessible and engaging for every child, regardless of their location or background.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Lightbulb className="h-8 w-8 text-blue-600" />}
                title="Vision"
                description="A world where every child has equal access to transformative learning experiences."
                color="blue"
                delay={0.1}
              />
              <FeatureCard
                icon={<HeartHandshake className="h-8 w-8 text-purple-600" />}
                title="Core Values"
                description="Empathy, Innovation, and Integrity guide everything we do."
                color="purple"
                delay={0.3}
              />
              <FeatureCard
                icon={<Users className="h-8 w-8 text-yellow-500" />}
                title="Our Team"
                description="Passionate educators, technologists, and designers driving change."
                color="yellow"
                delay={0.5}
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
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
                <Award className="h-4 w-4" />
                <span className="text-sm font-semibold">WHY SAARTHI</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The <span className="text-yellow-400">Saarthi Difference</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex justify-center"
              >
                <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/children-learning.png"
                    alt="Children Learning"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-6"
              >
                <ul className="space-y-4">
                  {[
                    "Interactive gamified learning experiences",
                    "Localized content for rural contexts",
                    "Skill-building through play",
                    "Low-bandwidth optimized platform",
                    "Community-focused approach"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-blue-100 p-1 rounded-full">
                          <BookOpen className="h-4 w-4 text-blue-600" />
                        </div>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCard 
                value="50K+" 
                label="Students Reached" 
                icon={<Users className="h-8 w-8 text-white" />}
                color="white"
                delay={0}
              />
              <StatCard 
                value="200+" 
                label="Villages Served" 
                icon={<BookOpen className="h-8 w-8 text-white" />}
                color="white"
                delay={0.1}
              />
              <StatCard 
                value="95%" 
                label="Satisfaction Rate" 
                icon={<Award className="h-8 w-8 text-white" />}
                color="white"
                delay={0.2}
              />
              <StatCard 
                value="10+" 
                label="Regional Languages" 
                icon={<HeartHandshake className="h-8 w-8 text-white" />}
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
const FeatureCard = ({ icon, title, description, color = "blue", delay = 0 }) => {
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
      className={`bg-gradient-to-br ${colorClasses[color]} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all`}
    >
      <div className="flex items-start gap-6">
        <div className={`p-4 rounded-xl bg-white shadow-md border border-white/20`}>
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
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

export default About;