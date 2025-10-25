import React from 'react';

export interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface TestimonialProps {
  name: string;
  title: string;
  quote: string;
  avatarSrc: string;
}
