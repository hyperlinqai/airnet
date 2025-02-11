'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface SubPageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  showHero?: boolean;
}

const SubPageLayout = ({ 
  children, 
  title, 
  description,
  showHero = true 
}: SubPageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {showHero && (title || description) && (
        <div className="relative pt-32 pb-24">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black" />
          
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

          {/* Content */}
          <div className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                {title && (
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                    <span className="text-white">{title.split(' ')[0]}</span>
                    {title.split(' ').length > 1 && (
                      <>
                        {' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                          {title.split(' ').slice(1).join(' ')}
                        </span>
                      </>
                    )}
                  </h1>
                )}
                {description && (
                  <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-400">
                    {description}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Decorative bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        </div>
      )}

      <main className="flex-grow bg-white">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default SubPageLayout;
