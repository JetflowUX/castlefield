import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
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
  url: 'https://images.unsplash.com/photo-1503376760366-5a413e832027?auto=format&fit=crop&q=80&w=800',
  alt: 'Dealership exterior',
  className: 'md:col-span-1 md:row-span-1'
},
{
  url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800',
  alt: 'Sleek car profile',
  className: 'md:col-span-1 md:row-span-1'
}];

export function Gallery() {
  return (
    <section className="py-24 bg-[#0E0E10]">
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
            
            Showroom
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
            
            Inside Castlefield Car Centre
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((image, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.5
            }}
            className={`relative overflow-hidden rounded-xl group cursor-pointer ${image.className}`}>
            
              <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            
              <div className="absolute inset-0 bg-[#E01E1E]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Maximize2 className="w-8 h-8 text-white scale-50 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}