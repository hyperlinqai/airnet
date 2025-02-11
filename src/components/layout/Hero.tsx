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
    <section className="min-h-screen pt-16 md:pt-20">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center px-4 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto flex flex-col">
            {/* Main Content */}
            <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-12 py-12">
              {/* Left Column */}
              <div className="flex-1 text-center lg:text-left space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
                  <Zap className="w-4 h-4 mr-2" />
                  New: Enhanced Coverage Area
                </div>
                
                {/* Headings */}
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-bold text-white">
                    Experience Next-Gen
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"> Internet</span>
                  </h1>
                  <p className="text-xl text-gray-400 max-w-xl">
                    Unleash the power of gigabit speeds with unlimited data and 
                    industry-leading reliability for your home or business.
                  </p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4 max-w-3xl mx-auto">
                  {[
                    { icon: <Wifi className="w-5 h-5" />, title: "Gigabit Speeds", desc: "Up to 1000 Mbps" },
                    { icon: <Clock className="w-5 h-5" />, title: "24/7 Support", desc: "Always available" },
                    { icon: <Zap className="w-5 h-5" />, title: "99.9% Uptime", desc: "Guaranteed reliability" }
                  ].map((feature, index) => (
                    <div 
                      key={index}
                      className="flex flex-col items-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-2">
                        {feature.icon}
                      </div>
                      <h3 className="text-base font-medium text-white whitespace-nowrap">{feature.title}</h3>
                      <p className="text-sm text-gray-400 text-center whitespace-nowrap">{feature.desc}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4 mb-16">
                  <Link
                    href="/plans"
                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/25 hover:gap-3"
                  >
                    View Plans
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="group px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-lg font-medium backdrop-blur-sm transition-all duration-300 flex items-center gap-2 border border-white/10 hover:border-blue-500/50 hover:gap-3"
                  >
                    <MapPin className="w-5 h-5 text-blue-400" />
                    Check Coverage
                    <ArrowRight className="w-5 h-5 opacity-0 -ml-4 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" />
                  </Link>
                </div>
              </div>

              {/* Right Column - Speed Indicator */}
              <div className="flex-1 flex justify-center">
                <div className="relative w-64 h-64 lg:w-72 lg:h-72">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-20 animate-pulse" />
                  <div className="relative h-full rounded-full border-4 border-white/10 backdrop-blur-sm flex items-center justify-center bg-black/50">
                    <div className="text-center">
                      <div className="text-6xl lg:text-7xl font-bold text-white mb-2">1</div>
                      <div className="text-xl lg:text-2xl font-medium text-gray-400">Gbps</div>
                      <div className="mt-4 text-sm text-blue-400">Starting from ₹400/mo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          onClick={scrollToPlans}
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/50 cursor-pointer hover:text-white/70 transition-colors"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;