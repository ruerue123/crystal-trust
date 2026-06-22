import React from 'react';
import { motion } from 'framer-motion';
export function AcademicsHero() {
  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-32 bg-stone/30">
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
          }}
          className="max-w-4xl mx-auto">
          
          <span className="text-xs font-bold tracking-widest uppercase text-gold mb-6 block">
            Academics
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-forestGreen leading-tight mb-8">
            Igniting curiosity. Inspiring excellence.
          </h1>
          <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed mb-12">
            Our rigorous, future-focused curriculum is designed to challenge the
            mind, nurture the spirit, and prepare our learners for the
            complexities of tomorrow's world.
          </p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="aspect-[21/9] rounded-3xl overflow-hidden relative shadow-2xl">
          
          <img
            src="/images/class.jpg"
            alt="Students in a modern classroom"
            className="w-full h-full object-cover" />
          
        </motion.div>
      </div>
    </section>);

}