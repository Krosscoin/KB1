import React from 'react';
import { Button } from './ui/button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-foreground to-background py-20 md:py-32 flex items-center justify-center text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-primary leading-tight mb-6 animate-fade-in-up">
          Unlock Your Potential with InnovateCo
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed animate-fade-in-up delay-200">
          Revolutionize your workflow and achieve unprecedented success with our cutting-edge solutions. 
          Experience the future of productivity, designed for innovators like you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up delay-400">
          <Button size="lg" className="py-3 px-8 text-lg">Start Your Free Trial</Button>
          <Button variant="outline" size="lg" className="py-3 px-8 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};
