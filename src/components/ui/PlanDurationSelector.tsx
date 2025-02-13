import React from 'react';
import { twMerge } from 'tailwind-merge';

interface PlanDurationSelectorProps {
  selectedDuration: string;
  onDurationChange: (duration: string) => void;
}

const durations = [
  { label: '1 MONTH', value: '1', discount: null },
  { label: '3 MONTHS', value: '3', discount: null },
  { label: '6 MONTHS', value: '6', discount: '7.5%' },
  { label: '12 MONTHS', value: '12', discount: '15%' },
];

const PlanDurationSelector = ({
  selectedDuration,
  onDurationChange,
}: PlanDurationSelectorProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {durations.map(({ label, value, discount }) => (
        <button
          key={value}
          onClick={() => onDurationChange(value)}
          className={twMerge(
            'px-4 py-2 rounded-full text-sm font-medium transition-colors',
            selectedDuration === value
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          )}
        >
          <span>{label}</span>
          {discount && (
            <span className="ml-2 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
              SAVE {discount}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default PlanDurationSelector;
