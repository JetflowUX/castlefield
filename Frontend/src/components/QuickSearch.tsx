import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';
export function QuickSearch() {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');
  const [isFinance, setIsFinance] = useState(false);
  return (
    <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-xl overflow-hidden shadow-2xl shadow-black/50">
      {/* Tabs */}
      <div className="flex w-full">
        <button
          onClick={() => setActiveTab('buy')}
          className={`flex-1 py-4 text-sm font-bold flex items-center justify-center gap-2 transition-colors relative ${activeTab === 'buy' ? 'text-white' : 'text-zinc-400 hover:text-zinc-200 bg-zinc-950/50'}`}>
          
          <Search className="w-4 h-4" /> Buy a car
          {activeTab === 'buy' &&
          <motion.div
            layoutId="activeTab"
            className="absolute inset-0 bg-[#E01E1E] -z-10" />

          }
        </button>
        <button
          onClick={() => setActiveTab('sell')}
          className={`flex-1 py-4 text-sm font-bold flex items-center justify-center gap-2 transition-colors relative ${activeTab === 'sell' ? 'text-white' : 'text-zinc-400 hover:text-zinc-200 bg-zinc-950/50'}`}>
          
          <span className="text-lg leading-none mb-1">🚗</span> Sell your car
          {activeTab === 'sell' &&
          <motion.div
            layoutId="activeTab"
            className="absolute inset-0 bg-[#E01E1E] -z-10" />

          }
        </button>
      </div>

      {/* Form Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-4">Quick Search:</h3>

        <div className="space-y-4">
          {/* Make Select */}
          <div className="relative">
            <select className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-md py-3 px-4 appearance-none focus:outline-none focus:border-[#E01E1E] transition-colors cursor-pointer">
              <option>Any Make</option>
              <option>Audi</option>
              <option>BMW</option>
              <option>Mercedes-Benz</option>
              <option>Volkswagen</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
          </div>

          {/* Model Select */}
          <div className="relative">
            <select className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-md py-3 px-4 appearance-none focus:outline-none focus:border-[#E01E1E] transition-colors cursor-pointer">
              <option>Any Model</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
          </div>

          {/* Price / Finance Toggle */}
          <div className="flex items-center justify-center gap-4 py-2">
            <span
              className={`text-sm font-medium ${!isFinance ? 'text-white' : 'text-zinc-500'}`}>
              
              Price
            </span>
            <button
              onClick={() => setIsFinance(!isFinance)}
              className="w-12 h-6 bg-zinc-800 rounded-full relative flex items-center px-1 transition-colors focus:outline-none">
              
              <motion.div
                className="w-4 h-4 bg-[#E01E1E] rounded-full"
                animate={{
                  x: isFinance ? 24 : 0
                }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30
                }} />
              
            </button>
            <span
              className={`text-sm font-medium ${isFinance ? 'text-white' : 'text-zinc-500'}`}>
              
              Finance
            </span>
          </div>

          {/* Price Max Select */}
          <div className="relative">
            <select className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-md py-3 px-4 appearance-none focus:outline-none focus:border-[#E01E1E] transition-colors cursor-pointer">
              <option>Price (Max)</option>
              <option>£5,000</option>
              <option>£10,000</option>
              <option>£20,000</option>
              <option>£50,000+</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
          </div>

          {/* Submit Button */}
          <button className="w-full bg-[#E01E1E] hover:bg-red-700 text-white font-bold py-4 rounded-md transition-colors mt-2 uppercase tracking-wider">
            Search
          </button>
        </div>
      </div>
    </div>);

}