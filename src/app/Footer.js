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
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 px-8 md:px-20 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">About Saarthi</h3>
          <p className="text-gray-400 leading-relaxed">
            Saarthi empowers children through interactive and engaging learning
            experiences, fostering essential skills while making education fun.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-all"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-all"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-all"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-all"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/About" className="hover:text-indigo-500 transition-all">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/Programs" className="hover:text-indigo-500 transition-all">
                Programs
              </Link>
            </li>
            <li>
              <Link href="/Resources" className="hover:text-indigo-500 transition-all">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/Howitworks" className="hover:text-indigo-500 transition-all">
                How it Works
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="text-gray-400">
              <i className="fas fa-envelope mr-2"></i> support@saarthi.com
            </li>
            <li className="text-gray-400">
              <i className="fas fa-phone-alt mr-2"></i> +1 (800) 123-4567
            </li>
            <li className="text-gray-400">
              <i className="fas fa-map-marker-alt mr-2"></i> 123 Saarthi St., Fun City, USA
            </li>
          </ul>
        </div>

        {/* Additional Resources */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Additional Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/blog" className="hover:text-indigo-500 transition-all">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-indigo-500 transition-all">
                Events
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-indigo-500 transition-all">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-indigo-500 transition-all">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center">
        <p className="text-gray-500 mb-4">&copy; 2025 Saarthi. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <Link href="/privacy-policy" className="text-gray-400 hover:text-indigo-400">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-gray-400 hover:text-indigo-400">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
