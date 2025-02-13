"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const PrivacyPolicy = () => {
  const router = useRouter();

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-xl mt-10 border border-gray-300">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Privacy Policy</h1>
      
      <p className="text-gray-700 mb-4">
        Welcome to Saarthi A Educational Platform ! Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our services.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">1. Information We Collect</h2>
      <p className="text-gray-700 mb-4">
        We collect personal information such as your name, email address, and message when you submit a contact form on our website.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="text-gray-700 mb-4">
        We use your personal information to respond to inquiries, improve our services, and ensure a seamless user experience.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">3. Data Protection</h2>
      <p className="text-gray-700 mb-4">
        We take security seriously and implement industry-standard measures to protect your data from unauthorized access.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">4. Cookies & Tracking</h2>
      <p className="text-gray-700 mb-4">
        We may use cookies to enhance user experience and analyze website traffic. You can control cookie settings in your browser.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">5. Changes to This Policy</h2>
      <p className="text-gray-700 mb-4">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page.
      </p>

      <p className="text-gray-700 mt-6">
        If you have any questions about this Privacy Policy, please <Link href="/contact" className="hover:text-blue-500 transition">Contact</Link>
      </p>

      {/* <div className="mt-6 flex justify-center">
        <button
          onClick={() => router.push("/Main")}
          className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition"
        >
          Back to Home
        </button>
      </div> */}
    </div>
  );
};

export default PrivacyPolicy;
