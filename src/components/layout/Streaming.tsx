'use client';

import React from 'react';
import Image from 'next/image';

const Streaming = () => {
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
            Enjoy Superfast Streaming with Airnet360
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-8">
            Watch unlimited premium OTT shows, movies and originals in one place.
            It's truly entertainment anytime, anywhere.
          </p>
        </div>

        {/* Streaming Platforms Image */}
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/ott/streaming-platforms.png"
              alt="Streaming Platforms including Netflix, Amazon Prime, Disney+ Hotstar, and more"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
            Explore All Platforms
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Streaming;
