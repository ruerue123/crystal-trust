import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

// "Welcome from the Head" message — the credibility-building block Hellenic
// Academy leads with. Portrait + signed message in the school's voice.
export function HeadsWelcome() {
  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Portrait */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="lg:col-span-5 relative mb-8 lg:mb-0">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/images/head-speaking.jpg"
                alt="The Head of Crystal Trust School"
                className="w-full h-full object-cover"
                onError={(e) => {e.currentTarget.src = '/images/head-speaking2.jpg';}} />
              <div className="absolute inset-0 bg-forestGreen/10 mix-blend-multiply" />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-5 right-3 md:right-6 bg-forestGreen text-white rounded-2xl px-5 py-4 md:px-6 md:py-5 shadow-xl max-w-[180px] md:max-w-[200px]">
              <p className="font-serif text-2xl leading-tight">Est. 2016</p>
              <p className="text-xs text-white/70 uppercase tracking-widest mt-1">
                Glaudina, Harare
              </p>
            </div>
          </motion.div>

          {/* Message */}
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
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="lg:col-span-7">
            <span className="text-xs font-bold tracking-widest uppercase text-gold mb-6 block">
              A Welcome from the Head
            </span>
            <Quote className="w-10 h-10 text-stone mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl text-forestGreen leading-snug mb-8 text-balance">
              "Every child who walks through our gates is known, loved and called
              to flourish."
            </h2>
            <div className="space-y-5 text-charcoal/70 text-lg leading-relaxed">
              <p>
                At Crystal Trust we believe a great primary education is built on
                more than results. It is built on character, faith and the
                confidence that comes from being truly cared for. From ECD to
                Grade 7, our teachers walk alongside every learner — nurturing
                their minds, their spirit and their love of learning.
              </p>
              <p>
                Whether you are joining us for the first time or returning to a
                school you already call home, you are warmly welcome. Come and
                see for yourself the difference a Christ-centred education makes.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-10 pt-8 border-t border-stone">
              <p className="font-serif text-2xl text-forestGreen">The Head Teacher</p>
              <p className="text-sm text-charcoal/60 mt-1 uppercase tracking-wider">
                Crystal Trust School
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
