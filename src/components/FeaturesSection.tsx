import React from 'react';
import { IconType } from 'react-icons';
import { FiZap, FiTarget, FiSmartphone } from 'react-icons/fi';

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card text-card-foreground shadow-sm border border-border">
    <Icon className="h-12 w-12 text-primary mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: FiZap,
      title: 'Blazing Fast Performance',
      description: 'Our solutions are optimized for speed, ensuring a seamless experience for your users.',
    },
    {
      icon: FiTarget,
      title: 'Precision Targeting',
      description: 'Reach your ideal audience with advanced targeting capabilities and maximize your impact.',
    },
    {
      icon: FiSmartphone,
      title: 'Fully Responsive Design',
      description: 'Access our platform on any device, anywhere, with our mobile-first approach.',
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary text-secondary-foreground">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the core advantages that set our solutions apart from the competition.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
