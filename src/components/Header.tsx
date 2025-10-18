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
      setIsScrolled(window.scrollY > 20);
    };
    
    // Only add event listener on client side
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <ClientOnly fallback={
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200 border border-white/30">
                <span className="text-white font-bold text-lg">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                  {personalInfo.name.split(' ')[0]}
                </h1>
                <p className="text-xs text-white/70">Developer & Designer</p>
              </div>
            </Link>
            <div className="hidden lg:flex items-center space-x-2">
              <Link href="/" className="px-4 py-2 rounded-xl font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm">Home</Link>
              <Link href="/about" className="px-4 py-2 rounded-xl font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm">About</Link>
              <Link href="/portfolio" className="px-4 py-2 rounded-xl font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm">Portfolio</Link>
              <Link href="/services" className="px-4 py-2 rounded-xl font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm">Services</Link>
              <Link href="/contact" className="px-4 py-2 rounded-xl font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm">Contact</Link>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="ml-4 px-6 py-2 bg-white/20 text-white rounded-xl font-medium hover:bg-white/30 transition-colors shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/30">Resume</a>
            </div>
            <button className="lg:hidden p-2 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-colors backdrop-blur-sm">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    }>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-2xl' 
          : 'bg-white/5 backdrop-blur-lg border-b border-white/10'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200 border border-white/30">
              <span className="text-white font-bold text-lg">
                {personalInfo.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                {personalInfo.name.split(' ')[0]}
              </h1>
              <p className="text-xs text-white/70">Developer & Designer</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 backdrop-blur-sm ${
                  pathname === item.href
                    ? 'bg-white/20 text-white shadow-lg border border-white/30'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2 bg-white/20 text-white rounded-xl font-medium hover:bg-white/30 transition-colors shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/30"
            >
              Resume
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
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
          <div className="lg:hidden border-t border-white/20 bg-white/10 backdrop-blur-xl">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-medium transition-colors backdrop-blur-sm ${
                    pathname === item.href
                      ? 'bg-white/20 text-white shadow-lg border border-white/30'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mx-4 mt-4 px-4 py-3 bg-white/20 text-white rounded-xl font-medium hover:bg-white/30 transition-colors text-center backdrop-blur-sm border border-white/30"
              >
                Download Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
    </ClientOnly>
  );
}
