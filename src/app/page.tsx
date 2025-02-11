'use client';

import Hero from '@/components/layout/Hero';
import QuickActions from '@/components/layout/QuickActions';
import { QuickButton } from '@/components/Quickbutton';
import Features from '@/components/layout/Features';
import WhyChoose from '@/components/layout/WhyChoose';
import Streaming from '@/components/layout/Streaming';
import Testimonials from '@/components/layout/Testimonials';
import FAQ from '@/components/layout/FAQ';
import KnowledgeBase from '@/components/layout/KnowledgeBase';
import { Check } from '@/components/icons/Check';
import Link from 'next/link';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import FeaturedPlans from '@/components/layout/FeaturedPlans';
import { useState, useEffect } from 'react';
// import { supabase } from '@/lib/supabase';
// import type { Plan } from '@/lib/supabase';

export default function Home() {
  // const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

  return (
    <main className="flex flex-col w-full min-h-screen">
      {/* Header */}
      <Header />

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

        <div className="relative">
          <FeaturedPlans />
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

      {/* Knowledge Base Section */}
      <KnowledgeBase />

      <Footer />
    </main>
  );
}
