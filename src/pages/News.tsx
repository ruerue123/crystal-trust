import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { NewsHero } from '../components/news/NewsHero';
import { NewsGrid } from '../components/news/NewsGrid';
export function News() {
  return (
    <div className="min-h-screen bg-ivory selection:bg-gold/30 selection:text-forestGreen">
      <Navigation />
      <main>
        <NewsHero />
        <NewsGrid />
      </main>
      <Footer />
    </div>);

}