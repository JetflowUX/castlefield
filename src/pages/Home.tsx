import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Hero3D } from '../components/Hero3D';
import { QuickSearch } from '../components/QuickSearch';
import { FeaturedVehicles } from '../components/FeaturedVehicles';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Services } from '../components/Services';
import { Gallery } from '../components/Gallery';
import { CtaBand } from '../components/CtaBand';
export function Home() {
  return (
    <main className="min-h-screen bg-[#0E0E10]">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">
        {/* 3D Background */}
        <Hero3D />

        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
          <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 mt-20 pointer-events-auto">
            {/* Left: Copy */}
            <motion.div
              initial={{
                opacity: 0,
                x: -50
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}
              className="max-w-xl w-full">
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
                Every Car Sold <br />
                <span className="text-[#E01E1E]">Comes With Warranty</span>
              </h1>
              <p className="text-xl text-zinc-300 mb-8 font-medium">
                For your peace of mind.
              </p>
              <button className="bg-[#E01E1E] hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold tracking-wide flex items-center gap-2 transition-colors shadow-lg shadow-red-900/20">
                BUY NOW <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Right: Quick Search */}
            <motion.div
              initial={{
                opacity: 0,
                y: 50
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.4
              }}
              className="w-full max-w-md">
              
              <QuickSearch />
            </motion.div>
          </div>
        </div>

        {/* Gradient overlay to blend with next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0E0E10] to-transparent pointer-events-none z-10" />
      </section>

      {/* Featured Vehicles Section */}
      <FeaturedVehicles />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Services */}
      <Services />

      {/* Gallery */}
      <Gallery />

      {/* CTA Band */}
      <CtaBand />
    </main>);

}