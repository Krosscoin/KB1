import React from 'react';
import { Card, CardHeader, CardContent } from './ui/card';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, role }) => (
  <Card className="bg-card text-card-foreground border-border shadow-md hover:shadow-lg transition-shadow duration-300">
    <CardContent className="pt-6">
      <p className="text-lg leading-relaxed text-muted-foreground italic">\"{quote}\"</p>
    </CardContent>
    <CardHeader className="pt-4">
      <p className="text-base font-semibold text-foreground">{author}</p>
      <p className="text-sm text-primary">{role}</p>
    </CardHeader>
  </Card>
);

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: 'MyProduct has transformed our team\'s productivity. The intuitive design and powerful features are a game-changer!',
      author: 'Jane Doe',
      role: 'CEO, TechSolutions'
    },
    {
      quote: 'I\'ve tried many tools, but MyProduct stands out. It\'s efficient, reliable, and incredibly easy to use.',
      author: 'John Smith',
      role: 'Lead Developer, InnovateCo'
    },
    {
      quote: 'Customer support is top-notch, and the product itself is flawless. Highly recommend it to anyone looking to improve their workflow.',
      author: 'Emily White',
      role: 'Marketing Director, GrowthGenius'
    },
  ];

  return (
    <section id="testimonials" className="container py-20">
      <h2 className="text-4xl font-bold text-center text-foreground mb-12">
        What Our <span className="text-primary">Customers Say</span>
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};
