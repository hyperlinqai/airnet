'use client';

import { ReactNode } from 'react';
import { AdminHeader } from './AdminHeader';

interface AdminLayoutProps {
  children: ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminHeader />
      <main className="pt-16 min-h-screen">
        {children}
      </main>
    </div>
  );
}
