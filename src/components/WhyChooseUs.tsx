import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CreditCard, Repeat, BadgeCheck } from 'lucide-react';
const features = [
{
  icon: ShieldCheck,
  title: 'Every Car Warrantied',
  description:
  'Comprehensive coverage for your peace of mind on every vehicle we sell.'
},
{
  icon: CreditCard,
  title: 'Finance Available',
  description:
  'Flexible finance packages tailored to suit your budget and requirements.'
},
{
  icon: Repeat,
  title: 'Part Exchange Welcome',
  description:
  'Get a competitive valuation for your current vehicle against any of our cars.'
},
{
  icon: BadgeCheck,
  title: 'Quality Checked',
  description:
  'Rigorous multi-point mechanical inspections before any car reaches our showroom.'
}];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0E0E10] border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-[#E01E1E] font-bold tracking-widest uppercase text-sm mb-2 block">
            
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="text-3xl md:text-4xl font-black text-white">
            
            Buy With Complete Confidence
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: index * 0.1
                }}
                className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-xl hover:-translate-y-2 hover:border-[#E01E1E]/50 transition-all duration-300 group">
                
                <div className="w-14 h-14 bg-zinc-950 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#E01E1E]/10 transition-colors">
                  <Icon className="w-7 h-7 text-[#E01E1E]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}