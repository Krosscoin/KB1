import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-card py-12 border-t border-border mt-16">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 text-muted-foreground text-sm">
        <div className="space-y-4">
          <h3 className="font-semibold text-foreground text-lg">YourSAAS</h3>
          <p>Seamless solutions for modern teams, designed to elevate your productivity and streamline your workflow.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors">🕊️</a> {/* Replace with actual icons */}
            <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors">💼</a>
            <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors">📘</a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-foreground text-base mb-4">Product</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Updates</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-foreground text-base mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-foreground text-base mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <Separator className="my-8 bg-border" />
      <div className="container text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} YourSAAS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;