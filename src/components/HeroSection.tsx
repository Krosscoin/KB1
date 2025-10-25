import React from 'react';
import { Button } from './ui/button';

export const HeroSection: React.FC = () => {
  return (
    <section className="container py-20 text-center bg-background">
      <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-tight">
        Achieve More with <span className="text-primary">MyProduct</span>
      </h1>
      <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
        The ultimate solution to streamline your workflow and boost productivity. Discover a new way to work smarter, not harder.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-colors">
          Get Started Free
        </Button>
        <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
          Learn More
        </Button>
      </div>
    </section>
  );
};
