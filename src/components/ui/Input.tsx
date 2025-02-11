import React from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  textarea?: boolean;
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ className, label, error, textarea, icon, ...props }, ref) => {
    const Component = textarea ? 'textarea' : 'input';
    
    return (
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {icon}
            </div>
          )}
          <Component
            ref={ref as any}
            className={twMerge(
              'w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors',
              error ? 'border-red-500' : 'border-gray-300',
              textarea ? 'min-h-[120px]' : '',
              icon ? 'pl-10' : '', // Add left padding when icon is present
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
