'use client';

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Depalpur, Madhya Pradesh',
      role: 'Business Owner',
      avatar: '/testimonials/test-1.webp',
      content: 'Airnet360 transformed my business operations. The high-speed connectivity and reliable service have made remote work seamless for my team.',
      rating: 5
    },
    {
      name: 'Amar Gautam',
      location: 'Indore, Madhya Pradesh',
      role: 'Software Developer',
      avatar: '/testimonials/test-2.webp',
      content: 'As a developer working from home, stable internet is crucial. Airnet360 provides exceptional speed and their customer support is always responsive.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      location: 'Mahow, Madhya Pradesh',
      role: 'Digital Content Creator',
      avatar: '/testimonials/test-3.webp',
      content: 'Uploading large video files used to be a nightmare. With Airnet360\'s lightning-fast speeds, I can focus on creating content without worrying about connectivity.',
      rating: 4.8
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < Math.floor(rating)
                ? 'text-yellow-400 fill-yellow-400'
                : index < rating
                ? 'text-yellow-400 fill-yellow-400 opacity-50'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(59,130,246,0.08),transparent)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
            Join thousands of satisfied customers enjoying our high-speed internet
          </p>
          
          {/* Rating Overview */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="bg-white shadow-lg rounded-lg p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  {renderStars(4.8)}
                  <span className="text-gray-900 font-semibold">4.8/5</span>
                </div>
                <p className="text-gray-600">500+ Reviews</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  {renderStars(4.9)}
                  <span className="text-gray-900 font-semibold">4.9/5</span>
                </div>
                <p className="text-gray-600">300+ Reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-lg bg-white shadow-lg border border-gray-100 hover:border-blue-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
