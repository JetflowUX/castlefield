import React from 'react';
import { motion } from 'framer-motion';
import {
  Banknote,
  Shield,
  Repeat,
  Wrench,
  CarFront,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThreeDCard } from './ThreeDCard';

const services = [
  {
    icon: Banknote,
    title: 'Car Finance',
    description: 'Competitive rates from our trusted panel of lenders.',
    link: '/services/finance'
  },
  {
    icon: Shield,
    title: 'Warranty',
    description: 'Extended warranty options for complete peace of mind.',
    link: '/services/warranty'
  },
  {
    icon: Repeat,
    title: 'Part Exchange',
    description: 'Trade in your old car for a great price today.',
    link: '/services/part-exchange'
  },
  {
    icon: Wrench,
    title: 'Servicing & MOT',
    description: 'Expert maintenance to keep your car running smoothly.',
    link: '/services/servicing'
  },
  {
    icon: CarFront,
    title: 'Sell Your Car',
    description: 'We buy cars for cash with same-day payment.',
    link: '/services/sell'
  }
];

export function Services() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-white/5">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#E01E1E]/5 to-transparent pointer-events-none" />
      <div className="glow-blob glow-blob-red -bottom-64 -left-32 animate-float-slow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#E01E1E] font-black tracking-widest uppercase text-xs mb-3 block"
            >
              Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight"
            >
              Everything Under One Roof
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="h-1 bg-gradient-to-r from-red-600 to-transparent rounded-full mt-4"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services"
              className="text-sm uppercase tracking-widest text-[#E01E1E] hover:text-white font-black flex items-center gap-2 transition-colors duration-300"
            >
              View all services <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </motion.div>
        </div>

        {/* Asymmetric 6-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = index < 2;
            const gridSpanClass = isFeatured 
              ? 'md:col-span-3 sm:col-span-2' 
              : 'md:col-span-2 sm:col-span-1';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`${gridSpanClass} h-full`}
              >
                <ThreeDCard className="h-full">
                  <Link
                    to={service.link}
                    className={`block h-full glass-panel p-8 rounded-2xl border transition-all duration-300 group flex flex-col justify-between relative overflow-hidden ${
                      isFeatured 
                        ? 'border-red-500/20 bg-gradient-to-br from-red-950/20 via-zinc-900/60 to-[#0e0e10]/80 neon-glow-red' 
                        : 'border-white/5 hover:border-red-500/25 neon-glow-red-hover'
                    }`}
                  >
                    {isFeatured && (
                      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-red-600 to-red-400" />
                    )}

                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <Icon className={`w-8 h-8 transition-all duration-300 ${
                          isFeatured ? 'text-[#E01E1E] scale-110' : 'text-zinc-400 group-hover:text-[#E01E1E] group-hover:scale-110'
                        }`} />
                        {isFeatured && (
                          <span className="text-[10px] font-black uppercase tracking-widest text-[#E01E1E] bg-red-600/10 px-2 py-1 rounded">
                            Core Service
                          </span>
                        )}
                      </div>
                      <h3 className={`text-xl font-bold text-white mb-3 tracking-tight ${isFeatured ? 'text-red-500' : 'group-hover:text-red-500 transition-colors duration-300'}`}>
                        {service.title}
                      </h3>
                      <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-medium mb-8">
                        {service.description}
                      </p>
                    </div>
                    <span className="text-[#E01E1E] text-xs font-black uppercase tracking-wider flex items-center gap-1.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      Learn more <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </span>
                  </Link>
                </ThreeDCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}