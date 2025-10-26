import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center p-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto text-center z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight text-primary-foreground drop-shadow-lg">
            Unlock Your Potential with Our Innovative Solutions
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the future of productivity and elevate your business to new heights with our cutting-edge platform.
          </p>
          <Button size="lg" className="text-lg px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
            Get Started Today
          </Button>
        </div>
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-card-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-foreground">
            Designed for Your Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">Intuitive Interface</CardTitle>
                <CardDescription>Effortlessly navigate through a user-friendly design.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our platform is crafted with simplicity in mind, ensuring a smooth and enjoyable experience for all users.</p>
              </CardContent>
            </Card>
            <Card className="bg-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">Powerful Analytics</CardTitle>
                <CardDescription>Gain valuable insights with our advanced data tools.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Make informed decisions with comprehensive reports and real-time dashboards that highlight key performance metrics.</p>
              </CardContent>
            </Card>
            <Card className="bg-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">24/7 Support</CardTitle>
                <CardDescription>Always here to help you succeed.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our dedicated support team is available around the clock to assist you with any questions or issues.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary-foreground">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card-foreground shadow-lg border border-border-color">
              <CardContent className="pt-6">
                <p className="text-lg italic text-muted-foreground mb-4">"This platform has transformed the way we operate. The impact on our team's efficiency has been phenomenal!"</p>
                <div className="font-semibold text-primary">Jane Doe</div>
                <div className="text-sm text-secondary-foreground">CEO, Tech Innovators</div>
              </CardContent>
            </Card>
            <Card className="bg-card-foreground shadow-lg border border-border-color">
              <CardContent className="pt-6">
                <p className="text-lg italic text-muted-foreground mb-4">"Outstanding features and incredible support. Highly recommend to anyone looking to scale their business."</p>
                <div className="font-semibold text-primary">John Smith</div>
                <div className="text-sm text-secondary-foreground">Founder, Creative Solutions</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied customers today and take the first step towards success.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
            Sign Up Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;