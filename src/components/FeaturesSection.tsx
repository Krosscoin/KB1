import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Lightbulb, Rocket, ShieldCheck, TrendingUp } from "lucide-react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <Card className="flex flex-col items-center text-center p-6 bg-card transition-all hover:shadow-lg hover:border-primary/50 border-border">
    <div className="mb-4 text-primary bg-primary/10 p-3 rounded-full">
      <Icon size={32} />
    </div>
    <CardHeader className="p-0 mb-3">
      <CardTitle className="text-xl font-semibold text-card-foreground">{title}</CardTitle>
    </CardHeader>
    <CardContent className="p-0 text-muted-foreground flex-grow">
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Intuitive Design",
      description: "Effortlessly create stunning visuals with our user-friendly interface and drag-and-drop functionality.",
    },
    {
      icon: Rocket,
      title: "Blazing Fast Performance",
      description: "Experience unparalleled speed and responsiveness, even with the most complex projects.",
    },
    {
      icon: ShieldCheck,
      title: "Secure & Reliable",
      description: "Your data is always safe with our robust security measures and continuous backups.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Grow your projects without limits. Our platform scales with your needs, from small tasks to enterprise-level demands.",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
