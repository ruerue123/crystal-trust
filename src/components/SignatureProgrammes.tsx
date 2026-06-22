import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
const programmes = [
{
  title: 'Swimming',
  image: '/images/swimming.jpg',
  fallback:
  '/images/swimming2.jpg',
  desc: 'Learn-to-swim lessons in our own school pool, building water confidence from an early age.'
},
{
  title: 'Christian Formation',
  image: '/images/choir.jpg',
  fallback:
  '/images/choir2.jpg',
  desc: 'Daily devotions, biblical values, and character building at the heart of school life.'
},
{
  title: 'Sport & Play',
  image: '/images/sports1.jpg',
  fallback:
  '/images/sports3.jpg',
  desc: 'Physical education and team games that build fitness, confidence and friendship.'
},
{
  title: 'Creative Arts',
  image: '/images/choir2.jpg',
  fallback:
  '/images/choir.jpg',
  desc: 'Music, drama, and choir nurturing creative expression in every child.'
}];

export function SignatureProgrammes() {
  return (
    <section className="py-12 md:py-20 bg-forestGreen text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 md:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-gold mb-4 block">
              Beyond the Classroom
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              Signature Programmes
            </h2>
            <p className="text-stone/80 text-lg">
              Our specialized programmes are designed to discover and nurture
              the unique talents within every child, providing a truly holistic
              education.
            </p>
          </div>
          <a
            href="#programmes"
            className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors font-medium">
            
            Explore all programmes <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {programmes.map((prog, index) =>
          <motion.div
            key={prog.title}
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
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
            
              <img
              src={prog.image}
              alt={prog.title}
              onError={(e) => {
                const fb = (prog as {fallback?: string;}).fallback;
                if (fb && e.currentTarget.src !== fb) e.currentTarget.src = fb;
              }}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent transition-opacity duration-500" />

              <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end">
                <h3 className="font-serif text-xl sm:text-2xl mb-2 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500">
                  {prog.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone/80 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500 delay-100 line-clamp-3">
                  {prog.desc}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}