import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
const events = [
{
  date: '15',
  month: 'NOV',
  title: 'Open Day & Campus Tour',
  time: '09:00 - 12:00',
  location: 'Main Campus',
  desc: 'Experience the Crystal Trust difference. Meet our educators and see our classrooms and grounds.'
},
{
  date: '28',
  month: 'NOV',
  title: 'End of Year Carol Service',
  time: '18:00 - 20:00',
  location: 'School Chapel',
  desc: 'Join us for an evening of worship, music, and celebration as we close the academic year.'
},
{
  date: '05',
  month: 'DEC',
  title: 'Junior Primary Prize Giving',
  time: '10:00 - 13:00',
  location: 'Main Hall',
  desc: 'Celebrating the academic and co-curricular achievements of our Grade 1-3 learners.'
}];

export function UpcomingEvents() {
  return (
    <section className="py-12 md:py-20 bg-stone/50">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 md:mb-16">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-gold mb-4 block">
              Calendar
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-forestGreen">
              Upcoming Events
            </h2>
          </div>
          <a
            href="#calendar"
            className="inline-flex items-center gap-2 text-forestGreen hover:text-gold transition-colors font-medium">
            
            View full calendar <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="flex flex-col gap-6">
          {events.map((event, index) =>
          <motion.div
            key={event.title}
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="group bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center hover:shadow-xl hover:shadow-charcoal/5 transition-all duration-300 border border-stone">
            
              {/* Date Block */}
              <div className="flex flex-col items-center justify-center min-w-[80px] text-forestGreen">
                <span className="text-4xl font-serif leading-none mb-1">
                  {event.date}
                </span>
                <span className="text-sm font-bold tracking-widest uppercase text-gold">
                  {event.month}
                </span>
              </div>

              {/* Details */}
              <div className="flex-1">
                <h3 className="font-serif text-2xl text-forestGreen mb-2 group-hover:text-gold transition-colors">
                  {event.title}
                </h3>
                <p className="text-charcoal/70 text-sm mb-4 line-clamp-2 md:line-clamp-none">
                  {event.desc}
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-medium text-charcoal/50 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {event.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> {event.location}
                  </span>
                </div>
              </div>

              {/* Action */}
              <div className="hidden md:block">
                <div className="w-12 h-12 rounded-full border border-stone flex items-center justify-center text-forestGreen group-hover:bg-forestGreen group-hover:text-white group-hover:border-forestGreen transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}