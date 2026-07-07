import React from 'react';
import { motion } from 'framer-motion';
import {
  Banknote,
  Shield,
  Repeat,
  Wrench,
  CarFront,
  ArrowRight } from
'lucide-react';
import { Link } from 'react-router-dom';
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
}];

export function Services() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#E01E1E]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
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
              
              Our Services
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
              
              Everything You Need Under One Roof
            </motion.h2>
          </div>
          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}>
            
            <Link
              to="/services"
              className="text-white hover:text-[#E01E1E] font-bold flex items-center gap-2 transition-colors">
              
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
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
                }}>
                
                <Link
                  to={service.link}
                  className="block h-full bg-[#0E0E10] border border-zinc-800 p-6 rounded-xl hover:-translate-y-2 hover:border-zinc-600 transition-all duration-300 group">
                  
                  <Icon className="w-8 h-8 text-zinc-400 mb-4 group-hover:text-[#E01E1E] transition-colors" />
                  <h3 className="text-lg font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="text-[#E01E1E] text-sm font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}