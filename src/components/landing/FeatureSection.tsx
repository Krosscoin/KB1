// src/components/landing/FeatureSection.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Rocket, ShieldCheck } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <Card className="flex flex-col items-center text-center p-6 bg-card hover:shadow-lg transition-shadow duration-300">
    <CardHeader>
      <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
        <Icon className="h-8 w-8" />
      </div>
      <CardTitle className="text-xl font-semibold text-primary-foreground">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Blazing Fast Performance',
      description: 'Experience unparalleled speed and efficiency with our optimized infrastructure and streamlined processes.',
    },
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: 'Leverage cutting-edge technology and creative approaches to solve your most complex challenges.',
    },
    {
      icon: ShieldCheck,
      title: 'Robust Security',
      description: 'Your data and operations are protected by industry-leading security protocols and continuous monitoring.',
    },
  ];

  return (
    <section id="features" className="w-full py-16 md:py-24 bg-secondary/20">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Key Features</h2>
        <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-xl">
          Discover how our platform can revolutionize your workflow and boost productivity.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
