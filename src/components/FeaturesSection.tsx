import React from 'react';

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-secondary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Features for Your Success</h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to build, grow, and scale your projects. Streamline your workflow and achieve your goals faster.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <img
            src="https://generated.vusercontent.net/placeholder.svg"
            width="600"
            height="400"
            alt="Feature 1"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Intuitive Design Tools</h3>
                  <p className="text-muted-foreground">
                    Create stunning visuals with our easy-to-use drag-and-drop interface and extensive library of assets.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Seamless Collaboration</h3>
                  <p className="text-muted-foreground">
                    Work together with your team in real-time, share feedback, and keep everyone on the same page.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Robust Analytics</h3>
                  <p className="text-muted-foreground">
                    Gain insights into your performance with detailed reports and customizable dashboards.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
