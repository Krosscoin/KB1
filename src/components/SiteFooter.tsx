import React from 'react';

export const SiteFooter: React.FC = () => {
  return (
    <footer className="border-t border-border bg-card text-card-foreground py-8">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {new Date().getFullYear()} MyProduct. All rights reserved.</p>
        <p className="mt-2">
          <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
          {' | '}
          <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};
