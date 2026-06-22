import React from 'react';
import { motion } from 'framer-motion';
// Real Crystal Trust activities, backed by school photos in /public/images
// (each has a stock `fallback` so the section never breaks).
const experiences = [
{
  title: 'Swimming',
  category: 'Aquatics',
  desc: 'Crystal Trust has its own swimming pool, where our learn-to-swim lessons build water confidence and a love of the water from an early age.',
  image: '/images/swimming.jpg',
  fallback:
  '/images/swimming4.jpg',
  span: 'md:col-span-8'
},
{
  title: 'Sport & Play',
  category: 'Games & Athletics',
  desc: 'On the field we teach teamwork, resilience and sportsmanship, welcoming all abilities and building a lifelong love of being active.',
  image: '/images/sports1.jpg',
  fallback:
  '/images/sports3.jpg',
  span: 'md:col-span-4'
},
{
  title: 'Creative Arts',
  category: 'Music & Choir',
  desc: 'The arts are part of our culture. Through choir and performance, children learn to express themselves confidently in front of our school family.',
  image: '/images/choir.jpg',
  fallback:
  '/images/choir2.jpg',
  span: 'md:col-span-6'
},
{
  title: 'Computers & ICT',
  category: 'Digital Skills',
  desc: 'In our computer lab, learners build practical digital skills that prepare them for a connected world.',
  image: '/images/ict.jpg',
  fallback:
  '/images/students6.jpg',
  span: 'md:col-span-6'
},
{
  title: 'Educational Trips',
  category: 'Beyond the Classroom',
  desc: 'From trips like Nyati Eco Game Park, our learners explore the world beyond the gates and learn through real experiences.',
  image: '/images/trip.jpg',
  fallback:
  '/images/students4.jpg',
  span: 'md:col-span-12'
}];

export function Experiences() {
  return (
    <section className="py-24 md:py-32 bg-stone/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {experiences.map((exp, index) =>
          <motion.div
            key={exp.title}
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
              margin: '-50px'
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1
            }}
            className={`group relative rounded-3xl overflow-hidden aspect-square md:aspect-auto md:min-h-[400px] ${exp.span}`}>
            
              <img
              src={exp.image}
              alt={exp.title}
              onError={(e) => {
                const fb = (exp as {fallback?: string;}).fallback;
                if (fb && e.currentTarget.src !== fb) e.currentTarget.src = fb;
              }}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />

              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-white">
                <span className="text-xs font-bold tracking-widest uppercase text-gold mb-3 block">
                  {exp.category}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl mb-4">
                  {exp.title}
                </h3>
                <p className="text-stone/90 leading-relaxed md:opacity-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 line-clamp-3 md:line-clamp-none">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}