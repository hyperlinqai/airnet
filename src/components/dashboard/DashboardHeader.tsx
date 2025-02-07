'use client';

import Link from 'next/link';
import { Bell, Menu } from 'lucide-react';

interface DashboardHeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function DashboardHeader({ sidebarOpen, setSidebarOpen }: DashboardHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-30">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Menu className="h-5 w-5 text-gray-600" />
          </button>
          <Link href="/dashboard" className="flex items-center">
            <span className="text-xl font-bold text-gray-900">AirNet360</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-2">
            {[
              { href: '/dashboard', label: 'Overview' },
              { href: '/dashboard/plans', label: 'Plans' },
              { href: '/dashboard/users', label: 'Users' },
              { href: '/dashboard/settings', label: 'Settings' }
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-3 border-l pl-4">
            <button 
              className="p-2 rounded-lg hover:bg-gray-50 relative transition-colors"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full" />
            </button>
            <button className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium hover:bg-blue-700 transition-colors">
              SK
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
