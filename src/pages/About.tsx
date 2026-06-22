import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { AboutHero } from '../components/about/AboutHero';
import { History } from '../components/about/History';
import { Leadership } from '../components/about/Leadership';
import { Timeline } from '../components/about/Timeline';
import { AdmissionsCTA } from '../components/AdmissionsCTA';
export function About() {
  return (
    <div className="min-h-screen bg-ivory selection:bg-gold/30 selection:text-forestGreen">
      <Navigation />
      <main>
        <AboutHero />
        <History />
        <Leadership />
        <Timeline />
        <AdmissionsCTA />
      </main>
      <Footer />
    </div>);

}