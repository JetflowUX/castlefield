import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link, useNavigate } from 'react-router-dom';
import vehiclesData from '../data/vehicles.json';

export function Hero() {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');
  const [selectedMake, setSelectedMake] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const navigate = useNavigate();

  const uniqueMakes = useMemo(() => {
    const makes = vehiclesData.map(v => v.make);
    return Array.from(new Set(makes)).sort();
  }, []);

  const handleSearch = () => {
    if (activeTab === 'sell') {
      navigate('/contact');
      return;
    }
    const queryParams = new URLSearchParams();
    if (selectedMake) queryParams.set('make', selectedMake);
    if (maxPrice) queryParams.set('maxPrice', maxPrice);
    navigate(`/showroom?${queryParams.toString()}`);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{
            scale: 1.1
          }}
          animate={{
            scale: 1
          }}
          transition={{
            duration: 1.5,
            ease: 'easeOut'
          }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=3269&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat" />
        
        {/* Premium Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Quick Search Widget (Left Column) */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="w-full max-w-md order-2 lg:order-1">
            
            <div className="glass-panel rounded-2xl overflow-hidden">
              {/* Tabs */}
              <div className="flex w-full">
                <button
                  onClick={() => setActiveTab('buy')}
                  className={cn(
                    'flex-1 py-4 text-sm font-medium transition-colors',
                    activeTab === 'buy' ?
                    'bg-white/10 text-white' :
                    'bg-transparent text-white/50 hover:text-white/80 hover:bg-white/5'
                  )}>
                  Buy a car
                </button>
                <button
                  onClick={() => setActiveTab('sell')}
                  className={cn(
                    'flex-1 py-4 text-sm font-medium transition-colors',
                    activeTab === 'sell' ?
                    'bg-brand-red text-white' :
                    'bg-transparent text-white/50 hover:text-white/80 hover:bg-white/5'
                  )}>
                  Sell your car
                </button>
              </div>

              {/* Form */}
              <div className="p-6 md:p-8 flex flex-col gap-5">
                <h3 className="font-heading text-xl font-semibold text-white">
                  Quick Search
                </h3>

                <div className="flex flex-col gap-4">
                  {/* Select Make */}
                  <div className="relative">
                    <select 
                      value={selectedMake}
                      onChange={(e) => setSelectedMake(e.target.value)}
                      disabled={activeTab === 'sell'}
                      className="w-full appearance-none bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-brand-red transition-colors disabled:opacity-50">
                      <option value="">Any Make ({vehiclesData.length})</option>
                      {uniqueMakes.map(make => (
                        <option key={make} value={make.toLowerCase()}>{make}</option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" />
                  </div>

                  {/* Select Model Placeholder / Status text */}
                  <div className="relative">
                    <select 
                      disabled={true}
                      className="w-full appearance-none bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-brand-red transition-colors opacity-50">
                      <option value="">Any Model (Select Make first)</option>
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" />
                  </div>

                  {/* Price / Finance Toggle */}
                  <div className="flex items-center justify-center gap-3 py-1">
                    <span className="text-sm text-white/70">Price</span>
                    <button className="w-12 h-6 rounded-full bg-brand-red relative transition-colors">
                      <span className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform" />
                    </button>
                    <span className="text-sm text-white/70">Finance</span>
                  </div>

                  {/* Max Price */}
                  <div className="relative">
                    <select 
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      disabled={activeTab === 'sell'}
                      className="w-full appearance-none bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-brand-red transition-colors disabled:opacity-50">
                      <option value="">Price (Max)</option>
                      <option value="5000">Up to £5,000</option>
                      <option value="10000">Up to £10,000</option>
                      <option value="15000">Up to £15,000</option>
                      <option value="25000">Up to £25,000</option>
                      <option value="50000">Up to £50,000</option>
                      <option value="100000">Up to £100,000</option>
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" />
                  </div>

                  <button 
                    onClick={handleSearch}
                    className="w-full py-4 bg-brand-red hover:bg-red-700 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2 mt-2">
                    <Search size={18} />
                    SEARCH
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Typography & Welcome Text (Right Column) */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.4
            }}
            className="flex flex-col gap-6 max-w-2xl order-1 lg:order-2 lg:pl-8">
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter">
              <span className="text-gradient">Welcome To</span>
              <br />
              <span className="text-white">Castlefield Car Centre Ltd</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 font-light max-w-lg">
              Over 100 vehicles in stock ready to inspect. Discover our curated selection of premium used vehicles in Manchester.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link to="/contact" className="px-8 py-4 bg-brand-red hover:bg-red-700 text-white rounded-full font-medium transition-all flex items-center gap-2 group">
                Contact Stock
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/showroom" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium backdrop-blur-md transition-all">
                Browse Showroom
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}