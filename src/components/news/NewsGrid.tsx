import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const categories = [
'All',
'Academics',
'Sports',
'Community',
'Events',
'Faith'];

// TODO: these are sample stories with placeholder dates — replace with real
// school news as it happens.
const articles = [
{
  id: 1,
  category: 'Academics',
  title: 'Celebrating our learners’ progress this term',
  date: 'Sample story',
  image:
  '/images/class.jpg',
  featured: true
},
{
  id: 2,
  category: 'Sports',
  title: 'A great turnout at our inter-house sports day',
  date: 'Sample story',
  image:
  '/images/sports3.jpg'
},
{
  id: 3,
  category: 'Community',
  title: 'Grade 6 learners lead a local clean-up',
  date: 'Sample story',
  image:
  '/images/trip.jpg'
},
{
  id: 4,
  category: 'Events',
  title: 'Our annual concert showcases real talent',
  date: 'Sample story',
  image:
  '/images/choir.jpg'
},
{
  id: 5,
  category: 'Faith',
  title: 'Easter chapel service brings our community together',
  date: 'Sample story',
  image:
  '/images/choir2.jpg'
},
{
  id: 6,
  category: 'Academics',
  title: 'New reading corner opens in the library',
  date: 'Sample story',
  image:
  '/images/students3.jpg'
}];

export function NewsGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredArticles = articles.filter(
    (article) =>
    activeCategory === 'All' || article.category === activeCategory
  );
  const featured =
  filteredArticles.find((a) => a.featured) || filteredArticles[0];
  const rest = filteredArticles.filter((a) => a.id !== featured?.id);
  return (
    <section className="pb-24 md:pb-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {categories.map((cat) =>
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? 'bg-forestGreen text-white' : 'bg-stone/50 text-charcoal/70 hover:bg-stone hover:text-charcoal'}`}>
            
              {cat}
            </button>
          )}
        </div>

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
            }}>
            
            {/* Featured Article */}
            {featured &&
            <div className="mb-16 group cursor-pointer">
                <div className="aspect-[21/9] md:aspect-[21/8] rounded-3xl overflow-hidden mb-8 relative">
                  <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                </div>
                <div className="max-w-4xl mx-auto text-center">
                  <div className="flex items-center justify-center gap-4 text-xs font-bold tracking-widest uppercase mb-4">
                    <span className="text-gold">{featured.category}</span>
                    <span className="text-charcoal/40">{featured.date}</span>
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl text-forestGreen group-hover:text-gold transition-colors leading-tight">
                    {featured.title}
                  </h2>
                </div>
              </div>
            }

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((article, index) =>
              <motion.article
                key={article.id}
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
                  duration: 0.5,
                  delay: index * 0.1
                }}
                className="group cursor-pointer flex flex-col">
                
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                    <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  
                  </div>
                  <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase mb-3">
                    <span className="text-gold">{article.category}</span>
                    <span className="text-charcoal/40">{article.date}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-forestGreen group-hover:text-gold transition-colors leading-snug">
                    {article.title}
                  </h3>
                </motion.article>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>);

}