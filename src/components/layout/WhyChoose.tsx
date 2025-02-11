'use client';

import React from 'react';
import { Clock, HeadphonesIcon, BanknoteIcon, CheckCircle2 } from 'lucide-react';

const WhyChoose = () => {
  const features = [
    {
      icon: Clock,
      title: '99.9% Uptime',
      description: 'Reliable connection guaranteed with our state-of-the-art infrastructure',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Local Support',
      description: 'Expert technical assistance available round the clock',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: BanknoteIcon,
      title: 'No Hidden Fees',
      description: 'Transparent pricing with no surprise charges',
      gradient: 'from-indigo-500 to-indigo-600'
    }
  ];

  const stats = [
    {
      value: '4k+',
      label: 'Happy Customers',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      value: '8+',
      label: 'Years of Service',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      value: '20+',
      label: 'Cities Covered',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      value: '24/7',
      label: 'Customer Support',
      gradient: 'from-blue-500 to-blue-600'
    }
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(59,130,246,0.15),transparent)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Airnet360?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-8">
            Experience the difference with our premium internet service
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-lg bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-blue-500/20 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon with gradient background */}
                <div className="relative mb-4">
                  <div className={`absolute -inset-1 rounded-lg bg-gradient-to-r ${feature.gradient} opacity-10 blur-lg group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className={`relative w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r ${feature.gradient}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-lg bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-blue-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`absolute -inset-px rounded-lg bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-base text-gray-300">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
