import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { QuickLinks } from '../components/QuickLinks';
import { HeadsWelcome } from '../components/HeadsWelcome';
import { StatsBand } from '../components/StatsBand';
import { WhyCrystalTrust } from '../components/WhyCrystalTrust';
import { StudentJourney } from '../components/StudentJourney';
import { SignatureProgrammes } from '../components/SignatureProgrammes';
import { GalleryWall } from '../components/GalleryWall';
import { MeetEducators } from '../components/MeetEducators';
import { UpcomingEvents } from '../components/UpcomingEvents';
import { AdmissionsCTA } from '../components/AdmissionsCTA';
export function Home() {
  return (
    <div className="min-h-screen bg-ivory selection:bg-gold/30 selection:text-forestGreen">
      <Navigation />

      <main>
        <Hero />
        <QuickLinks />
        <HeadsWelcome />
        <WhyCrystalTrust />
        <StatsBand />
        <StudentJourney />
        <SignatureProgrammes />
        <GalleryWall />
        <MeetEducators />
        <UpcomingEvents />
        <AdmissionsCTA />
      </main>

      <Footer />
    </div>);

}
