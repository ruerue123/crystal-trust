import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Newspaper, CalendarDays, Trophy, Images, ArrowUpRight } from 'lucide-react';

// Row of quick-access tiles directly under the hero — the pattern Barwick and
// Lusitânia use to get prospective families to the pages that matter fastest.
const links = [
{
  icon: GraduationCap,
  title: 'Admissions',
  desc: 'Apply & enrol',
  to: '/admissions'
},
{
  icon: CalendarDays,
  title: 'Events',
  desc: 'Term calendar',
  to: '/student-life'
},
{
  icon: Newspaper,
  title: 'News & Stories',
  desc: 'Latest updates',
  to: '/news'
},
{
  icon: Trophy,
  title: 'Student Life',
  desc: 'Sport & clubs',
  to: '/student-life'
},
{
  icon: Images,
  title: 'Gallery',
  desc: 'Life on campus',
  to: '/student-life'
}];

export function QuickLinks() {
  return (
    <section className="relative z-30 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Pulled up to overlap the hero, like the inspiration sites */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 -mt-12 md:-mt-16 relative z-30">
          {links.map((link, index) =>
          <motion.div
            key={link.title}
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
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1]
            }}>
            <Link
              to={link.to}
              className="group block h-full bg-white rounded-2xl p-6 border border-stone shadow-sm hover:shadow-xl hover:shadow-charcoal/5 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="w-11 h-11 rounded-full bg-stone flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <link.icon className="w-5 h-5 text-forestGreen" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-charcoal/30 group-hover:text-gold transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-lg text-forestGreen mb-1">
                {link.title}
              </h3>
              <p className="text-xs text-charcoal/60 uppercase tracking-wider font-medium">
                {link.desc}
              </p>
            </Link>
          </motion.div>
          )}
        </div>
      </div>
    </section>);

}
