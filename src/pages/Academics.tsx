import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { AcademicsHero } from '../components/academics/AcademicsHero';
import { Phases } from '../components/academics/Phases';
import { Approach } from '../components/academics/Approach';
import { AdmissionsCTA } from '../components/AdmissionsCTA';
export function Academics() {
  return (
    <div className="min-h-screen bg-ivory selection:bg-gold/30 selection:text-forestGreen">
      <Navigation />
      <main>
        <AcademicsHero />
        <Phases />
        <Approach />
        <AdmissionsCTA />
      </main>
      <Footer />
    </div>);

}