import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [enquiryType, setEnquiryType] = useState('general');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const infoCardRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (ref: React.RefObject<HTMLDivElement>) => (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty('--mouse-x', `${x}px`);
    ref.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !phone || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1200);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-6 bg-background text-foreground select-none">
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
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-foreground/60 text-lg font-light">
            Get in touch with our team. Whether you're looking to buy, sell, or have a question about our services, we're here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.2
            }}
            className="space-y-8"
          >
            <div
              ref={infoCardRef}
              onMouseMove={handleMouseMove(infoCardRef)}
              className="glow-card p-8 cursor-default shadow-sm"
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6 relative z-10">
                Get In Touch
              </h2>

              <div className="space-y-6 relative z-10">
                <a
                  href="tel:01615050508"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center border border-border group-hover:border-brand-red transition-colors flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/50 mb-1">Call Us</div>
                    <div className="text-lg text-foreground font-semibold group-hover:text-brand-red transition-colors">
                      0161 50 50 508
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:sales@castlefieldcarcentre.co.uk"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center border border-border group-hover:border-brand-red transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/50 mb-1">Email Us</div>
                    <div className="text-lg text-foreground font-semibold group-hover:text-brand-red transition-colors break-all">
                      sales@castlefieldcarcentre.co.uk
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center border border-border flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/50 mb-1">Location</div>
                    <div className="text-lg text-foreground font-semibold">
                      Castlefield Car Centre
                      <br />
                      <span className="font-light text-base text-foreground/80">
                        1 Adelaide Street, Heywood,<br />
                        Manchester, Lancashire, OL10 4HQ
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center border border-border flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/50 mb-1">
                      Opening Hours
                    </div>
                    <ul className="text-foreground/80 space-y-1.5 text-sm">
                      <li className="flex justify-between gap-8 border-b border-border/50 pb-1">
                        <span>Monday - Saturday:</span> <span className="font-semibold text-foreground">10:00 - 17:00</span>
                      </li>
                      <li className="flex justify-between gap-8 pt-1">
                        <span>Sunday:</span> <span className="font-semibold text-brand-red">Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="aspect-video rounded-3xl overflow-hidden border border-border bg-card relative shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2367.980223596989!2d-2.218103505895867!3d53.59381450110017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bbbaec2c32e99%3A0x748c7cca412ca297!2s1%20Adelaide%20St%2C%20Heywood%20OL10%204HQ!5e0!3m2!1sen!2suk!4v1725266599707!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 hover:opacity-100 transition-opacity dark:invert-0 invert-[0.1]"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
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
              delay: 0.4
            }}
          >
            <div
              ref={formCardRef}
              onMouseMove={handleMouseMove(formCardRef)}
              className="glow-card p-8 h-full cursor-default shadow-sm"
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6 relative z-10">
                Send a Message
              </h2>

              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col items-center justify-center text-center h-[400px] space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center shadow-lg">
                        <CheckCircle2 size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold font-heading text-foreground">Message Sent!</h3>
                        <p className="text-foreground/60 text-sm mt-2 max-w-sm leading-relaxed font-light">
                          Thank you for contacting Castlefield Car Centre. We have received your message and will get back to you shortly.
                        </p>
                      </div>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-2.5 bg-foreground/5 hover:bg-foreground/10 text-foreground rounded-xl text-xs font-bold border border-border transition-all"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <form className="space-y-5" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-foreground/80">
                            First Name
                          </label>
                          <input
                            type="text"
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-brand-red transition-colors placeholder:text-foreground/40"
                            placeholder="John"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-semibold text-foreground/80">
                            Last Name
                          </label>
                          <input
                            type="text"
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-brand-red transition-colors placeholder:text-foreground/40"
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground/80">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-brand-red transition-colors placeholder:text-foreground/40"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground/80">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-brand-red transition-colors placeholder:text-foreground/40"
                          placeholder="07123 456789"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground/80">
                          Enquiry Type
                        </label>
                        <div className="relative">
                          <select
                            value={enquiryType}
                            onChange={(e) => setEnquiryType(e.target.value)}
                            className="w-full appearance-none bg-background border border-border rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-brand-red transition-colors"
                          >
                            <option value="general" className="bg-background">General Enquiry</option>
                            <option value="sales" className="bg-background">Vehicle Sales</option>
                            <option value="finance" className="bg-background">Finance</option>
                            <option value="part-exchange" className="bg-background">Part Exchange</option>
                          </select>
                          <ChevronDown
                            size={16}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50 pointer-events-none" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground/80">
                          Message
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-brand-red transition-colors resize-none placeholder:text-foreground/40"
                          placeholder="How can we help you?"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-brand-red hover:bg-red-700 text-white rounded-xl font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Sending Message...</span>
                        ) : (
                          <>
                            <Send size={18} />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}