import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
const phases = [
{
  id: 'ecd',
  title: 'Early Childhood Development',
  subtitle: 'Ages 3-5',
  content:
  'In our ECD phase, we believe that play is the highest form of research. We provide a nurturing, stimulating environment where our youngest learners develop foundational literacy, numeracy, and crucial social-emotional skills through guided discovery.',
  highlights: [
  'Play-based learning',
  'Phonics foundation',
  'Fine motor skill development',
  'Creative expression']

},
{
  id: 'junior',
  title: 'Junior Primary',
  subtitle: 'Grades 1-3',
  content:
  'The Junior Primary years are focused on building robust academic foundations. We transition from learning to read, to reading to learn. Our educators foster a love of inquiry, alongside creative arts and physical education.',
  highlights: [
  'Reading fluency',
  'Mathematical reasoning',
  'Inquiry & discovery',
  'Collaborative projects']

},
{
  id: 'senior',
  title: 'Senior Primary',
  subtitle: 'Grades 4-7',
  content:
  'In Senior Primary, we prepare learners for the next stage of their education. The curriculum deepens, encouraging critical thinking, independent work, and ethical leadership. Children take ownership of their learning journey.',
  highlights: [
  'Advanced problem solving',
  'Digital literacy',
  'Debate & public speaking',
  'Leadership roles']

}];

export function Phases() {
  const [activePhase, setActivePhase] = useState(phases[0].id);
  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-gold mb-8 block">
              The Academic Journey
            </span>
            {phases.map((phase) =>
            <button
              key={phase.id}
              onClick={() => setActivePhase(phase.id)}
              className={`w-full text-left p-6 rounded-2xl transition-all duration-300 flex items-center justify-between group ${activePhase === phase.id ? 'bg-forestGreen text-white shadow-xl' : 'bg-stone/30 text-charcoal hover:bg-stone/50'}`}>
              
                <div>
                  <h3
                  className={`font-serif text-xl mb-1 ${activePhase === phase.id ? 'text-white' : 'text-forestGreen'}`}>
                  
                    {phase.title}
                  </h3>
                  <span
                  className={`text-sm uppercase tracking-widest ${activePhase === phase.id ? 'text-gold' : 'text-charcoal/50'}`}>
                  
                    {phase.subtitle}
                  </span>
                </div>
                <ChevronRight
                className={`w-5 h-5 transition-transform ${activePhase === phase.id ? 'text-gold translate-x-1' : 'text-charcoal/30 group-hover:translate-x-1'}`} />
              
              </button>
            )}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {phases.map(
                (phase) =>
                phase.id === activePhase &&
                <motion.div
                  key={phase.id}
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  exit={{
                    opacity: 0,
                    y: -20
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-charcoal/5 border border-stone">
                  
                      <h2 className="font-serif text-3xl md:text-4xl text-forestGreen mb-6">
                        {phase.title}
                      </h2>
                      <p className="text-lg text-charcoal/80 leading-relaxed mb-10">
                        {phase.content}
                      </p>

                      <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-6">
                        Key Focus Areas
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {phase.highlights.map((highlight, i) =>
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 rounded-xl bg-stone/20">
                      
                            <div className="w-2 h-2 rounded-full bg-forestGreen shrink-0" />
                            <span className="text-sm font-medium text-charcoal/80">
                              {highlight}
                            </span>
                          </div>
                    )}
                      </div>
                    </motion.div>

              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>);

}