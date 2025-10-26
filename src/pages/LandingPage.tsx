import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import ResponsiveImage from '@/components/ResponsiveImage';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center p-4">
        <ResponsiveImage
          src="/hero-background.jpg"
          alt="Abstract geometric background"
          className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-75"
        />
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto rounded-lg bg-card/80 p-6 md:p-10 shadow-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-card-foreground leading-tight">
            Elevate Your Digital Presence
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We craft stunning web experiences that drive engagement and convert visitors into loyal customers. Let&apos;s build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button size="lg" className="text-lg px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-secondary-foreground">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="🚀"
              title="Blazing Fast Performance"
              description="Optimized for speed, our applications ensure a seamless user experience, keeping your visitors engaged."
            />
            <FeatureCard
              icon="🎨"
              title="Stunning Design"
              description="Modern, elegant, and user-centric designs that make a lasting impression and reflect your brand identity."
            />
            <FeatureCard
              icon="📱"
              title="Fully Responsive"
              description="Flawless display on any device – desktop, tablet, or mobile. Reach your audience wherever they are."
            />
            <FeatureCard
              icon="🔒"
              title="Secure & Reliable"
              description="Built with the latest security standards, ensuring your data and your users' privacy are always protected."
            />
            <FeatureCard
              icon="💡"
              title="Innovative Solutions"
              description="Leveraging cutting-edge technology to deliver unique solutions tailored to your specific business needs."
            />
            <FeatureCard
              icon="📈"
              title="Scalable Architecture"
              description="Designed to grow with your business, our solutions can handle increased traffic and future expansions effortlessly."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background text-foreground">
        <div className="container mx-auto px-4 max-w-7xl relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="The team delivered beyond our expectations. Our new website is not only beautiful but also incredibly functional, leading to a significant boost in conversions."
              author="Jane Doe, CEO of Innovative Solutions"
            />
            <TestimonialCard
              quote="Their attention to detail and commitment to our vision was outstanding. We highly recommend their services for any serious web development project."
              author="John Smith, Marketing Director at Global Enterprises"
            />
          </div>
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-popover p-4 rounded-full shadow-lg z-20">
            <p className="text-sm text-popover-foreground">Ready to start your project? <a href="/contact" className="text-primary hover:underline">Contact us!</a></p>
          </div>
        </div>
      </section>

      {/* Call to Action Section (Footer) */}
      <section className="bg-primary text-primary-foreground py-16 text-center shadow-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join countless satisfied clients who have seen their businesses flourish with our expert web development services. Let's create your success story.
          </p>
          <Button size="lg" variant="default" className="text-lg px-8 py-3 bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors duration-300">
            Request a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <Card className="bg-card text-card-foreground border-border shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <div className="text-5xl mb-4">
      {icon}
    </div>
    <CardTitle className="mb-3 text-2xl font-semibold">
      {title}
    </CardTitle>
    <CardDescription className="text-muted-foreground leading-relaxed">
      {description}
    </CardDescription>
  </Card>
);

interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => (
  <Card className="bg-card text-card-foreground border-border shadow-lg p-6 flex flex-col items-start transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
    <CardContent className="text-lg italic mb-4 p-0">
      &ldquo;{quote}&rdquo;
    </CardContent>
    <CardFooter className="text-sm font-semibold text-primary p-0">
      - {author}
    </CardFooter>
  </Card>
);

export default LandingPage;
