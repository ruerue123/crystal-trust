import React from 'react';
import { motion } from 'framer-motion';
export function AboutHero() {
  return (
    <section className="pt-32 pb-24 md:pt-48 md:pb-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
              Our Story
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-forestGreen leading-tight mb-8">
              Nurturing future leaders.
            </h1>
            <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed mb-8 max-w-xl">
              Crystal Trust School is a Zimsec-registered Christian school in
              Glaudina, Harare, and a member of the Association of Christian
              Schools in Southern Africa (ACSI). Our vision is to become a
              premier Christian institution that inspires students to reach their
              fullest potential.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            
            <img
              src="/images/whole-school.jpg"
              alt="The whole Crystal Trust School under the school and national flags"
              className="w-full h-full object-cover"
              onError={(e) => {e.currentTarget.src = '/images/students1.jpg';}} />
            
            <div className="absolute inset-0 bg-forestGreen/10 mix-blend-multiply" />
          </motion.div>
        </div>
      </div>
    </section>);

}