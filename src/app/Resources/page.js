"use client";
import { motion } from 'framer-motion';
import { BookOpen, Video, BookMarked, ClipboardCheck, UserSquare, Download, Bot, Share2, HeartHandshake } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import { Users } from "lucide-react";

const Resources = () => {
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
              <BookOpen className="h-4 w-4 text-yellow-300" />
              <span className="text-sm font-medium text-white">LEARNING TOOLS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Educational <span className="text-yellow-400">Resources</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto"
            >
              Discover powerful tools and materials designed to support diverse learning needs and styles.
            </motion.p>
          </div>
        </section>

        {/* Main Resources Section */}
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
                <BookOpen className="h-4 w-4" />
                <span className="text-sm font-semibold">CORE RESOURCES</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Empower Your <span className="text-blue-600">Learning Journey</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive tools designed to support both students and educators.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ResourceCard
                icon={<BookOpen className="h-8 w-8 text-blue-600" />}
                title="Digital Library"
                description="Access textbooks, guides, and journals to support academic learning."
                color="blue"
                delay={0.1}
              />
              <ResourceCard
                icon={<Video className="h-8 w-8 text-purple-600" />}
                title="Live Sessions"
                description="Join real-time expert-led classes and interactive workshops."
                color="purple"
                delay={0.2}
              />
              <ResourceCard
                icon={<BookMarked className="h-8 w-8 text-yellow-500" />}
                title="Skill Modules"
                description="Targeted courses focused on practical skill development."
                color="yellow"
                delay={0.3}
              />
              <ResourceCard
                icon={<ClipboardCheck className="h-8 w-8 text-blue-600" />}
                title="Assessments"
                description="Interactive quizzes to test understanding and reinforce learning."
                color="blue"
                delay={0.4}
              />
              <ResourceCard
                icon={<UserSquare className="h-8 w-8 text-purple-600" />}
                title="Mentor Guides"
                description="Comprehensive resources for educators to structure sessions."
                color="purple"
                delay={0.5}
              />
              <ResourceCard
                icon={<Download className="h-8 w-8 text-yellow-500" />}
                title="Offline Tools"
                description="Resources designed for use without internet connectivity."
                color="yellow"
                delay={0.6}
              />
            </div>
          </div>
        </section>

        {/* Additional Resources Section */}
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
                <Share2 className="h-4 w-4" />
                <span className="text-sm font-semibold">EXTRA TOOLS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                More <span className="text-yellow-400">Learning Support</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ResourceCard
                icon={<Bot className="h-8 w-8 text-blue-600" />}
                title="AI Coaching"
                description="Personalized guidance to address individual learning challenges."
                color="blue"
                delay={0.1}
              />
              <ResourceCard
                icon={<Share2 className="h-8 w-8 text-purple-600" />}
                title="Resource Hub"
                description="Collaborative platform for sharing study materials and ideas."
                color="purple"
                delay={0.2}
              />
              <ResourceCard
                icon={<HeartHandshake className="h-8 w-8 text-yellow-500" />}
                title="Support Platform"
                description="Connect donors with educational needs in rural communities."
                color="yellow"
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCard 
                value="1K+" 
                label="Resources Available" 
                icon={<BookOpen className="h-8 w-8 text-white" />}
                color="white"
                delay={0}
              />
              <StatCard 
                value="95%" 
                label="Accessibility Rate" 
                icon={<Download className="h-8 w-8 text-white" />}
                color="white"
                delay={0.1}
              />
              <StatCard 
                value="50+" 
                label="Weekly Sessions" 
                icon={<Video className="h-8 w-8 text-white" />}
                color="white"
                delay={0.2}
              />
              <StatCard 
                value="10K+" 
                label="Active Users" 
                icon={<Users className="h-8 w-8 text-white" />}
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
const ResourceCard = ({ icon, title, description, color = "blue", delay = 0 }) => {
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
      <div className="flex flex-col">
        <div className={`p-3 rounded-lg bg-white shadow-md border border-white/20 w-12 h-12 flex items-center justify-center mb-6`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-700">{description}</p>
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

export default Resources;