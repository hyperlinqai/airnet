'use client';

import React, { useEffect, useState } from 'react';
import { Wifi, Check } from 'lucide-react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import PlanSkeleton from '../ui/PlanSkeleton';

interface Plan {
  id: number;
  location: string;
  speed: string;
  price_30_days: number;
  data_limit: string;
  features?: string[];
}

const FeaturedPlans = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('broadbandplans')
          .select('*')
          .eq('location', 'Indore')
          .limit(3);

        if (error) throw error;
        setPlans(data || []);
      } catch (err) {
        console.error('Error fetching plans:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const getDefaultFeatures = (plan: Plan) => [
    `${plan.speed} Download`,
    `${plan.speed} Upload`,
    plan.data_limit,
    'Free Installation',
    'Available in Indore'
  ];

  return (
    <div id="plans" className="w-full py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Featured Plans in Indore
        </h2>
        <p className="text-lg text-gray-600">
          Select the perfect internet plan for your needs in Indore
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {loading ? (
          <>
            <PlanSkeleton />
            <PlanSkeleton />
            <PlanSkeleton />
          </>
        ) : (
          plans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-xl p-6 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-gray-100 relative group transform hover:-translate-y-1 hover:border-[#fc3a6f]/20"
            >
              {/* Speed Icon */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-[#fc3a6f] text-white p-2.5 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Wifi className="w-5 h-5" />
                </div>
              </div>

              {/* Plan Content */}
              <div className="text-center mt-4">
                <h4 className="text-base font-semibold text-gray-900 mb-1">
                  {plan.speed} Plan
                </h4>
                <div className="text-sm text-gray-500 mb-1">
                  {plan.location}
                </div>
                <div className="text-2xl font-bold text-[#fc3a6f] mb-2">
                  {plan.speed}
                </div>
                <div className="text-xl font-bold text-gray-900 mb-4">
                  ₹{plan.price_30_days}
                  <span className="text-sm text-gray-500">/month</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2.5 mt-4 pt-4 text-sm border-t border-gray-100">
                {getDefaultFeatures(plan).map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-600">
                    <Check className="w-4 h-4 text-[#fc3a6f] mr-2.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="text-center mt-12">
        <Link 
          href="/plans"
          className="inline-flex items-center justify-center px-8 py-3 bg-[#fc3a6f] text-white rounded-full font-medium hover:bg-[#fc3a6f] transition-colors"
        >
          View More Plans
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPlans;
