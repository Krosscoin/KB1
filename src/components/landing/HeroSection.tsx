// src/components/landing/HeroSection.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative w-full py-20 md:py-32 lg:py-48 bg-gradient-to-r from-primary/10 to-transparent overflow-hidden object-cover">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 relative z-10">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-tight">
            Elevate Your Business with Our <br className="hidden md:block" /> Cutting-Edge Solutions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
            Transform your operations, enhance customer engagement, and drive growth with our innovative and reliable services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button size="lg" className="text-lg px-8 py-3">Get Started</Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">Learn More</Button>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[450px] lg:w-1/2 flex justify-center items-center">
          <Image
            src="https://generated.vusercontent.net/placeholder.svg"
            alt="Hero Illustration"
            width={700}
            height={500}
            className="rounded-lg shadow-xl object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};
