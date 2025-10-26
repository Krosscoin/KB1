import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 sm:py-24 md:py-32 lg:py-48 xl:py-56 bg-gradient-to-r from-primary to-secondary text-primary-foreground h-[60vh] flex items-center justify-center">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Revolutionize Your Workflow
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl opacity-90">
              Streamline your processes, boost productivity, and achieve your goals faster with our cutting-edge solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </Button>
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features for Your Success</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-2xl mx-auto">
              Discover how our platform empowers you with tools designed to enhance efficiency and collaboration.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Intuitive Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Gain insights at a glance with our easy-to-use and customizable dashboard.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Real-time Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Work together seamlessly with your team, no matter where you are.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Advanced Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Make data-driven decisions with comprehensive and actionable reports.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Secure & Reliable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Your data is safe with us, protected by industry-leading security measures.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Get help whenever you need it with our dedicated customer support team.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Scalable Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Grow your business without limits, our platform scales with your needs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-muted text-foreground">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-2xl mx-auto">
              Hear from businesses just like yours who have transformed their operations.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <p className="text-lg italic leading-relaxed text-muted-foreground">
                  "This platform has revolutionized how we manage our projects. The real-time collaboration features are a game-changer!"
                </p>
                <div className="mt-4 font-semibold text-primary">— Jane Doe, CEO of Tech Innovations</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <p className="text-lg italic leading-relaxed text-muted-foreground">
                  "The analytics provided are incredibly insightful, allowing us to make much more informed decisions quickly."
                </p>
                <div className="mt-4 font-semibold text-primary">— John Smith, Marketing Director at Growth Co.</div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <p className="text-lg italic leading-relaxed text-muted-foreground">
                  "Support has been exceptional, always responsive and helpful. It makes a huge difference."
                </p>
                <div className="mt-4 font-semibold text-primary">— Emily White, Operations Manager at Synergize Ltd.</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-2xl mx-auto">
              Have questions or want to learn more? Reach out to us and we'll be happy to help.
            </p>
          </div>
          <div className="max-w-md mx-auto space-y-6">
            <Input placeholder="Your Name" type="text" className="h-12 text-base" />
            <Input placeholder="Your Email" type="email" className="h-12 text-base" />
            <Textarea placeholder="Your Message" className="min-h-[120px] text-base" />
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg rounded-md shadow-lg transition-all duration-300">Send Message</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 bg-card text-card-foreground text-center border-t border-border">
        <div className="container px-4 md:px-6">
          <p className="text-sm">&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
