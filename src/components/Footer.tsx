import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t border-border py-8 px-4 md:px-8 lg:px-16 text-muted-foreground text-sm">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-full md:col-span-1">
          <h3 className="text-lg font-bold text-primary mb-4">InnovateCo</h3>
          <p className="max-w-xs">Revolutionizing productivity with innovative solutions for modern businesses.</p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Product</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Updates</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Partners</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-12 text-xs border-t pt-8 border-border">
        © {new Date().getFullYear()} InnovateCo. All rights reserved.
      </div>
    </footer>
  );
};
