import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CardData {
  title: string;
  image: string;
  buttonText: string;
  link: string;
}

const CARDS: CardData[] = [
  {
    title: "Showroom",
    image: "/img/showroom_promo.png",
    buttonText: "View Stock",
    link: "/showroom"
  },
  {
    title: "Finance & Rates",
    image: "/img/finance_promo.png",
    buttonText: "Finance Options",
    link: "/services"
  },
  {
    title: "Part Exchange",
    image: "/img/part_exchange_promo.png",
    buttonText: "Valuation",
    link: "/contact"
  }
];

export function CardStackSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  if (isMobile) {
    return (
      <section className="bg-background py-16 border-t border-border">
        <div className="container mx-auto px-4 flex flex-col gap-6">
          {CARDS.map((card, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden border border-border aspect-video group"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${card.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <span className="text-brand-red text-[10px] font-bold uppercase tracking-widest mb-1">Services</span>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">{card.title}</h3>
                <Link 
                  to={card.link} 
                  className="w-fit px-5 py-2.5 bg-brand-red hover:bg-red-700 text-white rounded-xl text-[10px] font-semibold uppercase tracking-wider transition-all"
                >
                  {card.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative h-[240vh] bg-background border-t border-border">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="relative w-full max-w-5xl h-[65vh] px-4">
          {CARDS.map((card, index) => {
            // Allocate smooth progressive ranges:
            // Card 1 slides up between 0.1 and 0.45
            // Card 2 slides up between 0.45 and 0.8
            let yRange = [0, 1];
            let yValues = [0, 0];
            
            if (index === 1) {
              yRange = [0.1, 0.45];
              yValues = [600, 0];
            } else if (index === 2) {
              yRange = [0.45, 0.8];
              yValues = [600, 0];
            }

            const y = useTransform(scrollYProgress, yRange, yValues);

            // Previous cards scale down and dim as new ones cover them
            let scaleRange = [0, 1];
            let scaleValues = [1, 1];
            let opacityRange = [0, 1];
            let opacityValues = [1, 1];

            if (index === 0) {
              scaleRange = [0.1, 0.45];
              scaleValues = [1, 0.92];
              opacityRange = [0.1, 0.45];
              opacityValues = [1, 0.35];
            } else if (index === 1) {
              scaleRange = [0.45, 0.8];
              scaleValues = [1, 0.92];
              opacityRange = [0.45, 0.8];
              opacityValues = [1, 0.35];
            }

            const scale = useTransform(scrollYProgress, scaleRange, scaleValues);
            const opacity = useTransform(scrollYProgress, opacityRange, opacityValues);

            return (
              <motion.div
                key={index}
                style={{
                  y: index === 0 ? 0 : y,
                  scale,
                  opacity: index === CARDS.length - 1 ? 1 : opacity,
                  zIndex: index + 10,
                  top: `${index * 16}px`
                }}
                className="absolute inset-x-4 h-[55vh] rounded-3xl overflow-hidden border border-border shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{ backgroundImage: `url('${card.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent z-10" />
                <div className="absolute inset-0 bg-black/20 z-10" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-20">
                  <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-2">Services</span>
                  <h3 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">{card.title}</h3>
                  <Link 
                    to={card.link} 
                    className="w-fit px-8 py-4 bg-brand-red hover:bg-red-700 text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-brand-red/35"
                  >
                    {card.buttonText}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
