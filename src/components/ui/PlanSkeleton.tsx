import React from 'react';

const PlanSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 animate-pulse">
      <div className="h-8 bg-gray-200 rounded-lg w-1/3 mb-4"></div>
      <div className="h-12 bg-gray-200 rounded-lg w-2/3 mb-6"></div>
      <div className="space-y-3 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-6 bg-gray-200 rounded-lg w-full"></div>
        ))}
      </div>
      <div className="h-12 bg-gray-200 rounded-lg w-full"></div>
    </div>
  );
};

export default PlanSkeleton;
