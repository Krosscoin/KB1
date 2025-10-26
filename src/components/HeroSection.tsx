import React from 'react';
import { Button } from '@/components/ui/button';

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full py-12 sm:py-24 lg:py-32 xl:py-48 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Unlock Your Creative Potential
              </h1>
              <p className="max-w-[600px] md:text-xl">
                Our platform provides the tools and resources you need to bring your ideas to life. From concept to creation, we've got you covered.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button variant="secondary" size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground">
                Learn More
              </Button>
            </div>
          </div>
          <img
            src="https://generated.vusercontent.net/placeholder.svg"
            width="600"
            height="400"
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </div>
    </section>
  );
};
