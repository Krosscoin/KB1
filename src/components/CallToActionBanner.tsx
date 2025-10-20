import * as React from 'react';
import { Button } from './ui/button';

export const CallToActionBanner: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--color-primary)] text-[var(--color-primary-foreground)]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg md:text-xl mb-10 opacity-90">
          Join thousands of satisfied customers and elevate your business today.
        </p>
        <Button className="px-10 py-4 text-lg bg-[var(--color-primary-foreground)] text-[var(--color-primary)] hover:bg-[var(--color-primary-foreground-hover)]">
          Sign Up Now
        </Button>
      </div>
    </section>
  );
};
