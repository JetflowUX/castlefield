import React from 'react';
import { motion } from 'framer-motion';
import vehiclesData from '../data/vehicles.json';

// Use the first 12 real vehicle photos from the database
const GALLERY_IMAGES = vehiclesData
  .map(v => v.image)
  .filter(img => img && img.startsWith('http'))
  .slice(0, 12);

export function Gallery() {
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
          className="mb-12 text-center max-w-3xl mx-auto">
          
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Gallery
          </h1>
          <p className="text-white/60 text-lg">
            Take a closer look at our premium selection of vehicles and our
            state-of-the-art showroom facilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_IMAGES.map((src, idx) =>
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: idx % 3 * 0.1
            }}
            className="group relative aspect-square rounded-2xl overflow-hidden bg-white/5">
            
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
              src={src}
              alt={`Gallery image ${idx + 1}`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
            
            </motion.div>
          )}
        </div>
      </div>
    </div>);

}