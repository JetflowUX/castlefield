import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Camera } from 'lucide-react';
import { ThreeDCard } from './ThreeDCard';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800',
    alt: 'Luxury car in showroom',
    className: 'md:col-span-2 md:row-span-2'
  },
  {
    url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
    alt: 'Sports car detail',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    url: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800',
    alt: 'Car interior steering wheel',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    url: 'https://images.unsplash.com/photo-1562426509-5044a121aa49?auto=format&fit=crop&q=80&w=800',
    alt: 'Dealership exterior',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800',
    alt: 'Sleek car profile',
    className: 'md:col-span-1 md:row-span-1'
  }
];

export function Gallery() {
  return (
    <section className="py-24 bg-[#0E0E10] relative overflow-hidden border-t border-white/5">
      {/* Background neon effect */}
      <div className="glow-blob glow-blob-red top-1/2 left-0 animate-float-slow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#E01E1E] font-black tracking-widest uppercase text-xs mb-3 block"
          >
            Showroom
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight"
          >
            Inside Castlefield Car Centre
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-red-600 to-transparent mx-auto rounded-full mt-4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[260px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`h-full ${image.className}`}
            >
              <ThreeDCard className="h-full w-full">
                <div className="relative overflow-hidden rounded-2xl group cursor-pointer border border-white/5 hover:border-red-500/20 shadow-lg h-full w-full">
                  
                  {/* Image */}
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Overlay layer */}
                  <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    {/* Glowing neon ring with magnifying glass */}
                    <div className="w-14 h-14 rounded-full border border-red-500/50 flex items-center justify-center bg-black/60 shadow-lg shadow-red-950/20 group-hover:scale-110 transition-transform duration-300">
                      <Maximize2 className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Corner indicator details */}
                  <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 bg-black/75 px-3 py-1.5 rounded-lg border border-white/5">
                    <Camera className="w-3.5 h-3.5 text-[#E01E1E]" />
                    <span className="text-[10px] font-black uppercase text-zinc-300 tracking-wider">
                      Showroom View
                    </span>
                  </div>

                </div>
              </ThreeDCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}