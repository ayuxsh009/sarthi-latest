"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Sparkles, BookOpen, Users, Award, ChevronRight, Rocket, BrainCircuit, Palette, Globe } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const Body = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax effects
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  // Image carousel state
  const images = [
    "/main.png",
    "/main2.png",
    "/main3.png",
    "/main4.png"
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <Header />
      <main className="bg-white text-gray-900 overflow-hidden" ref={containerRef}>
        {/* Premium Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
          {/* Animated background elements */}
          <motion.div 
            style={{ y: yBg, opacity: opacityBg, scale }}
            className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:100px_100px] opacity-10"
          />
          
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: [0, 0.3, 0], scale: 1.5 }}
                transition={{
                  duration: 5 + Math.random() * 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: Math.random() * 5
                }}
                className="absolute rounded-full bg-white/10 backdrop-blur-sm"
                style={{
                  width: `${5 + Math.random() * 10}px`,
                  height: `${5 + Math.random() * 10}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-700/50 rounded-full px-4 py-2 mb-6 backdrop-blur-sm"
              >
                <Sparkles className="h-4 w-4 text-yellow-300" />
                <span className="text-sm font-medium text-blue-100">TRUSTED BY 500K+ FAMILIES</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white"
              >
                Where <span className="text-yellow-400">Curiosity</span> Meets <br />
                <span className="text-yellow-400">Creativity</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto"
              >
                The most engaging learning platform that adapts to your child's unique way of thinking, making education an adventure they'll love.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Link href="/sign-up" passHref>
                  <motion.button
                    whileHover={{ y: -2, boxShadow: "0 8px 25px -5px rgba(236, 201, 75, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-full font-bold text-lg transition-all group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started Free
                      <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <motion.span
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-70"
                    />
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Hero image carousel with floating animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-20 relative max-w-4xl mx-auto"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[currentImageIndex]}
                      alt="Learning platform dashboard"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute left-10 top-1/4"
                >
                  <div className="bg-white p-3 rounded-xl shadow-lg border border-white/20">
                    <Rocket className="h-6 w-6 text-blue-600" />
                  </div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute right-10 top-1/3"
                >
                  <div className="bg-white p-3 rounded-xl shadow-lg border border-white/20">
                    <BrainCircuit className="h-6 w-6 text-purple-600" />
                  </div>
                </motion.div>
              </div>

              {/* Carousel indicators */}
              <div className="flex justify-center mt-6 gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${currentImageIndex === index ? 'bg-yellow-400 w-6' : 'bg-white/30'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:100px_100px]" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-4 py-2 mb-4">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-semibold">WHY CHOOSE US</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Learning <span className="text-blue-600">Reimagined</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We've transformed education into an immersive experience that children actually look forward to.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Rocket className="h-8 w-8 text-blue-600" />}
                title="Adaptive Learning Paths"
                description="Our AI tailors content to your child's pace and learning style, ensuring optimal growth."
                color="blue"
                delay={0.1}
              />
              <FeatureCard
                icon={<BrainCircuit className="h-8 w-8 text-purple-600" />}
                title="Cognitive Development"
                description="Activities designed by neuroscientists to enhance memory, focus, and problem-solving."
                color="purple"
                delay={0.3}
              />
              <FeatureCard
                icon={<Palette className="h-8 w-8 text-yellow-500" />}
                title="Creative Expression"
                description="Unleash creativity with tools that make learning artistic and engaging."
                color="yellow"
                delay={0.5}
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:100px_100px]" />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10"
              >
                <StatCard 
                  value="500K+" 
                  label="Happy Learners" 
                  icon={<Users className="h-8 w-8 text-white" />}
                  color="white"
                  delay={0}
                />
                <StatCard 
                  value="1200+" 
                  label="Interactive Lessons" 
                  icon={<BookOpen className="h-8 w-8 text-white" />}
                  color="white"
                  delay={0.1}
                />
                <StatCard 
                  value="94%" 
                  label="Parent Satisfaction" 
                  icon={<Sparkles className="h-8 w-8 text-white" />}
                  color="white"
                  delay={0.2}
                />
                <StatCard 
                  value="85+" 
                  label="Countries" 
                  icon={<Globe className="h-8 w-8 text-white" />}
                  color="white"
                  delay={0.3}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-28 bg-gradient-to-br from-blue-900 to-purple-900 text-white overflow-hidden">
          <div className="absolute inset-0 overflow-hidden opacity-20">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -100 + Math.random() * 200],
                  x: [0, -50 + Math.random() * 100],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: 10 + Math.random() * 20,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${1 + Math.random() * 3}px`,
                  height: `${1 + Math.random() * 3}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-4xl md:text-5xl font-bold mb-8"
              >
                Ready to Transform <br />Your Child's Learning?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto"
              >
                Join thousands of parents who are already seeing remarkable progress in their children.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Link href="/sign-up" passHref>
                  <motion.button
                    whileHover={{ y: -3, boxShadow: "0 10px 30px -5px rgba(236, 201, 75, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-5 rounded-full font-bold text-lg transition-all group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Join Free Now!
                      <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <motion.span
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-70"
                    />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

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

export default Body;