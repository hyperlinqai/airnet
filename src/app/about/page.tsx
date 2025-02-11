'use client';

import React from 'react';
import Image from 'next/image';
import SubPageLayout from '@/components/layout/SubPageLayout';

const AboutPage = () => {
  const milestones = [
    {
      year: '2018',
      title: 'Foundation',
      description: 'Started with a vision to revolutionize internet connectivity in India'
    },
    {
      year: '2020',
      title: 'Expansion',
      description: 'Expanded to multiple cities, bringing high-speed internet to thousands'
    },
    {
      year: '2023',
      title: 'Innovation',
      description: 'Launched cutting-edge fiber technology for enhanced performance'
    },
    {
      year: '2024',
      title: 'Growth',
      description: 'Reached milestone of 5,000+ satisfied customers across 4 cities'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Constantly pushing boundaries to deliver cutting-edge connectivity solutions',
      icon: '🚀'
    },
    {
      title: 'Reliability',
      description: 'Committed to providing stable and consistent service 24/7',
      icon: '⚡'
    },
    {
      title: 'Affordability',
      description: 'Making high-speed internet accessible to everyone through fair pricing',
      icon: '💎'
    },
    {
      title: 'Customer First',
      description: 'Putting our customers at the heart of everything we do',
      icon: '❤️'
    }
  ];

  return (
    <SubPageLayout
      title="About Airnet360"
      description="Our purpose-built full fiber network satisfies the needs of today, and will meet the demand of generations for years to come."
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Experience the magic of tech to serve you the best
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Airnet360, bringing the internet to you beyond expectations. We are India's leading value for money connectivity provider with more than 5 thousand consumers in 4 different cities.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To offer a simple, affordable, reliable, and fair connection to everyone, making high-speed internet accessible across India. We envision a future where digital connectivity empowers every individual and business to thrive in the digital age.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To challenge the status quo by launching first-of-a-kind services and making revolutionary changes to the internet industry. We're committed to delivering innovative solutions while maintaining the highest standards of customer service and network reliability.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
                <div className="w-24 h-24 flex items-center justify-center bg-blue-100 rounded-full">
                  <span className="text-xl font-bold text-blue-600">{milestone.year}</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
};

export default AboutPage;
