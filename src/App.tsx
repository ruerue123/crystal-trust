import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Academics } from './pages/Academics';
import { StudentLife } from './pages/StudentLife';
import { Admissions } from './pages/Admissions';
import { News } from './pages/News';
import { Contact } from './pages/Contact';
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function PageFade({ children }: {children: React.ReactNode;}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>

      {children}
    </motion.div>);

}
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageFade><Home /></PageFade>} />
        <Route path="/about" element={<PageFade><About /></PageFade>} />
        <Route path="/academics" element={<PageFade><Academics /></PageFade>} />
        <Route path="/student-life" element={<PageFade><StudentLife /></PageFade>} />
        <Route path="/admissions" element={<PageFade><Admissions /></PageFade>} />
        <Route path="/gallery" element={<PageFade><News /></PageFade>} />
        <Route path="/contact" element={<PageFade><Contact /></PageFade>} />
      </Routes>
    </AnimatePresence>);

}
export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>);

}