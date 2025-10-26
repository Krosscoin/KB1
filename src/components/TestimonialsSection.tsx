import React from 'react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Customers Say</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from real users who have experienced the difference our platform makes.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 shadow-sm text-card-foreground">
            <blockquote className="text-lg font-semibold leading-snug ">“This platform has transformed how we work. Highly recommended!”</blockquote>
            <div className="mt-4 flex items-center">
              <img
                src="https://generated.vusercontent.net/placeholder.svg"
                width="48"
                height="48"
                alt="Avatar"
                className="rounded-full"
              />
              <div className="ml-4 text-sm">
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-muted-foreground">CEO, Tech Solutions</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm text-card-foreground">
            <blockquote className="text-lg font-semibold leading-snug ">“The features are incredibly powerful and easy to use. A game-changer for our team.”</blockquote>
            <div className="mt-4 flex items-center">
              <img
                src="https://generated.vusercontent.net/placeholder.svg"
                width="48"
                height="48"
                alt="Avatar"
                className="rounded-full"
              />
              <div className="ml-4 text-sm">
                <p className="font-semibold">David Lee</p>
                <p className="text-muted-foreground">Lead Developer, Creative Co.</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm text-card-foreground">
            <blockquote className="text-lg font-semibold leading-snug ">“Support is fantastic, and the product just keeps getting better. Couldn't be happier!”</blockquote>
            <div className="mt-4 flex items-center">
              <img
                src="https://generated.vusercontent.net/placeholder.svg"
                width="48"
                height="48"
                alt="Avatar"
                className="rounded-full"
              />
              <div className="ml-4 text-sm">
                <p className="font-semibold">Emily Chen</p>
                <p className="text-muted-foreground">Marketing Director, Global Innovations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
