import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { TopBar } from './TopBar';
const navLinks = [
{
  name: 'Home',
  href: '/'
},
{
  name: 'About',
  href: '/about'
},
{
  name: 'Academics',
  href: '/academics'
},
{
  name: 'Student Life',
  href: '/student-life'
},
{
  name: 'News & Stories',
  href: '/news'
},
{
  name: 'Contact',
  href: '/contact'
}];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isSolid = !isHome || isScrolled || mobileMenuOpen;
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{
          y: -100
        }}
        animate={{
          y: 0
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }}>

        {/* Utility bar — always visible, even while scrolling */}
        <TopBar />

        <div
          className={`transition-colors duration-500 ${isSolid ? 'bg-ivory/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-50 flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="Crystal Trust School crest"
              className="h-10 w-auto md:h-12 transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {e.currentTarget.style.display = 'none';}} />

            <span
              className={`font-serif text-2xl tracking-tight transition-colors duration-500 ${isSolid ? 'text-navy' : 'text-white'}`}>

              Crystal Trust
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
              `text-sm font-medium transition-colors duration-300 relative group ${isSolid ? 'text-charcoal/80 hover:text-forestGreen' : 'text-white/90 hover:text-white'} ${isActive ? isSolid ? 'text-forestGreen' : 'text-white' : ''}`
              }>
              
                {({ isActive }) =>
              <>
                    {link.name}
                    {isActive &&
                <motion.div
                  layoutId="nav-indicator"
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${isSolid ? 'bg-gold' : 'bg-white'}`} />

                }
                  </>
              }
              </NavLink>
            )}
            <Link
              to="/admissions"
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isSolid ? 'bg-forestGreen text-white hover:bg-deepEmerald' : 'bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 border border-white/20'}`}>
              
              Apply
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden relative z-50 p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu">
            
            {mobileMenuOpen ?
            <X className="w-6 h-6 text-forestGreen" /> :

            <Menu
              className={`w-6 h-6 transition-colors duration-500 ${isSolid ? 'text-forestGreen' : 'text-white'}`} />

            }
          </button>
        </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: '-100%'
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: '-100%'
          }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="fixed inset-0 z-40 bg-ivory pt-28 px-6 pb-12 flex flex-col justify-center overflow-y-auto">

            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link, i) =>
            <motion.div
              key={link.name}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: i * 0.1 + 0.2
              }}>
              
                  <NavLink
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                `font-serif text-3xl transition-colors ${isActive ? 'text-gold' : 'text-forestGreen hover:text-gold'}`
                }>
                
                    {link.name}
                  </NavLink>
                </motion.div>
            )}
              <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: navLinks.length * 0.1 + 0.2
              }}>
              
                <Link
                to="/admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 inline-block mx-auto px-8 py-4 bg-forestGreen text-white rounded-full font-medium hover:bg-deepEmerald transition-colors">
                
                  Begin Your Application
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}