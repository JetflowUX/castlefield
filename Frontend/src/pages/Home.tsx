import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { FeaturedVehicles } from '../components/FeaturedVehicles';
import { CardStackSection } from '../components/CardStackSection';
import { VehicleDetailsModal } from '../components/VehicleDetailsModal';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Award, 
  ThumbsUp, 
  Shield, 
  Car, 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  MessageSquare,
  Clock,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';

export function Home() {
  const [selectedVehicle, setSelectedVehicle] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenDetails = (vehicle: any) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col w-full bg-background min-h-screen text-foreground relative">
      <Hero />
      <FeaturedVehicles onViewDetails={handleOpenDetails} />
      <CardStackSection />

      {/* Customer Feedback / Testimonials Badge Section */}
      <section className="py-16 bg-gradient-to-br from-background via-muted/50 to-background border-t border-b border-border relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Read what our <br />
                <span className="text-brand-red">customers have to say</span>
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed max-w-lg font-light">
                We pride ourselves on our high customer service. But don't just take our word for it, read all our customer reviews.
              </p>
              <Link 
                to="/about" 
                className="w-fit px-8 py-3.5 bg-brand-red hover:bg-red-700 text-white font-medium rounded-full transition-all flex items-center gap-2"
              >
                <MessageSquare size={18} />
                Write a Review
              </Link>
            </motion.div>

            {/* Right Badge Widget */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:ml-auto w-full max-w-md bg-card border border-border p-8 rounded-2xl relative overflow-hidden backdrop-blur-md hover-glow shadow-md"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                  <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-bold text-foreground">Google Rating</h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                    <span className="text-sm font-semibold text-foreground/80 ml-2">5.0 / 5.0</span>
                  </div>
                </div>
              </div>

              <p className="text-foreground/60 text-sm leading-relaxed mb-6 font-light">
                "Excellent service from start to finish. Transparent pricing, no pressure, and very helpful staff. Highly recommended dealership in Manchester!"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-foreground/40">400+ Client Reviews</span>
                <span className="text-xs font-bold tracking-widest uppercase text-brand-red">Verified Dealer</span>
              </div>

              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-border/50">
                <img src="/img/reviews--google.1780989690.png" alt="Google Review Rating" className="h-7 object-contain opacity-60 dark:opacity-80 hover:opacity-100 dark:invert-0 invert transition-opacity" />
                <img src="/img/reviews--autotrader.1780989690.png" alt="AutoTrader Review Rating" className="h-7 object-contain opacity-60 dark:opacity-80 hover:opacity-100 dark:invert-0 invert transition-opacity" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SEO Two-Column Text Section */}
      <section className="py-20 bg-background relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Columns: Text Content (spans 2) */}
            <div className="lg:col-span-2 flex flex-col gap-10 text-foreground/80 leading-relaxed font-light text-base">
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 border-l-4 border-brand-red pl-4">
                  Trusted Car Dealership In Manchester
                </h2>
                <p className="mb-4">
                  Welcome to Castlefield Car Centre, your go-to choice for reliable car dealers in Manchester. As a long-established dealership, we pride ourselves on providing a reliable and hassle-free car-buying experience.
                </p>
                <p>
                  With a wide range of used vehicles and a commitment to excellent customer service, we have built a reputation for being one of the most trusted car dealers in Greater Manchester. Whether you're looking for an affordable first car, a spacious family vehicle, or a premium brand, we're here to help. Browse our selection online or visit our dealership in person to find the perfect car for your needs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                  Why Choose Castlefield Car Centre?
                </h3>
                <p className="mb-4">
                  Castlefield Car Centre has been a cornerstone in the car dealership community for years, serving the people of Greater Manchester and beyond. Here's why customers choose us:
                </p>
                <ul className="space-y-3 pl-4">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold">•</span>
                    <span><strong>Extensive Industry Experience:</strong> We've built a wealth of knowledge over the years, ensuring we understand what customers need when looking for a reliable used car.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold">•</span>
                    <span><strong>Commitment to Customer Satisfaction:</strong> Our friendly staff are always ready to help, whether you need advice on choosing the right vehicle or guidance on finance options.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold">•</span>
                    <span><strong>Quality Assurance:</strong> Every car undergoes a thorough inspection to ensure it meets our quality standards, with all vehicles clearly priced for transparency.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-red font-bold">•</span>
                    <span><strong>Wide Selection of Vehicles:</strong> We stock cars across various makes and models, from budget options to luxury vehicles, catering to all tastes and budgets.</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  Browse Our Latest Stock
                </h3>
                <p className="mb-3">
                  Explore our latest inventory of quality used cars at Castlefield Car Centre. Our online listings feature a diverse selection, from compact city cars to spacious SUVs, across leading manufacturers. With detailed listings, high-quality images, and comprehensive vehicle history reports, it's easy to find the right car for you.
                </p>
                <p>
                  Visit our <Link to="/showroom" className="text-brand-red hover:underline font-semibold">used cars in Manchester</Link> page to see the full range and find a car that fits your lifestyle. We're constantly updating our stock, so check back frequently or visit our car dealership in Manchester to see our latest arrivals in person.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  Part Exchange Your Car
                </h3>
                <p>
                  Make your car-buying experience even easier by using our part-exchange programme. Trading in your old car is simple at Castlefield Car Centre. We offer competitive valuations for all vehicles, including scrap cars, making it a convenient way to reduce the cost of your next car purchase. Get an instant estimate online or bring your vehicle to our car dealership in Manchester for an on-the-spot valuation. The process is quick and easy, and we'll take care of everything for you, ensuring a seamless transition to your new vehicle.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  Visit Our Car Dealership In Manchester
                </h3>
                <p className="mb-4">
                  We invite you to visit our trusted car dealership in Manchester for a hands-on car-buying experience. We're located in Heywood, just a short drive from the city centre, making us easily accessible to customers across Greater Manchester.
                </p>
                <div className="bg-card border border-border p-6 rounded-xl">
                  <h4 className="font-heading text-md font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Clock size={16} className="text-brand-red" />
                    Opening Hours:
                  </h4>
                  <ul className="space-y-1.5 text-foreground/80 text-sm">
                    <li className="flex justify-between border-b border-border/50 pb-1">
                      <span>Monday to Saturday:</span> <span className="font-semibold text-foreground">10:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between pt-1">
                      <span>Sunday:</span> <span className="font-semibold text-brand-red">Closed</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  Find Your Next Car Today
                </h3>
                <p>
                  Our goal is to make your car-buying journey as smooth as possible. From exploring our wide selection of used cars in Manchester to benefiting from our affordable finance options, we provide everything you need under one roof. Don't hesitate to browse our stock, get in touch for more information, or visit us in Greater Manchester. We look forward to helping you find your next car!
                </p>
              </motion.div>

            </div>

            {/* Right Column: Contact Widget Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
              className="lg:col-span-1"
            >
              <div className="bg-card border border-border rounded-2xl p-6 sticky top-32 flex flex-col gap-6 hover-glow shadow-md">
                
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                    Get in touch with the team
                  </h3>
                  <p className="text-xs text-foreground/45">Castlefield Car Centre Ltd</p>
                </div>

                <div className="flex flex-col gap-4">
                  <a 
                    href="tel:01615050508" 
                    className="flex items-center gap-4 p-4 rounded-xl bg-background hover:bg-brand-red/10 border border-border transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-red/10 group-hover:bg-brand-red/20 flex items-center justify-center text-brand-red transition-colors flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-foreground/40">Call Us Directly</div>
                      <div className="text-sm font-bold text-foreground">0161 50 50 508</div>
                    </div>
                  </a>

                  <a 
                    href="mailto:sales@castlefieldcarcentre.co.uk" 
                    className="flex items-center gap-4 p-4 rounded-xl bg-background hover:bg-brand-red/10 border border-border transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-red/10 group-hover:bg-brand-red/20 flex items-center justify-center text-brand-red transition-colors flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-foreground/40">Email Our Team</div>
                      <div className="text-sm font-bold text-foreground break-all">sales@castlefieldcarcentre.co.uk</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-background/40 border border-border">
                    <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red flex-shrink-0 mt-0.5">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-foreground/40">Our Address</div>
                      <div className="text-xs text-foreground/80 mt-1 leading-relaxed">
                        1 Adelaide Street,<br />
                        Heywood, Manchester,<br />
                        Lancashire, OL10 4HQ
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="text-xs text-foreground/40 mb-3">Follow Us on Social Media:</div>
                  <div className="flex items-center gap-3">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-background hover:bg-brand-red hover:text-white text-foreground/60 border border-border flex items-center justify-center transition-colors">
                      <Instagram size={14} />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-background hover:bg-brand-red hover:text-white text-foreground/60 border border-border flex items-center justify-center transition-colors">
                      <Facebook size={14} />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-background hover:bg-brand-red hover:text-white text-foreground/60 border border-border flex items-center justify-center transition-colors">
                      <Youtube size={14} />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Floating WhatsApp Widget */}
      <a
        href="https://wa.me/441615050508"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.747 1.451 5.436.002 9.858-4.415 9.86-9.859.002-2.638-1.025-5.118-2.892-6.988C16.495 1.888 14.022.862 11.39.862 5.952.862 1.533 5.28 1.531 10.718c0 1.637.433 3.237 1.254 4.639L1.761 19.87l4.886-1.282zM17.51 14.9c-.3-.15-1.78-.88-2.06-.98-.28-.1-.49-.15-.69.15-.2.3-.78.98-.96 1.18-.18.2-.36.23-.66.08-1.056-.53-2.102-1.085-2.92-1.79-.623-.537-1.127-1.186-1.472-1.92-.18-.3-.02-.47.13-.62.14-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.69-1.66-.95-2.27-.25-.62-.51-.53-.69-.54-.18-.01-.39-.01-.6-.01-.2 0-.53.07-.81.38-.28.3-1.06 1.04-1.06 2.53s1.08 2.93 1.23 3.13c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.73.23 1.39.2 1.91.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.29.18-1.42-.08-.13-.26-.21-.56-.36z" />
        </svg>
      </a>

      <VehicleDetailsModal vehicle={selectedVehicle} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}