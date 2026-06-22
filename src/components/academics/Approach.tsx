import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Monitor, BookOpen, Users, Brain } from 'lucide-react';
const pillars = [
{
  icon: Monitor,
  title: 'Digital Learning',
  desc: 'Seamless integration of technology across all subjects. From coding in Junior Primary to advanced research skills in Senior Primary, we prepare digital natives for a tech-driven world.'
},
{
  icon: Brain,
  title: 'Future Readiness',
  desc: 'We focus on the 4 Cs: Critical thinking, Communication, Collaboration, and Creativity. Our learners are equipped to adapt and thrive in an ever-changing global landscape.'
},
{
  icon: Users,
  title: 'Academic Support',
  desc: 'Small class sizes allow for personalized attention. Our dedicated learning support team ensures that every child, regardless of their learning style, reaches their full potential.'
},
{
  icon: BookOpen,
  title: 'Assessment Philosophy',
  desc: 'We believe in continuous, formative assessment rather than just high-stakes testing. We measure growth, understanding, and application, not just rote memorization.'
}];

export function Approach() {
  return (
    <section className="py-24 md:py-32 bg-forestGreen text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-gold mb-4 block">
            Our Methodology
          </span>
          <h2 className="font-serif text-4xl md:text-5xl">
            A Modern Approach to Education
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((pillar, index) =>
          <motion.div
            key={pillar.title}
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
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-white/10 transition-colors duration-300">
            
              <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center mb-8">
                <pillar.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-serif text-2xl mb-4">{pillar.title}</h3>
              <p className="text-stone/80 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}