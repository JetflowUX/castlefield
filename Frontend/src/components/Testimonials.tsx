import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    author: 'Shela Johnson',
    text: 'Really nice experience getting a car from castle field car center. Very profound in their passion of cars and best in business.',
    rating: 5,
    tag: 'Verified Buyer'
  },
  {
    author: 'Nagina G',
    text: 'Very good customer service, staff were very helpful in telling me what was wrong with my car and they explained everything to me. Would recommend if you need to buy a car or need service from them.',
    rating: 5,
    tag: 'Service Customer'
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="py-24 bg-[#0E0E10] relative overflow-hidden border-t border-white/5">
      {/* Background glow blobs */}
      <div className="glow-blob glow-blob-red -top-32 left-1/4 animate-float-slow" />
      <div className="glow-blob glow-blob-purple -bottom-32 right-1/4 animate-float-slower" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-[#E01E1E] font-black tracking-widest uppercase text-xs mb-3 block">
            Reviews
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            What Our Customers Say
          </h2>
          <div className="h-1 bg-gradient-to-r from-red-600 to-transparent mx-auto rounded-full mt-4 w-24" />
        </div>

        {/* Carousel Panel */}
        <div className="glass-panel rounded-3xl p-8 md:p-12 relative border border-white/5 shadow-2xl overflow-hidden min-h-[300px] flex flex-col justify-between">
          <div className="absolute top-8 right-8 text-white/5 pointer-events-none">
            <Quote className="w-24 h-24 rotate-180" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Star Rating */}
              <div className="flex gap-1.5">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#E01E1E] text-[#E01E1E]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg md:text-xl text-zinc-200 leading-relaxed font-semibold italic">
                "{current.text}"
              </p>

              {/* Reviewer metadata */}
              <div>
                <cite className="not-italic text-white font-black uppercase text-sm tracking-widest block">
                  {current.author}
                </cite>
                <span className="text-[10px] font-black uppercase text-[#E01E1E] bg-red-600/10 px-2 py-0.5 rounded-md inline-block mt-2 border border-red-500/20">
                  {current.tag}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-between items-center mt-10 border-t border-white/5 pt-6 z-20">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'w-8 bg-[#E01E1E]' : 'w-2.5 bg-zinc-700 hover:bg-zinc-500'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-xl bg-zinc-950/80 border border-white/5 hover:border-red-500/25 flex items-center justify-center hover:bg-[#E01E1E] text-white transition-all duration-300 shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-xl bg-zinc-950/80 border border-white/5 hover:border-red-500/25 flex items-center justify-center hover:bg-[#E01E1E] text-white transition-all duration-300 shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
