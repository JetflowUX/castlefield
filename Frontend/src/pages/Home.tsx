import React from 'react';
import { motion } from 'framer-motion';
import { Hero3D } from '../components/Hero3D';
import { QuickSearch } from '../components/QuickSearch';
import { FeaturedVehicles } from '../components/FeaturedVehicles';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Services } from '../components/Services';
import { Gallery } from '../components/Gallery';
import { Testimonials } from '../components/Testimonials';
import { CtaBand } from '../components/CtaBand';

export function Home() {
  return (
    <main className="min-h-screen bg-[#0E0E10] text-white">
      {/* Split-Screen Hero Section */}
      <section className="relative min-h-screen lg:h-screen w-full flex flex-col lg:flex-row items-stretch overflow-hidden pt-24 lg:pt-0 bg-[#0E0E10]">
        
        {/* Left Column: Typography & Quick Search */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center px-6 md:px-12 py-8 lg:py-0 z-20 relative lg:h-full overflow-y-auto">
          <div className="max-w-xl mx-auto lg:mx-0 w-full space-y-8 mt-10 lg:mt-20">
            {/* Title / Copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <span className="text-xs font-black tracking-widest text-[#E01E1E] uppercase bg-red-600/10 px-3 py-1.5 rounded-md border border-red-500/25">
                ESTABLISHED DEALERSHIP & GARAGE
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight uppercase">
                Every Car Sold <br />
                <span className="text-[#E01E1E] drop-shadow-[0_0_15px_rgba(224,30,30,0.2)]">Comes With Warranty</span>
              </h1>
              <p className="text-zinc-400 text-sm md:text-base font-medium tracking-wide leading-relaxed">
                Welcome to Castlefield Car Centre, your trusted dealer in Heywood and Manchester with over 25 years of experience. We specialise in high-quality used Mercedes-Benz and other premium family vehicles, all backed by expert safety checks and warranties.
              </p>
            </motion.div>

            {/* Quick Search Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full"
            >
              <QuickSearch />
            </motion.div>
          </div>
        </div>

        {/* Right Column: Interactive 3D WebGL Canvas */}
        <div className="w-full lg:w-[55%] h-[450px] lg:h-full relative z-10 border-t lg:border-t-0 lg:border-l border-white/5 bg-zinc-950/20">
          <Hero3D />
          
          {/* Subtle vignette shade for borders inside WebGL scene */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E10] via-transparent to-[#0E0E10]/40 pointer-events-none hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10] via-transparent to-transparent pointer-events-none" />
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <FeaturedVehicles />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Services */}
      <Services />

      {/* Gallery */}
      <Gallery />

      {/* Testimonials Slider */}
      <Testimonials />

      {/* CTA Band */}
      <CtaBand />
    </main>
  );
}