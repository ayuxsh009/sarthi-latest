"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { user } = useUser();

  return (
    
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo with Click Event */}
        <Link href="./" className="flex items-center">
          <img
            src="/image-removebg-preview (5).png"
            alt="Saarthi"
            className="h-10 w-auto mr-2"
          />
          <span className="text-gray-800 text-lg font-bold tracking-wide font-serif">
            Saarthi
          </span>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-gray-800 hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-800 font-medium text-sm">
          <li>
            <Link href="/About" className="relative group text-gray-800 hover:text-blue-500 transition duration-300">
              About Us
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link href="/Programs" className="relative group text-gray-800 hover:text-blue-500 transition duration-300">
              Programs
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link href="/Resources" className="relative group text-gray-800 hover:text-blue-500 transition duration-300">
              Resources
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link href="/Howitworks" className="relative group text-gray-800 hover:text-blue-500 transition duration-300">
              How it Works
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link href="./" className="relative group text-gray-800 hover:text-blue-500 transition duration-300">
              Dashboard
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        {/* Enroll Now Button */}
        <Link
          href="/sign-in"
          className="hidden md:inline-block bg-blue-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-600 transition-transform transform hover:scale-110"
        >
          Sign In
        </Link>

        {/* Mobile Side Drawer */}
        <motion.div
          className={`fixed top-0 left-0 w-64 bg-white text-gray-800 h-full shadow-md transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}
          initial={{ x: '-100%' }}
          animate={{ x: isMenuOpen ? 0 : '-100%' }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="space-y-6 p-6 text-sm font-medium">
            <li>
              <Link href="/About" className="block hover:text-blue-500 transform transition-transform duration-200 hover:scale-105">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/Programs" className="block hover:text-blue-500 transform transition-transform duration-200 hover:scale-105">
                Programs
              </Link>
            </li>
            <li>
              <Link href="/Resources" className="block hover:text-blue-500 transform transition-transform duration-200 hover:scale-105">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/Howitworks" className="block hover:text-blue-500 transform transition-transform duration-200 hover:scale-105">
                How it Works
              </Link>
            </li>
            <li>
              <Link href="./" className="block hover:text-blue-500 transform transition-transform duration-200 hover:scale-105">
                Dashboard
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
