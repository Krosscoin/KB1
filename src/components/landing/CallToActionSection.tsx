// src/components/landing/CallToActionSection.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const CallToActionSection: React.FC = () => {
  return (
    <section id="cta" className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container flex flex-col items-center text-center gap-6">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
        <p className="text-lg md:text-xl max-w-2xl">
          Join countless satisfied customers and take the first step towards a more efficient and productive future.
        </p>
        <div className="flex flex-col sm:flex-row w-full max-w-sm gap-4 mt-6">
          <Input
            type="email"
            placeholder="Enter your email..."
            className="flex-grow bg-primary-foreground/20 border-primary-foreground focus:ring-primary-foreground text-primary-foreground placeholder:text-primary-foreground/70"
            aria-label="Email for newsletter signup"
          />
          <Button type="submit" variant="secondary" size="lg" className="whitespace-nowrap">
            Sign Up Now
          </Button>
        </div>
      </div>
    </section>
  );
};
