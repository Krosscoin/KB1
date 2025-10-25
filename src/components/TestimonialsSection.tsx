import React from 'react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, title, avatar }) => (
  <Card className="p-6 md:p-8 flex flex-col items-center text-center shadow-lg transition-transform duration-300 hover:scale-105 bg-card border-border">
    <Avatar className="w-20 h-20 mb-6 border-4 border-primary shadow-md">
      <AvatarImage src={avatar} alt={`Avatar of ${name}`} />
      <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
    </Avatar>
    <CardContent className="flex-grow mb-6">
      <p className="text-lg italic text-foreground leading-relaxed custom-quotes">"{quote}"</p>
    </CardContent>
    <div className="font-semibold text-primary text-lg">{name}</div>
    <div className="text-muted-foreground text-sm">{title}</div>
  </Card>
);

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: 'InnovateCo has completely transformed our project management. The efficiency gains are phenomenal!',
      name: 'Jane Doe',
      title: 'CEO, Tech Solutions',
      avatar: 'https://api.uifaces.co/our-gallery/display/belle-nach-lry_p4.jpg'
    },
    {
      quote: 'The intuitive interface and powerful features make daily tasks a breeze. Highly recommended!',
      name: 'John Smith',
      title: 'Lead Developer, Creative Minds',
      avatar: 'https://api.uifaces.co/our-gallery/display/rachel-schwartz-oXyLq5.jpg'
    },
    {
      quote: 'Our team collaboration has never been better. InnovateCo truly understands modern business needs.',
      name: 'Emily White',
      title: 'Marketing Director, Global Corp',
      avatar: 'https://api.uifaces.co/our-gallery/display/shane-young.jpg'
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-primary animate-fade-in-dramatic">
          What Our Customers Say
        </h2>
        <p className="text-lg md:text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-16 animate-fade-in-dramatic delay-200">
          Hear directly from businesses and professionals who have achieved remarkable results with InnovateCo. 
          Their success stories are our greatest motivation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .custom-quotes::before {
          content: '“';
          font-size: 2.5em;
          color: var(--primary);
          margin-right: 0.1em;
          vertical-align: -0.4em;
          line-height: 0;
          display: inline-block;
        }
        .custom-quotes::after {
          content: '”';
          font-size: 2.5em;
          color: var(--primary);
          margin-left: 0.1em;
          vertical-align: -0.4em;
          line-height: 0;
          display: inline-block;
        }
      `}</style>
    </section>
  );
};
