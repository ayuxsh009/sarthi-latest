"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useUser();
  const mobileMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Adjust header styling when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white shadow-md transition-all ${isScrolled ? 'py-2' : 'py-3'}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
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
            aria-label="Toggle navigation menu"
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
          {[
            { href: "/About", label: "About Us" },
            { href: "/Programs", label: "Programs" },
            { href: "/Resources", label: "Resources" },
            { href: "/Howitworks", label: "How it Works" },
            { href: "./", label: "Dashboard" },
          ].map(({ href, label }) => (
            <li key={label}>
              <Link href={href} className="relative group text-gray-800 hover:text-blue-500 transition duration-300">
                {label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Sign In Button */}
        <Link
          href="/sign-in"
          className="hidden md:inline-block bg-blue-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-600 transition-transform transform hover:scale-110"
          aria-label="Sign In"
        >
          Sign In
        </Link>
      </div>

      {/* Mobile Side Drawer and Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMenu}
              aria-hidden="true"
            />

            {/* Mobile Menu */}
            <motion.nav
              ref={mobileMenuRef}
              className="fixed top-0 left-0 w-64 h-full bg-white text-gray-800 shadow-md z-50"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6">
                <button
                  onClick={toggleMenu}
                  className="absolute top-4 right-4 text-gray-800 focus:outline-none"
                  aria-label="Close mobile menu"
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
                <ul className="space-y-6 mt-10 text-sm font-medium">
                  {[
                    { href: "/About", label: "About Us" },
                    { href: "/Programs", label: "Programs" },
                    { href: "/Resources", label: "Resources" },
                    { href: "/Howitworks", label: "How it Works" },
                    { href: "./", label: "Dashboard" },
                  ].map(({ href, label }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="block hover:text-blue-500 transition-transform duration-200 hover:scale-105"
                        onClick={toggleMenu}
                        aria-label={label}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
