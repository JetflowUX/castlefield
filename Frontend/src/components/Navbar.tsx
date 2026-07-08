import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Menu,
  X,
  ChevronDown } from
'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Showroom',
    path: '/showroom',
    hasDropdown: true
  },
  {
    name: 'Gallery',
    path: '/gallery'
  },
  {
    name: 'Services',
    path: '/services',
    hasDropdown: true
  },
  {
    name: 'About Us',
    path: '/about',
    hasDropdown: true
  },
  {
    name: 'Contact',
    path: '/contact'
  }];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Contact Bar */}
      <div className="bg-zinc-950 text-zinc-400 text-xs py-2 hidden md:block">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a
              href="tel:01615050508"
              className="flex items-center hover:text-[#E01E1E] transition-colors">
              
              <Phone className="w-3 h-3 mr-2" />
              0161 50 50 508
            </a>
            <a
              href="mailto:sales@castlefieldcarcentre.co.uk"
              className="flex items-center hover:text-[#E01E1E] transition-colors">
              
              <Mail className="w-3 h-3 mr-2" />
              sales@castlefieldcarcentre.co.uk
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-[#E01E1E] transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-[#E01E1E] transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-[#E01E1E] transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${isScrolled ? 'bg-zinc-950/98 backdrop-blur-lg border-b border-white/5 py-4 shadow-xl shadow-black/60' : 'bg-gradient-to-b from-black/80 to-transparent py-6'}`}>
        
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative flex items-center">
              <div className="text-2xl font-black italic tracking-tighter text-white">
                CASTLEFIELD
              </div>
              <div className="absolute -bottom-3 left-0 text-[0.6rem] font-bold tracking-widest text-[#E01E1E] uppercase">
                Car Centre
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-semibold flex items-center transition-colors hover:text-[#E01E1E] ${location.pathname === link.path ? 'text-[#E01E1E]' : 'text-white'}`}>
              
                {link.name}
                {link.hasDropdown &&
              <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
              }
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            
            {mobileMenuOpen ?
            <X className="w-6 h-6" /> :

            <Menu className="w-6 h-6" />
            }
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="lg:hidden bg-[#0E0E10] border-t border-zinc-800 overflow-hidden">
          
            <div className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white font-medium py-2 border-b border-zinc-800/50 flex justify-between items-center">
              
                  {link.name}
                  {link.hasDropdown &&
              <ChevronDown className="w-4 h-4 opacity-50" />
              }
                </Link>
            )}
              <div className="pt-4 flex space-x-4 text-zinc-400">
                <a href="#">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}