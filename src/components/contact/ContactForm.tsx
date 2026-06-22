import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>(
    'idle'
  );
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="font-serif text-3xl text-forestGreen mb-6">
                Contact Information
              </h2>
              <p className="text-charcoal/70 mb-8">
                Our administrative team is available during school hours to
                assist with any enquiries.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-forestGreen" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-charcoal mb-1">
                      Address
                    </h4>
                    <p className="text-charcoal/70">
                      544 Glaudina
                      <br />
                      Harare
                      <br />
                      Zimbabwe
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-forestGreen" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-charcoal mb-1">
                      Phone
                    </h4>
                    <p className="text-charcoal/70">
                      +263 779 851 408
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-forestGreen" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-charcoal mb-1">
                      Email
                    </h4>
                    <p className="text-charcoal/70">
                      info@crystaltrustschool.co.zw
                      <br />
                      admissions@crystaltrustschool.co.zw
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-forestGreen" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-charcoal mb-1">
                      Office Hours
                    </h4>
                    <p className="text-charcoal/70">
                      Monday – Thursday: 07:30 – 15:00
                      <br />
                      Friday: 07:30 – 13:00
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-forestGreen p-8 rounded-2xl text-white">
              <h3 className="font-serif text-2xl mb-4">Admissions Enquiries</h3>
              <p className="text-stone/80 text-sm mb-6">
                For specific questions regarding enrollment, fees, or to
                schedule a tour, please contact our Admissions Office directly.
              </p>
              <a
                href="mailto:admissions@crystaltrustschool.co.zw"
                className="inline-block px-6 py-3 bg-gold text-forestGreen rounded-full font-medium text-sm hover:bg-white transition-colors">
                
                Email Admissions
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-charcoal/5 border border-stone">
              <h2 className="font-serif text-3xl text-forestGreen mb-8">
                Send an Enquiry
              </h2>

              {status === 'success' ?
              <motion.div
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                className="bg-stone/30 p-8 rounded-2xl text-center">
                
                  <h3 className="font-serif text-2xl text-forestGreen mb-2">
                    Thank You
                  </h3>
                  <p className="text-charcoal/70">
                    Your message has been received. Our team will be in touch
                    shortly.
                  </p>
                  <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-gold font-medium uppercase tracking-widest text-sm">
                  
                    Send another message
                  </button>
                </motion.div> :

              <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-charcoal">
                        First Name
                      </label>
                      <input
                      required
                      type="text"
                      className="w-full bg-stone/20 border border-stone rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" />
                    
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-charcoal">
                        Last Name
                      </label>
                      <input
                      required
                      type="text"
                      className="w-full bg-stone/20 border border-stone rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" />
                    
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-charcoal">
                        Email Address
                      </label>
                      <input
                      required
                      type="email"
                      className="w-full bg-stone/20 border border-stone rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" />
                    
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-charcoal">
                        Phone Number
                      </label>
                      <input
                      type="tel"
                      className="w-full bg-stone/20 border border-stone rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors" />
                    
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-charcoal">
                      Enquiry Type
                    </label>
                    <select className="w-full bg-stone/20 border border-stone rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors appearance-none">
                      <option>General Enquiry</option>
                      <option>Admissions</option>
                      <option>Employment</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-charcoal">
                      Message
                    </label>
                    <textarea
                    required
                    rows={5}
                    className="w-full bg-stone/20 border border-stone rounded-xl px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none">
                  </textarea>
                  </div>

                  <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-forestGreen text-white rounded-xl font-medium hover:bg-deepEmerald transition-colors disabled:opacity-70">
                  
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              }
            </div>
          </div>
        </div>
      </div>
    </section>);

}