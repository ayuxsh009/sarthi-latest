"use client";
import { SignUp } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import Header from '../../Header';

export default function Page() {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col items-center justify-center min-h-[80vh] py-12"
          >
            <motion.div
              className="w-full max-w-md"
            >
              
              <SignUp 
                appearance={{
                  elements: {
                    rootBox: 'w-full',
                    card: 'shadow-lg rounded-xl border border-gray-200 bg-white p-6 md:p-8',
                    headerTitle: 'text-lg font-medium text-gray-700',
                    headerSubtitle: 'text-sm text-gray-500',
                    socialButtonsBlockButton: 'border-gray-300 hover:bg-gray-50',
                    socialButtonsBlockButtonText: 'text-gray-700',
                    dividerLine: 'bg-gray-200',
                    dividerText: 'text-gray-400',
                    formFieldLabel: 'text-gray-700',
                    formFieldInput: 'border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
                    footerActionText: 'text-gray-600',
                    footerActionLink: 'text-blue-600 hover:text-blue-800',
                    formButtonPrimary: 'bg-blue-600 hover:bg-blue-700',
                  }
                }}
                afterSignUpUrl="/onboarding"
                signInUrl="/sign-in"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 text-center text-gray-500 text-sm"
            >
              <p>Already have an account? <a href="/sign-in" className="text-blue-600 hover:underline">Sign in</a></p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}