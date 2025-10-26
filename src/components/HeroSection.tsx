import React from 'react';
import { Button } from '@/components/ui/button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center text-center bg-background py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
            Unlock Your Potential with Our Innovative Solutions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Experience the future of productivity and elevate your business to new heights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-input bg-background text-foreground hover:bg-accent">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
