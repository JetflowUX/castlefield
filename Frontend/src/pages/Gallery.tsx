import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import vehiclesData from '../data/vehicles.json';

const GALLERY_IMAGES = vehiclesData
  .map(v => v.image)
  .filter(img => img && img.startsWith('http'))
  .slice(0, 12);

interface GalleryItemProps {
  src: string;
  index: number;
  onSelect: (src: string) => void;
}

function GalleryItem({ src, index, onSelect }: GalleryItemProps) {
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
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      onClick={() => onSelect(src)}
      className="group relative aspect-square rounded-2xl glow-card cursor-pointer overflow-hidden shadow-sm"
    >
      <div className="relative z-10 w-full h-full">
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 z-10" />
        <img
          src={src}
          alt={`Gallery image ${index + 1}`}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <div className="w-12 h-12 rounded-full bg-brand-red/90 text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <ZoomIn size={20} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-6 bg-background text-foreground select-none">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center max-w-3xl mx-auto"
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gallery
          </h1>
          <p className="text-foreground/60 text-lg font-light">
            Take a closer look at our premium selection of vehicles and our state-of-the-art showroom facilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_IMAGES.map((src, idx) => (
            <GalleryItem
              key={idx}
              src={src}
              index={idx}
              onSelect={setSelectedImage}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/10 transition-all z-50"
            >
              <X size={24} />
            </button>

            {/* Main Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Selected Gallery Preview"
                className="w-auto h-auto max-w-full max-h-[85vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}