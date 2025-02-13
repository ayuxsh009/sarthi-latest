"use client";

import Link from "next/link";
import { useState } from "react";
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
} from "lucide-react";
import { UserButton } from "@clerk/nextjs"; // Clerk profile button
import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const { user } = useUser(); // Fetching user data from Clerk
  const [selectedModule, setSelectedModule] = useState("Dashboard");
  const [modalUrl, setModalUrl] = useState(null);

  const modules = [
    {
      name: "Dashboard",
      icon: Home,
      link: "/Main",
      description: "View your learning progress and recommendations",
    },
    {
      name: "AI Course Generator",
      icon: Bot,
      link: "https://ai-course-generator-main.vercel.app/dashboard",
      description: "Create personalized learning paths with AI",
    },
    {
      name: "AI Exam Prep",
      icon: GraduationCap,
      link: "https://ai-exam-prep-seven.vercel.app/sign-in?redirect_url=https%3A%2F%2Fai-exam-prep-seven.vercel.app%2Fdashboard",
      description: "Prepare for exams with AI-powered practice tests",
    },
    {
      name: "AI Mock Interview",
      icon: LineChart,
      link: "/ai-mock-interview",
      description: "Practice interviews with AI feedback",
    },
    {
      name: "AI ChatBot",
      icon: MessageCircle,
      link: "/ai-chatbot",
      description: "Get instant answers to your learning questions",
    },
    {
      name: "Mentor Meet Booking",
      icon: Copy,
      link: "/mentor-meet-booking",
      description: "Schedule sessions with expert mentors",
    },
    {
      name: "E-Library",
      icon: BookOpen,
      link: "/e-library",
      description: "Access a vast collection of learning resources",
    },
    {
      name: "Discuss",
      icon: Users,
      link: "/Eassy",
      description: "Join discussions with peers and experts",
    },
  ];

  const openModal = (url) => {
    setModalUrl(url);
  };

  const closeModal = () => {
    setModalUrl(null);
  };

  // Helper function to conditionally join class names
  const cn = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white py-0 px-4 flex justify-between items-center shadow-sm sticky top-0 z-10 border-b border-gray-200">
          <div className="flex items-center">
            <div className="p-2 rounded-lg mr-3">
              <Image
                src="/logo.png"
                alt="Saarthi Logo"
                width={50}
                height={50}
                className="rounded-md"
              />
            </div>
            <h1 className="text-xl font-semibold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Saarthi Learning Platform
            </h1>
          </div>

          <UserButton />
        </header>

        <section className="flex-1 p-6 md:p-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-blue-700">Welcome to Saarthi</span>{" "}
               
                {user && (
                  <span className="text-yellow-500">, {user.firstName}  {user.lastName}! </span>
                )}
              </h2>

              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Select a module below to enhance your learning experience. Each
                module offers unique tools to support your educational journey.
              </p>
            </div>

            {/* Module Grid - Replaces the sidebar with centered containers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {modules.map((module) => (
                <Link
                  key={module.name}
                  href={module.link}
                  className={cn(
                    "group flex flex-col items-center justify-center p-8 rounded-xl border transition-all duration-300",
                    "hover:shadow-lg hover:-translate-y-1 hover:border-blue-200",
                    selectedModule === module.name
                      ? "bg-white border-blue-200 shadow-md"
                      : "bg-white/80 backdrop-blur-sm border-gray-200"
                  )}
                  onClick={() => setSelectedModule(module.name)}
                >
                  <div
                    className={cn(
                      "w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-all duration-300",
                      "group-hover:shadow-inner",
                      selectedModule === module.name
                        ? "bg-gradient-to-br from-blue-500 to-indigo-600"
                        : "bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-blue-500/80 group-hover:to-indigo-600/80"
                    )}
                  >
                    <module.icon
                      className={cn(
                        "h-7 w-7 transition-all duration-300",
                        selectedModule === module.name
                          ? "text-white"
                          : "text-gray-600 group-hover:text-white"
                      )}
                    />
                  </div>
                  <h3
                    className={cn(
                      "font-semibold text-lg mb-3 transition-colors duration-300",
                      selectedModule === module.name
                        ? "text-blue-700"
                        : "text-gray-800 group-hover:text-blue-700"
                    )}
                  >
                    {module.name}
                  </h3>
                  <p className="text-sm text-gray-500 text-center leading-relaxed">
                    {module.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="bg-white text-gray-600 py-2 px-6 border-t border-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="">
                <Image
                  src="/logo.png"
                  alt="Saarthi Logo"
                  width={55}
                  height={55}
                  className="rounded-sm"
                />
              </div>
              <p className="text-sm font-medium">
                &copy; {new Date().getFullYear()} Saarthi. All Rights Reserved.
              </p>
            </div>
            <div className="flex space-x-8">
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
             
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-400 mb-4 md:mb-0">
              Saarthi Learning Platform is designed to provide personalized
              learning experiences through AI-powered tools.
            </p>
            
          </div>
        </div>
      </footer>

      {/* Modal to load external pages */}
      {modalUrl && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 transition-all duration-300 animate-fadeIn">
          <div className="bg-white p-6 rounded-xl shadow-2xl max-w-3xl w-full relative animate-scaleIn">
            <div className="absolute top-3 right-3">
              <button
                onClick={closeModal}
                className="rounded-full h-8 w-8 p-0 flex items-center justify-center hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors border border-transparent"
              >
                <span className="sr-only">Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
            <div className="border-b border-gray-200 pb-4 mb-6">
              <h3 className="text-lg font-semibold text-gray-800">
                {modalUrl.replace("/", "").charAt(0).toUpperCase() +
                  modalUrl.replace("/", "").slice(1)}
              </h3>
            </div>
            <iframe
              src={modalUrl}
              className="w-full h-[500px] border-none rounded-md bg-gray-50"
            />
          </div>
        </div>
      )}

      {/* Add CSS animations directly in the component */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
