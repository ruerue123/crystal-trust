import React from 'react';
import { motion } from 'framer-motion';
export function History() {
  return (
    <section className="py-24 md:py-32 bg-stone/30">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
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
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 0.8
          }}>
          
          <h2 className="font-serif text-4xl md:text-5xl text-forestGreen mb-12">
            Our Mission
          </h2>

          <div className="space-y-8 text-lg md:text-xl text-charcoal/80 leading-relaxed text-left md:text-center">
            <p>
              We are committed to delivering a comprehensive and top-notch
              education that fosters the growth of each student's mind, spirit,
              and social skills.
            </p>
            <p>
              As a Christian school, we see every child as a unique individual
              with God-given potential. Our role is to ignite curiosity, build
              character, and nurture confident learners ready for the next stage
              of their journey.
            </p>
            <p className="font-serif text-2xl md:text-3xl text-forestGreen italic py-8 border-y border-stone/50 my-12">
              Lapis Sint in Saecula
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

}