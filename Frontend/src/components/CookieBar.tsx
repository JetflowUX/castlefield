import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
export function CookieBar() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const hasConsented = localStorage.getItem('castlefield_cookie_consent');
    if (!hasConsented) {
      // Small delay so it doesn't pop immediately on load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);
  const handleAccept = () => {
    localStorage.setItem('castlefield_cookie_consent', 'true');
    setIsVisible(false);
  };
  return (
    <AnimatePresence>
      {isVisible &&
      <motion.div
        initial={{
          y: 100,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        exit={{
          y: 100,
          opacity: 0
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 100
        }}
        className="fixed bottom-0 left-0 right-0 z-[100] bg-zinc-900 border-t border-zinc-800 shadow-2xl shadow-black p-4">
        
          <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-zinc-300 text-sm text-center sm:text-left">
              We use cookies to help our site function correctly and to
              understand how it is used. By clicking "I understand", you agree
              to us doing so. You can find out more about cookies and how to
              manage them in our{' '}
              <Link
              to="/cookie-policy"
              className="text-[#E01E1E] hover:underline font-medium">
              
                Cookie Policy
              </Link>
              .
            </p>
            <button
            onClick={handleAccept}
            className="whitespace-nowrap bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-md font-bold text-sm transition-colors shadow-lg">
            
              I understand
            </button>
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}