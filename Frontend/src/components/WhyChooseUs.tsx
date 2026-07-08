import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CreditCard, Repeat, BadgeCheck } from 'lucide-react';
import { ThreeDCard } from './ThreeDCard';

const features = [
  {
    icon: ShieldCheck,
    title: 'Every Car Warrantied',
    description: 'Comprehensive coverage for your peace of mind on every vehicle we sell.'
  },
  {
    icon: CreditCard,
    title: 'Finance Available',
    description: 'Flexible finance packages tailored to suit your budget and requirements.'
  },
  {
    icon: Repeat,
    title: 'Part Exchange Welcome',
    description: 'Get a competitive valuation for your current vehicle against any of our cars.'
  },
  {
    icon: BadgeCheck,
    title: 'Quality Checked',
    description: 'Rigorous multi-point mechanical inspections before any car reaches our showroom.'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0E0E10] relative overflow-hidden border-t border-white/5">
      {/* Dynamic Background Blob */}
      <div className="glow-blob glow-blob-purple top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-slow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#E01E1E] font-black tracking-widest uppercase text-xs mb-3 block"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight"
          >
            Buy With Complete Confidence
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-red-600 to-transparent mx-auto rounded-full mt-4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="h-full"
              >
                <ThreeDCard className="h-full">
                  <div className="glass-panel h-full p-8 rounded-2xl border border-white/5 hover:border-red-500/25 neon-glow-red-hover transition-all duration-500 group flex flex-col items-start">
                    
                    {/* Icon container with border-glow */}
                    <div className="w-14 h-14 bg-zinc-950/60 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E01E1E]/10 border border-white/5 group-hover:border-red-500/20 transition-all duration-300 shadow-inner">
                      <Icon className="w-7 h-7 text-[#E01E1E] group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight group-hover:text-red-500 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-zinc-400 leading-relaxed text-xs md:text-sm font-medium">
                      {feature.description}
                    </p>

                  </div>
                </ThreeDCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}