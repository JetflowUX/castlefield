import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  Mail,
  Menu,
  X,
  Instagram,
  Facebook,
  Youtube } from
'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
const NAV_LINKS = [
{
  name: 'Home',
  path: '/'
},
{
  name: 'Showroom',
  path: '/showroom'
},
{
  name: 'Gallery',
  path: '/gallery'
},
{
  name: 'Services',
  path: '/services'
},
{
  name: 'About Us',
  path: '/about'
},
{
  name: 'Contact',
  path: '/contact'
}];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ?
        'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3' :
        'bg-transparent py-5'
      )}>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-10 flex items-center">
            <img 
              src="/img/logo.1780989690.png" 
              alt="Castlefield Car Centre" 
              className="h-10 md:h-12 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-white',
                location.pathname === link.path ?
                'text-white' :
                'text-white/60'
              )}>
              
                {link.name}
              </Link>
            )}
          </nav>

          {/* Contact & Socials (Desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-4 text-white/60">
              <a href="#" className="hover:text-brand-red transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-brand-red transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-brand-red transition-colors">
                <Youtube size={18} />
              </a>
            </div>
            <div className="h-6 w-px bg-white/20" />
            <div className="flex flex-col items-end text-sm">
              <a
                href="tel:01615050508"
                className="flex items-center gap-2 font-medium hover:text-brand-red transition-colors">
                
                <Phone size={14} className="text-brand-red" />
                0161 50 50 508
              </a>
              <a
                href="mailto:sales@castlefieldcarcentre.co.uk"
                className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors">
                
                <Mail size={12} />
                sales@castlefieldcarcentre.co.uk
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-10 p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -20
          }}
          className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 lg:hidden">
          
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className="text-lg font-medium text-white/80 hover:text-white py-2 border-b border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}>
              
                  {link.name}
                </Link>
            )}
              <div className="pt-4 flex flex-col gap-4">
                <a
                href="tel:01615050508"
                className="flex items-center gap-3 text-white">
                
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-red">
                    <Phone size={18} />
                  </div>
                  <span className="font-medium">0161 50 50 508</span>
                </a>
                <a
                href="mailto:sales@castlefieldcarcentre.co.uk"
                className="flex items-center gap-3 text-white/70">
                
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <span className="text-sm">
                    sales@castlefieldcarcentre.co.uk
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}