'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/[0.96] text-gray-900 shadow-lg' : 'bg-transparent text-white'
    }`}>
      {/* Gradient line */}
      <div className={`absolute bottom-0 left-0 right-0 h-[1px] transition-opacity duration-300 ${
        isScrolled ? 'opacity-0' : 'opacity-100 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent'
      }`} />
      
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-30 md:h-30 py-4">
            {/* Logo */}
            <Link 
              href="/" 
              className="relative group flex items-center"
            >
              <img
                src="/airnet-logo.png"
                alt="Airnet360 Logo"
                className="h-8 md:h-10 w-auto transition-opacity duration-300 hover:opacity-90"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink href="/" isScrolled={isScrolled}>Home</NavLink>
              <NavLink href="/about" isScrolled={isScrolled}>About</NavLink>
              <NavLink href="/plans" isScrolled={isScrolled}>Plans</NavLink>
              <Link 
                href="/contact" 
                className={`ml-2 px-4 py-2 rounded-lg bg-[#fc3a6f] text-white hover:bg-[#e62e61] transition-colors ${
                  isScrolled ? 'shadow-sm' : 'shadow-lg'
                }`}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg focus:outline-none ${
                  isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink href="/" isScrolled={isScrolled}>Home</MobileNavLink>
              <MobileNavLink href="/about" isScrolled={isScrolled}>About</MobileNavLink>
              <MobileNavLink href="/plans" isScrolled={isScrolled}>Plans</MobileNavLink>
              <Link
                href="/get-started"
                className="block w-full text-center px-4 py-2 mt-2 rounded-lg bg-[#fc3a6f] text-white hover:bg-[#e62e61] transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// NavLink component for consistent styling
const NavLink = ({ href, children, isScrolled }: { href: string; children: React.ReactNode; isScrolled: boolean }) => (
  <Link 
    href={href} 
    className={`relative px-3 py-2 text-sm font-medium transition-colors group ${
      isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-gray-200 hover:text-white'
    }`}
  >
    {children}
    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
  </Link>
);

// Mobile NavLink component
const MobileNavLink = ({ href, children, isScrolled }: { href: string; children: React.ReactNode; isScrolled: boolean }) => (
  <Link 
    href={href} 
    className={`block px-4 py-2 text-base font-medium rounded-lg transition-colors ${
      isScrolled 
        ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' 
        : 'text-gray-200 hover:text-white hover:bg-white/10'
    }`}
  >
    {children}
  </Link>
);

export default Header;