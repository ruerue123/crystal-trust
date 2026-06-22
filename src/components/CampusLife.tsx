import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
// TODO: sample stories — replace with real school news and dates.
const articles = [
{
  category: 'Academic Success',
  title: 'Celebrating our learners’ progress this term',
  date: 'Sample story',
  image:
  '/images/class1.jpg',
  featured: true
},
{
  category: 'Sport & Play',
  title: 'A great turnout at our inter-house sports day',
  date: 'Sample story',
  image:
  '/images/sports1.jpg'
},
{
  category: 'Community',
  title: 'Grade 6 learners lead a local clean-up',
  date: 'Sample story',
  image:
  '/images/trip.jpg'
},
{
  category: 'School Culture',
  title: 'Our annual concert showcases real talent',
  date: 'Sample story',
  image:
  '/images/choir.jpg'
}];

export function CampusLife() {
  const featured = articles[0];
  const standard = articles.slice(1);
  return (
    <section id="news" className="py-24 md:py-32 bg-stone/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-gold mb-4 block">
              News & Stories
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-forestGreen">
              Campus Life
            </h2>
          </div>
          <a
            href="#all-news"
            className="inline-flex items-center gap-2 text-forestGreen hover:text-gold transition-colors font-medium">
            
            Read all stories <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Featured Article */}
          <motion.article
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
              duration: 0.6
            }}
            className="lg:col-span-7 group cursor-pointer">
            
            <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 relative">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
            </div>
            <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase mb-4">
              <span className="text-gold">{featured.category}</span>
              <span className="text-charcoal/40">{featured.date}</span>
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-forestGreen group-hover:text-gold transition-colors leading-tight">
              {featured.title}
            </h3>
          </motion.article>

          {/* Standard Articles */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {standard.map((article, index) =>
            <motion.article
              key={article.title}
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
                delay: index * 0.1
              }}
              className="group cursor-pointer grid grid-cols-3 gap-6 items-center">
              
                <div className="col-span-1 aspect-square rounded-xl overflow-hidden">
                  <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                </div>
                <div className="col-span-2">
                  <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase mb-2">
                    <span className="text-gold">{article.category}</span>
                  </div>
                  <h3 className="font-serif text-xl text-forestGreen group-hover:text-gold transition-colors leading-snug mb-2">
                    {article.title}
                  </h3>
                  <span className="text-xs text-charcoal/40 uppercase tracking-wider">
                    {article.date}
                  </span>
                </div>
              </motion.article>
            )}
          </div>
        </div>
      </div>
    </section>);

}