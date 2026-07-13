import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, ThumbsUp, Clock } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

function StatCard({ icon, value, label, delay }: StatCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group relative rounded-2xl glow-card p-6 text-center cursor-default shadow-sm"
    >
      <div className="w-12 h-12 rounded-full bg-background mx-auto flex items-center justify-center mb-4 border border-border relative z-10">
        {icon}
      </div>
      <div className="font-heading text-3xl font-bold text-foreground mb-1 relative z-10">
        {value}
      </div>
      <div className="text-sm text-foreground/60 relative z-10">{label}</div>
    </motion.div>
  );
}

export function About() {
  const stats = [
    {
      icon: <Award className="w-6 h-6 text-brand-red" />,
      value: '15+',
      label: 'Years Experience'
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-brand-red" />,
      value: '5,000+',
      label: 'Happy Customers'
    },
    {
      icon: <Users className="w-6 h-6 text-brand-red" />,
      value: '20+',
      label: 'Expert Staff'
    },
    {
      icon: <Clock className="w-6 h-6 text-brand-red" />,
      value: '6 Days',
      label: 'Open a Week'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-6 overflow-hidden bg-background text-foreground select-none">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.6
            }}
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <br />
              <span className="text-brand-red">Castlefield Car Centre</span>
            </h1>
            <p className="text-foreground/60 text-base leading-relaxed mb-4 font-light">
              Looking for a trusted dealer for used Mercedes-Benz cars in Manchester or Bury? Castlefield Car Centre has you covered. We proudly serve customers searching for quality used cars for sale in Manchester, Bury, and across the North West.
            </p>
            <p className="text-foreground/60 text-base leading-relaxed mb-4 font-light">
              With over 25 years of experience, Castlefield Car Centre is a leading name among car showrooms Manchester drivers rely on. We specialise in high-quality used vehicles backed by expert guidance and honest, no-pressure customer service. Our dealership is a go-to destination for buyers looking for dependable used Mercedes-Benz cars in Manchester, combining performance and prestige with real value.
            </p>
            <p className="text-foreground/60 text-base leading-relaxed mb-4 font-light">
              We know that buying a used car is a significant investment. That's why every vehicle at Castlefield Car Centre undergoes a multi-point inspection to ensure it meets our strict standards for safety, performance and value for money.
            </p>
            <p className="text-foreground/60 text-base leading-relaxed font-light">
              Our reputation speaks for itself. Castlefield Car Centre stands out among used car showrooms that Manchester buyers trust due to our customer-first philosophy, high rate of repeat and referral business and our transparent pricing with clear vehicle histories.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-border relative z-10 shadow-lg">
              <img
                src="/img/about_us_new.png"
                alt="Castlefield Car Centre Dealership Forecourt"
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-6 -right-6 w-full h-full border border-brand-red/30 rounded-3xl z-0" />
          </motion.div>
        </div>

        {/* Stats / Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, idx) => (
            <StatCard
              key={idx}
              {...stat}
              delay={idx * 0.1}
            />
          ))}
        </div>

        {/* Promise Section */}
        <motion.div
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
          className="bg-gradient-to-br from-card to-background border border-border rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden hover-glow transition-all duration-300 shadow-md"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50" />
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
            Our Promise to You
          </h2>
          <p className="text-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto font-light">
            "Choose Castlefield Car Centre - your trusted destination for used Mercedes-Benz cars in Manchester and across the North West. We don't just sell cars; we build relationships. Our commitment to you doesn't end when you drive off the forecourt - it continues for the lifetime of your vehicle."
          </p>
        </motion.div>
      </div>
    </div>
  );
}