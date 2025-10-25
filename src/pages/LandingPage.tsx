import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MountainIcon, RocketIcon, HeartHandshakeIcon } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen bg-background text-foreground'>
      <main className='flex-1'>
        {/* Hero Section */}
        <section className='w-full py-12 sm:py-24 md:py-32 lg:py-48 xl:py-56 bg-gradient-to-r from-primary- foreground-accent to-primary-foreground-subtle-accent relative overflow-hidden'>
          <div className='container px-4 md:px-6 relative z-10'>
            <div className='flex flex-col items-center space-y-6 text-center'>
              <div className='space-y-4'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white drop-shadow-lg leading-tight'>
                  Unlock Your Potential with Our Platform
                </h1>
                <p className='mx-auto max-w-[700px] text-lg sm:text-xl text-primary-foreground-accent md:text-xl/relaxed lg:text-2xl/relaxed xl:text-3xl/relaxed drop-shadow-md'>
                  Revolutionize your workflow and achieve your goals with our cutting-edge solutions.
                </p>
              </div>
              <div className='flex flex-col gap-4 sm:flex-row'>
                <Button className='h-12 px-8 text-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors shadow-lg'>
                  Get Started Now
                </Button>
                <Button variant='outline' className='h-12 px-8 text-lg border-2 border-primary-foreground-accent text-primary-foreground-accent hover:bg-primary-foreground-accent/10 transition-colors shadow-lg'>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className='absolute inset-0 bg-[url(/hero-pattern.svg)] bg-cover opacity-10 blur-[1px]'></div>
        </section>

        {/* Features Section */}
        <section className='w-full py-16 md:py-24 lg:py-32 bg-secondary-background-subtle'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-10 text-center'>
              <div className='space-y-4'>
                <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-primary-foreground'>
                  Powerful Features at Your Fingertips
                </h2>
                <p className='max-w-[900px] text-lg text-secondary-foreground md:text-xl/relaxed lg:text-2xl/relaxed'>
                  Designed to empower your success, our platform offers a suite of tools that are intuitive, efficient, and robust.
                </p>
              </div>
              <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl'>
                <Card className='flex flex-col items-center p-8 bg-card text-card-foreground shadow-xl transform hover:scale-105 transition-transform duration-300'>
                  <RocketIcon className='w-16 h-16 mb-6 text-primary' />
                  <CardHeader className='p-0 mb-4'>
                    <CardTitle className='text-3xl font-semibold'>Blazing Fast Performance</CardTitle>
                  </CardHeader>
                  <CardContent className='p-0 text-center text-lg text-secondary-foreground'>
                    Experience unparalleled speed and responsiveness across all your tasks, making your work seamless and enjoyable.
                  </CardContent>
                </Card>
                <Card className='flex flex-col items-center p-8 bg-card text-card-foreground shadow-xl transform hover:scale-105 transition-transform duration-300'>
                  <MountainIcon className='w-16 h-16 mb-6 text-primary' />
                  <CardHeader className='p-0 mb-4'>
                    <CardTitle className='text-3xl font-semibold'>Robust Scalability</CardTitle>
                  </CardHeader>
                  <CardContent className='p-0 text-center text-lg text-secondary-foreground'>
                    Grow without limits. Our architecture is built to scale with your needs, from a single user to enterprise-level demands.
                  </CardContent>
                </Card>
                <Card className='flex flex-col items-center p-8 bg-card text-card-foreground shadow-xl transform hover:scale-105 transition-transform duration-300'>
                  <HeartHandshakeIcon className='w-16 h-16 mb-6 text-primary' />
                  <CardHeader className='p-0 mb-4'>
                    <CardTitle className='text-3xl font-semibold'>Exceptional Support</CardTitle>
                  </CardHeader>
                  <CardContent className='p-0 text-center text-lg text-secondary-foreground'>
                    Our dedicated support team is always ready to assist you, ensuring a smooth and productive experience 24/7.
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className='w-full py-16 md:py-24 lg:py-32 bg-background'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-10 text-center'>
              <div className='space-y-4'>
                <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-primary-foreground'>
                  What Our Customers Say
                </h2>
                <p className='max-w-[900px] text-lg text-secondary-foreground md:text-xl/relaxed lg:text-2xl/relaxed'>
                  Hear from businesses and individuals who have transformed their operations with our platform.
                </p>
              </div>
              <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl'>
                <Card className='bg-card text-card-foreground shadow-lg transform hover:scale-105 transition-transform duration-300'>
                  <CardHeader>
                    <CardTitle className='text-xl'>"A game-changer for our team!"</CardTitle>
                    <CardDescription>- Sarah L., Tech Solutions Inc.</CardDescription>
                  </CardHeader>
                  <CardContent className='text-base text-secondary-foreground'>
                    "Our productivity has soared since implementing this platform. The intuitive interface and powerful features are unmatched."
                  </CardContent>
                </Card>
                <Card className='bg-card text-card-foreground shadow-lg transform hover:scale-105 transition-transform duration-300'>
                  <CardHeader>
                    <CardTitle className='text-xl'>"Incredible support and reliability."</CardTitle>
                    <CardDescription>- John D., Creative Agency</CardDescription>
                  </CardHeader>
                  <CardContent className='text-base text-secondary-foreground'>
                    "The level of customer support is outstanding. Any issues are resolved quickly, allowing us to focus on our clients."
                  </CardContent>
                </Card>
                <Card className='bg-card text-card-foreground shadow-lg transform hover:scale-105 transition-transform duration-300'>
                  <CardHeader>
                    <CardTitle className='text-xl'>"Seamless integration into our workflow."</CardTitle>
                    <CardDescription>- Emily R., E-commerce Ventures</CardDescription>
                  </CardHeader>
                  <CardContent className='text-base text-secondary-foreground'>
                    "We were able to integrate the platform with our existing tools effortlessly. It has streamlined our entire e-commerce operation."
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t bg-secondary-background-subtle text-secondary-foreground'>
        <p className='text-sm'>&copy; 2024 Your Company. All rights reserved.</p>
        <nav className='sm:ml-auto flex gap-6 text-sm'>
          <a className='hover:underline underline-offset-4' href='#'>
            Terms of Service
          </a>
          <a className='hover:underline underline-offset-4' href='#'>
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default LandingPage;
