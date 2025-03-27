"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Home,
  Bot,
  GraduationCap,
  LineChart,
  Users,
  Copy,
  BookOpen,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";
import { motion, AnimatePresence } from "framer-motion";

const Dashboard = () => {
  const { user } = useUser();
  const [selectedModule, setSelectedModule] = useState("Dashboard");
  const [modalUrl, setModalUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const modules = [
    {
      name: "Dashboard",
      icon: Home,
      link: "/Main",
      color: "from-blue-500 to-indigo-600",
      description: "View your learning progress and recommendations",
    },
    {
      name: "AI Course Generator",
      icon: Bot,
      link: "https://ai-course-generator-main.vercel.app/dashboard",
      color: "from-purple-500 to-pink-600",
      description: "Create personalized learning paths with AI",
    },
    {
      name: "AI Exam Prep",
      icon: GraduationCap,
      link: "https://ai-exam-prep-seven.vercel.app/sign-in",
      color: "from-green-500 to-teal-600",
      description: "Prepare for exams with AI-powered practice tests",
    },
    {
      name: "AI Mock Interview",
      icon: LineChart,
      link: "/ai-mock-interview",
      color: "from-yellow-500 to-orange-600",
      description: "Practice interviews with AI feedback",
    },
    {
      name: "AI ChatBot",
      icon: MessageCircle,
      link: "/ai-chatbot",
      color: "from-red-500 to-pink-600",
      description: "Get instant answers to your learning questions",
    },
    {
      name: "Mentor Meet Booking",
      icon: Copy,
      link: "/mentor-meet-booking",
      color: "from-indigo-500 to-purple-600",
      description: "Schedule sessions with expert mentors",
    },
    {
      name: "E-Library",
      icon: BookOpen,
      link: "/e-library",
      color: "from-blue-400 to-cyan-600",
      description: "Access a vast collection of learning resources",
    },
    {
      name: "Discuss",
      icon: Users,
      link: "/Eassy",
      color: "from-emerald-500 to-green-600",
      description: "Join discussions with peers and experts",
    },
  ];

  const openModal = (url) => {
    setModalUrl(url);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalUrl(null);
    document.body.style.overflow = "auto";
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white py-0 px-4 flex justify-between items-center shadow-sm sticky top-0 z-10 border-b border-gray-200"
      >
        <div className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-2 rounded-lg mr-3"
          >
            <Image
              src="/logo.png"
              alt="Saarthi Logo"
              width={50}
              height={50}
              className="rounded-md"
              priority
            />
          </motion.div>
          <h1 className="text-xl font-semibold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            Saarthi
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-blue-700">Welcome to Saarthi</span>{" "}
              {user && (
                <span className="text-yellow-500">
                  , {user.firstName} {user.lastName}!
                </span>
              )}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Select a module below to enhance your learning experience. Each
              module offers unique tools to support your educational journey.
            </p>
          </motion.div>

          {/* Module Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {modules.map((module, index) => (
              <motion.div
                key={module.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link
                  href={module.link}
                  className="group flex flex-col h-full p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                  onClick={() => setSelectedModule(module.name)}
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-5 bg-gradient-to-br ${module.color}`}
                  >
                    <module.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-gray-800 group-hover:text-blue-700 transition-colors">
                    {module.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 flex-1">
                    {module.description}
                  </p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
                    <span className="text-sm font-medium">Get started</span>
                    <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-white text-gray-600 py-6 px-6 border-t border-gray-200"
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="mr-3">
                <Image
                  src="/logo.png"
                  alt="Saarthi Logo"
                  width={40}
                  height={40}
                  className="rounded-sm"
                />
              </div>
              <p className="text-sm font-medium">
                &copy; {new Date().getFullYear()} Saarthi. All Rights Reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <button
                onClick={() => openModal("/contact")}
                className="text-sm font-medium hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => openModal("/privacy")}
                className="text-sm font-medium hover:text-blue-600 transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => openModal("/terms")}
                className="text-sm font-medium hover:text-blue-600 transition-colors"
              >
                Terms
              </button>
            </div>
          </div>
        </div>
      </motion.footer>

      {/* Modal */}
      <AnimatePresence>
        {modalUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col"
            >
              <div className="flex justify-between items-center border-b border-gray-200 p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {modalUrl.replace("/", "").charAt(0).toUpperCase() +
                    modalUrl.replace("/", "").slice(1)}
                </h3>
                <button
                  onClick={closeModal}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="flex-1 overflow-hidden">
                <iframe
                  src={modalUrl}
                  className="w-full h-full border-none"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;