import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

type Photo = {
  src: string;
  /** stock image shown if `src` (a local school photo) fails to load */
  fallback?: string;
  caption: string;
  category: string;
};

const categories = [
'All',
'Academics',
'Sports',
'Community',
'Events',
'Faith'];

// Real Crystal Trust School photos live in /public/images. A stock image is
// used as an onError fallback so the wall never breaks if a file is missing.
const photos: Photo[] = [
{
  src: '/images/in-class.jpg',
  fallback: '/images/class.jpg',
  caption: 'Curiosity and joy in the classroom',
  category: 'Academics'
},
{
  src: '/images/ict_tablets.jpg',
  fallback: '/images/ict.jpg',
  caption: 'Building digital skills from the start',
  category: 'Academics'
},
{
  src: '/images/students-in-class.jpg',
  fallback: '/images/students5.jpg',
  caption: 'Focused and eager to learn',
  category: 'Academics'
},
{
  src: '/images/reception-1.jpg',
  fallback: '/images/class1.jpg',
  caption: 'A warm welcome every morning',
  category: 'Academics'
},
{
  src: '/images/sports-12.jpg',
  fallback: '/images/sports1.jpg',
  caption: 'A great turnout at inter-house sports day',
  category: 'Sports'
},
{
  src: '/images/sports-7.jpg',
  fallback: '/images/sports3.jpg',
  caption: 'Team spirit on the field',
  category: 'Sports'
},
{
  src: '/images/swimming.jpg',
  fallback: '/images/swimming2.jpg',
  caption: 'Making a splash in the pool',
  category: 'Sports'
},
{
  src: '/images/trophy.jpg',
  fallback: '/images/sports-12.jpg',
  caption: 'Celebrating our champions',
  category: 'Sports'
},
{
  src: '/images/playarea.jpg',
  fallback: '/images/students4.jpg',
  caption: 'Play and laughter on the playground',
  category: 'Community'
},
{
  src: '/images/student-group.jpg',
  fallback: '/images/students1.jpg',
  caption: 'Smart and proud in our uniform',
  category: 'Community'
},
{
  src: '/images/whole-school.jpg',
  fallback: '/images/school.jpg',
  caption: 'Our whole school family',
  category: 'Community'
},
{
  src: '/images/trip.jpg',
  fallback: '/images/bus-1.jpg',
  caption: 'Adventures beyond the classroom',
  category: 'Events'
},
{
  src: '/images/graduation.jpg',
  fallback: '/images/graduation-2.jpg',
  caption: 'A proud graduation day',
  category: 'Events'
},
{
  src: '/images/conference.jpg',
  fallback: '/images/in-class-2.jpg',
  caption: 'Coming together as a community',
  category: 'Events'
},
{
  src: '/images/choir.jpg',
  fallback: '/images/choir2.jpg',
  caption: 'Voices raised in worship',
  category: 'Faith'
},
{
  src: '/images/in-class-2.jpg',
  fallback: '/images/choir.jpg',
  caption: 'Our youngest learners singing together',
  category: 'Faith'
}];

export function NewsGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [active, setActive] = useState<number | null>(null);

  const filteredPhotos = photos.filter(
    (photo) =>
    activeCategory === 'All' || photo.category === activeCategory
  );

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () =>
    setActive((i) =>
    i === null ? i : (i + 1) % filteredPhotos.length
    ),
    [filteredPhotos.length]
  );
  const prev = useCallback(
    () =>
    setActive((i) =>
    i === null ?
    i :
    (i - 1 + filteredPhotos.length) % filteredPhotos.length
    ),
    [filteredPhotos.length]
  );

  // Keyboard navigation + scroll lock while the lightbox is open
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, next, prev]);

  return (
    <section className="pb-24 md:pb-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {categories.map((cat) =>
          <button
            key={cat}
            onClick={() => {setActiveCategory(cat);setActive(null);}}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? 'bg-forestGreen text-white' : 'bg-stone/50 text-charcoal/70 hover:bg-stone hover:text-charcoal'}`}>

              {cat}
            </button>
          )}
        </div>

        {/* Gallery grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
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
              duration: 0.5
            }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">

            {filteredPhotos.map((photo, index) =>
            <motion.button
              key={photo.src}
              type="button"
              onClick={() => setActive(index)}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.96
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1
              }}
              viewport={{
                once: true,
                margin: '-60px'
              }}
              transition={{
                duration: 0.6,
                delay: (index % 4) * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group relative overflow-hidden rounded-2xl text-left aspect-square focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory">

                <img
                src={photo.src}
                alt={photo.caption}
                loading="lazy"
                onError={(e) => {
                  if (photo.fallback && e.currentTarget.src !== photo.fallback) {
                    e.currentTarget.src = photo.fallback;
                  }
                }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-smooth group-hover:scale-110" />

                {/* Gradient + caption reveal */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-smooth">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-gold">
                    {photo.category}
                  </span>
                  <p className="font-serif text-white text-base md:text-lg leading-snug">
                    {photo.caption}
                  </p>
                </div>
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </motion.button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && filteredPhotos[active] &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
          onClick={close}>

            {/* Close */}
            <button
            type="button"
            onClick={close}
            aria-label="Close gallery"
            className="absolute top-5 right-5 md:top-8 md:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">

              <X className="w-5 h-5" />
            </button>

            {/* Prev */}
            <button
            type="button"
            onClick={(e) => {e.stopPropagation();prev();}}
            aria-label="Previous photo"
            className="absolute left-3 md:left-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">

              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next */}
            <button
            type="button"
            onClick={(e) => {e.stopPropagation();next();}}
            aria-label="Next photo"
            className="absolute right-3 md:right-8 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">

              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image + caption */}
            <motion.figure
            key={active}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}>

              <img
              src={filteredPhotos[active].src}
              alt={filteredPhotos[active].caption}
              onError={(e) => {
                const fb = filteredPhotos[active].fallback;
                if (fb && e.currentTarget.src !== fb) e.currentTarget.src = fb;
              }}
              className="w-full max-h-[75vh] object-contain rounded-2xl" />

              <figcaption className="text-center mt-6">
                <span className="text-[10px] font-bold tracking-widest uppercase text-gold">
                  {filteredPhotos[active].category}
                </span>
                <p className="font-serif text-white text-xl md:text-2xl mt-1">
                  {filteredPhotos[active].caption}
                </p>
                <p className="text-stone/50 text-sm mt-3">
                  {active + 1} / {filteredPhotos.length}
                </p>
              </figcaption>
            </motion.figure>
          </motion.div>
        }
      </AnimatePresence>
    </section>);

}
