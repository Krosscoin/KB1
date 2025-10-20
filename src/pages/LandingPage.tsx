import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CallToActionBanner } from '../components/CallToActionBanner';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CallToActionBanner />
      </main>
      <SiteFooter />
    </div>
  );
};

export default LandingPage;