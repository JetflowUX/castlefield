import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  ChevronRight } from
'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-20 pb-10 select-none text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center">
              <img 
                src="/img/logo.1780989690.png" 
                alt="Castlefield Car Centre" 
                className="h-10 md:h-12 w-auto object-contain dark:brightness-100 brightness-95" 
              />
            </Link>
            <p className="text-foreground/50 text-xs md:text-sm leading-relaxed font-light">
              Premium used car dealership based in Manchester. Every car sold comes with warranty for your peace of mind.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/50 hover:bg-brand-red hover:text-white hover:scale-105 transition-all">
                <Instagram size={16} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/50 hover:bg-brand-red hover:text-white hover:scale-105 transition-all">
                <Facebook size={16} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/50 hover:bg-brand-red hover:text-white hover:scale-105 transition-all">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Showroom Navigation Column */}
          <div className="flex flex-col gap-5">
            <h3 className="font-heading font-semibold text-sm text-foreground uppercase tracking-wider">
              Showroom
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'View All Cars', path: '/showroom' },
                { label: 'Used Audi', path: '/showroom?make=audi' },
                { label: 'Used BMW', path: '/showroom?make=bmw' },
                { label: 'Used Land Rover', path: '/showroom?make=land-rover' },
                { label: 'Used Mercedes-Benz', path: '/showroom?make=mercedes-benz' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-foreground/50 hover:text-foreground text-xs md:text-sm flex items-center gap-1.5 group transition-colors font-medium"
                  >
                    <ChevronRight size={12} className="text-brand-red opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-5">
            <h3 className="font-heading font-semibold text-sm text-foreground uppercase tracking-wider">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'Car Finance', path: '/services#finance' },
                { label: 'Part Exchange', path: '/services#partex' },
                { label: 'Vehicle Sourcing', path: '/services#sourcing' },
                { label: 'Looking to Sell?', path: '/contact?type=sell' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-foreground/50 hover:text-foreground text-xs md:text-sm flex items-center gap-1.5 group transition-colors font-medium"
                  >
                    <ChevronRight size={12} className="text-brand-red opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About & Hours Column */}
          <div className="flex flex-col gap-5">
            <h3 className="font-heading font-semibold text-sm text-foreground uppercase tracking-wider">
              About & Hours
            </h3>
            <ul className="flex flex-col gap-2 text-xs text-foreground/50 mb-3 border-b border-border pb-3">
              <li className="flex justify-between items-center">
                <span>Mon - Sat</span>
                <span className="text-foreground font-semibold">10:00 - 17:00</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Sunday</span>
                <span className="text-brand-red font-semibold">Closed</span>
              </li>
            </ul>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Customer Reviews', path: '/about#testimonials' },
                { label: 'Complaint Procedure', path: '/about#complaints' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-foreground/50 hover:text-foreground text-xs md:text-sm flex items-center gap-1.5 group transition-colors font-medium"
                  >
                    <ChevronRight size={12} className="text-brand-red opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col gap-5">
            <h3 className="font-heading font-semibold text-sm text-foreground uppercase tracking-wider">
              Contact Info
            </h3>
            <ul className="flex flex-col gap-3.5 text-xs text-foreground/50">
              <li className="flex items-start gap-2.5 group">
                <Phone size={14} className="text-brand-red mt-0.5" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-foreground/30 mb-0.5">Call Us</div>
                  <a href="tel:01615050508" className="text-foreground hover:text-brand-red font-bold transition-colors">0161 50 50 508</a>
                </div>
              </li>
              <li className="flex items-start gap-2.5 group">
                <Mail size={14} className="text-brand-red mt-0.5" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-foreground/30 mb-0.5">Email Us</div>
                  <a href="mailto:sales@castlefieldcarcentre.co.uk" className="text-foreground hover:text-brand-red transition-colors">sales@castlefieldcarcentre.co.uk</a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-brand-red mt-0.5" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-foreground/30 mb-0.5">Location</div>
                  <span className="text-foreground font-semibold leading-relaxed">
                    1 Adelaide Street, Heywood,<br />
                    Manchester, OL10 4HQ
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground/40">
          <p>
            &copy; {new Date().getFullYear()} Castlefield Car Centre. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/sitemap" className="hover:text-foreground transition-colors font-medium text-brand-red">
              Sitemap
            </Link>
            <Link to="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
            <Link to="#" className="hover:text-foreground transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* FCA Regulatory Disclaimer */}
        <div className="mt-6 pt-6 border-t border-border/50 text-[10px] text-foreground/30 leading-relaxed font-light">
          <p>
            Castlefield Car Centre Ltd is authorised and regulated by the Financial Conduct Authority, FRN: 845701. 
            All finance is subject to status and income. Written Quotation on request. We act as a credit broker not a lender. 
            We work with a number of carefully selected credit providers who may be able to offer you finance for your purchase. 
            We are only able to offer finance products from these providers.
          </p>
        </div>

      </div>
    </footer>
  );
}