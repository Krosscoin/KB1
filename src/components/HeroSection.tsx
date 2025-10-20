import * as React from 'react';
import { Button } from './ui/button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-48 bg-[var(--color-background)]">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-[var(--color-foreground)]">
            Unlock Your Potential with Our Innovative Solutions
          </h1>
          <p className="text-lg md:text-xl mb-10 text-[var(--color-muted-foreground)]">
            Experience unparalleled efficiency and drive growth with our cutting-edge technology designed for your success.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Button className="px-8 py-3 text-lg bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-hover)]">
              Get Started
            </Button>
            <Button variant="outline" className="px-8 py-3 text-lg border-[var(--color-border)] text-[var(--color-foreground)] hover:bg-[var(--color-secondary)]">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
