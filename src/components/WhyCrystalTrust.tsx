import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Heart, Lightbulb, Target, Users } from 'lucide-react';
const pillars = [
{
  icon: Users,
  title: 'Inclusivity',
  desc: 'A welcoming community where every child belongs and is valued.'
},
{
  icon: Target,
  title: 'Integrity',
  desc: 'Honesty and strong character at the heart of all we do.'
},
{
  icon: Heart,
  title: 'Love',
  desc: 'A caring, Christ-centred environment grounded in love.'
},
{
  icon: BookOpen,
  title: 'Excellence',
  desc: 'Top-notch education that grows each child’s mind, spirit and social skills.'
},
{
  icon: Lightbulb,
  title: 'Faith',
  desc: 'Learning and growing in the knowledge of God.'
}];

function AnimatedCounter({
  end,
  suffix = '',
  duration = 2




}: {end: number;suffix?: string;duration?: number;}) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });
  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);
  return (
    <span
      ref={ref}
      className="font-serif text-5xl md:text-6xl text-forestGreen">
      
      {count}
      {suffix}
    </span>);

}
export function WhyCrystalTrust() {
  return (
    <section
      id="about"
      className="py-12 md:py-20 bg-ivory relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center mb-16 md:mb-24">
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
            }}>
            
            <span className="text-xs font-bold tracking-widest uppercase text-gold mb-6 block">
              Why Crystal Trust
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-forestGreen leading-tight mb-6">
              A foundation for life, built on excellence and faith.
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed mb-8">
              We don't just prepare children for the next grade; we prepare them
              for life. Guided by our values of inclusivity, integrity, love and
              excellence, we grow each child's mind, spirit and social skills in
              a caring, Christ-centred environment.
            </p>

            {/* TODO: confirm these figures with the school before publishing */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-stone">
              <div>
                <AnimatedCounter end={2016} />
                <p className="text-sm text-charcoal/60 mt-2 font-medium uppercase tracking-wider">
                  Established
                </p>
              </div>
              <div>
                <span className="font-serif text-5xl md:text-6xl text-forestGreen">
                  ECD–7
                </span>
                <p className="text-sm text-charcoal/60 mt-2 font-medium uppercase tracking-wider">
                  Grade Levels
                </p>
              </div>
            </div>
          </motion.div>

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
            className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            
            <img
              src="/images/students2.jpg"
              alt="Students collaborating"
              className="w-full h-full object-cover" />
            
            <div className="absolute inset-0 bg-forestGreen/10 mix-blend-multiply" />
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 sm:gap-8">
          {pillars.map((pillar, index) =>
          <motion.div
            key={pillar.title}
            initial={{
              opacity: 0,
              y: 20
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
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="group">
            
              <div className="w-12 h-12 rounded-full bg-stone flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                <pillar.icon className="w-5 h-5 text-forestGreen" />
              </div>
              <h3 className="font-serif text-xl text-forestGreen mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}