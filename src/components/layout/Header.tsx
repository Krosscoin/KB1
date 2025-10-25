// src/components/layout/Header.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="text-2xl font-bold text-primary hover:text-primary-foreground transition-colors">
          <span className="sr-only">Acme Inc</span>
          Acme Inc
        </a>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Features
          </a>
          <a href="#testimonials" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Testimonials
          </a>
          <a href="#cta" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Contact
          </a>
          <Button variant="ghost" className="text-sm font-medium hover:text-primary-foreground">
            Sign In
          </Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 py-6">
              <a href="#features" className="text-lg font-medium hover:text-primary-foreground transition-colors">
                Features
              </a>
              <a href="#testimonials" className="text-lg font-medium hover:text-primary-foreground transition-colors">
                Testimonials
              </a>
              <a href="#cta" className="text-lg font-medium hover:text-primary-foreground transition-colors">
                Contact
              </a>
              <Button className="mt-4">Sign In</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
