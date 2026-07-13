import React, { useState, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link, useNavigate } from 'react-router-dom';
import vehiclesData from '../data/vehicles.json';
import { ScrollReveal } from './ScrollReveal';

export function Hero() {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');
  const [selectedMake, setSelectedMake] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchMode, setSearchMode] = useState<'price' | 'finance'>('price');
  const navigate = useNavigate();

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 120]);
  const bgScale = useTransform(scrollY, [0, 800], [1.02, 1.15]);

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
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 bg-background">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ y: bgY, scale: bgScale }}
          className="absolute inset-0 bg-[url('/img/hero_studio_bg.png')] bg-cover bg-center bg-no-repeat" />
        
        {/* Premium Dark Gradient Overlays to preserve text readability in both modes */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
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
            
            <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl">
              {/* Tabs */}
              <div className="flex w-full border-b border-border bg-black/10">
                <button
                  onClick={() => setActiveTab('buy')}
                  className={cn(
                    'flex-1 py-4 text-sm font-semibold uppercase tracking-wider transition-colors',
                    activeTab === 'buy' ?
                    'bg-foreground/10 text-foreground border-b-2 border-brand-red' :
                    'bg-transparent text-foreground/50 hover:text-foreground hover:bg-foreground/5'
                  )}>
                  Buy a car
                </button>
                <button
                  onClick={() => setActiveTab('sell')}
                  className={cn(
                    'flex-1 py-4 text-sm font-semibold uppercase tracking-wider transition-colors',
                    activeTab === 'sell' ?
                    'bg-brand-red text-white' :
                    'bg-transparent text-foreground/50 hover:text-foreground hover:bg-foreground/5'
                  )}>
                  Sell your car
                </button>
              </div>

              {/* Form Content Area */}
              <div className="p-6 md:p-8 flex flex-col gap-5 flex-1 justify-between min-h-[340px]">
                {activeTab === 'buy' ? (
                  <>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      Quick Search
                    </h3>

                    <div className="flex flex-col gap-4">
                      {/* Select Make */}
                      <div className="relative">
                        <select 
                          value={selectedMake}
                          onChange={(e) => setSelectedMake(e.target.value)}
                          className="w-full appearance-none bg-background/50 border border-border rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-brand-red transition-colors">
                          <option value="" className="bg-background">Any Make ({vehiclesData.length})</option>
                          {uniqueMakes.map(make => (
                            <option key={make} value={make.toLowerCase()} className="bg-background">{make}</option>
                          ))}
                        </select>
                        <ChevronDown
                          size={16}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50 pointer-events-none" />
                      </div>

                      {/* Select Model Placeholder */}
                      <div className="relative">
                        <select 
                          disabled={true}
                          className="w-full appearance-none bg-background/50 border border-border rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-brand-red transition-colors opacity-50">
                          <option value="" className="bg-background">Any Model (Select Make first)</option>
                        </select>
                        <ChevronDown
                          size={16}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50 pointer-events-none" />
                      </div>

                      {/* Price / Finance Segment Controller */}
                      <div className="flex w-full bg-background/50 border border-border rounded-xl p-1 gap-1 mt-1">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setSearchMode('price');
                            setMaxPrice('');
                          }}
                          className={cn(
                            "flex-1 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all focus:outline-none focus:ring-1 focus:ring-brand-red",
                            searchMode === 'price' 
                              ? "bg-brand-red text-white shadow-md" 
                              : "text-foreground/45 hover:text-foreground/75"
                          )}
                        >
                          Price Limit
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setSearchMode('finance');
                            setMaxPrice('');
                          }}
                          className={cn(
                            "flex-1 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all focus:outline-none focus:ring-1 focus:ring-brand-red",
                            searchMode === 'finance' 
                              ? "bg-brand-red text-white shadow-md" 
                              : "text-foreground/45 hover:text-foreground/75"
                          )}
                        >
                          Finance Limit
                        </button>
                      </div>

                      {/* Max Price / Max Finance Select */}
                      <div className="relative">
                        <select 
                          value={maxPrice}
                          onChange={(e) => setMaxPrice(e.target.value)}
                          className="w-full appearance-none bg-background/50 border border-border rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-brand-red transition-colors">
                          {searchMode === 'price' ? (
                            <>
                              <option value="" className="bg-background">Price (Max)</option>
                              <option value="5000" className="bg-background">Up to £5,000</option>
                              <option value="10000" className="bg-background">Up to £10,000</option>
                              <option value="15000" className="bg-background">Up to £15,000</option>
                              <option value="25000" className="bg-background">Up to £25,000</option>
                              <option value="50000" className="bg-background">Up to £50,000</option>
                              <option value="100000" className="bg-background">Up to £100,000</option>
                            </>
                          ) : (
                            <>
                              <option value="" className="bg-background">Monthly Payment (Max)</option>
                              <option value="7500" className="bg-background">Up to £150 / mo</option>
                              <option value="12000" className="bg-background">Up to £250 / mo</option>
                              <option value="17000" className="bg-background">Up to £350 / mo</option>
                              <option value="22000" className="bg-background">Up to £450 / mo</option>
                              <option value="28500" className="bg-background">Up to £600 / mo</option>
                              <option value="38000" className="bg-background">Up to £800 / mo</option>
                            </>
                          )}
                        </select>
                        <ChevronDown
                          size={16}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50 pointer-events-none" />
                      </div>

                      <button 
                        onClick={handleSearch}
                        className="w-full py-4 bg-brand-red hover:bg-red-700 text-white rounded-xl font-bold uppercase tracking-wide transition-all flex items-center justify-center gap-2 mt-2 animate-pulse-slow">
                        <Search size={18} />
                        SEARCH
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col justify-between flex-1 py-4 gap-6">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        Sell Your Vehicle
                      </h3>
                      <p className="text-foreground/60 text-sm leading-relaxed font-light">
                        We offer a simple, hassle-free way to sell your car in Manchester. Get a free, instant and fair valuation today with no administration fees.
                      </p>
                    </div>
                    
                    <Link 
                      to="/contact" 
                      className="w-full py-4 bg-brand-red hover:bg-red-700 text-white rounded-xl font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 text-center shadow-lg shadow-brand-red/20 active:scale-[0.98]"
                    >
                      <ArrowRight size={18} />
                      VALUE MY CAR
                    </Link>
                  </div>
                )}
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
            
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tighter flex flex-col gap-1.5">
              <ScrollReveal variant="reveal-text" className="text-gradient" animateOnMount={true}>
                Welcome To
              </ScrollReveal>
              <ScrollReveal variant="reveal-text" className="text-foreground" delay={0.25} animateOnMount={true}>
                Castlefield Car Centre Ltd
              </ScrollReveal>
            </h1>

            <p className="text-lg md:text-xl text-white/70 font-light max-w-lg">
              Over 100 vehicles in stock ready to inspect. Discover our curated selection of premium used vehicles in Manchester.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link to="/contact" className="px-8 py-4 bg-brand-red hover:bg-red-700 text-white rounded-full font-semibold transition-all flex items-center gap-2 group shadow-lg shadow-brand-red/20">
                Contact Stock
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/showroom" className="px-8 py-4 bg-foreground/5 hover:bg-foreground/10 border border-border text-foreground rounded-full font-semibold backdrop-blur-md transition-all shadow-sm">
                Browse Showroom
              </Link>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator pointing down to Featured Vehicles */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1.5 opacity-50 hover:opacity-80 transition-opacity duration-300 pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-white/50">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8.5 rounded-full border border-white/20 flex justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-brand-red animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}