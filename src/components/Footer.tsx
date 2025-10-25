import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-card py-10 border-t border-border mt-10">
      <div className="container mx-auto px-4 text-center md:flex md:justify-between md:items-center">
        <div className="mb-6 md:mb-0">
          <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
            YourBrand
          </Link>
          <p className="text-sm text-muted-foreground mt-2">&copy; {new Date().getFullYear()} YourBrand. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <nav>
            <ul className="flex flex-col md:flex-row gap-3 md:gap-6 text-sm">
              <li><Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/services" className="text-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};
