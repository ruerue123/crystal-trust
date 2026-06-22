import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Barwick-style counter band. Numbers count up on scroll-in; text-only stats
// (grade range, foundation) sit alongside. Placeholders only — no invented
// enrollment or award figures. Confirm with the school before publishing.
function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2




}: {end: number;suffix?: string;prefix?: string;duration?: number;}) {
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
    <span ref={ref} className="font-serif text-4xl md:text-5xl text-white">
      {prefix}
      {count}
      {suffix}
    </span>);

}

// TODO: confirm these figures with the school before publishing.
const stats = [
{ counter: true, end: 2016, label: 'Established' },
{ counter: false, value: 'ECD–7', label: 'Grade Levels' },
{ counter: false, value: 'Christian', label: 'Foundation' },
{ counter: false, value: 'Glaudina', label: 'Harare Campus' }];

export function StatsBand() {
  return (
    <section className="py-14 md:py-16 bg-forestGreen relative overflow-hidden">
      {/* Subtle decorative wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/0 via-royal/10 to-navy/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {stats.map((stat, index) =>
          <motion.div
            key={stat.label}
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
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="text-center">
            {stat.counter ?
            <AnimatedCounter end={stat.end as number} /> :
            <span className="font-serif text-4xl md:text-5xl text-white">
                {stat.value}
              </span>
            }
            <p className="text-xs md:text-sm text-white/60 mt-3 font-medium uppercase tracking-widest">
              {stat.label}
            </p>
          </motion.div>
          )}
        </div>
      </div>
    </section>);

}
