'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import type { Plan } from '@/lib/supabase';
import { PlanCard } from '@/components/layout/Plans';
import { Search, Wifi, Tv, Film, Building2 } from 'lucide-react';

export default function PlansPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [sortBy, setSortBy] = useState<'price_asc' | 'price_desc'>('price_asc');
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'DATA' | 'OTT' | 'IPTV' | 'COMMERCIAL'>('ALL');

  useEffect(() => {
    fetchPlans();
  }, [sortBy]);

  const fetchPlans = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('plans')
        .select('*')
        .order('price', { ascending: sortBy === 'price_asc' });

      if (error) throw error;
      if (data) setPlans(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredPlans = plans.filter(plan => {
    const matchesSearch = plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plan.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = plan.price >= priceRange[0] && plan.price <= priceRange[1];
    const matchesCategory = selectedCategory === 'ALL' || plan.category === selectedCategory;
    return matchesSearch && matchesPrice && matchesCategory;
  });

  const CategoryButton = ({ category, icon: Icon }: { category: typeof selectedCategory, icon: any }) => (
    <button
      onClick={() => setSelectedCategory(category)}
      className={`flex items-center px-4 py-2 rounded-lg ${
        selectedCategory === category
          ? 'bg-blue-100 text-blue-700'
          : 'bg-white text-gray-700 hover:bg-gray-50'
      }`}
    >
      <Icon className="w-5 h-5 mr-2" />
      {category === 'ALL' ? 'All Plans' : `${category} Plans`}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">All Plans</h1>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-4 mb-8">
            <CategoryButton category="ALL" icon={Wifi} />
            <CategoryButton category="DATA" icon={Wifi} />
            <CategoryButton category="COMMERCIAL" icon={Building2} />
            <CategoryButton category="OTT" icon={Film} />
            <CategoryButton category="IPTV" icon={Tv} />
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search plans..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price Range (Up to ₹{priceRange[1].toLocaleString()})
                </label>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                  className="w-full"
                />
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'price_asc' | 'price_desc')}
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Plans Grid */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-8">{error}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPlans.map((plan, index) => (
                <PlanCard key={plan.id} plan={plan} index={index} />
              ))}
            </div>
          )}

          {/* No Results */}
          {!loading && !error && filteredPlans.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No plans found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
