'use client';

import Hero from '@/components/layout/Hero';
import QuickActions from '@/components/layout/QuickActions';
import { QuickButton } from '@/components/Quickbutton';
import Features from '@/components/layout/Features';
import WhyChoose from '@/components/layout/WhyChoose';
import Streaming from '@/components/layout/Streaming';
import Testimonials from '@/components/layout/Testimonials';
import FAQ from '@/components/layout/FAQ';
import { Check } from '@/components/icons/Check';
import Link from 'next/link';

export default function Home() {
  const plans = [
    {
      speed: '100 Mbps',
      price: '499',
      features: ['Unlimited Data', 'Free Installation', 'No Contract'],
    },
    {
      speed: '500 Mbps',
      price: '699',
      features: ['Unlimited Data', 'Free Installation', 'No Contract', 'Priority Support'],
      isPopular: true,
    },
    {
      speed: '1 Gbps',
      price: '999',
      features: ['Unlimited Data', 'Free Installation', 'No Contract', 'Priority Support', '24/7 Tech Support'],
    },
  ];

  return (
    <main className="flex flex-col w-full min-h-screen">
      {/* Hero Section - Full width */}
      <section className="w-full">
        <Hero />
      </section>

      {/* Quick Actions - Full width with max-width content */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-4">
          <QuickActions />
        </div>
      </section>
      
      {/* Plans Section - Full width with background */}
      <section className="w-full relative bg-gray-50">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(29,78,216,0.05),transparent)]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Select the perfect internet plan for your needs. All plans include unlimited data
              and no hidden fees.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {plans.map((plan, index) => (
              <QuickButton
                key={index}
                speed={plan.speed}
                price={plan.price}
                features={plan.features}
                isPopular={plan.isPopular}
              />
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              All plans include free installation and no long-term contracts
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-500" /> 30-day money-back guarantee
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-500" /> 24/7 customer support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Full width with light background */}
      <Features />

      {/* Dark Background Wrapper for WhyChoose and Streaming */}
      <div className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <WhyChoose />
        <Streaming />
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Welcome Section - Full width with centered content */}
      <section className="w-full min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold tracking-tight">
              Welcome to <span className="text-blue-600">Airnet360</span>
            </h1>
            <p className="text-xl text-gray-600">
              Your modern web application platform for seamless digital experiences
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/about"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
              <Link
                href="#features"
                className="px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
              >
                View Features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
