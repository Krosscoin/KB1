import React from 'react';
import { Button } from './ui/button';

export const SiteHeader: React.FC = () => {
  return (
    <header className="px-4 py-3 border-b border-border bg-card text-card-foreground shadow-sm">
      <div className="container flex items-center justify-between mx-auto">
        <a href="/" className="text-xl font-bold text-primary hover:text-primary/90 transition-colors" aria-label="Home">
          MyProduct
        </a>
        <nav className="hidden md:flex space-x-4">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
          Sign Up
        </Button>
      </div>
    </header>
  );
};
