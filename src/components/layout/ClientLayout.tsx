'use client';

import { usePathname } from 'next/navigation';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { useEffect, useState } from 'react';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div suppressHydrationWarning>
      {children}
      {mounted && !isDashboard && <WhatsAppWidget />}
    </div>
  );
}
