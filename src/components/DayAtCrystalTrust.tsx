import React from 'react';
import { motion } from 'framer-motion';
const schedule = [
{
  time: '07:30',
  title: 'Morning Arrival',
  desc: 'Warm greetings and settling into the day on our campus.',
  img: '/images/students.jpg',
  fallback: '/images/students1.jpg'
},
{
  time: '08:00',
  title: 'Assembly & Devotion',
  desc: 'Starting the day with prayer, worship, and shared values.',
  img: '/images/choir.jpg',
  fallback: '/images/choir2.jpg'
},
{
  time: '08:45',
  title: 'Core Academics',
  desc: 'Focused learning in Mathematics and Literacy.',
  img: '/images/class.jpg',
  fallback: '/images/class1.jpg'
},
{
  time: '11:00',
  title: 'Computers & ICT',
  desc: 'Building practical digital skills in our computer lab.',
  img: '/images/ict.jpg',
  fallback: '/images/students6.jpg'
},
{
  time: '13:30',
  title: 'Swimming & Sport',
  desc: 'Swimming lessons in our pool, games and clubs.',
  img: '/images/swimming.jpg',
  fallback: '/images/swimming2.jpg'
}];

export function DayAtCrystalTrust() {
  return (
    <section id="student-life" className="py-24 md:py-32 bg-ivory">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-gold mb-4 block">
            Experience
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-forestGreen">
            A Day at Crystal Trust
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-stone md:-translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {schedule.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.time}
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
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gold md:-translate-x-1/2 shadow-[0_0_0_4px_#F4F7FB]" />

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    
                    <span className="text-gold font-serif text-xl mb-2 block">
                      {item.time}
                    </span>
                    <h3 className="font-serif text-2xl text-forestGreen mb-3">
                      {item.title}
                    </h3>
                    <p className="text-charcoal/70">{item.desc}</p>
                  </div>

                  {/* Image */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={item.img}
                        alt={item.title}
                        onError={(e) => {
                          const fb = (item as {fallback?: string;}).fallback;
                          if (fb && e.currentTarget.src !== fb) e.currentTarget.src = fb;
                        }}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                      
                    </div>
                  </div>
                </motion.div>);

            })}
          </div>
        </div>
      </div>
    </section>);

}