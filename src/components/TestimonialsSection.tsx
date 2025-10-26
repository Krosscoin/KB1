import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatarSrc: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, avatarSrc }) => (
  <Card className="bg-card text-card-foreground shadow-md border border-border">
    <CardContent className="flex flex-col items-center text-center p-6">
      <Avatar className="h-16 w-16 mb-4">
        <AvatarImage src={avatarSrc} alt={name} />
        <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <p className="text-lg italic mb-4 text-muted-foreground">"{quote}"</p>
      <div className="font-semibold text-foreground">{name}</div>
      <div className="text-sm text-primary">{title}</div>
    </CardContent>
  </Card>
);

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: 'This platform has transformed our workflow and significantly boosted our efficiency. Highly recommended!',
      name: 'Jane Doe',
      title: 'CEO, Tech Solutions',
      avatarSrc: 'https://api.uifaces.co/our-gallery/display/male-1.jpg',
    },
    {
      quote: 'An intuitive and powerful tool that has become indispensable for our daily operations.',
      name: 'John Smith',
      title: 'CTO, Creative Agency',
      avatarSrc: 'https://api.uifaces.co/our-gallery/display/female-1.jpg',
    },
    {
      quote: 'The support is exceptional, and the feature set is exactly what we needed to scale.',
      name: 'Emily White',
      title: 'Founder, Startup Hub',
      avatarSrc: 'https://api.uifaces.co/our-gallery/display/male-2.jpg',
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear directly from those who have experienced the difference.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
