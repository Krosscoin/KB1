import React from 'react';

export const SiteFooter: React.FC = () => {
  return (
    <footer className="border-t md:h-20 bg-[var(--color-background)] text-[var(--color-muted-foreground)]">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-20 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by {' '}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 text-[var(--color-primary)]"
            >
              Acme Inc.
            </a>
            . The source code is available on {' '}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 text-[var(--color-primary)]"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <p className="text-center text-sm md:text-left">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};
