'use client';

import { useEffect, useState } from 'react';

interface CurrencyDisplayProps {
  amount: number;
  className?: string;
}

export default function CurrencyDisplay({ amount, className = '' }: CurrencyDisplayProps) {
  // Format the currency consistently between server and client
  const formatted = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(amount);

  return <span className={className}>{formatted}</span>;
}
