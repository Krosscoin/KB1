import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="flex flex-col items-center text-center p-6 bg-[var(--color-card)] text-[var(--color-card-foreground)] border-[var(--color-border)]">
      <CardHeader>
        <div className="text-4xl text-[var(--color-primary)] mb-4">{icon}</div>
        <CardTitle className="text-xl font-semibold text-[var(--color-foreground)]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-[var(--color-muted-foreground)]">{description}</p>
      </CardContent>
    </Card>
  );
};

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: '✨', // Replace with actual icons (e.g., LucideIcon components)
      title: 'Intuitive Design',
      description: 'Our platform is designed for ease of use, ensuring a seamless experience for all users.',
    },
    {
      icon: '⚡', // Replace with actual icons
      title: 'Blazing Fast Performance',
      description: 'Experience lightning-fast load times and smooth interactions, even under heavy usage.',
    },
    {
      icon: '🔒', // Replace with actual icons
      title: 'Secure & Reliable',
      description: 'Your data is protected with enterprise-grade security and backed by a highly reliable infrastructure.',
    },
    {
      icon: '💡', // Replace with actual icons
      title: 'Innovative Features',
      description: 'Stay ahead of the curve with our constantly evolving set of powerful and innovative features.',
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-[var(--color-secondary)]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-12 text-[var(--color-secondary-foreground)]">
          Discover Our Powerful Features
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
