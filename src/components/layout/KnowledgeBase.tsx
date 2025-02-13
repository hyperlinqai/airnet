'use client';

import React from 'react';
import { BookOpen, MessageCircle, Phone } from 'lucide-react';

const KnowledgeBase = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(59,130,246,0.08),transparent)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Knowledge Base
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our comprehensive guides and tutorials
          </p>
        </div>

        {/* Support Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Browse Articles */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
              <BookOpen className="w-7 h-7 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Browse Articles</h3>
            <p className="text-gray-600 mb-6">Explore our comprehensive guides and tutorials</p>
            <button className="text-blue-600 font-medium hover:text-blue-700">
              Learn More →
            </button>
          </div>

          {/* Live Chat */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-green-50 rounded-lg flex items-center justify-center mb-6">
              <MessageCircle className="w-7 h-7 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Live Chat</h3>
            <p className="text-gray-600 mb-6">Get instant help from our support team</p>
            <button onClick={() => window.open('https://wa.me/919109153300', '_blank')} className="text-green-600 font-medium hover:text-green-700">
              Start Chat →
            </button>
          </div>

          {/* 24/7 Phone Support */}
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-purple-50 rounded-lg flex items-center justify-center mb-6">
              <Phone className="w-7 h-7 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Phone Support</h3>
            <p className="text-gray-600 mb-6">Call us anytime for assistance</p>
            <a href="tel:+919109153300" className="text-purple-600 font-medium hover:text-purple-700">
              +91 9109153300 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBase;
