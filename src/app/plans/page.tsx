'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import PlanDurationSelector from '@/components/ui/PlanDurationSelector';
import CityFilter from '@/components/ui/CityFilter';
import SubPageLayout from '@/components/layout/SubPageLayout';
import { Wifi, Download, Upload, Clock, Check, MapPin, ChevronDown } from 'lucide-react';

interface Plan {
  id: number;
  location: string;
  speed: string;
  price_30_days: number;
  price_90_days: number;
  price_180_days: number;
  price_365_days: number;
  data_limit: string;
}

const PlansPage = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState('1');
  const [selectedCity, setSelectedCity] = useState('Indore');
  const [cities, setCities] = useState<string[]>(['Indore']);
  const [citiesLoading, setCitiesLoading] = useState(true);
  const [citiesError, setCitiesError] = useState<string | null>(null);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);

  const fetchCities = async () => {
    try {
      setCitiesLoading(true);
      setCitiesError(null);

      // Get all locations first
      const { data, error } = await supabase
        .from('broadbandplans')
        .select('location');

      if (error) throw error;
      if (data) {
        // Then extract unique cities
        const uniqueCities = Array.from(new Set(data.map(item => item.location)));
        setCities(uniqueCities);

        // If current selected city is not in the list, select the first city
        if (!uniqueCities.includes(selectedCity) && uniqueCities.length > 0) {
          setSelectedCity(uniqueCities[0]);
        }
      }
    } catch (err: any) {
      console.error('Error fetching cities:', err);
      setCitiesError('Failed to load cities. Please try again.');
    } finally {
      setCitiesLoading(false);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data, error } = await supabase
          .from('broadbandplans')
          .select('*')
          .eq('location', selectedCity);

        if (error) throw error;
        setPlans(data || []);
      } catch (err) {
        setError('Failed to load plans. Please try again later.');
        console.error('Error fetching plans:', err);
      } finally {
        setLoading(false);
      }
    };

    if (selectedCity) {
      fetchPlans();
    }
  }, [selectedCity]);

  const getPriceForDuration = (plan: Plan, duration: string) => {
    switch (duration) {
      case '3':
        return plan.price_90_days / 3;
      case '6':
        return plan.price_180_days / 6;
      case '12':
        return plan.price_365_days / 12;
      default:
        return plan.price_30_days;
    }
  };

  const getSpeedValue = (speed: string) => {
    return parseInt(speed.replace(/[^0-9]/g, ''));
  };

  const toggleCityDropdown = () => {
    setIsCityDropdownOpen(!isCityDropdownOpen);
  };

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setIsCityDropdownOpen(false);
  };

  return (
    <SubPageLayout
      title="Internet Plans"
      description="Choose the perfect internet plan for your needs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          {/* City Filter */}
          <div className="flex justify-center items-center gap-4 mb-12">
            <div className="relative inline-block">
              <button
                onClick={toggleCityDropdown}
                className="flex items-center gap-2 bg-[#fc3a6f] text-white px-6 py-2 rounded-full hover:bg-[#e62e61] transition-colors"
              >
                <MapPin className="w-4 h-4" />
                {selectedCity || 'Select City'}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCityDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown */}
              {isCityDropdownOpen && (
                <div className="absolute z-50 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100">
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => handleCitySelect(city)}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-[#fc3a6f]/10 hover:text-[#fc3a6f] transition-colors"
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <h2 className="text-xl text-gray-600 mb-8">
            All new Truly Unlimited Fiber Broadband plans for{' '}
            <span className="border-b-2 border-[#fc3a6f]">{selectedCity}</span>
          </h2>
          <p className="text-gray-600 mb-8">
            With Internet speeds up to 500 Mbps - there's a speed that's perfect for every budget and every digital lifestyle.
          </p>

          {/* Plan Type Selector */}
          <div className="flex justify-center gap-4 mb-8">
            <button className="bg-[#fc3a6f] text-white px-6 py-2 rounded-full font-medium hover:bg-[#fc3a6f] transition-colors">
              RESIDENTIAL
            </button>
          </div>

          {/* Duration Selector */}
          <PlanDurationSelector
            selectedDuration={selectedDuration}
            onDurationChange={setSelectedDuration}
          />
        </div>

        {/* Plans Grid */}
        <div className="mt-12">
          {/* <h3 className="text-xl font-semibold text-gray-900 mb-6">DATA Plans</h3> */}
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="animate-pulse bg-white rounded-xl p-6">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-red-500">
              <p>{error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
              {plans.map((plan) => {
                const monthlyPrice = getPriceForDuration(plan, selectedDuration);
                const speedValue = getSpeedValue(plan.speed);
                
                return (
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
                        {speedValue >= 200 ? 'PREMIUM' : speedValue >= 100 ? 'PRO' : 'START UP'}
                      </h4>
                      <div className="text-2xl font-bold text-[#fc3a6f] mb-2">
                        {plan.speed}
                      </div>
                      <div className="text-xl font-bold text-gray-900 mb-1">
                        ₹{Math.round(monthlyPrice)}
                        <span className="text-sm text-gray-500">/month</span>
                      </div>
                      {selectedDuration !== '1' && (
                        <div className="text-xs text-[#fc3a6f] mb-3">
                          Save up to {selectedDuration === '12' ? '15%' : selectedDuration === '6' ? '7.5%' : '0%'}
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div className="space-y-2.5 mt-5 border-t border-gray-100 pt-5 text-sm">
                      <div className="flex items-center text-gray-600 hover:text-[#fc3a6f] transition-colors duration-200">
                        <Download className="w-4 h-4 text-[#fc3a6f] mr-2.5 flex-shrink-0" />
                        <span>{plan.speed} Download</span>
                      </div>
                      <div className="flex items-center text-gray-600 hover:text-[#fc3a6f] transition-colors duration-200">
                        <Upload className="w-4 h-4 text-[#fc3a6f] mr-2.5 flex-shrink-0" />
                        <span>{plan.speed} Upload</span>
                      </div>
                      <div className="flex items-center text-gray-600 hover:text-[#fc3a6f] transition-colors duration-200">
                        <Check className="w-4 h-4 text-[#fc3a6f] mr-2.5 flex-shrink-0" />
                        <span>{plan.data_limit}</span>
                      </div>
                      <div className="flex items-center text-gray-600 hover:text-[#fc3a6f] transition-colors duration-200">
                        <Clock className="w-4 h-4 text-[#fc3a6f] mr-2.5 flex-shrink-0" />
                        <span>{selectedDuration} Month Plan</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-[#fc3a6f] hover:bg-[#e62e61] text-white py-3 px-6 rounded-lg mt-6 transition-colors">
                      Choose Plan
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            * All plans come with truly unlimited data with no FUP limits
          </p>
          <p className="text-gray-600">
            * Installation charges may apply for new connections
          </p>
        </div>
      </div>
    </SubPageLayout>
  );
};

export default PlansPage;
