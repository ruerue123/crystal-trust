import React, { useRef, Children } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const words = ['Faith.', 'Excellence.', 'Leadership.'];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };
  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };
  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 1.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };
  return (
    <section
      ref={containerRef}
      className="relative min-h-[88vh] w-full overflow-hidden bg-charcoal">
      
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          y,
          opacity
        }}>
        
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-forestGreen/70 z-10" />
        <img
          src="/images/in-class-2.jpg"
          alt="Crystal Trust School pupils"
          className="w-full h-full object-cover object-center"
          onError={(e) => {e.currentTarget.src = '/images/choir.jpg';}} />
        
      </motion.div>

      {/* Content */}
      <div className="relative z-20 min-h-[88vh] flex flex-col justify-center items-center text-center px-6 pt-28 md:pt-24 pb-24 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row gap-0 md:gap-6 mb-5 md:mb-6">
          
          {words.map((word, i) =>
          <motion.h1
            key={i}
            variants={wordVariants}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-tight">
            
              {word}
            </motion.h1>
          )}
        </motion.div>

        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-base sm:text-lg md:text-2xl text-stone/90 max-w-2xl font-light mb-8 md:mb-12 text-balance">
          
          Nurturing confident learners from ECD to Grade 7.
        </motion.p>

        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-gold font-serif italic text-base md:text-lg tracking-wide mb-10 -mt-6">

          Lapis Sint in Saecula
        </motion.p>

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 items-center">
          
          <a
            href="#about"
            className="px-8 py-4 bg-gold text-forestGreen rounded-full font-medium hover:bg-white transition-colors duration-300 w-full sm:w-auto">
            
            Discover Crystal Trust
          </a>
          <a
            href="#admissions"
            className="px-8 py-4 bg-white/10 text-white backdrop-blur-sm border border-white/20 rounded-full font-medium hover:bg-white/20 transition-colors duration-300 w-full sm:w-auto">

            Admissions
          </a>
        </motion.div>

        {/* Heritage credibility strip */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="mt-10 md:mt-14 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 gap-y-3 text-white/70">

          {[
          'Glaudina, Harare',
          'ECD to Grade 7',
          'A Christian Foundation'].
          map((item, i) =>
          <React.Fragment key={item}>
              {i > 0 && <span className="hidden sm:block w-1 h-1 rounded-full bg-gold/70" />}
              <span className="text-xs md:text-sm tracking-widest uppercase font-medium">
                {item}
              </span>
            </React.Fragment>
          )}
        </motion.div>
      </div>

      {/* Scroll Cue */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 2,
          duration: 1
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/70">
        
        <span className="text-xs tracking-widest uppercase font-medium">
          Scroll
        </span>
        <motion.div
          animate={{
            y: [0, 8, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}>
          
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>);

}