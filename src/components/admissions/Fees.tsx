import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

// Fees as published on the school's enrolment banner. TODO: confirm each term.
const oneOff = [
{ label: 'Registration', amount: '$50', note: 'One-off, on enrolment' }];

const termly = [
{ label: 'ECD A & B', amount: '$250', note: 'per term' },
{ label: 'Grade 1 to 7', amount: '$375', note: 'per term' },
{ label: 'Sports Levy', amount: '$25', note: 'per term' }];

export function Fees() {
  return (
    <section id="fees" className="py-24 md:py-32 bg-forestGreen text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gold mb-4">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Enrolment Now Open
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            School Fees
          </h2>
          <p className="text-stone/80 text-lg max-w-2xl mx-auto">
            Quality Christian education at a price families can reach. Below are
            our current fees for the academic year.
          </p>
        </div>

        {/* Termly fees */}
        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {termly.map((fee, index) =>
          <motion.div
            key={fee.label}
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
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors">

              <p className="text-sm uppercase tracking-widest text-stone/70 mb-4">
                {fee.label}
              </p>
              <p className="font-serif text-5xl text-gold mb-2">{fee.amount}</p>
              <p className="text-sm text-stone/60">{fee.note}</p>
            </motion.div>
          )}
        </div>

        {/* One-off fees */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-x-10 gap-y-3 bg-white/5 border border-white/10 rounded-2xl py-6 px-8">

          {oneOff.map((fee) =>
          <div key={fee.label} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-gold shrink-0" />
              <span className="text-stone/80">
                <span className="font-medium text-white">{fee.label}</span>{' '}
                {fee.amount} — {fee.note}
              </span>
            </div>
          )}
        </motion.div>

        <p className="text-center text-stone/50 text-sm mt-8">
          To enrol, email{' '}
          <a
            href="mailto:admissions@crystaltrustschool.co.zw"
            className="text-gold hover:text-white transition-colors">

            admissions@crystaltrustschool.co.zw
          </a>{' '}
          or call +263 78 515 5166.
        </p>
      </div>
    </section>);

}
