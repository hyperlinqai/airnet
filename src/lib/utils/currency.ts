const CURRENCY_FORMATTER = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2
});

export const formatCurrency = (amount: number): string => {
  'use client';
  
  if (typeof window === 'undefined') {
    // Server-side: return a simple format
    return `₹${amount.toFixed(2)}`;
  }
  
  // Client-side: use full formatting
  return CURRENCY_FORMATTER.format(amount);
};

// Convert display format (₹1,234.56) to number (1234.56)
export const parseCurrencyToNumber = (value: string): number => {
  return Number(value.replace(/[^0-9.-]+/g, ''));
};
