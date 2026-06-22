import React from 'react';
import { motion } from 'framer-motion';
const steps = [
{
  num: '01',
  title: 'Enquiry & Campus Tour',
  desc: 'Begin by submitting an online enquiry. We highly recommend scheduling a campus tour to experience the Crystal Trust environment firsthand and meet our educators.'
},
{
  num: '02',
  title: 'Application Submission',
  desc: 'Complete the formal application form and submit it along with the required documentation, including previous school reports and birth certificates.'
},
{
  num: '03',
  title: 'Assessment & Interview',
  desc: "Prospective learners will be invited for a grade-appropriate assessment. Parents will also meet with the Headmaster to discuss the family's educational goals."
},
{
  num: '04',
  title: 'Offer & Enrollment',
  desc: "Successful applicants will receive a formal letter of offer. Upon acceptance and payment of the enrollment fee, your child's place is secured."
}];

export function Process() {
  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-gold mb-4 block">
            The Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-forestGreen">
            Admissions Process
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) =>
          <motion.div
            key={step.num}
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
              delay: index * 0.1
            }}
            className="relative">
            
              {/* Connector Line */}
              {index < steps.length - 1 &&
            <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-stone" />
            }

              <div className="relative z-10 bg-ivory inline-flex items-center justify-center w-16 h-16 rounded-full border border-stone mb-8">
                <span className="font-serif text-2xl text-gold">
                  {step.num}
                </span>
              </div>

              <h3 className="font-serif text-2xl text-forestGreen mb-4">
                {step.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">{step.desc}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}