import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export const SiteFooter: React.FC = () => {
  return (
    <footer className="w-full py-8 md:py-12 bg-card text-card-foreground border-t border-border">
      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link to="#" className="text-sm font-medium hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link to="#" className="text-sm font-medium hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link to="#" className="text-sm font-medium hover:text-primary transition-colors">
            Contact Us
          </Link>
        </nav>
        <div className="flex gap-4">
          <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a href="#" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
            <FaGithub className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};
