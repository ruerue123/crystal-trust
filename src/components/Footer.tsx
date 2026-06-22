import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-forestGreen text-stone pt-16 md:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-8 mb-12 md:mb-20">
          {/* Brand & Motto */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Crystal Trust School crest"
                className="h-12 w-auto bg-white rounded-lg p-1"
                onError={(e) => {e.currentTarget.style.display = 'none';}} />

              <h2 className="font-serif text-3xl text-white">Crystal Trust</h2>
            </div>
            <p className="text-stone/80 text-sm leading-relaxed">
              A Zimsec-registered Christian school in Glaudina, Harare, and a
              member of ACSI. We help learners excel academically, in sport, and
              in the knowledge of God.
            </p>
            <div className="pt-4 border-t border-white/10">
              <p className="font-serif italic text-gold text-lg">
                Lapis Sint in Saecula
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-gold mb-6">
              Explore
            </h3>
            <ul className="space-y-4">
              {[
              'About Us',
              'Academic Excellence',
              'Student Life',
              'Admissions',
              'News & Stories'].
              map((link) =>
              <li key={link}>
                  <a
                  href="#"
                  className="text-sm text-stone/80 hover:text-white transition-colors flex items-center gap-2 group">
                  
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-gold" />
                    {link}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-gold mb-6">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-stone/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>
                  544 Glaudina
                  <br />
                  Harare, Zimbabwe
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>+263 779 851 408</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>info@crystaltrustschool.co.zw</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-gold mb-6">
              Stay Updated
            </h3>
            <p className="text-sm text-stone/80 mb-4">
              Subscribe to our termly newsletter for news and events.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 text-sm text-white placeholder:text-stone/50 focus:outline-none focus:border-gold transition-colors" />
              
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 aspect-square bg-gold rounded-full flex items-center justify-center text-forestGreen hover:bg-white transition-colors"
                aria-label="Subscribe">
                
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone/50">
          <p>
            © {new Date().getFullYear()} Crystal Trust School. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

}