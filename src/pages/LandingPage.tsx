import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 sm:py-24 md:py-32 lg:py-48 bg-gradient-to-r from-primary to-secondary text-primary-foreground flex items-center justify-center">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
              Unlock Your Business Potential
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Streamline your operations, boost efficiency, and achieve your goals with our innovative solutions.
            </p>
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors duration-300">
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 sm:py-24 lg:py-32 bg-background text-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Effortless Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Seamlessly connect with your existing tools and workflows for a unified experience.</p>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Advanced Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Gain deep insights into your data with powerful, easy-to-understand analytics dashboards.</p>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Scalable Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Grow with confidence. Our platform scales with your business needs, no matter how big.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 sm:py-24 lg:py-32 bg-muted text-muted-foreground">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-foreground">
            What Our Customers Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-card text-card-foreground shadow-sm">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">"This platform has transformed our business. The efficiency gains are incredible!"</p>
                <p className="mt-4 font-semibold text-primary">— Jane Doe, CEO of Tech Innovations</p>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-sm">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">"The analytical tools provided unparalleled insights. Highly recommend!"</p>
                <p className="mt-4 font-semibold text-primary">— John Smith, Marketing Director at Global Corp</p>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-sm">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">"Customer support is outstanding, and the product is incredibly robust."</p>
                <p className="mt-4 font-semibold text-primary">— Emily White, Founder of Creative Solutions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full py-12 sm:py-24 lg:py-32 bg-background text-foreground" id="contact">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Get in Touch
          </h2>
          <div className="max-w-lg mx-auto bg-card p-8 rounded-lg shadow-lg">
            <form className="grid gap-6">
              <Input type="text" placeholder="Your Name" className="w-full bg-input text-input-foreground border-border focus:ring-ring focus:border-primary" />
              <Input type="email" placeholder="Your Email" className="w-full bg-input text-input-foreground border-border focus:ring-ring focus:border-primary" />
              <Textarea placeholder="Your Message" rows={5} className="w-full bg-input text-input-foreground border-border focus:ring-ring focus:border-primary" />
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
