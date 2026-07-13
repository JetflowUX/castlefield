import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const SITEMAP_SECTIONS = [
  {
    title: 'Main Navigation',
    links: [
      { label: 'Home Page', path: '/' },
      { label: 'Showroom Index', path: '/showroom' },
      { label: 'Photo & Vehicle Gallery', path: '/gallery' },
      { label: 'Services & Offerings', path: '/services' },
      { label: 'About Our Dealership', path: '/about' },
      { label: 'Contact & Location', path: '/contact' },
    ]
  },
  {
    title: 'Showroom Brands',
    links: [
      { label: 'Audi Inventory', path: '/showroom?make=audi' },
      { label: 'BMW Inventory', path: '/showroom?make=bmw' },
      { label: 'Kia Inventory', path: '/showroom?make=kia' },
      { label: 'Land Rover Inventory', path: '/showroom?make=land-rover' },
      { label: 'Mercedes-Benz Inventory', path: '/showroom?make=mercedes-benz' },
      { label: 'Vauxhall Inventory', path: '/showroom?make=vauxhall' },
    ]
  },
  {
    title: 'Services & Support',
    links: [
      { label: 'Car Finance Calculator', path: '/services#finance' },
      { label: 'Part Exchange Valuations', path: '/services#partex' },
      { label: 'Vehicle Sourcing Requests', path: '/services#sourcing' },
      { label: 'Sell Your Car Valuation', path: '/contact?type=sell' },
    ]
  },
  {
    title: 'Company & Compliance',
    links: [
      { label: 'Customer Reviews & Testimonials', path: '/about#testimonials' },
      { label: 'Complaint Procedure Policy', path: '/about#complaints' },
      { label: 'Privacy Policy', path: '#' },
      { label: 'Cookie Policy', path: '#' },
      { label: 'Terms & Conditions', path: '#' },
    ]
  }
];

export function Sitemap() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-4 md:px-6 relative overflow-hidden select-none text-foreground">
      
      {/* Ambient glowing blobs */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-brand-red/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-foreground/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <span className="text-brand-red text-xs font-bold uppercase tracking-widest block mb-2">Website Architecture</span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
            Sitemap
          </h1>
          <p className="text-foreground/60 text-base md:text-lg max-w-xl font-light">
            Quickly navigate to any page, stock inventory make, custom vehicle sourcing request, or regulatory policy link.
          </p>
        </motion.div>

        {/* Index Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {SITEMAP_SECTIONS.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-border hover:border-brand-red/30 transition-all flex flex-col gap-4 shadow-sm"
            >
              <h3 className="font-heading text-base font-bold text-foreground border-b border-border pb-2.5">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-foreground/60 hover:text-foreground text-xs md:text-sm transition-colors flex items-center gap-1.5 group font-medium"
                    >
                      <ArrowRight size={12} className="text-brand-red group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-panel p-8 rounded-2xl border border-border flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-md shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-14 h-14 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red border border-brand-red/20 shadow-md">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold text-foreground mb-1">Dealer Authorization & Regulations</h4>
              <p className="text-foreground/60 text-sm max-w-xl font-light">
                Castlefield Car Centre Ltd is authorised and regulated by the Financial Conduct Authority (FCA), FRN: 845701. Registered in England & Wales.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 bg-brand-red hover:bg-red-700 text-white rounded-xl font-semibold transition-all flex items-center gap-2 text-sm whitespace-nowrap"
          >
            Get In Touch
            <ArrowRight size={16} />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
