import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationSelectorProps {
  locations: string[];
  selectedLocation: string;
  onLocationChange: (location: string) => void;
}

const LocationSelector = ({
  locations,
  selectedLocation,
  onLocationChange,
}: LocationSelectorProps) => {
  return (
    <div className="relative inline-block">
      <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 hover:border-blue-500 transition-colors">
        <MapPin className="w-5 h-5 text-blue-500" />
        <select
          value={selectedLocation}
          onChange={(e) => onLocationChange(e.target.value)}
          className="appearance-none bg-transparent pr-8 focus:outline-none text-gray-700 font-medium"
        >
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LocationSelector;
