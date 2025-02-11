import React from 'react';
import { MapPin, AlertCircle, RefreshCw } from 'lucide-react';

interface CityFilterProps {
  cities: string[];
  selectedCity: string;
  onCityChange: (city: string) => void;
  isLoading?: boolean;
  error?: string | null;
  onRetry?: () => void;
}

const CityFilter = ({ 
  cities, 
  selectedCity, 
  onCityChange,
  isLoading = false,
  error = null,
  onRetry
}: CityFilterProps) => {
  if (error) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-center gap-2 text-red-600 bg-red-50 px-6 py-3 rounded-lg">
          <AlertCircle className="w-5 h-5" />
          <span>{error}</span>
        </div>
        {onRetry && (
          <button
            onClick={onRetry}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
        )}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full font-medium bg-gray-100 animate-pulse"
          >
            <div className="w-4 h-4 rounded-full bg-gray-300" />
            <div className="h-4 w-16 bg-gray-300 rounded" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {cities.map((city) => (
        <button
          key={city}
          onClick={() => onCityChange(city)}
          className={`
            flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all
            ${
              selectedCity === city
                ? 'bg-blue-500 text-white shadow-md scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }
          `}
        >
          <MapPin className={`w-4 h-4 ${selectedCity === city ? 'text-white' : 'text-blue-500'}`} />
          {city}
        </button>
      ))}
    </div>
  );
};

export default CityFilter;
