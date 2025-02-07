import React from 'react';
import Link from 'next/link';

interface FooterSection {
  title: string;
  links: Array<{ name: string; href: string }>;
}

const Footer = () => {
  const sections: FooterSection[] = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
        { name: 'Press', href: '/press' },
      ],
    },
    {
      title: 'Services',
      links: [
        { name: 'Internet Plans', href: '/plans' },
        { name: 'Coverage Map', href: '/coverage' },
        { name: 'Business Solutions', href: '/business' },
        { name: 'Enterprise', href: '/enterprise' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Network Status', href: '/status' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Legal', href: '/legal' },
        { name: 'Login', href: '/auth/login' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-6 md:col-span-1 lg:col-span-1">
            <h2 className="text-2xl font-bold text-white">Airnet360</h2>
            <p className="text-sm leading-6">
              Empowering connectivity through cutting-edge internet solutions.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons */}
              {['facebook', 'twitter', 'instagram'].map((platform) => (
                <Link
                  key={platform}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{platform}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    {/* SVG paths for social icons */}
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Dynamic Sections */}
          {sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Airnet360. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;