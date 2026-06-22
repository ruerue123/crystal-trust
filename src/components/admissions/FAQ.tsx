import React, { useState, Children } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
const faqs = [
{
  q: 'What is the entry age for ECD?',
  a: 'Children must turn 3 years old by the 31st of December of the year prior to entry for ECD A.'
},
{
  q: 'Do you offer boarding facilities?',
  a: 'Currently, Crystal Trust School operates exclusively as a day school, fostering strong daily connections between school and home.'
},
{
  q: 'What is the teacher-to-student ratio?',
  a: 'We maintain a maximum of 25 students per class to ensure personalized attention and optimal learning outcomes.'
},
{
  q: 'Are scholarships or financial aid available?',
  a: 'We offer a limited number of academic and sporting bursaries for exceptional students entering Senior Primary. Please contact the admissions office for specific criteria.'
}];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-forestGreen">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) =>
          <div
            key={index}
            className="border border-stone rounded-2xl overflow-hidden bg-white">
            
              <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none">
              
                <span className="font-serif text-xl text-forestGreen pr-8">
                  {faq.q}
                </span>
                {openIndex === index ?
              <Minus className="w-5 h-5 text-gold shrink-0" /> :

              <Plus className="w-5 h-5 text-forestGreen shrink-0" />
              }
              </button>

              <AnimatePresence>
                {openIndex === index &&
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0
                }}
                animate={{
                  height: 'auto',
                  opacity: 1
                }}
                exit={{
                  height: 0,
                  opacity: 0
                }}
                transition={{
                  duration: 0.3
                }}>
                
                    <div className="p-6 pt-0 text-charcoal/70 leading-relaxed border-t border-stone/50 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
              }
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </section>);

}