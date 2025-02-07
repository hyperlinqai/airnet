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
              <NavLink href="/services" isScrolled={isScrolled}>Services</NavLink>
              <NavLink href="/coverage" isScrolled={isScrolled}>Coverage</NavLink>
              <NavLink href="/features" isScrolled={isScrolled}>Features</NavLink>
              <NavLink href="/support" isScrolled={isScrolled}>Support</NavLink>
              <Link 
                href="/get-started" 
                className={`ml-6 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40'
                    : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
                }`}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-colors hover:bg-gray-100/10"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-4 space-y-1 ${
          isScrolled ? 'bg-white/[0.96]' : 'bg-gray-900/90 backdrop-blur-lg'
        }`}>
          <MobileNavLink href="/" isScrolled={isScrolled}>Home</MobileNavLink>
          <MobileNavLink href="/services" isScrolled={isScrolled}>Services</MobileNavLink>
          <MobileNavLink href="/coverage" isScrolled={isScrolled}>Coverage</MobileNavLink>
          <MobileNavLink href="/features" isScrolled={isScrolled}>Features</MobileNavLink>
          <MobileNavLink href="/support" isScrolled={isScrolled}>Support</MobileNavLink>
          <div className="pt-2">
            <Link 
              href="/get-started" 
              className={`block w-full px-4 py-3 rounded-lg font-medium text-sm text-center transition-all ${
                isScrolled
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Get Started
            </Link>
          </div>
        </div>
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