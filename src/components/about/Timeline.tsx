import React from 'react';
import { motion } from 'framer-motion';
// TODO: confirm dates and details with the school — these reflect the known
// founding year (2016) and the school's stated ethos; refine as real milestones emerge.
const milestones = [
{
  year: '2016',
  title: 'Our Beginning',
  desc: 'Crystal Trust School opens in Glaudina, Harare, founded on a vision of holistic Christian education and a welcoming, stimulating environment for every child.'
},
{
  year: 'Growing',
  title: 'A Welcoming Home',
  desc: 'The school establishes its character: a safe, caring environment with high expectations, where children are encouraged to take academic risks and learn from their mistakes.'
},
{
  year: 'ECD–Grade 7',
  title: 'A Full Primary Journey',
  desc: 'From Early Childhood Development through to Grade 7, the curriculum grows to nurture confident, well-rounded learners ready for the next stage of their education.'
},
{
  year: 'Today',
  title: 'Affordable Excellence',
  desc: 'Crystal Trust continues to offer quality private-school education at an accessible price, keeping each child at the centre of everything we do.'
}];

export function Timeline() {
  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-gold mb-4 block">
            Our Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-forestGreen">
            A History of Growth
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-stone md:-translate-x-1/2" />

          <div className="space-y-16">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.year}
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
                  }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gold md:-translate-x-1/2 shadow-[0_0_0_6px_#F4F7FB] mt-1.5 md:mt-0" />

                  <div
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    
                    <span className="font-serif text-5xl text-forestGreen/10 block mb-2">
                      {item.year}
                    </span>
                    <h3 className="font-serif text-2xl text-forestGreen mb-3">
                      {item.title}
                    </h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="hidden md:block w-1/2" />
                </motion.div>);

            })}
          </div>
        </div>
      </div>
    </section>);

}