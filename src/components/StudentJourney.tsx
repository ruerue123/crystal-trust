import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const stages = [
{
  id: 'ecd',
  title: 'Early Childhood',
  subtitle: 'Ages 3-5',
  image:
  '/images/ict_tablets.jpg',
  goals:
  'Fostering curiosity and a love for learning through play-based exploration.',
  skills: [
  'Social & Emotional Development',
  'Fine & Gross Motor Skills',
  'Early Literacy & Numeracy'],

  experiences: ['Creative Arts', 'Outdoor Play', 'Storytelling']
},
{
  id: 'junior',
  title: 'Junior Primary',
  subtitle: 'Grades 1-3',
  image:
  '/images/in-class.jpg',
  goals:
  'Building strong foundational knowledge while nurturing individual talents.',
  skills: ['Reading Fluency', 'Mathematical Concepts', 'Critical Thinking'],
  experiences: ['Introduction to STEM', 'Junior Sports', 'Music & Choir']
},
{
  id: 'senior',
  title: 'Senior Primary',
  subtitle: 'Grades 4-7',
  image:
  '/images/students-in-class.jpg',
  goals:
  'Preparing confident, independent learners ready for high school challenges.',
  skills: ['Advanced Problem Solving', 'Leadership', 'Digital Literacy'],
  experiences: [
  'Competitive Sports',
  'Debate & Public Speaking',
  'Prefect Roles']

},
{
  id: 'future',
  title: 'Future Success',
  subtitle: 'Beyond Grade 7',
  image:
  '/images/graduation.jpg',
  goals:
  'Graduates who are academically excellent, morally grounded, and globally aware.',
  skills: ['Resilience', 'Ethical Decision Making', 'Lifelong Learning'],
  experiences: [
  'Top High School Placements',
  'Alumni Network',
  'Community Impact']

}];

export function StudentJourney() {
  const [activeStage, setActiveStage] = useState(0);
  return (
    <section id="academics" className="py-12 md:py-20 bg-stone relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-24">
          <span className="text-xs font-bold tracking-widest uppercase text-gold mb-4 block">
            The Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-forestGreen">
            Growing with Purpose
          </h2>
        </div>

        {/* Stepper Navigation */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 md:mb-16 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-charcoal/10 -z-10" />
          {stages.map((stage, index) =>
          <button
            key={stage.id}
            onClick={() => setActiveStage(index)}
            className="relative group flex flex-col items-center">
            
              <div
              className={`w-4 h-4 rounded-full mb-4 transition-all duration-500 ${activeStage === index ? 'bg-gold scale-150' : 'bg-charcoal/20 group-hover:bg-charcoal/40'}`} />
            
              <span
              className={`font-serif text-lg md:text-xl transition-colors duration-300 ${activeStage === index ? 'text-forestGreen' : 'text-charcoal/50 group-hover:text-charcoal'}`}>
              
                {stage.title}
              </span>
              <span className="text-xs text-charcoal/50 uppercase tracking-wider mt-1">
                {stage.subtitle}
              </span>
            </button>
          )}
        </div>

        {/* Content Area */}
        <div className="bg-ivory rounded-3xl overflow-hidden shadow-xl shadow-charcoal/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
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
              className="grid lg:grid-cols-2">
              
              <div className="p-8 md:p-16 flex flex-col justify-center">
                <h3 className="font-serif text-3xl text-forestGreen mb-6">
                  {stages[activeStage].title}
                </h3>
                <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
                  {stages[activeStage].goals}
                </p>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-4">
                      Core Skills
                    </h4>
                    <ul className="space-y-3">
                      {stages[activeStage].skills.map((skill, i) =>
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-charcoal/70">
                        
                          <div className="w-1.5 h-1.5 rounded-full bg-forestGreen mt-1.5 shrink-0" />
                          {skill}
                        </li>
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-4">
                      Key Experiences
                    </h4>
                    <ul className="space-y-3">
                      {stages[activeStage].experiences.map((exp, i) =>
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-charcoal/70">
                        
                          <div className="w-1.5 h-1.5 rounded-full bg-forestGreen mt-1.5 shrink-0" />
                          {exp}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative h-64 lg:h-auto">
                <img
                  src={stages[activeStage].image}
                  alt={stages[activeStage].title}
                  className="absolute inset-0 w-full h-full object-cover" />
                
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>);

}