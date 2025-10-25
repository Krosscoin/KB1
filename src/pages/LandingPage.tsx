import React from 'react';
import { Button } from '@/components/ui/button';
import { MountainIcon } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-background border-b">
        <a href="#" className="flex items-center justify-center">
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="sr-only">Acme Inc</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-b bg-muted/20">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Powerful Solutions for Your Business
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
                  Unlock your potential with our cutting-edge platform. Streamline workflows, boost productivity, and drive growth.
                </p>
                <div className="space-x-4 mt-6">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Get Started
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <img
                  src="https://placehold.co/600x400"
                  width="600"
                  height="400"
                  alt="Hero Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Experience Our Core Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to succeed, all in one place. Discover how our features can transform your business.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1 p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
                <h3 className="text-lg font-bold">Customizable Dashboards</h3>
                <p className="text-sm text-muted-foreground">
                  Tailor your workspace with drag-and-drop widgets to monitor what matters most.
                </p>
              </div>
              <div className="grid gap-1 p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
                <h3 className="text-lg font-bold">Automated Workflows</h3>
                <p className="text-sm text-muted-foreground">
                  Set up automated tasks to save time and reduce manual errors.
                </p>
              </div>
              <div className="grid gap-1 p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
                <h3 className="text-lg font-bold">Real-time Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Gain insights with powerful analytics and interactive reports.
                </p>
              </div>
              <div className="grid gap-1 p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
                <h3 className="text-lg font-bold">Secure Cloud Storage</h3>
                <p className="text-sm text-muted-foreground">
                  Keep your data safe and accessible with our encrypted cloud storage.
                </p>
              </div>
              <div className="grid gap-1 p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
                <h3 className="text-lg font-bold">Team Collaboration Tools</h3>
                <p className="text-sm text-muted-foreground">
                  Foster teamwork with integrated communication and project management features.
                </p>
              </div>
              <div className="grid gap-1 p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
                <h3 className="text-lg font-bold">24/7 Premium Support</h3>
                <p className="text-sm text-muted-foreground">
                  Get help whenever you need it with our dedicated support team.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-background">
        <p className="text-xs text-muted-foreground">&copy; 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:text-primary transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-xs hover:text-primary transition-colors">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default LandingPage;
