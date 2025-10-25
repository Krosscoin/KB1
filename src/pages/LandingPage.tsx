import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-primary-foreground flex items-center justify-center">
        <div className="container px-4 md:px-6 text-center text-primary-foreground">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-tight md:leading-snug">
            Elevate Your Digital Experience
          </h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl lg:text-2xl mt-4 mb-8">
            Discover innovative solutions designed to transform your business and captivate your audience.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transform transition-transform duration-300 hover:scale-105">
              Explore Services
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transform transition-transform duration-300 hover:scale-105">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-secondary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Features for Your Success</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Unlock new potentials with our comprehensive suite of tools and services.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            <Card className="bg-card text-card-foreground shadow-lg transform transition-transform duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Intuitive Design</CardTitle>
                <CardDescription className="text-muted-foreground">Crafted for an exceptional user experience.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Our designs prioritize usability and aesthetics, ensuring your users love every interaction.</p>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-lg transform transition-transform duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Seamless Integration</CardTitle>
                <CardDescription className="text-muted-foreground">Connect effortlessly with your existing tools.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>We provide robust APIs and integrations to streamline your workflows and boost productivity.</p>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-lg transform transition-transform duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Scalable Performance</CardTitle>
                <CardDescription className="text-muted-foreground">Grow without limits, powered by our robust infrastructure.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Our cloud-native platform ensures high availability and performance, even during peak loads.</p>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-lg transform transition-transform duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Dedicated Support</CardTitle>
                <CardDescription className="text-muted-foreground">Expert assistance whenever you need it.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Our support team is available 24/7 to help you with any questions or issues.</p>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-lg transform transition-transform duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Security First</CardTitle>
                <CardDescription className="text-muted-foreground">Your data is safe and protected with us.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>We implement industry-leading security measures to protect your sensitive information.</p>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-lg transform transition-transform duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Cost-Effective Solutions</CardTitle>
                <CardDescription className="text-muted-foreground">Maximize your ROI with our competitive pricing.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Achieve your goals without breaking the bank with our flexible and affordable plans.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground flex items-center justify-center">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
            Ready to Get Started?
          </h2>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl lg:text-2xl mt-4 mb-8">
            Join thousands of satisfied customers and elevate your business today.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transform transition-transform duration-300 hover:scale-105">
            Sign Up Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-background text-muted-foreground">
        <p className="text-xs text-center sm:text-left">&copy; 2024 Your Company. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Contact
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default LandingPage;
