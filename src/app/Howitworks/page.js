"use client";
import { motion } from 'framer-motion';
import { BookOpen, Gamepad2, BarChart, Users, Globe, LifeBuoy, Award, Cpu, DollarSign, Handshake, Expand, BookMarked } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const HowitWorks = () => {
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
              <span className="text-sm font-medium text-white">OUR PROCESS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              How <span className="text-yellow-400">Saarthi</span> Works
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto"
            >
              Our innovative approach combines technology and pedagogy to create transformative learning experiences for rural communities.
            </motion.p>
          </div>
        </section>

        {/* Steps Section */}
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
                <span className="text-sm font-semibold">STEP-BY-STEP</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Path to <span className="text-blue-600">Empowerment</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From assessment to mastery, every step is designed for maximum impact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <StepCard
                icon={<BookOpen className="h-8 w-8 text-blue-600" />}
                title="Personalized Learning"
                description="Adaptive pathways tailored to each learner's needs and pace."
                color="blue"
                delay={0.1}
              />
              <StepCard
                icon={<Gamepad2 className="h-8 w-8 text-purple-600" />}
                title="Gamified Lessons"
                description="Interactive challenges that make learning engaging."
                color="purple"
                delay={0.2}
              />
              <StepCard
                icon={<BarChart className="h-8 w-8 text-yellow-500" />}
                title="Progress Tracking"
                description="Real-time analytics to monitor growth and challenges."
                color="yellow"
                delay={0.3}
              />
              <StepCard
                icon={<Users className="h-8 w-8 text-blue-600" />}
                title="Community Learning"
                description="Peer collaboration for deeper understanding."
                color="blue"
                delay={0.4}
              />
              <StepCard
                icon={<Globe className="h-8 w-8 text-purple-600" />}
                title="Localized Content"
                description="Culturally relevant materials in local languages."
                color="purple"
                delay={0.5}
              />
              <StepCard
                icon={<LifeBuoy className="h-8 w-8 text-yellow-500" />}
                title="Support System"
                description="Dedicated resources for students and educators."
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
                <Award className="h-4 w-4" />
                <span className="text-sm font-semibold">THE SAARTHI EDGE</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why <span className="text-yellow-400">Choose Us</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BenefitCard
                icon={<Award className="h-8 w-8 text-blue-600" />}
                title="Proven Impact"
                description="Demonstrated success in improving educational outcomes."
                color="blue"
                delay={0.1}
              />
              <BenefitCard
                icon={<Cpu className="h-8 w-8 text-purple-600" />}
                title="Innovative Tech"
                description="Cutting-edge tools designed for low-resource settings."
                color="purple"
                delay={0.2}
              />
              <BenefitCard
                icon={<DollarSign className="h-8 w-8 text-yellow-500" />}
                title="Affordable"
                description="Cost-effective solutions for sustainable education."
                color="yellow"
                delay={0.3}
              />
              <BenefitCard
                icon={<Handshake className="h-8 w-8 text-blue-600" />}
                title="Community Focus"
                description="Builds bridges between all stakeholders."
                color="blue"
                delay={0.4}
              />
              <BenefitCard
                icon={<Expand className="h-8 w-8 text-purple-600" />}
                title="Scalable"
                description="Framework that grows with learner needs."
                color="purple"
                delay={0.5}
              />
              <BenefitCard
                icon={<BookMarked className="h-8 w-8 text-yellow-500" />}
                title="Real Stories"
                description="Documented transformations through education."
                color="yellow"
                delay={0.6}
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCard 
                value="85%" 
                label="Engagement Boost" 
                icon={<Gamepad2 className="h-8 w-8 text-white" />}
                color="white"
                delay={0}
              />
              <StatCard 
                value="200+" 
                label="Communities Reached" 
                icon={<Users className="h-8 w-8 text-white" />}
                color="white"
                delay={0.1}
              />
              <StatCard 
                value="10+" 
                label="Languages Supported" 
                icon={<Globe className="h-8 w-8 text-white" />}
                color="white"
                delay={0.2}
              />
              <StatCard 
                value="94%" 
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
const StepCard = ({ icon, title, description, color = "blue", delay = 0 }) => {
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
      <div className="flex items-start gap-6">
        <div className={`p-3 rounded-lg bg-white shadow-md border border-white/20 flex-shrink-0`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const BenefitCard = ({ icon, title, description, color = "blue", delay = 0 }) => {
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

export default HowitWorks;