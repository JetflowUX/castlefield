import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { VehicleCard } from '../components/VehicleCard';
import { Search, Filter, ChevronDown } from 'lucide-react';
import vehiclesData from '../data/vehicles.json';

export function Showroom() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [selectedMake, setSelectedMake] = useState(searchParams.get('make') || '');
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') || '');
  const [sortBy, setSortBy] = useState('Newest First');

  useEffect(() => {
    const make = searchParams.get('make');
    const price = searchParams.get('maxPrice');
    if (make !== null) setSelectedMake(make);
    if (price !== null) setMaxPrice(price);
  }, [searchParams]);

  const uniqueMakes = useMemo(() => {
    const makes = vehiclesData.map(v => v.make);
    return Array.from(new Set(makes)).sort();
  }, []);

  const filteredVehicles = useMemo(() => {
    let result = [...vehiclesData];

    // Search filter
    if (search.trim()) {
      const term = search.toLowerCase();
      result = result.filter(v => 
        v.make.toLowerCase().includes(term) ||
        v.model.toLowerCase().includes(term) ||
        (v.color && v.color.toLowerCase().includes(term))
      );
    }

    // Make filter
    if (selectedMake) {
      result = result.filter(v => v.make.toLowerCase() === selectedMake.toLowerCase());
    }

    // Max Price filter
    if (maxPrice) {
      const limit = parseInt(maxPrice, 10);
      result = result.filter(v => v.priceNum <= limit);
    }

    // Sorting
    if (sortBy === 'Price: Low to High') {
      result.sort((a, b) => a.priceNum - b.priceNum);
    } else if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => b.priceNum - a.priceNum);
    } else if (sortBy === 'Mileage: Low to High') {
      const parseMil = (str: string) => parseInt(str.replace(/[^0-9]/g, ''), 10) || 0;
      result.sort((a, b) => parseMil(a.mileage) - parseMil(b.mileage));
    } else {
      // Newest First (default)
      result.sort((a, b) => (parseInt(b.year, 10) || 0) - (parseInt(a.year, 10) || 0));
    }

    return result;
  }, [search, selectedMake, maxPrice, sortBy]);

  const handleClearAll = () => {
    setSearch('');
    setSelectedMake('');
    setMaxPrice('');
    setSortBy('Newest First');
  };

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
          className="mb-12">
          
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Our Showroom
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Browse our curated selection of premium used vehicles. Every car
            comes with a comprehensive warranty and has undergone rigorous
            inspection.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              delay: 0.2
            }}
            className="w-full lg:w-80 flex-shrink-0">
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-32">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-xl font-semibold text-white flex items-center gap-2">
                  <Filter size={20} className="text-brand-red" />
                  Filters
                </h2>
                <button 
                  onClick={handleClearAll}
                  className="text-sm text-white/40 hover:text-white transition-colors">
                  Clear All
                </button>
              </div>

              <div className="space-y-6">
                {/* Search */}
                <div className="relative">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search vehicles..."
                    className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white text-sm focus:outline-none focus:border-brand-red transition-colors" />
                  
                  <Search
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                  
                </div>

                {/* Make Filter */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Make
                  </label>
                  <div className="relative">
                    <select 
                      value={selectedMake}
                      onChange={(e) => setSelectedMake(e.target.value)}
                      className="w-full appearance-none bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-red transition-colors">
                      <option value="">All Makes</option>
                      {uniqueMakes.map(make => (
                        <option key={make} value={make.toLowerCase()}>{make}</option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" />
                    
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Max Price
                  </label>
                  <div className="relative">
                    <select 
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="w-full appearance-none bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-red transition-colors">
                      <option value="">Any Price</option>
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
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vehicle Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-white/60 text-sm">
                Showing {filteredVehicles.length} vehicles
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-white/60">Sort by:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent border-none text-white text-sm focus:outline-none cursor-pointer">
                  <option className="bg-black" value="Newest First">Newest First</option>
                  <option className="bg-black" value="Price: Low to High">Price: Low to High</option>
                  <option className="bg-black" value="Price: High to Low">Price: High to Low</option>
                  <option className="bg-black" value="Mileage: Low to High">Mileage: Low to High</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredVehicles.map((vehicle, idx) =>
              <VehicleCard key={vehicle.id} {...vehicle} delay={idx * 0.03} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>);

}