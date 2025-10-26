import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center shadow-sm bg-card text-card-foreground">
      <a href="#" className="flex items-center justify-center">
        <LaptopIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#features">
          Features
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
          Testimonials
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
};

function LaptopIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.91 1.45H3.63a1 1 0 0 1-.91-1.45L4 16" />
    </svg>
  );
}
