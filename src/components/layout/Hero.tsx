'use client';

import React from 'react';
import Link from 'next/link';
import { Wifi, Clock, Zap, ChevronDown, ArrowRight, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToPlans = () => {
    const plansSection = document.getElementById('plans');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      
      {/* Content Container */}
      <div className="relative min-h-screen flex flex-col">
        {/* Top Badge - Adjusted padding */}
        <div className="w-full pt-24 md:pt-28 pb-6 px-4 text-center">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
            <Zap className="w-3.5 h-3.5 mr-1.5" />
            New: Enhanced Coverage Area
          </div>
        </div>

        {/* Main Content Area - Adjusted spacing to compensate */}
        <div className="flex-1 flex items-center px-4 pb-16">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-7 space-y-8">
                {/* Hero Text */}
                <div className="space-y-4 text-center lg:text-left">
                  <h1 className="text-3xl lg:text-5xl font-bold text-white leading-[1.1]">
                    Superfast Internet
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                      For Your Home
                    </span>
                  </h1>
                  <p className="text-lg text-gray-400 max-w-lg mx-auto lg:mx-0">
                    Get blazing-fast internet with plans starting from just ₹400/mo. 
                    Unlimited data and reliable connectivity for your home.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Link
                    href="/plans"
                    className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:gap-3"
                  >
                    View Plans
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="group px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg font-medium backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 border border-white/10 hover:border-blue-500/50"
                  >
                    <MapPin className="w-4 h-4 text-blue-400" />
                    Check Coverage
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-4 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" />
                  </Link>
                </div>
              </div>

              {/* Right Column - Price Display */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-56 h-56 lg:w-64 lg:h-64">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-20 animate-pulse" />
                  <div className="relative h-full rounded-full border-3 border-white/10 backdrop-blur-sm flex items-center justify-center bg-black/50">
                    <div className="text-center p-6">
                      <div className="text-xl font-bold text-white mb-1">Starting at</div>
                      <div className="text-4xl font-bold text-blue-400 mb-1">₹400</div>
                      <div className="text-lg text-gray-400 mb-2">/month</div>
                      <div className="text-base text-blue-400 font-medium">Unlimited Data</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="mt-12 lg:mt-16">
              <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {[
                  { icon: <Wifi className="w-4 h-4" />, title: "Affordable Plans", desc: "From ₹400/month" },
                  { icon: <Clock className="w-4 h-4" />, title: "24/7 Support", desc: "Always available" },
                  { icon: <Zap className="w-4 h-4" />, title: "99.9% Uptime", desc: "Guaranteed reliability" }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                      {feature.icon}
                    </div>
                    <h3 className="text-base font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          onClick={scrollToPlans}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/50 cursor-pointer hover:text-white/70 transition-colors"
        >
          <span className="text-xs mb-1.5">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;