"use client"; 

import React, { useState } from 'react';
import Link from 'next/link';

export default function GooeyNav({ links = [], className = "" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const [activeLink, setActiveLink] = useState(''); 

  return (
    <>
      <svg className="filter-svg" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        <defs>
          <filter id="gooey-orange">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <nav className={`bg-text-dark p-4 shadow-lg ${className}`} style={{ filter: 'url(#gooey-orange)' }}>
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-bg-light hover:text-primary-orange transition-colors duration-200">
              David Arvidsson
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-bg-light focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>

          <div className="hidden lg:flex space-x-6">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`relative text-bg-light hover:text-primary-orange transition-colors duration-200 py-2 px-4 rounded-full ${activeLink === link.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveLink(link.id)}
                onMouseLeave={() => setActiveLink(null)}
              >
                {link.label}
                {activeLink === link.id && (
                  <span className="absolute inset-0 bg-primary-orange rounded-full -z-10 animate-gooey-splash"></span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-text-dark rounded-lg shadow-xl py-2">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="block py-2 px-4 text-bg-light hover:bg-gray-700 hover:text-primary-orange transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)} 
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <style jsx global>{`
        @keyframes gooey-splash {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); opacity: 0; }
        }
        .animate-gooey-splash {
          animation: gooey-splash 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
}