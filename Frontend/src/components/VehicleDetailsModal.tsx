import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Gauge, Fuel, Settings, Landmark, ShieldCheck, Mail, Phone, User, Send, CheckCircle2, ChevronDown } from 'lucide-react';

interface Vehicle {
  id: string;
  make: string;
  model: string;
  price: string;
  priceNum: number;
  image: string;
  year: string;
  mileage: string;
  fuel: string;
  transmission: string;
  color?: string;
  bodyType?: string;
}

interface VehicleDetailsModalProps {
  vehicle: Vehicle | null;
  isOpen: boolean;
  onClose: () => void;
}

export function VehicleDetailsModal({ vehicle, isOpen, onClose }: VehicleDetailsModalProps) {
  const [deposit, setDeposit] = useState<string>('');
  const [term, setTerm] = useState<number>(60);
  const [payment, setPayment] = useState<number>(0);
  
  // Enquiry form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const specsCardRef = useRef<HTMLDivElement>(null);
  const financeCardRef = useRef<HTMLDivElement>(null);
  const enquiryCardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (ref: React.RefObject<HTMLDivElement>) => (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty('--mouse-x', `${x}px`);
    ref.current.style.setProperty('--mouse-y', `${y}px`);
  };

  // Lock background scroll when modal is active to prevent scrollbleed
  useEffect(() => {
    if (isOpen) {
      (window as any).lenis?.stop();
    } else {
      (window as any).lenis?.start();
    }
    return () => {
      (window as any).lenis?.start();
    };
  }, [isOpen]);

  // Listen for Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Initialize and calculate finance when vehicle or term/deposit changes
  useEffect(() => {
    if (vehicle) {
      // Default deposit to 10% of car price
      const defaultDeposit = Math.round(vehicle.priceNum * 0.1);
      setDeposit(defaultDeposit.toString());
      
      // Default enquiry message
      setMessage(`Hi, I am interested in the ${vehicle.make} ${vehicle.model} (${vehicle.price}) and would like to arrange a viewing.`);
      setIsSubmitted(false);
    }
  }, [vehicle]);

  useEffect(() => {
    if (vehicle) {
      const priceVal = vehicle.priceNum;
      const depositVal = parseFloat(deposit) || 0;
      const loanAmount = Math.max(0, priceVal - depositVal);
      
      // Fixed 5.19% flat rate (roughly equivalent to 9.9% APR over standard loan lengths)
      const flatInterestRate = 0.0519; 
      const totalInterest = loanAmount * flatInterestRate * (term / 12);
      const totalPayable = loanAmount + totalInterest;
      const monthlyPayment = term > 0 ? totalPayable / term : 0;
      
      setPayment(monthlyPayment);
    }
  }, [deposit, term, vehicle]);

  const handleSubmitEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset contact details
      setName('');
      setEmail('');
      setPhone('');
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && vehicle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto select-none">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl bg-card border border-border rounded-3xl overflow-hidden shadow-2xl z-10 my-8 max-h-[90vh] flex flex-col text-foreground"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border bg-foreground/[0.02]">
              <div>
                <h2 className="text-xl md:text-2xl font-bold font-heading text-foreground">
                  {vehicle.make} <span className="font-light text-foreground/70">{vehicle.model}</span>
                </h2>
                <p className="text-xs text-foreground/45">Ref: #{vehicle.id}</p>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-foreground/5 border border-border flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-foreground/10 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-grow overflow-y-auto p-6 md:p-8 space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Left Side: Photo and Specifications */}
                <div className="space-y-6">
                  {/* Photo */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-background shadow-sm">
                    <img 
                      src={vehicle.image} 
                      alt={`${vehicle.make} ${vehicle.model}`} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-brand-red text-white text-lg font-bold px-4 py-2 rounded-xl shadow-lg border border-red-500/20">
                      {vehicle.price}
                    </div>
                  </div>

                  {/* Specs Table */}
                  <div 
                    ref={specsCardRef}
                    onMouseMove={handleMouseMove(specsCardRef)}
                    className="glow-card p-6 cursor-default shadow-sm"
                  >
                    <div className="relative z-10">
                      <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 border-b border-border pb-2">Vehicle Specifications</h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border">
                          <Calendar size={18} className="text-brand-red flex-shrink-0" />
                          <div>
                            <div className="text-[10px] text-foreground/40 uppercase">Year</div>
                            <div className="text-sm font-semibold text-foreground">{vehicle.year}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border">
                          <Gauge size={18} className="text-brand-red flex-shrink-0" />
                          <div>
                            <div className="text-[10px] text-foreground/40 uppercase">Mileage</div>
                            <div className="text-sm font-semibold text-foreground">{vehicle.mileage}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border">
                          <Fuel size={18} className="text-brand-red flex-shrink-0" />
                          <div>
                            <div className="text-[10px] text-foreground/40 uppercase">Fuel Type</div>
                            <div className="text-sm font-semibold text-foreground">{vehicle.fuel}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border">
                          <Settings size={18} className="text-brand-red flex-shrink-0" />
                          <div>
                            <div className="text-[10px] text-foreground/40 uppercase">Transmission</div>
                            <div className="text-sm font-semibold text-foreground">{vehicle.transmission}</div>
                          </div>
                        </div>
                        {vehicle.color && (
                          <div className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border">
                            <div className="w-[18px] h-[18px] rounded-full border border-border" style={{ backgroundColor: vehicle.color.toLowerCase() === 'white' ? '#fff' : vehicle.color.toLowerCase() === 'black' ? '#000' : vehicle.color.toLowerCase() }} />
                            <div>
                              <div className="text-[10px] text-foreground/40 uppercase">Color</div>
                              <div className="text-sm font-semibold text-foreground">{vehicle.color}</div>
                            </div>
                          </div>
                        )}
                        {vehicle.bodyType && (
                          <div className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border">
                            <ShieldCheck size={18} className="text-brand-red flex-shrink-0" />
                            <div>
                              <div className="text-[10px] text-foreground/40 uppercase">Body Type</div>
                              <div className="text-sm font-semibold text-foreground">{vehicle.bodyType}</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Finance Calculator & Enquiry */}
                <div className="space-y-6">
                  
                  {/* Finance Calculator */}
                  <div 
                    ref={financeCardRef}
                    onMouseMove={handleMouseMove(financeCardRef)}
                    className="glow-card p-6 relative overflow-hidden cursor-default shadow-sm"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50 z-20" />
                    
                    <div className="relative z-10">
                      <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-border pb-2">
                        <Landmark size={16} className="text-brand-red" />
                        Finance Calculator
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-xs text-foreground/60 mb-2 font-medium">
                            <span>Deposit (Cash or Part-Ex)</span>
                            <span className="font-semibold">£{parseFloat(deposit) || 0}</span>
                          </div>
                          <input 
                            type="number" 
                            value={deposit}
                            onChange={(e) => setDeposit(e.target.value)}
                            className="w-full bg-background border border-border rounded-xl px-4 py-2.5 text-foreground text-xs focus:outline-none focus:border-brand-red transition-colors placeholder:text-foreground/40"
                            placeholder="Deposit amount"
                          />
                        </div>

                        <div>
                          <div className="flex justify-between text-xs text-foreground/60 mb-2 font-medium">
                            <span>Term Length (Months)</span>
                            <span className="font-semibold">{term} months</span>
                          </div>
                          <div className="grid grid-cols-4 gap-2">
                            {[12, 24, 36, 48, 60].map((m) => (
                              <button
                                key={m}
                                type="button"
                                onClick={() => setTerm(m)}
                                className={`py-2 rounded-xl text-xs font-semibold border transition-all ${
                                  term === m 
                                    ? 'bg-brand-red border-brand-red text-white shadow-sm shadow-brand-red/10' 
                                    : 'bg-background border-border text-foreground/60 hover:text-foreground hover:border-foreground/20'
                                }`}
                              >
                                {m}m
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-border flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-foreground/40 uppercase block">Estimated Payment</span>
                            <span className="text-xl md:text-2xl font-bold text-foreground">£{payment.toFixed(2)}<span className="text-xs font-normal text-foreground/60">/mo</span></span>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] text-brand-red font-semibold uppercase tracking-wider block">9.9% Representative</span>
                            <span className="text-[10px] text-foreground/40 block">Subject to status</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enquiry Form */}
                  <div 
                    ref={enquiryCardRef}
                    onMouseMove={handleMouseMove(enquiryCardRef)}
                    className="glow-card p-6 cursor-default shadow-sm"
                  >
                    <div className="relative z-10">
                      <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 border-b border-border pb-2">Request Information</h3>
                      
                      {isSubmitted ? (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-center py-6 space-y-3"
                        >
                          <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto shadow-sm">
                            <CheckCircle2 size={24} />
                          </div>
                          <div>
                            <h4 className="text-md font-semibold text-foreground">Enquiry Sent!</h4>
                            <p className="text-xs text-foreground/60 mt-1">Our sales team will contact you shortly.</p>
                          </div>
                          <button 
                            onClick={() => setIsSubmitted(false)}
                            className="text-xs text-brand-red hover:underline font-semibold"
                          >
                            Send another enquiry
                          </button>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleSubmitEnquiry} className="space-y-3">
                          <div className="relative">
                            <input 
                              type="text" 
                              required
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Your Name"
                              className="w-full bg-background border border-border rounded-xl pl-10 pr-4 py-2.5 text-foreground text-xs focus:outline-none focus:border-brand-red transition-colors placeholder:text-foreground/40"
                            />
                            <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/45" />
                          </div>

                          <div className="relative">
                            <input 
                              type="email" 
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Email Address"
                              className="w-full bg-background border border-border rounded-xl pl-10 pr-4 py-2.5 text-foreground text-xs focus:outline-none focus:border-brand-red transition-colors placeholder:text-foreground/40"
                            />
                            <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/45" />
                          </div>

                          <div className="relative">
                            <input 
                              type="tel" 
                              required
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="Phone Number"
                              className="w-full bg-background border border-border rounded-xl pl-10 pr-4 py-2.5 text-foreground text-xs focus:outline-none focus:border-brand-red transition-colors placeholder:text-foreground/40"
                            />
                            <Phone size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/45" />
                          </div>

                          <div>
                            <textarea 
                              rows={2}
                              required
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              className="w-full bg-background border border-border rounded-xl px-3.5 py-2.5 text-foreground text-xs focus:outline-none focus:border-brand-red transition-colors resize-none placeholder:text-foreground/40"
                            />
                          </div>

                          <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 bg-brand-red hover:bg-red-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-sm"
                          >
                            {isSubmitting ? (
                              <span>Sending...</span>
                            ) : (
                              <>
                                <Send size={12} />
                                <span>Submit Enquiry</span>
                              </>
                            )}
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
