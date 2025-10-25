import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";

interface TestimonialProps {
  name: string;
  title: string;
  avatarSrc: string;
  feedback: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, title, avatarSrc, feedback }) => (
  <Card className="bg-card text-card-foreground shadow-md transition-all hover:shadow-xl hover:scale-[1.02] duration-300 ease-in-out">
    <CardContent className="flex flex-col items-center text-center p-6 pt-8">
      <Avatar className="w-16 h-16 mb-4">
        <AvatarImage src={avatarSrc} alt={`${name}'s avatar`} />
        <AvatarFallback>{name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
      </Avatar>
      <p className="text-lg italic mb-4">"{feedback}"</p>
      <h3 className="font-semibold text-primary">{name}</h3>
      <p className="text-sm text-muted-foreground">{title}</p>
    </CardContent>
  </Card>
);

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      title: "CEO, Creative Solutions",
      avatarSrc: "https://api.uigenerator.org/image/female-avatar",
      feedback: "This product transformed our workflow. The intuitive design and powerful features are unmatched!",
    },
    {
      name: "John Smith",
      title: "Lead Developer, Tech Innovations",
      avatarSrc: "https://api.uigenerator.org/image/male-avatar",
      feedback: "Reliable, fast, and incredibly versatile. Our team's productivity has skyrocketed since we started using it.",
    },
    {
      name: "Emily White",
      title: "Marketing Director, Global Brands",
      avatarSrc: "https://api.uigenerator.org/image/female-avatar?id=2",
      feedback: "The best tool for scaling our campaigns. The insights and analytics provided are invaluable.",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
