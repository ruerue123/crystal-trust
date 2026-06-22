import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactForm } from '../components/contact/ContactForm';
import { MapSection } from '../components/contact/MapSection';
export function Contact() {
  return (
    <div className="min-h-screen bg-ivory selection:bg-gold/30 selection:text-forestGreen">
      <Navigation />
      <main>
        <ContactHero />
        <ContactForm />
        <MapSection />
      </main>
      <Footer />
    </div>);

}