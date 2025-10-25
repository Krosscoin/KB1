import React from 'react';
import { Button } from './ui/button';

export const CallToActionFooter: React.FC = () => {
  return (
    <section className="bg-primary py-16 md:py-24 text-primary-foreground text-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Elevate Your Business?
        </h2>
        <p className="text-xl mb-10 opacity-90 leading-relaxed">
          Join thousands of successful businesses already leveraging InnovateCo to grow and innovate. 
          Start your journey towards a more efficient and productive future today!
        </p>
        <Button size="lg" className="bg-primary-foreground text-primary hover:bg-white/90 transition-colors py-3 px-8 text-lg font-semibold shadow-xl hover:shadow-2xl">
          Get Started Now
        </Button>
      </div>
    </section>
  );
};
