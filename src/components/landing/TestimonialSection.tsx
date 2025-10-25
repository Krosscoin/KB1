// src/components/landing/TestimonialSection.tsx
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialProps {
  name: string;
  title: string;
  quote: string;
  avatarSrc: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, title, quote, avatarSrc }) => (
  <Card className="flex flex-col items-center text-center p-6 bg-card shadow-md border border-border/50">
    <CardContent className="flex flex-col items-center p-0">
      <Avatar className="h-20 w-20 mb-4 border-2 border-primary">
        <AvatarImage src={avatarSrc} alt={name} />
        <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <p className="text-lg italic text-muted-foreground mb-4">"{quote}"</p>
      <h3 className="text-xl font-semibold text-primary-foreground">{name}</h3>
      <p className="text-sm text-primary">{title}</p>
    </CardContent>
  </Card>
);

export const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Jane Doe',
      title: 'CEO, Tech Solutions',
      quote: 'Our productivity has soared since implementing their system. A truly game-changing experience!',
      avatarSrc: 'https://generated.vusercontent.net/placeholder.svg',
    },
    {
      name: 'John Smith',
      title: 'CTO, Global Innovations',
      quote: 'The team went above and beyond to tailor solutions that perfectly fit our complex needs. Highly recommended.',
      avatarSrc: 'https://generated.vusercontent.net/placeholder.svg',
    },
    {
      name: 'Emily White',
      title: 'Marketing Director, Future Brands',
      quote: 'Exceptional support and a product that consistently delivers. We are thrilled with the results!',
      avatarSrc: 'https://generated.vusercontent.net/placeholder.svg',
    },
  ];

  return (
    <section id="testimonials" className="w-full py-16 md:py-24 bg-background">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">What Our Clients Say</h2>
        <p className="mt-4 text-lg text-muted-foreground mx-auto max-w-xl">
          Hear from the businesses that have transformed their futures with us.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
