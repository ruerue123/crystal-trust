import React from 'react';
import { motion } from 'framer-motion';
// TODO: replace with real staff names, roles and photos. The roles and words
// below are placeholders that reflect a small Christian primary school.
const educators = [
{
  name: 'Our Early Years Team',
  role: 'Early Childhood Development',
  qual: 'Qualified ECD practitioners',
  philosophy:
  'Every child is unique. Our role is to give them a warm, safe space to discover their brilliance in their very first years of school.',
  image:
  '/images/staff-group.jpg'
},
{
  name: 'Our Primary Teachers',
  role: 'Junior & Senior Primary',
  qual: 'Qualified primary educators',
  philosophy:
  'Learning grows from curiosity. We encourage children to take academic risks, ask questions, and learn from their mistakes.',
  image:
  '/images/class.jpg'
},
{
  name: 'Our Support Staff',
  role: 'Pastoral & Co-curricular',
  qual: 'A caring, dedicated team',
  philosophy:
  'Beyond the classroom, we nurture confidence, character and faith so every learner feels known and valued.',
  image:
  '/images/head-speaking2.jpg'
}];

export function MeetEducators() {
  return (
    <section className="py-12 md:py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-24">
          <span className="text-xs font-bold tracking-widest uppercase text-gold mb-4 block">
            Our Faculty
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-forestGreen">
            Meet Our Educators
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          {educators.map((edu, index) =>
          <motion.div
            key={edu.name}
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
              duration: 0.6,
              delay: index * 0.1
            }}
            className="group">
            
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 relative">
                <img
                src={edu.image}
                alt={edu.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              
                <div className="absolute inset-0 bg-forestGreen/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              <h3 className="font-serif text-2xl text-forestGreen mb-1">
                {edu.name}
              </h3>
              <p className="text-gold text-sm font-bold uppercase tracking-widest mb-2">
                {edu.role}
              </p>
              <p className="text-xs text-charcoal/50 mb-4">{edu.qual}</p>
              <p className="text-charcoal/70 text-sm leading-relaxed border-l-2 border-stone pl-4 italic">
                "{edu.philosophy}"
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}