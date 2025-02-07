'use client';

import React from 'react';
import { Check, Zap, ArrowRight } from 'lucide-react';
import CurrencyDisplay from '@/components/ui/CurrencyDisplay';

interface QuickButtonProps {
  speed: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export const QuickButton: React.FC<QuickButtonProps> = ({
  speed,
  price,
  features,
  isPopular = false,
}) => {
  return (
    <div className={`group relative p-8 rounded-2xl border transition-all duration-500 hover:scale-105 ${
      isPopular 
        ? 'bg-gradient-to-br from-blue-600 to-blue-700 border-blue-400/30 shadow-xl shadow-blue-500/20' 
        : 'bg-white border-gray-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5'
    }`}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-400 blur-sm opacity-50" />
            <span className="relative px-4 py-1 bg-blue-400 rounded-full text-sm font-medium text-white">
              Most Popular
            </span>
          </div>
        </div>
      )}

      {/* Speed Icon */}
      <div className={`w-12 h-12 mx-auto mb-6 rounded-lg flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${
        isPopular ? 'bg-white/20' : 'bg-blue-50'
      }`}>
        <Zap className={`w-6 h-6 ${isPopular ? 'text-white' : 'text-blue-500'}`} />
      </div>
      
      {/* Plan Details */}
      <div className="text-center space-y-6">
        {/* Speed */}
        <div className="space-y-1">
          <h3 className={`text-2xl font-bold ${isPopular ? 'text-white' : 'text-gray-900'}`}>
            {speed}
          </h3>
          <div className={isPopular ? 'text-blue-100' : 'text-gray-500'}>
            Download Speed
          </div>
        </div>
        
        {/* Price */}
        <div className={`text-4xl font-bold ${isPopular ? 'text-white' : 'text-gray-900'}`}>
          <CurrencyDisplay amount={Number(price)} />
          <span className={`text-base font-normal ${isPopular ? 'text-blue-100' : 'text-gray-500'}`}>
            /month
          </span>
        </div>
        
        {/* Features */}
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className={`flex items-center gap-2 ${
                isPopular ? 'text-blue-50' : 'text-gray-600'
              }`}
            >
              <div className={`flex-shrink-0 rounded-full p-1 ${
                isPopular ? 'bg-blue-400/20' : 'bg-blue-50'
              }`}>
                <Check className={`w-3 h-3 ${
                  isPopular ? 'text-blue-200' : 'text-blue-500'
                }`} />
              </div>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          className={`group/btn w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
            isPopular
              ? 'bg-white text-blue-600 hover:bg-blue-50'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Get Started
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </div>

      {/* Hover Gradient Effect */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
        isPopular
          ? 'bg-gradient-to-r from-blue-400/10 via-white/5 to-blue-400/10'
          : 'bg-gradient-to-r from-blue-50/50 via-transparent to-blue-50/50'
      }`} />
    </div>
  );
};

const QuickActions = () => {
    return (
      <section id="quickActions" className="relative py-8 bg-gradient-to-br from-slate-50 to-white z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-8 transform transition-all duration-500 hover:shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Check Coverage */}
              <div className="quick-action-card group" data-action="coverage">
                <button className="w-full h-full p-6 rounded-2xl bg-gradient-to-br from-blue-50 via-blue-100/30 to-transparent border border-blue-100 hover:border-blue-300 transition-all duration-300 flex flex-col items-center gap-4 hover:transform hover:scale-[1.02] hover:shadow-lg">
                  <div className="icon-wrapper p-3 rounded-xl bg-blue-100/50 group-hover:bg-blue-200/50 transition-colors duration-300">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0m-6 8a9 9 0 01-9 9v1a3 3 0 01-3 3h18a3 3 0 01-3-3v-1a9 9 0 012 9z"></path>
                    </svg>
                  </div>
                  <span className="font-medium text-blue-900">Check Coverage</span>
                </button>
              </div>
  
              {/* Pay Bill */}
              <div className="quick-action-card group" data-action="payment">
                <a href="#" className="w-full h-full p-6 rounded-2xl bg-gradient-to-br from-emerald-50 via-emerald-100/30 to-transparent border border-emerald-100 hover:border-emerald-300 transition-all duration-300 flex flex-col items-center gap-4 hover:transform hover:scale-[1.02] hover:shadow-lg">
                  <div className="icon-wrapper p-3 rounded-xl bg-emerald-100/50 group-hover:bg-emerald-200/50 transition-colors duration-300">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <span className="font-medium text-emerald-900">Pay Bill</span>
                </a>
              </div>
  
              {/* Track Service */}
              <div className="quick-action-card group" data-action="tracking">
                <button className="w-full h-full p-6 rounded-2xl bg-gradient-to-br from-violet-50 via-violet-100/30 to-transparent border border-violet-100 hover:border-violet-300 transition-all duration-300 flex flex-col items-center gap-4 hover:transform hover:scale-[1.02] hover:shadow-lg">
                  <div className="icon-wrapper p-3 rounded-xl bg-violet-100/50 group-hover:bg-violet-200/50 transition-colors duration-300">
                    <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                    </svg>
                  </div>
                  <span className="font-medium text-violet-900">Track Service</span>
                </button>
              </div>
  
              {/* Live Chat */}
              <div className="quick-action-card group" data-action="chat">
                <button className="w-full h-full p-6 rounded-2xl bg-gradient-to-br from-amber-50 via-amber-100/30 to-transparent border border-amber-100 hover:border-amber-300 transition-all duration-300 flex flex-col items-center gap-4 hover:transform hover:scale-[1.02] hover:shadow-lg">
                  <div className="icon-wrapper p-3 rounded-xl bg-amber-100/50 group-hover:bg-amber-200/50 transition-colors duration-300">
                    <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                  </div>
                  <span className="font-medium text-amber-900">Live Chat</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default QuickActions;