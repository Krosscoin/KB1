// src/pages/LandingPage.tsx
import React from 'react';
import { HeroSection } from '../components/landing/HeroSection';
import { FeatureSection } from '../components/landing/FeatureSection';
import { TestimonialSection } from '../components/landing/TestimonialSection';
import { CallToActionSection } from '../components/landing/CallToActionSection';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        <TestimonialSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
