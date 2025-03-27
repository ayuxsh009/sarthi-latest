"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Cookie, RefreshCw } from "lucide-react";
import Header from "../Header";
import Footer from "../Footer";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      
      <main className="min-h-[calc(100vh-160px)] py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center bg-blue-100 p-3 rounded-full mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Privacy Policy</h1>
                <p className="text-gray-600">
                  Your privacy matters to us. Here's how we protect your information.
                </p>
              </div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="border-b border-gray-100 pb-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-2 rounded-lg">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Information We Collect</h2>
                      <p className="text-gray-700">
                        We collect personal information such as your name, email address, and message when you interact with our platform.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="border-b border-gray-100 pb-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-50 p-2 rounded-lg">
                      <Lock className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">2. How We Use Your Information</h2>
                      <p className="text-gray-700">
                        Your information helps us respond to inquiries, improve services, and deliver a better user experience.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="border-b border-gray-100 pb-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-50 p-2 rounded-lg">
                      <Lock className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">3. Data Protection</h2>
                      <p className="text-gray-700">
                        We implement industry-standard security measures to safeguard your data against unauthorized access.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="border-b border-gray-100 pb-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-2 rounded-lg">
                      <Cookie className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">4. Cookies & Tracking</h2>
                      <p className="text-gray-700">
                        We use cookies to enhance your experience. You can manage these in your browser settings.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-50 p-2 rounded-lg">
                      <RefreshCw className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">5. Policy Updates</h2>
                      <p className="text-gray-700">
                        We may update this policy periodically. Changes will be posted on this page.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="mt-10 text-center">
                <p className="text-gray-700">
                  Questions? <a href="/contact" className="text-blue-600 hover:text-blue-800 transition-colors">Contact us</a> anytime.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;