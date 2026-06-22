import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
const requirements = [
'Completed Application Form',
"Copy of Child's Birth Certificate",
'Two Recent Passport-Sized Photographs',
'Most Recent School Report (if applicable)',
'Immunization Record',
'Proof of Residence',
'Non-refundable Application Fee'];

export function Requirements() {
  return (
    <section className="py-24 md:py-32 bg-stone/30">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
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
          }}
          className="bg-white rounded-3xl p-8 md:p-16 shadow-xl shadow-charcoal/5 border border-stone">
          
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-forestGreen mb-4">
              Application Checklist
            </h2>
            <p className="text-charcoal/70">
              Please ensure you have the following documents ready before
              beginning your application.
            </p>
          </div>

          <ul className="space-y-4">
            {requirements.map((req, index) =>
            <motion.li
              key={index}
              initial={{
                opacity: 0,
                x: -20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.1
              }}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-stone/20 transition-colors">
              
                <CheckCircle2 className="w-6 h-6 text-gold shrink-0" />
                <span className="text-charcoal/80 font-medium">{req}</span>
              </motion.li>
            )}
          </ul>
        </motion.div>
      </div>
    </section>);

}