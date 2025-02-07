'use client';

import { ReactNode } from 'react';
import { AuthCard } from '@/components/auth/AuthCard';

interface AuthLayoutProps {
  children: React.ReactNode;
}

interface RouteConfig {
  [key: string]: {
    title: string;
    description?: string;
  };
}

const routeConfig: RouteConfig = {
  '/auth/login': {
    title: 'Sign in to your account',
    description: 'Welcome back! Please enter your details.',
  },
  '/auth/register': {
    title: 'Create an account',
    description: 'Get started with Airnet360.',
  },
  '/auth/forgot-password': {
    title: 'Forgot password',
    description: 'Enter your email and we'll send you a reset link.',
  },
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <AuthCard
      title="Welcome to Airnet360"
      description="Please sign in to continue"
    >
      {children}
    </AuthCard>
  );
}
