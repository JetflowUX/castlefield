import React from 'react';
import { Calendar, Gauge, Fuel, Settings } from 'lucide-react';
const CARS = [
{
  id: 1,
  make: 'Audi',
  model: 'A3 1.4 TFSI S line',
  price: '£14,995',
  image:
  'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&q=80&w=800',
  year: '2018',
  mileage: '45,000',
  fuel: 'Petrol',
  transmission: 'Manual'
},
{
  id: 2,
  make: 'Mercedes-Benz',
  model: 'C-Class 2.1 C220d AMG Line',
  price: '£18,450',
  image:
  'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
  year: '2019',
  mileage: '32,000',
  fuel: 'Diesel',
  transmission: 'Auto'
},
{
  id: 3,
  make: 'BMW',
  model: '3 Series 2.0 320i M Sport',
  price: '£21,900',
  image:
  'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
  year: '2020',
  mileage: '28,500',
  fuel: 'Petrol',
  transmission: 'Auto'
}];

export function FeaturedVehicles() {
  return (
    <section className="py-24 bg-[#0E0E10] relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wider">
            Featured Vehicles
          </h2>
          <div className="w-24 h-1 bg-[#E01E1E] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARS.map((car) =>
          <div
            key={car.id}
            className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all group cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-black/50">
            
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                src={car.image}
                alt={`${car.make} ${car.model}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              
                <div className="absolute top-4 right-4 bg-[#E01E1E] text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  {car.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  {car.make}
                </h3>
                <p className="text-zinc-400 text-sm mb-6 h-10">{car.model}</p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-zinc-300 text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-[#E01E1E]" />
                    {car.year}
                  </div>
                  <div className="flex items-center text-zinc-300 text-sm">
                    <Gauge className="w-4 h-4 mr-2 text-[#E01E1E]" />
                    {car.mileage} m
                  </div>
                  <div className="flex items-center text-zinc-300 text-sm">
                    <Fuel className="w-4 h-4 mr-2 text-[#E01E1E]" />
                    {car.fuel}
                  </div>
                  <div className="flex items-center text-zinc-300 text-sm">
                    <Settings className="w-4 h-4 mr-2 text-[#E01E1E]" />
                    {car.transmission}
                  </div>
                </div>

                <button className="w-full py-3 border border-zinc-700 text-white rounded-md hover:bg-zinc-800 transition-colors font-semibold">
                  View Details
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-[#E01E1E] text-[#E01E1E] hover:bg-[#E01E1E] hover:text-white px-8 py-3 rounded-md font-bold tracking-wide transition-colors">
            VIEW ALL VEHICLES
          </button>
        </div>
      </div>
    </section>);

}