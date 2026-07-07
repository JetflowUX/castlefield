import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';
export function CtaBand() {
  return (
    <section className="bg-[#E01E1E] py-16 relative overflow-hidden">
      {/* Subtle background pattern/texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="text-center lg:text-left">
            
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
              Visit Our Showroom Today
            </h2>
            <p className="text-red-100 text-lg font-medium flex items-center justify-center lg:justify-start gap-2">
              <MapPin className="w-5 h-5" />1 Adelaide Street, Heywood,
              Manchester, OL10 4HQ
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            
            <a
              href="tel:01615050508"
              className="bg-white text-[#E01E1E] hover:bg-zinc-100 px-8 py-4 rounded-md font-bold tracking-wide flex items-center justify-center gap-2 transition-colors shadow-lg">
              
              <Phone className="w-5 h-5" />
              Call 0161 50 50 508
            </a>
            <a
              href="https://maps.google.com/?q=Castlefield+Car+Centre+Heywood"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-950 text-white hover:bg-black px-8 py-4 rounded-md font-bold tracking-wide flex items-center justify-center gap-2 transition-colors shadow-lg">
              
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>);

}