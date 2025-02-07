'use client';

import { Menu, Settings, User } from 'lucide-react';

export function AdminHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-gray-900 text-white shadow-lg z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center space-x-4">
            <button className="p-1 hover:bg-gray-800 rounded-lg">
              <Menu className="w-6 h-6" />
            </button>
            <span className="text-xl font-bold">Admin Dashboard</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-1 hover:bg-gray-800 rounded-lg">
              <Settings className="w-6 h-6" />
            </button>
            <button className="p-1 hover:bg-gray-800 rounded-lg">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
