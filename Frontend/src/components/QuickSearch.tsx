import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, Car } from 'lucide-react';

export function QuickSearch() {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');
  const [isFinance, setIsFinance] = useState(false);

  return (
    <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl relative z-20 border border-white/5 neon-glow-red hover:border-red-500/20 transition-all duration-500">
      
      {/* Glossy gradient highlights */}
      <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/2 to-transparent pointer-events-none rotate-12" />

      {/* Tabs */}
      <div className="flex w-full border-b border-white/5 bg-black/40">
        <button
          onClick={() => setActiveTab('buy')}
          className={`flex-1 py-4 text-xs md:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all relative overflow-hidden ${
            activeTab === 'buy' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          <Search className={`w-4 h-4 transition-transform duration-300 ${activeTab === 'buy' ? 'scale-110 text-[#E01E1E]' : ''}`} /> 
          Buy a car
          {activeTab === 'buy' && (
            <motion.div
              layoutId="activeTabGlow"
              className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-600 to-red-400"
            />
          )}
        </button>
        <button
          onClick={() => setActiveTab('sell')}
          className={`flex-1 py-4 text-xs md:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all relative overflow-hidden ${
            activeTab === 'sell' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          <Car className={`w-4 h-4 transition-transform duration-300 ${activeTab === 'sell' ? 'scale-110 text-[#E01E1E]' : ''}`} /> 
          Sell your car
          {activeTab === 'sell' && (
            <motion.div
              layoutId="activeTabGlow"
              className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-600 to-red-400"
            />
          )}
        </button>
      </div>

      {/* Form Content */}
      <div className="p-6 md:p-8 space-y-6">
        <div className="flex justify-between items-center border-b border-white/5 pb-3">
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">
            Search Inventory
          </h3>
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
        </div>

        <div className="space-y-4">
          {/* Make Select */}
          <div className="relative group">
            <select className="w-full bg-zinc-950/80 border border-white/5 hover:border-zinc-700 focus:border-[#E01E1E] text-white rounded-lg py-3 px-4 appearance-none focus:outline-none focus:ring-1 focus:ring-[#E01E1E]/30 transition-all cursor-pointer font-medium text-sm">
              <option>Any Make</option>
              <option>Audi</option>
              <option>BMW</option>
              <option>Mercedes-Benz</option>
              <option>Volkswagen</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none group-hover:text-zinc-300 transition-colors" />
          </div>

          {/* Model Select */}
          <div className="relative group">
            <select className="w-full bg-zinc-950/80 border border-white/5 hover:border-zinc-700 focus:border-[#E01E1E] text-white rounded-lg py-3 px-4 appearance-none focus:outline-none focus:ring-1 focus:ring-[#E01E1E]/30 transition-all cursor-pointer font-medium text-sm">
              <option>Any Model</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none group-hover:text-zinc-300 transition-colors" />
          </div>

          {/* Price / Finance Toggle */}
          <div className="flex items-center justify-between bg-zinc-950/40 p-3 rounded-lg border border-white/5">
            <span className={`text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${!isFinance ? 'text-white' : 'text-zinc-500'}`}>
              Search Cash Price
            </span>
            
            <button
              onClick={() => setIsFinance(!isFinance)}
              className="w-12 h-6 bg-zinc-800/80 border border-white/5 rounded-full relative flex items-center px-1 transition-all focus:outline-none"
            >
              <motion.div
                className="w-4 h-4 bg-gradient-to-r from-red-600 to-red-500 rounded-full shadow-lg shadow-red-600/50"
                animate={{
                  x: isFinance ? 22 : 0
                }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 25
                }}
              />
            </button>

            <span className={`text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${isFinance ? 'text-white' : 'text-zinc-500'}`}>
              Monthly Finance
            </span>
          </div>

          {/* Price Max Select */}
          <div className="relative group">
            <select className="w-full bg-zinc-950/80 border border-white/5 hover:border-zinc-700 focus:border-[#E01E1E] text-white rounded-lg py-3 px-4 appearance-none focus:outline-none focus:ring-1 focus:ring-[#E01E1E]/30 transition-all cursor-pointer font-medium text-sm">
              <option>{isFinance ? 'Max Monthly Budget' : 'Price (Max)'}</option>
              {isFinance ? (
                <>
                  <option>£150 / mo</option>
                  <option>£250 / mo</option>
                  <option>£350 / mo</option>
                  <option>£500+ / mo</option>
                </>
              ) : (
                <>
                  <option>£5,000</option>
                  <option>£10,000</option>
                  <option>£20,000</option>
                  <option>£50,000+</option>
                </>
              )}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none group-hover:text-zinc-300 transition-colors" />
          </div>

          {/* Submit Button */}
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-black py-4 rounded-lg transition-all mt-4 uppercase tracking-wider shadow-lg shadow-red-900/35 flex items-center justify-center gap-2 border border-red-500/25"
          >
            <Search className="w-4 h-4" />
            Find Vehicles
          </motion.button>
        </div>
      </div>
    </div>
  );
}