import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { AdmissionsHero } from '../components/admissions/AdmissionsHero';
import { Process } from '../components/admissions/Process';
import { Fees } from '../components/admissions/Fees';
import { Requirements } from '../components/admissions/Requirements';
import { FAQ } from '../components/admissions/FAQ';
import { ApplicationForm } from '../components/admissions/ApplicationForm';
import { AdmissionsCTA } from '../components/AdmissionsCTA';
export function Admissions() {
  return (
    <div className="min-h-screen bg-ivory selection:bg-gold/30 selection:text-forestGreen">
      <Navigation />
      <main>
        <AdmissionsHero />
        <Process />
        <Fees />
        <Requirements />
        <FAQ />
        <ApplicationForm />
        <AdmissionsCTA />
      </main>
      <Footer />
    </div>);

}