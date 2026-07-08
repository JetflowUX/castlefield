import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail('');
  };

  return (
    <footer className="glass-panel-heavy pt-20 pb-10 border-t border-white/5 relative z-20 overflow-hidden">
      {/* Visual background details */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 filter blur-3xl pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Get In Touch */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-white mb-6 pb-2 border-b border-white/5 relative">
              Get In Touch
              <div className="absolute bottom-0 left-0 w-12 h-[2px] bg-[#E01E1E]" />
            </h3>
            
            <div className="space-y-4 text-sm text-zinc-300">
              <p className="font-bold text-white tracking-wide uppercase text-xs">
                Castlefield Car Centre Ltd
              </p>
              <p className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-[#E01E1E]" />
                <span className="leading-relaxed">
                  1 Adelaide Street
                  <br />
                  Heywood, Manchester
                  <br />
                  Lancashire, OL10 4HQ
                </span>
              </p>
              <a href="tel:01615050508" className="flex items-center hover:text-[#E01E1E] transition-colors duration-300">
                <Phone className="w-4 h-4 mr-3 text-[#E01E1E]" />
                0161 50 50 508
              </a>
              <a href="mailto:sales@castlefieldcarcentre.co.uk" className="flex items-center hover:text-[#E01E1E] transition-colors duration-300 break-all">
                <Mail className="w-4 h-4 mr-3 text-[#E01E1E]" />
                sales@castlefieldcarcentre.co.uk
              </a>
              <div className="flex space-x-3 pt-4">
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center hover:bg-[#E01E1E] hover:border-red-500/25 transition-all duration-300 text-white"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center hover:bg-[#E01E1E] hover:border-red-500/25 transition-all duration-300 text-white"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center hover:bg-[#E01E1E] hover:border-red-500/25 transition-all duration-300 text-white"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Opening Hours */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-white mb-6 pb-2 border-b border-white/5 relative">
              Opening Hours
              <div className="absolute bottom-0 left-0 w-12 h-[2px] bg-[#E01E1E]" />
            </h3>
            
            <ul className="space-y-3 text-sm text-zinc-300 font-medium">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-500">Mon</span> <span>10:00 - 17:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-500">Tue</span> <span>10:00 - 17:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-500">Wed</span> <span>10:00 - 17:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-500">Thu</span> <span>10:00 - 17:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-500">Fri</span> <span>10:00 - 17:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-zinc-500">Sat</span> <span>10:00 - 17:00</span>
              </li>
              <li className="flex justify-between text-[#E01E1E] font-black uppercase tracking-wider pt-1">
                <span>Sun</span> <span>Appointment Only</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-white mb-6 pb-2 border-b border-white/5 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-[2px] bg-[#E01E1E]" />
            </h3>
            
            <ul className="space-y-3 text-sm text-zinc-300 font-medium">
              <li>
                <Link to="/" className="hover:text-[#E01E1E] hover:translate-x-1 inline-block transition-all duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/showroom" className="hover:text-[#E01E1E] hover:translate-x-1 inline-block transition-all duration-300">
                  Showroom
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#E01E1E] hover:translate-x-1 inline-block transition-all duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E01E1E] hover:translate-x-1 inline-block transition-all duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#E01E1E] hover:translate-x-1 inline-block transition-all duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#E01E1E] hover:translate-x-1 inline-block transition-all duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company Info & Newsletter */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-white mb-6 pb-2 border-b border-white/5 relative">
              Newsletter
              <div className="absolute bottom-0 left-0 w-12 h-[2px] bg-[#E01E1E]" />
            </h3>
            
            <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-medium">
              Join our mailing list to receive the latest arrivals and updates.
            </p>
            
            {/* Newsletter input */}
            <form onSubmit={handleSubscribe} className="flex gap-2 mb-6">
              <input
                type="email"
                required
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-zinc-950/80 border border-white/5 hover:border-zinc-700 focus:border-[#E01E1E] text-white rounded-lg py-2.5 px-3 appearance-none focus:outline-none focus:ring-1 focus:ring-[#E01E1E]/30 transition-all font-medium text-xs"
              />
              <button
                type="submit"
                className="bg-[#E01E1E] hover:bg-red-700 text-white p-2.5 rounded-lg border border-red-500/20 transition-all shadow-md shadow-red-950/20 flex items-center justify-center group"
              >
                <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </form>

            <p className="text-[10px] text-zinc-500 leading-relaxed font-semibold uppercase">
              FCA Regulated credit broker.
            </p>
          </div>
        </div>

        <div className="text-center text-xs text-zinc-500 pt-8 border-t border-white/5">
          <p className="font-medium">
            &copy; {new Date().getFullYear()} Castlefield Car Centre Ltd. All
            rights reserved. Registered in England & Wales.
          </p>
        </div>
      </div>
    </footer>
  );
}