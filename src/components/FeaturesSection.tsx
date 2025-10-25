import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <Card className="flex flex-col items-center text-center p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <CardHeader className="mb-4">
      <div className="text-primary mb-4 text-5xl flex justify-center">{icon}</div>
      <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-muted-foreground text-md leading-relaxed">{description}</CardDescription>
    </CardContent>
  </Card>
);

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Layers className="w-12 h-12"/>,
      title: 'Seamless Integration',
      description: 'Connect with your favorite tools effortlessly and streamline your entire workflow.'
    },
    {
      icon: <Zap className="w-12 h-12"/>,
      title: 'Blazing Fast Performance',
      description: 'Experience unparalleled speed and responsiveness across all our applications.'
    },
    {
      icon: <ShieldCheck className="w-12 h-12"/>,
      title: 'Ironclad Security',
      description: 'Your data is protected with state-of-the-art encryption and security protocols.'
    },
    {
      icon: <TrendingUp className="w-12 h-12"/>,
      title: 'Actionable Analytics',
      description: 'Gain deep insights into your performance with comprehensive and easy-to-understand analytics.'
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-secondary text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-primary animate-fade-in-dramatic">
          Powerful Features Designed For You
        </h2>
        <p className="text-lg md:text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-16 animate-fade-in-dramatic delay-200">
          Discover how InnovateCo can transform your operations with a suite of tools built for efficiency and growth. 
          Each feature is crafted to elevate your experience and deliver tangible results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Placeholder icons - in a real app, these would be imported from an icon library like 'lucide-react'
const Layers = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.84l8.17 3.91a2 2 0 0 0 1.66 0l8.17-3.91a1 1 0 0 0 0-1.84Z"/><path d="m2.6 14.08 8.17 3.91a2 2 0 0 0 1.66 0l8.17-3.91a1 1 0 0 0 0-1.84"/><path d="m2.6 22.08 8.17-3.91a2 2 0 0 0 1.66 0l8.17 3.91a1 1 0 0 0 0-1.84"/></svg>
);
const Zap = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14h6l-3 9v-7H2l3-9h9v5"></path><path d="M17 19h3v-3h-3v3z"></path><path d="M20 12v-5h-3V7h3V2"></path><path d="M17 2h3v-3h-3v3z"></path><path d="M14 12h3v-3h-3v3z"></path></svg>
);
const ShieldCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
);
const TrendingUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 7-4-4-5 5-4-4-3 3-2-2m0 0 3-3 4 4 5-5 4 4 7-7"/><path d="M18 10h4V6"></path></svg>
);
