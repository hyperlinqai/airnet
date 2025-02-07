'use client';

import { useEffect, useState } from 'react';

interface CurrencyDisplayProps {
  amount: number;
  className?: string;
}

export default function CurrencyDisplay({ amount, className = '' }: CurrencyDisplayProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Server-side or initial render: return a simple format
    return <span className={className}>₹{amount}</span>;
  }

  // Client-side: use full formatting
  const formatted = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(amount);

  return <span className={className}>{formatted}</span>;
}
