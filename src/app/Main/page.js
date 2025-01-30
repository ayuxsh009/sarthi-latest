"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faRobot, faChartLine, faUsers, faGraduationCap, faClone,faBookReader } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

const Dashboard = () => {
  const { user } = useUser();
  const [selectedModule, setSelectedModule] = useState("Dashboard");
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Close sidebar on smaller screens
        sidebarRef.current.classList.remove("open");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    sidebarRef.current.classList.toggle("open");
  };

  return (
    <main className="bg-gray-100 min-h-screen flex flex-col">
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          ref={sidebarRef}
          className={`w-64 bg-white text-gray-900 p-6 flex flex-col shadow-lg border-r-2 border-gray-300 transition-all duration-300 ease-in-out ${
            selectedModule === "Dashboard" ? "open" : ""
          }`}
        >
          <button className="absolute top-4 right-4 md:hidden" onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6" />
            </svg>
          </button>
          <div className="mb-6 flex items-center">
            <Image src="/logo.png" alt="Saarthi Logo" width={50} height={50} />
            <h2 className="text-2xl font-bold ml-2 text-Blue">Saarthi</h2>
          </div>
          <nav className="space-y-4">
            {[
              { name: 'Dashboard', icon: faHouse },
              { name: 'AI Course Generator', icon: faRobot },
              { name: 'AI Exam Prep', icon: faGraduationCap },
              { name: 'AI Mock Interview', icon: faChartLine },
              { name: 'AI ChatBot', icon: faUsers },
              { name: 'Mentor Meet Booking', icon: faClone },
              {name: 'E-Library', icon:faBookReader},
              {name:'Discuss',icon:faUsers},
            ].map((module) => (
              <Link
                key={module.name}
                href={
                  module.name === 'Dashboard'
                    ? '/Main'
                    : module.name === 'AI Course Generator'
                      ? 'https://ai-course-generator-main.vercel.app/dashboard'
                      : module.name === 'AI Exam Prep'
                        ? 'https://ai-exam-prep-seven.vercel.app/sign-in?redirect_url=https%3A%2F%2Fai-exam-prep-seven.vercel.app%2Fdashboard'
                        : `/${module.name.toLowerCase().replace(/ /g, '-')}`
                }
                className={`block p-3 rounded-lg hover:bg-gray-100 hover:border-b-2 hover:border-blue-400 transition w-full text-left flex items-center ${
                  selectedModule === module.name ? 'bg-blue-50' : ''
                }`}
                onClick={() => setSelectedModule(module.name)}
              >
                <FontAwesomeIcon icon={module.icon} className="mr-2" /> {module.name} 
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center bg-gray-50">
          <header className="bg-white text-gray-900 py-6 px-8 flex justify-between items-center shadow-md w-full">
            <h1 className="text-2xl font-extrabold">{selectedModule}</h1>
            <div>
              <SignedOut>
                <SignInButton className="text-blue-600 hover:text-blue-400" />
              </SignedOut>
              <SignedIn>
                <UserButton className="text-blue-600 hover:text-blue-400" />
              </SignedIn>
            </div>
          </header>

          <section className="container mx-auto px-6 md:px-12 py-12 flex-1 flex justify-center items-center">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center text-3xl md:text-4xl font-extrabold text-blue-600"
            >
              {selectedModule} - Welcome <span className="text-yellow-400">{user ? user.fullName : "Guest"}</span>
            </motion.h2>
          </section>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-100 text-gray-800 py-6 px-8 text-center mt-auto w-full">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Saarthi. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/contact" className="hover:text-blue-500 transition">Contact</Link>
            <Link href="/privacy" className="hover:text-blue-500 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-500 transition">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Dashboard;