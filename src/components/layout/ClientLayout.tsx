'use client';

import { usePathname } from 'next/navigation';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');

  return (
    <>
      {children}
      {!isDashboard && <WhatsAppWidget />}
    </>
  );
}
