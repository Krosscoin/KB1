import * as React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card, CardContent, CardDescription, CardTitle } from './ui/card';

interface TestimonialCardProps {
  name: string;
  title: string;
  quote: string;
  avatarSrc?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, title, quote, avatarSrc }) => {
  return (
    <Card className="p-6 bg-[var(--color-card)] text-[var(--color-card-foreground)] border-[var(--color-border)]">
      <CardContent className="p-0 mb-6">
        <p className="text-lg italic leading-relaxed text-[var(--color-muted-foreground)]">"{quote}"</p>
      </CardContent>
      <div className="flex items-center">
        <Avatar className="h-12 w-12 mr-4 bg-[var(--color-primary)]">
          <AvatarImage src={avatarSrc} alt={name} />
          <AvatarFallback className="text-[var(--color-primary-foreground)]">{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-md font-semibold text-[var(--color-foreground)]">{name}</CardTitle>
          <CardDescription className="text-sm text-[var(--color-muted-foreground)]">{title}</CardDescription>
        </div>
      </div>
    </Card>
  );
};

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Jane Doe',
      title: 'CEO, Tech Solutions',
      quote: 'This product transformed our workflow and significantly boosted our productivity. Highly recommended!',
      avatarSrc: 'https://api.uigenerator.org/generate?name=Jane%20Doe'
    },
    {
      name: 'John Smith',
      title: 'Lead Developer, InnovateCo',
      quote: 'The features are robust, and the support team is incredibly responsive. A truly outstanding platform.',
      avatarSrc: 'https://api.uigenerator.org/generate?name=John%20Smith'
    },
    {
      name: 'Sarah Chen',
      title: 'Marketing Director, Global Brands',
      quote: 'Our marketing campaigns have seen a remarkable improvement since we started using this tool. Fantastic results!',
      avatarSrc: 'https://api.uigenerator.org/generate?name=Sarah%20Chen'
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[var(--color-background)]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-12 text-[var(--color-foreground)]">
          What Our Customers Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
