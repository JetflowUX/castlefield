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
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & About */}
          <div className="flex flex-col gap-6">
            <Link
              to="/"
              className="flex items-center">
              <img 
                src="/img/logo.1780989690.png" 
                alt="Castlefield Car Centre" 
                className="h-10 md:h-12 w-auto object-contain" 
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Premium used car dealership based in Manchester. Every car sold
              comes with warranty for your peace of mind.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-brand-red hover:text-white transition-all">
                
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-brand-red hover:text-white transition-all">
                
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-brand-red hover:text-white transition-all">
                
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="font-heading font-semibold text-lg text-white">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {[
              'Home',
              'Showroom',
              'Finance',
              'Part Exchange',
              'About Us',
              'Contact'].
              map((item) =>
              <li key={item}>
                  <Link
                  to="#"
                  className="text-white/60 hover:text-white text-sm flex items-center gap-2 group transition-colors">
                  
                    <ChevronRight
                    size={14}
                    className="text-brand-red opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  
                    {item}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col gap-6">
            <h3 className="font-heading font-semibold text-lg text-white">
              Opening Hours
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span>Monday - Saturday</span>
                <span className="text-white">10:00 - 17:00</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span>Sunday</span>
                <span className="text-white">Closed</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="font-heading font-semibold text-lg text-white">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:01615050508"
                  className="flex items-start gap-3 text-white/60 hover:text-white transition-colors group">
                  
                  <div className="mt-1 text-brand-red group-hover:scale-110 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider mb-1">
                      Call Us
                    </div>
                    <div className="text-white font-medium">0161 50 50 508</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@castlefieldcarcentre.co.uk"
                  className="flex items-start gap-3 text-white/60 hover:text-white transition-colors group">
                  
                  <div className="mt-1 text-brand-red group-hover:scale-110 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider mb-1">
                      Email Us
                    </div>
                    <div className="text-white text-sm">
                      sales@castlefieldcarcentre.co.uk
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/60 group">
                  <div className="mt-1 text-brand-red">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider mb-1">
                      Location
                    </div>
                    <div className="text-sm leading-relaxed">
                      Castlefield Car Centre
                      <br />
                      1 Adelaide Street, Heywood,
                      <br />
                      Manchester, Lancashire, OL10 4HQ
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Castlefield Car Centre. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* FCA Regulatory Disclaimer */}
        <div className="mt-6 pt-6 border-t border-white/5 text-[10px] text-white/30 leading-relaxed">
          <p>
            Castlefield Car Centre Ltd is authorised and regulated by the Financial Conduct Authority, FRN: 845701. 
            All finance is subject to status and income. Written Quotation on request. We act as a credit broker not a lender. 
            We work with a number of carefully selected credit providers who may be able to offer you finance for your purchase. 
            We are only able to offer finance products from these providers.
          </p>
        </div>
      </div>
    </footer>);

}