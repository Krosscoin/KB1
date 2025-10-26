import React from 'react';

// Example type for extending basic HTML attributes
export type DivProps = React.HTMLAttributes<HTMLDivElement>;
export type ImgProps = React.ImgHTMLAttributes<HTMLImageElement>;

// Reusable interface for components that might accept a className
export interface HasClassName {
  className?: string;
}
