import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Calendar, Fuel, Gauge } from 'lucide-react';
interface VehicleCardProps {
  make: string;
  model: string;
  price: string;
  image: string;
  year: string;
  mileage: string;
  fuel: string;
  transmission: string;
  delay?: number;
}
export function VehicleCard({
  make,
  model,
  price,
  image,
  year,
  mileage,
  fuel,
  transmission,
  delay = 0
}: VehicleCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.6,
        delay
      }}
      className="group relative rounded-2xl overflow-hidden bg-card border border-white/5 hover:border-white/20 transition-all duration-500">
      
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={image}
          alt={`${make} ${model}`}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
        
        <div className="absolute top-4 right-4 z-20">
          <div className="px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-white font-semibold text-sm">
            {price}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-white mb-1 group-hover:text-brand-red transition-colors">
          {make} <span className="font-light">{model}</span>
        </h3>

        <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent my-4" />

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-y-4 gap-x-2">
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Calendar size={16} className="text-white/40" />
            <span>{year}</span>
          </div>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Gauge size={16} className="text-white/40" />
            <span>{mileage}</span>
          </div>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Fuel size={16} className="text-white/40" />
            <span>{fuel}</span>
          </div>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Settings size={16} className="text-white/40" />
            <span>{transmission}</span>
          </div>
        </div>

        <button className="w-full mt-6 py-3 bg-white/5 hover:bg-brand-red text-white text-sm font-medium rounded-xl transition-colors border border-white/10 hover:border-brand-red">
          View Details
        </button>
      </div>
    </motion.div>);

}