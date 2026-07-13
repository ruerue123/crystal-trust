import React from 'react';
import { motion } from 'framer-motion';
export function Leadership() {
  return (
    <section className="py-24 md:py-32 bg-forestGreen text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="md:col-span-5">
            
            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
              <img
                src="/images/headmaster-3.jpg"
                alt="Crystal Trust School leadership"
                onError={(e) => {e.currentTarget.src = '/images/head-speaking.jpg';}}
                className="w-full h-full object-cover object-top" />

              <div className="absolute inset-0 bg-forestGreen/10 mix-blend-multiply" />
            </div>
          </motion.div>

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
              duration: 0.8,
              delay: 0.2
            }}
            className="md:col-span-7">
            
            <span className="text-xs font-bold tracking-widest uppercase text-gold mb-6 block">
              A Message from the Head
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
              Welcome to a community where every child is known and valued.
            </h2>
            <div className="space-y-6 text-stone/80 text-lg leading-relaxed mb-12">
              <p>
                Choosing a school for your child is one of the most significant
                decisions a family makes. You are looking for a place where they
                will be challenged academically, supported emotionally, and
                guided morally.
              </p>
              <p>
                Here at Crystal Trust, we take that responsibility to heart. We
                are a community bound by shared Christian values, a commitment
                to excellence, and a profound belief in the potential of every
                learner who walks through our doors.
              </p>
              <p>
                I invite you to explore our campus, meet our dedicated
                educators, and experience the warmth and vitality of the Crystal
                Trust family.
              </p>
            </div>

            {/* TODO: replace with the school head's real name and title */}
            <div>
              <p className="font-serif text-2xl text-gold mb-1">
                The Head of School
              </p>
              <p className="text-sm uppercase tracking-widest text-stone/50">
                Crystal Trust School
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}