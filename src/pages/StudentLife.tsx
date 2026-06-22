import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { StudentLifeHero } from '../components/student-life/StudentLifeHero';
import { Experiences } from '../components/student-life/Experiences';
import { AdmissionsCTA } from '../components/AdmissionsCTA';
export function StudentLife() {
  return (
    <div className="min-h-screen bg-ivory selection:bg-gold/30 selection:text-forestGreen">
      <Navigation />
      <main>
        <StudentLifeHero />
        <Experiences />
        <AdmissionsCTA />
      </main>
      <Footer />
    </div>);

}