import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
;

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon: Icon, title, description }) => (
  <Card className="flex flex-col items-center text-center p-4 md:p-6 lg:p-8">
    <Icon className="h-12 w-12 text-primary mb-4" />
    <CardTitle className="text-xl font-bold mb-2">{title}</CardTitle>
    <CardDescription className="text-muted-foreground">{description}</CardDescription>
  </Card>
);

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-transparent py-20 md:py-32 lg:py-48 flex items-center justify-center text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight">
            Unlock Your Potential with Our Innovative Platform
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience a seamless journey where technology meets simplicity. Boost your productivity and achieve your goals with ease.
          </p>
          <Button size="lg" className="text-lg px-8 py-3">Get Started Now</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">Why Choose Us?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Feature
              icon={({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1l-.75-3M3 13V7a2 2 0 012-2h14a2 2 0 012 2v6m-9 6h.01M5 19h14a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2z"></path></svg>}
              title="Intuitive Design"
              description="Our platform is designed with user-friendliness in mind, ensuring a smooth and enjoyable experience."
            />
            <Feature
              icon={({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>}
              title="Blazing Fast Performance"
              description="Optimized for speed, our service delivers incredible performance and responsiveness."
            />
            <Feature
              icon={({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.276a2.25 2.25 0 010 3.182l-5.618 5.618a2.25 2.25 0 01-3.182 0l-5.618-5.618a2.25 2.25 0 010-3.182l5.618-5.618a2.25 2.25 0 013.182 0l5.618 5.618z"></path></svg>}
              title="Reliable Support"
              description="Our dedicated support team is always ready to assist you, ensuring a hassle-free experience."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">What Our Users Say</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 md:p-8">
              <CardContent className="text-center">
                <p className="text-muted-foreground italic mb-4">"This platform has transformed the way I work. Highly recommended!"</p>
                <p className="font-semibold text-foreground">— Jane Doe, CEO</p>
              </CardContent>
            </Card>
            <Card className="p-6 md:p-8">
              <CardContent className="text-center">
                <p className="text-muted-foreground italic mb-4">"The features are incredibly powerful yet so easy to use. A game-changer!"</p>
                <p className="font-semibold text-foreground">— John Smith, Product Manager</p>
              </CardContent>
            </Card>
            <Card className="p-6 md:p-8">
              <CardContent className="text-center">
                <p className="text-muted-foreground italic mb-4">"Excellent support and a truly robust solution. Couldn't be happier."</p>
                <p className="font-semibold text-foreground">— Emily White, Developer</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
            Join thousands of satisfied users today and take the first step towards a more efficient future.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">Sign Up for Free</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card text-card-foreground py-8 md:py-12 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm md:text-base">
          <p>&copy; {new Date().getFullYear()} OurPlatform. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="text-primary-foreground hover:underline">Privacy Policy</a> | 
            <a href="#" className="text-primary-foreground hover:underline">Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
