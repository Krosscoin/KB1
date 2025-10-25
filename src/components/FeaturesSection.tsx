import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Lightbulb, Rocket, Shield } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <Card className="bg-card text-card-foreground border-border hover:shadow-lg transition-shadow duration-300">
    <CardHeader>
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
        <Icon size={24} />
      </div>
      <CardTitle className="text-xl font-semibold">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-muted-foreground">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'Intuitive Design',
      description: 'Our user-friendly interface makes complex tasks simple and accessible to everyone.'
    },
    {
      icon: Rocket,
      title: 'Blazing Fast Performance',
      description: 'Experience unparalleled speed and efficiency, ensuring your work gets done quicker.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Your data is safe with us. We prioritize security with robust encryption and privacy.'
    },
  ];

  return (
    <section id="features" className="container py-20 bg-muted/20">
      <h2 className="text-4xl font-bold text-center text-foreground mb-12">
        Why Choose <span className="text-primary">MyProduct</span>?
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};
