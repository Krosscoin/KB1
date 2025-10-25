import React from 'react';
import { Button } from './ui/button';

export const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-border py-4 px-4 md:px-8 lg:px-16 flex justify-between items-center bg-card shadow-sm">
      <div className="text-2xl font-bold text-primary">InnovateCo</div>
      <nav className="hidden md:flex space-x-6">
        <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
        <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a>
        <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
        <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
      </nav>
      <Button className="hidden md:block">Get Started</Button>
      <button className="md:hidden text-primary focus:outline-none" aria-label="Open navigation menu">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
};
