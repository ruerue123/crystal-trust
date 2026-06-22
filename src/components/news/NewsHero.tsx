import React from 'react';
import { motion } from 'framer-motion';
export function NewsHero() {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-ivory">
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
            The Chronicle
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-forestGreen leading-tight mb-8">
            News & Stories
          </h1>
          <p className="text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto">
            Discover the latest achievements, events, and inspiring stories from
            the Crystal Trust community.
          </p>
        </motion.div>
      </div>
    </section>);

}