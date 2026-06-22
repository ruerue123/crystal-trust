import React from 'react';
import { motion } from 'framer-motion';
export function ContactHero() {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-stone/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
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
            Get in Touch
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-forestGreen leading-tight mb-8">
            We'd love to hear from you.
          </h1>
        </motion.div>
      </div>
    </section>);

}