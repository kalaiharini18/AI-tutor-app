
// Fix: Added missing React import to resolve namespace error
import React from 'react';

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  content: string;
}