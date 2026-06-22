import React from 'react';
import { motion } from 'framer-motion';
export function AdmissionsCTA() {
  return (
    <section
      id="admissions"
      className="relative py-20 md:py-24 overflow-hidden bg-forestGreen">
      
      {/* Background Pattern / Image */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay">
        <img
          src="/images/students.jpg"
          alt="Background"
          className="w-full h-full object-cover" />
        
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}>
          
          <span className="text-xs font-bold tracking-widest uppercase text-gold mb-6 block">
            Take the Next Step
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mb-6 md:mb-8 leading-tight">
            Begin Your Child's Journey Today
          </h2>
          <p className="text-stone/80 text-base sm:text-lg md:text-xl mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            We invite you to discover how Crystal Trust School can provide the
            foundation for your child's future success. Applications for the
            upcoming academic year are now open.
          </p>

          <div className="flex justify-center items-center">
            <a
              href="#apply"
              className="px-8 py-4 bg-gold text-forestGreen rounded-full font-medium hover:bg-white transition-colors duration-300 w-full sm:w-auto">

              Begin Application
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}