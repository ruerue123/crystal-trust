import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

type Photo = {
  src: string;
  /** stock image shown if `src` (a local school photo) fails to load */
  fallback?: string;
  caption: string;
  category: string;
  /** column span on large screens — gives the wall its editorial rhythm */
  span: 'tall' | 'wide' | 'normal';
};

// Real Crystal Trust School photos live in /public/images. A stock image is
// used as an onError fallback so the wall never breaks if a file is missing.
const photos: Photo[] = [
{
  src: '/images/class.jpg',
  fallback: '/images/class1.jpg',
  caption: 'Hands up — curiosity in the classroom',
  category: 'Learning',
  span: 'tall'
},
{
  src: '/images/swimming.jpg',
  fallback: '/images/swimming3.jpg',
  caption: 'Learning to swim in our own pool',
  category: 'Swimming',
  span: 'wide'
},
{
  src: '/images/choir.jpg',
  fallback: '/images/choir2.jpg',
  caption: 'Our choir at the school concert',
  category: 'Arts',
  span: 'normal'
},
{
  src: '/images/students1.jpg',
  fallback: '/images/students2.jpg',
  caption: 'Smart and proud in our uniform',
  category: 'Our School',
  span: 'normal'
},
{
  src: '/images/ict.jpg',
  fallback: '/images/students3.jpg',
  caption: 'Building digital skills in ICT',
  category: 'Learning',
  span: 'tall'
},
{
  src: '/images/trip.jpg',
  fallback: '/images/students4.jpg',
  caption: 'Adventures beyond the classroom',
  category: 'Trips',
  span: 'wide'
},
{
  src: '/images/students5.jpg',
  fallback: '/images/students6.jpg',
  caption: 'Our youngest learners in ECD',
  category: 'Early Years',
  span: 'normal'
},
{
  src: '/images/sports1.jpg',
  fallback: '/images/sports3.jpg',
  caption: 'Sport and play on the field',
  category: 'Sport',
  span: 'normal'
}];

const spanClasses: Record<Photo['span'], string> = {
  tall: 'sm:row-span-2 aspect-[3/4] sm:aspect-auto',
  wide: 'sm:col-span-2 aspect-[16/10] sm:aspect-auto',
  normal: 'aspect-square'
};

export function GalleryWall() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => i === null ? i : (i + 1) % photos.length),
    []
  );
  const prev = useCallback(
    () => setActive((i) => i === null ? i : (i - 1 + photos.length) % photos.length),
    []
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
    <section id="gallery" className="py-12 md:py-20 bg-forestGreen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 md:mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-widest uppercase text-gold mb-4 block">
              Life at Crystal Trust
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
              A glimpse of every day
            </h2>
            <p className="text-stone/70 mt-5 text-lg leading-relaxed">
              No staged tour — just real moments from our classrooms, fields and
              studios. Tap any image to look closer.
            </p>
          </div>
        </div>

        {/* The wall */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 md:gap-4">
          {photos.map((photo, i) =>
          <motion.button
            key={photo.src}
            type="button"
            onClick={() => setActive(i)}
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
              duration: 0.7,
              delay: (i % 4) * 0.08,
              ease: [0.16, 1, 0.3, 1]
            }}
            className={`group relative overflow-hidden rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forestGreen ${spanClasses[photo.span]}`}>

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
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null &&
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
              src={photos[active].src}
              alt={photos[active].caption}
              onError={(e) => {
                const fb = photos[active].fallback;
                if (fb && e.currentTarget.src !== fb) e.currentTarget.src = fb;
              }}
              className="w-full max-h-[75vh] object-contain rounded-2xl" />

              <figcaption className="text-center mt-6">
                <span className="text-[10px] font-bold tracking-widest uppercase text-gold">
                  {photos[active].category}
                </span>
                <p className="font-serif text-white text-xl md:text-2xl mt-1">
                  {photos[active].caption}
                </p>
                <p className="text-stone/50 text-sm mt-3">
                  {active + 1} / {photos.length}
                </p>
              </figcaption>
            </motion.figure>
          </motion.div>
        }
      </AnimatePresence>
    </section>);

}
