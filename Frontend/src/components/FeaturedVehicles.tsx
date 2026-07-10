import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VehicleCard } from './VehicleCard';
import { ArrowRight } from 'lucide-react';
import { VehicleDetailsModal } from './VehicleDetailsModal';
import vehiclesData from '../data/vehicles.json';

// Curate specific premium vehicles from our database
const FEATURED_VEHICLES = vehiclesData.filter(v => 
  ['8042559', '6976353', '7486498', '7529298'].includes(v.id)
);

export function FeaturedVehicles() {
  const [selectedVehicle, setSelectedVehicle] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenDetails = (vehicle: any) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Vehicles
            </h2>
            <p className="text-white/60 text-lg">
              Explore our hand-picked selection of premium vehicles, each
              thoroughly inspected and ready for the road.
            </p>
          </div>
          <Link to="/showroom" className="flex items-center gap-2 text-white hover:text-brand-red transition-colors font-medium group whitespace-nowrap">
            View All Stock
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_VEHICLES.map((vehicle, index) =>
          <VehicleCard key={index} {...vehicle} delay={index * 0.1} onViewDetails={handleOpenDetails} />
          )}
        </div>

        {/* Representative Example Block */}
        <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 text-center max-w-4xl mx-auto">
          <p className="text-white/60 text-xs leading-relaxed">
            <span className="font-semibold text-white uppercase tracking-wider block mb-1">Representative Finance Example</span>
            Representative Example: Purchase Price <span className="text-white">£14,995.00</span>, Deposit <span className="text-white">£0.00</span>, Term <span className="text-white">60 months</span>, 60 monthly payments of <span className="text-white">£310.22</span>, Total Amount Payable <span className="text-white">£18,613.20</span>. Rate of Interest <span className="text-white">4.5% Fixed</span>. Representative <span className="text-brand-red font-bold">9.9% APR</span>.
          </p>
        </div>
      </div>
      <VehicleDetailsModal vehicle={selectedVehicle} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>);

}