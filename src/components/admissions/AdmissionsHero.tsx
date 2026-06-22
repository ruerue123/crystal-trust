import React from 'react';
import { motion } from 'framer-motion';
export function AdmissionsHero() {
  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-32 bg-forestGreen text-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}>
          
          <span className="text-xs font-bold tracking-widest uppercase text-gold mb-6 block">
            Join Our Family
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-8">
            An investment in their future.
          </h1>
          <p className="text-lg md:text-xl text-stone/80 leading-relaxed mb-12">
            We are delighted that you are considering Crystal Trust School for
            your child's education. Our admissions process is designed to be
            transparent, welcoming, and focused on ensuring our school is the
            perfect fit for your family.
          </p>
        </motion.div>
      </div>
    </section>);

}