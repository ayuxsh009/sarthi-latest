"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-white via-gray-200 to-white text-gray-700 px-8 md:px-20 py-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center lg:text-left">
        {/* About Section */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">About Saarthi</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Saarthi empowers children through interactive and engaging learning
            experiences, fostering essential skills while making education fun.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-all transform hover:scale-110"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-all transform hover:scale-110"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-all transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-all transform hover:scale-110"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/About"
                className="hover:text-indigo-500 transition-all transform hover:scale-105"
                aria-label="About Us"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/Programs"
                className="hover:text-indigo-500 transition-all transform hover:scale-105"
                aria-label="Programs"
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                href="/Resources"
                className="hover:text-indigo-500 transition-all transform hover:scale-105"
                aria-label="Resources"
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                href="/Howitworks"
                className="hover:text-indigo-500 transition-all transform hover:scale-105"
                aria-label="How it Works"
              >
                How it Works
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="text-gray-600">
              <i className="fas fa-envelope mr-2"></i>{" "}
              <a href="mailto:support@saarthi.com">saarthi.education.help@gmail.com</a>
            </li>
            <li className="text-gray-600">
              <i className="fas fa-phone-alt mr-2"></i> +91 (800) 123-4567
            </li>
            <li className="text-gray-600">
              <i className="fas fa-map-marker-alt mr-2"></i> IIITDM Jabalpur,
              Madhya Pradesh
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-300 pt-6 text-center">
        <p className="text-gray-500 mb-4">&copy; 2025 Saarthi. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <Link href="/privacy" className="text-gray-600 hover:text-indigo-400" aria-label="Privacy Policy">
            Privacy Policy
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-indigo-400" aria-label="Terms of Service">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
