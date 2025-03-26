"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faRobot, faChartLine, faUsers, faGraduationCap, faClone, faBookReader } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

const Dashboard = () => {
  const { user } = useUser();
  const [selectedModule, setSelectedModule] = useState("Dashboard");
  const [modalUrl, setModalUrl] = useState(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        sidebarRef.current.classList.remove("open");
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    sidebarRef.current.classList.toggle("open");
  };

  const openModal = (url) => {
    setModalUrl(url);
  };

  const closeModal = () => {
    setModalUrl(null);
  };

  return (
    <main className="bg-gray-100 min-h-screen flex flex-col">
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside ref={sidebarRef} className="w-64 bg-white text-gray-900 p-6 flex flex-col shadow-lg border-r-2 border-gray-300 transition-all duration-300 ease-in-out">
          <button className="absolute top-4 right-4 md:hidden" onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6" />
            </svg>
          </button>
          <div className="mb-6 flex items-center">
            <Image src="/logo.png" alt="Saarthi Logo" width={50} height={50} />
            <h2 className="text-2xl font-bold ml-2 text-black-600">Saarthi</h2>
          </div>
          <nav className="space-y-4">
            {[
              { name: 'Dashboard', icon: faHouse, link: '/Main' },
              { name: 'AI Course Generator', icon: faRobot, link: 'https://ai-course-generator-main.vercel.app/dashboard' },
              { name: 'AI Exam Prep', icon: faGraduationCap, link: 'https://ai-exam-prep-seven.vercel.app/sign-in?redirect_url=https%3A%2F%2Fai-exam-prep-seven.vercel.app%2Fdashboard' },
              { name: 'AI Mock Interview', icon: faChartLine, link: '/ai-mock-interview' },
              { name: 'AI ChatBot', icon: faUsers, link: '/ai-chatbot' },
              { name: 'Mentor Meet Booking', icon: faClone, link: '/mentor-meet-booking' },
              { name: 'E-Library', icon: faBookReader, link: '/e-library' },
              { name: 'Discuss', icon: faUsers, link: '/Eassy' },
            ].map((module) => (
              <Link
                key={module.name}
                href={module.link}
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
            <button onClick={() => openModal('/contact')} className="hover:text-blue-500 transition">Contact</button>
            <button onClick={() => openModal('/privacy')} className="hover:text-blue-500 transition">Privacy Policy</button>
          </div>
        </div>
      </footer>

      {/* Modal to load external pages */}
      {modalUrl && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full relative">
            <button onClick={closeModal} className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
              Close
            </button>
            <iframe src={modalUrl} className="w-full h-[500px] border-none"></iframe>
          </div>
        </div>
      )}
    </main>
  );
};

export default Dashboard;
