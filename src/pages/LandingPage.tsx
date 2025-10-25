import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MountainIcon, RocketIcon, ShieldCheckIcon } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 sm:py-24 md:py-32 lg:py-48 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none dark:text-gray-50">
                  Elevate Your Workflow
                </h1>
                <p className="mx-auto max-w-[700px] text-lg md:text-xl dark:text-gray-200">
                  Streamline your tasks, collaborate effortlessly, and achieve more with our powerful platform.
                </p>
              </div>
              <Button size="lg" className="bg-blue-300 text-blue-900 hover:bg-blue-200 focus-visible:ring-blue-500">
                Get Started Now
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Powerful Features for Your Success
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers a comprehensive suite of tools designed to boost your productivity.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <RocketIcon className="h-12 w-12 text-primary mb-4" />
                  <CardHeader>
                    <CardTitle>Blazing Fast Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Experience unparalleled speed and efficiency with our optimized infrastructure.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <ShieldCheckIcon className="h-12 w-12 text-primary mb-4" />
                  <CardHeader>
                    <CardTitle>Secure & Reliable</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Your data is safe with us. We prioritize security and ensure 99.9% uptime.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <MountainIcon className="h-12 w-12 text-primary mb-4" />
                  <CardHeader>
                    <CardTitle>Scalable Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Grow without limits. Our platform scales with your needs, big or small.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What Our Users Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from satisfied customers who have transformed their businesses with our platform.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent>
                    <p className="text-lg leading-relaxed">"This platform has revolutionized our team's productivity. The collaboration features are outstanding!"</p>
                  </CardContent>
                  <CardHeader className="pt-4">
                    <CardTitle className="text-base">Jane Doe</CardTitle>
                    <CardDescription>CEO, Tech Solutions</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent>
                    <p className="text-lg leading-relaxed">"Seamless integration and a user-friendly interface. It's exactly what we needed to scale our operations."</p>
                  </CardContent>
                  <CardHeader className="pt-4">
                    <CardTitle className="text-base">John Smith</CardTitle>
                    <CardDescription>Founder, Innovate Co.</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent>
                    <p className="text-lg leading-relaxed">"The support team is incredible, and the features are constantly evolving to meet modern demands."</p>
                  </CardContent>
                  <CardHeader className="pt-4">
                    <CardTitle className="text-base">Emily White</CardTitle>
                    <CardDescription>CTO, Global Ventures</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-background">
        <p className="text-xs text-muted-foreground">&copy; 2024 Your Company. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            Terms of Service
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default LandingPage;