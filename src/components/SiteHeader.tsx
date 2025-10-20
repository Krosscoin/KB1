import React from 'react';
import { Button } from './ui/button';

export const SiteHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-[var(--color-background)]">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <a href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-[var(--color-primary)]">Acme Inc.</span>
          </a>
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <a
              href="#features"
              className="text-sm font-medium transition-colors hover:text-[var(--color-primary)]"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium transition-colors hover:text-[var(--color-primary)]"
            >
              Testimonials
            </a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Sign Up
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
