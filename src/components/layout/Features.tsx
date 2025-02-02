'use client';

import React from 'react';
import { Shield, Wifi, Building2 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Security Bundle',
      description: 'Advanced firewall and security features to protect your network',
      bgClass: 'bg-blue-50 group-hover:bg-blue-100',
      iconClass: 'text-blue-500'
    },
    {
      icon: Wifi,
      title: 'Wi-Fi Setup',
      description: 'Professional installation and network optimization services',
      bgClass: 'bg-purple-50 group-hover:bg-purple-100',
      iconClass: 'text-purple-500'
    },
    {
      icon: Building2,
      title: 'Enterprise Solutions',
      description: 'Customized plans and solutions for growing businesses',
      bgClass: 'bg-indigo-50 group-hover:bg-indigo-100',
      iconClass: 'text-indigo-500'
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden" id="features">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Enhanced Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience premium features designed to enhance your internet experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* Icon */}
                <div className={`w-14 h-14 mb-6 rounded-xl flex items-center justify-center transition-colors duration-300 ${feature.bgClass}`}>
                  <Icon className={`w-7 h-7 ${feature.iconClass}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>

                {/* Hover Gradient */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-blue-50/50 via-transparent to-purple-50/50" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
