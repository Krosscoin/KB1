import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CallToActionFooter } from '../components/CallToActionFooter';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CallToActionFooter />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
