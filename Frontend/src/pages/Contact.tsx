import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
export function Contact() {
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
          className="mb-16 text-center max-w-3xl mx-auto">
          
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/60 text-lg">
            Get in touch with our team. Whether you're looking to buy, sell, or
            have a question about our services, we're here to help.
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
              x: 0
            }}
            transition={{
              delay: 0.2
            }}
            className="space-y-8">
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h2 className="font-heading text-2xl font-bold text-white mb-6">
                Get In Touch
              </h2>

              <div className="space-y-6">
                <a
                  href="tel:01615050508"
                  className="flex items-start gap-4 group">
                  
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-white/10 group-hover:border-brand-red transition-colors flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-1">Call Us</div>
                    <div className="text-lg text-white font-medium group-hover:text-brand-red transition-colors">
                      0161 50 50 508
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:sales@castlefieldcarcentre.co.uk"
                  className="flex items-start gap-4 group">
                  
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-white/10 group-hover:border-brand-red transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-1">Email Us</div>
                    <div className="text-lg text-white font-medium group-hover:text-brand-red transition-colors break-all">
                      sales@castlefieldcarcentre.co.uk
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-white/10 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-1">Location</div>
                    <div className="text-lg text-white font-medium">
                      Castlefield Car Centre
                      <br />
                      1 Adelaide Street, Heywood,
                      <br />
                      Manchester, Lancashire, OL10 4HQ
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border border-white/10 flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-1">
                      Opening Hours
                    </div>
                    <ul className="text-white space-y-1">
                      <li className="flex justify-between gap-4">
                        <span>Mon - Sat:</span> <span>10:00 - 17:00</span>
                      </li>
                      <li className="flex justify-between gap-4">
                        <span>Sunday:</span> <span>Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2367.980223596989!2d-2.218103505895867!3d53.59381450110017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bbbaec2c32e99%3A0x748c7cca412ca297!2s1%20Adelaide%20St%2C%20Heywood%20OL10%204HQ!5e0!3m2!1sen!2suk!4v1725266599707!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 hover:opacity-100 transition-opacity"
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
            }}>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-full">
              <h2 className="font-heading text-2xl font-bold text-white mb-6">
                Send a Message
              </h2>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-red transition-colors"
                      placeholder="John" />
                    
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-red transition-colors"
                      placeholder="Doe" />
                    
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="john@example.com" />
                  
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="07123 456789" />
                  
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Enquiry Type
                  </label>
                  <select className="w-full appearance-none bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-red transition-colors">
                    <option value="general">General Enquiry</option>
                    <option value="sales">Vehicle Sales</option>
                    <option value="finance">Finance</option>
                    <option value="part-exchange">Part Exchange</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-red transition-colors resize-none"
                    placeholder="How can we help you?">
                  </textarea>
                </div>

                <button className="w-full py-4 bg-brand-red hover:bg-red-700 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2 mt-4">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>);

}