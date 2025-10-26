import React from 'react';
import { Button } from '@/components/ui/button';

export const CallToActionSection: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground text-center">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90">
            Join thousands of satisfied customers and revolutionize your business today.
          </p>
          <Button size="lg" variant="secondary" className="text-primary bg-secondary hover:bg-secondary/90">
            Sign Up Now
          </Button>
        </div>
      </div>
    </section>
  );
};
