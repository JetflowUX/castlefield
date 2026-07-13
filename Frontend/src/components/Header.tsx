import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  Mail,
  Menu,
  X,
  Instagram,
  Facebook,
  Youtube,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

interface NavLinkItem {
  name: string;
  path: string;
  children?: { name: string; path: string }[];
}

const NAV_LINKS: NavLinkItem[] = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Showroom',
    path: '/showroom',
    children: [
      { name: 'View All Cars', path: '/showroom' },
      { name: 'Used Audi', path: '/showroom?make=audi' },
      { name: 'Used BMW', path: '/showroom?make=bmw' },
      { name: 'Used Kia', path: '/showroom?make=kia' },
      { name: 'Used Land Rover', path: '/showroom?make=land-rover' },
      { name: 'Used Mercedes-Benz', path: '/showroom?make=mercedes-benz' },
      { name: 'Used Vauxhall', path: '/showroom?make=vauxhall' },
    ]
  },
  {
    name: 'Gallery',
    path: '/gallery'
  },
  {
    name: 'Services',
    path: '/services',
    children: [
      { name: 'Car Finance', path: '/services#finance' },
      { name: 'Part Exchange', path: '/services#partex' },
      { name: 'Looking to Sell?', path: '/contact?type=sell' },
      { name: 'Vehicle Sourcing', path: '/services#sourcing' },
    ]
  },
  {
    name: 'About Us',
    path: '/about',
    children: [
      { name: 'About Us', path: '/about' },
      { name: 'Customer Reviews', path: '/about#testimonials' },
      { name: 'Complaint Procedure', path: '/about#complaints' },
    ]
  },
  {
    name: 'Contact',
    path: '/contact'
  }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedLinks, setMobileExpandedLinks] = useState<Record<string, boolean>>({});
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileLink = (name: string) => {
    setMobileExpandedLinks(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ?
        'bg-background/90 backdrop-blur-xl border-b border-border py-3 shadow-lg' :
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

          {/* Desktop Nav with Custom Interactive Dropdowns */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.children ? (
                  <button
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-foreground flex items-center gap-1 py-2 focus:outline-none',
                      location.pathname.startsWith(link.path) ? 'text-foreground' : 'text-foreground/60'
                    )}
                  >
                    {link.name}
                    <ChevronDown size={14} className={cn("transition-transform duration-300", activeDropdown === link.name && "rotate-180 text-brand-red")} />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-foreground py-2 block',
                      location.pathname === link.path ? 'text-foreground' : 'text-foreground/60'
                    )}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown Menu Frame */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 12, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-52 glass-panel rounded-xl py-3 border border-border shadow-2xl z-50 flex flex-col gap-0.5 overflow-hidden animate-fade-in"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          onClick={() => setActiveDropdown(null)}
                          className="px-4 py-2.5 text-xs text-foreground/75 hover:text-foreground hover:bg-foreground/5 transition-all font-semibold block"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Contact, Socials, & Info (Desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-4 text-foreground/60">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">
                <Youtube size={18} />
              </a>
            </div>

            <div className="h-6 w-px bg-border" />

            <div className="flex flex-col items-end text-sm">
              <a
                href="tel:01615050508"
                className="flex items-center gap-2 font-medium hover:text-brand-red transition-colors">
                <Phone size={14} className="text-brand-red animate-pulse" />
                0161 50 50 508
              </a>
              <a
                href="mailto:sales@castlefieldcarcentre.co.uk"
                className="flex items-center gap-2 text-xs text-foreground/60 hover:text-foreground transition-colors">
                <Mail size={12} />
                sales@castlefieldcarcentre.co.uk
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-10 p-2 text-foreground hover:text-brand-red transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdowns */}
      <AnimatePresence>
        {isMobileMenuOpen &&
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border lg:hidden overflow-y-auto max-h-[80vh] shadow-2xl">
            
            <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="flex flex-col border-b border-border/50">
                  {link.children ? (
                    <>
                      <button
                        onClick={() => toggleMobileLink(link.name)}
                        className="text-base font-medium text-foreground/80 hover:text-foreground py-3 flex items-center justify-between focus:outline-none"
                      >
                        <span>{link.name}</span>
                        <ChevronDown size={16} className={cn("transition-transform duration-200 text-foreground/50", mobileExpandedLinks[link.name] && "rotate-180 text-brand-red")} />
                      </button>
                      
                      <AnimatePresence>
                        {mobileExpandedLinks[link.name] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden flex flex-col pl-4 pb-3 gap-2"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.name}
                                to={child.path}
                                className="text-sm font-semibold text-foreground/50 hover:text-foreground py-1.5 block"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-base font-medium text-foreground/80 hover:text-foreground py-3 block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Contact Block inside Mobile Drawer */}
              <div className="pt-6 flex flex-col gap-4">
                <a
                  href="tel:01615050508"
                  className="flex items-center gap-3 text-foreground">
                  <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-brand-red">
                    <Phone size={18} />
                  </div>
                  <span className="font-medium text-sm">0161 50 50 508</span>
                </a>
                <a
                  href="mailto:sales@castlefieldcarcentre.co.uk"
                  className="flex items-center gap-3 text-foreground/70">
                  <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <span className="text-xs">sales@castlefieldcarcentre.co.uk</span>
                </a>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>
  );
}