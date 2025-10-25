import React from "react";
import { Button } from "./ui/button";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-primary/10 to-secondary/10 py-20 md:py-32 flex items-center justify-center min-h-[60vh] overflow-hidden">
      <div className="container mx-auto px-4 text-center max-w-4xl z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-primary-foreground leading-tight">
          Unlock Your Creative Potential with Our Powerful Tools
        </h1>
        <p className="text-lg md:text-xl mb-10 text-muted-foreground max-w-2xl mx-auto">
          Discover intuitive features designed to streamline your workflow and bring your ideas to life faster than ever before.
        </p>
        <Button size="lg" className="px-8 py-3 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300">
          Get Started Now
        </Button>
      </div>
      {/* Abstract shapes for background visual interest */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
};
