import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRightIcon } from '@radix-ui/react-icons';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 sm:py-24 md:py-32 lg:py-48 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Unlock Your Team&apos;s Full Potential
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed opacity-90">
              Streamline your workflow, collaborate seamlessly, and achieve your goals faster with our intuitive platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors duration-300">
                Get Started Today <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 transition-colors duration-300">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Powerful Features for Modern Teams</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to boost productivity and foster collaboration, all in one place.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">Intuitive Dashboards</CardTitle>
                  <CardDescription>Gain insights at a glance with customizable dashboards.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Visualize your progress, track key metrics, and make data-driven decisions swiftly and efficiently.</p>
                </CardContent>
              </Card>
              <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">Seamless Collaboration</CardTitle>
                  <CardDescription>Work together effortlessly with real-time updates.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Share files, comment on tasks, and communicate effectively with your team members, regardless of location.</p>
                </CardContent>
              </Card>
              <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">Advanced Analytics</CardTitle>
                  <CardDescription>Deep dive into your data with comprehensive reporting.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Understand your performance, identify trends, and optimize your strategies for continuous improvement.</p>
                </CardContent>
              </Card>
              <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">Task Management</CardTitle>
                  <CardDescription>Organize and prioritize your tasks with ease.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Keep track of deadlines, assign responsibilities, and ensure nothing falls through the cracks, all in one centralized system.</p>
                </CardContent>
              </Card>
              <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">Secure & Reliable</CardTitle>
                  <CardDescription>Your data is safe with our enterprise-grade security.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We employ the latest encryption technologies and security protocols to protect your sensitive information around the clock.</p>
                </CardContent>
              </Card>
              <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">24/7 Support</CardTitle>
                  <CardDescription>Get help when you need it from our dedicated team.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Our expert support team is always ready to assist you, ensuring a smooth and uninterrupted experience.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted text-muted-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What Our Customers Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from businesses that have transformed their operations with our platform.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto">
              <Card className="bg-card text-card-foreground shadow-lg">
                <CardContent className="pt-6">
                  <p className="text-lg leading-relaxed">"Our team productivity has skyrocketed since we started using this platform. The collaboration tools are a game-changer!"</p>
                  <div className="flex items-center mt-4">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mr-3">JD</div>
                    <div>
                      <p className="font-semibold">Jane Doe</p>
                      <p className="text-sm text-muted-foreground">CEO, Tech Solutions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card text-card-foreground shadow-lg">
                <CardContent className="pt-6">
                  <p className="text-lg leading-relaxed">"The intuitive interface made onboarding a breeze. Our projects are now managed with unprecedented efficiency."</p>
                  <div className="flex items-center mt-4">
                    <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold mr-3">JS</div>
                    <div>
                      <p className="font-semibold">John Smith</p>
                      <p className="text-sm text-muted-foreground">CTO, Creative Agency</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Ready to Transform Your Workflow?</h2>
            <p className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed opacity-90">
              Join thousands of satisfied teams already achieving more with our powerful platform.
            </p>
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-colors duration-300">
              Sign Up Now <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
