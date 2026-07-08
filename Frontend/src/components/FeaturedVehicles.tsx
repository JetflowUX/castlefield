import React from 'react';
import { Calendar, Gauge, Fuel, Settings, ChevronRight } from 'lucide-react';
import { ThreeDCard } from './ThreeDCard';
import { motion } from 'framer-motion';

const CARS = [
  {
    id: 1,
    make: 'Aston Martin',
    model: 'DBX 4.0 V8 SUV 5dr Petrol Auto 4WD (550 ps)',
    price: '£89,995',
    finance: '£1,574 / mo',
    image: 'https://images.clickdealer.co.uk/vehicles/8042/8042559/640x480/196332142.jpg',
    year: '2021',
    mileage: '18,500',
    fuel: 'Petrol',
    transmission: 'Auto'
  },
  {
    id: 2,
    make: 'Land Rover',
    model: 'Range Rover Evoque 2.0 D150 R-Dynamic S SUV Diesel Auto 4WD',
    price: '£13,495',
    finance: '£255 / mo',
    image: 'https://images.clickdealer.co.uk/vehicles/8059/8059800/640x480/196811214.jpg',
    year: '2019',
    mileage: '42,000',
    fuel: 'Diesel',
    transmission: 'Auto'
  },
  {
    id: 3,
    make: 'BMW',
    model: '1 Series 1.5 118i M Sport Shadow Edition Hatchback Petrol Manual',
    price: '£12,995',
    finance: '£246 / mo',
    image: 'https://images.clickdealer.co.uk/vehicles/8059/8059787/640x480/196810659.jpg',
    year: '2019',
    mileage: '29,500',
    fuel: 'Petrol',
    transmission: 'Manual'
  }
];

export function FeaturedVehicles() {
  return (
    <section className="py-24 bg-[#0E0E10] relative z-20 overflow-hidden">
      {/* Decorative Glow Blobs */}
      <div className="glow-blob glow-blob-red top-1/4 -left-96 animate-float-slow" />
      <div className="glow-blob glow-blob-purple bottom-1/4 -right-96 animate-float-slower" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#E01E1E] font-black tracking-widest uppercase text-xs mb-3 block"
          >
            Curated Showroom
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight"
          >
            Featured Vehicles
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-red-600 to-transparent mx-auto rounded-full mt-4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARS.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <ThreeDCard className="h-full">
                <div className="glass-panel h-full rounded-2xl overflow-hidden border border-white/5 hover:border-red-500/20 neon-glow-red-hover transition-all duration-300 group flex flex-col justify-between">
                  <div>
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={car.image}
                        alt={`${car.make} ${car.model}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                      
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4 flex flex-col items-end gap-1.5">
                        <div className="bg-gradient-to-r from-red-700 to-red-600 text-white px-4 py-1.5 rounded-lg text-sm font-black shadow-lg shadow-black/40 border border-red-500/20">
                          {car.price}
                        </div>
                        {car.finance && (
                          <div className="bg-zinc-950/80 backdrop-blur-md text-zinc-300 px-3 py-1 rounded text-[10px] font-black border border-white/5 shadow-lg">
                            {car.finance}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-black text-white tracking-tight uppercase">
                          {car.make}
                        </h3>
                        <span className="text-xs font-semibold bg-zinc-800 text-zinc-400 px-2.5 py-1 rounded">
                          APPROVED
                        </span>
                      </div>
                      <p className="text-zinc-400 text-xs mb-6 font-medium tracking-wide h-10 border-b border-white/5 pb-2">
                        {car.model}
                      </p>

                      {/* Specs Grid */}
                      <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6">
                        <div className="flex items-center text-zinc-300 text-xs font-semibold uppercase tracking-wider">
                          <Calendar className="w-4 h-4 mr-2.5 text-[#E01E1E] shrink-0" />
                          {car.year}
                        </div>
                        <div className="flex items-center text-zinc-300 text-xs font-semibold uppercase tracking-wider">
                          <Gauge className="w-4 h-4 mr-2.5 text-[#E01E1E] shrink-0" />
                          {car.mileage} mi
                        </div>
                        <div className="flex items-center text-zinc-300 text-xs font-semibold uppercase tracking-wider">
                          <Fuel className="w-4 h-4 mr-2.5 text-[#E01E1E] shrink-0" />
                          {car.fuel}
                        </div>
                        <div className="flex items-center text-zinc-300 text-xs font-semibold uppercase tracking-wider">
                          <Settings className="w-4 h-4 mr-2.5 text-[#E01E1E] shrink-0" />
                          {car.transmission}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <button className="w-full py-3.5 bg-[#E01E1E] hover:bg-red-700 text-white rounded-lg border border-red-600/30 transition-all duration-300 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-900/20">
                      View Details <ChevronRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </ThreeDCard>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-[#E01E1E] text-[#E01E1E] hover:bg-[#E01E1E] hover:text-white px-10 py-4 rounded-lg font-black tracking-widest text-xs uppercase transition-all shadow-lg hover:shadow-red-600/20"
          >
            VIEW ALL VEHICLES
          </motion.button>
        </div>
      </div>
    </section>
  );
}