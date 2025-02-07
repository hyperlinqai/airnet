'use client';

import { ReactNode, useState } from 'react';
import { DashboardHeader } from './DashboardHeader';
import { DashboardSidebar } from './DashboardSidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <main className="lg:pl-64">
        <div className="pt-16">
          {children}
        </div>
      </main>
    </div>
  );
}
