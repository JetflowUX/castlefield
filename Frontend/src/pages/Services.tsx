import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  CreditCard,
  RefreshCw,
  Wrench,
  CheckCircle2 } from
'lucide-react';
const SERVICES = [
{
  icon: <CreditCard className="w-8 h-8 text-brand-red" />,
  title: 'Vehicle Finance',
  description:
  'We maintain close relationships with high street lenders and specialist motoring finance houses, enabling us to offer competitive finance packages tailored to your individual circumstances. Castlefield Car Centre Ltd is authorised and regulated by the Financial Conduct Authority (FRN: 845701). We act as a credit broker, not a lender.',
  features: [
  'Authorised & Regulated by FCA (FRN: 845701)',
  'Hire Purchase (HP) specialists',
  'Flexible terms & competitive rates',
  'Quick decisions and tailored quotes']

},
{
  icon: <RefreshCw className="w-8 h-8 text-brand-red" />,
  title: 'Part Exchange',
  description:
  'Upgrade your current vehicle seamlessly with our part exchange service. We offer fair, market-reflective valuations for your car, making your next purchase easier and more affordable.',
  features: [
  'Free valuation',
  'Competitive prices paid',
  'Hassle-free process',
  'Settle outstanding finance']

},
{
  icon: <Shield className="w-8 h-8 text-brand-red" />,
  title: 'Extended Warranty',
  description:
  'Every car we sell comes with a standard warranty for peace of mind. For ultimate protection, we offer comprehensive extended warranty packages covering major mechanical and electrical components.',
  features: [
  'Nationwide coverage',
  'Parts and labour included',
  'No excess to pay',
  'Transferable upon sale']

},
{
  icon: <Wrench className="w-8 h-8 text-brand-red" />,
  title: 'Servicing & MOT',
  description:
  "Our commitment to you doesn't end when you drive away. Our fully equipped service centre handles everything from routine maintenance to complex repairs, ensuring your vehicle stays in peak condition.",
  features: [
  'Dealer-trained technicians',
  'Genuine parts used',
  'Latest diagnostic equipment',
  'Courtesy cars available']

}];

export function Services() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="mb-16 text-center max-w-3xl mx-auto">
          
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-white/60 text-lg">
            Beyond offering premium vehicles, we provide a comprehensive suite
            of services designed to make your buying and ownership experience
            exceptional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) =>
          <motion.div
            key={idx}
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
              delay: idx * 0.1
            }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-colors">
            
              <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center mb-6 border border-white/5">
                {service.icon}
              </div>
              <h2 className="font-heading text-2xl font-bold text-white mb-4">
                {service.title}
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, fIdx) =>
              <li
                key={fIdx}
                className="flex items-center gap-3 text-sm text-white/80">
                
                    <CheckCircle2 size={16} className="text-brand-red" />
                    {feature}
                  </li>
              )}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </div>);

}