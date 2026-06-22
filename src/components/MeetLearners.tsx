import React from 'react';
import { motion } from 'framer-motion';
// TODO: replace with real (consented) pupil quotes, names and photos.
const learners = [
{
  quote:
  'My teachers always encourage me to ask questions, even when I get things wrong. I feel like I can try new things here.',
  name: 'Tinashe M.',
  grade: 'Grade 6',
  image:
  '/images/student7.jpg'
},
{
  quote:
  "My favourite part of the day is morning devotion. I've made my best friends here and I feel like I belong.",
  name: 'Chipo N.',
  grade: 'Grade 4',
  image:
  '/images/students2.jpg'
}];

export function MeetLearners() {
  return (
    <section className="py-24 md:py-32 bg-forestGreen text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs font-bold tracking-widest uppercase text-gold mb-4 block">
            Student Voices
          </span>
          <h2 className="font-serif text-4xl md:text-5xl">Meet Our Learners</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {learners.map((learner, index) =>
          <motion.div
            key={learner.name}
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
              delay: index * 0.2
            }}
            className="flex flex-col items-center text-center">
            
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-8 border-4 border-white/10">
                <img
                src={learner.image}
                alt={learner.name}
                className="w-full h-full object-cover" />
              
              </div>
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-stone/90 mb-6 italic">
                "{learner.quote}"
              </p>
              <div>
                <h4 className="font-bold text-lg">{learner.name}</h4>
                <span className="text-gold text-sm uppercase tracking-widest">
                  {learner.grade}
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}