"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 text-gray-700 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start"
          >
            <Link href="/" className="flex items-center mb-4">
              <img 
                src="/image-removebg-preview (5).png" 
                alt="Saarthi Logo" 
                className="h-10 w-auto mr-2"
              />
              <span className="text-xl font-bold text-gray-800">Saarthi</span>
            </Link>
            <p className="text-gray-600 text-center md:text-left mb-6">
              Empowering children through interactive and engaging learning experiences.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
                { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
                { icon: <Instagram className="h-5 w-5" />, label: "Instagram" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white p-2 rounded-full shadow-sm hover:shadow-md border border-gray-200 hover:bg-blue-50 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/About", label: "About Us" },
                { href: "/Programs", label: "Programs" },
                { href: "/Resources", label: "Resources" },
                { href: "/Howitworks", label: "How It Works" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href={link.href} className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <a href="mailto:saarthi.education.help@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  saarthi.education.help@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-600">+91 (800) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-600">IIITDM Jabalpur, Madhya Pradesh</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Saarthi. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;