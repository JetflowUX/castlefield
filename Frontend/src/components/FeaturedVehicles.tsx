import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { VehicleCard } from './VehicleCard';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import vehiclesData from '../data/vehicles.json';

const FEATURED_VEHICLES = vehiclesData.filter(v => 
  ['8042559', '6976353', '7486498', '7529298'].includes(v.id)
);

interface FeaturedVehiclesProps {
  onViewDetails: (vehicle: any) => void;
}

export function FeaturedVehicles({ onViewDetails }: FeaturedVehiclesProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Mouse drag scrolling physics
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Drag sensitivity multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Smooth scroll carousel navigators
  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const cardWidth = window.innerWidth < 1024 ? 304 : 354; // Card width + gap
      scrollContainerRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const cardWidth = window.innerWidth < 1024 ? 304 : 354;
      scrollContainerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 bg-background border-t border-border overflow-hidden select-none">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-brand-red/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-foreground/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest block mb-2">Curated Stock</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              Featured Vehicles
            </h2>
            <p className="text-foreground/60 text-base md:text-lg">
              Explore our hand-picked selection of premium vehicles, each thoroughly inspected and ready for the road.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Smooth Carousel Arrows */}
            <div className="flex items-center gap-2">
              <button 
                onClick={scrollPrev}
                className="w-12 h-12 rounded-full bg-card border border-border hover:border-brand-red hover:bg-brand-red text-foreground hover:text-white flex items-center justify-center transition-all duration-300 shadow-md active:scale-95"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={scrollNext}
                className="w-12 h-12 rounded-full bg-card border border-border hover:border-brand-red hover:bg-brand-red text-foreground hover:text-white flex items-center justify-center transition-all duration-300 shadow-md active:scale-95"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <Link to="/showroom" className="flex items-center gap-2 text-foreground hover:text-brand-red font-medium group whitespace-nowrap bg-card border border-border px-6 py-3 rounded-full hover:bg-foreground/5 transition-all">
              View All Stock
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden">
          <div 
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-6 px-1 cursor-grab active:cursor-grabbing scrollbar-none snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {FEATURED_VEHICLES.map((vehicle, index) => (
              <div 
                key={index} 
                className="w-[280px] lg:w-[330px] flex-shrink-0 snap-start"
              >
                <VehicleCard {...vehicle} delay={0} onViewDetails={onViewDetails} />
              </div>
            ))}
          </div>
        </div>

        {/* Representative Example Block */}
        <div className="w-full p-5 rounded-2xl bg-card border border-border text-center max-w-4xl mx-auto backdrop-blur-md">
          <p className="text-foreground/60 text-[10px] md:text-xs leading-relaxed font-light">
            <span className="font-semibold text-foreground uppercase tracking-wider block mb-1">Representative Finance Example</span>
            Representative Example: Purchase Price <span className="text-foreground font-semibold">£14,995.00</span>, Deposit <span className="text-foreground font-semibold">£0.00</span>, Term <span className="text-foreground font-semibold">60 months</span>, 60 monthly payments of <span className="text-foreground font-semibold">£310.22</span>, Total Amount Payable <span className="text-foreground font-semibold">£18,613.20</span>. Rate of Interest <span className="text-foreground font-semibold">4.5% Fixed</span>. Representative <span className="text-brand-red font-bold">9.9% APR</span>.
          </p>
        </div>

      </div>
    </section>
  );
}