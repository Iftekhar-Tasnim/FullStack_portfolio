'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { personalInfo } from '@/data/personal';
import ClientOnly from './ClientOnly';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };
    
    // Only add event listener on client side
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen) {
        const target = event.target as Element;
        if (!target.closest('header')) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    if (typeof window !== 'undefined') {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <ClientOnly fallback={
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        <div className="mt-6 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-xl px-8 py-4 transition-all duration-300">
          <div className="flex items-center justify-between w-full max-w-4xl">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-lg">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-800 group-hover:text-gray-600 transition-colors">
                  {personalInfo.name.split(' ')[0]}
                </h1>
                <p className="text-xs text-gray-500">Developer & Designer</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 rounded-xl font-medium text-gray-600 hover:text-gray-800 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Talk To Us Button */}
            <a
              href="/contact"
              className="px-6 py-3 bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-700 transition-colors shadow-lg"
            >
              Talk To Us
            </a>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    }>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        <div className={`mt-6 backdrop-blur-md rounded-2xl border shadow-xl px-8 py-4 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 border-gray-300 shadow-2xl scale-105' 
            : 'bg-white/90 border-gray-200 shadow-lg'
        }`}>
          <div className="flex items-center justify-between w-full max-w-4xl">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-lg">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-800 group-hover:text-gray-600 transition-colors">
                  {personalInfo.name.split(' ')[0]}
                </h1>
                <p className="text-xs text-gray-500">Developer & Designer</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-gray-800 bg-gray-100'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Talk To Us Button */}
            <a
              href="/contact"
              className="px-6 py-3 bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-700 transition-colors shadow-lg"
            >
              Talk To Us
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  setIsMobileMenuOpen(false);
                }
              }}
              className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                      pathname === item.href
                        ? 'text-gray-800 bg-gray-100'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block mt-4 px-4 py-3 bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-700 transition-colors text-center"
                >
                  Talk To Us
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </ClientOnly>
  );
}