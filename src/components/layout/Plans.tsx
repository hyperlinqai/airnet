'use client';

import { ArrowRight, Wifi, Tv, Film, Building2 } from 'lucide-react';
import Link from 'next/link';
import type { Plan } from '@/lib/supabase';

interface PlanCardProps {
  plan: Plan;
  index: number;
}

export const PlanCard: React.FC<PlanCardProps> = ({ plan, index }) => {
  const categoryIcons = {
    DATA: <Wifi className="w-5 h-5" />,
    OTT: <Film className="w-5 h-5" />,
    IPTV: <Tv className="w-5 h-5" />,
    COMMERCIAL: <Building2 className="w-5 h-5" />
  };

  return (
    <div
      className="relative bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8 hover:shadow-lg transition-shadow duration-300"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Category Badge */}
      <div className="flex items-center gap-2 mb-4">
        {categoryIcons[plan.category]}
        <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
          {plan.category}
        </span>
        {plan.is_featured && (
          <span className="inline-flex items-center rounded-full bg-blue-500 px-2 py-1 text-xs font-medium text-white">
            Featured
          </span>
        )}
      </div>

      {/* Plan Name and Speed */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-gray-900">₹{plan.price}</span>
        <span className="text-sm text-gray-500">/month</span>
      </div>
      {plan.original_price && plan.original_price > plan.price && (
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm text-gray-500 line-through">₹{plan.original_price}</span>
          <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
            {Math.round(((plan.original_price - plan.price) / plan.original_price) * 100)}% OFF
          </span>
        </div>
      )}

      {/* Features */}
      <ul className="mt-6 space-y-4">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 text-green-500 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Action Button */}
      <div className="mt-8">
        <button className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
          Get Started
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

interface PlansProps {
  initialPlans: Plan[];
}

export const Plans: React.FC<PlansProps> = ({ initialPlans }) => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose Your Perfect Plan
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            High-speed internet plans tailored to your needs
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-3">
          {initialPlans.map((plan, index) => (
            <PlanCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/plans">
            <button className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-300 rounded-md transition-colors">
              View All Plans
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
