// src/components/layout/Footer.tsx
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-card text-card-foreground py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Acme Inc. All rights reserved.
        </p>
        <nav className="flex gap-4">
          <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  );
};
