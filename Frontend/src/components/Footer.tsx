import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Footer() {
  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Get In Touch */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-zinc-800 pb-2">
              Get In Touch
            </h3>
            <div className="space-y-4 text-sm text-zinc-400">
              <p className="font-semibold text-zinc-300">
                Castlefield Car Centre Ltd
              </p>
              <p className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-[#E01E1E]" />
                <span>
                  1 Adelaide Street
                  <br />
                  Heywood
                  <br />
                  Manchester
                  <br />
                  Lancashire
                  <br />
                  OL10 4HQ
                </span>
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-[#E01E1E]" />
                0161 50 50 508
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-[#E01E1E]" />
                sales@castlefieldcarcentre.co.uk
              </p>
              <div className="flex space-x-4 pt-4">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-[#E01E1E] transition-colors text-white">
                  
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-[#E01E1E] transition-colors text-white">
                  
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-[#E01E1E] transition-colors text-white">
                  
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-zinc-800 pb-2">
              Opening Hours
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex justify-between border-b border-zinc-900 pb-2">
                <span>Mon</span> <span>10:00 - 17:00</span>
              </li>
              <li className="flex justify-between border-b border-zinc-900 pb-2">
                <span>Tue</span> <span>10:00 - 17:00</span>
              </li>
              <li className="flex justify-between border-b border-zinc-900 pb-2">
                <span>Wed</span> <span>10:00 - 17:00</span>
              </li>
              <li className="flex justify-between border-b border-zinc-900 pb-2">
                <span>Thu</span> <span>10:00 - 17:00</span>
              </li>
              <li className="flex justify-between border-b border-zinc-900 pb-2">
                <span>Fri</span> <span>10:00 - 17:00</span>
              </li>
              <li className="flex justify-between border-b border-zinc-900 pb-2">
                <span>Sat</span> <span>10:00 - 17:00</span>
              </li>
              <li className="flex justify-between text-[#E01E1E] font-medium pt-1">
                <span>Sun</span> <span>Appointment Only</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-zinc-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li>
                <Link to="/" className="hover:text-[#E01E1E] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/showroom"
                  className="hover:text-[#E01E1E] transition-colors">
                  
                  Showroom
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-[#E01E1E] transition-colors">
                  
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-[#E01E1E] transition-colors">
                  
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#E01E1E] transition-colors">
                  
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#E01E1E] transition-colors">
                  
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-zinc-800 pb-2">
              Company Info
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Every Car Sold Comes With Warranty. For your peace of mind.
            </p>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Castlefield Car Centre Ltd is authorized and regulated by the
              Financial Conduct Authority. We act as a credit broker not a
              lender.
            </p>
          </div>
        </div>

        <div className="text-center text-xs text-zinc-600 pt-8 border-t border-zinc-900">
          <p>
            &copy; {new Date().getFullYear()} Castlefield Car Centre Ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>);

}